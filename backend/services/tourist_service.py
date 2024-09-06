from schemas.visa_schema import VisaSchema
from repositories.tourist_repository import TouristRepositoary
from models.visa_model import VisaModel
import boto3
from fastapi import FastAPI, File, UploadFile, HTTPException
from botocore.exceptions import NoCredentialsError
from typing import List
import uuid
from core.config import settings
import os,tempfile

s3 = boto3.client(
    's3', 
    aws_access_key_id=settings.aws_access_key_id, 
    aws_secret_access_key=settings.aws_secret_access_key, 
    region_name=settings.aws_region
)

s3_bucket_name = settings.s3_bucket_name

class TouristService:

    @staticmethod
    async def upload_to_s3(file: UploadFile, userEmail: str, file_type: str):
        try:
            # Use a temporary file to store the uploaded file content
            with tempfile.NamedTemporaryFile(delete=False) as tmp_file:
                file_location = tmp_file.name  # Temp file path
                # Write the uploaded file's content to the temp file
                content = await file.read()
                tmp_file.write(content)

            # Generate a unique file name for S3 to avoid collisions
            s3_file_name = f"{userEmail}_{file_type}_{file.filename}"

            # Upload the file to S3
            s3.upload_file(
                file_location,  # Path to the file on disk
                s3_bucket_name,  # S3 bucket name
                s3_file_name  # S3 file name (unique)
            )

            # Remove the temporary file after upload
            os.remove(file_location)

            # Return the S3 file URL
            file_url = f"https://{s3_bucket_name}.s3.{settings.aws_region}.amazonaws.com/{s3_file_name}"
            return {"message": "File uploaded successfully", "file_url": file_url}

        except NoCredentialsError:
            raise HTTPException(status_code=400, detail="AWS credentials not found")

        except Exception as e:
            raise HTTPException(status_code=500, detail=f"File upload failed: {str(e)}")


    @staticmethod
    async def save_visa(visa_data:VisaSchema,photo: UploadFile = File(...), firstPageOfPassPort: UploadFile = File(...), 
                  financialProofDoc: UploadFile = File(...), travelHistory: UploadFile = File(...)):

        photo_url = await TouristService.upload_to_s3(photo, s3_bucket_name, "photo")
        first_page_url =await TouristService.upload_to_s3(firstPageOfPassPort, visa_data['userEmail'], "pass_port_first_page")
        financial_proof_url =await TouristService.upload_to_s3(financialProofDoc, visa_data['userEmail'], "financial_proof")
        travel_history_url =await TouristService.upload_to_s3(travelHistory, visa_data['userEmail'], "travel_history")

        visa_data['docSet']['photo'] = photo_url
        visa_data['docSet']['firstPageOfPassPort'] = first_page_url
        visa_data['docSet']['financialProofDoc'] = financial_proof_url
        visa_data['docSet']['travelHistory'] = travel_history_url

        return TouristRepositoary.create(visa_data)
    
    @staticmethod
    async def get_all():
        visas = await TouristRepositoary.get_all()
        return [VisaSchema(**visa.dict()) for visa in visas]
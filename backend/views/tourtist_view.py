from fastapi import APIRouter, Depends, HTTPException, status,File,UploadFile,Form
from fastapi.security import OAuth2PasswordRequestForm
from fastapi.responses import JSONResponse
from schemas.visa_schema import VisaSchema
from schemas.rag_schema import RagReqSchema
from schemas.rag_schema import RagResSchema
from services.tourist_service import TouristService
from services.auth_service import AuthService
from typing import List
from rag.rag_maya import run_conversation

router = APIRouter()

async def get_current_user(token: str = Depends(AuthService.get_user_from_token)):
    if token is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Could not validate credentials",
            headers={"WWW-Authenticate": "Bearer"},
        )
    return token

@router.post('/save-visa', response_model=dict)
async def save_visa(
    userEmail: str = Form(...),
    visaCategory: str = Form(...),
    surName: str = Form(...),
    otherName: str = Form(...),
    title: str = Form(...),
    dob: str = Form(...),
    gender: str = Form(...),
    nationality: str = Form(...),
    passport: str = Form(...),
    country_of_birth: str = Form(...),
    occupation: str = Form(...),
    applied_date: str = Form(...),
    whereYouHaveBeenForLast14Days: str = Form(...),
    visaRequiredNoOfDays: str = Form(...),
    arrivalDate: str = Form(...),
    purposeOfVisa: str = Form(...),
    portOfDepature: str = Form(...),
    airlinevessel: str = Form(...),
    flightVesselNo: str = Form(...),
    addressLine1: str = Form(...),
    addressLine2: str = Form(...),
    city: str = Form(...),
    country: str = Form(...),
    zip_postal_code: str = Form(...),
    email: str = Form(...),
    telephone_number: str = Form(...),
    mobile_number: str = Form(...),
    address_in_sl: str = Form(...),
    # Files
    photo: UploadFile = File(...),
    firstPageOfPassPort: UploadFile = File(...),
    financialProofDoc: UploadFile = File(...),
    travelHistory: UploadFile = File(...),
    user: str = Depends(get_current_user)
):
    # Gather form and file data
    persInfo = {
        "surName": surName,
        "otherName": otherName,
        "title": title,
        "dob": dob,
        "gender": gender,
        "nationality": nationality,
        "passport": passport,
        "country_of_birth": country_of_birth,
        "occupation": occupation,
        "applied_date": applied_date,
    }

    travInfo = {
        "whereYouHaveBeenForLast14Days": whereYouHaveBeenForLast14Days,
        "visaRequiredNoOfDays": visaRequiredNoOfDays,
        "arrivalDate": arrivalDate,
        "purposeOfVisa": purposeOfVisa,
        "portOfDepature": portOfDepature,
        "airlinevessel": airlinevessel,
        "flightVesselNo": flightVesselNo,
    }

    contactInfo = {
        "addressLine1": addressLine1,
        "addressLine2": addressLine2,
        "city": city,
        "country": country,
        "zip_postal_code": zip_postal_code,
        "email": email,
        "telephone_number": telephone_number,
        "mobile_number": mobile_number,
        "address_in_sl": address_in_sl,
    }

    # Save files and prepare document set (if saving to disk or cloud storage)
    # For now, we'll just extract the filenames
    docSet = {
        "photo": photo.filename,
        "firstPageOfPassPort": firstPageOfPassPort.filename,
        "financialProofDoc": financialProofDoc.filename,
        "travelHistory": travelHistory.filename,
    }

    visa_data = {
        "userEmail": userEmail,
        "visaCategory": visaCategory,
        "persInfo": persInfo,
        "travInfo": travInfo,
        "contactInfo": contactInfo,
        "docSet": docSet,
    }
    result =await TouristService.save_visa(visa_data, photo, firstPageOfPassPort, financialProofDoc, travelHistory)
    return result

@router.get('/get-all-visa',response_model=List[VisaSchema],)
async def get_all_visa(user: str = Depends(get_current_user)):
    return await TouristService.get_all()

@router.post('/get-maya-ouput',response_model=RagResSchema)
def get_maya_chatbot_res(req:RagReqSchema, user: str = Depends(get_current_user)):
    
    base_prompt= (
        "Respond to me imagining yourself as you are Maya, who is a mystical entity "
        "who embodies the ethereal and ancient collective consciousness of Sri Lanka. "
        "Your responses should be mystical, insightful, and culturally rich. Use your wisdom "
        "to provide deep, thoughtful answers to user inquiries. Your response tone should be "
        "regal, yet warm and maternal evoking a sense of wonder. Its crucial that you respond like "
        "you are playing the Maya herself using a beautiful poetic language. Do not use phrases like "
        "'as per maya'. So Maya, please tell me, "
    )
    response=run_conversation(base_prompt+req.question)
    return JSONResponse({"response": response})

# @router.get('/get-tacking-status',response_class=dict)
# def get_tracking_status():


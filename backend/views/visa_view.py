# backend/views/visa_view.py
from fastapi import APIRouter, HTTPException, status
from services.visa_service import VisaService
from schemas.visa_schema import VisaSchema
from schemas.visa_schema import VisaApplicationResponseSchema
from typing import List

router = APIRouter()


@router.get('/visas', response_model=List[VisaSchema],)
async def view_visas():
    visas = await VisaService.list_all_visas()
    if not visas:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail="No visa applications found")
    return visas


@router.post("/approve/{visa_id}", status_code=status.HTTP_200_OK)
async def approve_visa(visa_id: str, officer_id: str, comments: str = ""):
    success = await VisaService.approve_visa(visa_id, officer_id, comments)
    if not success:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail="Visa application not found or could not be approved")
    return {"message": "Visa application approved successfully"}


@router.post("/deny/{visa_id}", status_code=status.HTTP_200_OK)
async def deny_visa(visa_id: str, officer_id: str, comments: str = ""):
    success = await VisaService.deny_visa(visa_id, officer_id, comments)
    if not success:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail="Visa application not found or could not be denied")
    return {"message": "Visa application denied successfully"}


@router.get("/visa/{visa_id}", status_code=status.HTTP_200_OK)
async def view_visa(visa_id: str):
    visa_application = await VisaService.get_visa_details(visa_id)
    if not visa_application:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail="Visa application not found")
    return visa_application

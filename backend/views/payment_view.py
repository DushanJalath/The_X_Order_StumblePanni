# backend/views/payment_view.py
from fastapi import APIRouter, HTTPException, status
from services.visa_service import VisaService

router = APIRouter()

@router.post("/create-payment-intent", status_code=status.HTTP_201_CREATED)
async def create_payment_intent(user_id: str, visa_id: str, amount: int):
    try:
        payment_intent = await VisaService.create_payment_intent(user_id, visa_id, amount)
        return {"client_secret": payment_intent.client_secret}
    except HTTPException as e:
        raise e

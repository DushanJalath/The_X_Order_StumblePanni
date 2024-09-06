# backend/services/visa_service.py
from repositories.visa_repository import VisaRepository
from repositories.logs_repository import LogsRepository
import stripe
from fastapi import HTTPException
from core.config import settings

stripe.api_key = settings.stripe_secret_key

class VisaService:

    @staticmethod
    async def list_all_visas():
        visas = await VisaRepository.get_all_visas()
        return visas

    @staticmethod
    async def get_visa_details(visa_id: str):
        visa = await VisaRepository.get_visa_by_id(visa_id)
        if visa:
            return visa
        return None
    
    @staticmethod
    async def approve_visa(visa_id: str, officer_id: str, comments: str = ""):
        success = await VisaRepository.update_visa_status(visa_id, "Approved", officer_id)
        if success:
            await VisaRepository.log_approval_action(visa_id, officer_id, "Approved", comments)
            await LogsRepository.log_audit_action(visa_id, officer_id, "Visa Approved", f"Visa approved by officer {officer_id}")
        return success

    @staticmethod
    async def deny_visa(visa_id: str, officer_id: str, comments: str = ""):
        success = await VisaRepository.update_visa_status(visa_id, "Denied", officer_id)
        if success:
            await VisaRepository.log_approval_action(visa_id, officer_id, "Denied", comments)
            await LogsRepository.log_audit_action(visa_id, officer_id, "Visa Denied", f"Visa denied by officer {officer_id}")
        return success

    @staticmethod
    async def get_visa_details(visa_id: str):
        visa_application = await VisaRepository.get_visa_application_by_id(visa_id)
        if not visa_application:
            return None
        return visa_application

    @staticmethod
    async def create_payment_intent(user_id: str, visa_id: str, amount: int, currency: str = 'usd'):
        try:
            payment_intent = await stripe.PaymentIntent.create(
                amount=amount,  #  $100.00 = 100
                currency=currency,
                metadata={"user_id": user_id, "visa_id": visa_id}
            )
            return payment_intent
        except Exception as e:
            raise HTTPException(status_code=500, detail=f"Error creating payment intent: {str(e)}")
    
    @staticmethod
    async def update_payment_status(user_id: str, visa_id: str, status: str):
        transaction = await VisaRepository.update_payment_transaction(user_id, visa_id, status)
        return transaction
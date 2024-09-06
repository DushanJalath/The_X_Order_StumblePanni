# backend/views/stripe_webhook.py

from fastapi import APIRouter, Request, HTTPException
import stripe
from core.config import settings
from services.visa_service import VisaService

router = APIRouter()


@router.post("/stripe-webhook")
async def stripe_webhook(request: Request):
    payload = await request.body()
    sig_header = request.headers.get("stripe-signature")

    try:
        event = stripe.Webhook.construct_event(
            payload, sig_header, settings.stripe_webhook_secret
        )
    except ValueError as e:
        raise HTTPException(status_code=400, detail=f"Invalid payload: {e}")
    except stripe.error.SignatureVerificationError as e:
        raise HTTPException(status_code=400, detail=f"Invalid signature: {e}")

    if event['type'] == 'payment_intent.succeeded':
        payment_intent = event['data']['object']
        user_id = payment_intent['metadata']['user_id']
        visa_id = payment_intent['metadata']['visa_id']

        await VisaService.update_payment_status(user_id, visa_id, "paid")

    return {"status": "success"}

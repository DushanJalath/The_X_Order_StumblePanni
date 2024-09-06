# routes/email_view.py
from fastapi import APIRouter, BackgroundTasks
from datetime import datetime
from services.email_service import send_email

router = APIRouter()


@router.post("/send-email-approve/")
async def send_email_approve(background_tasks: BackgroundTasks):
    reciever = "udarabandara224@gmail.com"
    email_subject = "Your Visa Application Has Been Approved!"
    name = "Udara"
    visa_type = "Tourist Visa"
    ref_number = "124587VI554"
    issued_date = datetime.now().strftime("%d.%m.%Y")
    validity_period = "30 days"
    email_content = f"""
    Dear {name},

    We are pleased to inform you that your visa application has been successfully approved.

    Visa Details:
    Visa Type: {visa_type}
    Reference Number: {ref_number}
    Date of Issue: {issued_date}
    Validity Period: {validity_period}

    Your approved visa document is attached with this email. Please ensure to keep this email and your visa documentation safe. You can now proceed with your travel plans.

    If you have any further questions, feel free to reach out to us.

    Congratulations, and we wish you safe travels!

    Best regards,
    Team Stumblepanni
    +94112600244
    """
    background_tasks.add_task(send_email, reciever,
                              email_subject, email_content)
    return {"message": "Email has been sent in the background"}


@router.post("/send-email-reject/")
async def send_email_reject(background_tasks: BackgroundTasks):
    reciever = "udarabandara224@gmail.com"
    email_subject = "Your Visa Application Has Been Rejected"
    name = "Udara"
    rejection_reason = "Incomplete documentation"
    email_content = f"""
    Dear {name},

    We regret to inform you that your visa application has been rejected.

    Reason for Rejection:
    {rejection_reason}

    We recommend carefully reviewing the reason above. You may reapply after addressing the issues mentioned, should you wish to do so.

    If you require further clarification, please contact us.

    Best regards,
    Team Stumblepanni
    +94112600244
    """
    background_tasks.add_task(send_email, reciever,
                              email_subject, email_content)
    return {"message": "Email has been sent in the background"}


@router.post("/send-email-inquiry/")
async def send_email_inquiry(background_tasks: BackgroundTasks):
    reciever = "udarabandara224@gmail.com"
    email_subject = "Additional Information Required for Your Visa Application"
    name = "Udara"
    required_info = "Proof of accommodation"
    email_content = f"""
    Dear {name},

    Thank you for your visa application. To proceed, we need some additional information to complete the assessment.

    Required Information:
    {required_info}

    Please provide the requested details at your earliest convenience to avoid any delays in processing your application. You may reply directly to this email with the necessary information.

    Best regards,
    Team Stumblepanni
    +94112600244
    """
    background_tasks.add_task(send_email, reciever,
                              email_subject, email_content)
    return {"message": "Email has been sent in the background"}

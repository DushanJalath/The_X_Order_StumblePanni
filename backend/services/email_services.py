from fastapi import APIRouter, HTTPException, BackgroundTasks
from datetime import datetime
from typing import Any
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.utils import formataddr

router = APIRouter()  

SMTP_SERVER = 'smtp.gmail.com'  # e.g., 'smtp.gmail.com'
SMTP_PORT = 587  # For starttls
SMTP_USERNAME = 'udarab729@gmail.com'
SMTP_PASSWORD = 'bsykkyjoexscidyr'
EMAIL_FROM = 'udarabandara729@gmail.com'


def send_email(to_email: str, subject: str, body: str):
    try:
        message = MIMEMultipart()
        sender_name = "Stumblepanni"
        message["From"] = formataddr((sender_name, EMAIL_FROM))
        message["To"] = to_email
        message["Subject"] = subject
        message.attach(MIMEText(body, "plain"))

        with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as server:
            server.starttls()  
            server.login(SMTP_USERNAME, SMTP_PASSWORD)
            server.sendmail(EMAIL_FROM, to_email, message.as_string())

        print("Email sent successfully")

    except smtplib.SMTPAuthenticationError as e:
        print(f"Authentication error: {e}")
        raise HTTPException(status_code=500, detail="Authentication error: Please check your email credentials")
    except Exception as e:
        print(f"Failed to send email: {e}")
        raise HTTPException(status_code=500, detail="Failed to send email")

@router.post("/send-email-approve/")
async def send_email_endpoint(background_tasks: BackgroundTasks):
    
    reciever="udarabandara224@gmail.com"
    email_subject= " Your Visa Application Has Been Approved!"
    name="Udara"
    visa_type="Tourist Visa"
    ref_number="124587VI554"
    issued_date=datetime.now().strftime("%d.%m.%Y")
    validity_period="30 days"
    email_content="Dear "+name+", \n\nWe are pleased to inform you that your visa application has been successfully approved.\n\nVisa Details:\n\nVisa Type: "+visa_type+"\nReference Number:"+ref_number+"\nDate of Issue: "+issued_date+"\nValidity Period: "+validity_period+"\n\nYour approved visa document is attached with this email.Please ensure to keep this email and your visa documentation safe. You can now proceed with your travel plans.\nIf you have any further questions, feel free to reach out to us.\n\nCongratulations, and we wish you safe travels!\n\n\nBest regards,\nTeam Stumblepanni\n+94112600244"

    background_tasks.add_task(send_email, reciever, email_subject, email_content)
    return {"message": "Email has been sent in the background"}

@router.post("/send-email-reject/")
async def send_email_endpoint(background_tasks: BackgroundTasks):
    
    reciever="udarabandara224@gmail.com"
    email_subject= "Your Visa Application Has Been Rejected"
    name="Udara"
    rejection_reason="Tourist Visa"
    email_content="Dear "+name+", \n\nWe regret to inform you that your visa application has been rejected.\n\n \bReason for Rejection:\b \n\n"+rejection_reason+"\n\nWe understand this may be disappointing, and we recommend that you carefully review the reasons outlined above. You may reapply after addressing the issues mentioned, should you wish to do so.\n\nIf you require further clarification or have any questions, please do not hesitate to contact us.\n\nThank you for your understanding.\n\n\nBest regards,\nTeam Stumblepanni\n+94112600244"

    background_tasks.add_task(send_email, reciever, email_subject, email_content)
    return {"message": "Email has been sent in the background"}

@router.post("/send-email-inquiry/")
async def send_email_endpoint(background_tasks: BackgroundTasks):
    
    reciever="udarabandara224@gmail.com"
    email_subject= "Additional Information Required for Your Visa Application"
    name="Udara"
    required_info="Tourist Visa"
    email_content="Dear "+name+", \n\nThank you for your visa application. To proceed further, we need some additional information to complete the assessment.\n\n \bRequired Information:\b \n\n"+required_info+"\n\nPlease provide the requested details at your earliest convenience to avoid any delays in processing your application. You may reply directly to this email with the necessary information.\n\nIf you have any questions or require assistance in gathering the required details, please do not hesitate to contact us.\n\nWe look forward to your prompt response.\n\n\nBest regards,\nTeam Stumblepanni\n+94112600244"

    background_tasks.add_task(send_email, reciever, email_subject, email_content)
    return {"message": "Email has been sent in the background"}

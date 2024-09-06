from fastapi import APIRouter, HTTPException, BackgroundTasks
from datetime import datetime
from typing import Any
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.utils import formataddr
from core.config import settings

router = APIRouter()

SMTP_SERVER = 'smtp.gmail.com'
SMTP_PORT = 587


def send_email(to_email: str, subject: str, body: str):
    try:
        message = MIMEMultipart()
        sender_name = "Stumblepanni"
        message["From"] = formataddr((sender_name, settings.EMAIL_FROM))
        message["To"] = to_email
        message["Subject"] = subject
        message.attach(MIMEText(body, "plain"))

        with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as server:
            server.starttls()
            server.login(settings.SMTP_USERNAME, settings.SMTP_PASSWORD)
            server.sendmail(EMAIL_FROM, to_email, message.as_string())

        print("Email sent successfully")

    except smtplib.SMTPAuthenticationError as e:
        print(f"Authentication error: {e}")
        raise HTTPException(
            status_code=500, detail="Authentication error: Please check your email credentials")
    except Exception as e:
        print(f"Failed to send email: {e}")
        raise HTTPException(status_code=500, detail="Failed to send email")

# backend/schemas/visa_schema.py
from pydantic import BaseModel
from typing import Optional
from datetime import date

class TravelInformationSchema(BaseModel):
    entry_date: date
    exit_date: date
    destination: str

class DocumentsSchema(BaseModel):
    passport: dict
    photo: dict
    travel_history: list

class VisaStatusSchema(BaseModel):
    status: str
    last_updated: date

class VisaApplicationResponseSchema(BaseModel):
    id: str
    user_id: str
    travel_information: TravelInformationSchema
    documents: DocumentsSchema
    status: VisaStatusSchema

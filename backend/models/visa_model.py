# backend/models/visa_model.py
from pydantic import BaseModel, Field
from bson import ObjectId
from datetime import date

class TravelInformation(BaseModel):
    entry_date: date
    exit_date: date
    destination: str

class Documents(BaseModel):
    passport: dict
    photo: dict
    travel_history: list

class VisaStatus(BaseModel):
    status: str  # "Pending", "Approved", "Denied"
    last_updated: date

class VisaApplicationModel(BaseModel):
    id: str = Field(default_factory=lambda: str(ObjectId()), alias="_id")
    user_id: str
    travel_information: TravelInformation
    documents: Documents
    status: VisaStatus

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}

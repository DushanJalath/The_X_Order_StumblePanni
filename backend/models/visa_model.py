# backend/models/visa_model.py
from pydantic import BaseModel, Field
from bson import ObjectId
from datetime import date
from typing import Union

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

class PersonalInformation(BaseModel):
    surName:str
    otherName:str
    title:str
    dob:str
    gender:str
    nationality:str
    passport:str
    country_of_birth:str
    occupation:str
    applied_date:str
    

class TravelInformation(BaseModel):
    whereYouHaveBeenForLast14Days:str
    visaRequiredNoOfDays:str
    arrivalDate:str
    purposeOfVisa:str
    portOfDepature:str
    airlinevessel:str
    flightVesselNo:str


class ContactInformation(BaseModel):
    addressLine1:str
    addressLine2:str
    city:str
    country:str
    zip_postal_code:str
    email:str
    telephone_number:str
    mobile_number:str
    address_in_sl:str

class DocumentsSet(BaseModel):
    photo:str
    firstPageOfPassPort:str
    financialProofDoc:str
    travelHistory:str


class VisaModel(BaseModel):
    _id: Union[str, ObjectId]
    userEmail:str
    persInfo:PersonalInformation
    travInfo:TravelInformation
    contactInfo:ContactInformation
    docSet:DocumentsSet

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}

class ApprovalModel(BaseModel):
    application_id: Union[str, ObjectId]
    officer_id: Union[str, ObjectId]
    decision: str
    decision_date: date
    comments: str

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}
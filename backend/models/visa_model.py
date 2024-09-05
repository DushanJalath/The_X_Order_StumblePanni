from pydantic import BaseModel,Field
from bson import ObjectId
from typing import Union

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
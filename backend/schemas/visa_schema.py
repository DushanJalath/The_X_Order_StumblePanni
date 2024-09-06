from pydantic import BaseModel

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


class VisaSchema(BaseModel):
    userEmail:str
    visaCategory: str
    persInfo:PersonalInformation
    travInfo:TravelInformation
    contactInfo:ContactInformation
    docSet:DocumentsSet
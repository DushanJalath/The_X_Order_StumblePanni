from pydantic import BaseModel,Field
from bson import ObjectId

class UserModel(BaseModel):
    id: str = Field(default_factory=lambda: str(ObjectId()), alias="_id")
    fullName:str
    email:str
    phoneNo:str
    password:str
    country:str
    type:str
    
    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}
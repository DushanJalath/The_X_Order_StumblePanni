from pydantic import BaseModel

class UserCreateSchema(BaseModel):
    fullName: str
    email : str
    phoneNo : str
    password: str
    country: str
    type:str

class UserResponseSchema(BaseModel):
    id: str
    username: str

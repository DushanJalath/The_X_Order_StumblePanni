from pydantic import BaseModel

class UserCreateSchema(BaseModel):
    username: str
    password: str

class UserResponseSchema(BaseModel):
    id: str
    username: str

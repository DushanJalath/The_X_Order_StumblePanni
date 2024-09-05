from pydantic import BaseModel
from typing import List, Optional


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

class UserRiskCheckResponse(BaseModel):
    user_id: str
    is_risky: bool
    notice_type: Optional[str]

class NoticeDetails(BaseModel):
    date_of_birth: str
    nationalities: List[str]
    forename: str
    name: str
    distinguishing_marks: Optional[str]
    eyes_colors_id: Optional[List[str]]
    sex_id: str
    hairs_id: Optional[List[str]]

class UserRiskDetailsResponse(BaseModel):
    original_image: str
    notice_images: List[str]
    notice_details: NoticeDetails
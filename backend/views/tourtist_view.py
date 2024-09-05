from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from schemas.visa_schema import VisaSchema
from services.tourist_service import TouristService
from services.auth_service import AuthService
from typing import List

router = APIRouter()

def get_current_user(token: str = Depends(AuthService.get_user_from_token)):
    if token is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Could not validate credentials",
            headers={"WWW-Authenticate": "Bearer"},
        )
    return token

@router.post('/save-visa',response_model=dict)
def save_visa(visa_data:VisaSchema,user: str = Depends(get_current_user)):
    visa_dict=visa_data.dict()
    return TouristService.save_visa(visa_dict)


@router.get('/get-all-visa',response_model=List[VisaSchema],)
def get_all_visa(user: str = Depends(get_current_user)):
    return TouristService.get_all()

# @router.get('/get-tacking-status',response_class=dict)
# def get_tracking_status():


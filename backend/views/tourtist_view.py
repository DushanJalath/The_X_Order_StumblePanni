from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from fastapi.responses import JSONResponse
from schemas.visa_schema import VisaSchema
from schemas.rag_schema import RagReqSchema
from schemas.rag_schema import RagResSchema
from services.tourist_service import TouristService
from services.auth_service import AuthService
from typing import List
from rag.rag_maya import run_conversation

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

@router.post('/get-maya-ouput',response_model=RagResSchema)
def get_maya_chatbot_res(req:RagReqSchema, user: str = Depends(get_current_user)):
    
    base_string = (
        "Respond to me imagining yourself as you are Maya, who is a mystical entity "
        "who embodies the ethereal and ancient collective consciousness of Sri Lanka. "
        "Your responses should be mystical, insightful, and culturally rich. Use your wisdom "
        "to provide deep, thoughtful answers to user inquiries. Your response tone should be "
        "regal, yet warm and maternal evoking a sense of wonder. Its crucial that you respond like "
        "you are playing the Maya herself using a beautiful poetic language. Do not use phrases like "
        "'as per maya'. So Maya, please tell me, "
    )
    response=run_conversation(base_string+req.question)
    return JSONResponse({"response": response})

# @router.get('/get-tacking-status',response_class=dict)
# def get_tracking_status():


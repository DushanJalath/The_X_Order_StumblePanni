from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from schemas.user_schema import UserCreateSchema
from schemas.token_schema import Token
from services.auth_service import AuthService
from services.user_service import UserService



router = APIRouter()

@router.post("/register", response_model=dict)
def register_user(user_data: UserCreateSchema):
    hashed_password = AuthService.get_password_hash(user_data.password)
    user_data.password = hashed_password
    user_id = UserService.create_user(user_data.dict())
    return {"message": "{user_id}User registered successfully"}

@router.post("/login", response_model=Token)
def login_user(form_data: OAuth2PasswordRequestForm = Depends()):
    user = AuthService.authenticate_user(form_data.username, form_data.password)
    if user is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token = AuthService.create_access_token(data={"sub": user.email})
    return Token(access_token=access_token, token_type="bearer")
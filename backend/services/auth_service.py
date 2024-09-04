from datetime import datetime,timedelta
from jose import JWTError,jwt
from passlib.context import CryptContext
from core.config import Settings
from repositories.user_repository import UserRepository
from schemas.token_schema import Token

pwd_context = CryptContext(schemes=['bcrypt'],deprecated="auto")

class AuthService:

    @staticmethod
    def verify_password(plain_password,hashed_password):
        return pwd_context.verify(plain_password,hashed_password)

    @staticmethod
    def get_password_hash(password):
        return pwd_context.hash(password)
    
    @staticmethod
    def create_access_token(data: dict):
        to_encode = data.copy()
        expire = datetime.utcnow() + timedelta(minutes=Settings.access_token_expire_minutes)
        to_encode.update({"exp":expire})
        encoded_jwt = jwt.encode(to_encode,Settings.secret_key,algorithm=Settings.algorithm)
        return encoded_jwt
    
    @staticmethod
    async def authenticate_user(username:str, password:str):
        user = await UserRepository.get_user_by_username(username)
        if user and AuthService.verify_password(password,user.password):
            return user
        return None

    @staticmethod
    def get_user_from_token(token:str): 
        try :
            payload = jwt.decode(token, Settings.secret_key, algorithms=[Settings.algorithm])
            username: str = payload.get("sub")
            if username is None:
                return None
            return username

        except JWTError :
            return None

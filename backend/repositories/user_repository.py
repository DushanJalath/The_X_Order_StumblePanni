from core.database import database
from models.user_model import UserModel

class UserRepository:

    @staticmethod
    async def create_user(user_data:dict):
        await database.users.insert_one(user_data)

    
    @staticmethod
    async def get_user_by_username(username:str):
        user = await database.users.find_one({"userName":username})
        
        if user:
            return UserModel(**user)
        
        return None
        
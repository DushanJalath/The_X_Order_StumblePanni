from core.database import database
from models.user_model import UserModel

class UserRepository:

    @staticmethod
    def create_user(user_data: dict):
        result = database.users.insert_one(user_data)
        return result.inserted_id


    
    @staticmethod
    def get_user_by_email(email:str):
        user = database.users.find_one({"email":email})
        
        if user:
            user['_id'] = str(user['_id'])
            return UserModel(**user)
        
        return None
        
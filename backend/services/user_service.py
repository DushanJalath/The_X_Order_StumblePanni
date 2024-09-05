from repositories.user_repository import UserRepository
from schemas.user_schema import UserCreateSchema


class UserService:

    @staticmethod   
    def create_user(user_data:UserCreateSchema):
        return UserRepository.create_user(user_data)
from repositories.user_repository import UserRepository
from schemas.user_schema import UserCreateSchema


class UserService:

    @staticmethod   
    async def create_user(user_data:UserCreateSchema):
        return await UserRepository.create_user(user_data)
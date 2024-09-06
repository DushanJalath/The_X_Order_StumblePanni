from core.database import database
from models.visa_model import VisaModel


class TouristRepositoary:

    @staticmethod
    async def create(visa_data: dict):
        result = await database.visa_applications.insert_one(visa_data)
        return {"inserted_id": str(result.inserted_id)}

    @staticmethod
    async def get_all():
        all_visa = await database.visa_applications.find().to_list(length=100)
        for visa in all_visa:
            visa['_id'] = str(visa['_id'])
        return [VisaModel(**visa) for visa in all_visa]

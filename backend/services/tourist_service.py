from schemas.visa_schema import VisaSchema
from repositories.tourist_repository import TouristRepositoary


class TouristService:

    @staticmethod
    async def save_visa(visa:VisaSchema):
        return await TouristRepositoary.create(visa)
    
    @staticmethod
    async def get_all():
        visas = await TouristRepositoary.get_all()
        return [VisaSchema(**visa.dict()) for visa in visas]
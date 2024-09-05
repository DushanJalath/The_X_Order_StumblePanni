from schemas.visa_schema import VisaSchema
from repositories.tourist_repository import TouristRepositoary
from models.visa_model import VisaModel


class TouristService:

    @staticmethod
    def save_visa(visa:VisaSchema):
        return TouristRepositoary.create(visa)
    
    @staticmethod
    def get_all():
        visas=TouristRepositoary.get_all()
        return [VisaSchema(**visa.dict()) for visa in visas]
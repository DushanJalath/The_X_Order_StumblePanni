from core.database import database
from models.visa_model import VisaModel

class TouristRepositoary:
    
    @staticmethod
    def create(visa_data:dict):
        result = database.visa_Applications.insert_one(visa_data)
        return {"inserted_id": str(result.inserted_id)}
    
    @staticmethod
    def get_all():
        all_visa_cursor = database.visa_Applications.find()
        all_visa = list(all_visa_cursor)
        for visa in all_visa:
            visa['_id'] = str(visa['_id'])
        return [VisaModel(**visa) for visa in all_visa]


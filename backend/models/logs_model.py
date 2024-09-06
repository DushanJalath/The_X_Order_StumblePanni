# backend/models/logs_model.py
from pydantic import BaseModel, Field
from bson import ObjectId
from datetime import date

class LogsModel(BaseModel):
    id: str = Field(default_factory=lambda: str(ObjectId()), alias="_id")
    application_id: str
    performed_by: str
    action: str
    timestamp: date
    details: str
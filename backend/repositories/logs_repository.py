# backend/repositories/logs_repository.py

from core.database import database
from models.visa_model import VisaApplicationModel
from models.logs_model import LogsModel
from bson import ObjectId
from datetime import datetime

class LogsRepository:
    
        @staticmethod
        async def create_log(log_data: dict):
            await database.audit_logs.insert_one(log_data)
    
        @staticmethod
        async def get_all_logs():
            logs = await database.audit_logs.find().to_list(length=100)
            return [VisaApplicationModel(**log) for log in logs]
    
        @staticmethod
        async def get_log_by_id(log_id: str):
            log = await database.audit_logs.find_one({"_id": ObjectId(log_id)})
            if log:
                return VisaApplicationModel(**log)
            return None
    
        @staticmethod
        async def log_audit_action(application_id: str, performed_by: str, action: str, details: str):
            log = LogsModel(
                application_id=ObjectId(application_id),
                performed_by=ObjectId(performed_by),
                action=action,
                timestamp=datetime.utcnow(),
                details=details
            )
            await database.audit_logs.insert_one(log.dict())
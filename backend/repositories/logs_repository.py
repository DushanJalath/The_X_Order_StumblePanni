# backend/repositories/logs_repository.py

from core.database import database
from models.logs_model import LogsModel
from bson import ObjectId
from datetime import datetime


class LogsRepository:

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

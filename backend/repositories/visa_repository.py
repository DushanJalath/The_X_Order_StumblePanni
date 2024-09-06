# backend/repositories/visa_repository.py
from core.database import database
from models.visa_model import VisaModel, ApprovalModel
from bson import ObjectId
from datetime import datetime


class VisaRepository:

    @staticmethod
    async def create_visa_application(visa_data: dict):
        result = await database.visa_applications.insert_one(visa_data)
        return {"inserted_id": str(result.inserted_id)}

    @staticmethod
    async def get_all_visas():
        all_visa = await database.visa_applications.find().to_list(length=100)
        return [VisaModel(**visa) for visa in all_visa]

    @staticmethod
    async def get_visa_by_id(visa_id: str):
        visa = await database.visa_applications.find_one({"_id": ObjectId(visa_id)})
        if visa:
            return VisaModel(**visa)
        return None

    @staticmethod
    async def update_visa_status(visa_id: str, status: str, officer_id: str):
        result = await database.visa_applications.update_one(
            {"_id": ObjectId(visa_id)},
            {"$set": {"status.status": status, "status.last_updated": datetime.utcnow()}}
        )
        return result.modified_count > 0

    @staticmethod
    async def log_approval_action(visa_id: str, officer_id: str, decision: str, comments: str = ""):
        approval = ApprovalModel(
            application_id=ObjectId(visa_id),
            officer_id=ObjectId(officer_id),
            decision=decision,
            comments=comments,
            timestamp=datetime.utcnow()
        )
        await database.approvals.insert_one(approval.dict())

    @staticmethod
    async def get_visa_application_by_id(visa_id: str):
        visa_application = await database.visa_applications.find_one({"_id": ObjectId(visa_id)})
        if not visa_application:
            return None

        user = await database.users.find_one({"_id": ObjectId(visa_application['user_id'])})
        if user:
            visa_application['user'] = user

        approvals = await database.approvals.find({"application_id": ObjectId(visa_id)}).to_list(length=100)
        visa_application['approvals'] = approvals

        audit_logs = await database.audit_logs.find({"application_id": ObjectId(visa_id)}).to_list(length=100)
        visa_application['audit_logs'] = audit_logs

        return visa_application

    @staticmethod
    async def update_payment_transaction(user_id: str, visa_id: str, payment_status: str):
        result = await database.payment_transactions.update_one(
            {"user_id": ObjectId(user_id),
             "application_id": ObjectId(visa_id)},
            {"$set": {"payment_status": payment_status}}
        )
        return result.modified_count > 0

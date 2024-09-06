# from pymongo import MongoClient
import motor.motor_asyncio

from core.config import settings

mongo_url = settings.mongodb_uri

# client = MongoClient(mongo_url)
client = motor.motor_asyncio.AsyncIOMotorClient(mongo_url)

database = client.stumblepanni
from pymongo import MongoClient
from core.config import settings


mongo_url = settings.mongodb_uri

client = MongoClient(mongo_url)

database = client.stumblepanni


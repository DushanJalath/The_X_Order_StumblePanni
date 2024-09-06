from pydantic import BaseModel

class RagReqSchema(BaseModel):
    question:str

class RagResSchema(BaseModel):
    answer:str
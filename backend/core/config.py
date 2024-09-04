from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    secret_key: str
    algorithm: str = "HS256"
    access_token_expire_minutes: int = 30
    mongodb_uri: str

    class Config:
        env_file = ".env"

settings = Settings()


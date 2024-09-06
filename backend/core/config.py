from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    secret_key: str
    algorithm: str = "HS256"
    access_token_expire_minutes: int = 300
    mongodb_uri: str
    openai_api_key:str
    aws_access_key_id:str
    aws_secret_access_key:str
    aws_region:str
    s3_bucket_name:str
    stripe_secret_key: str
    stripe_webhook_secret: str
    openai_api_key: str
    SMTP_USERNAME: str
    SMTP_PASSWORD: str
    EMAIL_FROM: str

    class Config:
        env_file = ".env"


settings = Settings()

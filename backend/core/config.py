from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    secret_key: str
    algorithm: str = "HS256"
    access_token_expire_minutes: int = 300
    mongodb_uri: str
    stripe_secret_key: str
    stripe_webhook_secret: str
    openai_api_key: str

    class Config:
        env_file = ".env"


settings = Settings()

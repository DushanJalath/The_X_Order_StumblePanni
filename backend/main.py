# backend/main.py
from fastapi import FastAPI
from views import auth_view, visa_view, tourtist_view

app = FastAPI()

app.include_router(auth_view.router, prefix='/auth', tags=["Auth"])
app.include_router(visa_view.router, prefix='/visa', tags=["Visa Applications"])
app.include_router(tourtist_view.router,prefix='/tourist',tags=["Tourist"])

from fastapi import FastAPI
from views import auth_view


app=FastAPI()

app.include_router(auth_view.router,prefix='/auth',tags=["Auth"])
from fastapi import FastAPI
from views import auth_view
from views import tourtist_view


app=FastAPI()

app.include_router(auth_view.router,prefix='/auth',tags=["Auth"])
app.include_router(tourtist_view.router,prefix='/tourist',tags=["Tourist"])
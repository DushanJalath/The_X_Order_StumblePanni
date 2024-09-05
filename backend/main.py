from fastapi import FastAPI
from views import auth_view, visa_view, notices_view, payment_view, stripe_webhook, tourtist_view

app = FastAPI()


app.include_router(auth_view.router, prefix='/auth', tags=["Auth"])
app.include_router(visa_view.router, prefix='/visa', tags=["Visa Applications"])
app.include_router(tourtist_view.router,prefix='/tourist',tags=["Tourist"])
app.include_router(notices_view.router, prefix='/notices', tags=["Interpol Notices"])
app.include_router(payment_view.router, prefix='/payment', tags=["Payment"])
app.include_router(stripe_webhook.router, tags=["Stripe Webhook"])

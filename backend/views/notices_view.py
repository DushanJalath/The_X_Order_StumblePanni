from fastapi import APIRouter, HTTPException
from models.user_model import UserModel
from schemas.user_schema import UserRiskCheckResponse, UserRiskDetailsResponse
from services.interpol_service import (
    check_user_in_notices,
    fetch_notice_details,
    fetch_notice_images,
)
from typing import List

router = APIRouter()

@router.post("/check-users", response_model=List[UserRiskCheckResponse])
async def check_users(user_ids: List[str]):
    """
    Check user details against Interpol Red, Yellow, and UN Notices and
    return a risk status for each user.
    """
    risky_users = []
    
    for user_id in user_ids:
        # Get the user details from your database
        user = await UserModel.find_one({"user_id": user_id})
        
        if not user:
            raise HTTPException(status_code=404, detail=f"User {user_id} not found")
        
        # Check if the user matches any Interpol Red, Yellow, or UN notices
        is_risky, notice_type = await check_user_in_notices(user)
        
        risky_users.append({
            "user_id": user.user_id,
            "is_risky": is_risky,
            "notice_type": notice_type if is_risky else None,
        })
    
    return risky_users

@router.get("/user/{user_id}/risky-details", response_model=UserRiskDetailsResponse)
async def get_user_risky_details(user_id: str):
    """
    Get the risky user's original image, Interpol notice images, and details.
    """
    user = await UserModel.find_one({"user_id": user_id})
    
    if not user:
        raise HTTPException(status_code=404, detail=f"User {user_id} not found")
    
    # Fetch the notice details (e.g., name, DOB, nationality, etc.)
    notice_details = await fetch_notice_details(user)

    # Fetch the notice images (1 to 3)
    notice_images = await fetch_notice_images(user)
    
    return {
        "original_image": user.image_url,
        "notice_images": notice_images,
        "notice_details": notice_details
    }

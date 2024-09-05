import requests
from models.user_model import UserModel

INTERPOL_BASE_URL = "https://ws-public.interpol.int/notices/v1"

# Red, Yellow, UN endpoints
NOTICE_ENDPOINTS = {
    "red": f"{INTERPOL_BASE_URL}/red",
    "yellow": f"{INTERPOL_BASE_URL}/yellow",
    "un": f"{INTERPOL_BASE_URL}/un",
}

async def check_user_in_notices(user: UserModel):
    """
    Check if a user exists in the Red, Yellow, or UN notices.
    Return a boolean indicating whether they are risky, and the notice type.
    """
    for notice_type, url in NOTICE_ENDPOINTS.items():
        # Call the Interpol API with user's forename, surname, and other details
        params = {
            "forename": user.first_name,
            "name": user.last_name,
            "nationality": user.nationality_code,
            "ageMin": 18,
            "ageMax": 120,
            "sexId": user.sex_id,
            "resultPerPage": 1
        }
        response = requests.get(url, params=params)
        data = response.json()

        if data["total"] > 0:
            # If the user matches a notice, return True and the type of notice
            return True, notice_type

    return False, None

async def fetch_notice_details(user: UserModel):
    """
    Fetch the notice details (e.g., name, DOB, nationality, etc.)
    """
    for notice_type, url in NOTICE_ENDPOINTS.items():
        params = {
            "forename": user.first_name,
            "name": user.last_name,
        }
        response = requests.get(url, params=params)
        data = response.json()
        
        if data["total"] > 0:
            notice = data["_embedded"]["notices"][0]
            notice_id = notice["entity_id"]
            notice_details_url = f"{url}/{notice_id}"
            details_response = requests.get(notice_details_url)
            return details_response.json()
    
    return None

async def fetch_notice_images(user: UserModel):
    """
    Fetch up to 3 notice images for the user.
    """
    for notice_type, url in NOTICE_ENDPOINTS.items():
        params = {
            "forename": user.first_name,
            "name": user.last_name,
        }
        response = requests.get(url, params=params)
        data = response.json()

        if data["total"] > 0:
            notice = data["_embedded"]["notices"][0]
            notice_id = notice["entity_id"]
            images_url = f"{url}/{notice_id}/images"
            images_response = requests.get(images_url)
            images_data = images_response.json()
            return images_data["_embedded"]["images"]
    
    return []

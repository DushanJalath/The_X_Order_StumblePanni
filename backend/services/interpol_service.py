# services/interpol_service.py
import requests
from models.user_model import UserModel
from deepface import DeepFace

INTERPOL_BASE_URL = "https://ws-public.interpol.int/notices/v1"

# Red, Yellow, UN endpoints
NOTICE_ENDPOINTS = {
    "red": f"{INTERPOL_BASE_URL}/red",
    "yellow": f"{INTERPOL_BASE_URL}/yellow",
    "un": f"{INTERPOL_BASE_URL}/un",
}


async def check_user_in_notices(user: UserModel, user_image: str):
    for notice_type, url in NOTICE_ENDPOINTS.items():
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
            notice = data["_embedded"]["notices"][0]
            notice_id = notice["entity_id"]
            notice_images_url = f"{url}/{notice_id}/images"
            images_response = requests.get(notice_images_url)
            images_data = images_response.json()

            if images_data["_embedded"]["images"]:
                notice_image_url = images_data["_embedded"]["images"][0]["_links"]["self"]["href"]
                notice_image = requests.get(notice_image_url, stream=True).raw

                face_result = DeepFace.verify(
                    user_image, notice_image, model_name="Facenet", enforce_detection=False)

                face_match_threshold = 0.8
                if face_result["distance"] <= face_match_threshold:
                    return True, notice_type, True

            return True, notice_type, False

    return False, None, False


@router.post("/check-applicant/")
async def check_applicant(user: UserModel, user_image: UploadFile = File(...)):
    """
    Endpoint to check if a visa applicant is risky based on Interpol notices and face recognition.
    """
    try:
        image_path = f"/tmp/{user_image.filename}"
        with open(image_path, "wb") as buffer:
            buffer.write(await user_image.read())

        is_risky, notice_type, face_match = await check_user_in_notices(user, image_path)

        if is_risky:
            return {
                "status": "risky",
                "notice_type": notice_type,
                "face_match": face_match
            }
        else:
            return {
                "status": "not risky"
            }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

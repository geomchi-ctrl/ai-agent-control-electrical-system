from fastapi import APIRouter, HTTPException
from app.models.response_models import AIResponse
from app.models.request_models import UserQuery
from app.services import llama_service, can_service


router = APIRouter()

@router.post("/process_query", response_model=AIResponse)
async def process_query(query: UserQuery):
    try:
        ai_response = await llama_service.get_ai_response(query.text)
        action = llama_service.interpret_response(ai_response)
        can_message = can_service.prepare_can_message(action)
        await can_service.send_can_message(can_message)
        return AIResponse(response=ai_response, action=action)
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
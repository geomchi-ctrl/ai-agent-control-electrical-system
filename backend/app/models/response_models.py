from pydantic import BaseModel
from typing import Literal

class AIResponse(BaseModel):
    """
    AIResponse model for the response from the AI.
    """
    response: str
    action: Literal['ON', 'OFF']
from typing import Literal
import aiohttp

LLAMA_API_URL = "https://api.llama.ai/v1/chat/completions"

async def get_ai_response(query: str) -> str:
    async with aiohttp.ClientSession() as session:
        async with session.post(LLAMA_API_URL, json={"prompt": query}) as response:
            result = await response.json()
            return result["choices"][0]["message"]["content"]
        
def interpret_response(response: str) -> str:
    """
    Interpret the response from the Llama API.
    This function can be expanded to include more complex logic.
    """
    # For now, we just return the response as is
    lower_response = response.lower()
    if "ligar" in lower_response or "on" in lower_response:
        return "on"
    elif "desligar" in lower_response or "off" in lower_response:
        return "off"
    else:
        raise ValueError("Invalid response from Llama API")
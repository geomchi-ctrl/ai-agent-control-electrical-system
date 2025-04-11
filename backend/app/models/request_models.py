from pydantic import BaseModel

class UserQuery(BaseModel):
    """
    UserQuery model for querying users.
    """
    text: str
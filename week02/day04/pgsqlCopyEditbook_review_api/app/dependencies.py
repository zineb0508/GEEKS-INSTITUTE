from fastapi import Request, HTTPException, Depends

def get_current_user(request: Request):
    if not hasattr(request.state, "user"):
        raise HTTPException(status_code=403, detail="User not authenticated")
    return request.state.user

def require_admin(user=Depends(get_current_user)):
    if user.get("role") != "admin":
        raise HTTPException(status_code=403, detail="Admin access required")
    return user

def require_owner_or_admin(resource_owner_id: int, user=Depends(get_current_user)):
    if user.get("role") == "admin":
        return user
    if user.get("user_id") != resource_owner_id:
        raise HTTPException(status_code=403, detail="Permission denied")
    return user

import uuid
from typing import Any

from fastapi import APIRouter, HTTPException
from sqlmodel import func, select

from app.api.deps import CurrentUser, SessionDep
from app.models import (
    Producto, ProductoCreate, ProductoPublic, ProductosPublic, ProductoUpdate, Message
)

router = APIRouter()


@router.get("/", response_model=ProductosPublic)
def read_productos(
    session: SessionDep, current_user: CurrentUser, skip: int = 0, limit: int = 100
) -> Any:
    """
    Retrieve productos.
    """

    if current_user.is_superuser:
        count_statement = select(func.count()).select_from(Producto)
        count = session.exec(count_statement).one()
        statement = select(Producto).offset(skip).limit(limit)
        productos = session.exec(statement).all()
    else:
        count_statement = (
            select(func.count())
            .select_from(Producto)
            .where(Producto.owner_id == current_user.id)
        )
        count = session.exec(count_statement).one()
        statement = (
            select(Producto)
            .where(Producto.owner_id == current_user.id)
            .offset(skip)
            .limit(limit)
        )
        productos = session.exec(statement).all()

    return ProductosPublic(data=productos, count=count)


@router.get("/{id}", response_model=ProductoPublic)
def read_producto(session: SessionDep, current_user: CurrentUser, id: uuid.UUID) -> Any:
    """
    Get producto by ID.
    """
    producto = session.get(Producto, id)
    if not producto:
        raise HTTPException(status_code=404, detail="Producto not found")
    if not current_user.is_superuser and (producto.owner_id != current_user.id):
        raise HTTPException(status_code=400, detail="Not enough permissions")
    return producto


@router.post("/", response_model=ProductoPublic)
def create_producto(
    *, session: SessionDep, current_user: CurrentUser, producto_in: ProductoCreate
) -> Any:
    """
    Create new producto.
    """
    producto = Producto.model_validate(producto_in, update={"owner_id": current_user.id})
    session.add(producto)
    session.commit()
    session.refresh(producto)
    return producto


@router.put("/{id}", response_model=ProductoPublic)
def update_producto(
    *,
    session: SessionDep,
    current_user: CurrentUser,
    id: uuid.UUID,
    producto_in: ProductoUpdate,
) -> Any:
    """
    Update an producto.
    """
    producto = session.get(Producto, id)
    if not producto:
        raise HTTPException(status_code=404, detail="Producto not found")
    if not current_user.is_superuser and (producto.owner_id != current_user.id):
        raise HTTPException(status_code=400, detail="Not enough permissions")
    update_dict = producto_in.model_dump(exclude_unset=True)
    producto.sqlmodel_update(update_dict)
    session.add(producto)
    session.commit()
    session.refresh(producto)
    return producto


@router.delete("/{id}")
def delete_producto(
    session: SessionDep, current_user: CurrentUser, id: uuid.UUID
) -> Message:
    """
    Delete an producto.
    """
    producto = session.get(Producto, id)
    if not producto:
        raise HTTPException(status_code=404, detail="Producto not found")
    if not current_user.is_superuser and (producto.owner_id != current_user.id):
        raise HTTPException(status_code=400, detail="Not enough permissions")
    session.delete(producto)
    session.commit()
    return Message(message="Producto deleted successfully")
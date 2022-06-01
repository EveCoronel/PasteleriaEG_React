import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemListContainer.css";

export default function ItemListContainer({ greeting }) {
  const onAdd = (contador) => {
    alert(`Se han agregado ${contador} elementos al carrito`);
  };

  return (
    <>
      <div className="div">
        <article className="card">
          <h2>¡Bienvenido a EG Pastelería, {greeting}!</h2>
          <img className="img" src="http://placekitten.com/180/180" alt="Foto producto" />
          <ItemCount stock={15} initial={1} onAdd={onAdd} />
        </article>
      </div>
    </>
  );
}

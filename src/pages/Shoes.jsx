import React, { useContext } from "react";
import { Context } from "../context/context";

export default function Shoes() {
  const { shoes } = useContext(Context);

  return (
    <div className="shoes">
      {shoes.map((shoe) => {
        return (
          <div key={shoe.id} className="shoe">
            <img src={shoe.image} alt={shoe.name} />

            <div className="info">
              <p className="name">{shoe.name}</p>
              <p className="price">${shoe.price}</p>
              <p className="description">{shoe.description}</p>
            </div>

            <div className="btn">Add to Cart</div>
          </div>
        );
      })}
    </div>
  );
}

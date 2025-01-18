import React, { useContext } from "react";
import { Context } from "../context/context";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, invoice, removeFromCart, setCart } = useContext(Context);

  return (
    <div className="cart">
      {cart.length === 0 ? (
        <div className="cartRemind">
          You have not added anything in the cart
        </div>
      ) : (
        <>
          {cart.map((item) => (
            <div className="itemInfo" key={item.id}>
              <img src={item.image} alt={item.name} />

              <div className="itemInfoMiddle">
                <p className="cartName">{item.name}</p>
                <p className="cartDesc">{item.description}</p>
                <p className="cartQty">Quantity: {item.qty}</p>
              </div>

              <div className="itemInfoLast">
                <p className="cartPrice">${item.price}</p>

                <MdDelete
                  onClick={() => removeFromCart(item)}
                  fill="rgb(207, 10, 44)"
                  className="del"
                />
              </div>
            </div>
          ))}

          <div className="bot">
            <p>
              SubTotal of {invoice.count} items: ${invoice.subTotal}
            </p>
            <Link to="/success" onClick={()=>setCart([])}>
              <div className="order">Place Order</div>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

import React, { useContext, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { Context } from "../context/context";

export default function Nav() {
  const { invoice } = useContext(Context);

  const changeStyles = ({ isActive }) => {
    return { color: isActive ? "#CF0A2C" : "white" };
  };

  return (
    <div className="nav">
      <Link to="/" className="shoe-logo">
        MewBalance
      </Link>

      <ul>
        <li>
          <NavLink to="/men" style={changeStyles}>
            Men
          </NavLink>
        </li>
        <li>
          <NavLink to="/women" style={changeStyles}>
            Women
          </NavLink>
        </li>
        <li>
          <NavLink to="/kids" style={changeStyles}>
            Kids
          </NavLink>
        </li>
      </ul>

      <Link to="/cart">
        <div className="cart-logo">
          <FaShoppingCart />
          {invoice.count > 0 && (
            <div className="cartCount">{invoice.count}</div>
          )}
        </div>
      </Link>
    </div>
  );
}

import React, { useState } from "react";
import { TbShoe } from "react-icons/tb";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";


export default function Nav() {


  return (
    <div className="nav">
      <NavLink to="/" className="shoe-logo">
        <TbShoe />
        MewBalance
      </NavLink>

      <ul>
        <li>
          <NavLink to="/men">Men</NavLink>
        </li>
        <li>
          <NavLink to="/women">Women</NavLink>
        </li>
        <li>
          <NavLink to="/kids">Kids</NavLink>
        </li>
      </ul>

      <div className="cart-logo">
        <FaShoppingCart />
      </div>
    </div>
  );
}

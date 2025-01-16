import React, { useContext, useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import Nav from "../component/Nav";
import { Context } from "../context/context";

export default function Home() {
  const { shoeFilter } = useContext(Context);
  const { category } = useParams();

  useEffect(() => {
    shoeFilter(category);
  }, [category]);

  return (
    <div>
      <Nav />
      <div className="outlet">
        <Outlet />
      </div>
    </div>
  );
}

import React, { useContext, useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import Nav from "../component/Nav";
import { Context } from "../context/context";
import { ToastContainer } from "react-toastify";

export default function Home() {
  const { shoeFilter } = useContext(Context);
  const { category } = useParams();

  useEffect(() => {
    shoeFilter(category);
  }, [category]);

  return (
    <div>
      <Nav />
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme="dark"
      />
      <div className="outlet">
        <Outlet />
      </div>
    </div>
  );
}

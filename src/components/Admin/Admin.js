import React from "react";
import { useContext } from "react";
import { BookShopContext } from "../../context";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Admin = () => {
  const { modal, setModal } = useContext(BookShopContext);
  const [password, setPassword] = useState("");
  const nav = useNavigate();
  const massage = () => {
    toast.error("🦄 Неправильный пароль!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const navigate = () => {
    if (password === "123") {
      nav("/addProduct");
      setModal(false);
    } else {
      massage();
    }
    setPassword("");
  };
  return (
    <div id="admin">
      <div className="container">
        <div className="admin">
          <h3 onClick={() => setModal(false)}>x</h3>
          <input
          value={password}
            type="text"
            placeholder="Password..."
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={() => navigate()}>SIGN IN</button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Admin;

import React, { useEffect } from "react";
import { BookShopContext } from ".";
import { useState } from "react";

const RootContext = ({ children }) => {
  const [modal, setModal] = useState(false);
  const [productAll, setProductAll] = useState([]);
  const [basket, setBasket] = useState([]);
  const [selectVal, setSelectVal] = useState("");
  const getProduct = () => {
    let res = JSON.parse(localStorage.getItem("product")) || [];
    setProductAll(res)
    let res1 = JSON.parse(localStorage.getItem("basket")) || [];
    setBasket(res1)
  };

useEffect(()=>{
    getProduct()
},[])

  return (
    <BookShopContext.Provider
      value={{
        modal,
        setModal,
        productAll,
        setProductAll,
        basket,
        setBasket,
        setSelectVal,
        selectVal
       
      }}
    >
      {children}
    </BookShopContext.Provider>
  );
};

export default RootContext;

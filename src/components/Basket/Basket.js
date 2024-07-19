import React, { useContext } from "react";
import { BookShopContext } from "../../context";
import { MdDelete } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Basket = () => {
  const { basket, setBasket } = useContext(BookShopContext);
  const nav1 = useNavigate()

  const deleteBasket = (idx1) => {
    let res = basket.filter((el) => el.id !== idx1);
    localStorage.setItem("basket", JSON.stringify(res));
    setBasket(res);
  };

  const plusBasket = (elem) => {
    let res1 = basket.map((el) =>
      el.id === elem.id
        ? {
            ...el,
            quantity: el.quantity + 1,
          }
        : el
    );
    setBasket(res1);
    localStorage.setItem("basket",JSON.stringify(res1));
  };

  const minusBasket = (elem) => {
    let res1 = basket.map((el) =>
      el.id === elem.id
        ? { ...el, quantity: el.quantity > 1 ? el.quantity - 1 : 1 }
        : el
    );
    setBasket(res1);
    localStorage.setItem( "basket",JSON.stringify(res1));
  };
  let totalPrice = basket.reduce((acc, el) => {
    return acc + +el.price * el.quantity;
  }, 0);
  return (
    <div id="basket">
      <div className="container">

        {
            basket.length === 0 ? <button style={{
                padding: '20px 30px', color:"black", background:"none",border:"2px solid  #010049"
            }} onClick={()=>nav1("/")}>  Ваша корзина пуста, сделайте покупку < FaCartShopping /> </button>    : <div className="basket">
            {basket.map((el) => (
              <div className="basket--card">
                <img src={el.url} alt="img" width={180} height={220} />
  
                <div className="basket--card__text">
                  <h2>{el.name}</h2>
                  <h3>{el.price * el.quantity}$</h3>
                  <div className="basket--card__text--click">
                    <button onClick={() => minusBasket(el)}>-</button>
                    <span>{el.quantity}</span>
                    <button onClick={() => plusBasket(el)}>+</button>
                  </div>
                  <h4 onClick={() => deleteBasket(el.id)}>
                    Удалить{" "}
                    <button>
                      {" "}
                      <MdDelete />
                    </button>
                  </h4>
                </div>
              </div>
            ))}
          </div>
        }
       
      </div>
      <h1 style={{
       marginLeft:"600px"
      }}>TotalPrice:{totalPrice}</h1>
    </div>
  );
};

export default Basket;

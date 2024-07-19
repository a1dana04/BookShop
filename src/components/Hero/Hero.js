import React, { useContext, useState } from "react";
import { BookShopContext } from "../../context";
import { FaCartShopping } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { RiShoppingBagFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";

const Hero = ({el}) => {
  const { productAll, setProductAll, setBasket, basket,selectVal } =
    useContext(BookShopContext);
  const [count, setCount] = useState(4);
  const [sort1, setSort1] = useState("");
  const nav2 = useNavigate();
console.log(selectVal);

 let val = 1
 let changeP = "som"
 if(selectVal === "USD"){
   val = 0.011
   changeP= "USD"
 }else if(selectVal === "RUB"){
  val = 1.03
  changeP = "RUB"
 }

 

  const sorted = productAll.sort((a, b) => {
    if (sort1 === "A-Я") {
      return a.name.localeCompare(b.name);
    } else if (sort1 === "Я-А") {
      return b.name.localeCompare(a.name);
    }
  });

  const bookDelete = (idx1) => {
    let res1 = productAll.filter((el) => el.id !== idx1);
    localStorage.setItem("product", JSON.stringify(res1));
    setProductAll(res1);
  };
  let logoBasket = basket.some((some)=> some.id === el)

  const addBasket = (data) => {
  
    let findBasket = basket.find((el) => el.id === data.id);
    if (!findBasket) {
      let res1 = [...basket, data];
      localStorage.setItem("basket", JSON.stringify(res1));
      setBasket(res1);
    }


  };

 

  return (
    <>
      <div id="hero">
        <div className="container">
          {/* <div className="hero"></div> */}
        </div>
      </div>
      <div className="container">
        <div className="bookstr">
          <h1>Возможно, Вам понравится</h1>

          <select onChange={(e) => setSort1(e.target.value)}>
            <option value="A-Я">A-Я</option>
            <option value="Я-А">Я-А</option>
          </select>
        </div>

        <div className="books">
          {sorted.slice(0, count).map((el) => (
            <div className="books--card">
              <Link to={`/bookDetails/${el.id}`}>
                {" "}
                <img src={el.url} alt="img" width={250} height={350} />
              </Link>
              <div className="books--card__book">
                <h3>{Math.round(el.price * val) }{changeP}</h3>
                {!logoBasket ? (
                  <h4 onClick={() => addBasket(el)}>
                    <FaCartShopping />
                  </h4>
                ) : (
                  <h4 onClick={()=> nav2("/basket")}>
                    {" "}
                    <RiShoppingBagFill />
                  </h4>
                )}
                <h3 onClick={() => bookDelete(el.id)}>
                  {" "}
                  <MdDelete />
                </h3>
              </div>
              <h4>{el.name}</h4>
            </div>
          ))}
          <div className="books--btn">
            {productAll.length > count && productAll.length >= 4 ? (
              <button onClick={() => setCount(count + 4)}>
                Показать еще...
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

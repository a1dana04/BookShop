import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import { RiAdminFill } from "react-icons/ri";
import { Link, useNavigate, useParams } from "react-router-dom";
import Admin from "../Admin/Admin";
import { useContext } from "react";
import { BookShopContext } from "../../context";
import Hero from "../Hero/Hero";

const Header = () => {
  const { modal, setModal, basket,selectVal,setSelectVal } = useContext(BookShopContext);
  const [search, setSearch] = useState("");
  const { searchId } = useParams();
  const nav = useNavigate();

console.log(selectVal);
 

  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <Link to={"/"}>
            {" "}
            <h1>BOOKShop</h1>
        
          </Link>
          <div className="header--nav">
            <div className="header--nav__search">
              <input
              value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Search here"
              />

              <a>
                <CiSearch />
              </a>

             
            </div>
            <button
              onClick={() => {
                nav(`/search/${search}`);
                setSearch("");
              }}
              style={{
                marginLeft: "20px",
                padding: "10px 20px",
                background: "none",
                border: "2px solid white",
                color: "white",
                borderRadius: "6px",
              }}
            >
              Search
            </button>

            <select onChange={(e)=>setSelectVal(e.target.value)} >
            <option value="USD">USD</option>
            <option value="RUB">RUB</option>
            <option value="KGZ">KGZ</option>
          </select>

            <Link to={`/basket`}>
              <span> {basket.length > 0 ? basket.length : null}</span>
              <FaCartShopping />
              <br />
              Корзина
            </Link>

            <Link onClick={() => setModal(true)}>
              <RiAdminFill />
              <br />
              Админ
            </Link>
          </div>
          {modal ? <Admin /> : null}
        </div>
      </div>
      {modal ? (
        <div className="bg " onClick={() => setModal(false)}>
          {" "}
        </div>
      ) : null}
    </div>
  );
};

export default Header;

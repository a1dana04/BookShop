import React from "react";
import { useContext } from "react";
import { BookShopContext } from "../../context";
import { useState } from "react";

const AddProduct = () => {
  const { productAll, setProductAll } = useContext(BookShopContext);
  const [productImg, setProductImg] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productName, setProductName] = useState("");
  const [productCategoty, setProductCategory] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const onChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => setProductImg(reader.result);
    reader.readAsDataURL(file);
  };
  const addProduct = () => {
    let newProduct = {
      id: productAll.length ? productAll[productAll.length-1].id + 1 : 1 ,
      url: productImg,
      name: productName,
      price: productPrice,
      category: productCategoty,
      description: productDescription,
      quantity: 1,
    };
    let res = [...productAll, newProduct];
    localStorage.setItem("product", JSON.stringify(res));
    setProductAll(res);

    setProductImg("");
    setProductPrice("");
    setProductName("");
    setProductCategory("");
    setProductDescription("");
  };
  console.log(productAll);

  return (
    <div id="addProduct">
      <div className="container">
        <div className="addProduct">
          <input

            type="file"
            className="addProduct--file"
            onChange={onChange}
          />
          <div className="addProduct--right">
            <input
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              type="text"
              placeholder="Product name"
              className="addProduct--right__name"
            />
            <div className="addProduct--right__flex">
              <input
                   value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
                type="text"
                placeholder="Price"
                className="addProduct--right__flex--category"
              />
              <input
             value={productCategoty}
           
                onChange={(e) => setProductCategory(e.target.value)}
                type="text"
                placeholder="Category"
                className="addProduct--right__flex--price"
              />
            </div>
            <textarea
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
              name="Product description..."
              id=""
              cols="30"
              rows="10"
              placeholder="Product description..."
            ></textarea>
            <button onClick={() => addProduct()}>SAVE</button>
          </div>
       
        </div>
      </div>
    </div>
  );
};

export default AddProduct;

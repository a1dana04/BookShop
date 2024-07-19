import React, { useContext, useState } from 'react';
import { BookShopContext } from '../../context';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const BookDetails = () => {
    const {productAll}= useContext(BookShopContext)
    let {bookId} = useParams()
    // let nav1 = useNavigate()
    let findB = productAll.find((el)=>el.id === +bookId)

    

    return (
        <div id='bookDetails'>
            <div className="container">
                <div className="bookDetails">
                  <Link to={'/'}>  <img src={findB.url} alt="img"width={250} height={350}  /></Link>
              <div className="bookDetails--name">
              <h3>{findB.name}</h3>
              <h4>{findB.price}сом</h4>
              <h5>Жанр:{findB.category}</h5>
              {/* <div className="bookDetails--name__quan">
              <button>-</button>
              <h4>1</h4>
              <button>+</button>
              </div> */}
              {/* <div className="bookDetails--name__desc">
                <h3>Описание</h3>
                <p>{findB.description}</p>
                <button>Добавить в корзину</button>
             
              </div> */}
          
            
              
              
                </div>
                </div>
             
            </div>
            
        </div>
    );
};

export default BookDetails;
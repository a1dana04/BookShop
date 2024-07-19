import React, { useContext } from 'react';
import { BookShopContext } from '../../context';
import { useParams } from 'react-router-dom';
import Hero from '../Hero/Hero';

const Search = () => {
    const {productAll,setProductAll} = useContext(BookShopContext)
    const {searchId} = useParams()
  const serach = productAll.find((el)=>el.name === searchId)
    return (
        <div id='search'>
            <div className="container">
                <div className="search">
               <img src={serach?.url} alt=""width={250} height={350}/>
               <h3>{serach?.price}сом</h3>
               <h4>{serach?.name}</h4>

                </div>
            </div>
           
            
        </div>
    );
};

export default Search;
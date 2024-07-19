import { Route, Routes } from 'react-router-dom';
import './App.scss'
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Basket from './components/Basket/Basket'
import Admin from './components/Admin/Admin';
import AddProduct from './components/AddProduct';
import Footer from './components/Footer/Footer';
import BookDetails from './components/BookDetails/BookDetails';
import Search from './components/Serach/Search';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Hero/> */}
     <main style={{
      minHeight: '100vh'
     }}>
     <Routes>
       <Route path='/' element = {<Hero/>}/>
       <Route path='/basket' element = {<Basket/>}/>
       <Route path='/addProduct' element = {<AddProduct/>}/>
       <Route path='/bookDetails/:bookId' element = {<BookDetails/>}/>
       <Route path='/search/:searchId' element = {<Search/>}/>

       
      </Routes>
     </main>
      <Footer/>
    </div>
  );
}

export default App;

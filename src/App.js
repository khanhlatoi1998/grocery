
import './App.scss';
import Header from './Component/Header';
import Banner from './Component/Banner';
import Feature from './Component/Feature';
import Product from './Component/Product';
import Footer from './Component/Footer';
import Category from './Component/Category';
import Review from './Component/Review';
import Blog from './Component/Blog';

import {useState} from "react" ;



function App() {  

  

  return (
    <div className="App" >
        <Header ></Header>
        <Banner ></Banner>
        <Feature ></Feature>
        <Product ></Product>
        <Category ></Category>
        <Review></Review>
        <Blog></Blog>
        <Footer ></Footer>
    </div>

  );
}

export default App;

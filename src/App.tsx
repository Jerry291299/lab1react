import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Products from './Components/Products';
import Footer from './Components/Footer';
import Banner from './Components/Banner';
import { IProducts } from './interface/products';

function App() {
  const products: IProducts[] =[
    {
      "id": 1,
      "name": "Nissan 1",
      "image": "https://cdn.motor1.com/images/mgl/Bbg6A/s1/2018-nissan-gt-r-nismo-gt3.webp",
      "price": 10,
      "desc": "mo ta 1"
    },
    {
      "id": 2,
      "name": "Nissan 2",
      "image": "https://images2.thanhnien.vn/528068263637045248/2023/5/22/nissan-gt-r-2-16847297803911556358658.jpg",
      "price": 20,
      "desc": "mo ta 2"

    },
    {
      "id": 3,
      "name": "Nissan 3",
      "image": "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F05%2Fnissan-closes-orders-for-2022-gtr-japan-r35-news-tw.jpg?w=1080&cbr=1&q=90&fit=max",
      "price": 30,
      "desc": "mo ta 3"

    },
    {
      "id": 4,
      "name": "Nissan 4",
      "image": "https://hips.hearstapps.com/hmg-prod/images/2024-nissan-gt-r-121-1673621285.jpg?crop=0.922xw:1.00xh;0.0501xw,0&resize=980:*",
      "price": 40,
      "desc": "mo ta 4"

    }


  ]
  return (

<>
<Header/>
<Banner/>
<Products products={products}/>
<Footer/>

</>
    );
}

export default App;

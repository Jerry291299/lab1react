import React from 'react'

import { IProducts } from '../interface/products';
type Props = {
  products: IProducts[];
}
const Products = (props: Props) => {
  const products: any[] = props.products;
  return (
    <>
    <section className="bg-light">
  <div className="container py-5">
    <div className="row text-center py-3">
      <div className="col-lg-6 m-auto">
        <h1 className="h1">Featured Product</h1>
        <p>
          Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident.
        </p>
      </div>
    </div>
    <div className="row">

    {products.map((products: any, index:number)=>{
      return (
        <>
      <div className="col-12 col-md-4 mb-4">
        <div className="card h-100">
          <a href="shop-single.html">
            <img
              src={products.image}
              className="card-img-top"
              alt="..."
            />
          </a>
          <div className="card-body">
            <ul className="list-unstyled d-flex justify-content-between">
              <li>
                <i className="text-warning fa fa-star" />
                <i className="text-warning fa fa-star" />
                <i className="text-warning fa fa-star" />
                <i className="text-muted fa fa-star" />
                <i className="text-muted fa fa-star" />
              </li>
              <li className="text-muted text-right">{products.price}</li>
            </ul>
            <a
              href="shop-single.html"
              className="h2 text-decoration-none text-dark"
            >
{products.name}         
   </a>
            <p className="card-text">
              {products.desc}
            </p>
            <p className="text-muted">Reviews (24)</p>
          </div>
        </div>
      </div>
  
  </>
      )
    })}
    </div>
    </div>

</section>

    </>
  )
}

export default Products
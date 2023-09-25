import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import { addToCartServiceFactory } from "../../services/addToCartService";
import {CheckoutItemTemplate} from "./CheckoutItemTemplate";
import {useState, useEffect} from 'react';

export const Checkout = () => {

  const {token,userId} = useAuthContext();

  const addToCartService = addToCartServiceFactory();
  const [cartItems,setCartItems] = useState([]);
  useEffect(() => {
    addToCartService.getAll()
    .then(result => setCartItems(result.filter(item => item._ownerId === userId)))
  },[]);

    console.log(cartItems);
    return(<>
      <div className="hero">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-5">
            <div className="intro-excerpt">
              <h1>Checkout</h1>
            </div>
          </div>
          <div className="col-lg-7"></div>
        </div>
      </div>
    </div>
        <div className="checkout-page">
            <div className="checkout-window">
            <form className="checkout-form">
            <div className="row">
              <div className="col-6">
                <div className="form-group">
                  <label className="text-black" htmlFor="fname">
                    First name
                  </label>
                  <input type="text" className="form-control" id="fname" />
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label className="text-black" htmlFor="lname">
                    Last name
                  </label>
                  <input type="text" className="form-control" id="lname" />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label className="text-black" htmlFor="email">
                Email address
              </label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="form-group mb-5">
              <label className="text-black" htmlFor="message">
                Address
              </label>
              <input
                name=""
                className="form-control"
                id="message"
                cols={30}
                rows={5}
                defaultValue={""}
              />
            </div>
            <Link to="/thank-you" className="btn btn-primary-hover-outline">
              PAY NOW
            </Link>
          </form>
            <div className="checkout-items">
              <h1>{`Cart Items (${cartItems.length})`}</h1>
                {cartItems.map(item => CheckoutItemTemplate(item))}
            </div>
            </div>

        </div>
        </>
    )
}
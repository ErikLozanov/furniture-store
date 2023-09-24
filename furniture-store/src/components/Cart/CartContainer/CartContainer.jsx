import { useEffect, useState } from "react";
import { addToCartServiceFactory } from "../../../services/addToCartService";
import { CartTemplate } from "./CartTemplate";
import { useAuthContext } from "../../../contexts/AuthContext";
import { Link } from "react-router-dom";
import { useLocalStorage } from "../../../hooks/useLocalStorage";

export const CartContainer = ({token,userId}) => {

      const [items,setItems] = useState([]);
      const addToCartService = addToCartServiceFactory();
      const {setCartItems,cartItems, isAuthenticated} = useAuthContext();

      const removeItemHandler = async (itemId) => {
        if (isAuthenticated) {
        try {
          await addToCartService.deleteItem(itemId)
          
        } catch (error) {
          alert(error.message);
        }
      } else {
        console.log(JSON.parse(localStorage.getItem('cart')).length === 1);

        if(JSON.parse(localStorage.getItem('cart')).length === 1){
          localStorage.clear('cart');
        } else {
          localStorage.setItem('cart', JSON.stringify(items));
        }
      }
      setCartItems(cartItems -1);
      let updatedItems = items.filter(item => item._id !== itemId)
      setItems(updatedItems);
      }

      if(isAuthenticated) {
      useEffect(() => {
        addToCartService.getAll()
        .then(result => setItems(result.filter(item => item._ownerId === userId)))
      },[]);
    } else {
      useEffect(() => {
        localStorage.getItem('cart') ? setItems([...(JSON.parse(localStorage.getItem('cart')))])
        :
        setItems([])
      }, []);
    }
    return (
        <div className="untree_co-section before-footer-section">
          {items.length > 0 && <div className="container">
    <div className="row mb-5">
      <form className="col-md-12" method="post">
        <div className="site-blocks-table">
          <table className="table">
            <thead>
              <tr>
                <th className="product-thumbnail">Image</th>
                <th className="product-name">Product</th>
                <th className="product-price">Price</th>
                <th className="product-total">Total</th>
                <th className="product-remove">Remove</th>
              </tr>
            </thead>
            <tbody>
        {items.length > 0 && items.map(item => CartTemplate(item, removeItemHandler))}
            </tbody>
          </table>
        </div>
      </form>
    </div>
    <div className="row">
      <div className="col-md-6 pl-5">
        <div className="row justify-content-end">
          <div className="col-md-7">
            <div className="row">
              <div className="col-md-12 text-right border-bottom mb-5">
                <h3 className="text-black h4 text-uppercase">Cart Totals</h3>
              </div>
            </div>
            <div className="row mb-5">
              <div className="col-md-6">
                <span className="text-black">Total</span>
              </div>
              <div className="col-md-6 text-right">
                <strong className="text-black">{`$${items.reduce((total, item)=>total+Number(item.price),0)}`}</strong>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <button
                  className="btn btn-black btn-lg py-3 btn-block"
                >
                  Proceed To Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>}
      {items.length === 0 &&   <div className="empty-cart">
  <div className="empty-cart-window">

    <h1>Oops Your Cart is Empty !</h1>
    <div className="click-here-div">
      <Link to="/shop" className="click-here-button">Click here </Link>
    </div>
  <h4>to start shopping and add items to your cart.</h4></div>
  </div>}
</div>

    );
};
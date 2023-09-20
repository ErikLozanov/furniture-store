import { useEffect, useState } from "react";
import { addToCartServiceFactory } from "../../../services/addToCartService";
import { CartTemplate } from "./CartTemplate";
import { useAuthContext } from "../../../contexts/AuthContext";

export const CartContainer = ({token,userId}) => {

      const [items,setItems] = useState([]);
      const addToCartService = addToCartServiceFactory();
      const {setCartItems,cartItems} = useAuthContext();

      useEffect(() => {
        addToCartService.getAll()
        .then(result => setItems(result.filter(item => item._ownerId === userId)))
      },[]);

      const removeItemHandler = async (itemId) => {
        try {
          await addToCartService.deleteItem(itemId)
          
        } catch (error) {
          alert(error.message);
        }
        setCartItems(cartItems -1);
        setItems(items.filter(item => item._id !== itemId));
      }

    return (
        <div className="untree_co-section before-footer-section">
  <div className="container">
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
        {items.length > 0 ? items.map(item => CartTemplate(item,removeItemHandler)) : <tr><td><h3 style={{width:"300px",textAlign:"center",marginTop:"60px"}}>The Cart Is Empty.</h3></td></tr>}
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
  </div>
</div>

    );
};
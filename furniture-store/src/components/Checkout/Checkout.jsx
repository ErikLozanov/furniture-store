import { useAuthContext } from "../../contexts/AuthContext"
import {CheckoutItemTemplate} from "./CheckoutItemTemplate";

export const Checkout = ({items,setItems}) => {

    return(
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
                Message
              </label>
              <textarea
                name=""
                className="form-control"
                id="message"
                cols={30}
                rows={5}
                defaultValue={""}
              />
            </div>
            <button type="submit" className="btn btn-primary-hover-outline">
              Send Message
            </button>
          </form>
            <div className="checkout-items">
              <h1>Cart Items</h1>
                {items.map(item => CheckoutItemTemplate(item))}
            </div>
            </div>

        </div>
    )
}
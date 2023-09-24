import { Link } from "react-router-dom"

export const CartTemplate = (item, removeItemHandler) => {


  return (
        <tr key={item._id}>
        <td className="product-thumbnail">
          <img
            src={item.imgSrc}
            alt="Image"
            className="img-fluid"
          />
        </td>
        <td className="product-name">
          <h2 className="h5 text-black">{item.name}</h2>
        </td>
        <td>${item.price}</td>
        <td>
          {/* <div
            className="input-group mb-3 d-flex align-items-center quantity-container"
            style={{ maxWidth: 120 }}
          >
            <div className="input-group-prepend">
              <button
                className="btn btn-outline-black decrease"
                type="button"
              >
                −
              </button>
            </div>
            <input
              type="text"
              className="form-control text-center quantity-amount"
              defaultValue={1}
              placeholder=""
              aria-label="Example text with button addon"
              aria-describedby="button-addon1"
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-black increase"
                type="button"
              >
                +
              </button>
            </div>
          </div> */}
        </td>
        {/* <td>$49.00</td> */}
        <td>
          <Link to="/cart" onClick={() => removeItemHandler(item._id)} className="btn btn-black btn-sm">
            X
          </Link>
        </td>
      </tr>
    )
}
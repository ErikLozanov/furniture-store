
export const CheckoutItemTemplate = (item) => {

    return (
        <div key={item._id} className="checkout-item">
            <img src={item.imgSrc} alt=""/>
        <div className="item-info">
            <h4>{item.name}</h4>
        </div>
      </div>
    )
}
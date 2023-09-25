
export const CheckoutItemTemplate = (item) => {

    return (
        <div className="checkout-item">
        <img src={item.imageUrl} alt="" />
        <div className="item-info">
            <h4>{item.name}</h4>
            <p>{item.description}</p>
        </div>
      </div>
    )
}
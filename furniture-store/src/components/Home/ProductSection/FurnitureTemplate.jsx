export const FurnitureTemplate = (furniture) => {
    
    return (      
    <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
    <a className="product-item" href="cart.html">
      <img
        src={furniture.imgSrc}
        className="img-fluid product-thumbnail"
      />
      <h3 className="product-title">{furniture.name}</h3>
      <strong className="product-price">${furniture.price}</strong>
    </a>
  </div>
  );
}
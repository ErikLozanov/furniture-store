import { Link } from "react-router-dom";

export const FurnitureTemplate = (furniture) => {
    
    return (    
    <div key={furniture._id} className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
    <Link className="product-item" to={`/details/${furniture._id}`}>
      <img
        src={furniture.imgSrc}
        className="img-fluid product-thumbnail"
      />
      <h3 className="product-title">{furniture.name}</h3>
      <strong className="product-price">${furniture.price}</strong>
    </Link>
  </div>
  );
}
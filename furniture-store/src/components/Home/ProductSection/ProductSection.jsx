import { Link } from "react-router-dom"
import { FurnitureTemplate } from "./FurnitureTemplate"

export const ProductSection = ({furnitures}) => {
    let slicedFurnitures = furnitures.slice(5,9);
    return (
        <div className="product-section">
  <div className="container">
  <div className="row mb-5">
      <div className="col-md-6">
        <h2 className="section-title">Top Sellers</h2>
      </div>
      <div className="col-md-6 text-start text-md-end">
        <Link to="/shop" className="more">
          View All Furnitures
        </Link>
      </div>
    </div>
    <div className="row">
      {slicedFurnitures.map((furniture)=> (FurnitureTemplate(furniture)))}
    </div>
  </div>
</div>

    )
}
import { Link } from "react-router-dom"
import { FurnitureTemplate } from "./FurnitureTemplate"

export const ProductSection = ({furnitures}) => {

    let slicedFurnitures = furnitures.slice(5,9);
    return (
        <div className="product-section">
  <div className="container">
    <div className="row">
      {slicedFurnitures.map((furniture)=> (FurnitureTemplate(furniture)))}
    </div>
  </div>
</div>

    )
}
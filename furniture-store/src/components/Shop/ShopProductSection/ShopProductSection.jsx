import { ProductTemplate } from "./ProductTemplate"



export const ShopProductSection = ({furnitures}) => {



    return (
        <div className="untree_co-section product-section before-footer-section">
  <div className="container">
    <div className="row">
      {furnitures.map(furniture => (ProductTemplate(furniture)))};
    </div>
  </div>
</div>

    )
}
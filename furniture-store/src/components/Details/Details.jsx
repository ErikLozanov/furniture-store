import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { furnitureServiceFactory } from "../../services/furnitureService";
import { addToCartServiceFactory } from "../../services/addToCartService";

export const Details = () => {
    const [furniture,setFurniture] = useState({});
    const {furnitureId} = useParams();
    const furnitureService = furnitureServiceFactory();
    useEffect(()=> {
        furnitureService.getOne(furnitureId)
        .then(res => setFurniture(res))
    },[furnitureId]);

    const addToCartHandler = async () => {
        const addToCartService = addToCartServiceFactory();

        const result = await addToCartService.create({...furniture});
    }

    return (
        <div className="product-window">
            <div className="product-details">

            <img src={furniture.imgSrc} alt="" />
            <div className="product-info">
            <h1>{furniture.name}</h1>
            <h3>Price: ${furniture.price}</h3>
            <p>{furniture.description}</p>
            <div className="buttons">
                <button>Buy Now</button>
                <button onClick={addToCartHandler} >Add to Cart</button>
            </div>
            </div>
            </div>
        </div>
    );
}
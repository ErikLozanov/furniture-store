import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { furnitureServiceFactory } from "../../services/furnitureService";

export const Details = () => {
    const [furniture,setFurniture] = useState({});
    const {furnitureId} = useParams();
    const furnitureService = furnitureServiceFactory();
    useEffect(()=> {
        furnitureService.getOne(furnitureId)
        .then(res => setFurniture(res))
    },[furnitureId]);

    console.log(furniture);
    return (
        <div className="product-window">
            <div className="product-details">

            <img src={furniture.imgSrc} alt="" />
            <div className="product-info">
            <p>{furniture.name}</p>
            <p>{furniture.price}</p>
            </div>
            </div>
        </div>
    );
}
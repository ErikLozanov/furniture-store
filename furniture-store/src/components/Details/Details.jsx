import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { furnitureServiceFactory } from "../../services/furnitureService";
import { addToCartServiceFactory } from "../../services/addToCartService";
import { useAuthContext } from "../../contexts/AuthContext";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export const Details = () => {
    const {setCartItems,cartItems, isAuthenticated} = useAuthContext();
    const [furniture,setFurniture] = useState({});
    const {furnitureId} = useParams();
    const furnitureService = furnitureServiceFactory();

    const [unsignedCart, setUnsignedCart] = useLocalStorage('cart', []);

    useEffect(()=> {
        furnitureService.getOne(furnitureId)
        .then(res => setFurniture(res))
    },[furnitureId]);

    const addToCartHandler = async () => {
        if(!isAuthenticated) {
            setUnsignedCart([...unsignedCart, furniture]);
            setCartItems(cartItems + 1);
            return;
        }

        const addToCartService = addToCartServiceFactory();
        setCartItems(cartItems + 1);
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
import { useAuthContext } from "../../contexts/AuthContext";
import { CartContainer } from "./CartContainer/CartContainer";
import { CartHero } from "./CartHero/CartHero";

export const Cart = () => {

    const {token,userId} = useAuthContext();


    return(
        <>
        <CartHero />

        <CartContainer token={token} userId={userId} />
        </>
    );
};
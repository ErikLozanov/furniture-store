import { HeroSection } from "./HeroSection/HeroSection"
import { ShopProductSection } from "./ShopProductSection/ShopProductSection"


export const Shop = ({furnitures}) => {


    return (
        <>
        <HeroSection />
        <ShopProductSection furnitures={furnitures}/>
        </>
    )
}
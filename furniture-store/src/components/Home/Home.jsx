import { useContext } from "react";
import { BlogSection } from "./BlogSection/BlogSection"
import { HeroSection } from "./HeroSection/Hero"
import { ProductSection } from "./ProductSection/ProductSection"

export const Home = ({furnitures,blogs}) => {

    return (
        <>
        <HeroSection />
        <ProductSection furnitures={furnitures}/>
        <BlogSection blogs={blogs}/>
        </>
    )
}
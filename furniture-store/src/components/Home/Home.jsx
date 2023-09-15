import { BlogSection } from "./BlogSection/BlogSection"
import { HeroSection } from "./HeroSection/Hero"
import { ProductSection } from "./ProductSection/ProductSection"

export const Home = () => {

    return (
        <>
        <HeroSection />
        <ProductSection />
        <BlogSection />
        </>
    )
}
import { BlogSection } from "./BlogSection/BlogSection";


export const Blog = ({blogs}) => {
    console.log(blogs);
    console.log(blogs[0]);
    return (
        <>
            <BlogSection blogs={blogs} />
        </>
    );
};
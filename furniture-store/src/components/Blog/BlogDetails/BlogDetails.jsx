import { useParams } from "react-router-dom"
import { blogServiceFactory } from "../../../services/blogService";
import { useEffect, useState } from "react";

export const BlogDetails = () => {
    const [blog,setBlog] = useState({});
    const {blogId} = useParams();
    const blogService = blogServiceFactory();

    useEffect(()=> {
        blogService.getOne(blogId)
        .then(res => setBlog(res))
    },[blogId]);
    return (
        <div className="blog-window">
                <img src={blog.imgSrc} alt="" />
            <div className="blog-details">
                <h3>{blog.description}</h3>
                <p>{blog.text}</p>
            </div>
        </div>
    )
}
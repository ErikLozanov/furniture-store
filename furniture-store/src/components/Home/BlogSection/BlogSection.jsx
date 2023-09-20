import { Link } from "react-router-dom";
import { BlogTemplateHome } from "./BlogTemplateHome";


export const BlogSection = ({blogs}) => {
    const slicedBlogs = blogs.slice(0,3);
    return (
        <div className="blog-section">
  <div className="container">
    <div className="row mb-5">
      <div className="col-md-6">
        <h2 className="section-title">Recent Blog</h2>
      </div>
      <div className="col-md-6 text-start text-md-end">
        <Link to="/blog" className="more">
          View All Posts
        </Link>
      </div>
    </div>
    <div className="row">
      {slicedBlogs.map(blog => BlogTemplateHome(blog))}
    </div>
  </div>
</div>
    );
};
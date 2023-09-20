import { Link } from "react-router-dom";

export const BlogTemplate = (blog) => {

    return (
        <div key={blog._id} className="col-12 col-sm-6 col-md-4 mb-5">
        <div className="post-entry">
          <Link to={`/blog-details/${blog._id}`} className="post-thumbnail">
            <img src={blog.imgSrc} alt="Image" className="img-fluid" />
          </Link>
          <div className="post-content-entry">
            <h3>
              <a href="#">{blog.title}</a>
            </h3>
            <div className="meta">
              <span>
                by <span >{blog.author}</span>
              </span>{" "}
              <span>
                on <span>{blog.date}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
};
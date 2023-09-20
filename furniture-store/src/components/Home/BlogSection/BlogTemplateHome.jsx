export const BlogTemplateHome = (blog) => {

    return (
      <div key={blog._id} className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
      <div className="post-entry">
        <a href="#" className="post-thumbnail">
          <img src={blog.imgSrc} alt={blog.title} className="img-fluid" />
        </a>
        <div className="post-content-entry">
          <h3>
            <a href="#">{blog.title}</a>
          </h3>
          <div className="meta">
            <span>
              by <a href="#">{blog.author}</a>
            </span>{" "}
            <span>
              on <a href="#">{blog.date}</a>
            </span>
          </div>
        </div>
      </div>
    </div>
    );
};
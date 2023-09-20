import { BlogTemplate } from "./BlogTemplate";


export const BlogSection = ({blogs}) => {

    return (
        <div className="blog-section">
  <div className="container">
    <div className="row">
      {blogs.map(blog => BlogTemplate(blog))}
    </div>
  </div>
</div>

    );
};
import { Link } from "react-router-dom";

const BlogList = ({blogs,title}) => {
    return ( 
        <div className="blog-list">
            <h1>{ title } </h1> 
             {blogs.map((blog)=>(
                     <Link to={ `/blogs/${blog.id}` }>
                <div className="blog-preview" key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p>Ecrit par {blog.author}</p>
            
                    <button>Delete Blog</button>
                </div>
                </Link>
            ))}
        </div>
    );
}
 
export default BlogList;
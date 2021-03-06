import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
   const { data: blogs, isPending } = useFetch('http://localhost:8000/blogs');
    return (  
        <div className="home">
            <h2>Homepage</h2>
            { isPending && <div>Loading...</div>}
           {blogs && <BlogList blogs={blogs} title="All blogs! "/>}
        </div>
    );
}
 
export default Home;
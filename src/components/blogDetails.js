import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "../usefetch";

const BlogDetails = () => {

    const { id } = useParams(); // this is to grab the parameters from the route
    // so now i wan tot grab the data of the each id from the database and display it in the browser using the custom hook function that i use to make request to the endpoint in other to fetch data from the database
    const history = useHistory();
    const {data:blog, isPending, Error} = useFetch(`http://localhost:8000/blogs/${id}`);

    const handleClick= () => {
        fetch(`http://localhost:8000/blogs/${blog.id}`, {
            method:'DELETE' // THIS IS GOING TO DELETE
        }).then(() => {
            history.push('/');
        });
   
    
    }
    return ( 
        <div className="blog-details">
            <h2>Blog Details - { id } </h2>
            {isPending && <div>Loading...</div>}
            {Error && <div> { Error } </div>}
            {blog &&  
                <article>
                    <h2>{ blog.title}</h2>
                    <p>Written by {blog.author} </p>
                    <div> {blog.body} </div>
                    <button onClick={handleClick} // so this button section is to delete and it can only occur by making a request to the endpoint with the method delete
                    >delete 
                    </button> 
                </article>
            }
        </div>
     );
}

export default BlogDetails;
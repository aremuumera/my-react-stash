import { Link } from "react-router-dom/cjs/react-router-dom.min";


const BlogList = ({blogs, title }) => { // handleDelete.... here we add the name props as an argument or i could destructure it by using {blogs, title} as the argument 
    // const blogs = props.blogs; // i have passed the props.blogs, props.title into the component  that need the data and i saved it to a variable but since i am destructing it i don't need to save it to a variable
    // const title = props.title;
    
    return ( 
        <div className="blog-list">
            <h2>{ title }</h2>
            {blogs.map(blog => (  // here i use map to iterate into the data and output it in jsx as each component to be seen on the browser // there will an error at the blogs.map because it doesn't see any data in the file to iterate through whereas the data is in home.js and we also want to use that data in other files so in other to use access the data from here in blogList.js TO HOME.JS WE WILL USE PROPS....
            // THEREFORE PROPS ARE WAY to pass data from a parent component to a child component so that it can be accessed through eg (passing data from a parent  component to a Home page to a all other pages to be accessed)
      // i used blog.id to identify each of the blog components and then append it to the  current blog component list and also this will notify react to update the dom if there is any change in the id to signify the change it ot the actual blog
        <div className="blog-preview" key={blog.id} > 
        <Link to={`/blogDetails/${blog.id}`}> {// i am trying to capture the id of the each of the link using javascript syntax
        }<h2>{ blog.title }</h2>
         <p>Written by { blog.author }</p>
        </Link>
          
          {/* <button onClick= {() => handleDelete(blog.id)}>Delete Blog</button> */}
        </div>
      ))}
        </div>
     );
}
 
export default BlogList;
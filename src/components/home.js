// import React, { useState, useEffect } from 'react';  /
import BlogList from '../blog_list';
import useFetch from '../usefetch';



const Home = () => {

  const {data: blogs, isPending, Error} = useFetch('http://localhost:8000/blogs');
//     const [blogs, setBlogs] = useState( null // sin i am  now using the dj.json server and a generated endpoint to watch the data in it, i am going to fetch the data from the endpoint
//     // { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
//     // { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
//     // { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
//   )
//   const [isPending, setIsPending] = useState(true);
//   const [Error, SetError] = useState(null); // so here i am trying to use the useState to show the Error in the browser
// //   const [name, setState] = useState('mario');
  
//   const handleDelete = (id) => {
//     const newBlogs = blogs.filter(blog => blog.id !== id) // in this case i want to delete each of the blog and deleting each of the blog is based on the id and the filter foes by if any of the id ie(blogs.id) is not equals to any of the id, (it print true and still stay in the array) but if any of the id  ie(blogs.id) is equal to any of the id  (it print false and remove it from the array) in the data
//     setBlogs(newBlogs); // after carrying out the filter task the new data display in the array should be the stored array/ result of the filter method which is saved in a variable named (newsBlog)... this is because the filter method iterate through an array/object and change the data and output it //... so i am setting the blogs to the newBlogs
// };

    // useEffect(() => { // the useEffect Hook runs after every render or initial render of the component and also after when the state or data chnages...
    //     // i can also access th state inside the useEffect but i need to be careful in changing the state inside the useEffect because it could end up to a loop...
    //     fetch('http://localhost:8000/blogs')
    //       .then(res => {
    //         if(!res.ok){
    //           throw Error ('Could not fetch the data for that resource'); // here i am catching the error because there could be a scenario where by the request sent to the endpoint is not correct with what is in the database or a faulty endpoint or an endpoint that does not exist then we catch the err and send the message
    //         }
    //         return res.json();
    //       }).then (data => {
    //       setBlogs(data); /* here we have fetch the data from the server/endpoint*/
    //       setIsPending(false); /* therefore once we have seen the data we then set isPending to false because once the logical operator observe the left is false because we have call the useState of isPending to set to false... therefore,it doesn't output the code on the right to the browser... */
    //       SetError(null);
    //     })
    //       .catch(err => {
    //         setIsPending(false);
    //         SetError(err.message); // this case here i have catch any type of network error or connection error (500) eg.. if the err is coming from the server or the server is not running and set the error to the
    //       })
    // }, []); // so here is were the dependencies array is added and the empty array present will only run the function after the first intial render, thereafter if the state changes or render the useEffect hook function wont run
    // so there is a case where by i don't want to run a function after every single render but it could be only after certain renders we want to the useEffect to fire the function in it // so in other to the do that we need to use dependencies array 
    // the dependencies  array is what we pass to the useEffect hook as a second argument  


    return ( 
        <div className="home">
        {Error && <div>{ Error }</div>} { // so here i am using conditional rendering  like i did for loading if the left is false it doesn't output the right side code to the browser only if it is true it output the right side to the browser
        }{isPending && <div>Loading...</div>} {// in this case since the useState is set to true and the isPending is at the left which is true the logical operator will therefore output the code on the right to the browser and this will output loading while the fetch is going
        }{blogs && <BlogList blogs ={blogs} title="All blogs!"  /> } {//handleDelete = {handleDelete}....... the logical and here evaluates the left first and if the left evaluates to false with the useState, it doesn't evaluates to the right but if the left evaluates as true logical operator moves to the right codes and evaluates the codes to the screen // the blogs ={blogs} is a prop such that we need to pass it down to the child component that needs the data // addition to this the handle delete is a function as prop instead of defining it in the bloglist page we need ti define it in the homepag where the data is and defining it as prop makes the button resuable
        /* <BlogList blogs ={blogs.filter((blog) =>  blog.author === 'mario')} title="Mario's blogs!" // here i want to filter the data by removing the any author that is not mario so i will be using the filter method
        /> */}
    </div>
     );
}
 
export default Home;
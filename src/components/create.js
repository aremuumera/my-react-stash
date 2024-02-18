import {useState} from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"; // this hook is used for redirecting to another path after a successful task or response or request completes

const Create = () => {
    const [title, setTitle] = useState('')// also here this state with the "hello" is acting as the placeholder int he input field // here i want to track the value inputed in the form... therefore, i am setting a state for the that purpose which is (to track the title and set the title).. therefore the initial value of the state is going to be an empty string.... therfore, in other to track the value, i neeed to associate it with were the input with typw title i..... 
    const [body, setBody] =useState('');
    const [author, setAuthor] =useState('mario'); // iam setting it to mario because in the select tag the it has a fix option which is mario and i will be changing it using the onChange event method
    const [isPending, setIsPending] = useState(false); // here i want the setIsPending that i used here to false so that when i set it to be false after the request is successful, it stops showing the loading or when the request is processing and yet to eb successful it keeps showing loading... and this useState id for the form request so it is set false because when we first load the page we are not making the request of the form only when the request is processing or successful
    const history = useHistory(); // so here i am invoking the history hook so that we can use to go forward or backward to the next history and previous history

    const handleSubmit = (e) => { // this is the function defined to submit the form in other for the data inputed to be submitted to the database
        e.preventDefault();
        const blog = {title, body, author}; // so here after the submit event has been carried out... the data inputed into the form are first stored in a variable vis destructuring and then submitted to the database using the post request
        // so after that i fetch the endpoint and pass in a second argument beside the endpoint which is the first argument nad this second argument will contain the method of the request to the endpoint which is (post) and also the 
        setIsPending(true); // it is set true because we are trying to make the request inside the submit function for the form has been 
        fetch('http://localhost:8000/blogs', {
        method: 'POST',
        headers: {"Content-Type": 'application/json'},
        // the body entails the actual data which is the json data i am sending to the server with the post request and the body of the data is in object Which is in jAVASCRIPT before i convert to json is the const blog = {title, body, author}; variable...
        body: JSON.stringify(blog) // THEN HERE I CONVERT THE OBJECT DATA TO JSON 
        //SINCE THE POST REQUEST IS ASYNCHRONOUS WE THEN FIRE A THEN METHOD AND CATCH THEN ERROR 
     }).then(() => {
        console.log('new blog added'); // so this will output to the console when the data request is successful
        setIsPending(false); // here i set it the isPending to be false because the form has been submitted and the data request has completed successfully... therefore setting isPending to false which is true with the useState OF isPending 
        // history.go(-1);
        history.push('/'); // this is used for when the request has successfully been completed, it then redirect to the homage where the result is shown... and here it is the home page that is why i used the '/' which is the path for the  homepage
    })
    };
    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}> 
                <label>Blog title</label>
                <input type="text"
                    required 
                    placeholder="hello world"
                    value={title} // always note that when using any hook and we not to display, access or input it into a component, we turn them into a dynamic value using the destructuring method like it is seen for the value
                    onChange={ (e) => setTitle(e.target.value)} // so here i used the onchange to be able to edit/change the value in the input field because we have originally set the value to something different than the default value  user will input in the input field... therefore with the help of the onchange it will be able to mae the user to edit the value in the input field.
                />{ 
                }<label>Blog body:</label>
                <textarea
                     required 
                     value={body}
                     onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <select
                    value= {author}
                    onChange={(e) => setAuthor(e.target.value)} 
                    ><option value='mario'>mario</option>
                    <option value='yoshi'>yoshi</option>
                </select>
                {!isPending && <button>Add Blog</button>}{ // SO HERE SINCE the leftSide is isPending  and it is set to false using the ! because useState of isPending is false... therefore, this will output the code on the right side which is add blog
                }{isPending && <button disabled >Adding...</button>} {// so now for this case, isPending is true which is on the left side and the useState of isPending is false.. it will not not add the code on the right but adding the disabled will allow the right side to show and this helps because to show the processing of the data before it is successful
                }</form>
        </div>
     );
}
 
export default Create;
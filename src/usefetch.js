// so here i am creating a custom hook where by i can create a fetch request and then use it to get the results from the server/endpoint and i can now make it reusable to be used in any of my files
import  { useState, useEffect } from 'react';

const useFetch = (url) => { // i am passing url/ endpoint here as a parameter here rather than putting it in the fetch because if we are passing using the useFetch hook in other file while making request it might not always be to the same endpoint

    const [data, setData] = useState( null);
    const [isPending, setIsPending] = useState(true);
    const [Error, setError] = useState(null); 
 

    useEffect(() => { // the useEffect Hook runs after every render or initial render of the component and also after when the state or data changes...
        const abortCont = new AbortController(); // so this is the about controller to stop he fetch when the component unmount, and we need to associate it with a fetch
        // i can also access th state inside the useEffect but i need to be careful in changing the state inside the useEffect because it could end up to a loop...
       
        fetch(url, {signal: abortCont.signal})
          .then(res => {
            if(!res.ok){
              throw Error ('Could not fetch the data for that resource'); // here i am catching the error because there could be a scenario where by the request sent to the endpoint is not correct with what is in the database or a faulty endpoint or an endpoint that does not exist then we catch the err and send the message
            }
            return res.json();
          }).then (data => {
          setData(data); /* here we have fetch the data from the server/endpoint*/
          setIsPending(false); /* therefore once we have seen the data we then set isPending to false because once the logical operator observe the left is false because we have call the useState of isPending to set to false... therefore,it doesn't output the code on the right to the browser... */
          setError(null);
        })
         .catch(err => {
           if(err.name === 'AbortError'){
            console.log('fetch Aborted');
           } else{
            setIsPending(false);
            setError(err.message);
           }// this case here i have catch any type of network error or connection error (500) eg.. if the err is coming from the server or the server is not running and set the erroe to the
          })
          
        return () => abortCont.abort();  // in this place i return this callback function as the useEffect cleanup function because i used the useEffect hook and when the component that uses the useFetch and useEffect hook unmount (meaning the component is removed from the dom tree or rendered or removed from the browser) so when the component unmount, it fires the cleanup function and i need to stop/abort the fetch to the router using the abort controller
    }, [ url]);

    return{data, isPending, Error} // i am returning it here because when i use useFetch hook in other Files i want to be able to grab the data from the useFetch file and use 
}

export default useFetch;
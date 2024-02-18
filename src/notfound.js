import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>
            <p>That page cannot be found...</p>
            <Link to='/'>Back to the homepage </Link>
        </div>
     );
}
 
export default NotFound;
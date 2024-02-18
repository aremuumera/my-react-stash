import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <Link to="/">Homepage</Link>
                <Link to="/create" style = {{ // instead of anchor tag, it is link to we will use
                    color: '#fff',
                    backgroundColor: '#f1356d',
                    borderRadius: '8px',
                    
                }}>New blog</Link>
            </div>
        </nav>
    );
}
 
export default NavBar;
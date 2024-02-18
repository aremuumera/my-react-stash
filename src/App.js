
 import NavBar from './components/nav-bar';
 import Home from './components/home';
 import Create from './components/create';
 import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import BlogDetails from './components/blogDetails';
import NotFound from './notfound';


const  App = () =>{

  return (
    <Router> {// this is the router which act as the semi-server between the server and the browser so the router will cover all the app ie(the each files import into the root component)
      }<div className="container">
        <NavBar />
        <div className="content">
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route  path='/create'>
              <Create />
            </Route>
            <Route  path='/blogDetails/:id'>
              <BlogDetails />
            </Route>
            <Route path='*'>
              <NotFound />
            </Route>
          </Switch>
        </div>
    </div>
    </Router>
  );
}


export default App;

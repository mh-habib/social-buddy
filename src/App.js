import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import About from "./components/About/About";
import Home from "./components/Home/Home";
import PostDetail from "./components/PostDetail/PostDetail";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/home">Home</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/home">
          <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/post/:id">
            <PostDetail></PostDetail>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

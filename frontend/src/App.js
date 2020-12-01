import "./App.css";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

// import components
import AdminHome from "./AdminHome";
import PostList from "./PostList";

function App() {
  return (
    <div className="App">
      <Router>
        <h1>
          <Link to="/">All Posts</Link>
        </h1>
        <h1>
          <Link to="/admin">Admin Page</Link>
        </h1>

        <Switch>
          <Route path="/" exact>
            <PostList />
          </Route>
          <Route path="/admin" exact>
            <AdminHome />
          </Route>
          <Route>
            <div>404 page</div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

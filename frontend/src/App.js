import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import components
import AdminHome from "./AdminHome";
import PostList from "./PostList";
import CreatePost from "./CreatePost";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <PostList />
          </Route>
          <Route path="/admin" exact>
            <AdminHome />
          </Route>
          <Route path="/admin/addpost" exact>
            <CreatePost />
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

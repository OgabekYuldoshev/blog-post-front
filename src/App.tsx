import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import HomePage from "pages/Home";
import PostPage from "pages/Post";
import CategoryPage from "pages/Category";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/post/:id" exact component={PostPage} />
        <Route path="/category/:id" exact component={CategoryPage} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;

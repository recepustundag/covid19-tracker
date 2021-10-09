import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
const Home = lazy(() => import("./views/Home"));
const About = lazy(() => import("./views/About"));

const App = () => {
  const location = useLocation();
  return (
    <div className="App">
      <Navbar />
      <Suspense fallback={<div />}>
        <Router>
          <Switch location={location}>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Redirect to="/" />
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
};

export default App;

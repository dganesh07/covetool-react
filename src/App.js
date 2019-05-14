import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import CoursesPage from "./CoursesPage";
import Nav from "./Nav";
import AboutUs from "./AboutUs";
import ManageCoursePage from "./ManageCoursePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <ToastContainer />
      <Nav />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/course/:slug" component={ManageCoursePage} />
        <Route path="/course" component={ManageCoursePage} />
        <Route path="/aboutus" component={AboutUs} />
      </Switch>
    </Router>
  );
}

export default App;

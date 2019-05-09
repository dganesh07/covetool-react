import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./HomePage";
import CoursesPage from "./CoursesPage";
import Nav from "./Nav";
import AboutUs from "./AboutUs";

function App() {
  return (
    <Router>
      <Nav />
      <Route path="/" component={HomePage} exact />
      <Route path="/courses" component={CoursesPage} />
      <Route path="/aboutus" component={AboutUs} />
    </Router>
  );
}

export default App;

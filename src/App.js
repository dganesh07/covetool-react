import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./HomePage";
import CoursesPage from "./CoursesPage";
import Nav from "./Nav";

function App() {
  return (
    <Router>
      <Nav />
      <Route path="/" component={HomePage} exact />
      <Route path="/courses" component={CoursesPage} />
    </Router>
  );
}

export default App;

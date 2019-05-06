import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./HomePage";
import CoursesPage from "./CoursesPage";

function App() {
  return (
    <Router>
      <Route path="/" component={HomePage} />
      <Route path="/courses" component={CoursesPage} />
    </Router>
  );
}

export default App;

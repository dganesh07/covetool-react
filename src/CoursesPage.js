import React from "react";
import { getCourses, deleteCourse } from "./api/courseAPI";
import { Redirect, Link } from "react-router-dom";
import { toast } from "react-toastify";

class CoursePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      courses: [],
      isAdmin: false,
      redirectToAddCourses: false
    };

    //Binding in constructor
    //this.handleDelete = this.handleDelete.bind(this);
  }

  //class field: if you use this you don't have to bind this
  handleDelete = event => {
    //handleDelete(event) { --> if you use Just a method then you have to bind this
    const idToDelete = event.target.name;
    //Remember state is immutable
    //Goal: New courses array, that omits the course with idToDelete

    //Option 1: clone a object
    //const courseCopy = Object.assign([], this.state.courses);

    //Option 2: JSON --> avoid it, its expensive
    //const clone = JSON.parse(JSON.stringify(this.state.course))

    //Option 3: Object spread
    //const courseCopy = [...this.state.course];

    deleteCourse(idToDelete)
      .then(response => {
        //Option USE THIS: ES6 filter
        const courses = this.state.courses.filter(
          course => course.id !== parseInt(idToDelete)
        );

        //This is Async
        this.setState({ courses }, () => {
          toast.success("deleted");
        });
      })
      .catch(error => {
        console.log("OOPS! " + error);
      });
  };

  //Will run when component is mounted
  componentDidMount() {
    getCourses().then(courses => {
      this.setState({ courses: courses });
    });
  }

  renderCourses = course => (
    <tr key={course.id}>
      <td>
        <button onClick={this.handleDelete} name={course.id} type="button">
          Delete
        </button>
      </td>
      <td>
        <Link to={`/course/${course.slug}`}>{course.title}</Link>
      </td>
      <td>{course.category}</td>
    </tr>
  );

  handleAddCourseClick = event => {
    this.setState({ redirectToAddCourses: true });
  };

  render() {
    return (
      <>
        {this.state.redirectToAddCourses && <Redirect to="/course" />}
        <h1>Courses</h1>
        <button type="button" onClick={this.handleAddCourseClick}>
          Add Course
        </button>
        <table>
          <thead>
            <tr>
              <th />
              <th>Title</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>{this.state.courses.map(this.renderCourses)}</tbody>
        </table>
      </>
    );
  }
}

export default CoursePage;

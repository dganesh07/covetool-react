import React from "react";

class CoursePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      courses: [
        { id: 1, title: "Horses for dummies", category: "Pets" },
        { id: 2, title: "Clean code", category: "Programming" }
      ]
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

    //Option USE THIS: ES6 filter
    const courses = this.state.courses.filter(
      course => course.id !== parseInt(idToDelete)
    );

    this.setState({ courses });
  };

  render() {
    return (
      <>
        <h1>Courses</h1>
        <table>
          <thead>
            <tr>
              <th />
              <th>Title</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {this.state.courses.map(course => (
              <tr key={course.id}>
                <td>
                  <button
                    onClick={this.handleDelete}
                    name={course.id}
                    type="button"
                  >
                    Delete
                  </button>
                </td>
                <td>{course.title}</td>
                <td>{course.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default CoursePage;

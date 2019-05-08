import React from "react";

class CoursePage extends React.Component {
  renderCourseRow(course) {
    return (
      <tr key={course.id}>
        <td>{course.title}</td>
        <td>{course.category}</td>
      </tr>
    );
  }

  render() {
    const courses = [
      { id: 1, title: "Horses for dummies", category: "Pets" },
      { id: 2, title: "Clean code", category: "Programming" }
    ];

    return (
      <>
        <h1>Courses</h1>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>{courses.map(this.renderCourseRow)}</tbody>
        </table>
      </>
    );
  }
}

export default CoursePage;

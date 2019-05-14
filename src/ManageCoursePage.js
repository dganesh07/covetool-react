import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

const ManageCoursePage = props => {
  //Hook. Using the useState hook. We use this its a functional component and
  //it doesnt have a constructor so we can set state using hooks
  const [course, setCourse] = useState({
    id: null,
    title: "",
    authorId: "",
    category: ""
  });

  const handleChange = event => {
    //name here is the data that is set in the html element
    const updatedCourse = {
      ...course,
      [event.target.name]: event.target.value
    };
    setCourse(updatedCourse);
  };

  useEffect(() => {
    //I just used this if to stop it from running during the first render as course will be empty
    if (course.title) {
      toast.success(`updated title to ${course.title}`);
    }
  });

  return (
    <form>
      <h1>Manage Course</h1>
      <div>
        <label htmlFor="title">Title</label>
        <br />
        <input
          type="text"
          id="title"
          name="title"
          value={course.title}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="authorId">Author Id</label>
        <br />
        <input
          type="text"
          id="authorId"
          name="authorId"
          value={course.authorId}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="category">Category</label>
        <br />
        <input
          type="text"
          id="categoty"
          name="category"
          value={course.category}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

ManageCoursePage.propTypes = {};

export default ManageCoursePage;

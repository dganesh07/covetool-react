import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import "./ManageCoursePage.css";
import { saveCourse, getCourseBySlug } from "./api/courseAPI";
import TextInput from "./reuseable/TextInput";

const ManageCoursePage = props => {
  //Hook. Using the useState hook. We use this its a functional component and
  //it doesnt have a constructor so we can set state using hooks
  const [course, setCourse] = useState({
    id: null,
    title: "",
    authorId: null,
    category: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = event => {
    //name here is the data that is set in the html element
    const updatedCourse = {
      ...course,
      [event.target.name]: event.target.value
    };
    setCourse(updatedCourse);
  };

  const isValid = () => {
    const _errors = {};
    if (!course.title) _errors.title = "Title is required";
    if (!course.authorId) _errors.authorId = "authorId is required";
    if (isNaN(course.authorId)) _errors.authorId = "it should be a number";
    if (!course.category) _errors.categoty = "category is required";
    // if validation fails then return early
    setErrors(_errors);
    return Object.keys(_errors).length === 0;
  };

  useEffect(() => {
    //match is a react router thing
    const slug = props.match.params.slug;
    if (slug) {
      // get the course from the db
      //[0] is cuz the getCourseBySlug returns an array
      getCourseBySlug(slug).then(course => setCourse(course[0]));
    }
  }, [props.match.params.slug]);

  const handleSubmit = event => {
    event.preventDefault();
    if (!isValid()) return;
    saveCourse(course)
      .then(response => {
        toast.success("saved");
        props.history.push("/course");
      })
      .catch(error => {
        toast.error("booo! save failed");
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Manage Course</h1>

      <TextInput
        id="title"
        name="title"
        value={course.title}
        label="Title"
        error={errors.title}
        onChange={handleChange}
      />

      <TextInput
        id="authorId"
        name="authorId"
        value={course.authorId || ""}
        label="Author ID"
        error={errors.authorId}
        onChange={handleChange}
      />

      <TextInput
        id="category"
        name="category"
        value={course.category}
        label="Category"
        error={errors.category}
        onChange={handleChange}
      />
      <button type="submit">Save</button>
    </form>
  );
};

ManageCoursePage.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default ManageCoursePage;

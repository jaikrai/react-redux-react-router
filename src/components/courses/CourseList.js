import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CourseList = ({ courses }) => (
  <table className="table">
    <thead>
      <tr>
        <th />
        <th>Title</th>
        <th>Author</th>
        <th>Category</th>
      </tr>
    </thead>
    <tbody>
      {courses.map((courseList) => {
        return (
          <tr key={courseList.id}>
            <td>
              <a
                className="btn btn-light"
                href={"http://pluralsight.com/courses/" + courseList.slug}
              >
                Watch
              </a>
            </td>
            <td>
              <Link to={"/course/" + courseList.slug}>{courseList.title}</Link>
            </td>
            <td>{courseList.authorName}</td>
            <td>{courseList.category}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

CourseList.propTypes = {
  courses: PropTypes.array.isRequired,
};

export default CourseList;

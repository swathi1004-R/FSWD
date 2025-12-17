import { useState } from "react";
import "./CourseEnrollment.css";

function CourseEnrollment() {
  const courses = [
    "Web Development",
    "Data Structures",
    "Artificial Intelligence",
    "Machine Learning",
    "Cloud Computing",
  ];

  const [studentName, setStudentName] = useState("");
  const [regNo, setRegNo] = useState("");
  const [year, setYear] = useState("");
  const [section, setSection] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const handleEnroll = (e) => {
    e.preventDefault();

    if (!studentName || !regNo || !year || !section || !selectedCourse) {
      alert("Please fill all fields");
      return;
    }

    if (enrolledCourses.includes(selectedCourse)) {
      alert("Course already enrolled");
      return;
    }

    setEnrolledCourses([...enrolledCourses, selectedCourse]);
    setSelectedCourse("");
  };

  return (
    <div className="enroll-container">
      <div className="enroll-card">
        <h2 className="title">Student Course Enrollment</h2>

        <form className="enroll-form" onSubmit={handleEnroll}>
          <input
            type="text"
            className="input-field"
            placeholder="Student Name"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
          />

          <input
            type="text"
            className="input-field"
            placeholder="Register Number"
            value={regNo}
            onChange={(e) => setRegNo(e.target.value)}
          />

          <select
            className="input-field"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          >
            <option value="">Select Year</option>
            <option value="1st Year">1st Year</option>
            <option value="2nd Year">2nd Year</option>
            <option value="3rd Year">3rd Year</option>
            <option value="4th Year">4th Year</option>
          </select>

          <select
            className="input-field"
            value={section}
            onChange={(e) => setSection(e.target.value)}
          >
            <option value="">Select Section</option>
            <option value="A">Section A</option>
            <option value="B">Section B</option>
            <option value="C">Section C</option>
          </select>

          <select
            className="input-field"
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
          >
            <option value="">Select Course</option>
            {courses.map((course, index) => (
              <option key={index} value={course}>
                {course}
              </option>
            ))}
          </select>

          <button type="submit" className="enroll-btn">
            Enroll Course
          </button>
        </form>
      </div>

      <div className="course-list-card">
        <h3>Enrollment Details</h3>

        <p><strong>Name:</strong> {studentName || "-"}</p>
        <p><strong>Register No:</strong> {regNo || "-"}</p>
        <p><strong>Year:</strong> {year || "-"}</p>
        <p><strong>Section:</strong> {section || "-"}</p>

        <h4>Enrolled Courses</h4>

        {enrolledCourses.length > 0 ? (
          <ul className="course-list">
            {enrolledCourses.map((course, index) => (
              <li key={index} className="course-item">
                {course}
              </li>
            ))}
          </ul>
        ) : (
          <p className="no-course">No courses enrolled yet</p>
        )}
      </div>
    </div>
  );
}

export default CourseEnrollment;

import React, { useState } from "react";

export default function AttendanceTracker() {
  const [students, setStudents] = useState([
    { id: 1, name: "Riya", status: "Absent" },
    { id: 2, name: "krsh", status: "Absent" },
    { id: 3, name: "Swathi", status: "Absent" },
    { id: 4, name: "Kiran", status: "Absent" }
  ]);

  const toggleStatus = (id) => {
    const updated = students.map((student) =>
      student.id === id
        ? { ...student, status: student.status === "Present" ? "Absent" : "Present" }
        : student
    );
    setStudents(updated);
  };

  return (
    <div style={styles.container}>
      <style>{`
        .present {
          background-color: #4CAF50;
          color: white;
        }
        .absent {
          background-color: #e61c19ff;
          color: white;
        }
        button {
          padding: 6px 12px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-weight: bold;
        }
        .card {
          background: violet;
          width: 350px;
          padding: 15px;
          border-radius: 10px;
          box-shadow: 0px 3px 10px rgba(231, 213, 213, 0.2);
          margin-bottom: 15px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      `}</style>

      <h2 style={styles.heading}>Attendance Tracker</h2>

      {students.map((student) => (
        <div key={student.id} className="card">
          <span style={styles.name}>{student.name}</span>
          <button
            className={student.status === "Present" ? "present" : "absent"}
            onClick={() => toggleStatus(student.id)}
          >
            {student.status}
          </button>
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    margin: "40px auto",
    width: "400px",
    textAlign: "center",
    fontFamily: "Arial, sans-serif"
  },
  heading: {
    color: "#333",
    marginBottom: "20px"
  },
  name: {
    fontSize: "18px",
    fontWeight: "bold"
  }
};

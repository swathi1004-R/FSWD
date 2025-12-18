import React, { useState } from "react";

export default function TaskListDashboard() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;
    setList([...list, task]);
    setTask("");
  };

  const removeTask = (index) => {
    const updated = [...list];
    updated.splice(index, 1);
    setList(updated);
  };

  return (
    <div style={styles.container}>
      <style>{`
        .taskCard {
          background: #118a3fff;
          padding: 10px;
          margin: 8px 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-radius: 8px;
          box-shadow: 0px 2px 6px rgba(0,0,0,0.1);
        }
        .btnAdd {
          background: #1976D2;
          color: white;
          border: none;
          padding: 8px 14px;
          border-radius: 6px;
          cursor: pointer;
          margin-left: 10px;
        }
        .btnRemove {
          background: #660d66ff;
          color: white;
          border: none;
          padding: 6px 12px;
          border-radius: 6px;
          cursor: pointer;
        }
        input {
          padding: 8px;
          width: 60%;
          border-radius: 6px;
          border: 1px solid #aaa;
        }
      `}</style>

      <h2 style={styles.heading}>Task List Dashboard</h2>

      <div style={styles.inputBox}>
        <input
          type="text"
          value={task}
          placeholder="Enter new task..."
          onChange={(e) => setTask(e.target.value)}
        />
        <button className="btnAdd" onClick={addTask}>Add</button>
      </div>

      <div>
        {list.map((item, index) => (
          <div key={index} className="taskCard">
            <span style={styles.taskText}>{item}</span>
            <button className="btnRemove" onClick={() => removeTask(index)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: "400px",
    margin: "40px auto",
    textAlign: "center",
    fontFamily: "Arial"
  },
  heading: {
    marginBottom: "20px",
    color: "#222"
  },
  inputBox: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px"
  },
  taskText: {
    fontSize: "16px",
    fontWeight: "bold"
  }
};

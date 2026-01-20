import React, { Component } from "react";
import "./Studentapp.css";
export default class StudentApp extends Component {
  constructor() {
    super();
    this.state = {
      showgrades: false,
      student: {
        name: "Dhanush",
        id: "2500040083",
        department: "ECE",
        cgpa: "9.9",
        courses: ["DDCA", "DSA", "MATHS", "FEDFUI", "CSE"]
      }
    };
  }

  toggleGrades = () => {
    this.setState({ showgrades: !this.state.showgrades });
  };

  render() {
    const { student, showgrades } = this.state;

    return (
      <div className="card">
        <h2>{student.name}</h2>
        <p><strong>ID:</strong> {student.id}</p>
        <p><strong>Department:</strong> {student.department}</p>
        {showgrades&&(
      <div className="details">
        <p><strong>Current GPA:</strong> {student.cgpa}</p>
        <p><strong>Courses Enrolled:</strong></p>
        <ul>
          {
            student.courses.map((course, index) => (
              <li key={index}>{course}</li>
            ))}
        </ul>
        </div>
        )}
        <button className="btn" onClick={this.toggleGrades}>
          {showgrades ? "Hide Details" : "Show Details"}
        </button>
      </div>
    );
  }
}
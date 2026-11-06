import { useState } from "react";

function Patient({ name, patientId, department, initialAge, bloodGroup, mobile }) {
  // Local component state using useState hook
  const [age, setAge] = useState(initialAge);
  const [visitCount, setVisitCount] = useState(1);

  return (
    <div className="patient-card">
      <div className="card-header">
        <h2>Patient Profile</h2>
        <span className="patient-id">{patientId}</span>
      </div>
      <div className="card-body">
        <p><strong>Full Name:</strong> {name}</p>
        <p><strong>Department:</strong> {department}</p>
        <p><strong>Blood Group:</strong> {bloodGroup}</p>
        <p><strong>Contact:</strong> {mobile}</p>
        <p><strong>Current Age:</strong> {age}</p>
        <p><strong>Total Hospital Visits:</strong> {visitCount}</p>
      </div>
      <div className="card-actions">
        {/* Event handling via onClick arrow functions */}
        <button className="btn btn-primary" onClick={() => setAge(age + 1)}>
          Increase Age (+1 Year)
        </button>
        <button className="btn btn-secondary" onClick={() => setVisitCount(visitCount + 1)}>
          Record New Visit
        </button>
      </div>
    </div>
  );
}

export default Patient;
function Patients() {
  // Array of registered patient records
  const patientList = [
    {
      id: 101,
      name: "Aadya Sharma",
      patientId: "PID-001",
      department: "Urology",
      mobile: "9876543210",
      bloodGroup: "O+",
      status: "Admitted"
    },
    {
      id: 102,
      name: "Rajesh Kumar",
      patientId: "PID-002",
      department: "General Medicine",
      mobile: "9812345678",
      bloodGroup: "A+",
      status: "Outpatient"
    },
    {
      id: 103,
      name: "Priya Patel",
      patientId: "PID-003",
      department: "Nephrology",
      mobile: "9765432109",
      bloodGroup: "B-",
      status: "Scheduled"
    },
    {
      id: 104,
      name: "Suresh Nair",
      patientId: "PID-004",
      department: "Pathology Laboratory",
      mobile: "9654321098",
      bloodGroup: "AB+",
      status: "Outpatient"
    }
  ];

  return (
    <div className="page-container">
      <h2>Registered Patient Directory</h2>
      <p>Displaying active patient registration profiles via JavaScript array iteration (`map()`).</p>

      <div className="patient-cards-container">
        {patientList.map((patient) => (
          <div key={patient.id} className="patient-card">
            <div className="card-top">
              <span className="pid-badge">{patient.patientId}</span>
              <span className={`status-pill ${patient.status.toLowerCase()}`}>
                {patient.status}
              </span>
            </div>
            <h3>{patient.name}</h3>
            <p><strong>Department:</strong> {patient.department}</p>
            <p><strong>Blood Group:</strong> {patient.bloodGroup}</p>
            <p><strong>Mobile:</strong> {patient.mobile}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Patients;
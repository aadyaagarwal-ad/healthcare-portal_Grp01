function AppointmentDetails({ appointmentDate, doctorName, status }) {
  return (
    <div className="appointment-card">
      <h3>Next Scheduled Appointment</h3>
      <p><strong>Date:</strong> {appointmentDate}</p>
      <p><strong>Attending Physician:</strong> {doctorName}</p>
      <p>
        <strong>Status: </strong>
        <span className={`status-badge ${status.toLowerCase()}`}>
          {status}
        </span>
      </p>
    </div>
  );
}

export default AppointmentDetails;
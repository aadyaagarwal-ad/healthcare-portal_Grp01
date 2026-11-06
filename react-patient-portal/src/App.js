import Patient from "./Patient";
import AppointmentDetails from "./AppointmentDetails";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Healthcare Patient Portal</h1>
        <p>ABC Healthcare Centre & Research Institute</p>
      </header>

      <main className="portal-content">
        <Patient 
          name="Aadya Sharma" 
          patientId="PID-001" 
          department="Urology" 
          initialAge={24} 
          bloodGroup="O+" 
          mobile="9876543210" 
        />

        <AppointmentDetails 
          appointmentDate="2026-11-15" 
          doctorName="Dr. V. K. Kulkarni" 
          status="Confirmed" 
        />
      </main>

      <footer className="app-footer">
        <p>© 2026 ABC Healthcare. All Rights Reserved. | System Version v2.4.0</p>
      </footer>
    </div>
  );
}

export default App;
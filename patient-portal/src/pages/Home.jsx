import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page-container home-page">
      <div className="hero-section">
        <h1>Welcome to ABC Healthcare Portal</h1>
        <p className="subtitle">
          Integrated Healthcare Management & Urine Test Strip Reader System
        </p>
        <div className="hero-buttons">
          <Link to="/patients" className="btn btn-primary">
            View Patient Directory
          </Link>
          <Link to="/about" className="btn btn-secondary">
            System Overview
          </Link>
        </div>
      </div>

      <div className="features-grid">
        <div className="feature-card">
          <h3>Instant Diagnostics</h3>
          <p>Automated urine test strip reading and digital report generation.</p>
        </div>
        <div className="feature-card">
          <h3>Patient Records</h3>
          <p>Centralized registration and management of medical histories.</p>
        </div>
        <div className="feature-card">
          <h3>Appointment Scheduling</h3>
          <p>Real-time booking across Nephrology, Urology, and Pathology.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
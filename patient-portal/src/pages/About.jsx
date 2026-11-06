function About() {
  return (
    <div className="page-container about-page">
      <h2>About ABC Healthcare Patient Portal</h2>
      <p>
        The Healthcare Patient Portal is a single-page web application (SPA) designed to manage
        patient registration, department scheduling, and diagnostic workflows.
      </p>

      <div className="about-details">
        <div className="info-box">
          <h3>System Technical Specifications</h3>
          <ul>
            <li><strong>Software Version:</strong> v2.4.0</li>
            <li><strong>Academic Year:</strong> 2026-27</li>
            <li><strong>Architecture:</strong> React Component-Based SPA</li>
            <li><strong>Routing:</strong> React Router DOM v6</li>
          </ul>
        </div>

        <div className="info-box">
          <h3>Hospital Contact Information</h3>
          <p><strong>Hospital:</strong> ABC Healthcare Centre & Research Institute</p>
          <p><strong>Emergency Line:</strong> +91 12345 67890</p>
          <p><strong>Support Email:</strong> support@abchealthcare.com</p>
          <p><strong>Address:</strong> Somaiya Vidyavihar Campus, Mumbai-400077</p>
        </div>
      </div>
    </div>
  );
}

export default About;
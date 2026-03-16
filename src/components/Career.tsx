import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Python Developer Intern</h4>
                <h5>Tech Startup · Pune, India</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Developed automation scripts and data processing pipelines.
              Worked on backend Flask APIs and contributed to ML model
              integration for production systems.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelance AI & Automation Developer</h4>
                <h5>Self-employed · Pune, India</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Building custom AI tools, automation workflows with n8n, and
              Python scripts for clients. Delivered 8+ projects including
              web apps, data pipelines, and computer vision systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

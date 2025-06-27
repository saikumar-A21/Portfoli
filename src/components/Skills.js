const Skills = () => {
  const frontend = ['ReactJS', 'Angular', 'JavaScript (ES6)', 'HTML', 'CSS', 'Bootstrap'];
  const backend = ['Core Java', 'Spring Boot', 'RESTful APIs', 'Servlets', 'JSP', 'Microservices'];
  const databases = ['MySQL', 'JDBC'];
  const others = ['Git (Basic)', 'Maven', 'Agile (Scrum)', 'Java 8 Features'];

  return (
    <section id="skills">
      <h2>Technical Skills</h2>
      <h4>Frontend</h4>
      <ul>{frontend.map(skill => <li key={skill}>{skill}</li>)}</ul>
      <h4>Backend</h4>
      <ul>{backend.map(skill => <li key={skill}>{skill}</li>)}</ul>
      <h4>Databases</h4>
      <ul>{databases.map(skill => <li key={skill}>{skill}</li>)}</ul>
      <h4>Tools & Practices</h4>
      <ul>{others.map(skill => <li key={skill}>{skill}</li>)}</ul>
    </section>
  );
};

export default Skills;
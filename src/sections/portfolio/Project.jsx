import Card from "../../components/Card";
import { useState } from "react";
const Project = ({ project }) => {
  const [show, setShow] = useState(false);
  return (
    <Card className="portfolio__project">
      <div className="portfolio__project-image">
        <img src={project.image} alt="Portfolio Project Image" />
      </div>
      <h4>{project.title}</h4>
      {project.desc.split("\n").map((text, i) => (
        <p key={i} className={i > 0 && !show ? "hidden" : ""}>
          {text}
        </p>
      ))}
      <p onClick={() => setShow((pre) => !pre)} className="primary pointer">
        {!show ? "Show more" : "Show less"}
      </p>
      <div className="portfolio__project-cta">
        <a
          href={project.demo}
          className="btn sm"
          target="_blank"
          rel="noopener noreferrer"
        >
          Demo
        </a>
        <a
          href={project.github}
          className="btn sm primary"
          target="_blank"
          rel="noopner noreferrer"
        >
          Gitbub
        </a>
      </div>
    </Card>
  );
};

export default Project;

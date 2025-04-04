import { Link } from 'react-router-dom';

import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

function ProjectCard(props) {
  const { hardskills, cover, githubLink, deployedLink, projectId } = props;

  return (
    <li className="project-card">
      <Link
        to={`/projects/${projectId}`}
        title={`Lien vers la page du projet ${props.children}`}
      >
        <div>
          <img
            className="project-card__cover"
            src={cover}
            alt={`${props.children} cover`}
            height="255px"
            width="100%"
            loading="lazy"
          />

          <div className="project-card__hover-effect">
            <h3>{props.children}</h3>
          </div>
        </div>

        <h3 className="title-mobil">{props.children}</h3>

        {hardskills ? (
          <ul className="hardskills-list">
            {hardskills.map((hardSkill, index) => (
              <li key={index} className="hardskills-list__element">
                {hardSkill}
              </li>
            ))}
          </ul>
        ) : null}
      </Link>
      <div className="project-links">
        {githubLink ? (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            title="Ouvrir la page du code dans un nouvel onglet"
            className="project-link"
          >
            <span>
              <FaGithub className="icon" />
            </span>
          </a>
        ) : null}
        {deployedLink ? (
          <a
            href={deployedLink}
            target="_blank"
            rel="noopener noreferrer"
            title="Ouvrir la page du site dans un nouvel onglet"
            className="project-link"
          >
            <span>
              <FaExternalLinkAlt className="icon" />
            </span>
          </a>
        ) : null}
      </div>
    </li>
  );
}

export default ProjectCard;

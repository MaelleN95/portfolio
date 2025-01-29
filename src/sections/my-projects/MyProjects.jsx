import datas from '../../assets/datas.json';
import ProjectCard from '../../components/project-card/ProjectCard';

function MyProjects() {
  const projects = datas.projects;
  return (
    <section id="my-projects">
      <h2>Mes projets</h2>
      <p>
        Découvrez une sélection de mes réalisations professionnelles et
        personnelles pour avoir un aperçu de mon travail !
      </p>
      <ul className="projects">
        {projects.map((project, i) => {
          return (
            <ProjectCard
              key={i}
              deployedLink={project.linkDeployedSite}
              githubLink={project.linkGitHub}
              hardskills={project.hardSkills}
              cover={project.cover}
              projectId={project.projectId}
            >
              {project.title}
            </ProjectCard>
          );
        })}
      </ul>
    </section>
  );
}

export default MyProjects;

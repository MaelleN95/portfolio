import { useParams } from 'react-router-dom';

import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import ProjectFormInfo from '../components/project-form/ProjectFormInfo';
import ProjectFormImages from '../components/project-form/ProjectFormImages';
import { ErrorBoundary } from '../components/ErrorBoundary';
import ErrorPage from './ErrorPage';

import projects from '../assets/projects.json';

function AdminProject() {
  let { projectsId } = useParams();
  const project = projects.find((pro) => pro.id === projectsId);

  return (
    <>
      <ErrorBoundary errorRedirection={<ErrorPage />}>
        <Header />
        <main className="modification">
          <h1>Modification</h1>
          <section id="modification-informations">
            <h2>Informations</h2>
            <ProjectFormInfo project={project} />
          </section>

          <section id="modification-images">
            <h2>images</h2>
            <ProjectFormImages project={project} />
          </section>
        </main>
        <Footer />
      </ErrorBoundary>
    </>
  );
}

export default AdminProject;

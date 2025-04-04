import {
  useRouteError,
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import ScrollToTop from './utils/ScrollToTop';

import Home from './pages/Home';
import Projects from './pages/Projects';
import ErrorPage from './pages/ErrorPage';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function ErrorBoundary() {
  const error = useRouteError();
  console.error(error);
  // Uncaught ReferenceError: path is not defined
  return <ErrorPage />;
}

function Routing() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} errorElement={<ErrorBoundary />} />
        <Route
          path="/projects/:projectsId"
          element={<Projects />}
          errorElement={<ErrorBoundary />}
        />
        <Route
          path="*"
          element={<ErrorPage />}
          errorElement={<ErrorBoundary />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default Routing;

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import './App.css';
import ReactHookForm from './components/ReactHookForm';
import ReactQuery from './components/ReactQuery';

const queryClient = new QueryClient();

const Home = () => (
  <div>
    <h1>Главная Страница</h1>
  </div>
);
const About = () => <h1>О нас</h1>;
const NotFound = () => <h1>Страница не найдена</h1>;

const Navigation = () => (
  <nav>
    <Link to="/">React Router Dom</Link> |
    <Link to="/about"> React Router Dom</Link> |
    <Link to="/react-query"> React Query</Link> |
    <Link to="/react-hook-form"> React Hook Form</Link>
  </nav>
);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/react-query" element={<ReactQuery />} />
          <Route path="/react-hook-form" element={<ReactHookForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;

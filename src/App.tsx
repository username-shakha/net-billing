import { Routes, Route } from 'react-router-dom';

import { CalendarPage, HomePage, NotFoundPage } from './pages';
import { Navbar } from './components';

import './App.css';
import './App.scss';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;

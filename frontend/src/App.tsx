import { Link, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';

export default function App() {
  return (
    <div className="app-shell">
      <header>
        <h1>WordPress Guide Platform</h1>
        <nav>
          <Link to="/">Início</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
    </div>
  );
}

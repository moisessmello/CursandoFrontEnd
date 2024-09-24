import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AnimeList from './components/AnimeList';
import AnimeDetails from './components/AnimeDetails';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Animes</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<AnimeList />} />
          <Route path="/anime/:id" element={<AnimeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

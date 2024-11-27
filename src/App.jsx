import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MovieProvider } from './context/MovieContext';
import HomePage from './pages/HomePage';
import MovieDetail from './components/MovieDetail';

function App() {
    return (
        <MovieProvider>
            <Router>
                <div className="min-h-screen bg-black ">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/movie/:id" element={<MovieDetail />} />
                    </Routes>
                </div>
            </Router>
        </MovieProvider>
    );
}

export default App;
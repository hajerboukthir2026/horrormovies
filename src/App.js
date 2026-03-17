import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HeroVideo from './Components/HeroVideo';
import MoviesSection from './Components/MoviesSection';
import Footer from './Components/Footer';
import MovieDetail from './Components/MovieDetail';

function HomePage() {
  return (
    <>
      <HeroVideo />
      <MoviesSection />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
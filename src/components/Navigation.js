import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from "./Footer";
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

export default function Content() {
  const [currentPage, setCurrentPage] = useState('About');

  useEffect(() => {
    document.title = "Sevag Gaprielian Portfolio"
 }, []);

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>

      <Header currentPage={currentPage} handlePageChange={handlePageChange} />

      {renderPage()}

      <Footer />
    </div>
  );
}


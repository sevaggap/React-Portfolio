import React from 'react';

function Header({ currentPage, handlePageChange }) {
  
  const styles = {
    title: {
      marginLeft: '1rem',
    }
  };
  return (
    <nav class="navbar navbar-expand-sm navbar-light bg-light" >
    <a class="navbar-brand m" 
    style={styles.title} 
    href="#about" 
    onClick={() => handlePageChange('About')}>Sevag Gaprielian Portfolio</a>
    
    <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a 
          href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
           About 
        </a>
        </li>
        <li class="nav-item">
        <a 
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
           Portfolio 
        </a>
        </li>
        <li class="nav-item">
        <a 
          href="#Contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
           Contact 
        </a>        
        </li>
        <li class="nav-item">
        <a 
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>        
        </li>
      </ul>
    </div>
  </nav>
  );
}

export default Header;

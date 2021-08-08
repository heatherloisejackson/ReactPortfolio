import React from 'react';
import SiteContent from '../02-SiteContent';
import About from '../05-About';
import Portfolio from '../06-Portfolio';
import Contact from '../08-Contact';
import Resume from '../09-Resume';

function Page({ currentPage }) {

  const renderPage = () => {
    switch (currentPage.name) {
      case 'About Me':
        return <About />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;
      default:
        return <About />;
    }
  };

  return (
    <section>
      <h2>{currentPage.name}</h2>
      <SiteContent>{renderPage()}</SiteContent>
    </section>
  );
}
export default Page;
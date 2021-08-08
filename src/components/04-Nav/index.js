import React, { useEffect } from 'react';

function Nav(props) {
  const {
    pages = [],
    setCurrentPage,
    currentPage,
  } = props;

  useEffect(() => {
    document.title = currentPage.name;
  }, [currentPage]);

  return (    
      <nav>
        <ul className="flex-row">
          {pages.map((Site) => (
            <li
              className={`mx-5 ${
                currentPage.name === Site.name && 'navActive'
                }`}
              key={Site.name}
            >
              <span
                onClick={() => setCurrentPage(Site)}
              >
                {Site.name}
              </span>
            </li>
          ))}
        </ul>
      </nav>
  );
}

export default Nav;
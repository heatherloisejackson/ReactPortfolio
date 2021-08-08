import React from 'react';
import coverImage from '../../assets/header/bg-masthead.jpg';

function Header(props) {

  return (
    <header>
      <h1>Heather Jackson</h1>
      <img src={coverImage} alt="background"></img>
      {props.children}
    </header>
  );
}

export default Header;

// className="flex-row space-between px-1"
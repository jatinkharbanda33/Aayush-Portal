import React from 'react';
import './header.css'; // Create this file for styling

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        {/* LinkedIn logo and search bar */}
        <img src="" alt="logo" />
        <input type="text" placeholder="search"/>
      </div>
      <div className="header__right">
        
        {/* Profile picture and navigation links */}
        <button type="submit">SIGN IN</button>
      </div>
    </div>
  );
}

export default Header;

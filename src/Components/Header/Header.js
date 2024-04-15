// Header.js

import React from 'react';

import './Header.css'; // Import CSS file for styling

const Header = ({ userProfile }) => {

    return (

        <div className="header">

            <div className="profile">

                <img src={userProfile.picture} alt={userProfile.name} className="profile-picture" />

                {/* {userProfile.name} */}

            </div>

            <div className="menu-icon">☰</div>

        </div>
    );
};

export default Header;

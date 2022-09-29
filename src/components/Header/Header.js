import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header-container'>
            <Link to='/'>Home</Link>
            <Link to='/addedPeople'>Added People</Link>
            <Link to='/form'>Form</Link>
            <Link to='/update'>Update</Link>
            <Link to='/delete'> Delete</Link>
        </div>
    );
};

export default Header;
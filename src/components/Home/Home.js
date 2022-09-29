import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
    return (
        <div className='home-container'>
            <h3>You can : </h3>
            <Link to='/form'>Add People</Link>
            <Link to='/delete'>Delete People</Link>
            <Link to='/update'>Update People</Link>
        </div>
    );
};

export default Home;
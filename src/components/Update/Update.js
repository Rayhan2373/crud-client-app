import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Update = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/people')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [users])
    const handleWithUpdate = id => {
        const url = `http://localhost:5000/people/${id}`
        fetch(url, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {

            })
    }
    return (
        <div>
            <div className='details-container'>
                {
                    users.map(user =>
                        <div key={user._id}>
                            <p>Name : {user.name}</p>
                            <p><small>Email : {user.email}</small></p>
                            <Link to={`/update/${user._id}`}>
                                <button onClick={() => handleWithUpdate(user._id)}>Update this person</button>
                            </Link>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Update;
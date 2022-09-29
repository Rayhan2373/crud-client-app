import React, { useEffect, useState } from 'react';
import './AddedPeople.css'

const AddedPeople = () => {
    const [users, setUsers] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/people')
        .then(res=> res.json())
        .then(data=> setUsers(data))
    } ,[])
    return (
        <div>
            <h2>This is Added People {users.length}</h2>
            <div className='details-container'>
                {
                    users.map(user=> 
                        <div key={user._id}>
                            <p>Name : {user.name}</p>
                            <p><small>Email : {user.email}</small></p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default AddedPeople;
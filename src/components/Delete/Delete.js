import React, { useEffect, useState } from 'react';
import './Delete.css'

const Delete = () => {
    const [users, setUsers] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/people')
        .then(res=> res.json())
        .then(data=> setUsers(data))
    } ,[users])
    const handleWithDelete=id=>{
        const url = `http://localhost:5000/people/${id}`
        fetch(url, {
            method:'DELETE'
        })
        .then( res=> res.json())
        .then(data=>{
            if(data.deletedCount>0){
                const remaining = users.filter(user=> user._id !== id)
                setUsers(remaining)
            }
        })
    }
    return (
        <div className='details-container'>
            {
                users.map(user=> 
                    <div key={user._id}>
                        <p>Name : {user.name}</p>
                        <p><small>Email : {user.email}</small></p>
                        <button onClick={()=>handleWithDelete(user._id)}>Delete this person</button>
                    </div>
                )
            }
        </div>
    );
};

export default Delete;
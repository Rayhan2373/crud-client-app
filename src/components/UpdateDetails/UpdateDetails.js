import React from 'react';
import { useParams } from 'react-router-dom';

const UpdateDetails = () => {
    const {id} = useParams()
    const handleWithUpdate=(event)=>{
        event.preventDefault()
        const name = event.target.name.value
        const email = event.target.email.value
        const person = {name, email}
        fetch(`http://localhost:5000/people/${id}`,{
            method:'PUT',
            headers : {
                'content-type' : 'application/json'
            } ,
            body : JSON.stringify(person)

        })
        .then(res=> res.json())
        .then(data=> {
            alert('SuccessFully Updayed')
            event.target.reset()
            
        })
    }
    return (
        <div>
        <h2>Updating People's ID :  {id}</h2>
        <form onSubmit={handleWithUpdate}>
        <input type='text' name='name' placeholder='Enter your Name'/>  <br/> <br/>
        <input type='email' name='email' placeholder='Enter your Email'/>  <br/> <br/>
        <input type='submit' value='Update this Person'/>
        </form>
    </div>
    );  
};

export default UpdateDetails;
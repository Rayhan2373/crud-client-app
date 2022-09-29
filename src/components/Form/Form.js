import React from 'react';

const Form = () => {

    const handleWithForm=(event)=>{
        event.preventDefault()
        const name = event.target.name.value
        const email = event.target.email.value
        const person = {name, email}
        fetch('http://localhost:5000/people',{
            method:'POST',
            headers : {
                'content-type' : 'application/json'
            } ,
            body : JSON.stringify(person)

        })
        .then(res=> res.json())
        .then(data=> {
            alert('SuccessFully Added')
            event.target.reset()
            
        })
    }
    return (
        <div>
            <h2>Add People in your DB</h2>
            <form onSubmit={handleWithForm}>
            <input type='text' name='name' placeholder='Enter your Name'/>  <br/> <br/>
            <input type='email' name='email' placeholder='Enter your Email'/>  <br/> <br/>
            <input type='submit' value='Add this Person'/>
            </form>
        </div>
    );
};

export default Form;
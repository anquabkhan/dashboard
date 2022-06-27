import React from 'react';
import PropTypes from 'prop-types';

const Login = () => {
    const user = {
        'user': 'anquab',
        'password': '123'
    }

    const validate = (event) => {
        event.preventDefault()
        // console.log(event.target.username.value)
        // console.log(event.target.password.value)
        if(event.target.username.value == user.user && event.target.password.value == user.password){
            console.log("succesfull")
        }else{
            console.log("failed")

        }
    }

    return (
        <div>
           <form onSubmit={validate}>
                <input type="text" placeholder='Username' name='username'/>   
                <input type="text" placeholder='Password' name='password'/>
                <input type="submit" />
            </form> 
        </div>
    );
};

// Login.propTypes = {
    
// };

export default Login;



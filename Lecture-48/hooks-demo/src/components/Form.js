import React, { useState,useRef } from 'react'
import useFormInp from '../hooks/useFormInp';

const Form = () => {

    const [username, setUsername,resetUsername] = useFormInp();
    const [password,setPassword,resetPassword] = useFormInp();

    const emailInpRef = useRef();


    const formSubmitHandler = (event) => {
        event.preventDefault();
        console.log(username);
        console.log(password);
        console.log(`This is using useRef : ${emailInpRef.current.value}`);
        resetUsername();
        resetPassword();
        emailInpRef.current.value = "";
    }

    // const usernameChangeHandler = (event) => {
    //     setUsername(event.target.value);
    // }

    // const passwordChangeHandler = (event) => {
    //     setPassword(event.target.value);
    // }

    return (
        <form onSubmit={formSubmitHandler}>
            <label htmlFor='username'>Username</label>
            <input onChange={(event)=>setUsername(event.target.value)} type="text" placeholder='username' id="username" value={username} />
            <label htmlFor='password'>Password</label>
            <input onChange={(event)=>setPassword(event.target.value)} type="password" placeholder='password' id="password" value={ password} />
            <label htmlFor='email'>Email</label>
            <input type="email" placeholder='email' id="email" ref={ emailInpRef } />
            <button>Submit</button>
      </form>
    )
}

export default Form;
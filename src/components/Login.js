import React from 'react'
import { useState } from 'react';
import { useNavigate, Link} from "react-router-dom";
import axios from "react-axios";
import '../view/Login.css'

export default function Login() {

    const {email, setEmail} =useState('');
    const {password, setPassword} =useState('');

    async function submit(e){
        e.preventDefault();

        try{
            await axios.Post("http//localhost:3000",{
            email, password
        })
        }catch{
            console.log(e);

        }
    }


  return (
    <div className='vh-100'>
        <div className='row'>
            <div className='d-flex col-8 col-md-5 offset-4 offset-md-7 bg-light vh-100 justify-content-center align-items-center'>
                <div className="box p-2 shadow-sm">
                    <div className='content'>
                        <h2>Effettua il login:</h2>
                        <form action='POST'>
                            <input type = "email" onChange={(e) =>{setEmail(e.target.value)}} placeholder="Email" name = "" id =""/> <br/>
                            <input type = "password" onChange={(e) =>{setPassword(e.target.value)}} placeholder="Password" name = "" id =""/> <br/>
                            <button type="submit" className='btn btn-outline-primary' onClick={submit}>succhia</button>
                
                        </form>
                        <Link to="/singup"> Non ancora registrato? Registrati!</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

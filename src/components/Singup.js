import React from 'react'
import { useState } from 'react';
import { useNavigate, Link} from "react-router-dom";
import axios from "react-axios";
import '../view/Login.css'
import Mongo from './Mongo.js'


export default function Singup() {
  const {email, setEmail} =useState('');
  const {password, setPassword} =useState('');
  const{username,setUsername} = useState('');
  
    
    async function submit(e){
        e.preventDefault();

        try{
            await axios.Post("http//localhost:3000/singup",{
            email, password
        })
        }catch{
            console.log(e);

        }
    }
    

  return (
//     <div className='Singup'>
//     <div class="box">
//         <div class='content'>
//         <h2>Registrati:</h2>
//         <form action='POST'>
//             <input type="username" onCharnge={(e) =>{setUsername(e.target.value)}} placeholder='Username' name="" /> <br/>
//             <input type = "email" onChange={(e) =>{setEmail(e.target.value)}} placeholder="Email" name = "" /> <br/>
//             <input type = "password" onChange={(e) =>{setPassword(e.target.value)}} placeholder="Password" name = "" /> <br/>
//             <input type = "password" onChange={(e) =>{setPassword(e.target.value)}} placeholder="Conferma Password" name = "" /> <br/>
//             <input type="submit" onClick={submit}/>
              
    
//         </form>
//         </div>
//         <Link to="/"> Sei già registrato? Accedi!</Link>
//     </div>
// </div>
<div className='vh-100'>
<div className='row'>
    <div className='d-flex col-8 col-md-5 offset-4 offset-md-7 bg-light vh-100 justify-content-center align-items-center'>
        <div className="box p-2 shadow-sm">
            <div className='content'>
                <h2>Effettua il login:</h2>
                <form action='POST'>
                    <input type = "email" onChange={(e) =>{setEmail(e.target.value)}} placeholder="Email" name = "" id =""/> <br/>
                    <input type = "password" onChange={(e) =>{setPassword(e.target.value)}} placeholder="Password" name = "" id =""/> <br/>
                    <button type="submit" className='btn btn-outline-primary' onClick={submit}>Invia</button>
                </form>
                <Link to="/singup"> Non ancora registrato? Registrati!</Link>
            </div>
        </div>
    </div>
</div>
</div>

  )
}

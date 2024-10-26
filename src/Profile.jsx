import axios from 'axios';
import React, { useState } from 'react'

const Profile = () => {
    const [emailId,setEmailId] = useState('');
    const [password,setPassword] = useState('');
    const handleLogin =async () =>{
        try{
            const res = axios.post("http://localhost:7777/login",{
                emailId,password
            },{withCredentials:true})


        } catch(err){
            console.log(err)
        }
    }
  return (
    <div className='flex justify-center my-10'>
        <div className="card bg-base-200 w-96 shadow-xl">
            <div className="card-body">
                <h2 className="card-title justify-center">Login</h2>
            <div>
            <label className="form-control w-full max-w-xs my-2">
                <div className="label">
                <span className="label-text">Email Id</span>
                </div>
                <input type="text" value={emailId} onChange={(e)=>setEmailId(e.target.value)} className="input input-bordered w-full max-w-xs" />
        
            </label>
            <label className="form-control w-full max-w-xs my-2">
                <div className="label">
                    <span className="label-text">Password</span>
                </div>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="input input-bordered w-full max-w-xs" />
            
            </label>

            </div>
            <div className="card-actions justify-center">
            <button className="btn btn-primary" onClick={handleLogin}>Login</button>
            </div>
        </div>
        </div>
      
    </div>
  )
}

export default Profile

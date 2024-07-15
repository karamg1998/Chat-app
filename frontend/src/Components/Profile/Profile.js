import "./profile.css";
import Navbar from "../Navigation/Navigation";
import { Link } from "react-router-dom";
import React, {  useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function Profile() {
 
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [phone,setPhone]=useState('');

  useEffect(()=>{
    fetch();
  });

  let user=JSON.parse(localStorage.getItem('token'));
  async function fetch()
  {
    try{
      await  axios.get("http://localhost:4000/profile",{headers:{'token':user.token}})
        .then(res=>{
          console.log(res.data)
         localStorage.setItem('info',JSON.stringify(res.data));
          setName(res.data.name);
          setEmail(res.data.email);
          setPhone(res.data.phone);
        })
    }
    catch(err)
    {
      console.log(err);
    }
  }
  
  return (
    <div className="profile-container">
      <Navbar></Navbar>
      <form className="profile-form">
        <label className="name">Name:{name}</label><br></br><br></br>
        <label className="email">Email:{email}</label><br></br><br></br>
        <label className="phone">Phone:{phone}</label><br></br><br></br>
      </form>
    </div>
  );
}

export default Profile;

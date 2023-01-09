import React from 'react'
import '../App.css';
import { useState } from 'react';

export default function Home() {

    
    const [fName, setfName] = useState();
    const [lName, setlName] = useState();
    const [nhi, setnhi] = useState();
    const [showForm, setShowForm] = useState();

    const handleForm = (e) =>{
        e.preventDefault();
        setShowForm(false);
    }

    if (!showForm){
        return <p>{fName}</p>
    }
  return (
    <div className="Home">
        

        <div className = "Container">
        <h1>DKA Guide</h1>
        <form onSubmit={handleForm}>
            <label> Patient's firstname</label>
            <input type = "text" required value = {fName} onChange = {(e) => setfName(e.target.value)}/>
            <label> Patient's lastname</label>
            <input type = "text" required value = {lName} onChange = {(e) => setlName(e.target.value)}/>
            <label> Patient's NHI</label>
            <input type = "text" required value = {nhi} onChange = {(e) => setnhi(e.target.value)}/>
            <button type = "submit"> Submit </button>
        </form>
        <p>{fName}</p>
        <p>{lName}</p>
        <p>{nhi}</p>
        </div>
    </div>
  )
}

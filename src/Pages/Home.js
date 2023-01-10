import React from 'react'
import '../App.css';
import { useState, useEffect } from 'react';
import firebase from './firebase';
import { hydrate } from 'react-dom';



export default function Home() {
    const [fName, setfName] = useState(" ");
    const [lName, setlName] = useState();
    const [nhi, setnhi] = useState();
    const [showForm, setShowForm] = useState(true);

    const [bsl, setBsl] = useState();
    const [ketones, setKetones] = useState();

    const handlereset = ()=>{
        localStorage.clear();
        window.location.pathname = "/Home";
    }

    useEffect (()=>{
        const data = window.localStorage.getItem('formIntro');
        console.log(data);
        if (data!==null){setShowForm(JSON.parse(data))}
    }, [])
    useEffect(()=>{
        window.localStorage.setItem('formIntro', JSON.stringify(showForm))
    }, [showForm])

    const handleForm = (e) =>{
        e.preventDefault();
        setShowForm(false);
    }

    

    if (!showForm){
        return (
            <div className = "results">
            <form>
                <label> Enter BSL</label>
                <input type = "number" required value = {bsl} onChange= {(e)=> setBsl(e.target.value)}/>
                <label> Enter Ketones</label>
                <input type = "number" required value = {ketones} onChange= {(e)=> setKetones(e.target.value)}/>
                <button type = "submit"> Submit </button>
            </form>
            <button onClick={handlereset}>Reset</button>
            </div>
        )
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

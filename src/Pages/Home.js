import React from 'react'
import '../App.css';
import { useState, useEffect } from 'react';
import PatientDataService from "./databaseservice";
import Cookies from 'js-cookie';




export default function Home() {


    const [fName, setfName] = useState(" ");
    const [lName, setlName] = useState();
    const [nhi, setnhi] = useState();
    const [weight, setWeight] = useState();
    const [showForm, setShowForm] = useState(true);
    const [isValid, setIsValid] = useState(true);

    const [bsl, setBsl] = useState();
    const [ketones, setKetones] = useState();
    const [potassium, setPot] = useState();
    const [Instruct, setInstruct] = useState();
    const [KetoneInstruction, setKetoneInstruction] = useState();
    const [InstructWeight, setInstructWeight] = useState();
    const weightCookie = Cookies.get('weight');
    const previousKetone = Cookies.get('ketone');
    const rate = Math.round (0.1*weightCookie *10)/10;
    const handlereset = ()=>{
        localStorage.clear();
        window.location.pathname = "/Home";
        Cookies.set('ketone', undefined);
    }



    const recordresults = async(e)=>{
        e.preventDefault();
        console.log("click");
        const result = {
            bsl,
            ketones,
            potassium
        }
        try{
        await PatientDataService.addResults(result);
        }
        catch{
            console.log("Error")
        }
            if ( bsl < 4){
                setInstruct("Blood sugars less than 4. STOP INSULIN INFUSION. If patient responsive give x2 hypokits. If unresponsive call 777 and administer bolus dextrose infusion.")
            }
            else if (bsl > 14){
                setInstruct("Blood sugars over 14. Decrease Dextrose infusion by 25ml/hr.");
            }
            else if (bsl < 10 && bsl >4){
                setInstruct("Blood sugars below 10. Increase Dextrose infusion by 25ml/hr");
                
            }

            if (previousKetone == "undefined"){

                Cookies.set('ketone', ketones);
            }
            else if (previousKetone - ketones < 0.6){
                if (bsl > 4){
                setKetoneInstruction("Ketones not resolved by 0.6mmol/hr. Increase Insulin by 1unit/hr");
                }
                else {
                    setKetoneInstruction("");
                }
                Cookies.set('ketone', ketones);
            }
            else if (previousKetone - ketones > 0.6){
                if (bsl > 4){
                setKetoneInstruction("Ketones resolved by 0.6. Continue current rate of insulin");
                }
                else {
                    setKetoneInstruction("");
                }
                Cookies.set('ketone', ketones);
            }
            // else if (ketones - previousKetone > 0.6){
            //     console.log(ketones - previousKetone > 0.6);
            // Cookies.set('ketone', ketones)
            // setKetoneInstruction("Ketones not resolving by 0.6. Increase Insulin infusion by 1unit/hr");

            // }
        
    }
    //saving patients data to database
    const handleForm = async(e) =>{
        e.preventDefault();
        const newPatient = {
            nhi,
            fName,
            lName,
            weight
        }

            await PatientDataService.addPatients(newPatient);
            Cookies.set('weight', weight);
            
            setShowForm(false);
        
    }
    //storing boolean value in localstorage to go inbetween forms
    //https://www.youtube.com/watch?v=rWfhwW9forg&ab_channel=ColbyFayock - used this video to change forms due to saving value to local storage
    useEffect (()=>{
        const data = window.localStorage.getItem('formIntro');
        console.log(data);
        if (data!==null){setShowForm(JSON.parse(data))}
    }, [])
    useEffect(()=>{
        window.localStorage.setItem('formIntro', JSON.stringify(showForm))
    }, [showForm])

    

    if (!showForm){
        return (
            <div className="content">
                <div className="setup">
                <h1>DKA Protocol</h1>
                <h3>This application will help guide and track once bsl's and ketones are submitted.
                </h3>
                <h4> - Ensure patient has two IVC lines prior to starting</h4>
                <h4> - Ketone and bsl testing should be entered every hour with the serum potassium level</h4>
                <h4> - Patient weighs {weightCookie} kg. Start novorapid infusion at {rate} units/hr</h4>
            </div>
            <div className= "cont">
            <div className = "results">
            <form onSubmit={recordresults}>
                <label> Enter BSL</label>
                <input type = "number" required value = {bsl} onChange= {(e)=> setBsl(e.target.value)}/>
                <label> Enter Ketones</label>
                <input type = "number" required value = {ketones} onChange= {(e)=> setKetones(e.target.value)}/>
                <label> Enter Potassium level</label>
                <input type = "number" required value = {potassium} onChange= {(e)=> setPot(e.target.value)}/>
                <button type = "submit" className="submittwo" > Submit </button>
                <button onClick={handlereset} className="reset">Reset</button>
            </form>
            </div>
            <div className = "Instructions">
                <h3>{Instruct}</h3>
                <h3>{KetoneInstruction}</h3>
                <h3>{potassiumInstruction}</h3>
            </div>
            </div>
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
            <label> Patient's Weight</label>
            <input type = "text" required value = {weight} onChange = {(e) => setWeight(e.target.value)}/>
            <button type = "submit" className="Submitone"> Submit </button>
        </form>
        <p></p>
        </div>
    </div>
  )

}

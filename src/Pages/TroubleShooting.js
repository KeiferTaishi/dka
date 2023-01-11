import React from 'react'
import '../App.css';
import { useState} from 'react';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

export default function TroubleShooting() {
  const [sub, setSub] = useState("sub");
  const [subtwo, setSubTwo] = useState("sub");

  const handleDrop = ()=>{
    setSub("subactive");
    setSubTwo("sub");
}
const handleDroptwo = ()=>{
  setSubTwo("subactive");
  setSub("sub");
}
  return (
    <div className= "TroubleshootContainer">
      <h1>TroubleShooting</h1>
      <div className = "FAQ">
        <div className = "Q1">
          <h3>How do i know which infusions go in which IV line?</h3> 
          <div className = "arrow">
          <KeyboardDoubleArrowDownIcon fontSize='large' onClick={handleDrop}/>
            </div>
        </div>
        <div className = {sub}>
            <h3>If youre patient is receiving dextrose, make sure the line with the insulin is running in the same IV line with a Y port.
              Ensure potassium is running through a different IV cannula than the other infusions.
            </h3>
          </div>
          <div className = "Q2">
          <h3>What do i do when the patient has had ketones less than 0.6 twice in four consective hours?</h3> 
          <div className = "arrow">
          <KeyboardDoubleArrowDownIcon fontSize='large' onClick={handleDroptwo}/>
            </div>
        </div>
        <div className = {subtwo}>
            <h3>You will need to contact the registrar. If the patient is not able to tolerate anything orally then the patient will need to move
              to the blue IV insulin chart. If the patient can tolerate food, commence the patient on the subcutaneous insulin chart and stop all infusions.
            </h3>
          </div>
      </div>

    </div>
  )
}

import React from 'react'
import '../App.css';
import { useState } from 'react';

const cards = {
  keifer: {

    h3: "How do i know which infusions go in which IV line?",
    p: "If youre patient is receiving dextrose, make sure the line with the insulin is running in the same IV line with a Y port. Ensure potassium is running through a different IV cannula than the other infusions."

  },
  keifer2: {

    h3: "What do i do when the patient has had ketones less than 0.6 twice in four consective hours?",
    p: "You will need to contact the registrar. If the patient is not able to tolerate anything orally then the patient will need to move to the blue IV insulin chart. If the patient can tolerate food, commence the patient on the subcutaneous insulin chart and stop all infusions."

  },
  keifer3: {

    h3: "Can my patient take subcut insulin on the pathway?",
    p: "Yes, patients should take their usual prescribed subcut insulin in addition to any infusions."

  },
  keifer4: {

    h3: "Should i decrease the insulin rate if the ketones are reducing by more than 0.6/hr?",
    p: "No. The goal of the DKA pathway is to aggressively decrease ketone levels in the bloodstream. Only decrease insulin rate if advised by a registrar."

  },
  keifer5: {

    h3: "Q5",
    p: "answer5"

  },
  keifer6: {

    h3: "Q6",
    p: "answer6"

  },
  keifer7: {

    h3: "Q7",
    p: "answer7"

  },
  keifer8: {

    h3: "Q8",
    p: "answer8"

  },
  keifer9: {

    h3: "Q9",
    p: "answer9"

  },
  keifer10: {

    h3: "Q10",
    p: "answer10"

  },
  keifer11: {

    h3: "Q11",
    p: "answer11"

  },
  keifer12: {

    h3: "Q12",
    p: "answer12"

  },
}


const TroubleShooting =()=> {
  let items = 4;
  let currentpage =0;
  
  let totalp =Object.keys(cards).length/items;
  
  const[pageNumber, setPageNumber] = useState(0);
  
  // const switchItem = (index) =>{
  //   setPageNumber(index);
  // }
const switchPage=(index)=>{
  setPageNumber(index)
}

  let cardDis = Object.keys(cards). slice(pageNumber *items,(pageNumber*items) + items). map(item =>{
    return <div key={item}className="Card">
    <h3>{cards[item]["h3"]}</h3>
    <p>{cards[item]["p"]}</p>
  </div>
});

let page = []

for(let i =0; i <totalp; i++){
  page.push(i);
}

let nav =page.map(item =>{
  return <div className="Btn" onClick={()=>{switchPage(item)}}></div>
})

console.log(page);
return (
  <div>
    <div className="main">
      {cardDis}
  </div>
  <div className = "nav">
    {nav}
  </div>
  </div>
)
}

export default  TroubleShooting;


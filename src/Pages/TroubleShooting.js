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

    h3: "Can I take a venous blood gas from the patient's IV line?",
    p: "Yes, however you will need to flush the line prior and discard at least 5mls. It's preferred to either take bloods straight from the vein or inster a free IVC in which you can take blood from."

  },
  keifer6: {

    h3: "Are all DKA IVF pre-drawn?",
    p: "Yes, never manually insert potassium into the 0.9% Nacl bags. Wrong doses can lead to emergency situations."

  },
  keifer7: {

    h3: "My patients IVC has tissued what do i do?",
    p: "Stop any infusions through the tissued IVC. Take out the IVC and mointor for phlebitis, offer pain relief if needed. Insert another IVC as far as possible from the tissued IVC site."

  },
  keifer8: {

    h3: "My patient's ketones are above 0.6 after coming off the protocol. What do i do?",
    p: "You will need to contact the registrar. In most circumstances, the patient will need a bolus dose of insulin and potentially restart on IV insulin."

  },
  keifer9: {

    h3: "Do i need to get a verbal order each time i titrate infusions?",
    p: "No. The DKA protocol provides standing orders for each of the infusions"

  },
  keifer10: {

    h3: "Is the patient allowed to titrate their IV insulin infusion if they are normally on a IV insulin infusion?",
    p: "No. IV infusions are only to be titrated by HDB trained staff even if the patient is aware of the following steps."

  },
  keifer11: {

    h3: "My patients results are not improving, what do i do?",
    p: "If you are concerned at all, seek help. If patient's are not responding to treatment after 2-3 hours and venous pH is below 7.2 refer patient to ICU."

  },
  keifer12: {

    h3: "Do i need to check vital signs every hour along with ketones, bsl and blood gases?",
    p: "Yes. Patient's on the DKA pathway are situated in ICU or HDB in which hourly monitoring is required unless exempt by a medical registrar or consultant."

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
  return <div className="Btn" data-testid="Btn" style={pageNumber === item ? {backgroundColor:'lightpink'} : null} onClick={()=>{switchPage(item)}}></div>
})

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


import React from 'react'
import '../App.css';
const cards = {
  keifer: {

    h3: "Q1",
    p: "answer1"

  },
  keifer2: {

    h3: "Q2",
    p: "answer1"

  },
  keifer3: {

    h3: "Q3",
    p: "answer3"

  },
  keifer4: {

    h3: "Q4",
    p: "answer4"

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
    p: "answer1"

  },
  keifer11: {

    h3: "Q11",
    p: "answer1"

  },
  keifer12: {

    h3: "Q12",
    p: "answer12"

  },
}

const slider = () => {

    let cardDis = Object.keys(cards).map(item =>{
        return 
    });
  return (
    <div className="main">
    <div className="Card">
      <h3>Question</h3>
      <p>describe</p>
    </div>
    <div className="Card">
      <h3>Question</h3>
      <p>describe</p>
    </div>
    <div className="Card">
      <h3>Question</h3>
      <p>describe</p>
    </div>
    <div className="Card">
      <h3>Question</h3>
      <p>describe</p>
    </div>
    
  </div>
  )
}

export default slider
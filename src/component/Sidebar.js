import React from 'react'
import '../App.css';
import {SidebarLinks} from "./SidebarLinks";

function Sidebar() {
  return (
    <div className="sideNav">
      <ul>
      {SidebarLinks.map((val, key)=>{
        return (
          <li className = "item" key ={key}>
            {" "}
            <div>{val.icon}</div>
            {" "}
            <div>{val.title}</div>
          </li>
        )
      })}
      </ul>
    </div>
  )
}

export default Sidebar
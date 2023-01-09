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
            <div className = "Icon">{val.icon}</div>
            {" "}
            <div className = "Title">{val.title}</div>
          </li>
        )
      })}
      </ul>
    </div>
  )
}

export default Sidebar
import React from 'react'
//import logo from '../../imgs/logo.png'
import {UilSignOutAlt} from "@iconscout/react-unicons"
import { SidebarData } from '../../Data/Data'
import './sidebar.css'
import { useState } from 'react'
import axios from 'axios'
const Sidebar = () => {
    const [selected,setSelected] = useState(0)
    const logoutUser = async () =>{

    
        await axios.get('https://aptcoderback.herokuapp.com/user/logout')
        
        localStorage.removeItem('firstLogin')
        
        window.location.href = "/";
    }
    
  return (
    <div className='Sidebar'>
        {/* logo */}
    <div className="logo">
        {/* <img src={logo} alt="" /> */}
        <span>
            APT<span>CO</span>DER
        </span>
    </div>
    <div className="menu">
       
          {SidebarData.map((item,index)=>{
            return (
                <div className={selected===index? 'menuItem active' :'menuItem'}
                key = {index}
                onClick={()=>{
                    setSelected(index)
                }}>
                    <item.icon/>
                    <span>
                        {item.heading}
                    </span>
                </div>
            )
          })}
       
        <div className="menuItem">
           
            <UilSignOutAlt />
        </div>
        </div>
    </div>

  )
}

export default Sidebar
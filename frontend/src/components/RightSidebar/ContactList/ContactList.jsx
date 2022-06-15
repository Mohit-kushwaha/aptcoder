import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './ContactList.css'
const Contact = ({contacts}) => {
    
    
    // const getUser = ()=>{
    //      axios.get('https://randomuser.me/api?results=10')
    //      .then((response)=>{
    //         const allNotes = response.data.results
    //         setContact(allNotes);
    //      })
    //      .catch(error=>console.error(`Error: ${error}`))
    // }
  
//    useEffect(()=>{
//     getUser()
//    },[])

  return (
    <div>
    
<section class="main-section">
{
     <div className="Updates">
     {contacts.map((update) => {
       return (
         <div className="update">
           <img src={update.thumbnail} alt="profile" style={{borderRadius: "25px"}} />
           <div className="noti">
             <div  style={{margin: '0.5rem'}}>
                <span style={{marginRight: '0.4rem'}}>Name</span>
               <span>{update.name}</span>
               <span style={{marginRight: '0.4rem', marginLeft: '0.4rem'}}>Code</span>
               <span> {update.code}</span>
             </div>
               <span>{update.time}</span>
           </div>
         </div>
       );
     })}
   </div>
}
  
</section>
    </div>
  )
}

export default Contact
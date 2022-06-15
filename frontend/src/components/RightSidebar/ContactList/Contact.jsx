import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Contact from './ContactList'


const Home = () => {
    const [contacts, setContact] = useState([])
    const [search, setSearch] = useState('')
    const [sortType, setSortType] = useState('name');
    
  var x = localStorage.getItem("firstLogin");
    // const logoutUser = async () =>{

    
    //     await axios.get('http://:8000/user/logout')
        
    //     localStorage.removeItem('firstLogin')
        
    //     window.location.href = "/";
    // }
    const getUser = ()=>{
         axios.get('https://aptcoderback.herokuapp.com/user/getEmployee')
         .then((response)=>{
            const allNotes = response.data.employee
            // console.log(allNotes.data.employee);
            setContact(allNotes);
           
             
         })
         .catch(error=>console.error(`Error: ${error}`))
    }
  
   useEffect(()=>{
    getUser()
   },[])
   const filteredContacts = search.length === 0 ? contacts : 
   contacts.filter(contact => contact.name.
               toLowerCase().includes(search.toLowerCase()) ||   contact.code.
               toLowerCase().includes(search.toLowerCase()) )
//    console.log(contacts);

useEffect(() => {
    const sortArray = type => {
      const types = {
        name: 'name',
        code: 'code',
      };
      const sortProperty = types[type];
      const sorted = [...contacts].sort((a, b) => b[sortProperty] - a[sortProperty]);
      setContact(sorted);
    };
    sortArray(sortType);
  }, [sortType]); 

  return (
    
    <div>
        
       { x ?

            <div>
                <h3>Employees</h3>
             <nav class="topnav">
            
             <div class="search-container">
               <input type="text" placeholder="Search.." name="search"  value={search}
                               onChange={(e) => setSearch(e.target.value)}  style={{width:"60%"}}/>
                               {/* <select onChange={(e) => setSortType(e.target.value)}> 
        <option value="name">name</option>
        <option value="code">code</option>
      </select> */}
                             
               <i class="fa fa-search icon" style={{ textAlign: "center", marginTop: "1rem" , background:"none", color:"white"}}></i>
             </div>
            
           </nav>
        <Contact contacts= {filteredContacts} /> 
           </div>
           : alert("You are not allowed to visit")  }
      </div>
  )
}

export default Home
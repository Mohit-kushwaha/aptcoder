import React from 'react'
import Maindash from './dashboard/Maindash/Maindash'
import Sidebar from './dashboard/Sidebar/Sidebar'
import RightSidebar from './RightSidebar/RightSidebar'

const main = () => {
  return (
    <div className="AppGlass">
            <Sidebar/>
    <Maindash/>
    <RightSidebar/>
    </div>


   
  )
}

export default main
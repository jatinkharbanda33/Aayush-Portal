import React from 'react'
import './dashboard.scss'
import Hd from '../../components/dbcomponent/hd'
import ProfileSummary from '../../components/dbcomponent/ProfileSummary'
import Investedin from '../../components/dbcomponent/Investedin'

const Dashboard = ()=> {
  return (
    <>
     <div >
   <Hd/>
   <div >
 
    <div >
      <div >
      <ProfileSummary/>
      <Investedin/>
      </div>
      
    </div>
   </div>
   </div>
   
    </>
  )
}

export default Dashboard; 

import React from 'react'
import './dashboard'
import Header from '../../components/header/header'
import ProfileSummary from '../../components/dashboard/ProfileSummary'
import Investedin from '../../components/dashboard/Investedin'

export default function dashboard() {
  return (
    <>
     <div className="app">
   <Header/>
   <div className="content">
 
    <div className="left">
      <div className="prof-sum">
      <ProfileSummary/>
      <Investedin/>
      </div>
      
    </div>
    <div className="right">
      
      <h6>WATCHLIST</h6>
    </div>
   </div>
   </div>
   
    </>
  )
}

import React from 'react';
import './hd.scss';
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
function ProfileSummary() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const queryClient = useQueryClient();
  const prof=currentUser['isinv']==false?"Investor":"Startup Owner";
  console.log(currentUser);
  return (
    <div className='dash'>
    <div className="profile-summary">
      <img
        src={currentUser['img']} // Replace with the path to the user's profile picture
        alt="Profile"
        className="profile-summary__image"
      />
      <h5 className="profile-summary__name">{currentUser['username']}</h5>
      <p className="profile-summary__headline">{prof}</p>
      <div className='yourinfo'>
      <h2>Your Info</h2>
      <ul>
        <li>Email : {currentUser['email']}</li>
        <li>Phone Number : {currentUser['phone']}</li>
        <li>Contry : {currentUser['country']}</li>
      </ul>
      </div>
      
    </div>
    </div>
  );
}

export default ProfileSummary;

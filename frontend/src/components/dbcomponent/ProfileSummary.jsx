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
      
    </div>
    </div>
  );
}

export default ProfileSummary;

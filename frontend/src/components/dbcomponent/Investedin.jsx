import React from 'react'
import './hd.scss';
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
export default function Investedin() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const queryClient = useQueryClient();
  return (
    <div className="dash" >
    <div className="investedin">
      <h3>STARUPS YOU'VE INVESTED IN</h3>
      <div className="flexbox">
      <div className="showcase">
        <div className="startups">
            <img src="" alt="image" />
            <h6>NAME OF THE STARTUP</h6>
            <p>Amount Invested : </p>
        </div>
        <div className="startups">
            <img src="" alt="image" />
            <h6>NAME OF THE STARTUP</h6>
            <p>Amount Invested : </p>
        </div>
        <div className="startups">
            <img src="" alt="image" />
            <h6>NAME OF THE STARTUP</h6>
            <p>Amount Invested : </p>
        </div>
        <div className="startups">
            <img src="" alt="image" />
            <h6>NAME OF THE STARTUP</h6>
            <p>Amount Invested : </p>
        </div>
      </div>
      </div>
    </div>
    </div>
  );
};

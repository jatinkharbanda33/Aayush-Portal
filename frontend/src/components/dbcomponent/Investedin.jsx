import React from 'react'
import './hd.scss';
import StartupxList from '../Startupxlist/StartupxList';
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
export default function Investedin() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const queryClient = useQueryClient();
  return (
    <div className="dash" >
    <div className="investedin">
      <h3>STARUPS YOU'VE INVESTED IN</h3>
      <div className="flexbox">
      <StartupxList></StartupxList>
      </div>
    </div>
    </div>
  );
};

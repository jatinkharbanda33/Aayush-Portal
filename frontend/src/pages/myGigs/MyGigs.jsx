import React from 'react'
import "./MyGigs.scss"
import { Link } from 'react-router-dom'
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";

const MyGigs = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ["myGigs"],
    queryFn: () =>
      newRequest.get(`/gigs?userId=${currentUser._id}`).then((res) => {
        return res.data;
      }),
  });

  const mutation = useMutation({
    mutationFn: (id) => {
      return newRequest.delete(`/gigs/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["myGigs"]);
    },
  });

  return (
    <div className='myGigs'>
      {isLoading?"loading" : error ? "error" :
      (<div className="container">
        <div className="title">
          <h1>My Startups</h1>
          {currentUser.isinv && (
              <Link to="/add">
                <button>Add New Startup</button>
              </Link>
            )}
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Evaluation</th>
            <th>Number of Employees</th>
          </tr>
          {data.map((gig)=>(
            <tr key={gig._id}>
            <td>
              <img className="img" src={gig.cover} alt='' />
            </td>
            <td>{gig.title}</td>
            <td>{gig.currEval}</td>
            <td>{gig.nEmp}</td>
            <td>
              <img className='delete' src='./img/delete.png' alt=''
              onClick={() => handleDelete(gig._id)} />
            </td>
          </tr>
          ))}
        </table>
      </div>)}
    </div>
  )
}

export default MyGigs


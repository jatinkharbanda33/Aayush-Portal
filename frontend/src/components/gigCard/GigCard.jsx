import React from 'react';
import "./GigCard.scss";
import { Link } from 'react-router-dom';
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";

const GigCard = ({item}) => {

const { isLoading, error, data} = useQuery({
        queryKey: [item.userId],
        queryFn: () =>
          newRequest.get(`/users/${item.userId}`)
          .then((res) => {
            return res.data;
          }),
    })
  return (
    <Link to={`/gig/${item._id}`} className='link'>
    <div className='gigCard'>
        <img src={item.cover} alt=""/>
        <div className="info">
            {isLoading? ("loading") : 
            error? ("Something went wrong") :
            (<div className="user">
                <img src={data.img || "/img/noavatar.jpg"} alt="" />
                <p>{data.title}</p>
            </div>)}

            <p>{item.desc}</p>
            
        </div>
        <hr/>
        <div className="detail">
        🤍
            <div className="price">
            <span>Evaluation</span>
            <h2>INR {item.currEval}</h2>
            </div>
        </div>
    </div>
    </Link>
  )
}

export default GigCard     
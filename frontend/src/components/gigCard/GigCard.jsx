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

    function TextCapper({ text, maxLength }) {
      const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) {
          return text;
        }
        return text.slice(0, maxLength) + '...'; // Add ellipsis for truncated text
      };
    
      const truncatedText = truncateText(text, maxLength);
    
      return (
        <div>
          <p>{truncatedText}</p>
        </div>
      );
    }
  return (
    <Link to={`/gig/${item._id}`} className='link'>
    <div className='gigCard'>
        <img src={item.cover} alt=""/>
        <div className="info">
            {isLoading? ("loading") : 
            error? ("Something went wrong") :
            (<div className="user">
                <img src={item.cover || "/img/noavatar.jpg"} alt="" />
                <p>{item.title}</p>
            </div>)}
            <TextCapper text={item.desc} maxLength={50} />
            {/* <p>TextCapper({item.desc},100)</p> */}
            
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
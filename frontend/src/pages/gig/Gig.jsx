import React from 'react'
import "./Gig.scss"
import { Slider } from 'infinite-react-carousel'
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
//pimport Reviews from "../../components/reviews/Reviews";
const Gig = () => {
  const {id} = useParams();

  const { isLoading, error, data } = useQuery({
    queryKey: ["gig"],
    queryFn: () =>
      newRequest.get(`/gigs/single/${id}`).then((res) => {
        return res.data;
      }),
  });

  const userId = data?.userId;
  
  const {isLoading: isLoadingUser, error: errorUser, data: dataUser,} =
   useQuery({
    queryKey: ["user"],
    queryFn: () =>
      newRequest.get(`/users/${userId}`).then((res) => {
        return res.data;
      }),
    enabled: !!userId,
  });
  
  // const handleContact = async (order) => {
  //   const sellerId = order.sellerId;
  //   const buyerId = order.buyerId;
  //   const id = sellerId + buyerId;

  //   try {
  //     const res = await newRequest.get(`/conversations/single/${id}`);
  //     navigate(`/message/${res.data.id}`);
  //   } catch (err) {
  //     if (err.response.status === 404) {
  //       const res = await newRequest.post(`/conversations/`, {
  //         to: currentUser.seller ? buyerId : sellerId,
  //       });
  //       navigate(`/message/${res.data.id}`);
  //     }
  //   }
  // };

  return (
    
    <div className='gig'>
      {isLoading? "loading" :
      error? "Something went wrong" :
      (<div className="container">
        <div className="left">
          
          <h1>{data.title}</h1>
          {isLoadingUser? ("loading") :
          errorUser?("something went wrong") : 
          (<div className="user">
            <img className="pp" src={data.cover || "/img/noavatar.jpg"} alt=''/>
            <span>{data.username}</span>
          </div>)}

          <h2>About Us</h2>
          <p>
            {data.desc}
          </p>

          <h2>Current Evaluation</h2>
          <p>
            {data.currEval}
          </p>

        </div> 
        <div className="right">
        { (<div className="price">
            <h3>Please do Invest</h3>
            <h2>INR {data.price}</h2>

          </div>)}
          <Link to={`/pay/${id}`}>
          <button>Continue</button>
          </Link>
          { (<div className="message">
            <h3>Contact Us</h3>
            {/* <img  src='./img/message.png' alt='' onClick={() => handleContact(order)}/> */}
            <h4>gmail</h4>
            <h4>mobile</h4>
          </div>)}
          <p>{data.shortDesc}</p>
          
        </div>
      </div>)}
    </div>
  )
}

export default Gig


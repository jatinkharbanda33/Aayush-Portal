import React, {useEffect, useState, useRef } from 'react'
import "./Gigs.scss"
//import {gigs} from "../../data"
import GigCard from '../../components/gigCard/GigCard';
import { useQuery } from '@tanstack/react-query';
import newRequest from "../../utils/newRequest";
import { useLocation } from 'react-router-dom';

const Gigs = () => {
  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState(false);
  const minRef = useRef();
  const maxRef = useRef();
  
  const {search} = useLocation();

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["gigs"],
    queryFn: () =>
      //newRequest.get(`/gigs${search}&min=${minRef.current.value}&max=${maxRef.current.value}&sort=${sort}`)
      newRequest.get(`/gigs${search}`)
      .then((res) => {
        return res.data;
      }),
  });

  console.log(data);

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  //refetch gigs whenever [sort] changes
  useEffect(() => {
    refetch();
  }, [sort]);

  const apply = () => {
    refetch();
  };

  return (
    <div className='gigs'>
      <div className="container">
      <span className="breadcrumbs">Ayush Portal</span>
      <h1> Startups</h1>
      <div className="menu">
        <div className="left">
          <span>Evaluation</span>
          <input ref={minRef} type="number" placeholder="min" />
          <input ref={maxRef} type="number" placeholder="max" />
          <button onClick={apply}>Apply</button>
        </div>
        <div className="right">
          <span className='sortBy'>SortBy</span>
          <span className='sortType'>{sort == "sales"? "Evaluation":"Newsest"}</span>
          <img src='./img/down.png' alt="" onClick={()=>setOpen(!open)}/>
          {open && (<div className="rightMenu">
            {sort=="sales"? 
            <span onClick={()=>reSort("createdAt")}>Newest</span>
            : 
            <span onClick={()=>reSort("sales")}>Evaluation</span>
            }
          </div>)}
        </div>
      </div>

      <div className="cards">
          {isLoading
            ? "loading"
            : error
            ? "Something went wrong!"
            : data.map((gig) => <GigCard key={gig._id} item={gig} />)}
        </div>
      </div>
    </div>
  )
}

export default Gigs


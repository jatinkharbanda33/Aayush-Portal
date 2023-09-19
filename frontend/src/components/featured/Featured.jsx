import React, { useState } from 'react'
import "./Featured.scss"
import { useNavigate } from "react-router-dom";

function Featured() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(`/gigs?search=${input}`);
  };

  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
            Exploring Tomorrow&apos;s <span>Innovators</span> - Your Vision, Their Genesis!
          </h1>
          <div>
          <div className="input-container   ">
            
          <input type="text" placeholder='Enter startup name'
                onChange={(e) => setInput(e.target.value)} />
              <button className="button" onClick={handleSubmit}>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button onClick={() => { navigate(`/gigs?cat=Tech`) }}>Tech Startups</button>
            <button onClick={() => { navigate(`/gigs?cat=tnh`) }}>Travel</button>
            <button onClick={() => { navigate(`/gigs?cat=bc`) }}>Blockchain & Crypto</button>
            <button onClick={() => { navigate(`/gigs?cat=et`) }}>Education</button>
          </div>
          </div>






          {/* <div className="search">
            <div className="searchInput">
              <img src="./img/search.png" alt="" />
              <input type="text" placeholder='Enter startup name'
                onChange={(e) => setInput(e.target.value)} />
            </div>
            <button onClick={handleSubmit}>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button onClick={() => { navigate(`/gigs?cat=design`) }}>Tech Startups</button>
            <button onClick={() => { navigate(`/gigs?cat=wordpress`) }}>Travel</button>
            <button onClick={() => { navigate(`/gigs?cat=logo`) }}>AI-ML</button>
            <button onClick={() => { navigate(`/gigs?cat=ai`) }}>Education</button>
          </div> */}
        </div>
        <div className="right">
          <img src="./img/man.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Featured
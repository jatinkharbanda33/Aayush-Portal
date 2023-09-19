import React, { useEffect, useState } from 'react'
import "./Navbar.scss"
import { Link,useLocation ,useNavigate } from 'react-router-dom'
import newRequest from "../../utils/newRequest";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const {pathname} = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  }

  useEffect(()=>{
    window.addEventListener("scroll", isActive );

    return ()=>{
      window.removeEventListener("scroll", isActive)
    };
  },[])

  const refreshPage = async () => {
    try {
      setTimeout('', 5000);
       window.location.reload();
    } catch (err) {
      console.log(err);
    }
  }

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await newRequest.post("/auth/logout");
      localStorage.setItem("currentUser", null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={active || pathname!="/"? "navbar active" : "navbar"}>
        <div className='container'>
            <div className='logo'>
            <Link className="link" to="/">
              <span className='text'><img src="public/img/g20.jpg"></img></span>
            </Link>
              {/* <span className='dot'>.</span> */}
            </div>
            <div className='links'>
            {<Link to="/gigs?cat" className='link'>View Startups</Link>}
                <span>Explore</span>
                <span>English</span>
                {!currentUser && <Link to="/login" className='link'>Sign In</Link>}
                {/* {!currentUser && <span> Invest</span>} */}
                {!currentUser && <Link to="/register" className='link'> Register</Link>}
                {currentUser && (
                  <div className="user" onClick={()=>setOpen(!open)}>
                    <img src={currentUser.img || "/img/noavatar.jpg"} alt=""/>
                    <span>{currentUser?.username}</span>
                    {open && <div className='options'>
                      {
                        currentUser?.isinv && (
                          <>
                          <Link className='link' to="/mygigs">My Startups</Link>
                          <Link className='link' to="add">List New Startups</Link>
                          </>
                        )
                      }
                      {currentUser?.isinv? <></> : <Link className='link' to="/dashboard">Dashboard</Link>}
                      <Link className='link' onClick={handleLogout}>Logout</Link>
                    </div>}
                  </div>
                )}
            </div>
        </div>
        {(active || pathname!="/") &&(
        <>
          <hr/>
          <div className='menu'>
          <Link className="link menuLink" to="/gigs?cat=Tech" >
            Tech Startups
            </Link>
            <Link className="link menuLink" to="/gigs?cat=hnb" >
              Healthcare and Biotech
            </Link>
            <Link className="link menuLink" to="/gigs?cat=et" >
            EdTech
            </Link>
            <Link className="link menuLink" to="/gigs?cat=tnh" >
            Travel and Hospitality
            </Link>
            <Link className="link menuLink" to="/gigs?cat=ai" >
              AIML
            </Link>
            <Link className="link menuLink" to="/gigs?cat=bc" >
              Blockchain and Cryptocurrency
            </Link>
            <Link className="link menuLink" to="/gigs?cat=lt" >
              Legal Tech
            </Link>
            <Link className="link menuLink" to="/gigs?cat=cy" >
              Cybersecurity
            </Link>
            <Link className="link menuLink" to="/gigs?cat=fnb" >
              Food and Beverage
            </Link>
          </div>
          <hr/>
        </>
        )}
        
    </div>
  )
}

export default Navbar
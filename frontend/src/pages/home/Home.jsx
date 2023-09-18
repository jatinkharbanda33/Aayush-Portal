import React from 'react'
import "./Home.scss"
import Featured from '../../components/featured/Featured'
import TrustedBy from '../../components/trustedBy/TrustedBy'
import Slide from '../../components/Slide/Slide'
import {cards, projects} from "../../data"
import CatCard from '../../components/catCard/CatCard'
//import ProjectCard from '../../components/projectCard/ProjectCard'

const Home = () => {
  return (
    <div className='home'>
      <Featured/>


      <TrustedBy/>


      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <CatCard key={card.id} card={card} />
        ))}
      </Slide>


      {/* <div className="features">
        <div className="container">
          <div className="item">
            <h1>A whole world of freelance talent at your fingertips</h1>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Quality work done quickly
            </div>
            <p>
              Find the right freelancer to begin working on your project within
              minutes.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Protected payments, every time
            </div>
            <p>
              Always know what you'll pay upfront. Your payment isn't released
              until you approve the work.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              24/7 support
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
          </div>
          <div className="item">
            <video src="./img/video.mp4" controls />
          </div>
        </div>
      </div> */}


      <div className="features dark"> 
        <div className="container">
          <div className="item">
            <h1>
              Start <i>investing</i> now.
            </h1>
            <h1>
            Dive into the world of innovation and potential high returns today!.
            </h1>
            <p>
            Join us in supporting visionary entrepreneurs, pioneering technologies, and groundbreaking ideas
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Explosive Growth

            </div>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Lucrative Potential
            </div>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Wealth Revolution
            </div>
            <button>Invest Now</button>
          </div>
          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
              alt=""
            />
          </div>
        </div>
      </div>


      {/* <Slide slidesToShow={4} arrowsScroll={4}>
        {projects.map((card) => (
          <ProjectCard key={card.id} card={card} />
        ))}
      </Slide> */}
    </div>
  )
}

export default Home
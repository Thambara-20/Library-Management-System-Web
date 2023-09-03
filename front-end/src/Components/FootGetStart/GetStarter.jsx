import React from 'react'
import './GetStarter.css'
import { Link } from "react-router-dom";


const GetStarter = () => {
  return (
    <div>
      <section className="g-wrapper">
        <div className="paddings innerWidth g-container">
            <div className="flexColCenter inner-Container">
                <span className='primaryText'>Get Start With the SmartBook</span><span className='secondaryText'>
                    Join us to start your knowledge journey.<br/> Search Your book and find most Interest one
                </span>
                <button className="button">
                    <Link to="/admin"> Get Start</Link>
                </button>
            </div>
        </div>
      </section>
    </div>
  )
}

export default GetStarter
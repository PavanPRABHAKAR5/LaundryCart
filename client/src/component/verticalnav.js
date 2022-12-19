import React from 'react';
import home from "../images/home.svg"
import list from "../images/list.svg"
import more from "../images/more.svg"


import "./verticalnav.css"

const Verticalnav = () => {
    return (
        <div className='vnav'>
            <span>
                <img className="vnavicon" src={home} alt="profilepic" />
            </span>
            <span>
                <img className="vnavicon" src={more} alt="profilepic" />
            </span>
            <span className="vnaviconlist">
                <img className="vnavicon" src={list} alt="profilepic" />
            </span>

        </div>
    )
}

export default Verticalnav;
import react, { useEffect } from "react";
import "./orderHeader.css"
import Profilepic from "../images/profilepic.png"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const OrderHeader = () => {

    let userInfo = JSON.parse(localStorage.getItem("userInfo")) 
    const Navigate = useNavigate();
    
    if(!localStorage.getItem("userInfo")){
        Navigate("/")
    }
    // console.log("token",userInfo.token)
    const [logouth, setLogouth] = useState(false)
    const userName = userInfo ? userInfo.name : "user name"
    useEffect(()=>{
        if(!localStorage.getItem("userInfo")){
            Navigate("/")
        }
    },[])

    const logoutHandler=()=>{
        localStorage.clear();
        setLogouth(!logouth)
    }


    return (
        <div className="navbar">
            <div className="navleft">
                Laundary
            </div>
            <div className="navright">
                <div className="pricecareer">
                    <div>
                        Price
                    </div>
                    <div>
                        career
                    </div>
                </div>

                <div className="imagenusername">
                    <div className="profileimagec">
                        <img className="profileimage" src={Profilepic} alt="profilepic" />
                    </div>
                    <div>
                        <h3 className="profileuser">{userName}</h3>
                    </div>
                    <button className="logoutbutton" onClick ={logoutHandler}>Log out</button>
                </div>

            </div>

        </div>
    )
}
export default OrderHeader;
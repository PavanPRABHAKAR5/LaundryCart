import React, { useEffect, useState } from 'react';
import "./getpreviousorder.css";
import { Link } from 'react-router-dom'
import axios from "axios"
import OrderRow from './OrderRow';
import ViewprevOrder from './prvOrderView';
import CancelPrevious from './cancelprv';
import Tester from './tester';
import NoOrderComp from './noorderComponent';


const Previousorders = () => {
    let userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const dumtoken = "test eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMmFiMTI2Y2YzMTdiY2Q0OTMyNzQ5MSJ9.qTkERCYshG0jml-XMY7kmPnardpNnNTO07ZiAzpWllQ";
    console.log("prvorders",userInfo)
    const token = userInfo ?userInfo.token:dumtoken;


    // const token ="test eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMjg4NjlkZGUzYTZlZGUxYzJmOTE1ZiJ9.rTvWSejbfXR0xJlAo7ASfHURJRYdxEo3BmA0RemoXqY";
    const [prevData, setPrevData] = useState([]);
    const [prvorderDetails, setprvorderDetails] = useState([0, 0]);
    const [closeb, setCloseb] = useState("none");
    const [cancelorderb, setcancelorderb] = useState("none");
    const [datatocancel, setdatatoCancel] = useState("");
    const [topcreatebutton,settopcreatebutton]=useState("none");
    console.log(prvorderDetails);
    
    useEffect(()=>{
        const handleFetchData=async ()=>{
            const respone = await axios.get("http://localhost:8080/api/v1/order", {
                headers: {
                    Authorization: token
                }
            })
            if(respone.data.ordersdata.length!=0)
            {
                settopcreatebutton("block");
            }
            console.log("orderdata", respone.data.ordersdata, prevData.length)
            setPrevData(respone.data.ordersdata);
        }
        handleFetchData();

        //console.log(respone.data.ordersdata,"prev",prevData)
    }, []);

    const handleViewSummary = (elemDetails) => {
        console.log("e", elemDetails)
        setprvorderDetails(elemDetails);
        setCloseb("block");
    }
    const handlecancelorder = (elemDetails) => {
        console.log("e", elemDetails);
        setdatatoCancel(elemDetails);
        setCloseb("none");
        setcancelorderb("block");
    }
    const handleCloseb = () => {
        setCloseb("none");
        setcancelorderb("none");
    }
    console.log("c", cancelorderb)
    return (
        <div className='prevContainer' >
            <div className="topnav">
                <div className='ordercontiner'>
                    Orders | {topcreatebutton=="none"? 0 : prevData.length }</div>
                <div className="search-container">
                    <button style={{display:topcreatebutton}} className='createbutton'><Link className='linkstyle' to='/order/create'> create</Link></button>
                    <form className='formclass' action="/action_page.php">
                        <input className='staticinput' type="text"  name="search" />
                        <i className="fa fa-search"></i>
                    </form>
                </div>
            </div>
            {/* <Tester /> */}
            {prevData.length == 0 ? <NoOrderComp /> :
                <>
                    <table className="table tableprv">
                        <thead className="thead-dark table-bordered table-striped">
                            <tr className=' table-dark'>
                                <th scope="col">order id</th>
                                <th scope="col">order Date & Time</th>
                                <th scope="col">Store Location</th>
                                <th scope="col">City</th>
                                <th scope="col">Store Phone</th>
                                <th scope="col">Total items</th>
                                <th scope="col">Price</th>
                                <th scope="col">Status</th>
                                <th scope="col">Status</th>
                                <th scope="col">View</th>
                            </tr>
                        </thead>
                        {
                            prevData.map((eachOrder) => {
                                return <OrderRow key="eachOrder._id" orderInfo={eachOrder} handleViewSummary={handleViewSummary} handlecancelorder={handlecancelorder} />
                            })
                        }
                    </table>
                    <div className='prvsummaryPopup' style={{ display: closeb }}>
                        <ViewprevOrder orderSummaryprev={prvorderDetails} handleCloseb={handleCloseb} handlecancelorder={handlecancelorder} />
                    </div>
                    <div style={{ display: cancelorderb }}>
                        <CancelPrevious handleCloseb={handleCloseb} cancelorderdetails={datatocancel} />
                        {/* <ViewprevOrder orderSummaryprev={prvorderDetails} handleCloseb={handleCloseb} /> */}
                    </div>
                </>
            }

        </div>
    )
}

export default Previousorders;
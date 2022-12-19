import React from 'react';
import "./orderRow.css"
import eye from "../images/eye.svg"
import { Link } from 'react-router-dom'

const OrderRow = (Props) => {
    //console.log("pop", Props.orderInfo.tshirts.washing + Props.orderInfo.tshirts.ironing);
    const orderId = "ORD" + Props.orderInfo._id;
    let array = ['shirts', 'tshirts'];
    let status = ["ready to pickup", "in washing", "ready to deliver", "on route"];
    let num = Math.floor(Math.random() * 4);
    console.log("date", Props.orderInfo.createdAt);
    let arr = Props.orderInfo.createdAt.split("T");
    const month = ["January", "February", "March", "April",
        "May", "June", "July", "August", "September", "October",
        "November", "December"];
    //console.log(arr);
    let temp=arr[0].split("-");
    let temptime=arr[1].split(":")
    let date= temp[2]+" "+month[parseInt(temp[1])-1]+" "+temp[0];
    let Time = temptime[0]+":"+temptime[1];
    let data_time=date+","+Time;
    //console.log(data_time)

    const totalitems7 = Props.orderInfo.shirts.quantity * (Props.orderInfo.shirts.washing + Props.orderInfo.shirts.ironing + Props.orderInfo.shirts.
        drycleaning + Props.orderInfo.shirts.chemicalcleaning);
    const totalitems1 = Props.orderInfo.tshirts.quantity * (Props.orderInfo.tshirts.washing + Props.orderInfo.tshirts.ironing + Props.orderInfo.tshirts.
        drycleaning + Props.orderInfo.tshirts.chemicalcleaning);
    const totalitems2 = Props.orderInfo.trousers.quantity * (Props.orderInfo.trousers.washing + Props.orderInfo.trousers.ironing + Props.orderInfo.trousers.
        drycleaning + Props.orderInfo.trousers.chemicalcleaning);
    const totalitems3 = Props.orderInfo.jeans.quantity * (Props.orderInfo.jeans.washing + Props.orderInfo.jeans.ironing + Props.orderInfo.jeans.
        drycleaning + Props.orderInfo.jeans.chemicalcleaning);
    const totalitems4 = Props.orderInfo.boxers.quantity * (Props.orderInfo.boxers.washing + Props.orderInfo.boxers.ironing + Props.orderInfo.boxers.
        drycleaning + Props.orderInfo.boxers.chemicalcleaning);
    const totalitems5 = Props.orderInfo.joggers.quantity * (Props.orderInfo.joggers.washing + Props.orderInfo.joggers.ironing + Props.orderInfo.joggers.
        drycleaning + Props.orderInfo.joggers.chemicalcleaning);
    const totalitems6 = Props.orderInfo.others.quantity * (Props.orderInfo.others.washing + Props.orderInfo.others.ironing + Props.orderInfo.others.
        drycleaning + Props.orderInfo.others.chemicalcleaning);
    const totalprice = totalitems1 + totalitems7 + totalitems2 + totalitems3 + totalitems4 + totalitems5 + totalitems6
    const totalitems = (Props.orderInfo.shirts.quantity + Props.orderInfo.tshirts.quantity + Props.orderInfo.trousers.quantity +
        Props.orderInfo.jeans.quantity + Props.orderInfo.boxers.quantity + Props.orderInfo.joggers.quantity + Props.orderInfo.others.quantity)
    const elemDetails = [Props.orderInfo, totalprice * 5, num];
    return (
        <tr>
            <th scope="row">{orderId}</th>
            <td>{data_time}</td>
            <td>{Props.orderInfo.storelocation}</td>
            <td>{Props.orderInfo.city}</td>
            <td>910004523</td>
            <td>{totalitems}</td>
            <td>{totalprice * 5 + 90}</td>
            <td>{status[num]}</td>
            <td>{num == 0 ?
                <button style={{ color: "#F41313", border: "none" }} > cancel order</button>

                : " "}</td>
            {/* <Link className='linkstyle' to='/order/viewprv'> 
            <img className='eyeimage' src={eye} alt="view" /></Link> */}

            <td>{<button className="eyeimagecls" onClick={() => Props.handleViewSummary(elemDetails)}>
                <img className='eyeimage' src={eye} alt="view" />
            </button>}</td>

        </tr>

    )
}

export default OrderRow;
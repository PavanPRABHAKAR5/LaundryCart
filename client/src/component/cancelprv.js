import { react } from "react"
import { Link } from 'react-router-dom';
import "./cancelprv.css";
import Alert from "../images/pngegg.png"

const CancelPrevious = (Props) => {
    console.log("from",Props.cancelorderdetails[0])
    if(!Props.cancelorderdetails[0])
    {
        return
    }
    else{
    return (
        
        <div className="box">
            <div className="cancelpopheader">
                <span className="alertprev">Alert</span>
                <span className="close-icon" onClick={() => Props.handleCloseb()} >X</span>
            </div>
            <div className="alertsecondcont">
                <div><br/><img className="alertimage" src={Alert} alt="alert" /></div>
                <div className="gridcontalert">
                    <div>
                    Are you sure want to cancel the order <span style={{color:"#5861AE"}} >No: ORD{Props.cancelorderdetails[0]._id}</span>
                    </div>
                    <br/>
                    <button className="proceedbutton">Procced</button>
                    
                    </div>
            </div>

            {/* {props.content} */}
        </div>


    )
}
}

export default CancelPrevious
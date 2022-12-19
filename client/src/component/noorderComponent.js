import {react} from "react"
import { useNavigate } from "react-router-dom";
import "./noordeComponent.css"


const NoOrderComp = () => {
    const navigate=useNavigate();
    const handleCreateClick=()=>{
        navigate("/order/create")
    }
    return(
        <div className="noorderComp">
            <div className="noorderText" >No Orders avaialble</div>
            {/* <br /> */}
            <button className='createbuttonnoorder' onClick={handleCreateClick}> create</button>
            
        </div>
    )
}
 
export default NoOrderComp;
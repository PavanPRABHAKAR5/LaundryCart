import { react } from "react";
import "./ProgressComponent.css"
import checkmarks from "../images/tick.png"


const Tester = ({ stagess }) => {
    //console.log(stagess)
    return (
        <div className="ProgressContainerb">
            <div className="stepper-wrapper">

                <div className="stepper-item completed">
                    <div className="step-counter"><img className="checkmarkk"  src={checkmarks} /> </div>
                    <div className="step-name">ready to pickup</div>
                </div>

                {parseInt(stagess) >= 1 ?
                    <>
                        <div className="stepper-item completed">
                            <div className="step-counter"><img className="checkmarkk"  src={checkmarks} /> </div>
                            <div className="step-name">in washing</div>
                        </div>
                    </>
                    :
                    <>
                        <div className="stepper-item">
                            <div className="step-counter"> </div>
                            <div className="step-name">in washing</div>
                        </div>
                    </>
                }
                {parseInt(stagess) >= 2 ?
                    <>
                        <div className="stepper-item completed">
                            <div className="step-counter"> <img className="checkmarkk"  src={checkmarks} /></div>
                            <div className="step-name">ready to deliver</div>
                        </div>
                    </>
                    :
                    <>
                        <div className="stepper-item">
                            <div className="step-counter"> </div>
                            <div className="step-name">ready to deliver</div>
                        </div>
                    </>
                }
                {parseInt(stagess) >= 3 ?
                    <>
                        <div className="stepper-item completed">
                            <div className="step-counter"> <img className="checkmarkk"  src={checkmarks} /></div>
                            <div className="step-name">on route</div>
                        </div>
                    </>
                    :
                    <>
                        <div className="stepper-item">
                            <div className="step-counter"> </div>
                            <div className="step-name">on route</div>
                        </div>
                    </>
                }


                {/* <div className="stepper-item active">
                    <div className="step-counter"> </div>
                    <div className="step-name">ready to deliver</div>
                </div>
                <div className="stepper-item">
                    <div className="step-counter"> </div>
                    <div className="step-name">on route</div>
                </div> */}
            </div>
        </div>
    )
}

export default Tester
import React, { useState } from 'react';
import PrevsumComp from './prevsummarycomp';
import Tester from './ProgressComponent';
import "./prvOrderView.css"

const ViewprevOrder = (Props) => {
    const data = Props.orderSummaryprev
    console.log("prvOrder", data[0], data[1], "num", data[2]);
    let cancelstyles = "block"
    if (data[2] != 0) {
        cancelstyles = "none"
    }
    // let temp = Object.keys(data[0]);
    // let keys = ['shirts', 'tshirts', 'trousers', 'jeans', 'boxers', 'joggers', 'other'];
    // data[0]!=0 && data[0].map((item) =>{
    //     console.log(item,"i")
    // })
    // console.log("keys", data[0].shirts)

    return (
        // <></>
        <div className='orderPrvSummary'  >
            <div className='SummHeader'>
                Summary
                <span className="summary-close-icon" onClick={() => Props.handleCloseb()}>X</span>
            </div>
            <div className='SummHeader2'>
                <table className="table table-borderless">
                    <thead>
                        <tr>
                            <th scope="col">store Location</th>
                            <th scope="col">Store Address</th>
                            <th scope="col">Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {data!=0&&} */}
                        <tr>
                            <td>{data[0].storelocation}</td>
                            <td>Near Phone booth, 10road</td>
                            <td>910004523</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Tester stagess={data[2]}/>
            <div className='summheader3'>
                Orderdetails:
                <table className="table table-hover prevsumtable">
                    <tbody>
                        {data[0] != 0 &&
                            <>
                                {data[0] != 0 && data[0].shirts.quanity != 0 &&
                                    <PrevsumComp elementInfo={data[0].shirts} elementtype={"shirt"} />
                                }
                                {data[0] != 0 && data[0].tshirts.quanity != 0 &&
                                    <PrevsumComp elementInfo={data[0].tshirts} elementtype={"tshirt"} />
                                }
                                {data[0].jeans.quanity != 0 &&
                                    <PrevsumComp elementInfo={data[0].jeans} elementtype={"jeans"} />
                                }
                                {data[0].boxers.quanity != 0 &&
                                    <PrevsumComp elementInfo={data[0].boxers} elementtype={"boxers"} />
                                }
                                {data[0].joggers.quanity != 0 &&
                                    <PrevsumComp elementInfo={data[0].joggers} elementtype={"joggers"} />
                                }
                                {data[0].trousers.quanity != 0 &&
                                    <PrevsumComp elementInfo={data[0].trousers} elementtype={"trousers"} />
                                }
                                {data[0].others.quanity != 0 &&
                                    <PrevsumComp elementInfo={data[0].others} elementtype={"others"} />
                                }
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td>Subtotal:</td>
                                    <td>{data[1]}</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td>Pickup Charges:</td>
                                    <td>90</td>
                                </tr>
                                <tr className='editedRow'>
                                    <td></td>
                                    <td></td>
                                    <td>Total:</td>
                                    <td>{data[1] + 90}</td>
                                </tr>

                            </>
                        }
                    </tbody>
                </table>
                <div style={{ fontSize: "12px", color: "#3B3737" }}>
                    Address
                </div>
                <div className='prevsumaddress'>
                    <div><b>Home</b></div>
                    <div>#223, 10th road, Jp Nagar, Bangalore</div>
                </div>
                <div className='canclbuttn' style={{ display: cancelstyles }}>
                    <button type="button" className="btn btn-danger" style={{backgroundColor:"#F41313"}} onClick={() => Props.handlecancelorder(Props.orderSummaryprev)}>
                        cancel order</button>
                </div>
                {/* <div>{data[0].shirts.quantity}</div> */}
                {/* {data[0] != 0 && <div>item</div>} */}
            </div>


        </div>
    )
}

export default ViewprevOrder;
import React, { useState } from 'react';
import OrderFooter from './orderfooter';
import "./orderfooter.css"
import OrderHeader from './orderHeader';
import "./order.css"
import Verticalnav from './verticalnav';
import { Route, Routes } from 'react-router-dom';
import Tester from './tester';
import { Link } from 'react-router-dom'
import './createOrder.css'
import shirt from '../images/shirt.jpg'
import Washmach from '../logo/washing-machine1.svg'
import iron from '../logo/ironing1.svg'
import towel from '../logo/towel.svg'
import blech from '../logo/bleach1.svg'
import tshirt from '../images/tshirt.jpg'
import Trousers from '../images/trosures.jpg'
import jeans from '../images/jeans.jpg'
import Boxers from '../images/boxer.jpg'
import joggers from '../images/jogger.jpg'
import otherImg from '../images/othersimg.jpg'
import Bluemachine from '../logo/blueMachine.svg'
import BlueIron from '../logo/blueIron.svg'
import Bluetowel from '../logo/blueTowel.svg'
import Bluebeach from '../logo/bluebeach.svg'
import SumarryPage from './SumarryPage';
import SucessfullModal from './SucessfullModal';
import { useNavigate } from 'react-router-dom';


// govind

const CreateOrder = () => {

  const navigate = useNavigate()
  let userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const dumtoken = "test eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMmFiMTI2Y2YzMTdiY2Q0OTMyNzQ5MSJ9.qTkERCYshG0jml-XMY7kmPnardpNnNTO07ZiAzpWllQ";
  console.log("prvorders",userInfo)
  const token = userInfo ?userInfo.token:dumtoken;

  // const token = "test eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMjg4NjlkZGUzYTZlZGUxYzJmOTE1ZiJ9.rTvWSejbfXR0xJlAo7ASfHURJRYdxEo3BmA0RemoXqY";

  const [orderSucessStyle, setorderSucessStyle] = useState('none')

  const [count1, setCount1] = useState({
    m: false, i: false, t: false, b: false, sc: null, bill: 0, total: 0, btn: 0
  })
  const [count2, setCount2] = useState({
    m: false, i: false, t: false, b: false, sc: null, bill: 0, total: 0, btn: 0
  })
  const [count3, setCount3] = useState({
    m: false, i: false, t: false, b: false, sc: null, bill: 0, total: 0, btn: 0
  })
  const [count4, setCount4] = useState({
    m: false, i: false, t: false, b: false, sc: null, bill: 0, total: 0, btn: 0
  })
  const [count5, setCount5] = useState({
    m: false, i: false, t: false, b: false, sc: null, bill: 0, total: 0, btn: 0
  })
  const [count6, setCount6] = useState({
    m: false, i: false, t: false, b: false, sc: null, bill: 0, total: 0, btn: 0
  })
  const [count7, setCount7] = useState({
    m: false, i: false, t: false, b: false, sc: null, bill: 0, total: 0, btn: 0
  })

  const [total, setTotal] = useState(0)

  const [GsummaryStyle, setGSummaryStyle] = useState('none')


  const CheckNullValue = (num) => {
    if (num) {
      return parseInt(num)
    }
    return 0
  }

  const GcancelSummary = () => {
    setGSummaryStyle('none')
  }

  const [gOrderdata, setgOrderdata] = useState('')


  const handleCorderproceed = () => {
    let shirtQunatity = CheckNullValue(count1.sc)
    let tshirtQunatity = CheckNullValue(count2.sc)
    let trousersQunatity = CheckNullValue(count3.sc)
    let jeansQunatity = CheckNullValue(count4.sc)
    let boxersQunatity = CheckNullValue(count5.sc)
    let joggersQunatity = CheckNullValue(count6.sc)
    let othersQunatity = CheckNullValue(count7.sc)

    let Gorderingdata = {
      shirts: {
        quantity: shirtQunatity,
        washing: count1.m,
        ironing: count1.i,
        drycleaning: count1.t,
        chemicalcleaning: count1.b
      },
      tshirts: {
        quantity: tshirtQunatity,
        washing: count2.m,
        ironing: count2.i,
        drycleaning: count2.t,
        chemicalcleaning: count2.b
      },
      trousers: {
        quantity: trousersQunatity,
        washing: count3.m,
        ironing: count3.i,
        drycleaning: count3.t,
        chemicalcleaning: count3.b
      },
      jeans: {
        quantity: jeansQunatity,
        washing: count4.m,
        ironing: count4.i,
        drycleaning: count4.t,
        chemicalcleaning: count4.b
      },
      boxers: {
        quantity: boxersQunatity,
        washing: count5.m,
        ironing: count5.i,
        drycleaning: count5.t,
        chemicalcleaning: count5.b
      },
      joggers: {
        quantity: joggersQunatity,
        washing: count6.m,
        ironing: count6.i,
        drycleaning: count6.t,
        chemicalcleaning: count6.b
      },
      others: {
        quantity: othersQunatity,
        washing: count7.m,
        ironing: count7.i,
        drycleaning: count7.t,
        chemicalcleaning: count7.b
      },

    }

    console.log("inhandle", Gorderingdata)
    setgOrderdata(Gorderingdata)
    setGSummaryStyle('block')
  }

  const GconfirmOrderSum = async () => {
    let gSenddata = { ...gOrderdata, storelocation: 'JP Nagar', city: 'Banglore' }

    console.log(gSenddata, "g send data")

    const res = await fetch("http://localhost:8080/api/v1/posts", {
      method: "POST",
      headers: {
        'content-type': "application/json",
        Accept: 'application/json',
        Authorization: token
      },
      body: JSON.stringify(gSenddata)
    });
    console.log('print')
    setGSummaryStyle('none')
    setorderSucessStyle('block')
  }


  return (
    <>
      <OrderHeader />
      <div className='ordergridContainer'>
        <div className='verticalnav'>
          <Verticalnav />

        </div>

        <div className='ordercomponent'>
          <div className='searchBox1'>
            <h3 className='nameoftitle'>Create order</h3>
            <input className='searchEngine' type='text' placeholder='search' />
          </div>
          <div className='ccc'>
            <table className="table tableprv">
              <thead className="thead-dark table-bordered table-striped">
                <tr className=' table-dark'>
                  <th scope="col">Product Type</th>
                  <th scope="col">Qunatity</th>
                  <th scope="col"></th>
                  <th scope="col">Wash Type</th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                  <th scope="col">Price</th>
                  <th scope="col">ResetButton</th>

                </tr>

              </thead>
              {/* start from here */}
              <tr>
                <td>
                  <div className='CimageConatiner'>
                    <div>
                    <img className='Cimage' src={shirt} />
                    </div>
                 
                    <div className='CnameOf'>
                      <h6 className=''>Shirt</h6>
                      <p className=''>Lorem Ipsum is simply dummy text of the</p>
                    </div>

                  </div>
                </td>
                <td>
                  <input className='qunatity' onChange={(e) => { setCount1({ ...count1, sc: e.target.value }) }} type="text" value={count1.sc} maxlength="4" size="2" />

                </td>
                <td>
                  <img className='icon' onClick={() => (setCount1({ ...count1, m: true, btn: 1, bill: count1.bill + (1 * 5), total: (count1.bill + 5) * count1.sc }))} id='icon1' src={count1.m ? Bluemachine : Washmach} />

                </td>
                <td>
                  <img className='icon' onClick={() => (setCount1({ ...count1, i: true, btn: 1, bill: count1.bill + (1 * 5), total: (count1.bill + 5) * count1.sc }))} id='icon2' src={count1.i ? BlueIron : iron} />

                </td>
                <td>
                  <img className='icon' onClick={() => (setCount1({ ...count1, t: true, btn: 1, bill: count1.bill + (1 * 5), total: (count1.bill + 5) * count1.sc }))} id='icon3' src={count1.t ? Bluetowel : towel} />

                </td>
                <td>
                  <img className='icon' onClick={() => (setCount1({ ...count1, b: true, btn: 1, bill: count1.bill + (1 * 5), total: (count1.bill + 5) * count1.sc }))} id='icon4' src={count1.b ? Bluebeach : blech} />

                </td>
                <td>
                  {count1.btn === 0 ? <span className="dash1">__</span> : <span className="calculator1">{count1.sc} x {count1.bill} = <span style={{ fontSize: "20px", color: "#5861AE" }}>{count1.total}</span></span>}

                </td>
                <td>
                  <button style={{ opacity: count1.btn }} onClick={() => (setCount1({ m: false, i: false, t: false, b: false, sc: 0, bill: 0, total: 0 }))} className="">Reset</button>

                </td>
              </tr>
              {/* end here */}
              {/* st2 */}
              <tr>

                <td>
                  <div className='CimageConatiner'>
                    <img className='Cimage' src={tshirt} />
                    <div className='CnameOf'>
                      <h6 className=''>TShirt</h6>
                      <p className=''>Lorem Ipsum is simply dummy text of the</p>
                    </div>

                  </div>
                </td>
                <td>
                  <input className='qunatity' onChange={(e) => (setCount2({ ...count2, sc: e.target.value }))} type="text" value={count2.sc} maxlength="4" size="2" />
                </td>
                <td>
                  <img className='icon' onClick={() => (setCount2({ ...count2, m: true, btn: 1, bill: count2.bill + (1 * 5), total: (count2.bill + 5) * count2.sc }))} id='icon1' src={count2.m ? Bluemachine : Washmach} />
                </td>
                <td>
                  <img className='icon' onClick={() => (setCount2({ ...count2, i: true, btn: 1, bill: count2.bill + (1 * 5), total: (count2.bill + 5) * count2.sc }))} id='icon2' src={count2.i ? BlueIron : iron} />
                </td>
                <td>
                  <img className='icon' onClick={() => (setCount2({ ...count2, t: true, btn: 1, bill: count2.bill + (1 * 5), total: (count2.bill + 5) * count2.sc }))} id='icon3' src={count2.t ? Bluetowel : towel} />

                </td>
                <td>
                  <img className='icon' onClick={() => (setCount2({ ...count2, b: true, btn: 1, bill: count2.bill + (1 * 5), total: (count2.bill + 5) * count2.sc }))} id='icon4' src={count2.b ? Bluebeach : blech} />

                </td>
                <td>
                  {count2.btn === 0 ? <span className="dash1">__</span> : <span className="calculator1">{count2.sc} x {count2.bill} = <span style={{ fontSize: "20px", color: "#5861AE" }}>{count2.total}</span></span>}

                </td>
                <td>
                {/* reset1 */}
                  <button style={{ opacity: count2.btn }} onClick={() => (setCount2({ m: false, i: false, t: false, b: false, sc: 0, bill: 0, total: 0 }))} className="">Reset</button>

                </td>
              </tr>
              {/* end2 */}
              {/* start3 */}
              <tr><td>
                <div className='CimageConatiner'>
                  <img className='Cimage' src={Trousers} />
                  <div className='CnameOf'>
                    <h6 className=''>Trousers</h6>
                    <p className=''>Lorem Ipsum is simply dummy text of the</p>
                  </div>
                </div>
              </td>
                <td>
                  <input className='qunatity' onChange={(e) => (setCount3({ ...count3, sc: e.target.value }))} type="text" value={count3.sc} maxlength="4" size="2" />
                </td>
                <td>
                  <img className='icon' onClick={() => (setCount3({ ...count3, m: true, btn: 1, bill: count3.bill + (1 * 5), total: (count3.bill + 5) * count3.sc }))} id='icon1' src={count3.m ? Bluemachine : Washmach} />
                </td>
                <td>
                  <img className='icon' onClick={() => (setCount3({ ...count3, i: true, btn: 1, bill: count3.bill + (1 * 5), total: (count3.bill + 5) * count3.sc }))} id='icon2' src={count3.i ? BlueIron : iron} />
                </td>
                <td>
                  <img className='icon' onClick={() => (setCount3({ ...count3, t: true, btn: 1, bill: count3.bill + (1 * 5), total: (count3.bill + 5) * count3.sc }))} id='icon3' src={count3.t ? Bluetowel : towel} />
                </td>
                <td>
                  <img className='icon' onClick={() => (setCount3({ ...count3, b: true, btn: 1, bill: count3.bill + (1 * 5), total: (count3.bill + 5) * count3.sc }))} id='icon4' src={count3.b ? Bluebeach : blech} />
                </td>
                <td>
                  {count3.btn === 0 ? <span className="dash1">__</span> : <span className="calculator1">{count3.sc} x {count3.bill} = <span style={{ fontSize: "20px", color: "#5861AE" }}>{count3.total}</span></span>}
                </td>
                <td>
                  <button style={{ opacity: count3.btn }} onClick={() => (setCount3({ m: false, i: false, t: false, b: false, sc: 0, bill: 0, total: 0 }))} className="">Reset</button>
                </td>
              </tr>
              {/* end3 */}
              {/* start4 */}
              <tr><td>
                <div className='CimageConatiner'>
                  <img className='Cimage' src={jeans} />
                  <div className='CnameOf'>
                    <h6 className=''>jeans</h6>
                    <p className=''>Lorem Ipsum is simply dummy text of the</p>
                  </div>
                </div>
              </td>
                <td>
                  <input className='qunatity' onChange={(e) => (setCount4({ ...count4, sc: e.target.value }))} type="text" value={count4.sc} maxlength="4" size="2" />
                </td>
                <td>
                  <img className='icon' onClick={() => (setCount4({ ...count4, m: true, btn: 1, bill: count4.bill + (1 * 5), total: (count4.bill + 5) * count4.sc }))} id='icon1' src={count4.m ? Bluemachine : Washmach} />
                </td>
                <td>
                  <img className='icon' onClick={() => (setCount4({ ...count4, i: true, btn: 1, bill: count4.bill + (1 * 5), total: (count4.bill + 5) * count4.sc }))} id='icon2' src={count4.i ? BlueIron : iron} />
                </td>
                <td>
                  <img className='icon' onClick={() => (setCount4({ ...count4, t: true, btn: 1, bill: count4.bill + (1 * 5), total: (count4.bill + 5) * count4.sc }))} id='icon3' src={count4.t ? Bluetowel : towel} />
                </td>
                <td>
                  <img className='icon' onClick={() => (setCount4({ ...count4, b: true, btn: 1, bill: count4.bill + (1 * 5), total: (count4.bill + 5) * count4.sc }))} id='icon4' src={count4.b ? Bluebeach : blech} />
                </td>
                <td>
                  {count4.btn === 0 ? <span className="dash1">__</span> : <span className="calculator1">{count4.sc} x {count4.bill} = <span style={{ fontSize: "20px", color: "#5861AE" }}>{count4.total}</span></span>}
                </td>
                <td>
                  <button style={{ opacity: count4.btn }} onClick={() => (setCount4({ m: false, i: false, t: false, b: false, sc: 0, bill: 0, total: 0 }))} className="">Reset</button>
                </td>
              </tr>
              {/* end4 */}
              {/* strt5 */}
              <tr><td>
                <div className='CimageConatiner'>
                  <img className='Cimage' src={Boxers} />
                  <div className='CnameOf'>
                    <h6 className=''>Boxer</h6>
                    <p className=''>Lorem Ipsum is simply dummy text of the</p>
                  </div>
                </div>
              </td>
                <td>
                  <input className='qunatity' onChange={(e) => (setCount5({ ...count5, sc: e.target.value }))} type="text" value={count5.sc} maxlength="4" size="2" />
                </td>
                <td>
                  <img className='icon' onClick={() => (setCount5({ ...count5, m: true, btn: 1, bill: count5.bill + (1 * 5), total: (count5.bill + 5) * count5.sc }))} id='icon1' src={count5.m ? Bluemachine : Washmach} />
                </td>
                <td>
                  <img className='icon' onClick={() => (setCount5({ ...count5, i: true, btn: 1, bill: count5.bill + (1 * 5), total: (count5.bill + 5) * count5.sc }))} id='icon2' src={count5.i ? BlueIron : iron} />
                </td>
                <td>
                  <img className='icon' onClick={() => (setCount5({ ...count5, t: true, btn: 1, bill: count5.bill + (1 * 5), total: (count5.bill + 5) * count5.sc }))} id='icon3' src={count5.t ? Bluetowel : towel} />
                </td>
                <td>
                  <img className='icon' onClick={() => (setCount5({ ...count5, b: true, btn: 1, bill: count5.bill + (1 * 5), total: (count5.bill + 5) * count5.sc }))} id='icon4' src={count5.b ? Bluebeach : blech} />
                </td>
                <td>
                  {count5.btn === 0 ? <span className="dash1">__</span> : <span className="calculator1">{count5.sc} x {count5.bill} = <span style={{ fontSize: "20px", color: "#5861AE" }}>{count5.total}</span></span>}
                </td>
                <td>
                  <button style={{ opacity: count5.btn }} onClick={() => (setCount5({ m: false, i: false, t: false, b: false, sc: 0, bill: 0, total: 0 }))} className="">Reset</button>
                </td>
              </tr>
              {/* end5 */}
              {/* strt6 */}
              <tr><td>
                <div className='CimageConatiner'>
                  <img className='Cimage' src={joggers} />
                  <div className='CnameOf'>
                    <h6 className=''>joggers</h6>
                    <p className=''>Lorem Ipsum is simply dummy text of the</p>
                  </div>
                </div>
              </td>
                <td>
                  <input className='qunatity' onChange={(e) => (setCount6({ ...count6, sc: e.target.value }))} type="text" value={count6.sc} maxlength="4" size="2" />
                </td>
                <td>
                  <img className='icon' onClick={() => (setCount6({ ...count6, m: true, btn: 1, bill: count6.bill + (1 * 5), total: (count6.bill + 5) * count6.sc }))} id='icon1' src={count6.m ? Bluemachine : Washmach} />
                </td>
                <td>
                  <img className='icon' onClick={() => (setCount6({ ...count6, i: true, btn: 1, bill: count6.bill + (1 * 5), total: (count6.bill + 5) * count6.sc }))} id='icon2' src={count6.i ? BlueIron : iron} />
                </td>
                <td>
                  <img className='icon' onClick={() => (setCount6({ ...count6, t: true, btn: 1, bill: count6.bill + (1 * 5), total: (count6.bill + 5) * count6.sc }))} id='icon3' src={count6.t ? Bluetowel : towel} />
                </td>
                <td>
                  <img className='icon' onClick={() => (setCount6({ ...count6, b: true, btn: 1, bill: count6.bill + (1 * 5), total: (count6.bill + 5) * count6.sc }))} id='icon4' src={count6.b ? Bluebeach : blech} />
                </td>
                <td>
                  {count6.btn === 0 ? <span className="dash1">__</span> : <span className="calculator1">{count6.sc} x {count6.bill} = <span style={{ fontSize: "20px", color: "#5861AE" }}>{count6.total}</span></span>}
                </td>
                <td>
                  <button style={{ opacity: count6.btn }} onClick={() => (setCount6({ m: false, i: false, t: false, b: false, sc: 0, bill: 0, total: 0 }))} className="">Reset</button>
                </td>
              </tr>
              {/* end6 */}
              {/* strt7 */}
              <tr><td>
                <div className='CimageConatiner'>
                  <img className='Cimage' src={otherImg} />
                  <div className='CnameOf'>
                    <h6 className=''>Others</h6>
                    <p className=''>Lorem Ipsum is simply dummy text of the</p>
                  </div>
                </div>
              </td>
                <td>
                  <input className='qunatity' onChange={(e) => (setCount7({ ...count7, sc: e.target.value }))} type="text" value={count7.sc} maxlength="4" size="2" />
                </td>
                <td>
                  <img className='icon' onClick={() => (setCount7({ ...count7, m: true, btn: 1, bill: count7.bill + (1 * 5), total: (count7.bill + 5) * count7.sc }))} id='icon1' src={count7.m ? Bluemachine : Washmach} />
                </td>
                <td>
                  <img className='icon' onClick={() => (setCount7({ ...count7, i: true, btn: 1, bill: count7.bill + (1 * 5), total: (count7.bill + 5) * count7.sc }))} id='icon2' src={count7.i ? BlueIron : iron} />
                </td>
                <td>
                  <img className='icon' onClick={() => (setCount7({ ...count7, t: true, btn: 1, bill: count7.bill + (1 * 5), total: (count7.bill + 5) * count7.sc }))} id='icon3' src={count7.t ? Bluetowel : towel} />
                </td>
                <td>
                  <img className='icon' onClick={() => (setCount7({ ...count7, b: true, btn: 1, bill: count7.bill + (1 * 5), total: (count7.bill + 5) * count7.sc }))} id='icon4' src={count7.b ? Bluebeach : blech} />
                </td>
                <td>
                  {count7.btn === 0 ? <span className="dash1">__</span> : <span className="calculator1">{count7.sc} x {count7.bill} = <span style={{ fontSize: "20px", color: "#5861AE" }}>{count7.total}</span></span>}
                </td>
                <td>
                  <button style={{ opacity: count7.btn }} onClick={() => (setCount7({ m: false, i: false, t: false, b: false, sc: 0, bill: 0, total: 0 }))} className="">Reset</button>
                </td>
              </tr>
              {/* end7 */}
            </table>

            {/* <div className='title'>
                        <h6 className='headerName'>Product Type</h6>
                        <h6 className='headerName'>Qunatity</h6>
                        <h6 className='headerName'>Wash type</h6>
                        <h6 className='headerName'>Price</h6>
                    </div> */}







          </div>

          <div className='btnScetion'>
            <button onClick={() => navigate('/order')} class="button button1">Cancel</button>

            <button onClick={() => { handleCorderproceed() }} className="button button2">Proceed</button>
            {/* <Link to='/order/create/summary'><button class="button button2">Proceed</button></Link>   */}
          </div>
        </div>

        {
          GsummaryStyle == 'block' &&
          <div className='GsucessSummary1' style={{ display: GsummaryStyle }}>
            <SumarryPage GcancelSummary={GcancelSummary} gOrderdata={gOrderdata} GconfirmOrderSum={GconfirmOrderSum} />

          </div>
        }

        {
          orderSucessStyle == 'block' &&
          <div style={{ display: orderSucessStyle }}>
            <SucessfullModal />
          </div>
        }

      </div >
      <OrderFooter />
    </>
  )
}

export default CreateOrder;
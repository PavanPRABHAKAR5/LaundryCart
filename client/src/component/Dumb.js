<div className='line2'>
                        <img className='tshirt' src={tshirt}/>
                        <h6 className='productname2'>TShirt</h6>
                        <p className='productPhara2'>Lorem Ipsum is simply dummy text of the</p>

                        <input className='qunatity' onChange={(e)=>(setCount2({...count2,sc:e.target.value}))} type="text" value={count2.sc} maxlength="4" size="2"/>  
                        <img className='icon' onClick={()=>(setCount2({...count2,m:true,btn:1,bill:count2.bill+(1*5),total :(count2.bill+5)*count2.sc}))} id='icon1' src={count2.m?Bluemachine:Washmach} />
                        <img className='icon' onClick={()=>(setCount2({...count2,i:true,btn:1,bill:count2.bill+(1*5),total :(count2.bill+5)*count2.sc}))} id='icon2' src={count2.i?BlueIron:iron } />
                        <img className='icon' onClick={()=>(setCount2({...count2,t:true,btn:1,bill:count2.bill+(1*5),total :(count2.bill+5)*count2.sc}))} id='icon3' src={count2.t?Bluetowel:towel } />
                        <img className='icon' onClick={()=>(setCount2({...count2,b:true,btn:1,bill:count2.bill+(1*5),total :(count2.bill+5)*count2.sc}))} id='icon4' src={count2.b?Bluebeach:blech } />
                        
                        {count2.btn===0?<span className="dash1">__</span>:<span className="calculator1">{count2.sc} x {count2.bill} = <span style={{fontSize:"20px", color:"#5861AE"}}>{count2.total}</span></span>}
                        <button style={{opacity:count2.btn}} onClick={()=>(setCount2({ m:false,i:false,t:false,b:false,sc:0,bill:0,total:0}))} className="reset1">Reset</button>
</div>



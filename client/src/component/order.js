import React, { useState } from 'react';
import OrderFooter from './orderfooter';
import "./orderfooter.css"
import OrderHeader from './orderHeader.js';
import "./order.css"
import Verticalnav from './verticalnav';
import { Route, Routes } from 'react-router-dom';
import Tester from './tester';
import { Link } from 'react-router-dom'
import Previousorders from './getprevorders';




const Order = () => {

    return (
        <>
            <OrderHeader />
            <div className='ordergridContainer'>
                <div className='verticalnav'>
                    <Verticalnav />
                </div>
                <div className='ordercomponent'>
                    < Previousorders />
                </div>
            </div>
            <OrderFooter />
        </>
    )
}

export default Order;
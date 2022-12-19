import logo from './logo.svg';
// import './App.css';

import Register from './component/Register';
import Order from './component/order';
import Login from './component/login';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import CreateOrder from './component/createOrder';
import ViewprevOrder from './component/prvOrderView';
import SumarryPage from './component/SumarryPage';



function App() {
  return (
    <>

    <BrowserRouter>
     <Routes>
     <Route path='/' element={<Login />} />
     <Route path='/Register' element={<Register />} />
      <Route path='/order' element={<Order />} />
      <Route path='/order/viewprv' element={<ViewprevOrder />} /> {/* dummy route */}
      <Route path='/order/create' element={<CreateOrder />} />
      <Route path='/order/create/summary' element={<SumarryPage/>} />
      
    </Routes>
    </BrowserRouter>
    </>
   

  );
}

export default App;

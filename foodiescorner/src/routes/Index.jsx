import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from '../pages/Homepage'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Restaurantpage from '../pages/Restaurantpage'
import Adminpage from '../pages/Adminpage'
import Customerpage from '../pages/Customerpage'
import Regis from '../pages/Regis'
import Addmenupage from '../pages/Addmenupage'
import Incomingpage from '../pages/Incomingpage'
import Viewpaypage from '../pages/Viewpaypage'
import Viewreviewpage from '../pages/Viewreviewpage'
import Cpage from '../pages/Cpage'
import Restaurantviewpage from '../pages/Restaurantviewpage'
import Viewfoodmenupage from '../pages/Viewfoodmenupage'

function Index() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/restaurantreg' element={<Restaurantpage/>}/>
        <Route path='/admin' element={<Adminpage/>}/>
        <Route path='/customer' element={<Customerpage/>}/>
        <Route path='/regis' element={<Regis/>}/>
        <Route path='/addmenu' element={<Addmenupage/>}/>
        <Route path='/incoming' element={<Incomingpage/>}/>
        <Route path='/viewpay' element={<Viewpaypage/>}/>
        <Route path='/viewreview' element={<Viewreviewpage/>}/>
        <Route path='/customerp' element={<Cpage/>}/>
        <Route path='/restaurantview' element={<Restaurantviewpage/>}/>
        <Route path='/foodmenuview' element={<Viewfoodmenupage/>}/>


    </Routes>
    </BrowserRouter>
  )
}

export default Index
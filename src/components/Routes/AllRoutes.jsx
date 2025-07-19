import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import SignUp from '../auth/SignUp'

export default function AllRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
             <Route path='/signup' element={<SignUp />} />
        </Routes>
    )
}

import { useState } from 'react'
import Home from './layouts/Home/Home'
import { Route, Routes, Router, Navigate } from 'react-router-dom'
import Navbar from './layouts/Navbar/Navbar'
import Hero1 from './components/Hero1/Hero1'
import Feature from './components/Feature/Feature'
import Hero2 from './components/Hero2/Hero2'
import CTA from './components/CTA/CTA'
import Partners from './components/Partners/Partners'
import Testimonials from './components/Testimonials/Testimonials'
import Pricing from './components/Pricing/Pricing'
import Contact from './components/Contact/Contact'
import Footer from './layouts/Footer/Footer'


function App() {

  const [isAdmin, setisAdmin] = useState(true)

  // Here you should put all the routes to the different pages or the sections so the website can move when a user clicks on a route
  return (
    <>
      <Navbar setisAdmin={setisAdmin} isAdmin={isAdmin} />
      <Routes>
        {isAdmin ? (
          <Route path='/admin/*' element={<Home setisAdmin={setisAdmin} isAdmin={isAdmin} />} />
        ) : (
          <Route path='/home/*' element={<Home setisAdmin={setisAdmin} isAdmin={isAdmin} />} />
        )}
        <Route
          path='/*'
          element={<Navigate to={isAdmin ? '/admin' : '/home'} replace />}
        />
      </Routes>

    </>
  )
}

export default App

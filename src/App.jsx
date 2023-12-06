import { useState } from 'react'
import Home from './layouts/Home/Home'
import { Outlet, Route, Routes } from 'react-router-dom'
import LogIn from "./layouts/LogIn/LogIn"
//RW-12
function App() {

  const [isAdmin, setisAdmin] = useState(true)

  // Here you should put all the routes to the different pages or the sections so the website can move when a user clicks on a route
  return (
    <>

      <Routes>
        <Route>
          <Route path="" element={<Home />} />
          <Route path="/todolist" element={""} component={""} />
          <Route path="/categories" element={""} component={""} />
          <Route path="/categories" element={""} component={""} />
          <Route path='/Admin' element={<Home />} />
          <Route path="/LogIn" element={<LogIn />} component={""} />

        </Route>
      </Routes>
      <Outlet />
    </>
  )
}

export default App

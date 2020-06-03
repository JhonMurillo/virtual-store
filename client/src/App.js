import React, { useContext, Suspense } from 'react'
import { NavBar } from '../src/components/NavBar'
// Pages
import { NotFound } from '../src/pages/NotFound'
import { Home } from '../src/pages/Home'
import { Login } from '../src/pages/Login'
import { Signup } from '../src/pages/Signup'
import { Router, Redirect } from '@reach/router'
import { Context } from './Context'

export const App = () => {
  const { isAuth } = useContext(Context)
  return (
    <Suspense fallback={<div />}>
      <NavBar />
      <Router>
        <NotFound default />
        <Home path='/' />
        {!isAuth && <Login path='/login' />}
        {!isAuth && <Signup path='/signup' />}
        {isAuth && <Redirect from='/login' to='/' noThrow />}
      </Router>
      {/* <Router>
        <Home path='/pet/:id' />
        <Detail path='detail/:detailId' />
        {!isAuth && <NotRegisteredUser path='/login' />}
        {!isAuth && <Redirect from='/favs' to='/login' noThrow />}
        {!isAuth && <Redirect from='/user' to='/login' noThrow />}
        {isAuth && <Redirect from='/login' to='/' noThrow />}
        <Favs path='/favs' />
        <User path='/user' />
      </Router> */}
    </Suspense >
  )
}

import React from 'react'
import NavHeader from '../components/NavHeader'
import Bread_crumb from '../components/Bread_crumb'

const Homepage = () => {
  return (
    <div>
      <NavHeader/>
      <Bread_crumb title={'Home'}/>
      <h1>Home Page</h1>
    </div>
  )
}

export default Homepage

import React from 'react'

import './home.scss'
import Navbar from '../../components/AppHeader/Navbar'
import Sidebar from '../../components/SideBar/Sidebar'
import PageContent from '../../components/PageContent/PageContent'
const Home = () => {
  return (
    <div className='home'>
      <Sidebar />
      <div className='homeContainer'>
        <Navbar />
        <div className='pageconentContainer'>
          <PageContent />
        </div>
      </div>
    </div>
  )
}

export default Home
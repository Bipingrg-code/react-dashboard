import React from 'react'

import './home.scss'
import Sidebar from '../../components/SideBar/Sidebar'
import PageContent from '../../components/PageContent/PageContent'
const Home = () => {
  return (
    <div className='home'>
       <Sidebar />
       <PageContent />
    </div>
  )
}

export default Home
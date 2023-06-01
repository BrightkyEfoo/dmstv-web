import React from 'react'
import NavBar from '../components/NavBar'
import { Layout } from 'antd'
import Foot from '../components/Footer'
import MainHome from '../components/MainHome'

const Home = () => {
  return (
    <Layout>
        {/* <NavBar /> */}
        <MainHome />
        <Foot />
    </Layout>
  )
}

export default Home
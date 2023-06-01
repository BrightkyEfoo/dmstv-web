import React from 'react'
import { useParams } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Foot from '../components/Footer'
import MainEmissions from '../components/MainEmissions'

const Emissions = () => {
    const name = useParams().name as string
  return (
    <div>
        <NavBar />
        <MainEmissions name={name} />
        <Foot/>
    </div>
  )
}

export default Emissions
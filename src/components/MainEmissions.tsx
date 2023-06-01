import React, { FC } from 'react'

type Props = {
    name : string
}

const MainEmissions : FC<Props> = ({name}) => {
  return (
    <div>
        <h1>Emissions : {name}</h1>
        <main>
            
        </main>
    </div>
  )
}

export default MainEmissions
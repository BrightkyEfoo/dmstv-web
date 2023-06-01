import React, { FC } from 'react'

type myProps = {
    subTitle : string,
    title : string,
    main : string
}


const MainAboutSection3Small : FC<myProps> = ({subTitle , title , main}) => {
  return (
    <div className='MainAboutSection3Small'>
        <div className='MainAboutSection3Small-line'/>
        <p>{subTitle}</p>
        <p>{title}</p>
        <p>{main}</p>
    </div>
  )
}

export default MainAboutSection3Small
import * as React from 'react'

import './style.css'

export interface SommaireProps {
  skills: string[]
}

const Sommaire: React.FC<SommaireProps> = (props) => {
  return (
    <div className='sommaire'>
      Sommaire
    </div>
  )
}

export default Sommaire

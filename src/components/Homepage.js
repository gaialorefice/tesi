import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Homepage() {

  const location = useLocation();

  return (
    <div className='Homepage'>
       <h1>Homepage {location.state.id} </h1>
    </div>
  )
}

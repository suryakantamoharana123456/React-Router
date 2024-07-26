import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const { userid } = useParams()
  return (
    <div className='bg-gray-950 text-white text-3xl p-4'>
      <h1>User {userid}</h1>
    </div>
  )
}

export default User

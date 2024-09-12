import React from 'react'
import FruitList from './FruitList'
import DairyList from './DairyList'
const User = () => {
  return (
    <div>
       <div className='fruit-li'><FruitList/></div>
       <div className='dairy-li'><DairyList/></div>
    </div>
  )
}

export default User

import React from 'react'
import {useSelector} from 'react-redux'
export default function Profile() {

  const user=useSelector(state=>state.user.value);
  return (
    <div>
        <h1>Profile Info</h1>
        <h2>Name: {user.name}</h2>
        <h2>age: {user.age}</h2>
    </div>
  )
}

import React, { Component } from 'react'
import {useDispatch} from 'react-redux';
import {login, logout} from '../features/user'
export default function Login() {
    const dispatch=useDispatch();
  return (
    <div>
              <button onClick={()=>dispatch(login(
                {
                    name:"vinoth",
                    age:"28"
                }
              ))}>login</button>

            <button onClick={()=>dispatch(logout( ))}>logout</button>

    </div>
  )
}

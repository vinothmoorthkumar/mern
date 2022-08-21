// import React, { Component } from 'react';
import Login from "./login"
import Profile from "./profile"
import ColorSelector from "../ColorSelector";

// export default class ExerciseList extends Component {
//   render() {
//     return (
//       <div>
  
//       </div>
//     )
//   }
// }


import React from 'react'

export default function ExerciseList() {
  return (
    <div>
        <Login />
        <Profile />
        <ColorSelector />
    </div>
  )
}

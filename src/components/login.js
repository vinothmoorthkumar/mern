import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../features/user'


export default function Login() {
    const dispatch = useDispatch();
    const [name,setName]= useState('');
    const [age,setAge]= useState(0);
    const user=useSelector(state=>state.user.value);

    return (
        <div>

            {
                !user.name && (
                    <div>
                        <input value={name} onChange={e=>setName(e.target.value)} />
                        <input value={age} onChange={e=>setAge(e.target.value)} />
                    </div>
                )

            }




            { !user.name ?
                <button onClick={() => dispatch(login(
                {
                    name,
                    age
                }
            ))}>login</button>:
            <button onClick={() => dispatch(logout())}>logout</button>}

        </div>
    )
}

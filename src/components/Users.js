import React from 'react'
import { Link, Outlet, useSearchParams } from 'react-router-dom'
import { useAuth } from './auth'

export const Users = () => {
    const [searchparams, setSearchparams] = useSearchParams()
    const showActiveUsers = searchparams.get('filter') === 'active'
    const auth = useAuth()
  return (
    <>
    <h1>Admin user is  {auth.user? auth.user: 'Guest'}</h1>
    <div>
        <div><Link to='1'>User 1</Link></div>
        <div><Link to='2'>User 2</Link></div>
        <div><Link to='3'>User 3</Link></div>
        <div><Link to='admin'>Admin</Link></div>
    </div>
    <Outlet/>
    <button onClick={()=>setSearchparams({filter:'active'})} className='btn'>Active Users</button>
    <button onClick={()=>setSearchparams({})} className='btn'>Reset filter</button>
    <div>
        {showActiveUsers ? (
            <h2>Showing active Users</h2>
        ) : (
            <h2>Showing all users</h2>
        )
        }
    </div>
    </>
  )
}

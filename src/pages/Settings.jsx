import { Button, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Settings = () => {
    const hostory = useNavigate();
  return (
    <div className='py-48 md:px-32 text-center'>
        <Typography variant="h4" className="text-center md:text-left">404 | Settings Arriving Soon</Typography>
        <Button variant="contained" color="warning" className="my-5" onClick={()=>{
            hostory("/")
        }}>Logout</Button>

    </div>
  )
}

export default Settings
import { Button, TextField, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const history  = useNavigate();
  return (
    <div className='h-screen w-screen flex justify-center items-center pt-7'>
      <div className=' w-screen m-3 min-h-fit lg:w-3/4 lg:h-3/4 flex flex-col md:flex-row shadow-xl rounded-md'>
        <div className='hidden md:block md:w-1/2'>
          <img 
          src="https://theupay.com/bank/Assets/login.jpg"
          alt="loginimg"
          className='w-full h-full'
          />
        </div>
        <div className='flex-1 text-center'>
          <div className="text-center py-5">
            <img 
            src="https://img.icons8.com/bubbles/344/login-rounded-right.png"
            alt=''log-2
            height={"100px"}
            width={"100px"}
            
            />
          </div>
          <Typography variant='h4' textAlign={'center'}>Welcome Back!</Typography>
          
          <TextField placeholder='email' sx={{display:"block", marginTop:5, width:"100%", textAlign:"center"}}/>
          <TextField placeholder='password' sx={{display:"block", marginTop:5, width:"100%", textAlign:"center"}}/>
          <Button variant="contained" color="secondary" className="my-5" onClick={()=>{
            history("/feed")
          }}>Login</Button>
        </div>
      </div>
      
    </div>
  )
}

export default Login
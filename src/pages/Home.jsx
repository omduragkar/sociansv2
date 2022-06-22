import { Button, Typography } from '@mui/material'
import React from 'react'
const Home = () => {
  return (
    <div className='bg-blue-50 min-h-screen  w-screen'>
      <div className='bg-slate-200 flex flex-wrap flex-col justify-center items-center md:flex-row p-5 pt-28'>
        <img 
          src="https://ik.imagekit.io/8x8/v3/assets/blte621f0a2bd0e9f69/blt8434b6f95bbf480e/5ebf4651957e405e099040f2/8x8_Geography_icon.svg?cache=721d8588641c2238faea51d57cb30e85&tr=fo-auto"
          alt="connect"
          className='w-full md:w-2/3 h-96'
        />
        <div className='w-full py-5 text-center md:w-1/3 flex flex-col justify-center items-center'>
          <Typography variant='h3'>Connect Across</Typography>
          <Typography variant='caption' textAlign={"center"}>Connect Across the globe. Build new coder Connections with Socians. Exchange within community</Typography>
        </div>
      </div>
      <div className='bg-slate-200 flex flex-wrap flex-col-reverse justify-center items-center md:flex-row p-5'>
        <div className='w-full py-5 text-center md:w-2/3 flex flex-col justify-center items-center'>
          <Typography variant='h3'>Join Now</Typography>
          <Typography variant='caption' textAlign={"center"}>Connect Across the globe. Build new coder Connections with Socians. Exchange within community</Typography>
          <div className='p-5 space-x-5'>
            <Button variant="contained" color="secondary">Login</Button>
            <Button variant="contained" color="secondary">Signup</Button>
          </div>
        </div>
        <img 
          src="https://octopod.co.in/slink/images/login.svg"
          alt="join-in"
          className='w-full md:w-1/3 h-96 text-center'
        />
      </div>
      <div className='bg-slate-800 w-screen p-5 h-52'>
        <Typography variant='h4' textAlign={"center"} color={"white"}>Contact Form</Typography>

      </div>
    </div>
  )
}

export default Home
import { Typography } from '@mui/material'
import React from 'react'
import NewActivity from '../../components/feed/NewActivity'
import SingleFeeds from '../../components/feed/SingleFeeds'

const FeedHome = () => {
  return (
    <div className='flex md:mx-16 py-28 px-5'>
      <div className='md:w-3/4 md:max-h-screen md:overflow-y-scroll md:px-14 md:overflow-x-hidden'>
        <Typography variant="h6" textAlign={"center"} fontWeight="bold">Feeds </Typography>
        {[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,].map(v=>(<SingleFeeds/>))}
      </div>
      <div className='hidden md:block md:w-1/4 md:mx-10 md:max-h-screen md:overflow-y-scroll md:px-14 md:overflow-x-hidden'>
        <Typography variant="h6" textAlign={"center"} fontWeight="bold"> Your Activity </Typography>
        {[1,1,1].map(v=>(<NewActivity/>))}
        
      </div>
    </div>
  )
}

export default FeedHome
import React from 'react'
import { Typography } from '@mui/material';
import ChatCard from '../../components/ChatCard';
import ChatPage from '../../components/ChatPage';

const Chats = () => {
  return (
    <div className='w-screen h-screen'>
        <div className='pt-28 p-5 md:pl-20'>
           <Typography variant={"h5"}>
                Chats
            </Typography>
            <div className='flex'>
                <div className='my-5 w-screen md:w-1/2 lg:w-1/3'>
                    <ChatCard/>
                    <ChatCard/>
                    <ChatCard/>
                    <ChatCard/>
                    <ChatCard/>
                </div>
                <div className='hidden md:block md:flex-1'>
                    <ChatPage/>
                </div>
                
            </div>
        </div>

    </div>
  )
}

export default Chats
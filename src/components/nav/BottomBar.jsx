import { IconButton } from '@mui/material'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import ForumIcon from '@mui/icons-material/Forum';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from 'react-router-dom';
const BottomBar = () => {
    const history = useNavigate();

  return (
    <div className='flex md:flex-col fixed bottom-0 bg-white 
    md:bottom-auto justify-around md:justify-start w-full md:w-fit md:h-full
    p-3 md:space-y-10 md:top-24
    z-40
    '>
        <IconButton onClick = {()=>{
            history('/feed')
        }}>
            <HomeIcon/>
        </IconButton>
        <IconButton  onClick = {()=>{
            history('/chats')
        }} >
            <ForumIcon/>
        </IconButton>
        <IconButton onClick = {()=>{
            history('/user/settings')
        }} >
            <SettingsIcon/>
        </IconButton>
        <IconButton onClick = {()=>{
            history('/user/1234')
        }} >
            <PersonIcon/>
        </IconButton>
    </div>
  )
}

export default BottomBar
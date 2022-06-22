import { Button, IconButton, Typography } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
const Nav = () => {

    const history = useNavigate();
    const open = ()=>{
        let opener = document.querySelector(".opener")
        console.log(opener);
        opener.classList.toggle("hidden");
    }
    const sendto = (login)=>{
        login?history("/auth/login"):history("/auth/signup")
    }
  return (
    <div className='fixed w-screen z-40'>
        <nav className='flex justify-between items-center bg-slate-50 p-3 shadow-blue-50 shadow-xl px-8'>
            <div className='flex gap-3 justify-center items-center'>
                <IconButton size='large' onClick={open}>
                    <ManageSearchIcon/>
                </IconButton>
                <IconButton className='hidden md:block'>
                    <SearchIcon/>
                </IconButton>
                
            </div>
            <div className="opener absolute top-0 bg-white left-0 h-screen p-5 hidden z-50">
                <ul className='list-none space-y-10 flex flex-col'>
                    <li className='self-end cursor-pointer' onClick={open}><CloseIcon/></li>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Terms and Conditions</li>
                    <li className='flex-1'></li>
                    <li onClick={()=>{
                        sendto(true);
                        open()
                    }}>Login</li>
                    <li onClick={()=>{
                        sendto(false);
                        open()
                    }}>Signup</li>
                </ul>
            </div>
            <div>   
                <Typography variant='h4' className='cursor-pointer' bgcolor={"ButtonFace"} p={2} onClick = {()=>{
                    history("/")
                }}>
                    SOCIANS
                </Typography>
            </div>
            <div className='space-x-4 hidden md:block'>
                
                <Button variant={"contained"} color="secondary" onClick={()=>{
                    sendto(true);
                }}>Login</Button>
                <Button variant={"contained"} color="secondary"
                 onClick={()=>{
                    sendto(false);
                }}>Signup</Button>
            </div>
            <div className={"block md:hidden"}>
                <IconButton>
                    <SearchIcon/>
                </IconButton>
            </div>

        </nav>
    </div>

  )
}

export default Nav
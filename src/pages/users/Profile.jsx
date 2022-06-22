import { Typography } from '@mui/material';
import React from 'react'
import { useParams } from 'react-router-dom'
import SingleFeeds from '../../components/feed/SingleFeeds';

const Profile = () => {
    const { userId} = useParams();
  return (
    <div className='py-32 px-2 md:px-20'>
        <div className='container'>
            <div className='flex flex-col md:flex-row items-center gap-5'>
                <img src="https://static.scientificamerican.com/sciam/cache/file/A77DFDA8-AC26-437C-89EE952536452F3D_source.jpg?w=590&h=800&3A03143B-80C0-4682-BC1170570B5C7389"
                alt="profimg"
                height={"250px"}
                width={"150px"}
                className='rounded-full'
                />
                <div className='space-y-5 md:max-w-1/2'>
                    <Typography variant="h4" className="text-center md:text-left">Om Duragkar</Typography>
                    <Typography variant='h5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore non magnam nulla repudiandae, quod numquam, alias, iure ex vero enim repellendus iste amet facere natus repellat odit. Laudantium qui nulla id corporis harum ipsum?</Typography>
                </div>
                <div className='self-start space-y-10'>
                    <Typography variant="h4" textAlign={"center"} className="">Badges</Typography>
                    <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore non magnam nulla repudiandae, quod numquam, alias, iure ex vero enim repellendus iste amet facere natus repellat odit. Laudantium qui nulla id corporis harum ipsum?</Typography>
                </div>
            </div>
            <div className=''>
                <Typography variant="h4" className="my-5">Om's Activity</Typography>
                <div className='max-h-96 overflow-y-scroll overflow-x-hidden p-16'>
                    <SingleFeeds/>
                    <SingleFeeds/>
                    <SingleFeeds/>
                </div>
            </div>
            <div className=''>
                <Typography variant="h4" className="my-5 text-center md:text-left">Om's Profile Followers</Typography>
                
            </div>
        </div>
    </div>
  )
}

export default Profile
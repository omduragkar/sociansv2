import React from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CommentIcon from '@mui/icons-material/Comment';
import IosShareIcon from '@mui/icons-material/IosShare';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FlagIcon from '@mui/icons-material/Flag';
import { IconButton } from '@mui/material';
const NewActivity = () => {
  return (
    <div className='shadow-lg rounded-lg p-5 w-fit md:w-full'>
        <div className='flex justify-between'>
            <div className='flex items-center gap-x-2'>
                <div>
                    <img src="https://static.scientificamerican.com/sciam/cache/file/A77DFDA8-AC26-437C-89EE952536452F3D_source.jpg?w=590&h=800&3A03143B-80C0-4682-BC1170570B5C7389"
                        alt="imgbaby"
                        height={"40px"}
                        width={"40px"}
                        className="rounded-full"
                    />
                </div>
                <div>
                    <p className='text-md font-semibold'>John Doe</p>
                </div>

            </div>
            <IconButton>
                <MoreHorizIcon/>
            </IconButton>
        </div>
        <div className='h-0.5 w-full bg-slate-300'>
        </div>
        <div className="p-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia nihil assumenda minus possimus, ea cupiditate quo molestiae reprehenderit voluptatibus ducimus. Quod sapiente, debitis commodi ratione perferendis dolorem error, assumenda illo impedit eaque qui odit deserunt?
        </div>
        <div className='h-[0.1px] w-full bg-slate-300'>
        </div>
        <div className='flex justify-between gap-4 my-2'>
            <IconButton>
                <FavoriteBorderIcon/>
            </IconButton>
            <IconButton>
                <CommentIcon/>
            </IconButton>
            <IconButton>
                <IosShareIcon/>
            </IconButton>
            <IconButton>
                <FlagIcon/>
            </IconButton>
        </div>
    </div>
  )
}

export default NewActivity
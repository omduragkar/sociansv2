import { IconButton, Typography } from '@mui/material'
import React from 'react'
import {ModeComment, MoreVertOutlined} from "@mui/icons-material";

const ChatCard = () => {
  return (
    <div className='px-10'>
        <div className='container shadow-lg p-5 flex justify-between items-center'>
            <div className='flex items-center gap-x-2'>
                <div>
                    <img src="https://static.scientificamerican.com/sciam/cache/file/A77DFDA8-AC26-437C-89EE952536452F3D_source.jpg?w=590&h=800&3A03143B-80C0-4682-BC1170570B5C7389"
                        alt="imgbaby"
                        height={"40px"}
                        width={"40px"}
                        className="rounded-full"
                    />
                </div>
                <div className='hidden sm:block'>
                    <Typography className='text-md font-semibold'>John Doe</Typography>
                </div>

            </div>
            <div>
                <IconButton><ModeComment/></IconButton>
                <IconButton><MoreVertOutlined/></IconButton>
            </div>
        </div>
    </div>
  )
}

export default ChatCard
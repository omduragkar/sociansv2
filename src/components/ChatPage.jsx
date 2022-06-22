import { IconButton, TextField, Typography } from '@mui/material'
import React from 'react'
import AddReactionIcon from '@mui/icons-material/AddReaction';
import SendIcon from '@mui/icons-material/Send';
const ChatPage = () => {
  return (
    <div className=' w-full min-h-[79vh] flex flex-col'>
      <div className='shadow-lg'>
        <Typography
        variant='h5'
        textAlign={'center'}
        py={2}
        >Om Duragkar</Typography>
      </div>
      <div className='chats flex flex-col flex-1 max-h-[62vh] overflow-y-scroll'>
          <div className='shadow-xl self-end w-1/2 m-2 p-3 rounded-lg'>
            <div>
              Om Duragkar
            </div>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero neque quaerat consectetur deleniti ipsam soluta totam natus nesciunt nam laboriosam, veniam nostrum vel asperiores vitae necessitatibus magnam, nobis ea cumque quia molestias quod ipsum!</div>
          </div>
          <div className='shadow-xl self-start w-1/2 m-2 p-3 rounded-lg'>
            <div>
              Om Duragkar
            </div>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero neque quaerat consectetur deleniti ipsam soluta totam natus nesciunt nam laboriosam, veniam nostrum vel asperiores vitae necessitatibus magnam, nobis ea cumque quia molestias quod ipsum!</div>
          </div>
          <div className='shadow-xl self-end w-1/2 m-2 p-3 rounded-lg'>
            <div>
              Om Duragkar
            </div>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero neque quaerat consectetur deleniti ipsam soluta totam natus nesciunt nam laboriosam, veniam nostrum vel asperiores vitae necessitatibus magnam, nobis ea cumque quia molestias quod ipsum!</div>
          </div>
          <div className='shadow-xl self-start w-1/2 m-2 p-3 rounded-lg'>
            <div>
              Om Duragkar
            </div>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero neque quaerat consectetur deleniti ipsam soluta totam natus nesciunt nam laboriosam, veniam nostrum vel asperiores vitae necessitatibus magnam, nobis ea cumque quia molestias quod ipsum!</div>
          </div>
          <div className='shadow-xl self-end w-1/2 m-2 p-3 rounded-lg'>
            <div>
              Om Duragkar
            </div>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero neque quaerat consectetur deleniti ipsam soluta totam natus nesciunt nam laboriosam, veniam nostrum vel asperiores vitae necessitatibus magnam, nobis ea cumque quia molestias quod ipsum!</div>
          </div>
          <div className='shadow-xl self-start w-1/2 m-2 p-3 rounded-lg'>
            <div>
              Om Duragkar
            </div>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero neque quaerat consectetur deleniti ipsam soluta totam natus nesciunt nam laboriosam, veniam nostrum vel asperiores vitae necessitatibus magnam, nobis ea cumque quia molestias quod ipsum!</div>
          </div>
          <div className='shadow-xl self-end w-1/2 m-2 p-3 rounded-lg'>
            <div>
              Om Duragkar
            </div>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero neque quaerat consectetur deleniti ipsam soluta totam natus nesciunt nam laboriosam, veniam nostrum vel asperiores vitae necessitatibus magnam, nobis ea cumque quia molestias quod ipsum!</div>
          </div>
          <div className='shadow-xl self-start w-1/2 m-2 p-3 rounded-lg'>
            <div>
              Om Duragkar
            </div>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero neque quaerat consectetur deleniti ipsam soluta totam natus nesciunt nam laboriosam, veniam nostrum vel asperiores vitae necessitatibus magnam, nobis ea cumque quia molestias quod ipsum!</div>
          </div>
          <div className='shadow-xl self-end w-1/2 m-2 p-3 rounded-lg'>
            <div>
              Om Duragkar
            </div>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero neque quaerat consectetur deleniti ipsam soluta totam natus nesciunt nam laboriosam, veniam nostrum vel asperiores vitae necessitatibus magnam, nobis ea cumque quia molestias quod ipsum!</div>
          </div>
          <div className='shadow-xl self-start w-1/2 m-2 p-3 rounded-lg'>
            <div>
              Om Duragkar
            </div>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero neque quaerat consectetur deleniti ipsam soluta totam natus nesciunt nam laboriosam, veniam nostrum vel asperiores vitae necessitatibus magnam, nobis ea cumque quia molestias quod ipsum!</div>
          </div>
          <div className='shadow-xl self-end w-1/2 m-2 p-3 rounded-lg'>
            <div>
              Om Duragkar
            </div>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero neque quaerat consectetur deleniti ipsam soluta totam natus nesciunt nam laboriosam, veniam nostrum vel asperiores vitae necessitatibus magnam, nobis ea cumque quia molestias quod ipsum!</div>
          </div>
          <div className='shadow-xl self-start w-1/2 m-2 p-3 rounded-lg'>
            <div>
              Om Duragkar
            </div>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero neque quaerat consectetur deleniti ipsam soluta totam natus nesciunt nam laboriosam, veniam nostrum vel asperiores vitae necessitatibus magnam, nobis ea cumque quia molestias quod ipsum!</div>
          </div>
      </div>
      <div className='flex gap-3 items-center p-2'>
        <IconButton><AddReactionIcon/></IconButton>
        <TextField className='flex-1'/>
        <IconButton><SendIcon/></IconButton>
      </div>

    </div>
  )
}

export default ChatPage
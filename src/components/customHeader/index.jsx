import React from 'react'
import{ChatBubbleLeftRightIcon,PhoneIcon} from "@heroicons/react/24/solid"
import Chat from '@/components/chat'

const CustomHeader = ({chat}) => {
  console.log(`🚀 ~ file: index.jsx:6 ~ CustomHeader ~ chat:`, chat);
  return (
    <div className='chat-header'>
        <div className="flexbetween">
          <ChatBubbleLeftRightIcon className="icon-chat"/>
          <h3 className="header-text">{Chat.title}</h3>
        </div>
        <div className="flexbetween">
          <PhoneIcon className="icon-phone"/>
          <p className="header-text">{chat.description}</p>
        </div>
    </div>
  )
}

export default CustomHeader
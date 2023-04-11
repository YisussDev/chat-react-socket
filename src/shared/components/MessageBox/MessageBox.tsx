import React from 'react';
import './MessageBox.css'

interface MessageProps {
  name: string;
  message: string;
  primary?: boolean;
  imageUrl: string;
}

const MessageBox: React.FC<MessageProps> = ({name, message, primary, imageUrl}) => {
  return (
    <div className={primary ? 'message_container primary' : 'message_container'}>
      <div className='image_profile-container'>
        <img src={imageUrl} alt="" />
      </div>
      <div className='message-container'>
        <h3>{name}</h3>
        <p>{message}</p>
      </div>
    </div>
  )
}

export default MessageBox

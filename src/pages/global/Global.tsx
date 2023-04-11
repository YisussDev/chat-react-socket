import React, { useState, useEffect } from 'react';
import MesssageBox from '../../shared/components/MessageBox/MessageBox'
import {MessageBoxInterface} from './interfaces/MessageBox.interface'

import io from 'socket.io-client'

import './Global.css'


const socket = io('https://socket-server-production-706e.up.railway.app/', {
  query:{
    nameRoom: 'global'
  },
  withCredentials: false
})


const Global = () => {

  const [messages, setMessages] = useState<MessageBoxInterface[]>([]);
  const [clientName, setclientName] = useState<any>('');
  const [clientImage, setclientImage] = useState<any>('');

  useEffect(()=>{
    setclientName(localStorage.getItem('nameUser')||'Anonimo');
    setclientImage(localStorage.getItem('imageUser')||"https://ichef.bbci.co.uk/news/640/cpsprodpb/13FD/production/_99171150_peppapigpa.jpg");

    socket.on('connectClient',(data)=>{
      console.log(data)
    });
    socket.on('message', (data)=>{
      setMessages(previous => [data, ...previous])
    })

    return ()=>{
      socket.off()
    }
  },[])


  const sendMenssage = (event:any) =>{
    event.preventDefault();
    if(!(event.target.message.value.length > 0)) return
    const messageNew: MessageBoxInterface = {
      name: clientName,
      message: event.target.message.value,
      imageUrl: clientImage,
      id: Math.round(Math.random()*100000).toString()
    }
    socket.emit('message', messageNew)
    setMessages([messageNew, ...messages]);
    event.target.message.value = '';
  }



  return (
    <div className='global_container'>
      <div className="principle_container">
        <div className='principle_options'>

        </div>
        <div className="principle_messages-container">
          {
            messages ? messages.map(message => <MesssageBox imageUrl={message.imageUrl} name={message.name} key={message.id} message={message.message} primary={(message.name == clientName) && true}/>) : null
          }
        </div>
      </div>
      <div className="input_container">
        <form className="input_container-group" onSubmit={(event)=> sendMenssage(event)} autoComplete='off'>
          <input type="text" placeholder='Escriba un mensaje...' name='message'/>
          <button><i className='fa fa-send'></i></button>
        </form>
      </div>
    </div>
  )
}

export default Global;

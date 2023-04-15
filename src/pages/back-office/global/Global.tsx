import React, { useState, useEffect, useRef } from 'react';
import MesssageBox from '../../../shared/components/MessageBox/MessageBox'
import {MessageBoxInterface} from './interfaces/MessageBox.interface'

import io from 'socket.io-client'

import './Global.css'
import axios from 'axios';


const socket = io('https://socket-server-production-706e.up.railway.app/', {
  query:{
    nameRoom: 'global'
  },
  withCredentials: false
})


const Global = () => {



  const [messages, setMessages] = useState<MessageBoxInterface[]>([]);
  const [dataUser, setDataUser] = useState<any>({});

  useEffect(()=>{
    let dataUser = localStorage.getItem('data');
    if(!dataUser) return;
    let dataUserParse = JSON.parse(dataUser);
    setDataUser(dataUserParse);
    initMessages();

    socket.on('connectClient',(data)=>{
      console.log('Conectado...')
    });
    socket.on('message', (message)=>{
      setMessages(previous => [...previous, message.data])
    })

    return ()=>{
      socket.off()
    }
  },[])


  const initMessages = async () =>{
    try {
      const messagesHttp = await axios.get('https://chat-pro-api-production.up.railway.app/messages', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      setMessages([...messagesHttp.data, ...messages]);
      
    } catch (error) {
      console.log(error);
    }
  }



  const sendMenssage = async (event:any) =>{
    event.preventDefault();
    if(!(event.target.message.value.length > 0)) return
    try {
      const messageNew: MessageBoxInterface = {
        name: dataUser.name,
        message: event.target.message.value,
        imageUrl: dataUser.imgUrl,
        id_user: dataUser.id
      }
      const messageResponse = await axios.post<MessageBoxInterface>('https://chat-pro-api-production.up.railway.app/messages/create',messageNew, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      socket.emit('message', messageResponse);
      setMessages([...messages, messageResponse.data]);
      event.target.message.value = '';
      
    } catch (error) {
      
    }
  }



  return (
    <div className='global_container'>
      <div className="principle_container">
        <div className='principle_options'>

        </div>
        <div  className="principle_messages-container" id='principle_messages-container'>
          {
            messages ? messages.map(message => <MesssageBox imageUrl={message.imageUrl} name={message.name} key={message._id} message={message.message} primary={(message.name == dataUser.name) && true}/>) : null
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

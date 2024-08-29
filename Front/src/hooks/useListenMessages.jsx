import { useEffect } from 'react';
import { useSocketContext } from '../context/SocketContext' 
import useConversation from '../zustand/useConversation'
import notice from "../assets/sounds/notice.mp3";


const useListenMessages = () =>{
    const { socket } = useSocketContext();
    const { messages, setMessages } = useConversation();

    useEffect(()=>{
        socket?.on("newMessage", (newMessage)=>{
            
            newMessage.shouldShake = true ;
            const sound = new Audio(notice)
            sound.play();
            setMessages([...messages,newMessage])
        })

        return () => socket?.off("newmessage")
    },[socket,setMessages,messages])
}

export default useListenMessages;
import React , {useState , useContext, useEffect , useRef} from 'react'
import {useParams ,  useNavigate , Navigate} from 'react-router-dom'
import { initSocket } from './socket'
import Message from './Message'
import Card from './Card'

const ACTIONS = {
   JOIN : 'join' , 
   JOINED : 'joined' , 
   DISCONNECTED : 'disconnected' , 
   CODE_CHANGE : 'code-change' , 
   SYNC_CHANGE : 'sync-code' , 
   LEAVE : 'leave' , 
 } ;

export default function Chat(props) {

   const id = props.id ; 
   // intermediate storage 
   const [my_chat , set_my_chat] = useState() 
   // intermediate storage 
   const [chat_list , set_chat_list] = useState([])

   // stores all the chat 
   const [allchat , set_all_chat] = useState([]) ; 

   const socketRef = useRef(null) ; 
   //inter mediate level
   const [message_enter , set_message_enter] = useState(0) ;

   //stores the user info 
   const [client , setclient] = useState([{socketId : 1  , username : "sashrik gupta" } , {socketId : 2 , username : "jhon doe"}])

   useEffect(()=>{
      const init = async ()=>{
        socketRef.current = await initSocket () ; 
        socketRef.current.on('connect_error' , (err)=>handelErrors(err)) ; 
        socketRef.current.on('connect_failed' , (err)=> handelErrors(err)) ; 
    
        function handelErrors(e){
          console.log('socket_error' , e) ; 
          alert("connection failed try again later") ; 
          rng('/') ; 
        }
    
        socketRef.current.emit(ACTIONS.JOIN , {
          roomId : id , 
          username : props.username
        }) ; 
    
         //listening for joined evet 
         socketRef.current.on(ACTIONS.JOINED , ({clients , username , socketid})=>{
          if(username !== props.username){
      
            console.log(`${username} joined`) ; 
          }
          setclient(clients)
   
         })
    
    
         //listening for disconnected
         socketRef.current.on(ACTIONS.DISCONNECTED , ({socketId , username})=>{

           setclient((prev)=>{
            return prev.filter(client => client.socketId !== socketId)
           })
         })
      } ;  init() ; 
      // cleaning function 
      return () => {
         // Cleanup function to disconnect socket when component unmounts
         if (socketRef.current) {
           socketRef.current.disconnect();
           socketRef.current.off(ACTIONS.JOINED)
           socketRef.current.off(ACTIONS.DISCONNECTED)
         }
       };
    } , [])
 

 useEffect(()=>{
   //listening to chat event 
   
   if (socketRef.current) { // Check if socketRef.current exists
    socketRef.current.emit('chat', {
      roomId: id,
      chat_text : my_chat,
      username : props.username
    }) 
     
    
  } 
  }, [socketRef.current, message_enter ])



  function m_handler(){

   const old_chat = allchat ; 
   old_chat.push({
     username : props.username , 
     chat : my_chat
   })
   set_all_chat(old_chat) ; 
   set_message_enter(1-message_enter) ; 
   document.getElementById('kp').value = '' ; 
 }
    
 useEffect(()=>{
   //listening to chat event 
   if(socketRef.current){
     socketRef.current.on('chat' , ({chat_text , username})=>{
       set_chat_list({
         username : username , 
         chat : chat_text
       }) ; 
       console.log(chat_list)
 
       const old_chat = allchat ; 
       old_chat.push({
         username  , 
         chat : chat_text
       })
       set_all_chat(old_chat) ; 
      })
   }
 } , [socketRef.current , allchat])
 
 useEffect(()=>{
 console.log(chat_list)
 } , [chat_list , allchat])
 



  return (
   <Card w = '90vw' h = '90vh' mx = '3'  my = '2'>
   <div className='w-[80vw] h-[90vh] flex flex-col items-center justify-start '>

      
   <div className='flex flex-col  flex-wrap justify-center items-center h-[10vh]'>
  
    
   </div>
   <div className='h-[69vh] w-[80vw] bg-white/10 rounded-lg' style={{ overflowY: 'scroll', scrollbarWidth: 'none' }}>
   {allchat && allchat.map((el , index)=><Message key ={index} ked = {props.username} username = {el.username} chat = {el.chat} />)}
  </div>

<div class = "flex mt-2">
<input id = "kp" className='rounded-lg h-[5vh] bg-white/10 text-[2vh] text-center w-[60vw]' onChange={(e)=>{set_my_chat(e.target.value)}}/>
 <button className='btn bg-[green] rounded ml-4 btn-primary flex justify-center items-center w-[4vw]' onClick={m_handler}>send</button>

</div>


</div>
  </Card>
  )
}

import {useState, useEffect, useRef} from 'react' 
import {Chatbot} from 'supersimpledev';
import './App.css'
import RobotProfileImage from './assets/chatbot.png'
import UserProfileImage from './assets/user (2).png'


     function ChatInput({chatMessages, setChatMessages})
      {
        const [inputText , setInputText] = useState('');
        function saveInputText(event)
        {
          setInputText(event.target.value);
        }
        function sendMessage()
        {
          const newChatMessages=[
            ...chatMessages,
            {
              messages : inputText,
              sender : 'user',
              id : crypto.randomUUID()   
            }
          ]
          setChatMessages(newChatMessages);

         const response = Chatbot.getResponse(inputText);
         setChatMessages(
           [ 
            ...newChatMessages,
             {
               messages : response,
               sender : 'chatbot',
               id : crypto.randomUUID()
            }
          ])
          setInputText('');
        }
        return(
          <div className='chat-input-container'>
            <input 
              className='chat-input'
              placeholder='send a message to Chatbot' 
              size='25' 
              onChange={saveInputText}
              value={inputText}
            />
            <button
              onClick={sendMessage}
            >
              sent
            </button>
          </div>
        ); 
      }
      function ChatMessage(props)
      {
        const message=props.messages;
        const sender= props.sender;

        return( 
          <div className={
            sender === 'user' 
              ? 'chat-message-user'
              :'chat-message-chatbot'
          }>
            {sender ==='chatbot' && (
              <img class= 'image' src ={RobotProfileImage}/>
              )}
              <div className='message-box'>
                {message}
              </div>
            {sender ==='user' && (
              <img class='image' src={UserProfileImage}/>
              )}
          </div>
        );
      }

      function ChatMessages({chatMessages})
      {
        const chatMessagesRef = useRef(null);

      useEffect(() => {
         const containerElem = chatMessagesRef.current;
         if(containerElem)
         {
           containerElem.scrollTop= containerElem.scrollHeight;
         }

        }, [chatMessages]);
        // const [chatMessages, setChatMessages]= array;
        // const chatMessages=array[0];
        // const setChatMessages=array[1];

        return(
          <div className='chat-message-container' ref={chatMessagesRef}>
            {chatMessages.map((chatmessage) => {
            return (
              <ChatMessage 
                messages = {
                  chatmessage.messages}
                sender = {
                  chatmessage.sender}
              />
            )
             })}
          </div>
        )
      }
function Component(){
  const [chatMessages,setChatMessages] = useState(
    [{
      messages :'Hello chatbot',
      sender : 'user',
      id:'id1'
    },{
      messages :'hello! how can i help you',
      sender : 'chat bot',
      id:'id2'
    },{
      messages :'can you get me today`s date',
      sender : 'user',
      id:'id3'
    },{
      messages :'Today is November 07',
      sender :'chatbot',
      id:'id3'
    }]
  );
  return(
    <div className='app-container'>
      <ChatMessages 
        chatMessages = {chatMessages}
      />
      <ChatInput 
        chatMessages={chatMessages}
        setChatMessages={setChatMessages} 
      />
    </div>
  )
};
export default Component
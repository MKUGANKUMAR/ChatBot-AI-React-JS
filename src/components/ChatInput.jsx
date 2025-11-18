import {useState, } from 'react' 
import {Chatbot} from 'supersimpledev';
import './ChatInput.css'
export function ChatInput({chatMessages, setChatMessages})
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
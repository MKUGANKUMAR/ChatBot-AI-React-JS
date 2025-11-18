import {useState,} from 'react' 
import {ChatInput} from './components/ChatInput'
import './App.css'
import ChatMessages from './components/ChatMessages'

function App(){
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
export default App
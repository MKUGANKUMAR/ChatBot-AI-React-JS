import { useEffect, useRef} from "react";
import { ChatMessage}from './ChatMessage'
import './ChatMessages.css'
export function ChatMessages({chatMessages})
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
export default ChatMessages;
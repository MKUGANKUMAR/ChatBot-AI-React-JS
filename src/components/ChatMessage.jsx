import RobotProfileImage from '../assets/chatbot.png'
import UserProfileImage from '../assets/user (2).png'
import './ChatMessage.css'
export function ChatMessage(props)
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
              <img class='image2' src={UserProfileImage}/>
              )}
          </div>
        );
      }
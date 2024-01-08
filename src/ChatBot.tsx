import { faPaperPlane, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Input } from 'reactstrap';
import './styles.css';

interface ChatBotProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatBot: React.FC<ChatBotProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="overlay">
      <div className="bg-overlay"></div>
      <div className="chat-box">
        <div className="header">
          <div className="title">ChatBot</div>
          <div className="close-button" onClick={() => onClose()}>
            <FontAwesomeIcon icon={faTimes} />
          </div>
        </div>

        <div className="messages">
          <div className="message">
            <div className="bot-msg">
              <div className="msg-img">
                <img
                  src='https://cdn-icons-png.flaticon.com/512/4712/4712139.png'
                  alt='profile'
                />
              </div>
              <div className="msg-bubble">
                {/* <div className="msg-info">
                  <div className="msg-info-name font-bold">BOT</div>
                  <div className="msg-info-time text-xs">12:45</div>
                </div> */}
                <div className="msg-text">
                  Hey! I'm ChatBot, an automated assistant. How can I help you?
                </div>
              </div>
            </div>

            <div className="user-msg">
              <div className="msg-bubble">
                {/* <div className="msg-info">
                  <div className="msg-info-name font-bold">USER</div>
                  <div className="msg-info-time text-xs">12:45</div>
                </div> */}
                <div className="msg-text">User message</div>
              </div>
              {/* <div className="msg-img">
                <img
                  src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1200px-User_icon_2.svg.png'
                  alt='profile'
                />
              </div> */}
            </div>

            <div className="bot-msg">
              <div className="msg-img">
                <img
                  src='https://cdn-icons-png.flaticon.com/512/4712/4712139.png'
                  alt='profile'
                />
              </div>
              <div className="msg-bubble">
                {/* <div className="msg-info">
                  <div className="msg-info-name font-bold">BOT</div>
                  <div className="msg-info-time text-xs">12:45</div>
                </div> */}
                <div className="msg-text">Bot's response</div>
              </div>
            </div>
          </div>
        </div>

        <div className="input-container">
          <Input
            className="ask-input"
            placeholder="Ask ChatBot"
          />
          <FontAwesomeIcon
            className="ask"
            icon={faPaperPlane}
          />
        </div>
      </div>
    </div>
  );
};

export default ChatBot;

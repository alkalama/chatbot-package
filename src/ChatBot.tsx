import { faMicrophone, faPaperPlane, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef, useState } from 'react';
import { Input } from 'reactstrap';
import './styles.css';

interface ChatBotProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatBot: React.FC<ChatBotProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const [inputValue, setInputValue] = useState('');
  const [userMessages, setUserMessages] = useState<{ message: string; timestamp: string }[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSend = () => {
    if (inputValue.trim() !== '') {
      const date = new Date();
      const timestamp =
        date.getHours().toString().padStart(2, '0')
        + ':' +
        date.getMinutes().toString().padStart(2, '0');
      setUserMessages((prevMessages) => [...prevMessages, { message: inputValue, timestamp }]);
      setInputValue('');
    }
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [userMessages]);

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
            {userMessages.map((userMessage, index) => (
              <React.Fragment key={index}>
                <div className="user-msg">
                  <div className="msg-bubble">
                    {/* <div className="msg-info">
                  <div className="msg-info-name font-bold">USER</div>
                  <div className="msg-info-time text-xs">12:45</div>
                </div> */}
                    <div className="msg-text">{userMessage.message}</div>
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
                <div ref={messagesEndRef}></div>
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="input-container">
          <Input
            className="ask-input"
            placeholder="Ask ChatBot"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={(e: any) => {
              if (e.key === "Enter")
                handleSend();
            }}
          />
          <FontAwesomeIcon
            className="speak"
            icon={faMicrophone}
          />
          <FontAwesomeIcon
            className="ask"
            icon={faPaperPlane}
            onClick={() => handleSend()}
          />
        </div>
      </div>
    </div>
  );
};

export default ChatBot;

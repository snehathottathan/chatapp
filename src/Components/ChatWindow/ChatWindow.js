// ChatWindow.js

import React from 'react';

import './ChatWindow.css'; // Import CSS file for styling
import SendMessage from '../SendMessage/SendMessage';

const ChatWindow = ({ selectedConversation }) => {

 // Save data to localStorage
 localStorage.setItem('messageData', JSON.stringify(selectedConversation));

  return (
    <div className="chat-window-container">
      {selectedConversation ? (
        <div className="chat-window">
          <div className="messages">
            {selectedConversation.chatlog.map((message, index) => (
              <div key={index} className={`message ${message.side}`}>
                <div className="content">{message.text}</div>
                <div className="time">{message.timestamp}</div>
              </div>
            ))}
          </div>
          <div className="send-message-container"> {/* Container for SendMessage component */}
            <SendMessage/> {/* Render SendMessage component */}
          </div>
        </div>
      ) : (
        <>
          <div className="no-conversation">Select a conversation to start chatting</div>
          <div className="send-message-container"> {/* Container for SendMessage component */}
            <SendMessage /> {/* Render SendMessage component */}
          </div>
        </>
      )}
    </div>
  );
};

export default ChatWindow;

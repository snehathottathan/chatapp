import React, { useState } from 'react';
import './ChatWindow.css'; // Import CSS file for styling
import SendMessage from '../SendMessage/SendMessage';

const ChatWindow = ({ selectedConversation }) => {

  console.log(selectedConversation);

  const [messageInput, setMessageInput] = useState('');

  // Function to handle input change and save the value to state
  const handleChange = (e) => {

    setMessageInput(e.target.value);

  };

  // Function to handle sending a message
  const sendMessage = () => {

    if (messageInput.trim() === '') return; // Do not send empty messages

    const newMessage = {

      text: messageInput,

      timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),

      side: 'right', // Messages sent by the user will appear on the right side

      message_id: selectedConversation.chatlog ? selectedConversation.chatlog.length + 1 : 1
    };

    // Add the new message to the chatlog
    selectedConversation.chatlog.push(newMessage);

    // Clear the message input field after sending
    setMessageInput('');
  };

  return (
    <div className="chat-window-container">

      {selectedConversation&& selectedConversation.chatlog ? (

        <div className="chat-window">

          <div className="messages">

            {selectedConversation.chatlog.map((message, index) => (

              <div key={index} className={`message ${message.side}`}>

                <div className="content">{message.text}</div>

                <div className="time">{message.timestamp}</div>

              </div>

            ))}

          </div>

          <div className="send-message-container">

            <input type="text" value={messageInput} onChange={handleChange} />

            <button onClick={sendMessage}>Send</button>

          </div>

        </div>
      ) : (

        <>

          <div className="no-conversation">Select a conversation to start chatting</div>

          <div className="send-message-container">

            <input type="text" value={messageInput} onChange={handleChange} />

            <button onClick={sendMessage}>Send</button>

          </div>

        </>

      )}

    </div>

  );

};

export default ChatWindow;

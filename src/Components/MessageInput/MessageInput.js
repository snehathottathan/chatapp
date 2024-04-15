// MessageInput.js
import React, { useState } from 'react';
import './Messageinput.css';

const MessageInput = ({ selectedUser }) => {
  const [message, setMessage] = useState('');

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const sendMessage = () => {
    // Implement message sending logic here
    console.log(`Sending message "${message}" to ${selectedUser.name}`);
    setMessage('');
  };

  return (
    <div className="message-input">
      <input
        type="text"
        placeholder={`Message ${selectedUser.name}`}
        value={message}
        onChange={handleMessageChange}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default MessageInput;

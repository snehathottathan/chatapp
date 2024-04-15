import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { InputGroup, Form } from 'react-bootstrap';

function SendMessage() {

    // console.log(chatlog);

    // Retrieve data from localStorage
    const retrievedData = JSON.parse(localStorage.getItem('messageData'));

    console.log("retrievedData", retrievedData);


    // Save data to localStorage
    localStorage.setItem('messageData', JSON.stringify(retrievedData));

    // console.log(chatlog.chatlog.length);
    const [chatLog, setChatLog] = useState(() => {
        const storedChatLog = localStorage.getItem('chatLog');
        return storedChatLog ? JSON.parse(storedChatLog) : [];
    });

    const handleMessageSend = () => {
        const newMessage = {
            text: document.getElementById('messageInput').value,
            timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
            side: 'left',
            message_id: chatLog.length + 1
        };

        console.log(newMessage);

        const updatedChatLog = [...chatLog, newMessage];
        setChatLog(updatedChatLog);
        localStorage.setItem('chatLog', JSON.stringify(updatedChatLog));

        // Clear input after sending message
        document.getElementById('messageInput').value = '';
    };

    return (
        <>
            <InputGroup className="mb-3">
                <Form.Control
                    id="messageInput"
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                />
                <Button variant="primary" onClick={handleMessageSend}>
                    <i className="bi bi-send"></i> Send
                </Button>
            </InputGroup>
        </>
    );
}

export default SendMessage;

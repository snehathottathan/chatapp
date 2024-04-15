// App.js

import React, { useState } from 'react';

import './App.css'; // Assuming you have a CSS file for styling

import ConversationList from './Components/Conversation/ConversationList/ConversationList';

import messageData from './Components/Data/messageData'

import 'bootstrap/dist/css/bootstrap.min.css';

import ChatWindow from './Components/ChatWindow/ChatWindow';
import Header from './Components/Header/Header';

const App = () => {

  const [selectedConversation, setSelectedConversation] = useState(null);


  const userProfile = messageData.profile;

  const handleConversationSelection = (conversation) => {

    setSelectedConversation(conversation);

  };

  return (

    <div className="app-container">

      <div className="header-class">

        <Header userProfile={userProfile} />

      </div>

      <div style={{ display: 'flex' }}>

        <ConversationList

          selectedConversation={selectedConversation}

          onConversationSelect={handleConversationSelection}

          messageData={messageData}

        />

        <ChatWindow selectedConversation={selectedConversation} />
      </div>

    </div>
  );
};

export default App;

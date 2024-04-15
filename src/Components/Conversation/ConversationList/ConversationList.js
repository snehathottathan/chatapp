// ConversationsList.js

import React from 'react';

import ConversationItem from '../ConversationItem/ConversationItem';

import './ConversationList.css'; // Assuming you have a CSS file for styling

const ConversationList = ({ selectedConversation, onConversationSelect, messageData }) => {

  console.log(messageData);

  return (

    <div className="conversations-list-container">

      {/* <h2>Chats</h2> */}

      <div className="conversations-list">

        {messageData.friends.map((friend) => (

          <ConversationItem

            key={friend.id}

            friend={friend}

            onSelect={onConversationSelect}

            isSelected={selectedConversation && selectedConversation.id === friend.id}

          />

        ))}

      </div>

    </div>

  );
};

export default ConversationList;

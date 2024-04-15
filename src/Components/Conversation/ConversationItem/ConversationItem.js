// ConversationItem.js

import React from 'react';

import './ConversationItem.css'

const ConversationItem = ({ friend, onSelect, isSelected }) => {
    

    const handleClick = () => {

        onSelect(friend);

        console.log(friend);

    };

    return (

        <div className={`conversation-item ${isSelected ? 'selected' : ''}`} onClick={handleClick}>

            <div className='profile-image'>

                <img className='profile-pik' src={friend.picture} alt={friend.name} />

            </div>

            <div className='friend-details'>

                <div className="details">

                    <div className="user">{friend.name}</div>

                    <div className="last-message">{friend.lastChat}</div>

                </div>

            </div>
        </div>
    );
};

export default ConversationItem;

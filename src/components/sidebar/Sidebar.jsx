import React, { useState } from "react";
import "./sidebar.css";
import { assets } from "../../assets/assets";

const Sidebar = ({ currentChat, setCurrentChat }) => {
  const [extended, setExtended] = useState(false);
  const [recentChats, setRecentChats] = useState([]);

  const handleNewChat = () => {
    const newChat = { id: recentChats.length + 1, title: "Untitled Chat", content: "" };
    setRecentChats([...recentChats, newChat]);
    setCurrentChat(newChat);
  };

  const handleRecentClick = (chat) => {
    setCurrentChat(chat);
  };

  const handleHelpClick = () => {
    alert("Help information here");
  };

  return (
    <div className="sidebar">
      <div className="top">
        <div className="menu_box" onClick={() => setExtended(prev => !prev)}>
          <img className="menu" src={assets.menu_icon} alt="menu_icon" />
        </div>
        <div className="new_chat" onClick={handleNewChat}>
          <img src={assets.plus_icon} alt="plus_icon" />
          {extended && <p>New Chat</p>}
        </div>
        {extended && (
          <div className="recent">
            <p className="recent_title">Want To 🔍</p>
            {recentChats.length === 0 ? (
              <p>No recent chats</p>
            ) : (
              recentChats.map(chat => (
                <div
                  key={chat.id}
                  className="recent_entry"
                  onClick={() => handleRecentClick(chat)}
                >
                  <img src={assets.message_icon} alt="message_icon" />
                  <p>{chat.title}</p>
                </div>
              ))
            )}
          </div>
        )}
      </div>
      <div className="bottom">
        <div className="recent_entry" onClick={handleHelpClick}>
          <img src={assets.question_icon} alt="question_icon" />
          {extended && <p>Help</p>}
        </div>
        <div className="bottom_item recent_entry">
          <img src={assets.history_icon} alt="history_icon" />
          {extended && <p>Activity</p>}
        </div>
        <div className="bottom_item recent_entry">
          <img src={assets.setting_icon} alt="setting_icon" />
          {extended && <p>Settings</p>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

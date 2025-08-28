import React from "react";
import Friend from "./Friend";

function FriendsList({ friendsList, onSelection, selectedFriend }) {
  return (
    <div className="sidebar">
      <ul>
        {friendsList.map((friend) => (
          <Friend
            friend={friend}
            key={friend.id}
            onSelection={onSelection}
            selectedFriend={selectedFriend}
          />
        ))}
      </ul>
    </div>
  );
}

export default FriendsList;

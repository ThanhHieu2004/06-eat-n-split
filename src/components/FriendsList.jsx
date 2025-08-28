import React from "react";
import Friend from "./Friend";

function FriendsList({ friendsList }) {
  return (
    <div className="sidebar">
      <ul>
        {friendsList.map((friend) => (
          <Friend friend={friend} key={friend.id} />
        ))}
      </ul>
    </div>
  );
}

export default FriendsList;

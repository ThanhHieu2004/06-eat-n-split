import React from "react";

function Button({ showAddFriend, onToggleShowAddFriend }) {
  return (
    <button className="button" onClick={onToggleShowAddFriend}>
      {showAddFriend ? "Close" : "Add friend"}
    </button>
  );
}

export default Button;

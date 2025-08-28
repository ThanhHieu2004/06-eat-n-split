import React, { useState } from "react";

export function NewFriendForm({ showAddFriend, onAddNewFriend }) {
  const [friendName, setFriendName] = useState("");
  const [imageURL, setImageURL] = useState("https://i.pravatar.cc/48?u=");

  function handleInputFriendName(e) {
    setFriendName(e.target.value);
  }

  function handleInputImageURL(e) {
    setImageURL(e.target.value);
  }

  function handleAddNewFriend(e) {
    e.preventDefault();

    if (!friendName || !imageURL) return;

    const id = crypto.randomUUID();
    const newFriend = {
      id: id, // crypto.randomUUID()
      name: friendName,
      image: `${imageURL}${id}`,
      balance: 0,
    };
    onAddNewFriend(newFriend);
    setFriendName("");
    setImageURL("https://i.pravatar.cc/48?u=");
  }

  return (
    <form
      className="form-add-friend"
      style={!showAddFriend ? { display: "none" } : {}}
    >
      <label htmlFor="friendName" name="friend_info">
        👨🏻‍🤝‍👨🏻 Friend name
      </label>
      <input
        type="text"
        id="friend_info"
        value={friendName}
        onChange={handleInputFriendName}
      />
      <label htmlFor="imageURL" name="">
        🖼 Image URL
      </label>
      <input
        type="text"
        id="imageURL"
        value={imageURL}
        onChange={handleInputImageURL}
      />
      <button className="button" type="submit" onClick={handleAddNewFriend}>
        Add
      </button>
    </form>
  );
}

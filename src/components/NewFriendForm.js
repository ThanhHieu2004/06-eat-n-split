import React from "react";

export function NewFriendForm() {
  return (
    <form className="form-add-friend">
      <label for="friendName" name="friend_info">
        👨🏻‍🤝‍👨🏻 Friend name
      </label>
      <input type="text" id="friend_info"></input>
      <label for="imageURL" name="">
        🖼 Image URL
      </label>
      <input
        type="text"
        id="imageURL"
        value="https://i.pravatar.cc/300"
      ></input>
      <button className="button" type="submit">
        Add
      </button>
    </form>
  );
}

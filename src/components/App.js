import React, { useState } from "react";
import { NewFriendForm } from "./NewFriendForm";
import FriendsList from "./FriendsList";
import Button from "./Button";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friendsList, setFriendsList] = useState(initialFriends);

  function handleToggleShowAddFriend() {
    setShowAddFriend(!showAddFriend);
  }

  function handleAddNewFriend(newFriend) {
    setFriendsList((friendsList) => [...friendsList, newFriend]);
    setShowAddFriend(false); // hide the form
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friendsList={friendsList} />
        <NewFriendForm
          showAddFriend={showAddFriend}
          onAddNewFriend={handleAddNewFriend}
        />
        <Button
          showAddFriend={showAddFriend}
          onToggleShowAddFriend={handleToggleShowAddFriend}
        />
      </div>

      <SplitBillForm />
    </div>
  );
}

function SplitBillForm() {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with X</h2>
      <label>💰 Bill value</label>
      <input type="text"></input> {/* Remember to convert from str to number */}
      <label>👤 Your expense</label>
      <input type="text"></input>
      <label>👩🏽‍🤝‍🧑🏼 X's expense</label>
      <input type="text" disabled></input>
      <label>🤑 Who's paying the bill?</label>
      <select>
        <option value="you">You</option>
        <option value="X">X</option>
      </select>
      <button className="button">Split bill</button>
    </form>
  );
}

export default App;

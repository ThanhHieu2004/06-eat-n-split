import React, { useState } from "react";
import { NewFriendForm } from "./NewFriendForm";
import FriendsList from "./FriendsList";
import Button from "./Button";
import { SplitBillForm } from "./SplitBillForm";

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
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleToggleShowAddFriend() {
    setShowAddFriend(!showAddFriend);
  }

  function handleAddNewFriend(newFriend) {
    setFriendsList((friendsList) => [...friendsList, newFriend]);
    setShowAddFriend(false); // hide the form
  }

  function handleSelection(newFriend) {
    setSelectedFriend(
      (currentFriend) => (currentFriend?.id === newFriend.id ? null : newFriend) // Optional Chaining?
    );
    setShowAddFriend(false);
  }

  function handleSplitBill(bill) {
    setFriendsList((friendList) =>
      friendList.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + bill }
          : friend
      )
    );

    setSelectedFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friendsList={friendsList}
          onSelection={handleSelection}
          selectedFriend={selectedFriend}
        />
        <NewFriendForm
          showAddFriend={showAddFriend}
          onAddNewFriend={handleAddNewFriend}
        />
        <Button
          showAddFriend={showAddFriend}
          onToggleShowAddFriend={handleToggleShowAddFriend}
        />
      </div>

      {selectedFriend && (
        <SplitBillForm
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}

export default App;

import React from "react";

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
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
        <SplitBillForm />
      </div>
      <NewFriendForm />
    </div>
  );
}

function FriendsList() {
  return (
    <div className="sidebar">
      <ul>
        {initialFriends.map((friend) => (
          <Friend friend={friend} key={friend.id} />
        ))}
      </ul>
    </div>
  );
}

function Friend({ friend }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      <p
        className={`${
          (friend.balance > 0 && "green") || (friend.balance < 0 && "red")
        }`}
      >
        {friend.balance > 0
          ? `${friend.name} owns you ${friend.balance}k`
          : friend.balance === 0
          ? `You and ${friend.name} are even.`
          : `You own ${friend.name} ${Math.abs(friend.balance)}k `}
      </p>
      <button className="button">Select</button>
    </li>
  );
}

function NewFriendForm() {
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
      <button className="button">Close</button>
    </form>
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
      <input type="text"></input>
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

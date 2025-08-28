import React from "react";
import { NewFriendForm } from "./NewFriendForm";
import FriendsList from "./FriendsList";
import Button from "./Button";

function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
        <NewFriendForm />
        <Button>Add friend</Button>
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

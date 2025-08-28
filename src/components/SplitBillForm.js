import React, { useState } from "react";

export function SplitBillForm({ selectedFriend }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("user");
  const paidByFriend = bill ? bill - paidByUser : "";
  const { name } = selectedFriend;
  return (
    <form className="form-split-bill">
      <h2>Split a bill with {name}</h2>
      <label>💰 Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      ></input>
      {/* Remember to convert from str to number */}
      <label>👤 Your expense</label>
      <input
        type="text"
        value={paidByUser}
        onChange={(e) => setPaidByUser(Number(e.target.value))}
      ></input>
      <label>👩🏽‍🤝‍🧑🏼 {name}'s expense</label>
      <input type="text" disabled value={paidByFriend}></input>
      <label>🤑 Who's paying the bill?</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{name}</option>
      </select>
      <button className="button">Split bill</button>
    </form>
  );
}

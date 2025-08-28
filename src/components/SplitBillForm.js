import React from "react";

export function SplitBillForm({ selectedFriend }) {
  const { name } = selectedFriend;
  return (
    <form className="form-split-bill">
      <h2>Split a bill with {name}</h2>
      <label>💰 Bill value</label>
      <input type="text"></input> {/* Remember to convert from str to number */}
      <label>👤 Your expense</label>
      <input type="text"></input>
      <label>👩🏽‍🤝‍🧑🏼 {name}'s expense</label>
      <input type="text" disabled></input>
      <label>🤑 Who's paying the bill?</label>
      <select>
        <option value="you">You</option>
        <option value={name}>{name}</option>
      </select>
      <button className="button">Split bill</button>
    </form>
  );
}

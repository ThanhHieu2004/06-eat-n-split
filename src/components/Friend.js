import React from "react";

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

export default Friend;

import React from "react";

const CardBalance: React.FC = () => {
  const cardLimit = 1500;
  const cardBalance = Math.random() * cardLimit;
  const available = cardLimit - cardBalance;

  return (
    <div className="card balance">
      <p className="balance__title">Card Balance</p>
      <p className="balance__amount">${cardBalance.toFixed(2)}</p>
      <p className="balance__available">${available.toFixed(2)} Available</p>
    </div>
  );
};

export default CardBalance;

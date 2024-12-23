import React from "react";
import CardBalance from "./CardBalance";
import DailyPoints from "./DailyPoints";
import PaymentDue from "./PaymentDue";

const Summary: React.FC = () => (
  <div className="summary-section">
    <CardBalance />
    <PaymentDue />
    <DailyPoints />
  </div>
);

export default Summary;

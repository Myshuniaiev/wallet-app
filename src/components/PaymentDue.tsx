import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const PaymentDue: React.FC = () => {
  const currentDate = new Date();
  const month = currentDate.toLocaleString("default", { month: "long" });

  return (
    <div className="card payment-due">
      <div className="payment-due__details">
        <p className="payment-due__title">No Payment Due</p>
        <p className="payment-due__message">
          You've paid your {month} balance.
        </p>
      </div>
      <div className="payment-due__icon-container">
        <FontAwesomeIcon icon={faCheck} className="payment-due__icon" />
      </div>
    </div>
  );
};

export default PaymentDue;

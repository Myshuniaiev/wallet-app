import React from "react";
import { ITransaction } from "../types/transaction";
import { useNavigate } from "react-router-dom";
import {
  faAppleAlt,
  faChevronRight,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Transaction: React.FC<ITransaction> = ({
  name,
  amount,
  date,
  type,
  description,
  pending,
  authorizedUser,
  id,
}) => {
  const navigate = useNavigate();
  const darkColors = ["#1E293B", "#334155", "#0F172A"];
  const bgColor = darkColors[Math.floor(Math.random() * darkColors.length)];

  const handleNavigate = (id: number) => {
    navigate(`/transaction/${id}`);
  };

  return (
    <div className="transaction-item" onClick={() => handleNavigate(id)}>
      <div
        className="transaction-item__icon"
        style={{ backgroundColor: bgColor }}
      >
        <FontAwesomeIcon icon={faShoppingCart} color="white" />
      </div>
      <div className="transaction-item__details">
        <div className="transaction-item__row">
          <span className="transaction-item__name">{name}</span>
          <p className="transaction-item__price">
            {type === "Payment"
              ? `+${amount.toFixed(2)}`
              : `-${Math.abs(amount).toFixed(2)}`}
          </p>
        </div>
        <p className="transaction-item__description">
          {pending && "Pending - "}
          {description}
        </p>
        <p className="transaction-item__user">
          {authorizedUser && `${authorizedUser} - `}
          {date.toLocaleDateString()}
        </p>
      </div>
      <FontAwesomeIcon
        icon={faChevronRight}
        style={{ color: "#d1d5db", fontSize: "16px" }}
      />
    </div>
  );
};

export default Transaction;

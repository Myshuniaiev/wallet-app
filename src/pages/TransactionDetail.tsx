import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import transactions from "../assets/transactions.json";
import "./TransactionDetail.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const TransactionDetail: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const transaction = transactions.find((t) => t.id === Number(id));

  const handleNavigate = () => {
    navigate(-1);
  };

  if (!transaction) {
    return <p>Transaction not found</p>;
  }

  return (
    <div className="transaction-detail-container">
      <FontAwesomeIcon
        onClick={handleNavigate}
        icon={faChevronLeft}
        className="transaction-detail__back"
      />

      <div className="transaction-detail__overall">
        <p className="transaction-detail__price">
          {transaction.type === "Payment"
            ? `+$${transaction.amount.toFixed(2)}`
            : `-$${transaction.amount.toFixed(2)}`}
        </p>
        <p className="transaction-detail__name">{transaction.name}</p>
        <p className="transaction-detail__date">
          {new Date(transaction.date).toLocaleDateString("en-US", {
            year: "2-digit",
            month: "numeric",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
      </div>

      <div className="transaction-detail__info">
        <p>
          <strong>Status:</strong>{" "}
          {transaction.pending ? "Pending" : "Approved"}
        </p>
        <p className="transaction-detail__description">
          {transaction.description}
        </p>
        <div className="transaction-detail__total">
          <strong>Total:</strong>{" "}
          {transaction.type === "Payment"
            ? `+$${transaction.amount.toFixed(2)}`
            : `-$${transaction.amount.toFixed(2)}`}
        </div>
      </div>
    </div>
  );
};

export default TransactionDetail;

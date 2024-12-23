import React from "react";
import { ITransaction } from "../types/transaction";
import transactions from "../assets/transactions.json";
import Summary from "../components/Summary";
import Transaction from "../components/Transaction";
import "./TransactionList.css";

const TransactionList: React.FC = () => {
  return (
    <div className="transaction-list-container">
      <Summary />
      <h2 className="transaction-list__title">Latest Transactions</h2>
      <div className="transaction-list">
        {transactions.map((transaction) => {
          const { date, type, ...rest } = transaction;
          const typedTransaction = {
            ...rest,
            date: new Date(date),
            type: type as "Credit" | "Payment",
          };
          return <Transaction key={transaction.id} {...typedTransaction} />;
        })}
      </div>
    </div>
  );
};

export default TransactionList;

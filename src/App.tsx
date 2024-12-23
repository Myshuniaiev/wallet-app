import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TransactionList from "./pages/TransactionList";
import TransactionDetail from "./pages/TransactionDetail";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TransactionList />} />
        <Route path="/transaction/:id" element={<TransactionDetail />} />
      </Routes>
    </Router>
  );
};

export default App;

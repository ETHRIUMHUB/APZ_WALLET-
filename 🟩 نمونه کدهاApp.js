import React, { useState, useEffect } from "react";
import PortfolioChart from "./components/PortfolioChart";
import HistoryChart from "./components/HistoryChart";
import AuditReport from "./components/AuditReport";
import TransactionFilter from "./components/TransactionFilter";
import rpcClient from "./services/rpcClient";

function App() {
  const [portfolio, setPortfolio] = useState({});
  const [history, setHistory] = useState([]);
  const [audit, setAudit] = useState({});
  const [filter, setFilter] = useState("ALL");

  useEffect(() => {
    async function loadData() {
      const p = await rpcClient("getPortfolio", ["0xYourAddress"]);
      const h = await rpcClient("getTransactionHistory", ["0xYourAddress"]);
      const a = await rpcClient("getAuditReport", []);
      setPortfolio(p);
      setHistory(h);
      setAudit(a);
    }
    loadData();
  }, []);

  const filteredHistory =
    filter === "ALL" ? history : history.filter((tx) => tx.type === filter);

  return (
    <div className="dashboard">
      <h1>APZ Manager Dashboard</h1>

      <section>
        <h2>Portfolio</h2>
        <PortfolioChart portfolio={portfolio} />
      </section>

      <section>
        <h2>History</h2>
        <TransactionFilter selected={filter} onSelect={setFilter} />
        <HistoryChart history={filteredHistory} />
      </section>

      <section>
        <h2>Audit</h2>
        <AuditReport audit={audit} />
      </section>
    </div>
  );
}

export default App;

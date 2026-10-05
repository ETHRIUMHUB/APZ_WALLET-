import React from "react";

function AuditReport({ audit }) {
  return (
    <div>
      <p>Total Transactions: {audit.totalTx}</p>
      <p>Suspicious: {audit.suspiciousTx}</p>
      <p>Last Audit: {new Date(audit.lastChecked).toLocaleString()}</p>
    </div>
  );
}

export default AuditReport;

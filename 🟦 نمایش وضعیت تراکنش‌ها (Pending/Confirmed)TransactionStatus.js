import React, { useEffect, useState } from "react";
import rpcClient from "../services/rpcClient";

function TransactionStatus({ txHash }) {
  const [status, setStatus] = useState("Pending");

  useEffect(() => {
    async function checkStatus() {
      const result = await rpcClient("getTransactionStatus", [txHash]);
      setStatus(result.status); // "Pending" یا "Confirmed"
    }

    const interval = setInterval(checkStatus, 5000); // هر ۵ ثانیه چک کن
    return () => clearInterval(interval);
  }, [txHash]);

  return (
    <p>
      Transaction {txHash}: <strong>{status}</strong>
    </p>
  );
}

export default TransactionStatus;
SignTransaction.js
{txHash && <TransactionStatus txHash={txHash} />}

import React, { useEffect, useState } from "react";
import { openDB } from "idb";

function OfflineQueue() {
  const [queue, setQueue] = useState([]);

  async function loadQueue() {
    const db = await openDB("apz-db", 1, {
      upgrade(db) {
        if (!db.objectStoreNames.contains("offlineTx")) {
          db.createObjectStore("offlineTx", { keyPath: "id", autoIncrement: true });
        }
      },
    });
    const txStore = db.transaction("offlineTx", "readonly").objectStore("offlineTx");
    const allTx = await txStore.getAll();
    setQueue(allTx);
  }

  useEffect(() => {
    loadQueue();
    const interval = setInterval(loadQueue, 3000); // هر ۳ ثانیه آپدیت کن
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Offline Transactions Queue</h2>
      {queue.length === 0 ? (
        <p>No offline transactions</p>
      ) : (
        <ul>
          {queue.map((tx) => (
            <li key={tx.id}>
              <strong>{tx.type || "TRANSFER"}</strong> → {tx.to}  
              <br />
              Amount: {tx.amount} APZ  
              <br />
              Status: Pending (will sync when online)
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default OfflineQueue;

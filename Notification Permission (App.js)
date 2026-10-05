async function sendTxWithRetry(tx, attempt = 1) {
  try {
    await fetch("https://rpc.apzchain.org", {
      method: "POST",
      body: JSON.stringify({
        method: "sendTransaction",
        params: [tx],
        id: 1,
      }),
    });

    // موفقیت
    self.registration.showNotification("Transaction Success", {
      body: `Tx ${tx.id} sent successfully!`,
      icon: "/icons/icon-192.png"
    });

    // حذف از صف
    const db = await openDB("apz-db", 1);
    const store = db.transaction("offlineTx", "readwrite").objectStore("offlineTx");
    store.delete(tx.id);

  } catch (err) {
    console.error(`Attempt ${attempt} failed for tx ${tx.id}`, err);

    // شکست
    self.registration.showNotification("Transaction Failed", {
      body: `Tx ${tx.id} failed (attempt ${attempt})`,
      icon: "/icons/icon-192.png"
    });

    // Backoff
    const delay = Math.min(60000, 2000 * Math.pow(2, attempt));
    setTimeout(() => sendTxWithRetry(tx, attempt + 1), delay);
  }
}

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
    console.log("Transaction sent successfully:", tx.id);

    // حذف از صف بعد از موفقیت
    const db = await openDB("apz-db", 1);
    const store = db.transaction("offlineTx", "readwrite").objectStore("offlineTx");
    store.delete(tx.id);
  } catch (err) {
    console.error(`Attempt ${attempt} failed for tx ${tx.id}`, err);

    // محاسبه Backoff
    const delay = Math.min(60000, 2000 * Math.pow(2, attempt)); // حداکثر 60 ثانیه
    setTimeout(() => sendTxWithRetry(tx, attempt + 1), delay);
  }
}

self.addEventListener("sync", async (event) => {
  if (event.tag === "sync-transactions") {
    const db = await openDB("apz-db", 1);
    const store = db.transaction("offlineTx", "readonly").objectStore("offlineTx");
    const allTx = await store.getAll();

    for (const tx of allTx) {
      sendTxWithRetry(tx);
    }
  }
});

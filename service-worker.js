self.addEventListener("install", (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

// دریافت تراکنش آفلاین از اپ
self.addEventListener("message", async (event) => {
  if (event.data && event.data.type === "SAVE_TX") {
    const tx = event.data.tx;
    const db = await openDB("apz-db", 1, {
      upgrade(db) {
        db.createObjectStore("offlineTx", { keyPath: "id", autoIncrement: true });
      },
    });
    const txStore = db.transaction("offlineTx", "readwrite").objectStore("offlineTx");
    txStore.add(tx);

    // ثبت برای Background Sync
    self.registration.sync.register("sync-transactions");
  }
});

// اجرای Background Sync
self.addEventListener("sync", async (event) => {
  if (event.tag === "sync-transactions") {
    const db = await openDB("apz-db", 1);
    const txStore = db.transaction("offlineTx", "readonly").objectStore("offlineTx");
    const allTx = await txStore.getAll();

    for (const tx of allTx) {
      try {
        await fetch("https://rpc.apzchain.org", {
          method: "POST",
          body: JSON.stringify({
            method: "sendTransaction",
            params: [tx],
            id: 1,
          }),
        });
        // حذف تراکنش بعد از ارسال موفق
        const delStore = db.transaction("offlineTx", "readwrite").objectStore("offlineTx");
        delStore.delete(tx.id);
      } catch (err) {
        console.error("Failed to send tx", tx.id, err);
      }
    }
  }
});

import React, { useState } from "react";

function SignTransaction() {
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState("");
  const [txHash, setTxHash] = useState(null);

  async function sendTransaction() {
    if (!window.ethereum) {
      alert("Metamask not found!");
      return;
    }

    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const from = accounts[0];

      const txParams = {
        from,
        to,
        value: "0x" + (amount * 1e18).toString(16), // تبدیل به Wei
      };

      const hash = await window.ethereum.request({
        method: "eth_sendTransaction",
        params: [txParams],
      });

      setTxHash(hash);
    } catch (err) {
      console.error("Transaction failed", err);
    }
  }

  return (
    <div>
      <h2>Send Transaction</h2>
      <input
        type="text"
        placeholder="Recipient Address"
        value={to}
        onChange={(e) => setTo(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount (APZ)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={sendTransaction}>Send</button>

      {txHash && <p>Transaction Hash: {txHash}</p>}
    </div>
  );
}

export default SignTransaction;

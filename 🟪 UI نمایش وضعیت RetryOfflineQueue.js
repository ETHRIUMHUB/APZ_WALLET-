<li key={tx.id}>
  <strong>{tx.type || "TRANSFER"}</strong> → {tx.to}  
  <br />
  Amount: {tx.amount} APZ  
  <br />
  Status: {tx.status || "Pending"}  
  <br />
  Retry Attempts: {tx.attempts || 0}
</li>

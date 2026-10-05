import React from "react";

function TransactionFilter({ selected, onSelect }) {
  const types = ["ALL", "TRANSFER", "MINT", "BURN"];

  return (
    <div className="filter">
      {types.map((type) => (
        <button
          key={type}
          onClick={() => onSelect(type)}
          style={{
            backgroundColor: selected === type ? "#4A90E2" : "#ccc",
            marginRight: "10px",
          }}
        >
          {type}
        </button>
      ))}
    </div>
  );
}

export default TransactionFilter;

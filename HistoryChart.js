import React from "react";
import { Bar } from "react-chartjs-2";

function HistoryChart({ history }) {
  const data = {
    labels: history.map((tx) => `Tx ${tx.id}`),
    datasets: [
      {
        label: "Transaction Amount",
        data: history.map((tx) => tx.amount),
        backgroundColor: "#7B61FF",
      },
    ],
  };

  return <Bar data={data} />;
}

export default HistoryChart;

import React from "react";
import { Pie } from "react-chartjs-2";

function PortfolioChart({ portfolio }) {
  const data = {
    labels: ["Balance", "Received", "Sent"],
    datasets: [
      {
        data: [portfolio.balance, portfolio.totalReceived, portfolio.totalSent],
        backgroundColor: ["#4A90E2", "#50E3C2", "#9013FE"],
      },
    ],
  };

  return <Pie data={data} />;
}

export default PortfolioChart;

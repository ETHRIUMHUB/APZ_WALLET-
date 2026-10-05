import SignTransaction from "./SignTransaction";

function DashboardScreen({ address }) {
  // ... بخش‌های Portfolio, History, Audit

  return (
    <div>
      <h1>APZ Manager Dashboard</h1>

      {/* بخش پرتفوی */}
      {/* بخش تاریخچه */}
      {/* بخش ممیزی */}

      <section>
        <h2>Sign & Send Transaction</h2>
        <SignTransaction />
      </section>
    </div>
  );
}

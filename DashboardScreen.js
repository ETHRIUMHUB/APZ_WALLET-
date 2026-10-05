import OfflineQueue from "./OfflineQueue";

function DashboardScreen({ address }) {
  return (
    <div>
      <h1>APZ Manager Dashboard</h1>
      {/* بخش‌های Portfolio, History, Audit */}
      
      <section>
        <OfflineQueue />
      </section>
    </div>
  );
}

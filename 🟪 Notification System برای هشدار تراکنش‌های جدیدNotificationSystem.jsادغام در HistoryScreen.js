import NotificationSystem from "./NotificationSystem";

function HistoryScreen({ history }) {
  const latestTx = history.length > 0 ? history[history.length - 1] : null;

  return (
    <div>
      <h2>Transaction History</h2>
      {/* نمایش لیست تراکنش‌ها */}
      <NotificationSystem newTx={latestTx} />
    </div>
  );
}

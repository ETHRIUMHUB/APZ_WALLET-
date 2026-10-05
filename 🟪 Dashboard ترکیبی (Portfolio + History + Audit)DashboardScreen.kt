@Composable
fun DashboardScreen(
    portfolioViewModel: PortfolioViewModel,
    historyViewModel: HistoryViewModel,
    auditViewModel: AuditViewModel
) {
    val portfolio by portfolioViewModel.portfolio.collectAsState()
    val history by historyViewModel.history.collectAsState()
    val auditReport by auditViewModel.audit.collectAsState()

    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(16.dp),
        verticalArrangement = Arrangement.spacedBy(20.dp)
    ) {
        // بخش پرتفوی
        Text("Portfolio", style = MaterialTheme.typography.headlineMedium)
        BalanceChart(balance = portfolio.balance)
        TransactionPieChart(received = portfolio.totalReceived, sent = portfolio.totalSent)

        Divider()

        // بخش تاریخچه
        Text("History", style = MaterialTheme.typography.headlineMedium)
        TransactionFilter(selectedType = "ALL") { type ->
            // فیلتر تاریخچه
        }
        TransactionLineChart(history)
        TransactionBarChart(history)

        Divider()

        // بخش ممیزی
        Text("Audit Report", style = MaterialTheme.typography.headlineMedium)
        Text("Total Transactions: ${auditReport.totalTx}")
        Text("Suspicious: ${auditReport.suspiciousTx}")
        Text("Last Audit: ${auditReport.lastChecked}")
    }
}

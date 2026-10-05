@Composable
fun PortfolioScreen(viewModel: PortfolioViewModel) {
    val portfolio by viewModel.portfolio.collectAsState()

    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(16.dp),
        verticalArrangement = Arrangement.spacedBy(20.dp)
    ) {
        Text("Portfolio", style = MaterialTheme.typography.headlineMedium)

        // نمودار موجودی
        BalanceChart(balance = portfolio.balance)

        // نمودار دریافتی/ارسالی
        TransactionPieChart(
            received = portfolio.totalReceived,
            sent = portfolio.totalSent
        )

        Spacer(Modifier.height(20.dp))

        Text("Last Updated: ${portfolio.lastUpdated}")
    }
}

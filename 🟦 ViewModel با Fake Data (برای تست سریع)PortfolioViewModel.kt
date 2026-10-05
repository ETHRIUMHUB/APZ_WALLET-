package org.apz.wallet.viewmodel

import androidx.lifecycle.ViewModel
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import org.apz.wallet.model.Portfolio

class PortfolioViewModel : ViewModel() {
    private val _portfolio = MutableStateFlow(
        Portfolio(
            balance = 1234.56,
            totalReceived = 5000.0,
            totalSent = 3765.44,
            lastUpdated = System.currentTimeMillis()
        )
    )
    val portfolio: StateFlow<Portfolio> = _portfolio
}

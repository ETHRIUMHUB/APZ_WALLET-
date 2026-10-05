package org.apz.wallet.viewmodel

import androidx.lifecycle.ViewModel
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import org.apz.wallet.model.TxRecord

class HistoryViewModel : ViewModel() {
    private val _history = MutableStateFlow(
        listOf(
            TxRecord(1, "0xAAA", "0xBBB", 100.0, System.currentTimeMillis(), "TRANSFER"),
            TxRecord(2, "0xCCC", "0xDDD", 250.0, System.currentTimeMillis(), "MINT"),
            TxRecord(3, "0xEEE", "0xFFF", 75.0, System.currentTimeMillis(), "BURN")
        )
    )
    val history: StateFlow<List<TxRecord>> = _history
}

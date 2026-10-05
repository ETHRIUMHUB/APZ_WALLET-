package org.apz.wallet.viewmodel

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.launch
import org.apz.wallet.model.TxRecord
import org.apz.wallet.network.RPCClient
import org.json.JSONArray
import org.json.JSONObject

class HistoryViewModel : ViewModel() {
    private val _history = MutableStateFlow<List<TxRecord>>(emptyList())
    val history: StateFlow<List<TxRecord>> = _history

    // بارگذاری تاریخچه تراکنش‌ها از RPC
    fun loadHistory(address: String) {
        viewModelScope.launch {
            try {
                val response = RPCClient.call("getTransactionHistory", listOf(address))
                val json = JSONObject(response)
                val result = json.optJSONArray("result") ?: JSONArray()

                val txList = mutableListOf<TxRecord>()
                for (i in 0 until result.length()) {
                    val tx = result.getJSONObject(i)
                    txList.add(
                        TxRecord(
                            id = tx.optInt("id"),
                            from = tx.optString("from"),
                            to = tx.optString("to"),
                            amount = tx.optDouble("amount"),
                            timestamp = tx.optLong("timestamp"),
                            txType = tx.optString("type")
                        )
                    )
                }
                _history.value = txList
            } catch (e: Exception) {
                e.printStackTrace()
            }
        }
    }
}

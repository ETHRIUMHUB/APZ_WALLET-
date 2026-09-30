package org.apz.wallet.core

import androidx.lifecycle.ViewModel
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import org.apz.wallet.rpc.RpcClient
import org.apz.wallet.crypto.KeyStoreManager

class WalletViewModel : ViewModel() {
    private val keyStore = KeyStoreManager()
    private val rpc = RpcClient("https://rpc.apz-chain.org")

    private val _address = MutableStateFlow("...")
    val address: StateFlow<String> = _address

    private val _balance = MutableStateFlow("0.0")
    val balance: StateFlow<String> = _balance

    init {
        val addr = keyStore.getOrCreateAddress()
        _address.value = addr
    }

    fun refreshBalance() {
        val addr = _address.value
        val bal = rpc.getBalance(addr)
        _balance.value = bal.toString()
    }
}

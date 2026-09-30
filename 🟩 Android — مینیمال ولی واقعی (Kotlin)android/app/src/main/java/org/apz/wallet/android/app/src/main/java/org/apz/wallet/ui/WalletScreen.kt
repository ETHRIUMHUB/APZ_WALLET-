package org.apz.wallet.ui

import androidx.compose.foundation.layout.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import org.apz.wallet.core.WalletViewModel

@Composable
fun WalletScreen(vm: WalletViewModel = WalletViewModel()) {
    val address by vm.address.collectAsState()
    val balance by vm.balance.collectAsState()

    Column(Modifier.padding(16.dp)) {
        Text("APZ Wallet", style = MaterialTheme.typography.headlineMedium)
        Spacer(Modifier.height(16.dp))
        Text("Address: $address")
        Text("Balance: $balance APZ")
        Spacer(Modifier.height(16.dp))
        Button(onClick = { vm.refreshBalance() }) {
            Text("Refresh Balance")
        }
    }
}

package org.apz.wallet.ui.screens

import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.foundation.layout.*
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp

@Composable
fun HomeScreen(nav: androidx.navigation.NavController) {
    Column(Modifier.padding(20.dp)) {
        Text("APZ Wallet", style = MaterialTheme.typography.headlineMedium)

        Spacer(Modifier.height(20.dp))

        Button(onClick = { nav.navigate("send") }) {
            Text("Send")
        }

        Spacer(Modifier.height(10.dp))

        Button(onClick = { nav.navigate("receive") }) {
            Text("Receive")
        }
    }
}

package org.apz.wallet.ui.screens

import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.foundation.layout.*
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp

@Composable
fun ReceiveScreen(nav: androidx.navigation.NavController) {
    Column(Modifier.padding(20.dp)) {
        Text("Receive APZ", style = MaterialTheme.typography.headlineMedium)
    }
}

package org.apz.wallet.ui

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import kotlinx.coroutines.launch
import org.apz.wallet.crypto.APZCrypto
import org.apz.wallet.network.APZProvider
import org.json.JSONObject

@Composable
fun NeonTransactionScreen(
    keypair: APZCrypto.Keypair,
    provider: APZProvider
) {
    val scope = rememberCoroutineScope()

    var toAddress by remember { mutableStateOf("") }
    var amount by remember { mutableStateOf("") }
    var result by remember { mutableStateOf<String?>(null) }

    val gradient = Brush.horizontalGradient(
        listOf(
            Color(0xFF0A0F2C),
            Color(0xFF3A1C78),
            Color(0xFF6A2BEA),
            Color(0xFF8BE9FD)
        )
    )

    Box(
        modifier = Modifier
            .fillMaxSize()
            .background(gradient),
        contentAlignment = Alignment.Center
    ) {
        Column(
            modifier = Modifier
                .padding(24.dp)
                .fillMaxWidth(),
            verticalArrangement = Arrangement.spacedBy(16.dp)
        ) {

            Text(
                text = "Send APZ Transaction",
                color = Color.White,
                fontSize = 22.sp
            )

            Text(
                text = "From: ${keypair.address}",
                color = Color(0xFFB8A8FF)
            )

            OutlinedTextField(
                value = toAddress,
                onValueChange = { toAddress = it },
                label = { Text("To Address") },
                modifier = Modifier.fillMaxWidth()
            )

            OutlinedTextField(
                value = amount,
                onValueChange = { amount = it },
                label = { Text("Amount") },
                modifier = Modifier.fillMaxWidth()
            )

            GlassButton(
                text = "Send Neon Transaction"
            ) {
                scope.launch {
                    val txJson = JSONObject().apply {
                        put("from", keypair.address)
                        put("to", toAddress)
                        put("amount", amount)
                        put("nonce", System.currentTimeMillis())
                    }.toString()

                    val signature = APZCrypto.signMessage(keypair.privateKey, txJson)
                    val rawHex = signature.joinToString("") { "%02x".format(it) }

                    val resp = provider.sendRawTransaction(rawHex)
                    result = resp.toString()
                }
            }

            result?.let {
                Text(
                    text = "Result:\n$it",
                    color = Color(0xFF8BE9FD)
                )
            }
        }
    }
}

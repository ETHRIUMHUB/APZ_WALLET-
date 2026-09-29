package org.apz.wallet.ui

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

@Composable
fun OnboardingScreen(
    onFinish: () -> Unit
) {
    var step by remember { mutableStateOf(1) }
    var language by remember { mutableStateOf("en") }

    val gradient = Brush.verticalGradient(
        colors = listOf(
            Color(0xFF0A0F2C),
            Color(0xFF3A1C78),
            Color(0xFF6A2BEA)
        )
    )

    Box(
        modifier = Modifier
            .fillMaxSize()
            .background(gradient),
        contentAlignment = Alignment.Center
    ) {
        Column(
            modifier = Modifier.padding(24.dp),
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.spacedBy(24.dp)
        ) {

            when (step) {

                1 -> {
                    Text("Choose Language", color = Color.White, fontSize = 22.sp)

                    GlassButton("English") {
                        language = "en"
                        step = 2
                    }

                    GlassButton("فارسی") {
                        language = "fa"
                        step = 2
                    }
                }

                2 -> {
                    Text(
                        text = if (language == "fa")
                            "کیف‌پول APZ امن، سریع و چندزنجیره‌ای است."
                        else
                            "APZ Wallet is secure, fast and multi‑chain.",
                        color = Color.White,
                        fontSize = 18.sp
                    )

                    GlassButton(
                        text = if (language == "fa") "ادامه" else "Continue"
                    ) {
                        step = 3
                    }
                }

                3 -> {
                    Text(
                        text = if (language == "fa")
                            "آماده‌اید کیف‌پول بسازید؟"
                        else
                            "Ready to create your wallet?",
                        color = Color.White,
                        fontSize = 20.sp
                    )

                    GlassButton(
                        text = if (language == "fa") "شروع" else "Start"
                    ) {
                        onFinish()
                    }
                }
            }
        }
    }
}

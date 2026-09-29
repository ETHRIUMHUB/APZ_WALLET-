package org.apz.wallet.ui

import androidx.compose.animation.core.*
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.scale
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import org.apz.wallet.crypto.APZCrypto

@Composable
fun CreateWalletScreen(
    onWalletCreated: (APZCrypto.Keypair) -> Unit
) {
    var keypair by remember { mutableStateOf<APZCrypto.Keypair?>(null) }
    var isCreating by remember { mutableStateOf(false) }

    val infiniteTransition = rememberInfiniteTransition()
    val pulse by infiniteTransition.animateFloat(
        initialValue = 0.9f,
        targetValue = 1.1f,
        animationSpec = infiniteRepeatable(
            animation = tween(800, easing = FastOutSlowInEasing),
            repeatMode = RepeatMode.Reverse
        )
    )

    val gradient = Brush.verticalGradient(
        listOf(
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
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.spacedBy(24.dp),
            modifier = Modifier.padding(24.dp)
        ) {

            Text(
                text = "Create APZ Wallet",
                color = Color(0xFF8BE9FD),
                fontSize = 22.sp
            )

            Box(
                modifier = Modifier
                    .size(140.dp)
                    .scale(if (isCreating) pulse else 1f)
                    .background(
                        brush = Brush.radialGradient(
                            colors = listOf(
                                Color(0xFF8BE9FD),
                                Color(0x003A1C78)
                            )
                        ),
                        shape = CircleShape
                    ),
                contentAlignment = Alignment.Center
            ) {
                Text(
                    text = if (keypair == null) "Tap to create" else "Wallet Ready",
                    color = Color(0xFF0A0F2C)
                )
            }

            GlassButton(
                text = "Generate Wallet"
            ) {
                isCreating = true
                keypair = APZCrypto.generateKeypair()
                keypair?.let { onWalletCreated(it) }
                isCreating = false
            }

            keypair?.let {
                Text(
                    text = "Address:\n${it.address}",
                    color = Color.White
                )
            }
        }
    }
}

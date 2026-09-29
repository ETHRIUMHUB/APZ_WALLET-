package org.apz.wallet.ui

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.shadow
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

@Composable
fun WelcomeScreen(
    onStart: () -> Unit
) {
    val gradient = Brush.verticalGradient(
        colors = listOf(
            Color(0xFF0A0F2C), // آبی تیره APZ
            Color(0xFF3A1C78), // بنفش APZ
            Color(0xFF6A2BEA)  // نئونی بنفش
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
            modifier = Modifier.padding(32.dp)
        ) {

            Text(
                text = "APZ WALLET",
                fontSize = 36.sp,
                fontWeight = FontWeight.Bold,
                color = Color(0xFF8BE9FD),
                modifier = Modifier.shadow(20.dp, ambientColor = Color(0xFF8BE9FD))
            )

            Text(
                text = "Secure • Transparent • Multi‑Chain",
                fontSize = 16.sp,
                color = Color(0xFFB8A8FF)
            )

            Spacer(modifier = Modifier.height(40.dp))

            GlassButton(
                text = "Get Started",
                onClick = onStart
            )
        }
    }
}

@Composable
fun GlassButton(
    text: String,
    onClick: () -> Unit
) {
    Button(
        onClick = onClick,
        colors = ButtonDefaults.buttonColors(
            containerColor = Color(0x33FFFFFF)
        ),
        shape = RoundedCornerShape(16.dp),
        modifier = Modifier
            .fillMaxWidth()
            .height(56.dp)
            .shadow(10.dp, RoundedCornerShape(16.dp))
    ) {
        Text(
            text = text,
            fontSize = 18.sp,
            color = Color.White,
            fontWeight = FontWeight.SemiBold
        )
    }
}

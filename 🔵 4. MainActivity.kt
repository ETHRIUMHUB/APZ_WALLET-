package org.apz.wallet

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import org.apz.wallet.navigation.AppNavigator
import org.apz.wallet.ui.theme.APZTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        setContent {
            APZTheme {
                AppNavigator()
            }
        }
    }
}

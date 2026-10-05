package org.apz.wallet.navigation

import androidx.compose.runtime.Composable
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.rememberNavController
import org.apz.wallet.ui.screens.*

@Composable
fun AppNavigator() {
    val nav = rememberNavController()

    NavHost(navController = nav, startDestination = "home") {
        composable("home") { HomeScreen(nav) }
        composable("send") { SendScreen(nav) }
        composable("receive") { ReceiveScreen(nav) }
    }
}

setContent {
    var showWelcome by remember { mutableStateOf(true) }
    var showOnboarding by remember { mutableStateOf(false) }

    MaterialTheme {
        Surface {
            when {
                showWelcome -> WelcomeScreen {
                    showWelcome = false
                    showOnboarding = true
                }

                showOnboarding -> OnboardingScreen {
                    showOnboarding = false
                    // نمایش کیف‌پول اصلی
                    WalletScreen(provider)
                }
            }
        }
    }
}

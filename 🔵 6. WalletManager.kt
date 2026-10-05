package org.apz.wallet.wallet

import org.apz.wallet.wallet.RPCClient
import java.security.KeyPairGenerator

class WalletManager {

    fun generateWallet(): String {
        val generator = KeyPairGenerator.getInstance("EC")
        generator.initialize(256)
        val keyPair = generator.generateKeyPair()

        return keyPair.public.encoded.toString()
    }

    suspend fun getBalance(address: String): Double {
        return RPCClient.call("getBalance", address).toDouble()
    }

    suspend fun sendTransaction(from: String, to: String, amount: Double): String {
        return RPCClient.call("sendTransaction", from, to, amount)
    }
}

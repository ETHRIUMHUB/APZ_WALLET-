package org.apz.wallet.crypto

import android.util.Base64
import java.security.SecureRandom

class KeyStoreManager {
    private var address: String? = null

    fun getOrCreateAddress(): String {
        if (address == null) {
            val bytes = ByteArray(20)
            SecureRandom().nextBytes(bytes)
            address = "apz_" + Base64.encodeToString(bytes, Base64.NO_WRAP)
        }
        return address!!
    }
}

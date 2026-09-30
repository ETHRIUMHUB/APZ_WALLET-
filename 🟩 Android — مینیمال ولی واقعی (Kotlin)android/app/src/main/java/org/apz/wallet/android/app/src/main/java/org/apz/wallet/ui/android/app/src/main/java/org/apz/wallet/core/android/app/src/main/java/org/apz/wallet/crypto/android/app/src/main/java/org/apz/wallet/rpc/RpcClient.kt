package org.apz.wallet.rpc

import java.net.URL
import javax.net.ssl.HttpsURLConnection

class RpcClient(private val endpoint: String) {

    fun getBalance(address: String): Double {
        // مینیمال: فقط یک مقدار ثابت برمی‌گردانیم؛ بعداً می‌توانی JSON واقعی اضافه کنی
        return 42.0
    }

    fun sendRawTransaction(rawTx: String): String {
        // Placeholder برای ارسال تراکنش
        return "0xTX_HASH_PLACEHOLDER"
    }
}

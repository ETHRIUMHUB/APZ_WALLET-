package org.apz.wallet.wallet

import okhttp3.*
import org.json.JSONObject

object RPCClient {
    private val client = OkHttpClient()
    private const val RPC_URL = "https://rpc.apzchain.org"

    suspend fun call(method: String, vararg params: Any): String {
        val json = JSONObject()
        json.put("method", method)
        json.put("params", params)
        json.put("id", 1)

        val body = RequestBody.create(
            MediaType.parse("application/json"),
            json.toString()
        )

        val request = Request.Builder()
            .url(RPC_URL)
            .post(body)
            .build()

        val response = client.newCall(request).execute()
        return response.body()?.string() ?: ""
    }
}

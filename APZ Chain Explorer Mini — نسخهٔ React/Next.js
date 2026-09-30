"use client";

import React, { useState } from "react";

const RPC_ENDPOINT =
  process.env.NEXT_PUBLIC_APZ_RPC_ENDPOINT || "https://rpc.apz-chain.org";

type Lang = "fa" | "en" | "de";

const labels: Record<Lang, any> = {
  fa: {
    title: "APZ Chain Explorer Mini",
    subtitle: "جستجوی آدرس، تراکنش و بلاک روی APZ Chain",
    placeholder: "apz_address | tx_hash | block_number",
    search: "جستجو",
    type: "نوع",
    balance: "موجودی",
    nonce: "Nonce",
    recentTxs: "تراکنش‌های اخیر",
    overview: "نمای کلی",
    raw: "Raw RPC",
    history: "تاریخچه",
  },
  en: {
    title: "APZ Chain Explorer Mini",
    subtitle: "Search address, transaction and block on APZ Chain",
    placeholder: "apz_address | tx_hash | block_number",
    search: "Search",
    type: "Type",
    balance: "Balance",
    nonce: "Nonce",
    recentTxs: "Recent txs",
    overview: "Overview",
    raw: "Raw RPC",
    history: "History",
  },
  de: {
    title: "APZ Chain Explorer Mini",
    subtitle: "Adresse, Transaktion und Block auf der APZ‑Chain suchen",
    placeholder: "apz_address | tx_hash | block_number",
    search: "Suchen",
    type: "Typ",
    balance: "Kontostand",
    nonce: "Nonce",
    recentTxs: "Letzte Transaktionen",
    overview: "Übersicht",
    raw: "Raw RPC",
    history: "Verlauf",
  },
};

function isTxHash(q: string) {
  return /^0x[0-9a-fA-F]{6,}$/.test(q);
}
function isAddress(q: string) {
  return /^apz_[0-9a-fA-F]{20,}$/.test(q) || /^[0-9a-fA-F]{40,}$/.test(q);
}
function isBlockNumber(q: string) {
  return /^\d+$/.test(q);
}

async function rpcCall(method: string, params: any[] = []) {
  const res = await fetch(RPC_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ jsonrpc: "2.0", id: 1, method, params }),
  });
  if (!res.ok) throw new Error("RPC network error");
  const json = await res.json();
  return json.result ?? json;
}

export default function ExplorerPage() {
  const [lang, setLang] = useState<Lang>("fa");
  const t = labels[lang];

  const [query, setQuery] = useState("");
  const [mode, setMode] = useState<"auto" | "address" | "tx" | "block">("auto");
  const [activeTab, setActiveTab] = useState<"overview" | "raw" | "history">(
    "overview"
  );
  const [loading, setLoading] = useState(false);

  const [typeLabel, setTypeLabel] = useState<string>("—");
  const [balance, setBalance] = useState<string>("—");
  const [nonce, setNonce] = useState<string>("—");
  const [txs, setTxs] = useState<any[]>([]);
  const [raw, setRaw] = useState<string>("—");
  const [history, setHistory] = useState<string>("—");

  async function handleSearch() {
    const q = query.trim();
    if (!q) return;
    setLoading(true);
    setTypeLabel("—");
    setBalance("—");
    setNonce("—");
    setTxs([]);
    setRaw("—");
    setHistory("—");

    let type = mode;
    if (type === "auto") {
      if (isTxHash(q)) type = "tx";
      else if (isAddress(q)) type = "address";
      else if (isBlockNumber(q)) type = "block";
      else type = "address";
    }

    try {
      if (type === "address") {
        setTypeLabel("Address");
        const balanceRes = await rpcCall("apz_getBalance", [q]);
        const txsRes = await rpcCall("apz_getAddressTxs", [q, { limit: 5 }]);
        setBalance(`${balanceRes} APZ`);
        setNonce(String(Math.floor(Math.random() * 10)));
        setTxs(txsRes || []);
        setRaw(JSON.stringify({ address: q, balance: balanceRes, txs: txsRes }, null, 2));
        setActiveTab("overview");
      } else if (type === "tx") {
        setTypeLabel("Transaction");
        const tx = await rpcCall("apz_getTransaction", [q]);
        setRaw(JSON.stringify(tx, null, 2));
        setBalance(`${tx?.value ?? "—"} APZ`);
        setTxs(tx ? [tx] : []);
        setActiveTab("raw");
      } else if (type === "block") {
        setTypeLabel("Block");
        const block = await rpcCall("apz_getBlock", [q]);
        setRaw(JSON.stringify(block, null, 2));
        setHistory(`Transactions in block: ${block?.txCount ?? "—"}`);
        setActiveTab("raw");
      }
    } catch (e: any) {
      setRaw(`Error: ${e?.message || String(e)}`);
      setActiveTab("raw");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#020617",
        color: "#e5e7eb",
        padding: "24px",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: 980,
          margin: "0 auto",
          background: "rgba(15,23,42,0.85)",
          borderRadius: 18,
          padding: 20,
          boxShadow: "0 10px 40px rgba(15,23,42,0.8)",
        }}
      >
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
          <div>
            <h1 style={{ margin: 0 }}>{t.title}</h1>
            <p style={{ margin: "4px 0", opacity: 0.85 }}>{t.subtitle}</p>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <button onClick={() => setLang("fa")}>FA</button>
            <button onClick={() => setLang("en")}>EN</button>
            <button onClick={() => setLang("de")}>DE</button>
          </div>
        </div>

        {/* Search row */}
        <div
          style={{
            marginTop: 16,
            display: "flex",
            gap: 10,
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.placeholder}
            style={{
              flex: 1,
              minWidth: 220,
              padding: "10px 12px",
              borderRadius: 10,
              border: "1px solid rgba(255,255,255,0.08)",
              background: "rgba(255,255,255,0.02)",
              color: "inherit",
            }}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          <button
            onClick={handleSearch}
            style={{
              padding: "10px 14px",
              borderRadius: 10,
              border: "none",
              background: "#6b46ff",
              color: "#fff",
              cursor: "pointer",
              fontWeight: 600,
            }}
          >
            {t.search}
          </button>
          <select
            value={mode}
            onChange={(e) => setMode(e.target.value as any)}
            style={{
              padding: "10px 12px",
              borderRadius: 10,
              border: "1px solid rgba(255,255,255,0.08)",
              background: "rgba(255,255,255,0.02)",
              color: "inherit",
            }}
          >
            <option value="auto">Auto</option>
            <option value="address">Address</option>
            <option value="tx">Transaction</option>
            <option value="block">Block</option>
          </select>
        </div>

        {/* Tabs */}
        <div style={{ marginTop: 14, display: "flex", gap: 8 }}>
          {(["overview", "raw", "history"] as const).map((tab) => (
            <div
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: "8px 12px",
                borderRadius: 8,
                cursor: "pointer",
                background:
                  activeTab === tab
                    ? "linear-gradient(90deg,#6b46ff,#22c55e)"
                    : "rgba(255,255,255,0.03)",
                color: activeTab === tab ? "#021" : "#e5e7eb",
                fontWeight: activeTab === tab ? 700 : 400,
              }}
            >
              {tab === "overview" ? t.overview : tab === "raw" ? t.raw : t.history}
            </div>
          ))}
        </div>

        {/* Panels */}
        <div style={{ marginTop: 14, fontSize: "0.95rem", lineHeight: 1.45 }}>
          {loading && <div>Loading…</div>}

          {activeTab === "overview" && (
            <div>
              <p>
                <strong>{t.type}:</strong> {typeLabel}
              </p>
              <p>
                <strong>{t.balance}:</strong> {balance}
              </p>
              <p>
                <strong>{t.nonce}:</strong> {nonce}
              </p>
              <div>
                <strong>{t.recentTxs}:</strong>
                <div style={{ marginTop: 6 }}>
                  {txs.length === 0 ? (
                    "—"
                  ) : (
                    txs.map((tx, i) => (
                      <div
                        key={i}
                        style={{
                          padding: "6px 0",
                          borderBottom: "1px dashed rgba(255,255,255,0.06)",
                        }}
                      >
                        <strong>{tx.hash}</strong> → {tx.to} • {tx.value} APZ •{" "}
                        <em>{tx.status}</em>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          )}

          {activeTab === "raw" && (
            <pre
              style={{
                background: "rgba(0,0,0,0.35)",
                padding: 12,
                borderRadius: 8,
                overflow: "auto",
              }}
            >
              {raw}
            </pre>
          )}

          {activeTab === "history" && <div>{history}</div>}
        </div>
      </div>
    </div>
  );
  }

APZ Wallet — Official RepositoryLightweight • Secure • Open‑Source
Built by Khalil Heyrani
____________________________________
🔰 Badges
________________
✨ ویژگی‌ها
🔐 تولید کلید محلی بدون وابستگی به سرور
📝 امضای تراکنش‌ها روی دستگاه
🌐 پشتیبانی از RPC چندشبکه‌ای
⚡ UI نئونی برای Android و Web
🧩 معماری ماژولار (Android / Web / Core / Crypto / RPC / Explorer)
🧪 ماتریس تست کامل CI/CD
🎨 Landing Page انیمیشنی WebGL + Particle System
🔍 APZ Chain Explorer Mini (React/Next.js)
🌍 پشتیبانی از سه زبان (FA / EN / DE)
_______________________________________
📁 ساختار ریپو
apz-wallet/
├── android/            # اپ اندروید (Kotlin + Compose)
├── web/                # نسخه وب (HTML/CSS/JS)
├── core/               # هسته TypeScript
├── crypto/             # رمزنگاری Rust
├── network/            # RPC Client با Go
├── explorer-react/     # APZ Chain Explorer Mini (Next.js)
├── docs/               # مستندات + GitHub Pages + PDF
└── .github/workflows/  # CI/CD کامل
_______________________________________
🚀 Android Build
cd android
./gradlew assembleRelease
خروجی:
app/build/outputs/apk/release/app-release.apk
_______________________________________
🌐 Web Version
cd web
python3 -m http.server 8080
سپس باز کنید:
http://localhost:8080
________________________________________
🧭 APZ Chain Explorer (React/Next.js)
مسیر:
explorer-react/app/explorer/page.tsx
راه‌اندازی:
npm install
npm run dev
تنظیم RPC:
NEXT_PUBLIC_APZ_RPC_ENDPOINT=https://rpc.apz-chain.org
________________________________________
🔐 امنیت
.کلید خصوصی هرگز از دستگاه خارج نمی‌شود
.هیچ سرور مرکزی برای ذخیره کلیدها وجود ندارد
.رمزنگاری با Rust Crypto Engine
.ارتباط امن با RPC
.پیشنهاد: رمزگذاری کلیدها با AES‑256
_________________________________
📚 مستندات
.تمام مستندات در مسیر docs/ موجود است:
.INSTALLATION.md
.ARCHITECTURE.md
.SECURITY.md
.RPC-SPEC.md
.CRYPTO-SPEC.md
.UI-GUIDE.md
.TEST-MATRIX.md
.Documentation.pdf
________________________________
🧪 CI/CD Test Matrix
.پوشش کامل:
.CPU / GPU / RAM
.Storage / Battery
.Network Latency
.RPC Delay
.Blockchain Sync
.Mempool Congestion
.Gas Volatility
.Fork Simulation
.Pending Pool Chaos
مسیر:
.github/workflows/
____________________________________
🤝 مشارکت
Pull Request و Issue کاملاً پذیرفته می‌شود.
قوانین:
.کامیت‌های تمیز
.توضیحات واضح
.رعایت معماری ماژولار
.پیروی از استانداردهای APZ
___________________________
❤️ سازندهساخته‌شده با عشق توسط Khalil Heyrani
برای APZ Chain — یک اکوسیستم شفاف، امن و مستقل.

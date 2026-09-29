# APZ_WALLET-# APZ WALLET  
Official, lightweight, secure and open-source wallet for APZ Chain  
کیف‌پول رسمی، سبک، امن و متن‌باز برای APZ Chain

---

## 📛 Badges
![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![Version](https://img.shields.io/github/v/release/apz-chain/apz-wallet)
![License](https://img.shields.io/github/license/apz-chain/apz-wallet)
![Downloads](https://img.shields.io/github/downloads/apz-chain/apz-wallet/total)

---

## 🌍 Overview | معرفی
**English:**  
APZ WALLET is designed for transparency, speed and reproducibility.  
It provides a modular architecture for developers and a neon UI for users.  

**فارسی:**  
APZ WALLET با هدف شفافیت، سرعت و قابلیت بازتولید ساخته شده است.  
این کیف‌پول معماری ماژولار برای توسعه‌دهندگان و رابط کاربری نئونی برای کاربران ارائه می‌دهد.

---

## ✨ Features | قابلیت‌ها
- Create wallet (private/public key + APZ address)  
- Sign transactions locally  
- Send raw transactions to APZ RPC  
- Multi-chain support (Mainnet, Testnet, Devnet)  
- Android mobile version with neon UI and animations  
- Lightweight web version (HTML/CSS/JS)  
- Modular architecture for integration into other APZ projects  

---

## 🧩 Project Structure | ساختار پروژه
apz-wallet/ ├── android/        # Android mobile version ├── web/            # Web version ├── core/           # Wallet & transaction logic ├── crypto/         # Key generation & signing ├── network/        # RPC communication ├── ui/             # User interface ├── assets/         # Logos, posters, intro video └── docs/           # Documentation
---

## 🚀 Install & Run (Web) | نصب و اجرا (وب)
**English:**
```bash
git clone https://github.com/apz-chain/apz-wallet.git
cd apz-wallet/web
npm install
python3 -m http.server 8080
---
Documentation
📱 Install & Run (Android) | نصب و اجرا (اندروید)English:کپی کردنbashcd apz-wallet/android
./gradlew assembleReleaseAPK output:
app/build/outputs/apk/release/app-release.apkفارسی:
با دستور بالا نسخه‌ی Release ساخته می‌شود و فایل APK در مسیر مشخص قرار می‌گیرد.
🔐 Security | امنیتPrivate keys are stored only on the user’s device.No sensitive data is sent to external servers.Recommended: client-side encryption & secure storage for production.کلید خصوصی فقط روی دستگاه کاربر ذخیره می‌شود و هیچداده‌ی حساسی به سرورهای خارجی ارسال نمی‌شود.
----
برای نسخه عملیاتی، رمزنگاری سمت‌کاربر و Secure Storage توصیه می‌شود.
🤝 Contribution | مشارکتEnglish:
Bug reports, feature requests and PRs are welcome.
Please follow clear, printable templates for contributions.فارسی:
----
گزارش خطا، پیشنهاد ویژگی و Pull Request پذیرفته می‌شود.
لطفاً از قالب‌های شفاف و قابل‌چاپ برای مشارکت استفاده کنید.
❤️ Author | سازندهCreated with passion by Khalil Heyrani
ساخته‌شده با عشق توسط خلیل حیرانیAPZ Chain — Future of Transparent Infrastructure
APZ Chain — آینده‌ای شفاف و قابل‌اعتماد

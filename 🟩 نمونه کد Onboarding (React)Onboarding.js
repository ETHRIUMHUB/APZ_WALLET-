import React, { useState } from "react";

function Onboarding({ onFinish }) {
  const [step, setStep] = useState(0);

  const screens = [
    {
      title: "خوش آمدید 💙",
      text: "APZ Manager — داشبورد امن و شفاف برای مدیریت پرتفوی و تراکنش‌ها.",
    },
    {
      title: "ویژگی‌ها 🌌",
      text: "نمایش Portfolio + History + Audit در یک داشبورد، با قابلیت Offline Mode.",
    },
    {
      title: "امنیت 🔐",
      text: "ورود با Wallet/Metamask و امضای تراکنش‌ها با Push Notifications.",
    },
    {
      title: "شروع 🚀",
      text: "همین حالا وارد داشبورد شوید و مدیریت APZ Chain را آغاز کنید.",
    },
  ];

  const current = screens[step];

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h2>{current.title}</h2>
      <p>{current.text}</p>

      {step < screens.length - 1 ? (
        <button onClick={() => setStep(step + 1)}>ادامه</button>
      ) : (
        <button onClick={onFinish}>شروع</button>
      )}
    </div>
  );
}

export default Onboarding;

const nodemailer = require("nodemailer");

async function sendAlertEmail(to, tx) {
  let transporter = nodemailer.createTransport({
    service: "gmail", // یا Outlook
    auth: {
      user: process.env.ALERT_EMAIL,
      pass: process.env.ALERT_PASS,
    },
  });

  let info = await transporter.sendMail({
    from: '"APZ Manager" <alerts@apzchain.org>',
    to,
    subject: "Suspicious Transaction Alert",
    text: `Suspicious Transaction Detected:
    TxID: ${tx.id}
    From: ${tx.from}
    To: ${tx.to}
    Amount: ${tx.amount} APZ
    Type: ${tx.txType}
    Time: ${new Date(tx.timestamp).toLocaleString()}
    `,
  });

  console.log("Alert Email sent: %s", info.messageId);
}

module.exports = { sendAlertEmail };

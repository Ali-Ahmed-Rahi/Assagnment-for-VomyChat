const nodemailer = require("nodemailer");
const { google } = require("googleapis");

const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(
  "YOUR_CLIENT_ID",
  "YOUR_CLIENT_SECRET",
  "https://developers.google.com/oauthplayground"
);

oauth2Client.setCredentials({
  access_token: "YOUR_ACCESS_TOKEN",
});

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: "your_email@gmail.com",
    clientId: "YOUR_CLIENT_ID",
    clientSecret: "YOUR_CLIENT_SECRET",
    refreshToken: "YOUR_REFRESH_TOKEN",
  },
});

async function sendEmail(recipient, subject, body) {
  const mailOptions = {
    from: "your_email@gmail.com",
    to: recipient,
    subject: subject,
    text: body,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

// example
sendEmail("recipient@example.com", "Test Email", "This is a test email.");

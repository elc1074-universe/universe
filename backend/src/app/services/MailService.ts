import nodemailer from "nodemailer";

class MailService {
  private transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
  });

  async sendMail(to: string, subject: string, text: string) {
    const mailOptions = {
      from: process.env.EMAIL,
      to,
      subject,
      html: text,
    };

    return this.transporter.sendMail(mailOptions);
  }
}

export default new MailService();

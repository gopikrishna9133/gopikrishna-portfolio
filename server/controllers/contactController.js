import Contact from "../models/Contact.js";
import { Resend } from "resend";

export const createContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    await Contact.create({ name, email, subject, message });

    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);

      await resend.emails.send({
        from: "Portfolio <onboarding@resend.dev>",
        to: "gopikrishnak9133@gmail.com",
        reply_to: email,
        subject: `New Contact: ${subject || "No Subject"}`,
        html: `
          <h2>New Message from Portfolio</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject || "-"}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      });
    }

    res.status(200).json({ message: "Message sent successfully" });

  } catch (error) {
    console.error("CONTACT ERROR:", error);
    res.status(500).json({ message: "Failed to send message" });
  }
};

export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch contacts" });
  }
};

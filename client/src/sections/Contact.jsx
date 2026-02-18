import { useState, useEffect } from "react";
import { sendContact } from "../services/api";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!status) return;

    const timer = setTimeout(() => {
      setStatus(null);
    }, 4000);

    return () => clearTimeout(timer);
  }, [status]);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus(null);

    try {
      await sendContact(form);
      setStatus("success");
      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-surface">
      <div className="max-w-3xl mx-auto px-6">
        <header className="text-center mb-14">
          <h2 className="text-3xl font-bold text-textPrimary">Get In Touch</h2>
          <p className="text-textSecondary mt-4">
            Feel free to reach out for opportunities or collaboration.
          </p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="bg-background border border-primary/20 focus:border-primary focus:outline-none p-3 rounded-lg w-full text-textPrimary transition"
            />

            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="bg-background border border-primary/20 focus:border-primary focus:outline-none p-3 rounded-lg w-full text-textPrimary transition"
            />
          </div>

          <input
            name="subject"
            value={form.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="bg-background border border-primary/20 focus:border-primary focus:outline-none p-3 rounded-lg w-full text-textPrimary transition"
          />

          <textarea
            name="message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            placeholder="Message"
            required
            className="bg-background border border-primary/20 focus:border-primary focus:outline-none p-3 rounded-lg w-full text-textPrimary transition resize-none"
          />

          <div className="text-center pt-4">
            <button
              type="submit"
              disabled={loading}
              className="px-8 py-3 bg-primary text-background font-medium rounded-lg transition-transform duration-200 hover:scale-105 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>

          {status && (
            <div className="mt-6 text-center">
              <div
                className={`inline-block px-6 py-3 rounded-lg text-sm font-medium transition ${
                  status === "success"
                    ? "bg-primary/10 text-primary"
                    : "bg-red-500/10 text-red-500"
                }`}
              >
                {status === "success"
                  ? "Message sent successfully."
                  : "Something went wrong. Please try again."}
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

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
    if (status) {
      const timer = setTimeout(() => {
        setStatus(null);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [status]);

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

        <h2 className="text-3xl font-bold text-center mb-6">
          Get In Touch
        </h2>

        <p className="text-textSecondary text-center mb-12">
          Feel free to reach out for opportunities or collaboration.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">

          <div className="grid md:grid-cols-2 gap-6">
            <input
              className="bg-background border border-primary/20 focus:border-primary focus:outline-none p-3 rounded-lg w-full text-textPrimary"
              placeholder="Full Name"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
              required
            />

            <input
              type="email"
              className="bg-background border border-primary/20 focus:border-primary focus:outline-none p-3 rounded-lg w-full text-textPrimary"
              placeholder="Email"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              required
            />
          </div>

          <input
            className="bg-background border border-primary/20 focus:border-primary focus:outline-none p-3 rounded-lg w-full text-textPrimary"
            placeholder="Subject"
            value={form.subject}
            onChange={(e) =>
              setForm({ ...form, subject: e.target.value })
            }
          />

          <textarea
            rows="5"
            className="bg-background border border-primary/20 focus:border-primary focus:outline-none p-3 rounded-lg w-full text-textPrimary"
            placeholder="Message"
            value={form.message}
            onChange={(e) =>
              setForm({ ...form, message: e.target.value })
            }
            required
          />

          <div className="text-center">
            <button
              type="submit"
              disabled={loading}
              className="px-8 py-3 bg-primary text-background font-medium rounded-lg transition-transform duration-200 hover:scale-110 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>

          {status && (
            <div className="relative mt-6 text-center">
              <div
                className={`inline-block px-6 py-3 rounded-lg text-sm font-medium ${
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

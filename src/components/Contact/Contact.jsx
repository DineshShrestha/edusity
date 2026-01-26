import { useState } from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";

const Contact = () => {
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setStatus("Missing form config, add VITE_WEB3FORMS_ACCESS_KEY in .env");
      return;
    }

    setIsSending(true);
    setStatus("Sending...");

    try {
      const form = event.currentTarget;
      const formData = new FormData(form);
      formData.append("access_key", accessKey);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        setStatus(data?.message || "Submission failed, try again.");
        return;
      }

      setStatus("Message sent. We will reply soon.");
      form.reset();
    } catch (err) {
      setStatus("Network error, try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="Message icon" />
        </h3>

        <p>
          We reply within 24 hours. For urgent matters, email contact@great.dev.
        </p>

        <ul>
          <li>
            <img src={mail_icon} alt="Email icon" />
            contact@great.dev
          </li>
          <li>
            <img src={phone_icon} alt="Phone icon" />
            +47 65 66 66 66
          </li>
          <li>
            <img src={location_icon} alt="Location icon" />
            3800 Bø, Midt-Telemark
          </li>
        </ul>
      </div>

      <div className="contact-col">
        <form onSubmit={onSubmit} aria-describedby="contact-status">
          <label htmlFor="contact-name">Your name</label>
          <input
            id="contact-name"
            type="text"
            name="name"
            placeholder="Enter your name"
            autoComplete="name"
            required
          />

          <label htmlFor="contact-email">Email</label>
          <input
            id="contact-email"
            type="email"
            name="email"
            placeholder="Enter your email"
            autoComplete="email"
            required
          />

          <label htmlFor="contact-phone">Phone number</label>
          <input
            id="contact-phone"
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            autoComplete="tel"
          />

          <label htmlFor="contact-message">Message</label>
          <textarea
            id="contact-message"
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
          />

          <button
            type="submit"
            className="btn dark-btn"
            disabled={isSending}
            aria-disabled={isSending}
          >
            {isSending ? "Sending..." : "Submit"}
            <img src={white_arrow} alt="" />
          </button>
        </form>

        <span id="contact-status" role="status" aria-live="polite">
          {status}
        </span>
      </div>
    </div>
  );
};

export default Contact;

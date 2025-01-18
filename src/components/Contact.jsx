import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { FaOrcid, FaPhone } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { SiGmail } from "react-icons/si";

export default function Contact() {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        { publicKey: import.meta.env.VITE_EMAILJS_USER_ID }
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message Sent! Thank You For Your Time!!");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section
      id="contact"
      className="py-12 bg-light-secondary dark:bg-dark-secondary text-light-textPrimary dark:text-light-secondary"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Get In Touch</h2>

        {/* Contact Links - Horizontal on larger screens, stacked on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Contact Info Cards */}
          <div className="flex flex-col items-center justify-center bg-light-background dark:bg-dark-background p-6 rounded-lg shadow-lg space-y-4">
            <a
              href="https://wa.me/8328926385"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col gap-2 items-center justify-start space-x-2 text-lg font-semibold text-light-textPrimary  dark:text-light-secondary"
            >
              <IoLogoWhatsapp size={32} />
              <h4>Whatsapp</h4>
              <p className="text-xs text-dark-accent">8328926385</p>
            </a>
          </div>
          <div className="flex flex-col items-center justify-center bg-light-background dark:bg-dark-background p-6 rounded-lg shadow-lg space-y-4">
            <a
              href="https://orcid.org/0009-0000-1809-7208"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col gap-2 items-center justify-start space-x-2 text-lg font-semibold text-light-textPrimary  dark:text-light-secondary"
            >
              <FaOrcid size={32} />
              <h4>ORCID</h4>
              <p className="text-xs text-dark-accent">0009-0000-1809-7208</p>
            </a>
          </div>

          <div className="flex flex-col items-center justify-center bg-light-background dark:bg-dark-background p-6 rounded-lg shadow-lg space-y-4">
            <a
              href="tel:8328926385"
              className="flex flex-col gap-2 items-center justify-start space-x-2 text-lg font-semibold text-light-textPrimary  dark:text-light-secondary"
            >
              <FaPhone size={28} />
              <h4>Phone</h4>
              <p className="text-xs text-dark-accent">8328926385</p>
            </a>
          </div>

          <div className="flex flex-col items-center justify-center bg-light-background dark:bg-dark-background p-6 rounded-lg shadow-lg space-y-4">
            <a
              href="mailto:slray3867@gmail.com"
              className="flex flex-col gap-2 items-center justify-start space-x-2 text-lg font-semibold text-light-textPrimary dark:text-light-secondary"
            >
              <SiGmail size={32} />
              <h4>Email</h4>
              <p className="text-sm text-dark-accent">slray3867@gmail.com</p>
            </a>
          </div>
        </div>

        {/* Contact Form & Map Section - Side by side on larger screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-light-background dark:bg-dark-background p-6 rounded-lg shadow-xl">
            <form ref={form} onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full p-3 bg-light-secondary dark:bg-dark-secondary text-dark-textPrimary dark:text-dark-textPrimary rounded-md"
                  placeholder="Full Name"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  className="w-full p-3 bg-light-secondary dark:bg-dark-secondary text-dark-textPrimary dark:text-dark-textPrimary rounded-md"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="tel"
                  name="phone"
                  className="w-full p-3 bg-light-secondary dark:bg-dark-secondary text-dark-textPrimary dark:text-dark-textPrimary rounded-md"
                  placeholder="Phone Number"
                  required
                />
              </div>
              <div className="mb-4">
                <textarea
                  name="message"
                  className="w-full p-3 bg-light-secondary dark:bg-dark-secondary text-dark-textPrimary dark:text-dark-textPrimary rounded-md"
                  placeholder="Type Your Message Here...."
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-light-accent dark:bg-dark-accent text-white rounded-md"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Map Section */}
          <div className="bg-light-background dark:bg-dark-background p-6 rounded-lg shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29945.88918121518!2d86.14654521689415!3d20.249038747565002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19822fbc87ba77%3A0xc43e8674c6ef0301!2sJagatsinghpur%2C%20Odisha!5e0!3m2!1sen!2sin!4v1737224127867!5m2!1sen!2sin"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

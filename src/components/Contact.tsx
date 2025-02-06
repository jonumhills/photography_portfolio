import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm(
        "service_uubx6lh", // Replace with your EmailJS Service ID
        "template_f3o70oc", // Replace with your EmailJS Template ID
        form.current,
        "MTXXu1U5V6wUTIg_1" // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setIsSent(true);
          setError("");
          form.current?.reset();
        },
        (error) => {
          setIsSent(false);
          setError("Failed to send message. Please try again later.");
          console.log("Error:", JSON.stringify(error, null, 2));
          console.error("EmailJS Error:", error);
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Contact Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-indigo-600 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                <p className="text-gray-600">manojsrinivasa98@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-indigo-600 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
                <p className="text-gray-600">+1 (703) 4158749</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-indigo-600 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Location
                </h3>
                <p className="text-gray-600">
                  2111 Richmond Highway Arlington
                  <br />
                  Virginia, VA 22202
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium">Name</label>
                <input
                  type="text"
                  name="user_name"
                  required
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium">Email</label>
                <input
                  type="email"
                  name="user_email"
                  required
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white p-2 rounded-lg hover:bg-indigo-700 transition"
              >
                Send Message
              </button>

              {isSent && (
                <p className="text-green-600 mt-2">
                  Message sent successfully!
                </p>
              )}
              {error && <p className="text-red-600 mt-2">{error}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

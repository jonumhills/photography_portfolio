import React, { useState } from "react";
import emailjs from "emailjs-com";

const TestEmail: React.FC = () => {
  const [fromName, setFromName] = useState("");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<string | null>(null);

  const serviceId = "service_j4hmfxe";
  const templateId = "template_f3o70oc";
  const userId = "MTXXu1U5V6wUTIg_1";

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      from_name: fromName,
      user_name: userName,
      user_email: userEmail,
      message,
    };

    emailjs.send(serviceId, templateId, templateParams, userId).then(
      (response) => {
        console.log("Message sent successfully", response);
        setStatus("Message sent successfully !");
      },
      (error) => {
        console.error("Error sending message", error);
        setStatus("Error sending message.");
      }
    );
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
        Send a Test Email
      </h2>
      <form onSubmit={sendEmail} className="space-y-4">
        <div>
          <label htmlFor="from_name" className="block text-gray-600">
            Your Name:
          </label>
          <input
            type="text"
            id="from_name"
            value={fromName}
            onChange={(e) => setFromName(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="user_name" className="block text-gray-600">
            Recipient's Name:
          </label>
          <input
            type="text"
            id="user_name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="user_email" className="block text-gray-600">
            Recipient's Email:
          </label>
          <input
            type="email"
            id="user_email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-gray-600">
            Message:
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full p-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Send Message
        </button>
      </form>
      {status && <p className="text-center text-gray-600 mt-4">{status}</p>}
    </div>
  );
};

export default TestEmail;

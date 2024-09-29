import React from "react";
import background from "../../../public/bg-contact-us.jpg";

export default function Contact() {
  return (
    <div
      className="min-h-screen flex flex-col justify-center"
      style={{
        backgroundImage: `url(${background.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <main className="flex-grow">
        <div className="flex items-center h-screen">
          <div className="max-w-2xl mx-auto p-6 bg-black bg-opacity-50 rounded-2xl shadow-md">
            <h1 className="text-3xl font-bold text-center mb-4 text-pageColor">
              Contact Us
            </h1>
            <p className="text-white mb-6 text-base font-light">
              We’re here to help! If you have any questions, feedback, or need
              assistance, feel free to reach out. You can contact us through the
              following methods:
            </p>
            <ul className="list-disc list-inside mb-6 text-white ">
              <li className="mb-2">
                Email:{" "}
                <span className="font-semibold">support@digitaldepot.com</span>
              </li>
              <li className="mb-2">
                Phone: <span className="font-semibold">123 456-7890</span>
              </li>
              <li>
                Address:{" "}
                <span className="font-semibold">
                  123 Tech Lane, Silicon Valley, CA
                </span>
              </li>
            </ul>
            <p className="text-white text-base font-light">
              We look forward to hearing from you and will get back to you as
              soon as possible.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

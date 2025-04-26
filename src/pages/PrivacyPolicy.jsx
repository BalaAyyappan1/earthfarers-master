import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <div className="w-full px-6 py-12 mt-[100px] mb-[100px] ">
        <div className="max-w-7xl mx-auto">
          {/* Page Title */}
          <h1 className="text-4xl font-bold text-center mb-8 bluet">
            Earth Farers EXIM Privacy Policy
          </h1>

          {/* Privacy Policy Content */}
          <div className="space-y-8 text-gray-700 text-lg leading-relaxed">
            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 bluet">
                1. Scope of this Policy
              </h2>
              <p>
                This Privacy Policy outlines how Earth Farers EXIM collects,
                uses, and protects your personal information. By interacting
                with us, you agree to the terms of this Policy. Earth Farers
                EXIM is committed to safeguarding your privacy, whether you’re
                visiting our website, subscribing to our newsletter, or engaging
                with our services.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 bluet">
                2. Contacting Us
              </h2>
              <p>
                If you have specific questions regarding this Privacy Policy or
                how your personal data is used, please contact our Privacy
                Office at{" "}
                <a
                  href="mailto:privacy@earthfarers.com"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  info@eathfarersexim.com
                </a>
                .
              </p>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 bluet">
                3. Collection of Information
              </h2>
              <p>
                We collect personal information to enhance your experience and
                provide our services effectively. This may include:
              </p>
              <ul className="list-disc ml-8 space-y-2">
                <li>
                  <strong>Personal Information:</strong> Name, email, company
                  details, job title, and contact information.
                </li>
                <li>
                  <strong>User Contributions:</strong> Information you share on
                  our platform, such as articles, comments, and other content.
                </li>
                <li>
                  <strong>Non-Personal Information:</strong> Website navigation
                  data, IP addresses, and other analytics.
                </li>
                <li>
                  <strong>Correspondence Information:</strong> Emails or
                  messages you send to us.
                </li>
                <li>
                  <strong>Payment Information:</strong> We collect only
                  essential information for transaction purposes.
                </li>
              </ul>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 bluet">
                4. Use of Information
              </h2>
              <p>We use your information to:</p>
              <ul className="list-disc ml-8 space-y-2">
                <li>Provide and personalize our services.</li>
                <li>
                  Communicate with you about your account, updates, and
                  promotional offers.
                </li>
                <li>Improve our website and user experience.</li>
                <li>Protect against fraud and unauthorized activities.</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 bluet">
                5. Protection of Information
              </h2>
              <p>
                Earth Farers EXIM employs robust security measures to protect
                your personal data. We ensure confidentiality through strict
                internal policies and advanced encryption technologies. However,
                no method of transmission over the internet is 100% secure.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 bluet">
                6. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy periodically. Any changes will
                be communicated via our website or directly to you.
              </p>
            </section>
          </div>

          {/* Footer */}
          <div className="mt-12 text-center text-gray-600">
            <p>
              &copy; {new Date().getFullYear()} Earth Farers EXIM. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;

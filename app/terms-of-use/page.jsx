import Header from "@/components/header";
import Link from "next/link";

export default async function TermsofUsePage() {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <Header />
        <div className="grid-background"></div>
        <div className="max-w-3xl mx-auto px-4 py-12 space-y-6 mt-5">
          <h1 className="text-3xl font-bold mb-4">Terms of Use</h1>
          <p className="mb-4 text-sm text-gray-500">
            Last updated: {new Date().toLocaleDateString("en-GB")}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">1. Acceptance of Terms</h2>
            <p>
              By accessing or using AspireAI (“we”, “our”, or “the Platform”), you agree to be
              bound by these Terms of Use and our Privacy Policy. If you do not agree with these
              terms, you must not use the Platform.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">2. Description of Service</h2>
            <p>
              AspireAI is a career development platform offering resume building, cover letter
              generation, interview preparation, assessments, and performance tracking services
              driven by AI technologies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">3. User Eligibility</h2>
            <p>
              You must be at least 13 years old to use our services. By using this platform, you
              represent that you have the legal authority to enter into this agreement and comply
              with its terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">4. Account Registration & Security</h2>
            <p>
              You are responsible for maintaining the confidentiality of your account and password.
              You agree to notify us immediately of any unauthorized access or use of your account.
              We reserve the right to terminate accounts that violate these terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">5. Acceptable Use</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Do not misuse the platform for illegal activities.</li>
              <li>Do not attempt to reverse-engineer or interfere with our systems.</li>
              <li>Do not impersonate other individuals or misrepresent information.</li>
              <li>Respect community standards and professional conduct.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">6. Intellectual Property Rights</h2>
            <p>
              All content on the Platform, including text, graphics, software, and logos, is the
              property of AspireAI or its licensors. You may not copy, modify, distribute, or use
              any content without explicit permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">7. AI-Generated Content</h2>
            <p>
              AspireAI uses AI to generate resumes, cover letters, interview questions, and
              recommendations. While these are designed to support users, we do not guarantee job
              placement or outcomes. Users should review all generated content before use.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">8. Subscription and Payments</h2>
            <p>
              Some features may require a subscription. By subscribing, you authorize us to charge
              your payment method periodically. You may cancel subscriptions through your account
              settings at any time.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">9. Termination</h2>
            <p>
              We reserve the right to suspend or terminate access to our platform without notice if
              we believe you have violated these Terms. Upon termination, your right to use the
              service will cease immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">10. Limitation of Liability</h2>
            <p>
              AspireAI shall not be liable for any direct, indirect, incidental, or consequential
              damages arising out of the use or inability to use the platform. Our services are
              provided “as-is” and “as available”.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">11. Changes to Terms</h2>
            <p>
              We may modify these Terms at any time. Continued use of the Platform after changes
              implies acceptance of the updated Terms. It is your responsibility to review these
              Terms periodically.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">12. Contact Us</h2>
            <p>
              If you have any questions or concerns about these Terms, please contact us at{" "}
              <a href="mailto:contact@webforgeplus.in" className="text-blue-600 underline">
                contact@webforgeplus.in
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </>
  );
}

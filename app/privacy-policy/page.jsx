import Header from "@/components/header";

export default async function PrivacyPolicyPage() {
  return (
    <>
      <div className="container mx-auto py-6">
        <Header />
        <div className="grid-background"></div>
        <div className="max-w-3xl mx-auto px-4 py-12 space-y-6 mt-5">
          <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
          <p className="mb-4">
            At <strong>AspireAI</strong>, we are committed to protecting your
            personal data and respecting your privacy. This Privacy Policy
            outlines how we collect, use, and safeguard your information when
            you use our platform.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">
            1. Information We Collect
          </h2>
          <ul className="list-disc list-inside mb-4 space-y-1">
            <li>
              <strong>Personal Information:</strong> Your name, email address,
              and profile data when you sign up via Clerk.
            </li>
            <li>
              <strong>Generated Content:</strong> Resumes, cover letters, and
              test responses you create on the platform.
            </li>
            <li>
              <strong>Payment Details:</strong> Transactions handled securely
              via Razorpay; we do not store card info.
            </li>
            <li>
              <strong>Usage Data:</strong> Pages visited, time spent, and
              interaction patterns (collected anonymously).
            </li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-2">
            2. How We Use Your Information
          </h2>
          <ul className="list-disc list-inside mb-4 space-y-1">
            <li>
              To generate AI-powered resumes and cover letters personalized to
              your career goals.
            </li>
            <li>
              To provide mock tests and analytics tailored to your chosen domain
              or skill level.
            </li>
            <li>
              To improve product experience, conduct research, and enhance
              platform security.
            </li>
            <li>
              To process payments and provide customer support where necessary.
            </li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-2">
            3. Sharing with Third Parties
          </h2>
          <p className="mb-4">
            We do not sell your data. We only share information with trusted
            partners:
          </p>
          <ul className="list-disc list-inside mb-4 space-y-1">
            <li>
              <strong>Gemini API:</strong> To generate AI content like resumes
              and cover letters.
            </li>
            <li>
              <strong>Razorpay:</strong> For secure payment processing.
            </li>
            <li>
              <strong>Clerk:</strong> For user authentication and account
              management.
            </li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-2">
            4. Cookies & Tracking
          </h2>
          <p className="mb-4">
            We use cookies to remember your preferences, improve loading speeds,
            and analyze usage patterns. You can disable cookies in your browser
            settings if preferred.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">5. Your Rights</h2>
          <ul className="list-disc list-inside mb-4 space-y-1">
            <li>Access, update, or delete your personal data at any time.</li>
            <li>
              Opt out of marketing emails or communication (though we rarely
              send them).
            </li>
            <li>
              Request data portability or restrict processing under applicable
              laws.
            </li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-2">6. Data Security</h2>
          <p className="mb-4">
            We use modern security measures (HTTPS, encrypted storage, access
            control) to protect your information. While no system is 100%
            secure, we take industry-standard precautions to safeguard your
            data.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">
            7. Changes to This Policy
          </h2>
          <p className="mb-4">
            This Privacy Policy may be updated periodically. Any changes will be
            posted on this page with the effective date.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">8. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about this policy or how your data is
            used, please contact us at{" "}
            <a
              href="mailto:contact@webforgeplus.in"
              className="text-blue-600 underline"
            >
              contact@webforgeplus.in
            </a>
            .
          </p>

          <p className="text-sm text-gray-500">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </>
  );
}

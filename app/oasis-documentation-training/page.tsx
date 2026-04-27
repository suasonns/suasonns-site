export const metadata = {
  title: "OASIS Documentation Training | Suason Nursing Services LLC",
  description:
    "OASIS accuracy and integrity training for Home Health clinicians. Improve compliance, reduce denials, and pass audits.",
};

export default function OASISTrainingPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">
        OASIS Documentation Training
      </h1>

      <p className="mb-4 text-lg text-slate-600">
        Ensure OASIS accuracy and integrity with targeted training for Home
        Health clinicians. Reduce denials, pass audits, and improve compliance.
      </p>

      <ul className="mb-6 list-disc pl-6 text-slate-700">
        <li>OASIS item-by-item training</li>
        <li>Medical necessity & skilled need documentation</li>
        <li>QAPI and audit readiness</li>
        <li>Common survey tags and deficiencies</li>
      </ul>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Who this service is for</h2>
        <ul className="list-disc pl-6">
          <li>Home Health Clinicians</li>
          <li>QA / Compliance Nurses</li>
          <li>Clinical Managers</li>
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Problems we solve</h2>
        <ul className="list-disc pl-6">
          <li>OASIS errors and inconsistencies</li>
          <li>Documentation not supporting medical necessity</li>
          <li>Survey and audit failures</li>
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">
          Related Services & Articles
        </h2>
        <ul className="list-disc pl-6">
          <li>
            <a href="/common-home-health-survey-deficiencies" className="text-blue-900 underline">
              Common Home Health Survey Deficiencies
            </a>
          </li>
          <li>
            <a href="/home-health-hospice-compliance-consulting" className="text-blue-900 underline">
              Home Health & Hospice Compliance Consulting
            </a>
          </li>
        </ul>
      </div>

      <p className="text-slate-500 text-sm">
        Serving Home Health agencies in California and nationwide.
      </p>
    </section>
  );
}
``
export const metadata = {
  title:
    "Home Health & Hospice Compliance Consulting | Suason Nursing Services LLC",
  description:
    "Comprehensive compliance consulting for Home Health and Hospice agencies. Survey, audit, and documentation support.",
};

export default function ComplianceConsultingPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">
        Home Health & Hospice Compliance Consulting
      </h1>

      <p className="mb-4 text-lg text-slate-600">
        Comprehensive compliance support for Home Health and Hospice agencies.
        We help you pass surveys, respond to audits, and improve documentation
        and QAPI.
      </p>

      <ul className="mb-6 list-disc pl-6 text-slate-700">
        <li>Survey preparation & mock surveys</li>
        <li>ADR & TPE audit support</li>
        <li>OASIS and documentation training</li>
        <li>QAPI and Plan of Correction (POC) guidance</li>
      </ul>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Who this service is for</h2>
        <ul className="list-disc pl-6">
          <li>Home Health Administrators</li>
          <li>Hospice Administrators</li>
          <li>Directors of Nursing (DONs)</li>
          <li>QA / Compliance Nurses</li>
          <li>Clinical Managers</li>
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Problems we solve</h2>
        <ul className="list-disc pl-6">
          <li>Compliance uncertainty</li>
          <li>Frequent survey or audit findings</li>
          <li>Staff unfamiliar with CMS requirements</li>
          <li>Documentation not supporting medical necessity</li>
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">
          Related Services & Articles
        </h2>
        <ul className="list-disc pl-6">
          <li>
            <a
              href="/oasis-documentation-training"
              className="text-blue-900 underline"
            >
              OASIS Documentation Training
            </a>
          </li>
          <li>
            <a
              href="/hospice-survey-preparation"
              className="text-blue-900 underline"
            >
              Hospice Survey Preparation
            </a>
          </li>
        </ul>
      </div>

      <p className="text-slate-500 text-sm">
        Serving agencies in California and nationwide.
      </p>
    </section>
  );
}
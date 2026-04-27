export const metadata = {
  title: "ADR & TPE Audit Support | Suason Nursing Services LLC",
  description:
    "Expert support for ADR and TPE audits. Reduce denials, respond to CMS, and protect your Home Health or Hospice agency.",
};

export default function ADRTPESupportPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          ADR & TPE Audit Support
        </h1>

        <p className="mb-4 text-lg text-slate-600">
          Respond to CMS ADRs and TPE audits with confidence. We help you reduce
          denials, appeal Medicare decisions, and protect your agency’s revenue.
        </p>

        <ul className="mb-6 list-disc pl-6 text-slate-700">
          <li>ADR and TPE response preparation</li>
          <li>Medical necessity and skilled need documentation</li>
          <li>Appeal support for Medicare denials</li>
          <li>QAPI and compliance review</li>
        </ul>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Who this service is for</h2>
          <ul className="list-disc pl-6">
            <li>Home Health Administrators</li>
            <li>Hospice Administrators</li>
            <li>QA / Compliance Nurses</li>
            <li>Clinical Managers</li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Problems we solve</h2>
          <ul className="list-disc pl-6">
            <li>Uncertainty responding to ADRs or TPEs</li>
            <li>Frequent denials or payment delays</li>
            <li>Documentation not supporting medical necessity</li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">
            Related Services & Articles
          </h2>
          <ul className="list-disc pl-6">
            <li>
              <a href="/adr-tpe-audits-what-to-know" className="text-blue-900 underline">
                ADR and TPE Audits: What to Know
              </a>
            </li>
            <li>
              <a href="/home-health-survey-preparation" className="text-blue-900 underline">
                Home Health Survey Preparation
              </a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
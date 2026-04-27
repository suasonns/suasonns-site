export const metadata = {
  title: "Hospice Survey Preparation | Suason Nursing Services LLC",
  description:
    "Expert hospice survey readiness for ACHC, CHAP, and Joint Commission. Pass surveys, avoid deficiencies, and protect your hospice agency.",
};

export default function HospiceSurveyPreparationPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">
        Hospice Survey Preparation
      </h1>

      <p className="mb-4 text-lg text-slate-600">
        Prepare for ACHC, CHAP, and Joint Commission hospice surveys with expert
        guidance. We help you pass surveys, avoid deficiencies, and protect your
        agency’s revenue.
      </p>

      <ul className="mb-6 list-disc pl-6 text-slate-700">
        <li>Mock surveys & gap analysis</li>
        <li>Plan of Correction (POC) development</li>
        <li>Survey tag review & documentation improvement</li>
        <li>Staff training on Conditions of Participation (CoPs)</li>
      </ul>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Who this service is for</h2>
        <ul className="list-disc pl-6">
          <li>Hospice Administrators</li>
          <li>Directors of Nursing (DONs)</li>
          <li>QA / Compliance Nurses</li>
          <li>Clinical Managers</li>
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Problems we solve</h2>
        <ul className="list-disc pl-6">
          <li>Survey readiness uncertainty</li>
          <li>Frequent deficiencies or repeat findings</li>
          <li>Staff unfamiliar with survey process</li>
          <li>Documentation not meeting surveyor expectations</li>
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">
          Related Services & Articles
        </h2>
        <ul className="list-disc pl-6">
          <li>
            <a href="/adr-tpe-support" className="text-blue-900 underline">
              ADR & TPE Audit Support
            </a>
          </li>
          <li>
            <a
              href="/home-health-hospice-compliance-consulting"
              className="text-blue-900 underline"
            >
              Home Health & Hospice Compliance Consulting
            </a>
          </li>
        </ul>
      </div>

      <p className="text-slate-500 text-sm">
        Serving hospice agencies in California and nationwide.
      </p>
    </section>
  );
}
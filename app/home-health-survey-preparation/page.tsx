export const metadata = {
  title: "Home Health Survey Preparation | Suason Nursing Services LLC",
  description:
    "Expert ACHC, CHAP, and Joint Commission survey preparation for Home Health agencies. Pass surveys, avoid deficiencies, and protect your revenue.",
};

export default function HomeHealthSurveyPreparationPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">
        Home Health Survey Preparation
      </h1>

      <p className="mb-4 text-lg text-slate-600">
        Prepare for ACHC, CHAP, and Joint Commission surveys with expert guidance.
        We help you pass surveys, avoid deficiencies, and protect your revenue.
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
          <li>Home Health Administrators</li>
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
              href="/how-to-prepare-for-home-health-survey"
              className="text-blue-900 underline"
            >
              How to Prepare for a Home Health Survey
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
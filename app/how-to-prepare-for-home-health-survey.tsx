export const metadata = {
  title:
    "How to Prepare for a Home Health Survey | Suason Nursing Services LLC",
  description:
    "Step-by-step guide to preparing for ACHC, CHAP, and Joint Commission Home Health surveys. Avoid deficiencies and pass with confidence.",
};

export default function ArticlePage() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">
        How to Prepare for a Home Health Survey (ACHC, CHAP, Joint Commission)
      </h1>

      <p className="mb-4 text-lg text-slate-600">
        Preparing for a Home Health survey can be daunting. Here’s how to ensure
        your agency is ready for ACHC, CHAP, or Joint Commission surveyors.
      </p>

      <ol className="list-decimal pl-6 mb-6 text-slate-700">
        <li>Review the latest CMS Conditions of Participation (CoPs).</li>
        <li>Conduct a mock survey and gap analysis.</li>
        <li>Address all condition-level and standard-level deficiencies.</li>
        <li>Prepare a Plan of Correction (POC) for identified issues.</li>
        <li>Train staff on survey tags, documentation, and compliance.</li>
        <li>Verify OASIS accuracy and QAPI processes.</li>
      </ol>

      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">
          Related Services & Articles
        </h2>
        <ul className="list-disc pl-6">
          <li>
            <a href="/home-health-survey-preparation" className="text-blue-900 underline">
              Home Health Survey Preparation
            </a>
          </li>
          <li>
            <a href="/adr-tpe-support" className="text-blue-900 underline">
              ADR & TPE Audit Support
            </a>
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <a
          href="/contact"
          className="inline-block bg-blue-900 text-white px-6 py-3 rounded shadow hover:bg-blue-800 font-semibold transition"
        >
          Schedule a Free Consultation
        </a>
      </div>
    </article>
  );
}
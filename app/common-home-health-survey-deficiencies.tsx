export const metadata = {
  title:
    "Common Home Health Survey Deficiencies | Suason Nursing Services LLC",
  description:
    "Learn the most common Home Health survey deficiencies and how to avoid them. Improve compliance and pass your next survey.",
};

export default function ArticlePage() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">
        Common Home Health Survey Deficiencies and How to Avoid Them
      </h1>

      <p className="mb-4 text-lg text-slate-600">
        Surveyors frequently cite agencies for the same issues. Here are the most
        common deficiencies and how to address them.
      </p>

      <ul className="list-disc pl-6 mb-6 text-slate-700">
        <li>Incomplete or inaccurate OASIS documentation</li>
        <li>Lack of medical necessity or skilled need</li>
        <li>Failure to implement or document QAPI</li>
        <li>Missing or inadequate Plan of Correction (POC)</li>
        <li>Unaddressed survey tags and repeat findings</li>
      </ul>

      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">
          Related Services & Articles
        </h2>
        <ul className="list-disc pl-6">
          <li>
            <a href="/oasis-documentation-training" className="text-blue-900 underline">
              OASIS Documentation Training
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
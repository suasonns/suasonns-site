export const metadata = {
  title:
    "ADR and TPE Audits: What Home Health Agencies Need to Know | Suason Nursing Services LLC",
  description:
    "Understand ADR and TPE audits for Home Health agencies. Learn how to respond, reduce denials, and protect your revenue.",
};

export default function ArticlePage() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">
        ADR and TPE Audits: What Home Health Agencies Need to Know
      </h1>

      <p className="mb-4 text-lg text-slate-600">
        ADR (Additional Documentation Request) and TPE (Targeted Probe and Educate)
        audits are common for Home Health agencies. Here’s what you need to know
        to respond and reduce denials.
      </p>

      <ul className="list-disc pl-6 mb-6 text-slate-700">
        <li>Understand the ADR and TPE process</li>
        <li>Gather and review all requested documentation</li>
        <li>Ensure medical necessity and skilled need are clearly documented</li>
        <li>Prepare for appeals and follow QAPI best practices</li>
      </ul>

      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">
          Related Services & Articles
        </h2>
        <ul className="list-disc pl-6">
          <li>
            <a
              href="/adr-tpe-support"
              className="text-blue-900 underline"
            >
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
``
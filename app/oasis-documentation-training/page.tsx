        <div className="mb-6 animate-fade-in-up delay-350">
          <h2 className="text-lg font-semibold mb-2">Related Services & Articles</h2>
          <ul className="list-disc pl-6">
            <li><a href="/common-home-health-survey-deficiencies" className="text-blue-900 underline">Common Home Health Survey Deficiencies</a></li>
            <li><a href="/home-health-hospice-compliance-consulting" className="text-blue-900 underline">Home Health & Hospice Compliance Consulting</a></li>
          </ul>
        </div>
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

export const metadata = {
  title: "OASIS Documentation Training | Suason Nursing Services LLC",
  description: "OASIS accuracy and integrity training for Home Health clinicians. Improve compliance, reduce denials, and pass audits.",
};

export default function OASISTrainingPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="border-b sticky top-0 bg-white/95 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3 animate-fade-in-up">
            <img src="/sns-logo.svg" alt="SNS Logo" className="h-12 w-auto" />
            <span className="font-semibold text-lg">Suason Nursing Services LLC</span>
          </div>
          <NavBar />
        </div>
      </header>
      <section className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up">OASIS Documentation Training</h1>
        <p className="mb-4 text-lg text-slate-600 animate-fade-in-up delay-100">
          Ensure OASIS accuracy and integrity with targeted training for Home Health clinicians. Reduce denials, pass audits, and improve compliance.
        </p>
        <ul className="mb-6 list-disc pl-6 text-slate-700 animate-fade-in-up delay-200">
          <li>OASIS item-by-item training</li>
          <li>Medical necessity & skilled need documentation</li>
          <li>QAPI and audit readiness</li>
          <li>Common survey tags and deficiencies</li>
        </ul>
        <div className="mb-6 animate-fade-in-up delay-300">
          <h2 className="text-xl font-semibold mb-2">Who this service is for</h2>
          <ul className="list-disc pl-6">
            <li>Home Health Clinicians</li>
            <li>QA / Compliance Nurses</li>
            <li>Clinical Managers</li>
          </ul>
        </div>
        <div className="mb-6 animate-fade-in-up delay-400">
          <h2 className="text-xl font-semibold mb-2">Problems we solve</h2>
          <ul className="list-disc pl-6">
            <li>OASIS errors and inconsistencies</li>
            <li>Documentation not supporting medical necessity</li>
            <li>Survey and audit failures</li>
          </ul>
        </div>
        <div className="mb-8 animate-fade-in-up delay-500">
          <a href="/contact" className="inline-block bg-blue-900 text-white px-6 py-3 rounded shadow hover:bg-blue-800 font-semibold transition">Schedule a Free Consultation</a>
        </div>
        <div className="mb-8 animate-fade-in-up delay-600">
          <h2 className="text-lg font-semibold mb-2">FAQ</h2>
          <div className="mb-2">
            <strong>What documentation is most frequently cited during surveys?</strong>
            <p className="text-slate-600">OASIS errors, lack of medical necessity, and incomplete skilled need documentation are common survey findings. Our training addresses these issues.</p>
          </div>
          <div className="mb-2">
            <strong>How can agencies reduce Medicare denials?</strong>
            <p className="text-slate-600">By improving OASIS accuracy, supporting medical necessity, and ensuring documentation meets CMS standards.</p>
          </div>
        </div>
        <div className="text-slate-500 text-sm animate-fade-in-up delay-700">
          <p>Serving Home Health agencies in California and nationwide.</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}

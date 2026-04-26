        <div className="mb-6 animate-fade-in-up delay-350">
          <h2 className="text-lg font-semibold mb-2">Related Services & Articles</h2>
          <ul className="list-disc pl-6">
            <li><a href="/oasis-documentation-training" className="text-blue-900 underline">OASIS Documentation Training</a></li>
            <li><a href="/hospice-survey-preparation" className="text-blue-900 underline">Hospice Survey Preparation</a></li>
          </ul>
        </div>
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Home Health & Hospice Compliance Consulting | Suason Nursing Services LLC",
  description: "Comprehensive compliance consulting for Home Health and Hospice agencies. Survey, audit, and documentation support.",
};

export default function ComplianceConsultingPage() {
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
        <h1 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up">Home Health & Hospice Compliance Consulting</h1>
        <p className="mb-4 text-lg text-slate-600 animate-fade-in-up delay-100">
          Comprehensive compliance support for Home Health and Hospice agencies. We help you pass surveys, respond to audits, and improve documentation and QAPI.
        </p>
        <ul className="mb-6 list-disc pl-6 text-slate-700 animate-fade-in-up delay-200">
          <li>Survey preparation & mock surveys</li>
          <li>ADR & TPE audit support</li>
          <li>OASIS and documentation training</li>
          <li>QAPI and Plan of Correction (POC) guidance</li>
        </ul>
        <div className="mb-6 animate-fade-in-up delay-300">
          <h2 className="text-xl font-semibold mb-2">Who this service is for</h2>
          <ul className="list-disc pl-6">
            <li>Home Health Administrators</li>
            <li>Hospice Administrators</li>
            <li>Directors of Nursing (DONs)</li>
            <li>QA / Compliance Nurses</li>
            <li>Clinical Managers</li>
          </ul>
        </div>
        <div className="mb-6 animate-fade-in-up delay-400">
          <h2 className="text-xl font-semibold mb-2">Problems we solve</h2>
          <ul className="list-disc pl-6">
            <li>Compliance uncertainty</li>
            <li>Frequent survey or audit findings</li>
            <li>Staff unfamiliar with CMS requirements</li>
            <li>Documentation not supporting medical necessity</li>
          </ul>
        </div>
        <div className="mb-8 animate-fade-in-up delay-500">
          <a href="/contact" className="inline-block bg-blue-900 text-white px-6 py-3 rounded shadow hover:bg-blue-800 font-semibold transition">Schedule a Free Consultation</a>
        </div>
        <div className="mb-8 animate-fade-in-up delay-600">
          <h2 className="text-lg font-semibold mb-2">FAQ</h2>
          <div className="mb-2">
            <strong>How do we stay compliant with CMS Conditions of Participation?</strong>
            <p className="text-slate-600">We provide ongoing support, training, and documentation review to ensure you meet all CMS and surveyor requirements.</p>
          </div>
          <div className="mb-2">
            <strong>What is QAPI and why is it important?</strong>
            <p className="text-slate-600">QAPI (Quality Assessment and Performance Improvement) is a CMS requirement for continuous quality improvement. We help you implement and maintain QAPI programs.</p>
          </div>
        </div>
        <div className="text-slate-500 text-sm animate-fade-in-up delay-700">
          <p>Serving agencies in California and nationwide.</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}

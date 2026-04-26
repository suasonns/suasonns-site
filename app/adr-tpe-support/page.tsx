        <div className="mb-6 animate-fade-in-up delay-350">
          <h2 className="text-lg font-semibold mb-2">Related Services & Articles</h2>
          <ul className="list-disc pl-6">
            <li><a href="/adr-tpe-audits-what-to-know" className="text-blue-900 underline">ADR and TPE Audits: What to Know</a></li>
            <li><a href="/home-health-survey-preparation" className="text-blue-900 underline">Home Health Survey Preparation</a></li>
          </ul>
        </div>
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

export const metadata = {
  title: "ADR & TPE Audit Support | Suason Nursing Services LLC",
  description: "Expert support for ADR and TPE audits. Reduce denials, respond to CMS, and protect your Home Health or Hospice agency.",
};

export default function ADRTPESupportPage() {
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
        <h1 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up">ADR & TPE Audit Support</h1>
        <p className="mb-4 text-lg text-slate-600 animate-fade-in-up delay-100">
          Respond to CMS ADRs and TPE audits with confidence. We help you reduce denials, appeal Medicare decisions, and protect your agency’s revenue.
        </p>
        <ul className="mb-6 list-disc pl-6 text-slate-700 animate-fade-in-up delay-200">
          <li>ADR and TPE response preparation</li>
          <li>Medical necessity and skilled need documentation</li>
          <li>Appeal support for Medicare denials</li>
          <li>QAPI and compliance review</li>
        </ul>
        <div className="mb-6 animate-fade-in-up delay-300">
          <h2 className="text-xl font-semibold mb-2">Who this service is for</h2>
          <ul className="list-disc pl-6">
            <li>Home Health Administrators</li>
            <li>Hospice Administrators</li>
            <li>QA / Compliance Nurses</li>
            <li>Clinical Managers</li>
          </ul>
        </div>
        <div className="mb-6 animate-fade-in-up delay-400">
          <h2 className="text-xl font-semibold mb-2">Problems we solve</h2>
          <ul className="list-disc pl-6">
            <li>Uncertainty responding to ADRs or TPEs</li>
            <li>Frequent denials or payment delays</li>
            <li>Documentation not supporting medical necessity</li>
          </ul>
        </div>
        <div className="mb-8 animate-fade-in-up delay-500">
          <a href="/contact" className="inline-block bg-blue-900 text-white px-6 py-3 rounded shadow hover:bg-blue-800 font-semibold transition">Schedule a Free Consultation</a>
        </div>
        <div className="mb-8 animate-fade-in-up delay-600">
          <h2 className="text-lg font-semibold mb-2">FAQ</h2>
          <div className="mb-2">
            <strong>What is ADR and TPE in home health?</strong>
            <p className="text-slate-600">ADR (Additional Documentation Request) and TPE (Targeted Probe and Educate) are CMS audit processes. We help you respond effectively and reduce denials.</p>
          </div>
          <div className="mb-2">
            <strong>How can agencies reduce Medicare denials?</strong>
            <p className="text-slate-600">By improving documentation, supporting medical necessity, and following QAPI best practices.</p>
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

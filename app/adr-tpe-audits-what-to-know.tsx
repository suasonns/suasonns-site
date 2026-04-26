        <div className="mb-6 animate-fade-in-up delay-350">
          <h2 className="text-lg font-semibold mb-2">Related Services & Articles</h2>
          <ul className="list-disc pl-6">
            <li><a href="/adr-tpe-support" className="text-blue-900 underline">ADR & TPE Audit Support</a></li>
            <li><a href="/home-health-survey-preparation" className="text-blue-900 underline">Home Health Survey Preparation</a></li>
          </ul>
        </div>
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export const metadata = {
  title: "ADR and TPE Audits: What Home Health Agencies Need to Know | Suason Nursing Services LLC",
  description: "Understand ADR and TPE audits for Home Health agencies. Learn how to respond, reduce denials, and protect your revenue.",
};

export default function ArticlePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="border-b sticky top-0 bg-white/95 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3 animate-fade-in-up">
            <img src="/sns-logo-fixed.svg" alt="SNS Logo" className="h-12 w-auto" />
            <span className="font-semibold text-lg">Suason Nursing Services LLC</span>
          </div>
          <NavBar />
        </div>
      </header>
      <article className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up">ADR and TPE Audits: What Home Health Agencies Need to Know</h1>
        <p className="mb-4 text-lg text-slate-600 animate-fade-in-up delay-100">
          ADR (Additional Documentation Request) and TPE (Targeted Probe and Educate) audits are common for Home Health agencies. Here’s what you need to know to respond and reduce denials.
        </p>
        <ul className="list-disc pl-6 mb-6 text-slate-700 animate-fade-in-up delay-200">
          <li>Understand the ADR and TPE process</li>
          <li>Gather and review all requested documentation</li>
          <li>Ensure medical necessity and skilled need are clearly documented</li>
          <li>Prepare for appeals and follow QAPI best practices</li>
        </ul>
        <div className="mb-6 animate-fade-in-up delay-300">
          <a href="/adr-tpe-support" className="text-blue-900 underline">ADR & TPE Audit Support</a>
        </div>
        <div className="mb-8 animate-fade-in-up delay-400">
          <a href="/contact" className="inline-block bg-blue-900 text-white px-6 py-3 rounded shadow hover:bg-blue-800 font-semibold transition">Schedule a Free Consultation</a>
        </div>
      </article>
      <Footer />
    </main>
  );
}

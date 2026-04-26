        <div className="mb-6 animate-fade-in-up delay-350">
          <h2 className="text-lg font-semibold mb-2">Related Services & Articles</h2>
          <ul className="list-disc pl-6">
            <li><a href="/oasis-documentation-training" className="text-blue-900 underline">OASIS Documentation Training</a></li>
            <li><a href="/home-health-hospice-compliance-consulting" className="text-blue-900 underline">Home Health & Hospice Compliance Consulting</a></li>
          </ul>
        </div>
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Common Home Health Survey Deficiencies | Suason Nursing Services LLC",
  description: "Learn the most common Home Health survey deficiencies and how to avoid them. Improve compliance and pass your next survey.",
};

export default function ArticlePage() {
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
      <article className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up">Common Home Health Survey Deficiencies and How to Avoid Them</h1>
        <p className="mb-4 text-lg text-slate-600 animate-fade-in-up delay-100">
          Surveyors frequently cite agencies for the same issues. Here are the most common deficiencies and how to address them.
        </p>
        <ul className="list-disc pl-6 mb-6 text-slate-700 animate-fade-in-up delay-200">
          <li>Incomplete or inaccurate OASIS documentation</li>
          <li>Lack of medical necessity or skilled need</li>
          <li>Failure to implement or document QAPI</li>
          <li>Missing or inadequate Plan of Correction (POC)</li>
          <li>Unaddressed survey tags and repeat findings</li>
        </ul>
        <div className="mb-6 animate-fade-in-up delay-300">
          <a href="/oasis-documentation-training" className="text-blue-900 underline">OASIS Documentation Training</a>
        </div>
        <div className="mb-8 animate-fade-in-up delay-400">
          <a href="/contact" className="inline-block bg-blue-900 text-white px-6 py-3 rounded shadow hover:bg-blue-800 font-semibold transition">Schedule a Free Consultation</a>
        </div>
      </article>
      <Footer />
    </main>
  );
}

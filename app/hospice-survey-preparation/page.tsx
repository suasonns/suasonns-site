        <div className="mb-6 animate-fade-in-up delay-350">
          <h2 className="text-lg font-semibold mb-2">Related Services & Articles</h2>
          <ul className="list-disc pl-6">
            <li><a href="/adr-tpe-support" className="text-blue-900 underline">ADR & TPE Audit Support</a></li>
            <li><a href="/home-health-hospice-compliance-consulting" className="text-blue-900 underline">Home Health & Hospice Compliance Consulting</a></li>
          </ul>
        </div>
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Hospice Survey Preparation | Suason Nursing Services LLC",
  description: "Expert hospice survey readiness for ACHC, CHAP, and Joint Commission. Pass surveys, avoid deficiencies, and protect your hospice agency.",
};

export default function HospiceSurveyPreparationPage() {
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
        <h1 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up">Hospice Survey Preparation</h1>
        <p className="mb-4 text-lg text-slate-600 animate-fade-in-up delay-100">
          Prepare for ACHC, CHAP, and Joint Commission hospice surveys with expert guidance. We help you pass surveys, avoid deficiencies, and protect your agency’s revenue.
        </p>
        <ul className="mb-6 list-disc pl-6 text-slate-700 animate-fade-in-up delay-200">
          <li>Mock surveys & gap analysis</li>
          <li>Plan of Correction (POC) development</li>
          <li>Survey tag review & documentation improvement</li>
          <li>Staff training on Conditions of Participation (CoPs)</li>
        </ul>
        <div className="mb-6 animate-fade-in-up delay-300">
          <h2 className="text-xl font-semibold mb-2">Who this service is for</h2>
          <ul className="list-disc pl-6">
            <li>Hospice Administrators</li>
            <li>Directors of Nursing (DONs)</li>
            <li>QA / Compliance Nurses</li>
            <li>Clinical Managers</li>
          </ul>
        </div>
        <div className="mb-6 animate-fade-in-up delay-400">
          <h2 className="text-xl font-semibold mb-2">Problems we solve</h2>
          <ul className="list-disc pl-6">
            <li>Survey readiness uncertainty</li>
            <li>Frequent deficiencies or repeat findings</li>
            <li>Staff unfamiliar with survey process</li>
            <li>Documentation not meeting surveyor expectations</li>
          </ul>
        </div>
        <div className="mb-8 animate-fade-in-up delay-500">
          <a href="/contact" className="inline-block bg-blue-900 text-white px-6 py-3 rounded shadow hover:bg-blue-800 font-semibold transition">Schedule a Free Consultation</a>
        </div>
        <div className="mb-8 animate-fade-in-up delay-600">
          <h2 className="text-lg font-semibold mb-2">FAQ</h2>
          <div className="mb-2">
            <strong>What happens if we fail a hospice survey?</strong>
            <p className="text-slate-600">You may receive deficiencies, require a Plan of Correction (POC), or face payment suspension. We help you avoid these outcomes.</p>
          </div>
          <div className="mb-2">
            <strong>How do we prepare for ACHC, CHAP, or Joint Commission hospice surveys?</strong>
            <p className="text-slate-600">We provide mock surveys, documentation review, and staff training based on current CMS Conditions of Participation (CoPs) and surveyor expectations.</p>
          </div>
        </div>
        <div className="text-slate-500 text-sm animate-fade-in-up delay-700">
          <p>Serving hospice agencies in California and nationwide.</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}

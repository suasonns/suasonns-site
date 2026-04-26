import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

export const metadata = {
  title: "About | Suason Nursing Services LLC",
  description: "Learn more about Suason Nursing Services LLC and our mission.",
};

export default function AboutPage() {
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
      <div className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-6 animate-fade-in-up">About Suason Nursing Services</h1>
        <div className="animate-fade-in-up delay-100">
          <p className="mb-4 text-lg text-slate-600">
            Suason Nursing Services LLC was founded by Romel Suason, RN, and Angela Suason, LVN, experienced Home Health and Hospice nurses who recognized the critical need for improved clinical documentation, comprehensive staff training, and ongoing professional support.
          </p>
        </div>
        <div className="animate-fade-in-up delay-200">
          <p className="mb-4 text-lg text-slate-600">
            Through firsthand experience, the founders observed gaps in documentation practices and limited educational resources for nursing staff. Suason Nursing Services was established to address these challenges by supporting nurses in their daily work environment and helping organizations strengthen compliance, operational performance, and overall quality of care in both Home Health and Hospice settings.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}

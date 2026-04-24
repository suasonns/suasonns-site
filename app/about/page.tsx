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
            <img src="/sns-logo.png" alt="SNS Logo" className="h-10 w-auto" />
            <span className="font-semibold text-lg">Suason Nursing Services LLC</span>
          </div>
          <NavBar />
        </div>
      </header>
      <div className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-6 animate-fade-in-up">About Suason Nursing Services</h1>
        <div className="animate-fade-in-up delay-100">
          <p className="mb-4 text-lg text-slate-600">
            Suason Nursing Services LLC provides professional compliance and consulting support to Home Health and Hospice agencies.
          </p>
        </div>
        <div className="animate-fade-in-up delay-200">
          <p className="mb-4 text-lg text-slate-600">
            Services include survey preparation, documentation training, and ADR & TPE audit support tailored to agency needs.
          </p>
        </div>
        <div className="animate-fade-in-up delay-300">
          <p className="text-lg text-slate-600">
            Our mission is to help agencies remain compliant, reduce risk, and deliver high-quality patient care.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}


import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ServiceCard from "../components/ServiceCard";

export const metadata = {
  title: "Home Health & Hospice Compliance Consulting | Survey, ADR & TPE Support",
  description: "Home Health & Hospice compliance consulting. Survey preparation, ADR & TPE audit support, OASIS documentation training. Serving California and nationwide.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="border-b sticky top-0 bg-white/95 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3 animate-fade-in-up">
            <img src="/sns-logo.svg" alt="SNS Logo" className="h-12 w-auto" />
            <span className="font-semibold text-lg">Suason Nursing Services LLC</span>
          </div>
          <NavBar />
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <div className="animate-fade-in-up delay-100">
          <h1 className="text-5xl font-bold mb-6 text-slate-800">Home Health & Hospice Compliance, Survey & Audit Support</h1>
        </div>
        <div className="animate-fade-in-up delay-200">
          <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-10">
            Passing surveys. Reducing denials. Ongoing compliance confidence.<br />
            <span className="font-semibold">Specializing in Home Health & Hospice:</span> Survey preparation, ADR & TPE audit support, OASIS documentation training, and QAPI guidance. Serving California and nationwide.
          </p>
        </div>
        <div className="animate-fade-in-up delay-300">
          <a href="/contact" className="btn-primary">Request Consultation</a>
        </div>
      </section>

      {/* Services */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in-up">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="animate-fade-in-up delay-100">
              <ServiceCard title="Home Health Survey Preparation" text="ACHC, CHAP, and Joint Commission survey readiness. Mock surveys, gap analysis, and Plan of Correction (POC) support." />
              <a href="/home-health-survey-preparation" className="text-blue-900 underline block mt-2">Learn more</a>
            </div>
            <div className="animate-fade-in-up delay-200">
              <ServiceCard title="Hospice Survey Preparation" text="Expert hospice survey readiness, documentation review, and staff training on Conditions of Participation (CoPs)." />
              <a href="/hospice-survey-preparation" className="text-blue-900 underline block mt-2">Learn more</a>
            </div>
            <div className="animate-fade-in-up delay-300">
              <ServiceCard title="OASIS Documentation Training" text="OASIS accuracy, medical necessity, skilled need, and QAPI training for Home Health clinicians." />
              <a href="/oasis-documentation-training" className="text-blue-900 underline block mt-2">Learn more</a>
            </div>
            <div className="animate-fade-in-up delay-400">
              <ServiceCard title="ADR & TPE Audit Support" text="Hands-on support for ADRs, TPEs, and Medicare denials. Appeal preparation and compliance review." />
              <a href="/adr-tpe-support" className="text-blue-900 underline block mt-2">Learn more</a>
            </div>
            <div className="animate-fade-in-up delay-500">
              <ServiceCard title="Home Health & Hospice Compliance Consulting" text="Comprehensive compliance, QAPI, and documentation support for agencies." />
              <a href="/home-health-hospice-compliance-consulting" className="text-blue-900 underline block mt-2">Learn more</a>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-6 animate-fade-in-up">Frequently Asked Questions</h2>
        <div className="space-y-4 animate-fade-in-up delay-100">
          <div>
            <strong>What happens if we fail a home health survey?</strong>
            <p className="text-slate-600">You may receive condition-level or standard-level deficiencies, require a Plan of Correction (POC), or face payment suspension. We help you avoid these outcomes.</p>
          </div>
          <div>
            <strong>How do we prepare for ACHC, CHAP, or Joint Commission surveys?</strong>
            <p className="text-slate-600">We provide mock surveys, documentation review, and staff training based on current CMS Conditions of Participation (CoPs) and surveyor expectations.</p>
          </div>
          <div>
            <strong>What is ADR and TPE in home health?</strong>
            <p className="text-slate-600">ADR (Additional Documentation Request) and TPE (Targeted Probe and Educate) are CMS audit processes. We help you respond effectively and reduce denials.</p>
          </div>
          <div>
            <strong>How can agencies reduce Medicare denials?</strong>
            <p className="text-slate-600">By improving documentation, supporting medical necessity, and following QAPI best practices.</p>
          </div>
          <div>
            <strong>What documentation is most frequently cited during surveys?</strong>
            <p className="text-slate-600">OASIS errors, lack of medical necessity, and incomplete skilled need documentation are common survey findings. Our training addresses these issues.</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-semibold mb-6 text-center animate-fade-in-up">Request a Consultation</h2>
        <form
          action="https://defaultebf992d4d1414e51a1c0a7a3bd7dd3.88.environment.api.powerplatform.com/powerautomate/automations/direct/workflows/fc649135a825400391dade79a9119a3c/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=Q40927k20aWEiAnjLoYORLnOUiuLcP9OQBMVAS30Lyk"
          method="POST"
          className="space-y-4"
          aria-label="Contact form"
        >
          <input
            name="agency"
            className="w-full border p-3 rounded focus:ring-2 focus:ring-slate-400 focus:outline-none transition-smooth"
            placeholder="Agency Name (e.g. Los Angeles, CA)"
            required
            aria-label="Agency Name"
          />
          <input
            name="email"
            type="email"
            className="w-full border p-3 rounded focus:ring-2 focus:ring-slate-400 focus:outline-none transition-smooth"
            placeholder="Email"
            required
            aria-label="Email"
          />
          <textarea
            name="message"
            className="w-full border p-3 rounded focus:ring-2 focus:ring-slate-400 focus:outline-none transition-smooth"
            placeholder="How can we help? (e.g. survey, ADR, TPE, OASIS, QAPI)"
            rows={4}
            required
            aria-label="Message"
          />
          <button
            type="submit"
            className="w-full bg-slate-900 text-white p-3 rounded hover:bg-slate-700 transition-smooth"
          >
            Submit
          </button>
        </form>
        <div className="text-slate-500 text-sm text-center mt-4">Serving California and nationwide.</div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}

function Service({ title }: { title: string }) {
  return (
    <div className="bg-white border rounded-lg p-6 text-center">
      <h4 className="font-semibold text-lg">{title}</h4>
      <p className="text-slate-600 mt-2">
        Professional compliance support tailored to your agency.
      </p>
    </div>
  );
}
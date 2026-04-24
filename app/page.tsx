
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ServiceCard from "../components/ServiceCard";

export const metadata = {
  title: "Home | Suason Nursing Services LLC",
  description: "Compliance and survey support for Home Health and Hospice agencies.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="font-semibold text-lg">Suason Nursing Services LLC</h1>
          <NavBar />
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h2 className="text-5xl font-bold mb-6">Compliance & Survey Support</h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-10">
          We help Home Health and Hospice agencies prepare for surveys, strengthen documentation, and successfully manage ADR & TPE audits.
        </p>
        <button className="bg-slate-900 text-white px-8 py-3 rounded-lg">Request Consultation</button>
      </section>

      {/* Services */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <ServiceCard title="Survey Preparation" text="JCAHO, CHAP, and ACHC survey readiness including mock surveys and gap analysis." />
          <ServiceCard title="Documentation Training" text="OASIS accuracy, defensible clinical documentation, and compliance education." />
          <ServiceCard title="ADR & TPE Support" text="Hands-on audit support to reduce denials and protect agency revenue." />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-xl mx-auto px-6 py-24">
        <h3 className="text-3xl font-semibold mb-6 text-center">Request a Consultation</h3>
        <form
          action="https://defaultebf992d4d1414e51a1c0a7a3bd7dd3.88.environment.api.powerplatform.com/powerautomate/automations/direct/workflows/fc649135a825400391dade79a9119a3c/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=Q40927k20aWEiAnjLoYORLnOUiuLcP9OQBMVAS30Lyk"
          method="POST"
          className="space-y-4"
          aria-label="Contact form"
        >
          <input
            name="agency"
            className="w-full border p-3 rounded"
            placeholder="Agency Name"
            required
            aria-label="Agency Name"
          />
          <input
            name="email"
            type="email"
            className="w-full border p-3 rounded"
            placeholder="Email"
            required
            aria-label="Email"
          />
          <textarea
            name="message"
            className="w-full border p-3 rounded"
            placeholder="How can we help?"
            rows={4}
            required
            aria-label="Message"
          />
          <button
            type="submit"
            className="w-full bg-slate-900 text-white p-3 rounded"
          >
            Submit
          </button>
        </form>
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
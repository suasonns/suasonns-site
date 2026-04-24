import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import ServiceCard from "../../components/ServiceCard";

export const metadata = {
  title: "Services | Suason Nursing Services LLC",
  description: "Explore our compliance, documentation, and audit support services for Home Health and Hospice agencies.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="font-semibold text-lg">Suason Nursing Services LLC</h1>
          <NavBar />
        </div>
      </header>
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-6">Services</h1>
        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard
            title="Survey Preparation"
            text="JCAHO, CHAP, and ACHC survey readiness including mock surveys and gap analysis."
          />
          <ServiceCard
            title="Documentation Training"
            text="OASIS accuracy, defensible clinical documentation, and compliance education."
          />
          <ServiceCard
            title="ADR & TPE Support"
            text="Hands-on audit support to reduce denials and protect agency revenue."
          />
        </div>
      </section>
      <Footer />
    </main>
  );
}

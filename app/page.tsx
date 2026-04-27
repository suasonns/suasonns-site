import ServiceCard from "../components/ServiceCard";

export const metadata = {
  title:
    "Home Health & Hospice Compliance Consulting | Survey, ADR & TPE Support",
  description:
    "Home Health & Hospice compliance consulting. Survey preparation, ADR & TPE audit support, OASIS documentation training. Serving California and nationwide.",
};

export default function Home() {
  return (
    <main className="bg-white text-slate-900">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl font-bold mb-6 text-slate-800">
          Home Health & Hospice Compliance, Survey & Audit Support
        </h1>

        <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-10">
          Passing surveys. Reducing denials. Ongoing compliance confidence.
          <br />
          <span className="font-semibold">
            Specializing in Home Health & Hospice:
          </span>{" "}
          Survey preparation, ADR & TPE audit support, OASIS documentation
          training, and QAPI guidance. Serving California and nationwide.
        </p>

        <a href="/contact" className="btn-primary">
          Request Consultation
        </a>
      </section>

      {/* Services */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Home Health Survey Preparation"
              text="ACHC, CHAP, and Joint Commission survey readiness. Mock surveys, gap analysis, and Plan of Correction (POC) support."
            />
            <ServiceCard
              title="Hospice Survey Preparation"
              text="Expert hospice survey readiness and staff training on Conditions of Participation (CoPs)."
            />
            <ServiceCard
              title="OASIS Documentation Training"
              text="OASIS accuracy, medical necessity, skilled need, and QAPI training."
            />
            <ServiceCard
              title="ADR & TPE Audit Support"
              text="Hands-on support for ADRs, TPEs, and Medicare denials."
            />
            <ServiceCard
              title="Home Health & Hospice Compliance Consulting"
              text="Comprehensive compliance, QAPI, and documentation support."
            />
          </div>
        </div>
      </section>
    </main>
  );
}
``
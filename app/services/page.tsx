export default function ServicesPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-6">Services</h1>

      <div className="grid md:grid-cols-3 gap-8">
        <Service
          title="Survey Preparation"
          text="JCAHO, CHAP, and ACHC survey readiness including mock surveys and gap analysis."
        />
        <Service
          title="Documentation Training"
          text="OASIS accuracy, defensible clinical documentation, and compliance education."
        />
        <Service
          title="ADR & TPE Support"
          text="Hands-on audit support to reduce denials and protect agency revenue."
        />
      </div>
    </main>
  );
}

function Service({ title, text }: { title: string; text: string }) {
  return (
    <div className="border rounded-lg p-6 bg-white">
      <h2 className="font-semibold text-xl mb-2">{title}</h2>
      <p className="text-slate-600">{text}</p>
    </div>
  );
}

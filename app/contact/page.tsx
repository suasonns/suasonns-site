export const metadata = {
  title: "Contact Us | Suason Nursing Services LLC",
  description:
    "Get in touch with Suason Nursing Services for compliance and survey support.",
};

export default function ContactPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>

      <p className="text-lg text-slate-600 mb-8">
        We're here to help your agency with compliance, survey preparation,
        and audit support. Reach out to discuss how we can assist you.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-slate-50 p-6 rounded-lg">
          <h2 className="font-semibold text-xl mb-3">Phone</h2>
          <p className="text-slate-600">714‑749‑8848</p>
        </div>

        <div className="bg-slate-50 p-6 rounded-lg">
          <h2 className="font-semibold text-xl mb-3">Email</h2>
          <a
            href="mailto:info@suasonns.org"
            className="text-slate-600 hover:text-slate-900 underline"
          >
            info@suasonns.org
          </a>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Send us a message</h2>

      <form
        action="https://defaultebf992d4d1414e51a1c0a7a3bd7dd3.88.environment.api.powerplatform.com/powerautomate/automations/direct/workflows/fc649135a825400391dade79a9119a3c/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=Q40927k20aWEiAnjLoYORLnOUiuLcP9OQBMVAS30Lyk"
        method="POST"
        className="space-y-4"
      >
        {/* form fields unchanged */}
      </form>
    </section>
  );
}
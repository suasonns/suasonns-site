import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Contact Us | Suason Nursing Services LLC",
  description: "Get in touch with Suason Nursing Services for compliance and survey support.",
};

export default function ContactPage() {
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

      <section className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-6 animate-fade-in-up">Contact Us</h1>
        
        <div className="animate-fade-in-up delay-100 mb-8">
          <p className="text-lg text-slate-600 mb-6">
            We're here to help your agency with compliance, survey preparation, and audit support. 
            Reach out to discuss how we can assist you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12 animate-fade-in-up delay-200">
          <div className="bg-slate-50 p-6 rounded-lg">
            <h2 className="font-semibold text-xl mb-3">Phone</h2>
            <p className="text-slate-600">714‑749‑8848</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-lg">
            <h2 className="font-semibold text-xl mb-3">Email</h2>
            <a href="mailto:info@suasonns.org" className="text-slate-600 hover:text-slate-900 underline">
              info@suasonns.org
            </a>
          </div>
        </div>

        <div className="animate-fade-in-up delay-300">
          <h2 className="text-2xl font-semibold mb-4">Send us a message</h2>
          <form
            action="https://defaultebf992d4d1414e51a1c0a7a3bd7dd3.88.environment.api.powerplatform.com/powerautomate/automations/direct/workflows/fc649135a825400391dade79a9119a3c/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=Q40927k20aWEiAnjLoYORLnOUiuLcP9OQBMVAS30Lyk"
            method="POST"
            className="space-y-4"
            aria-label="Contact form"
          >
            <div>
              <label htmlFor="agency" className="block text-sm font-medium mb-1">Agency Name</label>
              <input
                id="agency"
                name="agency"
                className="w-full border border-slate-300 p-3 rounded focus:ring-2 focus:ring-slate-400 focus:outline-none transition-smooth"
                placeholder="Your agency name"
                required
              />
            </div>
            <div>
              <label htmlFor="contactName" className="block text-sm font-medium mb-1">Your Name</label>
              <input
                id="contactName"
                name="contactName"
                className="w-full border border-slate-300 p-3 rounded focus:ring-2 focus:ring-slate-400 focus:outline-none transition-smooth"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full border border-slate-300 p-3 rounded focus:ring-2 focus:ring-slate-400 focus:outline-none transition-smooth"
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone (optional)</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className="w-full border border-slate-300 p-3 rounded focus:ring-2 focus:ring-slate-400 focus:outline-none transition-smooth"
                placeholder="Your phone number"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">How can we help?</label>
              <textarea
                id="message"
                name="message"
                className="w-full border border-slate-300 p-3 rounded focus:ring-2 focus:ring-slate-400 focus:outline-none transition-smooth"
                placeholder="Tell us about your needs..."
                rows={5}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-slate-900 text-white p-4 rounded-lg hover:bg-slate-700 transition-smooth font-medium"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
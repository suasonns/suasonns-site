import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

export const metadata = {
  title: "About | Suason Nursing Services LLC",
  description: "Learn more about Suason Nursing Services LLC and our mission.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 px-6 py-20">
      <header className="border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="font-semibold text-lg">Suason Nursing Services LLC</h1>
          <NavBar />
        </div>
      </header>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">About Suason Nursing Services</h1>
        <p className="mb-4">
          Suason Nursing Services LLC provides professional compliance and consulting support to Home Health and Hospice agencies.
        </p>
        <p className="mb-4">
          Services include survey preparation, documentation training, and ADR & TPE audit support tailored to agency needs.
        </p>
        <p>
          Our mission is to help agencies remain compliant, reduce risk, and deliver high-quality patient care.
        </p>
      </div>
      <Footer />
    </main>
  );
}

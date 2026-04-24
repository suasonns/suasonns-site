export default function NavBar() {
  return (
    <nav className="space-x-6 text-sm" aria-label="Main navigation">
      <a href="/" className="text-slate-600 hover:text-slate-900 transition-smooth">Home</a>
      <a href="/services" className="text-slate-600 hover:text-slate-900 transition-smooth">Services</a>
      <a href="/about" className="text-slate-600 hover:text-slate-900 transition-smooth">About</a>
      <a href="/contact" className="text-slate-600 hover:text-slate-900 transition-smooth">Contact Us</a>
    </nav>
  );
}
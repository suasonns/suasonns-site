export default function NavBar() {
  return (
    <nav className="space-x-6 text-sm" aria-label="Main navigation">
      <a href="/">Home</a>
      <a href="/services">Services</a>
      <a href="/about">About</a>
      <a href="#contact">Contact</a>
    </nav>
  );
}
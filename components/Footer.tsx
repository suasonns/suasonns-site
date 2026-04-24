export default function Footer() {
  return (
    <footer className="border-t py-6 text-center text-sm text-slate-500" aria-label="Footer">
      © {new Date().getFullYear()} Suason Nursing Services LLC · 714‑749‑8848<br />
      <a href="mailto:info@suasonns.org" className="underline text-slate-600 hover:text-slate-900" aria-label="Email info@suasonns.org">
        info@suasonns.org
      </a>
    </footer>
  );
}
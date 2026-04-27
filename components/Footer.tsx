export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="border-t py-6 text-center text-sm text-slate-500" aria-label="Footer">
      <div>© {year} Suason Nursing Services LLC · 714‑749‑8848</div>
      <div className="mt-1">
        <a href="mailto:info@suasonns.org" className="underline text-slate-600 hover:text-slate-900" aria-label="Email info@suasonns.org">
          info@suasonns.org
        </a>
      </div>
      <div className="mt-2 text-xs text-slate-400">
        Serving California, Southern California, and nationwide.<br />
        All rights reserved. This website is for informational purposes only and does not constitute medical, legal, or financial advice.
      </div>
    </footer>
  );
}
import NavBar from "./NavBar";

export default function Header() {
  return (
    <header className="border-b sticky top-0 bg-white/95 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3 animate-fade-in-up">
          <img
            src="/sns-logo.svg"
            alt="SNS Logo"
            className="h-12 w-auto"
          />
          <span className="font-semibold text-lg">
            Suason Nursing Services LLC
          </span>
        </div>
        <NavBar />
      </div>
    </header>
  );
}
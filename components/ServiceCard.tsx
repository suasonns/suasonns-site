type ServiceCardProps = {
  title: string;
  text: string;
};

export default function ServiceCard({ title, text }: ServiceCardProps) {
  return (
    <div className="border border-slate-200 rounded-xl p-6 bg-white card-hover hover:border-slate-300 hover:shadow-lg">
      <h2 className="font-semibold text-xl mb-2 text-slate-800">{title}</h2>
      <p className="text-slate-600">{text}</p>
    </div>
  );
}

type ServiceCardProps = {
  title: string;
  text: string;
};

export default function ServiceCard({ title, text }: ServiceCardProps) {
  return (
    <div className="border rounded-lg p-6 bg-white">
      <h2 className="font-semibold text-xl mb-2">{title}</h2>
      <p className="text-slate-600">{text}</p>
    </div>
  );
}

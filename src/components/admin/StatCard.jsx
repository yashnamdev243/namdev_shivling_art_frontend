export default function StatCard({ icon, label, value, accent = "bg-brand-100 text-brand-700" }) {
  return (
    <div className="rounded-2xl border border-stone-100 bg-white p-6 shadow-card">
      <div className="flex items-center gap-4">
        <span className={`flex h-12 w-12 items-center justify-center rounded-xl text-xl ${accent}`}>
          {icon}
        </span>
        <div>
          <p className="text-sm text-gray-500">{label}</p>
          <p className="font-display text-2xl font-bold text-stone-900">{value}</p>
        </div>
      </div>
    </div>
  );
}

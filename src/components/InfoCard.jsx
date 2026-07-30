function InfoCard({ icon, iconBg, accent, number, label, title, subtitle, children }) {
  return (
    <div className="rounded-2xl bg-neutral-0 p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className={`flex h-9 w-9 items-center justify-center rounded-full ${iconBg}`}>
            <img src={icon} alt="" className="h-4 w-4" />
          </span>
          <span className={`text-xs font-semibold tracking-widest ${accent}`}>{label}</span>
        </div>
        <span className={`font-serif text-2xl ${accent}`}>{number}</span>
      </div>

      <h2 className="mt-6 font-serif text-2xl">{title}</h2>
      <p className="mt-1 text-sm text-neutral-600">{subtitle}</p>

      <div className="mt-4 text-sm leading-relaxed text-neutral-700">{children}</div>
    </div>
  )
}

export default InfoCard

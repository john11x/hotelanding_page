function NavItem({ icon, label, active = false, badge }) {
  return (
    <li className="relative">
      <a
        href="#"
        className={`flex items-center gap-3 rounded-full px-4 py-3 font-medium text-neutral-700 hover:bg-neutral-0 hover:text-neutral-900 ${
          active ? "bg-neutral-0 text-neutral-900 shadow-sm" : ""
        }`}
      >
        <img src={icon} alt="" className="h-4 w-4" />
        {label}
      </a>
      {badge != null && (
        <span className="absolute right-3 top-1/2 flex h-5 w-5 -translate-y-1/2 items-center justify-center rounded-full bg-terracotta-600 text-[0.6875rem] font-semibold text-neutral-0">
          {badge}
        </span>
      )}
    </li>
  )
}

export default NavItem

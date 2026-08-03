import NavItem from "./NavItem"

const navItems = [
  { icon: "/assets/images/icon-bed.svg", label: "Your stay", active: true, badge: 1 },
  { icon: "/assets/images/icon-house.svg", label: "The house" },
  { icon: "/assets/images/icon-pin.svg", label: "Around town" },
  { icon: "/assets/images/icon-breakfast-outline.svg", label: "Breakfast" },
  { icon: "/assets/images/icon-mail.svg", label: "Messages" },
]

function Sidebar({ onClose }) {
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between">
        <a href="#" className="inline-block">
          <img src="/assets/images/logo.svg" alt="Maison Soleil" className="h-9 w-auto" />
        </a>

        {onClose && (
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="focus-ring cursor-pointer rounded-lg border border-neutral-400 p-2"
          >
            <img src="/assets/images/icon-close.svg" alt="" className="h-4 w-4" />
          </button>
        )}
      </div>

      <hr className="my-6 border-neutral-400/60" />

      <nav aria-label="Guest navigation">
        <ul className="flex flex-col gap-1">
          {navItems.map((item) => (
            <NavItem key={item.label} {...item} />
          ))}
        </ul>
      </nav>

      <div className="mt-auto flex flex-col gap-6 pt-6">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-sun-300 to-sun-500 p-4">
          <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-sun-200/60" />
          <p className="relative text-[0.6875rem] font-semibold tracking-widest text-terracotta-700">
            TODAY IN CASSIS
          </p>
          <p className="relative font-serif text-4xl">27°</p>
          <p className="relative text-sm text-neutral-800">Sunny · light breeze</p>
        </div>

        <div className="border-t border-neutral-400/60 pt-4 font-mono text-[0.6875rem] leading-relaxed text-neutral-600">
          <p>EST. 1987</p>
          <p>MAISON SOLEIL · 12 RUE DES OLIVIERS · CASSIS</p>
          <p>© 2026 MAISON SOLEIL</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar

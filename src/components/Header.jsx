function Header({ name, children }) {
  return (
    <header className="flex flex-col gap-6 p-6 [grid-area:header] min-[62rem]:flex-row min-[62rem]:items-center min-[62rem]:justify-between min-[62rem]:p-8">
      <div>
        <p className="text-xs font-semibold tracking-widest text-neutral-600">
          BOOKING · CONFIRMED
        </p>
        <h1 className="mt-2 font-serif text-4xl">
          Bienvenue, <em className="italic text-terracotta-600">{name}.</em>
        </h1>
      </div>

      <div className="flex shrink-0 gap-3">{children}</div>
    </header>
  )
}

export default Header

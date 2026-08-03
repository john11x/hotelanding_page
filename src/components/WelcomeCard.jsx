function WelcomeCard() {
  return (
    <div className="w-full rounded-2xl bg-gradient-to-br from-terracotta-500 to-terracotta-700 p-6 text-neutral-0 shadow-xl">
      <div className="flex items-start justify-between">
        <p className="text-[0.6875rem] tracking-widest text-sun-50">WELCOME CARD</p>
        <img src="/assets/images/icon-sun.svg" alt="" className="h-8 w-8" />
      </div>

      <p className="mt-6 font-serif text-lg italic text-sun-200">A note from your host,</p>
      <p className="font-serif text-4xl italic">Margaux.</p>

      <p className="mt-4 text-sm leading-relaxed text-neutral-0/90">
        We're so glad you're coming. The shutters will be open, the lemonade cold, and the cat –
        Poivre – pretending not to notice you.
      </p>

      <div className="mt-10">
        <p className="text-[0.6875rem] tracking-widest text-sun-50">ROOM</p>
        <p className="font-serif text-xl">La Garrigue</p>
      </div>
    </div>
  )
}

export default WelcomeCard

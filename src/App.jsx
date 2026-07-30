import Sidebar from "./components/Sidebar"
import Button from "./components/Button"
import InfoCard from "./components/InfoCard"

function App() {
  return (
    <div className="layout bg-neutral-100 font-sans text-neutral-900">
      <aside className="border-r border-neutral-400/60 bg-neutral-100 p-6 [grid-area:sidebar]">
        <Sidebar />
      </aside>

      <header className="flex items-start justify-between gap-6 p-8 [grid-area:header]">
        <div>
          <p className="text-xs font-semibold tracking-widest text-neutral-600">
            BOOKING · CONFIRMED
          </p>
          <h1 className="mt-2 font-serif text-4xl">
            Bienvenue, <em className="italic">Lucia.</em>
          </h1>
        </div>

        <div className="flex shrink-0 gap-3">
          <Button variant="outline">Print receipt</Button>
          <Button variant="solid">Add to calendar</Button>
        </div>
      </header>

      <main className="p-8 pt-0 [grid-area:main]"></main>

      <footer className="grid grid-cols-3 gap-6 self-end p-8 pt-0 [grid-area:footer]">
        <InfoCard
          icon="/assets/images/icon-key.svg"
          iconBg="bg-terracotta-600"
          accent="text-terracotta-600"
          label="ARRIVAL"
          number="01"
          title="Check-in from 15:00"
          subtitle="Sat, 25 April"
        >
          Ring the brass bell by the blue door. If we're at the market, the key is in the
          terracotta pot by the olive tree.
        </InfoCard>

        <InfoCard
          icon="/assets/images/icon-wifi.svg"
          iconBg="bg-blue-500"
          accent="text-blue-500"
          label="WIFI"
          number="02"
          title="Le Soleil · Guest"
          subtitle="Password below"
        >
          <dl className="flex flex-col gap-2 rounded-xl bg-neutral-100 p-3 font-mono text-xs">
            <div className="flex items-center justify-between">
              <dt className="text-neutral-600">NETWORK</dt>
              <dd>Le Soleil · Guest</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-neutral-600">PASSWORD</dt>
              <dd className="flex items-center gap-2">
                soleil-2026
                <button
                  type="button"
                  className="cursor-pointer rounded-full border border-neutral-400 px-2 py-0.5 text-[0.625rem] font-semibold"
                >
                  COPY
                </button>
              </dd>
            </div>
          </dl>
        </InfoCard>

        <InfoCard
          icon="/assets/images/icon-breakfast.svg"
          iconBg="bg-rose-500"
          accent="text-rose-500"
          label="BREAKFAST"
          number="03"
          title="Served 8 – 10:30"
          subtitle="On the terrace"
        >
          Fresh figs, Marseille honey, pain au levain, and espresso. Gluten-free option? Leave a
          note the night before.
        </InfoCard>
      </footer>
    </div>
  )
}

export default App

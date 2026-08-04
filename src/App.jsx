import { useState } from "react"
import Sidebar from "./components/Sidebar"
import Button from "./components/Button"
import InfoCard from "./components/InfoCard"
import Footer from "./components/Footer"
import Header from "./components/Header"
import ReceiptCard from "./components/ReceiptCard"
import WelcomeCard from "./components/WelcomeCard"
import CopyButton from "./components/CopyButton"

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="layout bg-neutral-100 font-sans text-neutral-900">
      <aside className="flex items-center justify-between border-b border-neutral-400/60 bg-neutral-100 p-6 [grid-area:sidebar] min-[62rem]:block min-[62rem]:border-b-0 min-[62rem]:border-r">
        <a href="#" className="inline-block min-[62rem]:hidden">
          <img src="/assets/images/logo.svg" alt="Maison Soleil" className="h-9 w-auto" />
        </a>

        <button
          type="button"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open menu"
          className="focus-ring cursor-pointer rounded-lg border border-neutral-400 p-2 min-[62rem]:hidden"
        >
          <img src="/assets/images/icon-menu.svg" alt="" className="h-4 w-4" />
        </button>

        <div className="hidden h-full min-[62rem]:block">
          <Sidebar />
        </div>
      </aside>

      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-neutral-100 p-6 min-[62rem]:hidden">
          <Sidebar onClose={() => setIsMenuOpen(false)} />
        </div>
      )}

      <Header name="Lucia">
        <Button variant="outline">Print receipt</Button>
        <Button variant="solid">Add to calendar</Button>
      </Header>

      <main className="p-6 pt-0 [grid-area:main] min-[62rem]:p-8 min-[62rem]:pt-0">
        <div className="flex flex-col gap-4 min-[62rem]:hidden">
          <div className="rotate-2">
            <WelcomeCard />
          </div>
          <ReceiptCard />
        </div>

        <div className="group relative mx-auto hidden min-h-[30rem] w-[46rem] min-[62rem]:block">
          <img
            src="/assets/images/illustration-sun.svg"
            alt=""
            className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-32 w-32 -translate-x-1/2 -translate-y-1/2 scale-75 opacity-0 transition-all duration-300 ease-out group-hover:scale-100 group-hover:opacity-100"
          />
          <div className="absolute left-1/2 top-1/2 grid w-[28rem] -translate-x-1/2 -translate-y-1/2">
            <div className="col-start-1 row-start-1 z-10 origin-bottom -translate-x-[13rem] -rotate-[4deg] transition-transform duration-300 ease-out group-hover:-translate-x-[19rem] group-hover:rotate-[8deg]">
              <ReceiptCard />
            </div>
            <div className="col-start-1 row-start-1 z-20 origin-bottom translate-x-[13rem] rotate-[4deg] transition-transform duration-300 ease-out group-hover:translate-x-[19rem] group-hover:-rotate-[8deg]">
              <WelcomeCard />
            </div>

          </div>
        </div>

        <p className="mt-4 hidden items-center justify-center gap-2 text-center font-mono text-[0.6875rem] tracking-widest text-terracotta-600 min-[62rem]:flex">
          <img src="/assets/images/icon-sparkle.svg" alt="" className="h-2 w-2" />
          HOVER TO FAN
          <img src="/assets/images/icon-sparkle.svg" alt="" className="h-2 w-2" />
        </p>
      </main>

      <Footer>
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
                <CopyButton value="soleil-2026" />
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
      </Footer>
    </div>
  )
}

export default App

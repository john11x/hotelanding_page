import Sidebar from "./components/Sidebar"
import MobileNav from "./components/MobileNav"
import Button from "./components/Button"
import Footer from "./components/Footer"
import Header from "./components/Header"
import ReceiptCard from "./components/ReceiptCard"
import WelcomeCard from "./components/WelcomeCard"
import CardFan from "./components/CardFan"
import ArrivalCard from "./components/ArrivalCard"
import WifiCard from "./components/WifiCard"
import BreakfastCard from "./components/BreakfastCard"

function App() {
  return (
    <div className="layout bg-neutral-100 font-sans text-neutral-900">
      <div className="flex items-center justify-between border-b border-neutral-400/60 bg-neutral-100 p-6 [grid-area:sidebar] min-[62rem]:block min-[62rem]:border-b-0 min-[62rem]:border-r">
        <MobileNav />

        <div className="hidden h-full min-[62rem]:block">
          <Sidebar />
        </div>
      </div>

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

        <CardFan />
      </main>

      <Footer>
        <ArrivalCard />
        <WifiCard />
        <BreakfastCard />
      </Footer>
    </div>
  )
}

export default App

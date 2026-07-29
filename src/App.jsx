import Nav from "./components/Nav"
import Button from "./components/Button"

function App() {
  return (
    <main className="min-h-screen bg-neutral-200 p-8 font-sans text-neutral-900">
      <div className="mx-auto max-w-xs rounded-2xl bg-neutral-100 p-4">
        <Nav />
      </div>

      <div className="mt-6 flex justify-center gap-3">
        <Button variant="outline">Print receipt</Button>
        <Button variant="solid">Add to calendar</Button>
      </div>
    </main>
  )
}

export default App

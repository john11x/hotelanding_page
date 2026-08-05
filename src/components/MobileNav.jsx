import { useState } from "react"
import Sidebar from "./Sidebar"

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <a href="#" className="inline-block min-[62rem]:hidden">
        <img src="/assets/images/logo.svg" alt="Maison Soleil" className="h-9 w-auto" />
      </a>

      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Open menu"
        className="focus-ring cursor-pointer rounded-lg border border-neutral-400 p-2 min-[62rem]:hidden"
      >
        <img src="/assets/images/icon-menu.svg" alt="" className="h-4 w-4" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-neutral-100 p-6 min-[62rem]:hidden">
          <Sidebar onClose={() => setIsOpen(false)} />
        </div>
      )}
    </>
  )
}

export default MobileNav

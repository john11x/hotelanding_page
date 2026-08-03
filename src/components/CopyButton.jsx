import { useState } from "react"

function CopyButton({ value }) {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    await navigator.clipboard.writeText(value)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="focus-ring cursor-pointer rounded-full border border-neutral-400 px-2 py-0.5 text-[0.625rem] font-semibold"
    >
      {copied ? "COPIED" : "COPY"}
    </button>
  )
}

export default CopyButton

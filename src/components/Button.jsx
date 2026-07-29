const variants = {
  outline: "border-neutral-400 bg-neutral-0 text-neutral-900 hover:bg-neutral-200",
  solid: "border-transparent bg-neutral-900 text-neutral-0 hover:bg-neutral-800",
}

function Button({ variant = "outline", className = "", children, ...props }) {
  return (
    <button
      type="button"
      className={`cursor-pointer rounded-full border px-6 py-3 text-[0.8125rem] font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta-500 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button

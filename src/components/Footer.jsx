function Footer({ children }) {
  return (
    <footer className="grid grid-cols-1 gap-6 self-end p-6 pt-0 [grid-area:footer] min-[62rem]:grid-cols-3 min-[62rem]:p-8 min-[62rem]:pt-0">
      {children}
    </footer>
  )
}

export default Footer

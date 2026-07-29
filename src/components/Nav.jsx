import NavItem from "./NavItem"

const navItems = [
  { icon: "/assets/images/icon-bed.svg", label: "Your stay", active: true, badge: 1 },
  { icon: "/assets/images/icon-house.svg", label: "The house" },
  { icon: "/assets/images/icon-pin.svg", label: "Around town" },
  { icon: "/assets/images/icon-breakfast-outline.svg", label: "Breakfast" },
  { icon: "/assets/images/icon-mail.svg", label: "Messages" },
]

function Nav() {
  return (
    <nav aria-label="Guest navigation">
      <ul className="flex flex-col gap-1">
        {navItems.map((item) => (
          <NavItem key={item.label} {...item} />
        ))}
      </ul>
    </nav>
  )
}

export default Nav

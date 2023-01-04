interface NavItemProps {
  id: string;
  href: string;
  title: string;
}

const navItems: NavItemProps[] = [
  { id: "1", href: "", title: "Home" },
  { id: "2", href: "features", title: "Features" },
  { id: "3", href: "pricing", title: "Pricing" },
  { id: "4", href: "contact", title: "Contact" },
  { id: "5", href: "login", title: "Login" },
];

export default navItems;

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { toast } from "sonner";
import logo from "@/assets/logo-header.png";

// Pages marked as coming soon
const comingSoonPages = ["/musica", "/merch", "/experience"];

const navItems = [
  { label: "INICIO", href: "/" },
  { label: "EVENTOS", href: "/#eventos" },
  { label: "RESIDENTES", href: "/#residentes" },
  { label: "MÚSICA", href: "/musica", comingSoon: true },
  { 
    label: "MERCH", 
    href: "/merch",
    comingSoon: true,
    dropdown: [
      { label: "TIENDA", href: "/merch" },
      { label: "NOVEDADES", href: "/merch#novedades" },
    ]
  },
  { label: "THE EXPERIENCE", href: "/experience", comingSoon: true },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, href: string, isComingSoon?: boolean) => {
    // Check if this is a coming soon page
    if (isComingSoon || comingSoonPages.some(page => href.startsWith(page))) {
      e.preventDefault();
      toast("PRÓXIMAMENTE", {
        description: "Esta sección estará disponible muy pronto.",
        duration: 3000,
      });
      setIsOpen(false);
      setActiveDropdown(null);
      return;
    }
    
    setIsOpen(false);
    setActiveDropdown(null);
    
    // If it's a hash link on the same page
    if (href.startsWith("/#")) {
      const elementId = href.replace("/#", "");
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 h-20 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="HardBrutality" className="h-32 md:h-40 glow-white absolute -top-9 left-4" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <div key={item.label} className="relative group flex items-center">
              {item.dropdown ? (
                <>
                  <button
                    onClick={(e) => item.comingSoon ? handleNavClick(e, item.href, true) : toggleDropdown(item.label)}
                    className="font-display text-sm tracking-wider text-muted-foreground hover:text-foreground transition-colors relative flex items-center gap-1 leading-none after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-laser after:scale-x-0 after:origin-right after:transition-transform hover:after:scale-x-100 hover:after:origin-left"
                  >
                    {item.label}
                    {!item.comingSoon && <ChevronDown size={12} className={`transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />}
                  </button>
                  
                  {/* Dropdown Menu - only show if not coming soon */}
                  {!item.comingSoon && (
                    <div className={`absolute top-full left-0 mt-4 py-2 min-w-[160px] bg-background border border-border rounded-sm shadow-lg transition-all duration-200 z-50 ${activeDropdown === item.label ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                      {/* Direct link to main page */}
                      <a
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item.href)}
                        className="block px-4 py-2 font-display text-sm tracking-wider text-muted-foreground hover:text-foreground hover:bg-laser/10 transition-colors"
                      >
                        VER TODO
                      </a>
                      <div className="border-t border-border my-1" />
                      {item.dropdown.map((subItem) => (
                        <a
                          key={subItem.label}
                          href={subItem.href}
                          onClick={(e) => handleNavClick(e, subItem.href)}
                          className="block px-4 py-2 font-display text-sm tracking-wider text-muted-foreground hover:text-foreground hover:bg-laser/10 transition-colors"
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  )}
                </>
              ) : item.comingSoon ? (
                <button
                  onClick={(e) => handleNavClick(e, item.href, true)}
                  className="font-display text-sm tracking-wider text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-laser after:scale-x-0 after:origin-right after:transition-transform hover:after:scale-x-100 hover:after:origin-left"
                >
                  {item.label}
                </button>
              ) : item.href.startsWith("/") && !item.href.includes("#") ? (
                <Link
                  to={item.href}
                  className="font-display text-sm tracking-wider text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-laser after:scale-x-0 after:origin-right after:transition-transform hover:after:scale-x-100 hover:after:origin-left"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="font-display text-sm tracking-wider text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-laser after:scale-x-0 after:origin-right after:transition-transform hover:after:scale-x-100 hover:after:origin-left"
                >
                  {item.label}
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border animate-slide-up">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-2">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.dropdown ? (
                  <>
                    <button
                      onClick={(e) => item.comingSoon ? handleNavClick(e, item.href, true) : toggleDropdown(item.label)}
                      className="w-full flex items-center justify-between font-display text-lg tracking-wider text-foreground hover:text-laser transition-colors py-2 border-b border-border"
                    >
                      {item.label}
                      {!item.comingSoon && <ChevronDown size={18} className={`transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />}
                    </button>
                    
                    {!item.comingSoon && activeDropdown === item.label && (
                      <div className="pl-4 py-2 space-y-2 border-b border-border">
                        <a
                          href={item.href}
                          onClick={(e) => handleNavClick(e, item.href)}
                          className="block font-display text-base tracking-wider text-muted-foreground hover:text-laser transition-colors py-1"
                        >
                          VER TODO
                        </a>
                        {item.dropdown.map((subItem) => (
                          <a
                            key={subItem.label}
                            href={subItem.href}
                            onClick={(e) => handleNavClick(e, subItem.href)}
                            className="block font-display text-base tracking-wider text-muted-foreground hover:text-laser transition-colors py-1"
                          >
                            {subItem.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : item.comingSoon ? (
                  <button
                    onClick={(e) => handleNavClick(e, item.href, true)}
                    className="font-display text-lg tracking-wider text-foreground hover:text-laser transition-colors py-2 border-b border-border block w-full text-left"
                  >
                    {item.label}
                  </button>
                ) : item.href.startsWith("/") && !item.href.includes("#") ? (
                  <Link
                    to={item.href}
                    className="font-display text-lg tracking-wider text-foreground hover:text-laser transition-colors py-2 border-b border-border block"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    className="font-display text-lg tracking-wider text-foreground hover:text-laser transition-colors py-2 border-b border-border block"
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

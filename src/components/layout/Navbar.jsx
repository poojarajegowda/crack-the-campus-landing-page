import { useState } from "react";
import { Menu, X, GraduationCap } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { navigation } from "../constants/navigation";
import useActiveSection from "../../hooks/useActiveSection";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const activeSection = useActiveSection();

  return (
    <header
  className="
    fixed
    top-0
    left-0
    right-0
    z-50
    bg-white/80
    backdrop-blur-lg
    border-b
    border-slate-200/70
    transition-all
    duration-300
  "
> 
<Container>
        <nav className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <GraduationCap className="h-8 w-8 text-blue-600" />
            <div>
              <h1 className="text-lg font-bold text-slate-900">
                CrackTheCampus
              </h1>
            </div>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <li key={item.href}>
    <a
      href={`#${item.href}`}
      className={`relative px-2 py-1 font-medium transition-colors duration-300 ${
        activeSection === item.href
          ? "text-blue-600"
          : "text-slate-700 hover:text-blue-600"
      }`}
    >
      {item.label}

      {activeSection === item.href && (
        <span className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-blue-600"></span>
      )}
    </a>
  </li>
            ))}
          </ul>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="text-slate-700 hover:text-blue-600 transition">
              Sign In
            </button>

            <Button>Start Learning</Button>
          </div>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden"
          >
            {isOpen ? (
              <X className="h-7 w-7" />
            ) : (
              <Menu className="h-7 w-7" />
            )}
          </button>
        </nav>
      </Container>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white">
          <Container>
            <ul className="flex flex-col py-6 gap-5">
              {navigation.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-slate-700 font-medium"
                  >
                    {item.title}
                  </a>
                </li>
              ))}

              <Button className="w-full mt-4">
                Start Learning
              </Button>
            </ul>
          </Container>
        </div>
      )}
    </header>
  );
};

export default Navbar;

import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Programs", path: "/programs" },
    { title: "Portfolio", path: "/portfolio" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center">
              <img 
                src="/placeholder.svg" 
                alt="SMKN 9 Bandar Lampung Logo" 
                className="h-12 w-12" 
              />
              <div className="ml-3">
                <h1 className="text-lg font-bold text-school-blue">SMKN 9</h1>
                <p className="text-xs">Bandar Lampung</p>
              </div>
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    "text-sm font-medium transition-colors hover:text-school-blue",
                    isActive
                      ? "text-school-blue"
                      : isScrolled
                      ? "text-school-text"
                      : "text-white"
                  )
                }
                end
              >
                {item.title}
              </NavLink>
            ))}
            <Button 
              variant="default" 
              size="sm" 
              className="bg-school-green hover:bg-school-blue text-white"
            >
              Student Portal
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X size={24} className={isScrolled ? "text-school-text" : "text-white"} />
            ) : (
              <Menu size={24} className={isScrolled ? "text-school-text" : "text-white"} />
            )}
          </Button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white absolute top-full left-0 w-full shadow-lg py-4">
            <div className="flex flex-col space-y-4 px-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    cn(
                      "text-sm font-medium py-2",
                      isActive
                        ? "text-school-blue"
                        : "text-school-text hover:text-school-blue"
                    )
                  }
                  onClick={() => setIsMenuOpen(false)}
                  end
                >
                  {item.title}
                </NavLink>
              ))}
              <Button 
                variant="default" 
                size="sm" 
                className="bg-school-green hover:bg-school-blue text-white w-full"
              >
                Student Portal
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;

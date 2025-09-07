import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-soft">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="dairy-gradient w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl">
              SK
            </div>
            <div>
              <h1 className="text-2xl font-bold text-dairy-green">Sri Krishna Dairy</h1>
              <p className="text-sm text-muted-foreground">Premium Traditional Products</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-dairy-green transition-smooth font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-dairy-green transition-smooth font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="text-foreground hover:text-dairy-green transition-smooth font-medium"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection("process")}
              className="text-foreground hover:text-dairy-green transition-smooth font-medium"
            >
              Our Process
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-dairy-green transition-smooth font-medium"
            >
              Contact
            </button>
          </nav>

          {/* Contact Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <a href="tel:+919876543210" className="hidden md:flex">
              <Button variant="outline" size="sm" className="gap-2">
                <Phone className="h-4 w-4" />
                Call Now
              </Button>
            </a>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-accent transition-smooth"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-in slide-in-from-top-2">
            <nav className="flex flex-col space-y-3">
              <button
                onClick={() => scrollToSection("home")}
                className="text-left py-2 text-foreground hover:text-dairy-green transition-smooth font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left py-2 text-foreground hover:text-dairy-green transition-smooth font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className="text-left py-2 text-foreground hover:text-dairy-green transition-smooth font-medium"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection("process")}
                className="text-left py-2 text-foreground hover:text-dairy-green transition-smooth font-medium"
              >
                Our Process
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left py-2 text-foreground hover:text-dairy-green transition-smooth font-medium"
              >
                Contact
              </button>
              <a href="tel:+919876543210" className="pt-3">
                <Button variant="outline" size="sm" className="gap-2 w-full">
                  <Phone className="h-4 w-4" />
                  Call Now
                </Button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
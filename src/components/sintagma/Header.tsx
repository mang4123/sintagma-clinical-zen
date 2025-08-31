import { Button } from "@/components/ui/button";
import sintagmaLogo from "@/assets/sintagma-logo.png";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={sintagmaLogo}
              alt="SINTAGMA"
              className="h-8 w-auto"
            />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#sobre" className="text-foreground hover:text-primary transition-colors">
              Sobre
            </a>
            <a href="#funcionalidades" className="text-foreground hover:text-primary transition-colors">
              Funcionalidades
            </a>
            <a href="#planos" className="text-foreground hover:text-primary transition-colors">
              Planos
            </a>
          </nav>

          {/* CTA Button */}
          <Button variant="default" className="bg-gradient-primary text-white">
            Cadastre-se
          </Button>
        </div>
      </div>
    </header>
  );
};
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-professional.jpg";
import sintagmaLogo from "@/assets/sintagma-logo.png";
import gradientElement1 from "@/assets/gradient-element-1.png";
import gradientElement2 from "@/assets/gradient-element-2.png";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary-light/20 via-white to-secondary-light/20 overflow-hidden pt-20">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-96 h-96 opacity-30">
        <img
          src={gradientElement1}
          alt=""
          className="w-full h-full object-contain"
        />
      </div>
      <div className="absolute bottom-10 right-10 w-80 h-80 opacity-25">
        <img
          src={gradientElement2}
          alt=""
          className="w-full h-full object-contain"
        />
      </div>
      
      <div className="relative container mx-auto px-4 py-20">
        <div className="text-center space-y-12 max-w-4xl mx-auto">
          
          {/* Main Headlines */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent leading-tight">
              Atendimentos mais humanos, gestão mais simples.
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-foreground font-medium">
              <img
                src={sintagmaLogo}
                alt="SINTAGMA"
                className="inline-block h-8 md:h-10 mx-2"
              />
              cuida da burocracia, e você do paciente.
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Desenvolvido por profissionais de saúde mental para profissionais de saúde mental: 
              gestão intuitiva, segurança total e tudo em um só lugar!
            </p>
          </div>
          
          {/* CTA Button */}
          <div className="flex justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-primary text-white px-12 py-6 text-lg rounded-full shadow-strong hover:shadow-glow transition-all duration-300 transform hover:scale-105"
            >
              Experimente agora e veja como é simples transformar sua rotina!
            </Button>
          </div>
          
          {/* Hero Image/Visual */}
          <div className="relative max-w-2xl mx-auto mt-16">
            <div className="relative rounded-3xl overflow-hidden shadow-strong bg-gradient-to-br from-white to-primary-light/10">
              <img
                src={heroImage}
                alt="Profissional usando SINTAGMA"
                className="w-full h-auto"
              />
              
              {/* Overlay with product preview */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent"></div>
              
              {/* Floating badge */}
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-primary shadow-medium">
                IA Segura & LGPD
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
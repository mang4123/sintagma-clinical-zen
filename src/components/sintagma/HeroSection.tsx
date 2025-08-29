import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-subtle opacity-20"></div>
      
      <div className="relative container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                Para Psicólogos, Psiquiatras e Nutricionistas:
                <span className="block text-secondary-light mt-4">
                  "Seu Raciocínio Clínico é Seu Maior Ativo."
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-primary-light leading-relaxed">
                Com o SINTAGMA, liberte-o da burocracia e transforme cada consulta em um 
                prontuário impecável para uma prática de excelência.
              </p>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <p className="text-lg text-white">
                  O futuro da sua clínica chegou. SINTAGMA: a Inteligência Artificial que 
                  eleva sua acurácia diagnóstica, blinda sua prática com segurança inabalável 
                  e redefine o que é ser um clínico confiante, ético e verdadeiramente presente.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="lg" className="text-lg px-8 py-6">
                Experimente Grátis por 7 Dias!
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-white/30 text-white hover:bg-white/10 transition-all duration-300">
                Assista à Demonstração
              </Button>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-strong">
              <img
                src={heroImage}
                alt="Profissional de saúde mental usando SINTAGMA"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-full font-semibold shadow-medium animate-bounce">
              IA Segura
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white text-primary px-4 py-2 rounded-full font-semibold shadow-medium">
              LGPD Compliant
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
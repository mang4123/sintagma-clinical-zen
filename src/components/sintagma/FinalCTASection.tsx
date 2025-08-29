import { Button } from "@/components/ui/button";
import { Sparkles, Clock, Shield, Star } from "lucide-react";

export const FinalCTASection = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20"></div>
      
      <div className="relative container mx-auto px-4">
        <div className="text-center max-w-5xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="flex gap-4">
              <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm">
                <Shield className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Chegou a Hora de Desbloquear a 
            <span className="text-secondary-light block mt-2">
              Próxima Fase da Sua Excelência Clínica
            </span>
          </h2>
          
          <div className="space-y-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <p className="text-2xl lg:text-3xl text-white leading-relaxed">
                Você já tem o conhecimento. Agora tenha a estrutura.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <p className="text-xl lg:text-2xl text-primary-light leading-relaxed">
                Não permita que a burocracia limite seu potencial. 
                Junte-se aos profissionais que já estão elevando sua excelência com o SINTAGMA.
              </p>
            </div>
            
            <div className="bg-secondary/20 backdrop-blur-sm rounded-2xl p-6 border border-secondary/30">
              <p className="text-xl text-white font-semibold">
                Organize o invisível. Dê forma ao essencial.
              </p>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-12">
            <Button variant="premium" size="lg" className="text-xl px-12 py-8">
              <Star className="w-6 h-6 mr-3" />
              Comece Sua Transformação Agora! Experimente Grátis por 7 Dias!
            </Button>
            
            <Button variant="outline" size="lg" className="text-xl px-12 py-8 border-white/50 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300">
              Assista à Demonstração
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">7 Dias</div>
              <div className="text-primary-light">Teste Grátis</div>
              <div className="text-sm text-white/80 mt-2">Sem compromisso</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">100%</div>
              <div className="text-primary-light">LGPD Seguro</div>
              <div className="text-sm text-white/80 mt-2">Criptografia P2P</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">6+</div>
              <div className="text-primary-light">Horas/Semana</div>
              <div className="text-sm text-white/80 mt-2">Tempo recuperado</div>
            </div>
          </div>
          
          {/* Final message */}
          <div className="mt-16 max-w-3xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <p className="text-lg text-white/90 leading-relaxed italic">
                "O futuro da sua clínica não é sobre fazer mais do mesmo. 
                É sobre fazer diferente, com inteligência, segurança e propósito. 
                O SINTAGMA é o seu parceiro nessa jornada de excelência."
              </p>
              <div className="mt-4 text-primary-light font-semibold">
                - Equipe SINTAGMA
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
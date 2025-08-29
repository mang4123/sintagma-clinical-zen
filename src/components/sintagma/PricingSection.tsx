import { Button } from "@/components/ui/button";
import { Check, Calendar, CreditCard, Shield, Zap, Star } from "lucide-react";

export const PricingSection = () => {
  const features = [
    "Todos os Recursos SINTAGMA",
    "Prontuários Ilimitados", 
    "Criptografia P2P e LGPD",
    "Transcrição com IA Curada",
    "Modelos Personalizáveis",
    "Suporte Especializado",
    "Atualizações Contínuas"
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Escolha o Plano Que Impulsiona Sua Excelência 
            <span className="text-primary block mt-2">e Protege Seu Tempo</span>
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            Invista na sua prática, na sua segurança e na qualidade do seu cuidado. 
            O SINTAGMA se adapta às suas necessidades.
          </p>
          
          <div className="bg-accent rounded-2xl p-6 mt-8">
            <p className="text-lg font-semibold text-primary">
              Seu tempo é precioso. Sua prática é valiosa. Nossa tecnologia respeita os dois.
            </p>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {/* Monthly Plan */}
          <div className="bg-white rounded-3xl p-8 shadow-medium hover:shadow-strong transition-all duration-300 relative">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Calendar className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">Plano Mensal</h3>
              </div>
              <p className="text-muted-foreground mb-6">Flexibilidade</p>
              
              <div className="mb-6">
                <div className="text-5xl font-bold text-primary mb-2">
                  R$ 250
                  <span className="text-2xl text-muted-foreground">/mês</span>
                </div>
                <p className="text-muted-foreground">Sem fidelidade</p>
              </div>
              
              <div className="bg-primary-light rounded-xl p-4 mb-6">
                <p className="text-sm font-medium text-primary">
                  Ideal para: Experimentar por curto prazo, sem compromisso inicial.
                </p>
              </div>
            </div>
            
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-secondary" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
            
            <Button className="w-full text-lg py-6 bg-primary hover:bg-primary/90" size="lg">
              <CreditCard className="w-5 h-5 mr-2" />
              Assinar Plano Mensal
            </Button>
          </div>
          
          {/* Annual Plan */}
          <div className="bg-white rounded-3xl p-8 shadow-strong hover:shadow-glow transition-all duration-300 relative border-2 border-secondary">
            {/* Popular badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-secondary text-secondary-foreground px-6 py-2 rounded-full font-bold text-sm flex items-center gap-2">
                <Star className="w-4 h-4" />
                MÁXIMO BENEFÍCIO
              </div>
            </div>
            
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Shield className="w-6 h-6 text-secondary" />
                <h3 className="text-2xl font-bold text-foreground">Plano Anual</h3>
              </div>
              <p className="text-muted-foreground mb-6">Máximo Benefício</p>
              
              <div className="mb-6">
                <div className="text-5xl font-bold text-secondary mb-2">
                  R$ 150
                  <span className="text-2xl text-muted-foreground">/mês</span>
                </div>
                <p className="text-muted-foreground mb-2">Total R$ 1.800,00/ano</p>
                <div className="bg-secondary-light rounded-lg px-4 py-2 inline-block">
                  <span className="text-secondary font-bold">40% de desconto</span>
                </div>
              </div>
              
              <div className="bg-secondary-light rounded-xl p-4 mb-6">
                <p className="text-sm font-medium text-secondary">
                  Ideal para: Compromisso com a excelência, com maior economia e todos os benefícios.
                </p>
              </div>
            </div>
            
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-secondary" />
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>
            
            <Button className="w-full text-lg py-6 bg-secondary hover:bg-secondary/90" size="lg">
              <Zap className="w-5 h-5 mr-2" />
              Assinar Plano Anual e Economizar!
            </Button>
          </div>
        </div>
        
        {/* Free Trial CTA */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-medium max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-full">
                <Star className="w-8 h-8 text-primary" />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-primary mb-4">
              "Quem já testou, não consegue mais atender sem."
            </h3>
            
            <p className="text-lg text-muted-foreground mb-6">
              Experimente e entenda o porquê. Comece com nosso Teste Gratuito de 7 Dias!
            </p>
            
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              Experimente Grátis Agora!
            </Button>
          </div>
        </div>
        
        {/* Value proposition */}
        <div className="text-center mt-16">
          <div className="bg-gradient-primary rounded-2xl p-8 shadow-strong max-w-4xl mx-auto">
            <p className="text-xl font-bold text-white mb-4">
              Investimento vs. Retorno
            </p>
            <p className="text-lg text-primary-light leading-relaxed">
              Com 6+ horas semanais recuperadas, você não está pagando por um software. 
              Você está investindo na sua liberdade, na sua excelência e no seu futuro profissional. 
              <span className="font-bold text-white">
                Qual o valor do seu tempo e da sua paz de espírito?
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
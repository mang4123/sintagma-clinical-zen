import { Check, X, Heart, Brain, Users, Target, AlertTriangle, Zap } from "lucide-react";

export const ForWhomSection = () => {
  const forWho = [
    {
      icon: Heart,
      text: "São Psicólogos, Psiquiatras ou Nutricionistas que vivem a clínica com verdade e paixão."
    },
    {
      icon: Target,
      text: "Buscam otimizar seu tempo sem perder a qualidade do atendimento ou a profundidade do raciocínio."
    },
    {
      icon: Brain,
      text: "Priorizam a acurácia diagnóstica, a continuidade do cuidado e a base científica em sua prática."
    },
    {
      icon: Users,
      text: "Valorizam a segurança inegociável, a ética e a conformidade legal em seus registros."
    },
    {
      icon: Zap,
      text: "Desejam focar na essência do cuidado humano e menos na sobrecarga operacional."
    },
    {
      icon: Target,
      text: "Querem elevar sua reputação profissional e o impacto de seu trabalho."
    }
  ];

  const notFor = [
    {
      icon: AlertTriangle,
      text: "Procura apenas um sistema de gestão de clínica com agendamento e finanças (nosso foco é a inteligência e a segurança do prontuário)."
    },
    {
      icon: X,
      text: "Acredita que a IA irá substituí-lo na escuta e na decisão clínica (nós acreditamos que ela o sustenta e potencializa)."
    },
    {
      icon: AlertTriangle,
      text: "Não vê valor na organização, segurança e profundidade dos registros clínicos."
    },
    {
      icon: X,
      text: "Não se preocupa com a conformidade da LGPD em sua prática."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            O SINTAGMA é Para Você Que Busca a Excelência...
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            Desenvolvido especificamente para profissionais que entendem que tecnologia 
            e humanização caminham juntas.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* For Who */}
          <div>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 bg-secondary-light rounded-full px-8 py-4 mb-6">
                <Check className="w-6 h-6 text-secondary" />
                <h3 className="text-2xl font-bold text-secondary">PERFEITO PARA VOCÊ</h3>
              </div>
              <p className="text-lg text-muted-foreground">
                O SINTAGMA foi cuidadosamente desenvolvido para profissionais de saúde mental que:
              </p>
            </div>
            
            <div className="space-y-6">
              {forWho.map((item, index) => (
                <div key={index} className="bg-secondary-light border border-secondary/20 rounded-2xl p-6 hover:shadow-soft transition-all duration-300 hover:scale-105">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 bg-secondary/10 rounded-full">
                      <item.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <Check className="w-5 h-5 text-secondary" />
                        <span className="font-bold text-secondary text-lg">✅</span>
                      </div>
                      <p className="text-foreground leading-relaxed font-medium">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Not For */}
          <div>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 bg-destructive/10 rounded-full px-8 py-4 mb-6">
                <X className="w-6 h-6 text-destructive" />
                <h3 className="text-2xl font-bold text-destructive">NÃO É PARA QUEM...</h3>
              </div>
              <p className="text-lg text-muted-foreground">
                ...Busca Apenas Um 'Sistema Genérico'. O SINTAGMA NÃO É indicado para quem:
              </p>
            </div>
            
            <div className="space-y-6">
              {notFor.map((item, index) => (
                <div key={index} className="bg-destructive/5 border border-destructive/20 rounded-2xl p-6 hover:shadow-soft transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 bg-destructive/10 rounded-full">
                      <item.icon className="w-6 h-6 text-destructive" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <X className="w-5 h-5 text-destructive" />
                        <span className="font-bold text-destructive text-lg">❌</span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-primary rounded-3xl p-12 shadow-strong max-w-4xl mx-auto">
            <div className="mb-8">
              <Heart className="w-16 h-16 text-white mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-white mb-4">
                Você se identificou?
              </h3>
              <p className="text-xl text-primary-light leading-relaxed">
                Se você é um profissional que busca excelência, ética e humanização 
                na sua prática, o SINTAGMA foi feito especialmente para você.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-light hover:text-primary transition-all duration-300 shadow-medium hover:shadow-strong">
                Sim, Quero Transformar Minha Prática!
              </button>
              <button className="bg-secondary text-secondary-foreground px-8 py-4 rounded-xl font-bold text-lg hover:bg-secondary/90 transition-all duration-300">
                Experimente Grátis por 7 Dias
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
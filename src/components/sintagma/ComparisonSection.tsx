import { X, Check, AlertTriangle, Zap, Shield, Clock, Brain, Target } from "lucide-react";

export const ComparisonSection = () => {
  const comparisons = [
    {
      before: {
        icon: AlertTriangle,
        text: "Medo de esquecer detalhes cruciais da consulta.",
        color: "text-destructive"
      },
      after: {
        icon: Check,
        text: "Prontuários detalhados e insights claros, sempre à mão.",
        color: "text-secondary"
      }
    },
    {
      before: {
        icon: Clock,
        text: "Horas perdidas na digitação e organização pós-consulta.",
        color: "text-destructive"
      },
      after: {
        icon: Zap,
        text: "Prontuários impecáveis gerados em minutos pela IA.",
        color: "text-secondary"
      }
    },
    {
      before: {
        icon: AlertTriangle,
        text: "Insegurança quanto à conformidade legal e ética dos registros.",
        color: "text-destructive"
      },
      after: {
        icon: Shield,
        text: "Prática blindada com criptografia de ponta a ponta e LGPD.",
        color: "text-secondary"
      }
    },
    {
      before: {
        icon: X,
        text: "Exaustão mental com a burocracia, tirando o foco do paciente.",
        color: "text-destructive"
      },
      after: {
        icon: Brain,
        text: "Mais tempo e energia para o cuidado humano e excelência clínica.",
        color: "text-secondary"
      }
    },
    {
      before: {
        icon: AlertTriangle,
        text: "Dificuldade em retomar o caso com clareza na próxima sessão.",
        color: "text-destructive"
      },
      after: {
        icon: Target,
        text: "Sugestões inteligentes para o próximo atendimento e continuidade perfeita.",
        color: "text-secondary"
      }
    },
    {
      before: {
        icon: X,
        text: "Sentir que sua carreira está estagnada no operacional.",
        color: "text-destructive"
      },
      after: {
        icon: Zap,
        text: "Atuar nos níveis tático e estratégico, construindo uma carreira de impacto.",
        color: "text-secondary"
      }
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            De Sobrecarga à Maestria: 
            <span className="text-primary block mt-2">A Jornada com o SINTAGMA</span>
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            Veja como sua prática se transforma quando você abraça a tecnologia certa.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-destructive/5 border border-destructive/20 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-destructive mb-4">
                SUA REALIDADE ANTES DO SINTAGMA
              </h3>
              <p className="text-muted-foreground">
                A rotina que esgota sua energia e limita seu potencial
              </p>
            </div>
            
            <div className="bg-secondary-light border border-secondary/20 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-secondary mb-4">
                SUA REALIDADE COM O SINTAGMA
              </h3>
              <p className="text-muted-foreground">
                A transformação que liberta sua excelência clínica
              </p>
            </div>
          </div>
          
          {/* Comparisons */}
          <div className="space-y-6">
            {comparisons.map((comparison, index) => (
              <div key={index} className="grid lg:grid-cols-2 gap-8">
                {/* Before */}
                <div className="bg-white rounded-2xl p-6 shadow-soft border border-destructive/10 hover:shadow-medium transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-2 bg-destructive/10 rounded-full">
                      <comparison.before.icon className={`w-5 h-5 ${comparison.before.color}`} />
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {comparison.before.text}
                    </p>
                  </div>
                </div>
                
                {/* After */}
                <div className="bg-white rounded-2xl p-6 shadow-soft border border-secondary/20 hover:shadow-medium transition-all duration-300 hover:scale-105">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-2 bg-secondary/10 rounded-full">
                      <comparison.after.icon className={`w-5 h-5 ${comparison.after.color}`} />
                    </div>
                    <p className="text-foreground leading-relaxed font-medium">
                      {comparison.after.text}
                    </p>
                  </div>
                  
                  {/* Sparkle effect */}
                  <div className="mt-4 flex justify-end">
                    <div className="flex gap-1">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className={`w-2 h-2 bg-secondary rounded-full animate-pulse`} style={{animationDelay: `${i * 0.2}s`}}></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Arrow indicator */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-4 bg-white rounded-full px-8 py-4 shadow-medium">
              <span className="text-muted-foreground font-medium">Sua transformação</span>
              <div className="flex gap-2">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{animationDelay: `${i * 0.3}s`}}></div>
                ))}
              </div>
              <span className="font-bold text-primary">começa hoje!</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
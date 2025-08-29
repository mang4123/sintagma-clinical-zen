import { Mic, Brain, FileCheck, Play, Lock, Zap } from "lucide-react";

export const HowItWorksSection = () => {
  const steps = [
    {
      icon: Mic,
      number: "01",
      title: "Grave com Segurança",
      subtitle: "(e discrição!)",
      description: "Inicie a gravação da sua consulta diretamente no aplicativo (presencial ou online via Zoom/Google Meet). A criptografia acontece de ponta a ponta, em tempo real, no seu dispositivo.",
      features: ["Gravação discreta", "Criptografia em tempo real", "Compatível com consultas online"],
      color: "bg-primary"
    },
    {
      icon: Brain,
      number: "02", 
      title: "De Áudio a Inteligência Clínica",
      subtitle: "",
      description: "Ao finalizar a sessão, nossa IA transcreve o áudio e já começa a analisar as informações, identificando pontos cruciais e sugerindo insights para o seu prontuário.",
      features: ["Transcrição automática", "Análise inteligente", "Identificação de pontos-chave"],
      color: "bg-secondary"
    },
    {
      icon: FileCheck,
      number: "03",
      title: "Prontuário Impecável, Insights Poderosos",
      subtitle: "",
      description: "O SINTAGMA gera o prontuário completo para você, com base em modelos personalizáveis e sugestões inteligentes para o próximo atendimento. Revise, complemente se desejar, e tenha tudo pronto em minutos!",
      features: ["Modelos personalizáveis", "Sugestões para próxima sessão", "Pronto em minutos"],
      color: "bg-gradient-primary"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            <span className="text-primary">SINTAGMA:</span> Excelência Descomplicada
            <span className="block mt-2">Sua Clínica em 3 Passos Simples</span>
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            Nós sabemos que você precisa de praticidade. O SINTAGMA foi pensado para se integrar 
            à sua rotina sem esforço, liberando você para o que mais importa. 
            <span className="font-semibold text-primary">
              Porque quem atende... sabe o que outro profissional precisa.
            </span>
          </p>
        </div>
        
        <div className="space-y-16">
          {steps.map((step, index) => (
            <div key={index} className={`relative ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} lg:flex items-center gap-16`}>
              {/* Content */}
              <div className="lg:w-1/2 space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`${step.color} text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-xl`}>
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-foreground">
                      {step.title}
                      {step.subtitle && <span className="text-primary block text-xl font-normal">{step.subtitle}</span>}
                    </h3>
                  </div>
                </div>
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {step.description}
                </p>
                
                <div className="space-y-3">
                  {step.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-foreground font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Visual */}
              <div className="lg:w-1/2 mt-8 lg:mt-0">
                <div className="relative bg-white rounded-3xl p-8 shadow-medium hover:shadow-strong transition-all duration-300">
                  <div className={`${step.color} rounded-2xl p-8 text-white text-center relative overflow-hidden`}>
                    <div className="relative z-10">
                      <step.icon className="w-16 h-16 mx-auto mb-4" />
                      <div className="text-6xl font-bold opacity-20 absolute top-4 right-4">
                        {step.number}
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                  </div>
                  
                  {/* Floating indicators */}
                  {step.number === "01" && (
                    <div className="absolute -top-4 -right-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-full font-semibold shadow-medium flex items-center gap-2">
                      <Lock className="w-4 h-4" />
                      Seguro
                    </div>
                  )}
                  
                  {step.number === "02" && (
                    <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full font-semibold shadow-medium flex items-center gap-2">
                      <Zap className="w-4 h-4" />
                      Inteligente
                    </div>
                  )}
                  
                  {step.number === "03" && (
                    <div className="absolute -top-4 -right-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-full font-semibold shadow-medium flex items-center gap-2">
                      <Play className="w-4 h-4" />
                      Pronto!
                    </div>
                  )}
                </div>
              </div>
              
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute left-1/2 -bottom-8 w-px h-16 bg-gradient-to-b from-primary to-transparent transform -translate-x-1/2"></div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-medium max-w-2xl mx-auto">
            <p className="text-xl font-semibold text-primary mb-4">
              "Ele não pensa por você, ele organiza para que você possa pensar melhor."
            </p>
            <p className="text-muted-foreground">
              A tecnologia mais avançada a serviço do que você tem de mais humano.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
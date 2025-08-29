import { Button } from "@/components/ui/button";
import { Clock, TrendingUp, BookOpen, Heart, Target, Star } from "lucide-react";

export const BenefitsSection = () => {
  const benefits = [
    {
      icon: Clock,
      title: "TEMPO: Produtividade Sem Sobrecarga",
      highlight: "25 minutos economizados por paciente",
      description: "Com o SINTAGMA, você economiza até 25 minutos por paciente. Imagine isso em 15 pacientes por semana: são mais de 6 horas semanais liberadas!",
      details: "Esse tempo tem um valor inestimável. É mais do que dinheiro; é saúde mental, é oportunidade. Você pode usá-lo para descansar, estudar mais a fundo seus casos, desenvolver novos projetos para sua carreira, ou simplesmente para ter mais vida pessoal.",
      color: "bg-primary"
    },
    {
      icon: TrendingUp,
      title: "CARREIRA: Posicionamento e Valorização",
      highlight: "Da operação à estratégia",
      description: "O profissional que cresce com consistência não vive preso ao operacional. Ele usa o tempo com estratégia, tecnologia e visão.",
      details: "Liberar horas da sua semana não é só sobre descansar; é sobre ter tempo para evoluir, construir sua própria estrutura e posicionamento, e ver sua clínica como um projeto de impacto.",
      color: "bg-secondary"
    },
    {
      icon: BookOpen,
      title: "ATUALIZAÇÃO: Estudo Baseado em Evidências",
      highlight: "Seu prontuário pode te ensinar mais que o Instagram",
      description: "Imagine um sistema que, além de organizar tudo da sessão, ainda te envia artigos, leituras e estudos com base nas queixas do seu paciente.",
      details: "Atualização automática. Evidência no dia a dia. Sem precisar correr atrás.",
      color: "bg-gradient-primary"
    },
    {
      icon: Heart,
      title: "IMPACTO TERAPÊUTICO: Melhoria da Escuta",
      highlight: "Você escuta o paciente ou divide atenção?",
      description: "Quando você não precisa anotar, sobra escuta. Quando não precisa lembrar de tudo, sobra presença.",
      details: "Um software pode cuidar do que é técnico, pra você focar no que é humano. Aumente o impacto das suas sessões com tecnologia a favor da escuta.",
      color: "bg-gradient-secondary"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Sua Prática Transformada: 
            <span className="text-primary block mt-2">
              SINTAGMA te Devolve Tempo, Impulsiona Sua Carreira e Eleva Seu Impacto
            </span>
          </h2>
          
          <div className="bg-accent rounded-2xl p-8">
            <p className="text-xl font-semibold text-primary mb-4">
              "Não vendemos software, vendemos liberdade, segurança, autoridade e maestria."
            </p>
            <p className="text-lg text-muted-foreground">
              Com o SINTAGMA, você vai experimentar:
            </p>
          </div>
        </div>
        
        <div className="space-y-16">
          {benefits.map((benefit, index) => (
            <div key={index} className={`${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} lg:flex items-center gap-16`}>
              {/* Content */}
              <div className="lg:w-1/2 space-y-6">
                <div className="flex items-start gap-4">
                  <div className={`${benefit.color} text-white rounded-2xl p-4 shadow-medium`}>
                    <benefit.icon className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
                      {benefit.title}
                    </h3>
                    <div className="bg-secondary-light rounded-lg px-4 py-2 inline-block">
                      <span className="text-secondary font-semibold">{benefit.highlight}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-lg text-foreground leading-relaxed font-medium">
                  {benefit.description}
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.details}
                </p>
                
                {index === 0 && (
                  <div className="bg-primary-light rounded-xl p-6 border border-primary/20">
                    <div className="flex items-center gap-3 mb-3">
                      <Target className="w-5 h-5 text-primary" />
                      <span className="font-semibold text-primary">ROI Calculado:</span>
                    </div>
                    <p className="text-foreground">
                      O SINTAGMA não é um gasto, é um investimento inteligente na sua própria carreira, 
                      com um retorno muito maior do que o valor mensal. 
                      <span className="font-semibold text-primary">Quanto você tem investido em você, hoje?</span>
                    </p>
                  </div>
                )}
              </div>
              
              {/* Visual */}
              <div className="lg:w-1/2 mt-8 lg:mt-0">
                <div className="bg-gradient-subtle rounded-3xl p-8 shadow-soft hover:shadow-medium transition-all duration-300">
                  <div className={`${benefit.color} rounded-2xl p-8 text-white relative overflow-hidden`}>
                    <div className="relative z-10 text-center">
                      <benefit.icon className="w-16 h-16 mx-auto mb-4" />
                      <div className="text-2xl font-bold mb-2">{benefit.highlight}</div>
                      <div className="opacity-75">{benefit.description.substring(0, 50)}...</div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                    <div className="absolute -bottom-4 -right-4 opacity-10 text-8xl font-bold">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Button variant="cta" size="lg" className="text-lg px-8 py-6">
            Transforme Sua Prática Agora!
          </Button>
        </div>
      </div>
    </section>
  );
};
import { Button } from "@/components/ui/button";
import { Sparkles, Shield, Brain, Clock, TrendingUp, BookOpen } from "lucide-react";
import transformationImage from "@/assets/transformation-visual.jpg";

export const SolutionSection = () => {
  const benefits = [
    {
      icon: Brain,
      title: "Transforme seu Prontuário em Ferramenta de Decisão",
      description: "Não é uma obrigação, é um aliado que te devolve clareza e sustenta seu raciocínio clínico."
    },
    {
      icon: Sparkles,
      title: "Garanta Acuidade e Profundidade",
      description: "Tenha acesso a todos os detalhes e nuances da consulta, organizados e analisados por uma IA treinada com o melhor das expertises clínicas."
    },
    {
      icon: Shield,
      title: "Blinde Sua Prática com Segurança Inabalável",
      description: "Com criptografia de ponta a ponta e total conformidade com a LGPD, seus registros são invioláveis."
    },
    {
      icon: Clock,
      title: "Liberte Sua Mente para o Essencial",
      description: "A IA cuida dos registros, para que você possa focar 100% na escuta, no acolhimento e na relação terapêutica."
    },
    {
      icon: BookOpen,
      title: "Atualize Sua Prática Automaticamente",
      description: "Imagine um sistema que, além de organizar, ainda te envia artigos, leituras e estudos com base nas queixas do seu paciente."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            <span className="text-primary">SINTAGMA:</span> Onde a Inteligência Artificial 
            <span className="block mt-2">Pensa COM Você, para que Você Possa Pensar Melhor</span>
          </h2>
          
          <div className="bg-primary-light rounded-2xl p-8 mb-8">
            <p className="text-lg text-foreground leading-relaxed">
              <strong>SINTAGMA</strong> significa a arte de dar forma e sentido a conjuntos de palavras, 
              transformando-as em unidades coesas que revelam a estrutura fundamental de uma ideia, 
              de uma emoção, da própria narrativa de um ser. E é exatamente isso que nosso aplicativo 
              faz com suas consultas.
            </p>
          </div>
          
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Desenvolvido por profissionais de saúde mental para profissionais de saúde mental, 
            o SINTAGMA vai muito além de um simples 'organizador de agenda' ou 'gerador de lero-lero' 
            tecnológico.
          </p>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <img
                src={transformationImage}
                alt="Transformação de áudio em prontuário inteligente"
                className="w-full h-auto rounded-2xl shadow-medium"
              />
            </div>
            
            <div className="text-left space-y-6">
              <div className="bg-secondary-light rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-secondary mb-4">
                  A tecnologia já não é mais 'futuro distante'
                </h3>
                <p className="text-foreground">
                  O teleatendimento, antes criticado, virou regra e impulsionou muitas práticas. 
                  A Inteligência Artificial é o presente, e sua adoção, uma questão de 
                  responsabilidade profissional.
                </p>
              </div>
              
              <div className="bg-accent rounded-2xl p-6">
                <p className="text-lg font-semibold text-primary mb-2">
                  "Nós não criamos um lugar pra anotar."
                </p>
                <p className="text-foreground">
                  Criamos um espaço para raciocinar com ética, profundidade e direção. 
                  O SINTAGMA é a ferramenta que te eleva da operação à estratégia.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-gradient-subtle rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary/10 rounded-full mr-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center bg-gradient-primary rounded-2xl p-12 shadow-strong">
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-2xl font-bold text-white mb-4">
              "Você não está sendo substituído. Você está sendo sustentado."
            </p>
            <p className="text-xl text-primary-light leading-relaxed">
              O SINTAGMA não veio ocupar o seu lugar, veio te devolver o seu tempo – 
              seu único bem findável.
            </p>
            <Button variant="cta" size="lg" className="text-lg px-8 py-6">
              Transforme Sua Prática Agora!
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
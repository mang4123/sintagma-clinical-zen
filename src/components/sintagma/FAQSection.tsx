import { useState } from "react";
import { ChevronDown, ChevronUp, Brain, Shield, Zap, Smartphone, Clock, TrendingUp } from "lucide-react";

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      icon: Brain,
      question: "O SINTAGMA substitui meu julgamento clínico?",
      answer: "Absolutamente não! O SINTAGMA é seu copiloto inteligente. Ele organiza, estrutura e te dá insights, para que você possa pensar melhor, organizar melhor suas orientações e raciocinar com mais profundidade. Sua decisão, sua escuta, sua sensibilidade – isso é insubstituível."
    },
    {
      icon: Shield,
      question: "Meus dados estarão seguros? E a LGPD?",
      answer: "Segurança não é promessa de marketing. É requisito ético. Seus dados são criptografados de ponta a ponta e permanecem exclusivamente no seu dispositivo. Nossa equipe não tem acesso ao seu conteúdo clínico. Você tem o controle total e completo."
    },
    {
      icon: Zap,
      question: "O que diferencia o SINTAGMA dos 'geradores de lero-lero' de IA?",
      answer: "Não estamos falando de pedir para uma IA genérica 'organizar um atendimento para TDAH'. O SINTAGMA é um ambiente pensado em uma prática clínica validada e efetiva, com uma IA treinada com o melhor das expertises em saúde mental. Nossa IA não é de fonte aberta e suas referências bibliográficas passam por curadoria rigorosa para garantir a precisão e evitar 'alucinações', diferente de outras IAs genéricas. Ele entende a profundidade da sua clínica, não a rotina."
    },
    {
      icon: Smartphone,
      question: "Preciso ser um expert em tecnologia para usar?",
      answer: "De jeito nenhum! O SINTAGMA foi desenhado para ser intuitivo e fácil de usar. Nosso objetivo é descomplicar a tecnologia, para que você possa focar no que faz de melhor."
    },
    {
      icon: Clock,
      question: "Como o SINTAGMA me ajuda a ter mais tempo se eu já tenho uma agenda lotada?",
      answer: "Você atende. Você cuida. Você resolve. O SINTAGMA resolve por você a parte mais chata: a documentação. Liberando até 6 horas semanais, esse tempo não é para você atender mais, necessariamente. É para você estudar, criar, planejar, descansar, ou construir uma carreira de impacto. O benefício está na tela, mas a transformação real acontece nos bastidores da sua rotina."
    },
    {
      icon: TrendingUp,
      question: "Funciona para todas as especialidades da saúde mental?",
      answer: "Sim! O SINTAGMA foi desenvolvido especificamente para Psicólogos, Psiquiatras e Nutricionistas. Nossos modelos de prontuário são flexíveis e personalizáveis para se adaptar à sua abordagem específica, seja qual for sua linha teórica ou especialidade."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Suas Dúvidas, Nossas Respostas – 
            <span className="text-primary block mt-2">Para Você Decidir com Clareza</span>
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            As perguntas mais frequentes de profissionais que, como você, buscam excelência 
            e segurança na sua prática clínica.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gradient-subtle rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-8 flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 rounded-2xl"
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className="p-3 bg-primary/10 rounded-full flex-shrink-0">
                    <faq.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground pr-4">
                    {faq.question}
                  </h3>
                </div>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-primary" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-primary" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-8">
                  <div className="ml-16 bg-white rounded-xl p-6 shadow-soft border border-primary/10">
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Additional help */}
        <div className="text-center mt-16">
          <div className="bg-primary-light rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="text-lg text-foreground mb-6">
              Nossa equipe de especialistas está pronta para esclarecer qualquer questão 
              sobre segurança, funcionalidades ou adequação à sua prática.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:contato@sintagma.com.br" 
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Falar com Especialista
              </a>
              <a 
                href="https://wa.me/5511999999999" 
                className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
              >
                WhatsApp Suporte
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
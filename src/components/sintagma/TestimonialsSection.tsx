import { Star, Quote, Clock, Shield, Brain } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Dr. Pedro Freitas Melo",
      role: "Psiquiatra e Professor",
      image: "/placeholder.svg", // Will be replaced with actual image
      content: "Como psiquiatra e professor, eu vivia a dor dos prontuários. Perdendo tempo, detalhes cruciais e sentindo a energia drenar. O SINTAGMA nasceu dessa dor e é a ferramenta que eu, Pedro Freitas Melo, uso e confio para elevar minha prática ao máximo. Não é só um software, é a liberdade de ser o profissional que sempre quis ser: focado no paciente, seguro e com registros impecáveis.",
      highlight: "Fundador do SINTAGMA",
      color: "bg-primary"
    },
    {
      name: "Dra. Marina Silva",
      role: "Psicóloga Clínica",
      image: "/placeholder.svg",
      content: "Com o SINTAGMA, recuperei 2 horas do meu dia! Agora, meus prontuários são completos e claros, e posso dedicar esse tempo para meus pacientes ou para minha família. A segurança dos dados é um alívio enorme.",
      highlight: "2 horas recuperadas diariamente",
      color: "bg-secondary"
    },
    {
      name: "Dr. Carlos Roberto",
      role: "Psiquiatra",
      image: "/placeholder.svg", 
      content: "A IA do SINTAGMA é incrível! Ela me ajuda a não perder nada e ainda me dá insights para a próxima sessão. Minha acurácia diagnóstica melhorou muito. É um divisor de águas.",
      highlight: "Melhor acurácia diagnóstica",
      color: "bg-gradient-primary"
    }
  ];

  const stats = [
    {
      icon: Clock,
      number: "6+",
      label: "horas recuperadas por semana",
      description: "pelos nossos usuários"
    },
    {
      icon: Shield,
      number: "100%",
      label: "conformidade com LGPD",
      description: "garantida desde o primeiro dia"
    },
    {
      icon: Brain,
      number: "1000+",
      label: "insights gerados",
      description: "pela IA a cada mês"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Quem Já Conhece a Transformação 
            <span className="text-primary block mt-2">do SINTAGMA</span>
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            Profissionais que escolheram elevar sua prática e nunca mais olharam para trás.
          </p>
        </div>
        
        {/* Testimonials */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-medium hover:shadow-strong transition-all duration-300 hover:scale-105">
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-lg">{testimonial.name}</h4>
                  <p className="text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              {/* Quote */}
              <div className="relative mb-6">
                <Quote className="w-8 h-8 text-primary/20 absolute -top-2 -left-2" />
                <p className="text-muted-foreground leading-relaxed italic pl-6">
                  "{testimonial.content}"
                </p>
              </div>
              
              {/* Highlight */}
              <div className={`${testimonial.color} text-white rounded-xl p-4 text-center`}>
                <div className="font-bold text-lg">{testimonial.highlight}</div>
                {index === 0 && (
                  <div className="text-sm opacity-90 mt-1">
                    "A dor que virou solução"
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Statistics */}
        <div className="bg-white rounded-3xl p-12 shadow-strong">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            Resultados que Falam por Si
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-6">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="font-semibold text-foreground text-lg mb-2">{stat.label}</div>
                <div className="text-muted-foreground">{stat.description}</div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <div className="bg-secondary-light rounded-2xl p-6 max-w-2xl mx-auto">
              <p className="text-lg font-semibold text-secondary">
                "Os números são importantes, mas a transformação é pessoal."
              </p>
              <p className="text-muted-foreground mt-2">
                Cada profissional encontra no SINTAGMA a sua própria forma de elevar a prática.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
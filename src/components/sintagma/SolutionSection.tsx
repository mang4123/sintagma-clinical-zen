import { Button } from "@/components/ui/button";
import sintagmaLogo from "@/assets/sintagma-logo.png";

export const SolutionSection = () => {
  return (
    <section id="solucao" className="py-20 bg-gradient-to-br from-primary-light/10 to-secondary-light/10">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-16">
          
          {/* Section Header */}
          <div className="text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              <img
                src={sintagmaLogo}
                alt="SINTAGMA"
                className="inline-block h-12 md:h-16 mx-3"
              />
              <br className="md:hidden" />
              Onde a Inteligência Artificial Pensa COM Você
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              para que Você Possa Pensar Melhor.
            </p>
          </div>

          {/* Key Message */}
          <div className="bg-white/70 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-medium border border-white/50">
            <div className="space-y-6 text-center">
              <p className="text-lg md:text-xl text-foreground leading-relaxed">
                <strong>SINTAGMA</strong> significa a arte de dar forma e sentido a conjuntos de palavras, 
                transformando-as em unidades coesas que revelam a estrutura fundamental de uma ideia, 
                de uma emoção, da própria narrativa de um ser.
              </p>
              
              <p className="text-lg md:text-xl text-foreground leading-relaxed">
                E é exatamente isso que nosso aplicativo faz com suas consultas.
              </p>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-soft">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-primary w-12 h-12 rounded-full flex items-center justify-center text-white font-bold">
                    🎯
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Transforme seu Prontuário em Ferramenta de Decisão
                    </h3>
                    <p className="text-muted-foreground">
                      Não é uma obrigação, é um aliado que te devolve clareza e sustenta seu raciocínio clínico.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-soft">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-primary w-12 h-12 rounded-full flex items-center justify-center text-white font-bold">
                    🔍
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Garanta Acuidade e Profundidade
                    </h3>
                    <p className="text-muted-foreground">
                      Tenha acesso a todos os detalhes e nuances da consulta, organizados e analisados 
                      por uma IA treinada com o melhor das expertises clínicas.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-soft">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-primary w-12 h-12 rounded-full flex items-center justify-center text-white font-bold">
                    🛡️
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Blinde Sua Prática com Segurança Inabalável
                    </h3>
                    <p className="text-muted-foreground">
                      Com criptografia de ponta a ponta e total conformidade com a LGPD, 
                      seus registros são invioláveis.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-soft">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-secondary w-12 h-12 rounded-full flex items-center justify-center text-white font-bold">
                    ⚡
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Liberte Sua Mente para o Essencial
                    </h3>
                    <p className="text-muted-foreground">
                      A IA cuida dos registros, para que você possa focar 100% na escuta, 
                      no acolhimento e na relação terapêutica – o que você é insubstituível.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-soft">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-secondary w-12 h-12 rounded-full flex items-center justify-center text-white font-bold">
                    📚
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Atualize Sua Prática Automaticamente
                    </h3>
                    <p className="text-muted-foreground">
                      Imagine um sistema que, além de organizar, ainda te envia artigos, 
                      leituras e estudos com base nas queixas do seu paciente.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-2xl border border-primary/20">
                <h3 className="text-xl font-bold text-foreground mb-3 text-center">
                  Você não está sendo substituído. Você está sendo sustentado.
                </h3>
                <p className="text-muted-foreground text-center">
                  <img
                    src={sintagmaLogo}
                    alt="SINTAGMA"
                    className="inline-block h-6 mx-2"
                  />
                  não veio ocupar o seu lugar, veio te devolver o seu tempo – 
                  seu único bem findável.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-gradient-primary text-white px-8 py-4 rounded-full shadow-strong hover:shadow-glow transition-all duration-300"
            >
              Transforme Sua Prática Agora!
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
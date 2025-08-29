import { Shield, Lock, Eye, Database, UserCheck, FileX, Check, X } from "lucide-react";

export const SecuritySection = () => {
  const neverDo = [
    {
      icon: FileX,
      text: "Não vamos armazenar seus áudios."
    },
    {
      icon: Eye,
      text: "Não vamos ter acesso aos seus conteúdos clínicos."
    },
    {
      icon: Database,
      text: "Não vamos vender ou usar suas informações para outros fins."
    }
  ];

  const guarantees = [
    {
      icon: Shield,
      title: "Criptografia de Ponta a Ponta",
      description: "Tudo que for gravado ou transcrito é criptografado e armazenado exclusivamente na sua conta, no seu dispositivo."
    },
    {
      icon: UserCheck,
      title: "Controle Total é Seu",
      description: "Você tem o poder de deletar sessões ou dados a qualquer momento. Um botão de encerramento de conta garante que todo o conteúdo será apagado do sistema, sob seu comando."
    },
    {
      icon: Lock,
      title: "Conformidade Completa com a LGPD",
      description: "Desenvolvido para atender e superar os mais rigorosos padrões de proteção de dados."
    },
    {
      icon: Database,
      title: "IA Responsável e Curada",
      description: "Nossa inteligência artificial não 'lê' o conteúdo como uma pessoa faria; ela processa para organizar e apoiar a interpretação. Além disso, nossa IA não é de fonte aberta e suas referências bibliográficas passam por curadoria para garantir a precisão e evitar 'alucinações'."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Sua Confidencialidade Não É Um Detalhe. 
            <span className="text-primary block mt-2">É a Base do SINTAGMA.</span>
          </h2>
          
          <div className="bg-primary-light rounded-2xl p-8 mb-8">
            <p className="text-lg text-foreground leading-relaxed">
              Em uma profissão onde a confiança é tudo, a segurança dos seus dados e dos seus 
              pacientes é inegociável. Por isso, no SINTAGMA, a confidencialidade não é uma 
              promessa de marketing – é um requisito ético e a base do nosso sistema.
            </p>
          </div>
          
          <div className="bg-secondary-light rounded-2xl p-6">
            <p className="text-lg font-semibold text-secondary mb-2">
              Escolher uma IA hoje não é mais opcional,
            </p>
            <p className="text-foreground">
              mas essa escolha precisa ser feita com muita responsabilidade.
            </p>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          {/* What we NEVER do */}
          <div>
            <h3 className="text-3xl font-bold text-destructive mb-8 text-center">
              O que a gente NUNCA vai fazer com os dados das suas sessões:
            </h3>
            
            <div className="space-y-6">
              {neverDo.map((item, index) => (
                <div key={index} className="bg-destructive/5 border border-destructive/20 rounded-2xl p-6 hover:shadow-soft transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 p-3 bg-destructive/10 rounded-full">
                      <X className="w-6 h-6 text-destructive" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <item.icon className="w-5 h-5 text-destructive" />
                        <span className="font-bold text-destructive text-lg">❌</span>
                      </div>
                      <p className="text-foreground font-medium">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* What you HAVE */}
          <div>
            <h3 className="text-3xl font-bold text-secondary mb-8 text-center">
              O que você TEM no SINTAGMA:
            </h3>
            
            <div className="space-y-6">
              {guarantees.map((guarantee, index) => (
                <div key={index} className="bg-secondary-light border border-secondary/20 rounded-2xl p-6 hover:shadow-soft transition-all duration-300 hover:scale-105">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 bg-secondary/10 rounded-full">
                      <guarantee.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <Check className="w-5 h-5 text-secondary" />
                        <span className="font-bold text-secondary text-lg">✅</span>
                        <h4 className="font-bold text-foreground">{guarantee.title}</h4>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{guarantee.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom message */}
        <div className="text-center">
          <div className="bg-gradient-primary rounded-2xl p-12 shadow-strong max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Shield className="w-12 h-12 text-white" />
              <Lock className="w-12 h-12 text-white" />
              <UserCheck className="w-12 h-12 text-white" />
            </div>
            <p className="text-2xl font-bold text-white mb-4">
              "Essa não é uma ferramenta genérica de tecnologia."
            </p>
            <p className="text-xl text-primary-light leading-relaxed">
              É um apoio clínico criado por quem entende ética, escuta e confidencialidade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
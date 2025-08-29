import { AlertTriangle, Clock, Brain, FileText, Zap, TrendingDown } from "lucide-react";

export const ProblemSection = () => {
  const problems = [
    {
      icon: AlertTriangle,
      title: "A Angústia de Parecer 'Ruim'",
      description: "O medo de que a falta de organização e um detalhe perdido passem uma imagem de desleixo, afetando sua reputação e autoconfiança."
    },
    {
      icon: Brain,
      title: "A Perda do Fio da Meada",
      description: "Não se trata de 'esquecer', mas de perder insights valiosos que poderiam ser a chave para o avanço de um caso complexo."
    },
    {
      icon: FileText,
      title: "A Falta de Clareza e Continuidade",
      description: "Chegar à sessão seguinte com prontuários superficiais, dependendo unicamente de uma memória que pode falhar."
    },
    {
      icon: Clock,
      title: "Tempo que Se Dissolve",
      description: "Gastar horas preciosas no pós-consulta, organizando prontuários e gerando documentos, sentindo que esse tempo não se traduz em mais acurácia."
    },
    {
      icon: Zap,
      title: "A Exaustão Silenciosa",
      description: "O acúmulo de tarefas administrativas gera um cansaço mental que rouba sua energia e presença genuína na próxima consulta."
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Você Sabia que o Maior Inimigo da sua Excelência Clínica...
            <span className="text-primary block mt-2">É a Rotina que Você Vive Hoje?</span>
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Você, que se dedica à escuta e à complexidade da mente humana, sabe que ser um bom 
            profissional vai muito além do consultório. A grande mentira é achar que basta atender 
            bem para ter uma carreira de sucesso.
          </p>
          
          <div className="bg-destructive/10 border border-destructive/20 rounded-2xl p-6">
            <p className="text-lg text-foreground">
              A realidade é que o profissional da saúde mental enfrenta uma série de dores invisíveis 
              que minam sua energia e comprometem sua capacidade de entregar a excelência que seu 
              paciente merece:
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {problems.map((problem, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-destructive/10 rounded-full mr-4">
                  <problem.icon className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{problem.title}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center bg-white rounded-2xl p-8 shadow-medium max-w-4xl mx-auto">
          <p className="text-2xl font-semibold text-primary mb-4">
            "Você foi formado para cuidar de gente, não para brigar com papelada."
          </p>
          <p className="text-xl text-muted-foreground">
            Sua carreira não merece ficar estagnada na 'esteira infinita de tarefas'.
          </p>
        </div>
      </div>
    </section>
  );
};
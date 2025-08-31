import sintagmaLogo from "@/assets/sintagma-logo.png";

export const ProblemSection = () => {
  return (
    <section id="problema" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-16">
          
          {/* Section Header */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Sua rotina no consultório está sobrecarregada?
            </h2>
            <p className="text-xl text-muted-foreground">
              Descubra como ganhar mais tempo para seus pacientes (e para você!).
            </p>
          </div>

          {/* Problems Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-red-50 to-red-100/50 p-8 rounded-2xl">
              <div className="text-red-500 text-4xl mb-4">😰</div>
              <h3 className="text-xl font-semibold text-red-700 mb-3">
                A Angústia de Parecer "Ruim"
              </h3>
              <p className="text-red-600">
                O medo de que a falta de organização e um detalhe perdido passem uma imagem de desleixo, 
                afetando sua reputação e autoconfiança.
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 p-8 rounded-2xl">
              <div className="text-amber-500 text-4xl mb-4">🧵</div>
              <h3 className="text-xl font-semibold text-amber-700 mb-3">
                A Perda do Fio da Meada
              </h3>
              <p className="text-amber-600">
                Perder insights valiosos que poderiam ser a chave para o avanço de um caso complexo. 
                Você atende, reflete, conduz… mas e o registro?
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 p-8 rounded-2xl">
              <div className="text-blue-500 text-4xl mb-4">⏰</div>
              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                Tempo que Se Dissolve
              </h3>
              <p className="text-blue-600">
                Gastar horas preciosas no pós-consulta, organizando prontuários e gerando documentos, 
                sentindo que esse tempo não se traduz em mais acurácia diagnóstica.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 p-8 rounded-2xl md:col-span-2 lg:col-span-1">
              <div className="text-purple-500 text-4xl mb-4">😴</div>
              <h3 className="text-xl font-semibold text-purple-700 mb-3">
                A Exaustão Silenciosa
              </h3>
              <p className="text-purple-600">
                O acúmulo de tarefas administrativas e a preocupação constante com a integridade 
                dos registros geram um cansaço que rouba sua presença genuína.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 p-8 rounded-2xl md:col-span-2">
              <div className="text-gray-500 text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-semibold text-gray-700 mb-3">
                A Falta de Clareza e Continuidade
              </h3>
              <p className="text-gray-600">
                Chegar à sessão seguinte com prontuários superficiais, dependendo unicamente de uma memória 
                que pode falhar e tornar a retomada do tratamento menos eficaz.
              </p>
            </div>
          </div>

          {/* Bottom Message */}
          <div className="bg-gradient-to-r from-primary-light/20 to-secondary-light/20 p-8 rounded-2xl">
            <p className="text-xl font-medium text-foreground">
              Você foi formado para cuidar de gente, não para brigar com papelada. 
              <br className="hidden md:block" />
              Sua carreira não merece ficar estagnada na 'esteira infinita de tarefas'.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
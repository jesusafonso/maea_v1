import React, { useState } from "react";
import contactosFundo from "assets/img/contactos_fundos.jpg";

export default function Treinamento() {
  const [openCard, setOpenCard] = useState(null);

  const treinamentos = [
    {
      id: "integracao",
      title: "Treinamento de Integração (Onboarding)",
      content: (
        <div>
          Apresenta aos novos colaboradores a estrutura da organização, seus valores, políticas internas, normas ISO aplicáveis e comportamentos esperados. Inclui tour pelas áreas, entrega de manuais, introdução ao SGQ e esclarecimento sobre missão institucional.
        </div>
      )
    },
    {
      id: "tecnico",
      title: "Treinamento Técnico (Hard Skills)",
      content: (
        <div>
          Focado na capacitação prática em ferramentas, normas e procedimentos específicos da função. Pode incluir cursos sobre ERPs, softwares operacionais, leitura de norma ISO/IEC 17021-1, manuseio de equipamentos ou operação de sistemas internos. Ideal para cargos técnicos e administrativos.
        </div>
      )
    },
    {
      id: "comportamental",
      title: "Treinamento Comportamental (Soft Skills)",
      content: (
        <div>
          Desenvolve habilidades interpessoais fundamentais ao ambiente corporativo, como comunicação não violenta, trabalho em equipe, inteligência emocional, gestão de tempo e resolução de conflitos. Frequentemente usado em planos de desenvolvimento contínuo.
        </div>
      )
    },
    {
      id: "lideranca",
      title: "Treinamento de Liderança",
      content: (
        <div>
          Direcionado a gestores, coordenadores e futuros líderes. Envolve temas como visão estratégica, gestão de equipes, motivação, tomada de decisão, cultura de feedback, liderança ética, e condução de reuniões produtivas. Pode incluir sessões práticas e coaching executivo.
        </div>
      )
    },
    {
      id: "motivacional",
      title: "Treinamento Motivacional",
      content: (
        <div>
          Visa elevar o engajamento dos colaboradores, reforçando propósito, alinhamento com os valores da organização, autoestima e colaboração. Pode envolver palestras inspiradoras, dinâmicas em grupo, reconhecimento institucional e estímulo à iniciativa.
        </div>
      )
    },
    {
      id: "corporativo",
      title: "Treinamento Corporativo",
      content: (
        <div>
          Abrange um conjunto amplo de práticas para fortalecer a cultura organizacional, unificar processos entre setores e promover alinhamento com objetivos institucionais. Inclui treinamento em missão, visão, estratégia e cumprimento de políticas internas.
        </div>
      )
    },
    {
      id: "job_rotation",
      title: "Treinamento de Troca de Papéis (Job Rotation)",
      content: (
        <div>
          Permite que os colaboradores vivenciem outras funções, conhecendo diferentes departamentos e processos. Estimula visão sistêmica, empatia entre áreas, descoberta de talentos ocultos e desenvolvimento multifuncional. Fundamental para formar futuros líderes e gestores.
        </div>
      )
    },
    {
      id: "on_the_job",
      title: "Treinamento On-the-Job",
      content: (
        <div>
          Realizado diretamente no ambiente de trabalho, com acompanhamento de mentores ou supervisores. O colaborador aprende enquanto executa tarefas reais, com correções imediatas, checklist de desempenho e contextualização prática. Altamente eficaz para cargos operacionais.
        </div>
      )
    },
    {
      id: "online",
      title: "Treinamento Online (EaD)",
      content: (
        <div>
          Utiliza plataformas digitais para oferecer capacitações flexíveis, modulares e escaláveis. Ideal para treinar equipes remotas, padronizar conteúdos e registrar evolução. Pode incluir vídeos, quizzes, fóruns, avaliações automatizadas e trilhas de conhecimento.
        </div>
      )
    },
    {
      id: "coaching",
      title: "Coaching Corporativo",
      content: (
        <div>
          Processo estruturado de desenvolvimento individual focado em objetivos profissionais, comportamentais ou de liderança. O colaborador recebe apoio personalizado para superar desafios, definir metas claras e aprimorar a performance. Pode ser interno ou com coach externo.
        </div>
      )
    },
    {
      id: "gamificacao",
      title: "Gamificação",
      content: (
        <div>
          Usa elementos de jogos como pontos, desafios, rankings, badges e recompensas para tornar o treinamento mais envolvente e divertido. Pode ser aplicado em cursos técnicos, comportamentais ou de integração. Estimula retenção de conhecimento e participação ativa.
        </div>
      )
    },
    {
      id: "ageis",
      title: "Treinamento em Metodologias Ágeis",
      content: (
        <div>
          Foca em práticas como Scrum, Kanban, Design Thinking e Lean. Capacita equipes para trabalhar com colaboração, flexibilidade e entrega incremental. É ideal para áreas técnicas, certificação e projetos multidisciplinares em constante adaptação.
        </div>
      )
    },
    {
      id: "workshops",
      title: "Palestras e Workshops",
      content: (
        <div>
          Ações pontuais com duração curta, conduzidas por especialistas internos ou convidados externos. Permitem abordar temas atuais, reforçar mudanças culturais, apresentar novas tecnologias ou debater questões estratégicas. Podem ser presenciais ou online.
        </div>
      )
    },
    {
      id: "just_in_time",
      title: "Aprendizagem Just-in-Time",
      content: (
        <div>
          Oferece conteúdo direcionado no momento exato em que o colaborador precisa. Ex.: tutoriais rápidos, guias interativos, vídeos explicativos acessados por QR Code na estação de trabalho ou por chatbot interno. Garante suporte imediato com foco em produtividade.
        </div>
      )
    }
  ];

  // Ícones para cada tipo de treinamento (opcional, pode ser aprimorado)
  const icons = [
    "fas fa-user-plus", "fas fa-tools", "fas fa-users", "fas fa-chalkboard-teacher", "fas fa-lightbulb", "fas fa-graduation-cap", "fas fa-random", "fas fa-briefcase", "fas fa-laptop", "fas fa-user-tie", "fas fa-gamepad", "fas fa-bolt", "fas fa-chalkboard", "fas fa-clock"
  ];

  return (
    <>
      <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{ backgroundImage: `url(${contactosFundo})` }}
        >
          <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
        </div>
        <div className="container relative mx-auto">
          <div className="flex flex-wrap items-center justify-center">
            <div className="w-full px-4 text-center">
              <div className="pr-12">
                <h1 className="text-white font-semibold text-5xl">
                  Tipos de Treinamento
                </h1>
                <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
                  Conheça os principais tipos de treinamento corporativo para desenvolvimento de equipes e crescimento organizacional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="pb-20 bg-white pt-0">
        <div className="container mx-auto px-4">
          <div className="flex flex-col mt-8 space-y-8">
            {treinamentos.map((treino, idx) => (
              <div id={treino.id} key={treino.id} className="w-full max-w-6xl mx-auto bg-gradient-to-br from-white via-white to-white rounded-2xl p-0 mb-6 shadow-lg border border-white transition-all duration-300">
                <button
                  className="flex items-center w-full px-6 py-5 bg-white rounded-xl border border-blueGray-200 shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none text-left group"
                  onClick={() => setOpenCard(openCard === treino.id ? null : treino.id)}
                  aria-expanded={openCard === treino.id}
                >
                  <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-maea-blue text-white text-2xl mr-4">
                    <i className={icons[idx % icons.length]}></i>
                  </span>
                  <span className="font-bold text-lg text-maea-blue flex-1">{treino.title}</span>
                  <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-maea-blue text-white text-2xl ml-4 transition-all duration-200"> <i className={openCard === treino.id ? 'fas fa-minus' : 'fas fa-plus'}></i> </span>
                </button>
                {openCard === treino.id && (
                  <div className="px-8 pb-8 pt-2 animate-fade-in">
                    <div className="text-blueGray-600 text-base space-y-4">
                      {treino.content}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
} 
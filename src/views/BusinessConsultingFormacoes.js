import React, { useState } from "react";
import contactosFundo from "assets/img/contactos_fundos.jpg";

export default function BusinessConsultingFormacoes() {
  const [openCard, setOpenCard] = useState(null);

  const cards = [
    {
      id: "business_consulting",
      title: "Business Consulting",
      icon: "fas fa-briefcase",
      content: (
        <div className="text-blueGray-600 text-base space-y-4">
          <p>Consultoria empresarial estratégica, gestão de mudanças, finanças, RH, inovação, qualidade e transformação digital para impulsionar o crescimento e a competitividade do seu negócio.</p>
        </div>
      )
    },
    {
      id: "excel_avancado",
      title: "Excel Avançado",
      icon: "fas fa-chart-line",
      content: (
        <div className="text-blueGray-600 text-base space-y-4">
          <p>Capacitação avançada em Microsoft Excel: fórmulas complexas, dashboards, automação com VBA, análise de dados, tabelas dinâmicas e recursos para tomada de decisão empresarial.</p>
        </div>
      )
    },
    {
      id: "powerpoint_avancado",
      title: "PowerPoint Avançado",
      icon: "fas fa-chalkboard-teacher",
      content: (
        <div className="text-blueGray-600 text-base space-y-4">
          <p>Técnicas avançadas de apresentação: design profissional, animações, integração multimídia, storytelling visual e recursos para apresentações corporativas de alto impacto.</p>
        </div>
      )
    },
    {
      id: "word_avancado",
      title: "Word Avançado",
      icon: "fas fa-file-word",
      content: (
        <div className="text-blueGray-600 text-base space-y-4">
          <p>Domínio de recursos avançados do Microsoft Word: automação de documentos, sumários, mala direta, revisão colaborativa, formatação profissional e modelos corporativos.</p>
        </div>
      )
    },
    {
      id: "powerbi_avancado",
      title: "Power BI Avançado",
      icon: "fas fa-lightbulb",
      content: (
        <div className="text-blueGray-600 text-base space-y-4">
          <p>Análise de dados e criação de dashboards interativos com Power BI: modelagem, DAX, integração de fontes, visualizações avançadas e publicação de relatórios para tomada de decisão.</p>
        </div>
      )
    }
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
                  Business Consulting &amp; Formações Profissional
                </h1>
                <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
                  Soluções completas em consultoria empresarial e formação profissional para impulsionar o crescimento e a competitividade do seu negócio.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-gray-300 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </div>

      <section className="pb-20 bg-white pt-0">
        <div className="container mx-auto px-4">
          <div className="flex flex-col mt-8 space-y-8">
            {cards.map((card) => (
              <div id={card.id} key={card.id} className="w-full max-w-6xl mx-auto bg-gradient-to-br from-white via-white to-white rounded-2xl p-0 mb-6 shadow-lg border border-white transition-all duration-300">
                <button
                  className="flex items-center w-full px-6 py-5 bg-white rounded-xl border border-blueGray-200 shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none text-left group"
                  onClick={() => setOpenCard(openCard === card.id ? null : card.id)}
                  aria-expanded={openCard === card.id}
                >
                  <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-maea-blue text-white text-2xl mr-4">
                    <i className={card.icon}></i>
                  </span>
                  <span className="font-bold text-lg text-maea-blue flex-1">{card.title}</span>
                  <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-maea-blue text-white text-2xl ml-4 transition-all duration-200"> <i className={openCard === card.id ? 'fas fa-minus' : 'fas fa-plus'}></i> </span>
                </button>
                {openCard === card.id && (
                  <div className="px-8 pb-8 pt-2 animate-fade-in">
                    <div className="text-blueGray-600 text-base space-y-4">
                      {card.content}
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
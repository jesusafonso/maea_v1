import React, { useState } from "react";
import contactosFundo from "assets/img/contactos_fundos.jpg";
import { useIntl } from "react-intl";

export default function SolucoesConsultoria() {
  const intl = useIntl();
  const [openCard, setOpenCard] = useState(null);

  const solutions = [
    {
      id: "gestao_ambiental",
      title: intl.formatMessage({ id: "consulting_environmental_management_title" }),
      icon: "fas fa-leaf",
      content: <div className="text-blueGray-600 text-base">{intl.formatMessage({ id: "consulting_environmental_management_desc" })}</div>
    },
    {
      id: "avaliacao_impacto_ambiental",
      title: intl.formatMessage({ id: "consulting_environmental_impact_title" }),
      icon: "fas fa-leaf",
      content: <div className="text-blueGray-600 text-base">{intl.formatMessage({ id: "consulting_environmental_impact_desc" })}</div>
    },
    {
      id: "auditoria_residuos",
      title: intl.formatMessage({ id: "consulting_waste_audit_title" }),
      icon: "fas fa-recycle",
      content: <div className="text-blueGray-600 text-base">{intl.formatMessage({ id: "consulting_waste_audit_desc" })}</div>
    },
    {
      id: "medicao_monitoramento_ambiental",
      title: intl.formatMessage({ id: "consulting_environmental_monitoring_title" }),
      icon: "fas fa-tint",
      content: <div className="text-blueGray-600 text-base">{intl.formatMessage({ id: "consulting_environmental_monitoring_desc" })}</div>
    },
    {
      id: "tratamento_aguas_residuais",
      title: intl.formatMessage({ id: "consulting_wastewater_treatment_title" }),
      icon: "fas fa-water",
      content: <div className="text-blueGray-600 text-base">{intl.formatMessage({ id: "consulting_wastewater_treatment_desc" })}</div>
    },
    {
      id: "auditorias_ambientais",
      title: intl.formatMessage({ id: "consulting_environmental_audit_title" }),
      icon: "fas fa-search",
      content: <div className="text-blueGray-600 text-base">{intl.formatMessage({ id: "consulting_environmental_audit_desc" })}</div>
    },
    {
      id: "conformidade_legal_ambiental",
      title: intl.formatMessage({ id: "consulting_legal_compliance_title" }),
      icon: "fas fa-balance-scale",
      content: <div className="text-blueGray-600 text-base">{intl.formatMessage({ id: "consulting_legal_compliance_desc" })}</div>
    },
    {
      id: "seguranca_trabalho",
      title: intl.formatMessage({ id: "consulting_occupational_safety_title" }),
      icon: "fas fa-hard-hat",
      content: <div className="text-blueGray-600 text-base">{intl.formatMessage({ id: "consulting_occupational_safety_desc" })}</div>
    },
    {
      id: "avaliacao_risco",
      title: intl.formatMessage({ id: "consulting_risk_assessment_title" }),
      icon: "fas fa-exclamation-triangle",
      content: <div className="text-blueGray-600 text-base">{intl.formatMessage({ id: "consulting_risk_assessment_desc" })}</div>
    },
    {
      id: "auditoria_seguranca",
      title: intl.formatMessage({ id: "consulting_safety_audit_title" }),
      icon: "fas fa-user-shield",
      content: <div className="text-blueGray-600 text-base">{intl.formatMessage({ id: "consulting_safety_audit_desc" })}</div>
    },
    {
      id: "gestao_emergencias",
      title: intl.formatMessage({ id: "consulting_emergency_management_title" }),
      icon: "fas fa-ambulance",
      content: <div className="text-blueGray-600 text-base">{intl.formatMessage({ id: "consulting_emergency_management_desc" })}</div>
    },
    {
      id: "inspecao_terceiros_hse",
      title: intl.formatMessage({ id: "consulting_third_party_hse_title" }),
      icon: "fas fa-clipboard-check",
      content: <div className="text-blueGray-600 text-base">{intl.formatMessage({ id: "consulting_third_party_hse_desc" })}</div>
    },
    {
      id: "analise_risco_operabilidade",
      title: intl.formatMessage({ id: "consulting_hazop_title" }),
      icon: "fas fa-project-diagram",
      content: <div className="text-blueGray-600 text-base">{intl.formatMessage({ id: "consulting_hazop_desc" })}</div>
    },
    {
      id: "conformidade_legal_hse",
      title: intl.formatMessage({ id: "consulting_hse_legal_compliance_title" }),
      icon: "fas fa-balance-scale",
      content: <div className="text-blueGray-600 text-base">{intl.formatMessage({ id: "consulting_hse_legal_compliance_desc" })}</div>
    },
    {
      id: "gestao_projetos",
      title: intl.formatMessage({ id: "consulting_project_management_title" }),
      icon: "fas fa-tasks",
      content: <div className="text-blueGray-600 text-base">{intl.formatMessage({ id: "consulting_project_management_desc" })}</div>
    },
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
                  {intl.formatMessage({ id: "consulting_solutions_title" })}
                </h1>
                <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
                  {intl.formatMessage({ id: "consulting_solutions_desc" })}
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
            {solutions.map((sol) => (
              <div id={sol.id} key={sol.id} className="w-full max-w-6xl mx-auto bg-gradient-to-br from-white via-white to-white rounded-2xl p-0 mb-6 shadow-lg border border-white transition-all duration-300">
                <button
                  className="flex items-center w-full px-6 py-5 bg-white rounded-xl border border-blueGray-200 shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none text-left group"
                  onClick={() => setOpenCard(openCard === sol.id ? null : sol.id)}
                  aria-expanded={openCard === sol.id}
                >
                  <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-maea-blue text-white text-2xl mr-4">
                    <i className={sol.icon}></i>
                  </span>
                  <span className="font-bold text-lg text-maea-blue flex-1">{sol.title}</span>
                  <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-maea-blue text-white text-2xl ml-4 transition-all duration-200"> <i className={openCard === sol.id ? 'fas fa-minus' : 'fas fa-plus'}></i> </span>
                </button>
                {openCard === sol.id && (
                  <div className="px-8 pb-8 pt-2 animate-fade-in">
                    <div className="text-blueGray-600 text-base space-y-4">
                      {sol.content}
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
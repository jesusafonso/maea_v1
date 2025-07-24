import React from "react";
import Logo from "../Logo.js";
import { FormattedMessage, useIntl } from "react-intl";
import { Link } from "react-router-dom";

export default function Footer() {
  const intl = useIntl();
  return (
    <>
      <footer className="bg-gray-100 pt-10 pb-6 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:space-x-8 text-left items-start">
            {/* Coluna 1 - Soluções e Novidades */}
            <div className="flex-1 mb-8 md:mb-0 pl-5 md:ml-5">
              <h6 className="mt-8 text-lg font-semibold mb-4 text-gray-700">{intl.formatMessage({id: "footer_solutions_news_title"})}</h6>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li><Link to="/certificacao-iso">{intl.formatMessage({id: "footer_consultoria_iso"})}</Link></li>
                <li><Link to="/certificacao-iso">{intl.formatMessage({id: "footer_certificacao_sistemas"})}</Link></li>
                <li><Link to="/solucoes-consultoria">{intl.formatMessage({id: "footer_auditoria_interna"})}</Link></li>
                <li><Link to="/solucoes-consultoria">{intl.formatMessage({id: "footer_gestao_riscos"})}</Link></li>
                <li><Link to="/solucoes-consultoria">{intl.formatMessage({id: "footer_compliance_empresarial"})}</Link></li>
                <li><Link to="/sobre">{intl.formatMessage({id: "footer_novidades_artigos"})}</Link></li>
              </ul>
              </div>
            {/* Coluna 2 - Serviços */}
            <div className="flex-1 mb-8 md:mb-0">
              <h6 className="mt-8 text-lg font-semibold mb-4 text-gray-700">{intl.formatMessage({id: "footer_services_title"})}</h6>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li><Link to="/solucoes-consultoria">{intl.formatMessage({id: "footer_consultoria_qualidade"})}</Link></li>
                <li><Link to="/solucoes-consultoria">{intl.formatMessage({id: "footer_saude_seguranca_meio_ambiente"})}</Link></li>
                <li><Link to="/solucoes-consultoria">{intl.formatMessage({id: "footer_seguranca_alimentar"})}</Link></li>
                <li><Link to="/solucoes-consultoria">{intl.formatMessage({id: "footer_seguranca_informacao"})}</Link></li>
                <li><Link to="/treinamento">{intl.formatMessage({id: "footer_treinamentos_tecnicos"})}</Link></li>
                <li><Link to="/solucoes-consultoria">{intl.formatMessage({id: "footer_gestao_projetos"})}</Link></li>
              </ul>
              </div>
            {/* Coluna 3 - Educação Corporativa */}
            <div className="flex-1 mb-8 md:mb-0">
              <h6 className="mt-8 text-lg font-semibold mb-4 text-gray-700">{intl.formatMessage({id: "footer_educacao_corporativa_title"})}</h6>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li><Link to="/treinamento">{intl.formatMessage({id: "footer_capacitacao_profissional"})}</Link></li>
                <li><Link to="/treinamento">{intl.formatMessage({id: "footer_cursos_in_company"})}</Link></li>
                <li><Link to="/treinamento">{intl.formatMessage({id: "footer_workshops_palestras"})}</Link></li>
                <li><Link to="/treinamento">{intl.formatMessage({id: "footer_formacao_auditores"})}</Link></li>
                <li><Link to="/treinamento">{intl.formatMessage({id: "footer_treinamento_compliance"})}</Link></li>
              </ul>
            </div>
            {/* Coluna 4 - Setores Atendidos */}
            <div className="flex-1 mb-8 md:mb-0">
              <h6 className="mt-8 text-lg font-semibold mb-4 text-gray-700">{intl.formatMessage({id: "footer_setores_atendidos_title"})}</h6>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li><Link to="/servicos/saude-seguranca">{intl.formatMessage({id: "footer_saude_seguranca"})}</Link></li>
                <li><Link to="/servicos/certificacao-iso">{intl.formatMessage({id: "footer_certificacao_iso"})}</Link></li>
                <li><Link to="/servicos/treinamentos">{intl.formatMessage({id: "footer_treinamentos"})}</Link></li>
                <li><Link to="/servicos/ambiente">{intl.formatMessage({id: "footer_ambiente"})}</Link></li>
                <li><Link to="/servicos/business-consulting">{intl.formatMessage({id: "footer_business_consulting"})}</Link></li>
                <li><Link to="/servicos/formacoes-profissional">{intl.formatMessage({id: "footer_formacoes_profissional"})}</Link></li>
                  </ul>
                </div>
            {/* Coluna 5 - Suporte e Contato */}
            <div className="flex-1 mb-8 md:mb-0">
              <h6 className="mt-8 text-lg font-semibold mb-4 text-gray-700">{intl.formatMessage({id: "footer_suporte_contato_title"})}</h6>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li><Link to="/contactos">{intl.formatMessage({id: "footer_fale_conosco"})}</Link></li>
                <li><Link to="/contactos">{intl.formatMessage({id: "footer_solicite_orcamento"})}</Link></li>
                <li><Link to="/contactos">{intl.formatMessage({id: "footer_perguntas_frequentes"})}</Link></li>
                <li><Link to="/contactos">{intl.formatMessage({id: "footer_suporte_tecnico"})}</Link></li>
                <li><Link to="/contactos">{intl.formatMessage({id: "footer_trabalhe_conosco"})}</Link></li>
                  </ul>
                </div>
            {/* Coluna 6 - Institucional */}
            <div className="flex-1 mb-8 md:mb-0">
              <h6 className="mt-8 text-lg font-semibold mb-4 text-gray-700">{intl.formatMessage({id: "footer_institucional_title"})}</h6>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li><Link to="/sobre">{intl.formatMessage({id: "footer_sobre_maea"})}</Link></li>
                <li><Link to="/sobre">{intl.formatMessage({id: "footer_missao_visao_valores"})}</Link></li>
                <li><Link to="/sobre/politica-compliance">{intl.formatMessage({id: "footer_politica_compliance"})}</Link></li>
                <li><Link to="/privacidade">{intl.formatMessage({id: "footer_politica_privacidade"})}</Link></li>
                <li><Link to="/termos">{intl.formatMessage({id: "footer_termos_uso"})}</Link></li>
              </ul>
            </div>
          </div>
          {/* Linha inferior personalizada */}
          <div className="mt-10 border-t border-gray-200 pt-6 text-xs text-gray-500 text-center flex flex-col items-center space-y-2">
            <div className="font-semibold">
              {intl.formatMessage({id: "footer_copyright"}, {year: new Date().getFullYear(), company: "MAEA Solutions"})}
            </div>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
              <Link to="/privacidade" className="hover:underline">{intl.formatMessage({id: "footer_politica_privacidade"})}</Link>
              <Link to="/termos" className="hover:underline">{intl.formatMessage({id: "footer_termos_uso"})}</Link>
              <Link to="/contactos" className="hover:underline">{intl.formatMessage({id: "footer_contato"})}</Link>
              <Link to="/sobre" className="hover:underline">{intl.formatMessage({id: "footer_sobre_maea"})}</Link>
            </div>
            <div className="text-gray-400 text-[11px]">Desenvolvido por <a href="https://www.maea.ao" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">MAEA Solutions</a></div>
          </div>
        </div>
      </footer>
    </>
  );
}

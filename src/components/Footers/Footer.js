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
              <h6 className="mt-8 text-lg font-semibold mb-4 text-gray-700">Soluções e Novidades</h6>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li><Link to="/certificacao-iso">Consultoria ISO</Link></li>
                <li><Link to="/certificacao-iso">Certificação de Sistemas</Link></li>
                <li><Link to="/solucoes-consultoria">Auditoria Interna</Link></li>
                <li><Link to="/solucoes-consultoria">Gestão de Riscos</Link></li>
                <li><Link to="/solucoes-consultoria">Compliance Empresarial</Link></li>
                <li><Link to="/sobre">Novidades e Artigos</Link></li>
              </ul>
              </div>
            {/* Coluna 2 - Serviços */}
            <div className="flex-1 mb-8 md:mb-0">
              <h6 className="mt-8 text-lg font-semibold mb-4 text-gray-700">Serviços</h6>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li><Link to="/solucoes-consultoria">Consultoria em Qualidade</Link></li>
                <li><Link to="/solucoes-consultoria">Saúde, Segurança e Meio Ambiente</Link></li>
                <li><Link to="/solucoes-consultoria">Segurança Alimentar</Link></li>
                <li><Link to="/solucoes-consultoria">Segurança da Informação</Link></li>
                <li><Link to="/treinamento">Treinamentos Técnicos</Link></li>
                <li><Link to="/solucoes-consultoria">Gestão de Projetos</Link></li>
              </ul>
              </div>
            {/* Coluna 3 - Educação Corporativa */}
            <div className="flex-1 mb-8 md:mb-0">
              <h6 className="mt-8 text-lg font-semibold mb-4 text-gray-700">Educação Corporativa</h6>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li><Link to="/treinamento">Capacitação Profissional</Link></li>
                <li><Link to="/treinamento">Cursos In Company</Link></li>
                <li><Link to="/treinamento">Workshops e Palestras</Link></li>
                <li><Link to="/treinamento">Formação de Auditores</Link></li>
                <li><Link to="/treinamento">Treinamento em Compliance</Link></li>
              </ul>
            </div>
            {/* Coluna 4 - Setores Atendidos */}
            <div className="flex-1 mb-8 md:mb-0">
              <h6 className="mt-8 text-lg font-semibold mb-4 text-gray-700">Setores Atendidos</h6>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li><Link to="/servicos/saude-seguranca">Saúde e Segurança</Link></li>
                <li><Link to="/servicos/certificacao-iso">Certificação ISO</Link></li>
                <li><Link to="/servicos/treinamentos">Treinamentos</Link></li>
                <li><Link to="/servicos/ambiente">Ambiente</Link></li>
                <li><Link to="/servicos/business-consulting">Business Consulting</Link></li>
                <li><Link to="/servicos/formacoes-profissional">Formações Profissional</Link></li>
                  </ul>
                </div>
            {/* Coluna 5 - Suporte e Contato */}
            <div className="flex-1 mb-8 md:mb-0">
              <h6 className="mt-8 text-lg font-semibold mb-4 text-gray-700">Suporte e Contato</h6>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li><Link to="/contactos">Fale Conosco</Link></li>
                <li><Link to="/contactos">Solicite um Orçamento</Link></li>
                <li><Link to="/contactos">Perguntas Frequentes</Link></li>
                <li><Link to="/contactos">Suporte Técnico</Link></li>
                <li><Link to="/contactos">Trabalhe Conosco</Link></li>
                  </ul>
                </div>
            {/* Coluna 6 - Institucional */}
            <div className="flex-1 mb-8 md:mb-0">
              <h6 className="mt-8 text-lg font-semibold mb-4 text-gray-700">Institucional</h6>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li><Link to="/sobre">Sobre a MAEA</Link></li>
                <li><Link to="/sobre">Missão, Visão e Valores</Link></li>
                <li><Link to="/sobre/politica-compliance">Política de Compliance</Link></li>
                <li><Link to="/privacidade">Política de Privacidade</Link></li>
                <li><Link to="/termos">Termos de Uso</Link></li>
              </ul>
            </div>
          </div>
          {/* Linha inferior personalizada */}
          <div className="mt-10 border-t border-gray-200 pt-6 text-xs text-gray-500 text-center flex flex-col items-center space-y-2">
            <div className="font-semibold">© {new Date().getFullYear()} MAEA Solutions. Excelência em consultoria, certificação e educação corporativa.</div>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
              <Link to="/privacidade" className="hover:underline">Política de Privacidade</Link>
              <Link to="/termos" className="hover:underline">Termos de Uso</Link>
              <Link to="/contactos" className="hover:underline">Contato</Link>
              <Link to="/sobre" className="hover:underline">Sobre a MAEA</Link>
            </div>
            <div className="text-gray-400 text-[11px]">Desenvolvido por <a href="https://www.maea.ao" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">MAEA Solutions</a></div>
          </div>
        </div>
      </footer>
    </>
  );
}

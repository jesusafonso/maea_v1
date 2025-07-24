/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo.js";
import { FormattedMessage, useIntl } from "react-intl";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [certDropdownOpen, setCertDropdownOpen] = React.useState(false);
  const [consultDropdownOpen, setConsultDropdownOpen] = React.useState(false);
  const [sobreDropdownOpen, setSobreDropdownOpen] = React.useState(false);
  const intl = useIntl();

  const { locale, setLocale } = props;
  
  // Fechar dropdowns quando clicar fora
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (certDropdownOpen && !event.target.closest('.dropdown-cert')) {
        setCertDropdownOpen(false);
      }
      if (consultDropdownOpen && !event.target.closest('.dropdown-consult')) {
        setConsultDropdownOpen(false);
      }
      if (sobreDropdownOpen && !event.target.closest('.dropdown-sobre')) {
        setSobreDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [certDropdownOpen, consultDropdownOpen, sobreDropdownOpen]);
  
  React.useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);
  
  return (
    <>
      <nav className={`top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg transition-all duration-300 shadow-md ${
        scrolled 
          ? 'bg-white shadow-lg' 
          : 'bg-black/30 backdrop-blur-md'
      } rounded-b-2xl`}>
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              to="/"
              className="leading-relaxed inline-block mr-4 py-2 whitespace-nowrap transition-all duration-300"
            >
              <Logo scrolled={scrolled} showText={false} />
            </Link>
            <button
              className={`cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none transition-all duration-300 ${
                scrolled ? 'text-blueGray-700' : 'text-white'
              }`}
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              `lg:flex flex-grow items-center lg:shadow-none transition-all duration-300 ${
                scrolled ? 'bg-white backdrop-blur-sm' : 'bg-black/20 backdrop-blur-sm lg:bg-transparent'
              }` +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto gap-1 lg:gap-2">
              {/* INÍCIO */}
              <li className="flex items-center">
                <Link
                  to="/"
                  className={`text-xs hover:text-[#5faee3] hover:bg-blueGray-50/60 hover:scale-105 px-2 py-2 flex items-center uppercase font-semibold rounded-xl transition-all duration-300 ease-in-out transform hover:translate-y-[-2px] hover:shadow-lg ${scrolled ? 'text-blueGray-700' : 'text-white hover:text-[#5faee3]'}`}
                >
                  <i className="fas fa-home mr-2 text-base opacity-70"></i>{intl.formatMessage({id: "navbar.home"})}
                </Link>
              </li>
              {/* SOBRE NÓS */}
              <li className="flex items-center">
                <div className="relative dropdown-container dropdown-sobre" tabIndex={0}>
                  <button
                    className={`text-xs hover:text-[#5faee3] hover:bg-blueGray-50/60 hover:scale-105 px-2 py-2 flex items-center uppercase font-semibold rounded-xl transition-all duration-300 ease-in-out transform hover:translate-y-[-2px] hover:shadow-lg ${scrolled ? 'text-blueGray-700' : 'text-white hover:text-[#5faee3]'}`}
                    aria-haspopup="true"
                    aria-expanded={sobreDropdownOpen}
                    onClick={e => { e.preventDefault(); setSobreDropdownOpen(v => !v); }}
                  >
                    <i className="fas fa-info-circle mr-2 text-base opacity-70"></i><FormattedMessage id="navbar.about" />
                    <i className={`fas fa-chevron-down ml-2 text-xs transition-transform duration-200 ${sobreDropdownOpen ? 'rotate-180' : ''}`}></i>
                  </button>
                  {sobreDropdownOpen && (
                    <div className="absolute left-0 mt-2 rounded-2xl shadow-2xl flex-col z-50 min-w-[340px] border border-blueGray-200 border-[0.5px] transition-all duration-300 flex opacity-100 scale-100 translate-y-0 pointer-events-auto bg-white" style={{minWidth: '340px', padding: '12px 0px'}}>
                      <ul className="divide-y divide-blueGray-100 text-[10px]">
                        <li className="p-2"><Link to="/sobre#imparcialidade" onClick={() => setSobreDropdownOpen(false)} className="text-blueGray-700 hover:text-[#5faee3] hover:bg-blueGray-50/80 px-2 py-1 rounded transition-all duration-300 block whitespace-nowrap truncate">{intl.formatMessage({id: "navbar.sobre_imparcialidade"})}</Link></li>
                        <li className="p-2"><Link to="/sobre#confidencialidade" onClick={() => setSobreDropdownOpen(false)} className="text-blueGray-700 hover:text-[#5faee3] hover:bg-blueGray-50/80 px-2 py-1 rounded transition-all duration-300 block whitespace-nowrap truncate">{intl.formatMessage({id: "navbar.sobre_confidencialidade"})}</Link></li>
                        <li className="p-2"><Link to="/sobre#competencia" onClick={() => setSobreDropdownOpen(false)} className="text-blueGray-700 hover:text-[#5faee3] hover:bg-blueGray-50/80 px-2 py-1 rounded transition-all duration-300 block whitespace-nowrap truncate">{intl.formatMessage({id: "navbar.sobre_competencia"})}</Link></li>
                        <li className="p-2"><Link to="/sobre#responsabilidade" onClick={() => setSobreDropdownOpen(false)} className="text-blueGray-700 hover:text-[#5faee3] hover:bg-blueGray-50/80 px-2 py-1 rounded transition-all duration-300 block whitespace-nowrap truncate">{intl.formatMessage({id: "navbar.sobre_responsabilidade"})}</Link></li>
                        <li className="p-2"><Link to="/sobre#transparencia" onClick={() => setSobreDropdownOpen(false)} className="text-blueGray-700 hover:text-[#5faee3] hover:bg-blueGray-50/80 px-2 py-1 rounded transition-all duration-300 block whitespace-nowrap truncate">{intl.formatMessage({id: "navbar.sobre_transparencia"})}</Link></li>
                        <li className="p-2"><Link to="/sobre#reclamacoes-apelacoes" onClick={() => setSobreDropdownOpen(false)} className="text-blueGray-700 hover:text-[#5faee3] hover:bg-blueGray-50/80 px-2 py-1 rounded transition-all duration-300 block whitespace-nowrap truncate">{intl.formatMessage({id: "navbar.sobre_reclamacoes"})}</Link></li>
                        <li className="p-2"><Link to="/sobre#auditoria-certificacao" onClick={() => setSobreDropdownOpen(false)} className="text-blueGray-700 hover:text-[#5faee3] hover:bg-blueGray-50/80 px-2 py-1 rounded transition-all duration-300 block whitespace-nowrap truncate">{intl.formatMessage({id: "navbar.sobre_auditoria"})}</Link></li>
                        <li className="p-2"><Link to="/sobre#sistema-gestao-interno" onClick={() => setSobreDropdownOpen(false)} className="text-blueGray-700 hover:text-[#5faee3] hover:bg-blueGray-50/80 px-2 py-1 rounded transition-all duration-300 block whitespace-nowrap truncate">{intl.formatMessage({id: "navbar.sobre_sistema_gestao"})}</Link></li>
                        <li className="p-2"><Link to="/sobre#compliance" onClick={() => setSobreDropdownOpen(false)} className="text-blueGray-700 hover:text-[#5faee3] hover:bg-blueGray-50/80 px-2 py-1 rounded transition-all duration-300 block whitespace-nowrap truncate">{intl.formatMessage({id: "navbar.sobre_compliance"})}</Link></li>
                      </ul>
                    </div>
                  )}
                </div>
              </li>
              {/* SOLUÇÕES DE CONSULTORIA Dropdown */}
              <li className="flex items-center">
                <div className="relative dropdown-container dropdown-consult" tabIndex={0}>
                  <button
                    className={`text-xs hover:text-[#5faee3] hover:bg-blueGray-50/60 hover:scale-105 px-2 py-2 flex items-center uppercase font-semibold rounded-xl transition-all duration-300 ease-in-out transform hover:translate-y-[-2px] hover:shadow-lg ${
                      scrolled ? 'text-blueGray-700' : 'text-white hover:text-[#5faee3]'
                    } ${consultDropdownOpen ? 'bg-blueGray-50/80 text-[#5faee3]' : ''}`}
                    aria-haspopup="true"
                    aria-expanded={consultDropdownOpen}
                    onClick={e => { e.preventDefault(); setConsultDropdownOpen(v => !v); }}
                  >
                    <i className="fas fa-lightbulb mr-2 text-base opacity-70"></i>{intl.formatMessage({id: "navbar.consulting"})}
                    <i className={`fas fa-chevron-down ml-2 text-xs transition-transform duration-200 ${consultDropdownOpen ? 'rotate-180' : ''}`}></i>
                  </button>
                  {consultDropdownOpen && (
                    <div className="fixed left-1/2 top-[70px] transform -translate-x-1/2 mt-2 bg-white rounded-2xl shadow-2xl flex-col z-50 border border-blueGray-200 border-[0.5px] transition-all duration-300 flex opacity-100 scale-100 pointer-events-auto" style={{width: '90vw', padding: '12px 0px'}}>
                      <div className="flex flex-row w-full px-4 gap-8">
                        <div className="flex-1">
                          <div className="font-bold text-base text-blueGray-700 mb-2 ml-[50px]">{intl.formatMessage({id: "navbar.consulting_ambiente_title"})}</div>
                          <ul className="divide-y divide-blueGray-100 text-[10px]">
                            <li className="p-2"><Link to="/solucoes-consultoria#meio_ambiente" onClick={() => setConsultDropdownOpen(false)} className="text-blueGray-700 hover:text-[#5faee3] hover:bg-blueGray-50/80 px-2 py-1 rounded transition-all duration-300 block whitespace-nowrap truncate">{intl.formatMessage({id: "navbar.consulting_gestao_ambiental"})}</Link></li>
                            <li className="p-2"><Link to="/solucoes-consultoria#meio_ambiente" onClick={() => setConsultDropdownOpen(false)} className="text-blueGray-700 hover:text-[#5faee3] hover:bg-blueGray-50/80 px-2 py-1 rounded transition-all duration-300 block whitespace-nowrap truncate">{intl.formatMessage({id: "navbar.consulting_impacto_ambiental"})}</Link></li>
                            <li className="p-2"><Link to="/solucoes-consultoria#meio_ambiente" onClick={() => setConsultDropdownOpen(false)} className="text-blueGray-700 hover:text-[#5faee3] hover:bg-blueGray-50/80 px-2 py-1 rounded transition-all duration-300 block whitespace-nowrap truncate">{intl.formatMessage({id: "navbar.consulting_residuos"})}</Link></li>
                            <li className="p-2"><Link to="/solucoes-consultoria#meio_ambiente" onClick={() => setConsultDropdownOpen(false)} className="text-blueGray-700 hover:text-[#5faee3] hover:bg-blueGray-50/80 px-2 py-1 rounded transition-all duration-300 block whitespace-nowrap truncate">{intl.formatMessage({id: "navbar.consulting_monitoramento"})}</Link></li>
                            <li className="p-2"><Link to="/solucoes-consultoria#meio_ambiente" onClick={() => setConsultDropdownOpen(false)} className="text-blueGray-700 hover:text-[#5faee3] hover:bg-blueGray-50/80 px-2 py-1 rounded transition-all duration-300 block whitespace-nowrap truncate">{intl.formatMessage({id: "navbar.consulting_aguas"})}</Link></li>
                            <li className="p-2"><Link to="/solucoes-consultoria#meio_ambiente" onClick={() => setConsultDropdownOpen(false)} className="text-blueGray-700 hover:text-[#5faee3] hover:bg-blueGray-50/80 px-2 py-1 rounded transition-all duration-300 block whitespace-nowrap truncate">{intl.formatMessage({id: "navbar.consulting_auditorias_ambientais"})}</Link></li>
                            <li className="p-2"><Link to="/solucoes-consultoria#meio_ambiente" onClick={() => setConsultDropdownOpen(false)} className="text-blueGray-700 hover:text-[#5faee3] hover:bg-blueGray-50/80 px-2 py-1 rounded transition-all duration-300 block whitespace-nowrap truncate">{intl.formatMessage({id: "navbar.consulting_conformidade_ambiental"})}</Link></li>
                          </ul>
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-base text-blueGray-700 mb-2 ml-[50px]">{intl.formatMessage({id: "navbar.consulting_safety_title"})}</div>
                          <ul className="divide-y divide-blueGray-100 text-[9px]">
                            <li className="p-2"><Link to="/solucoes-consultoria#seguranca_trabalho" onClick={() => setConsultDropdownOpen(false)} className="text-blueGray-700 hover:text-[#5faee3] hover:bg-blueGray-50/80 px-2 py-1 rounded transition-all duration-300 block whitespace-nowrap truncate">{intl.formatMessage({id: "navbar.consulting_safety"})}</Link></li>
                            <li className="p-2"><Link to="/solucoes-consultoria#seguranca_trabalho" onClick={() => setConsultDropdownOpen(false)} className="text-blueGray-700 hover:text-[#5faee3] hover:bg-blueGray-50/80 px-2 py-1 rounded transition-all duration-300 block whitespace-nowrap truncate">{intl.formatMessage({id: "navbar.consulting_risco"})}</Link></li>
                            <li className="p-2"><Link to="/solucoes-consultoria#seguranca_trabalho" onClick={() => setConsultDropdownOpen(false)} className="text-blueGray-700 hover:text-[#5faee3] hover:bg-blueGray-50/80 px-2 py-1 rounded transition-all duration-300 block whitespace-nowrap truncate">{intl.formatMessage({id: "navbar.consulting_auditoria_seguranca"})}</Link></li>
                            <li className="p-2"><Link to="/solucoes-consultoria#seguranca_trabalho" onClick={() => setConsultDropdownOpen(false)} className="text-blueGray-700 hover:text-[#5faee3] hover:bg-blueGray-50/80 px-2 py-1 rounded transition-all duration-300 block whitespace-nowrap truncate">{intl.formatMessage({id: "navbar.consulting_emergencias"})}</Link></li>
                            <li className="p-2"><Link to="/solucoes-consultoria#seguranca_trabalho" onClick={() => setConsultDropdownOpen(false)} className="text-blueGray-700 hover:text-[#5faee3] hover:bg-blueGray-50/80 px-2 py-1 rounded transition-all duration-300 block whitespace-nowrap truncate">{intl.formatMessage({id: "navbar.consulting_hse"})}</Link></li>
                            <li className="p-2"><Link to="/solucoes-consultoria#seguranca_trabalho" onClick={() => setConsultDropdownOpen(false)} className="text-blueGray-700 hover:text-[#5faee3] hover:bg-blueGray-50/80 px-2 py-1 rounded transition-all duration-300 block whitespace-nowrap truncate">{intl.formatMessage({id: "navbar.consulting_operabilidade"})}</Link></li>
                            <li className="p-2"><Link to="/solucoes-consultoria#seguranca_trabalho" onClick={() => setConsultDropdownOpen(false)} className="text-blueGray-700 hover:text-[#5faee3] hover:bg-blueGray-50/80 px-2 py-1 rounded transition-all duration-300 block whitespace-nowrap truncate">{intl.formatMessage({id: "navbar.consulting_conformidade_hse"})}</Link></li>
                          </ul>
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-base text-blueGray-700 mb-2 ml-[50px]">{intl.formatMessage({id: "navbar.consulting_business_title"})}</div>
                          <ul className="divide-y divide-blueGray-100 text-[10px]">
                            <li className="p-2"><Link to="/business-consulting-formacoes#business_consulting" onClick={() => setConsultDropdownOpen(false)} className="text-blueGray-700 hover:text-[#5faee3] hover:bg-blueGray-50/80 px-2 py-1 rounded transition-all duration-300 block whitespace-nowrap truncate">{intl.formatMessage({id: "navbar.consulting_business"})}</Link></li>
                            <li className="p-2"><Link to="/business-consulting-formacoes#excel_avancado" onClick={() => setConsultDropdownOpen(false)} className="text-blueGray-700 hover:text-[#5faee3] hover:bg-blueGray-50/80 px-2 py-1 rounded transition-all duration-300 block whitespace-nowrap truncate">{intl.formatMessage({id: "navbar.consulting_excel"})}</Link></li>
                            <li className="p-2"><Link to="/business-consulting-formacoes#powerpoint_avancado" onClick={() => setConsultDropdownOpen(false)} className="text-blueGray-700 hover:text-[#5faee3] hover:bg-blueGray-50/80 px-2 py-1 rounded transition-all duration-300 block whitespace-nowrap truncate">{intl.formatMessage({id: "navbar.consulting_powerpoint"})}</Link></li>
                            <li className="p-2"><Link to="/business-consulting-formacoes#word_avancado" onClick={() => setConsultDropdownOpen(false)} className="text-blueGray-700 hover:text-[#5faee3] hover:bg-blueGray-50/80 px-2 py-1 rounded transition-all duration-300 block whitespace-nowrap truncate">{intl.formatMessage({id: "navbar.consulting_word"})}</Link></li>
                            <li className="p-2"><Link to="/business-consulting-formacoes#powerbi_avancado" onClick={() => setConsultDropdownOpen(false)} className="text-blueGray-700 hover:text-[#5faee3] hover:bg-blueGray-50/80 px-2 py-1 rounded transition-all duration-300 block whitespace-nowrap truncate">{intl.formatMessage({id: "navbar.consulting_powerbi"})}</Link></li>
                            <li className="p-2"><Link to="/treinamento" onClick={() => setConsultDropdownOpen(false)} className="text-blueGray-700 hover:text-[#5faee3] hover:bg-blueGray-50/80 px-2 py-1 rounded transition-all duration-300 block whitespace-nowrap truncate">{intl.formatMessage({id: "navbar.consulting_treinamento"})}</Link></li>
                            <li className="p-2"><Link to="/solucoes-consultoria#gestao_projetos" onClick={() => setConsultDropdownOpen(false)} className="text-blueGray-700 hover:text-[#5faee3] hover:bg-blueGray-50/80 px-2 py-1 rounded transition-all duration-300 block whitespace-nowrap truncate">{intl.formatMessage({id: "navbar.consulting_gestao_projetos"})}</Link></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </li>
              {/* CERTIFICAÇÃO Dropdown */}
              <li className="flex items-center">
                <div className="relative dropdown-container dropdown-cert" tabIndex={0}>
                  <button
                    className={`text-xs hover:text-[#5faee3] hover:bg-blueGray-50/60 hover:scale-105 px-2 py-2 flex items-center uppercase font-semibold rounded-xl transition-all duration-300 ease-in-out transform hover:translate-y-[-2px] hover:shadow-lg ${
                    scrolled ? 'text-blueGray-700' : 'text-white hover:text-[#5faee3]'
                    } ${certDropdownOpen ? 'bg-blueGray-50/80 text-[#5faee3]' : ''}`}
                    aria-haspopup="true"
                    aria-expanded={certDropdownOpen}
                    onClick={e => { e.preventDefault(); setCertDropdownOpen(v => !v); }}
                >
                    <i className="fas fa-certificate mr-2 text-base opacity-70"></i><FormattedMessage id="navbar.certification" />
                    <i className={`fas fa-chevron-down ml-2 text-xs transition-transform duration-200 ${certDropdownOpen ? 'rotate-180' : ''}`}></i>
                  </button>
                  {certDropdownOpen && (
                    <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-white rounded-2xl shadow-2xl flex-col z-50 min-w-[440px] border border-blueGray-200 border-[0.5px] transition-all duration-300 flex opacity-100 scale-100 pointer-events-auto" style={{minWidth: '50vw', padding: '12px 0px'}}>
                      <div className="flex flex-row w-full px-4 gap-8">
                        <div className="flex-1">
                          <ul className="divide-y divide-blueGray-100 text-[10px]">
                            <li className="p-2">
                              <Link to="/certificacao-iso#iso9001" onClick={() => setCertDropdownOpen(false)} className="text-blueGray-700 hover:text-[#5faee3] hover:bg-blueGray-50/80 px-2 py-1 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:translate-x-1 block whitespace-nowrap truncate">{intl.formatMessage({id: "navbar.certificacao_iso_9001"})}</Link>
                            </li>
                            <li className="p-2">
                              <Link to="/certificacao-iso#iso14001" onClick={() => setCertDropdownOpen(false)} className="text-blueGray-700 hover:text-[#5faee3] hover:bg-blueGray-50/80 px-2 py-1 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:translate-x-1 block whitespace-nowrap truncate">{intl.formatMessage({id: "navbar.certificacao_iso_14001"})}</Link>
                            </li>
                            <li className="p-2">
                              <Link to="/certificacao-iso#ohsas18001" onClick={() => setCertDropdownOpen(false)} className="text-blueGray-700 hover:text-[#5faee3] hover:bg-blueGray-50/80 px-2 py-1 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:translate-x-1 block whitespace-nowrap truncate">{intl.formatMessage({id: "navbar.certificacao_ohsas_18001"})}</Link>
                            </li>
                            <li className="p-2">
                              <Link to="/certificacao-iso#iso22000" onClick={() => setCertDropdownOpen(false)} className="text-blueGray-700 hover:text-[#5faee3] hover:bg-blueGray-50/80 px-2 py-1 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:translate-x-1 block whitespace-nowrap truncate">{intl.formatMessage({id: "navbar.certificacao_iso_22000"})}</Link>
                            </li>
                            <li className="p-2">
                              <Link to="/certificacao-iso#haccp" onClick={() => setCertDropdownOpen(false)} className="text-blueGray-700 hover:text-[#5faee3] hover:bg-blueGray-50/80 px-2 py-1 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:translate-x-1 block whitespace-nowrap truncate">{intl.formatMessage({id: "navbar.certificacao_haccp"})}</Link>
                            </li>
                            <li className="p-2">
                              <Link to="/certificacao-iso#iso27001" onClick={() => setCertDropdownOpen(false)} className="text-blueGray-700 hover:text-[#5faee3] hover:bg-blueGray-50/80 px-2 py-1 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:translate-x-1 block whitespace-nowrap truncate">{intl.formatMessage({id: "navbar.certificacao_iso_27001"})}</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="flex-1">
                          <ul className="divide-y divide-blueGray-100 text-[10px]">
                            <li className="p-2">
                              <Link to="/certificacao-iso#iso20000" onClick={() => setCertDropdownOpen(false)} className="text-blueGray-700 hover:text-[#5faee3] hover:bg-blueGray-50/80 px-2 py-1 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:translate-x-1 block whitespace-nowrap truncate">{intl.formatMessage({id: "navbar.certificacao_iso_20000"})}</Link>
                            </li>
                            <li className="p-2">
                              <Link to="/certificacao-iso#iso13485" onClick={() => setCertDropdownOpen(false)} className="text-blueGray-700 hover:text-[#5faee3] hover:bg-blueGray-50/80 px-2 py-1 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:translate-x-1 block whitespace-nowrap truncate">{intl.formatMessage({id: "navbar.certificacao_iso_13485"})}</Link>
                            </li>
                            <li className="p-2">
                              <Link to="/certificacao-iso#iso29001" onClick={() => setCertDropdownOpen(false)} className="text-blueGray-700 hover:text-[#5faee3] hover:bg-blueGray-50/80 px-2 py-1 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:translate-x-1 block whitespace-nowrap truncate">{intl.formatMessage({id: "navbar.certificacao_iso_29001"})}</Link>
                            </li>
                            <li className="p-2">
                              <Link to="/certificacao-iso#iso10002" onClick={() => setCertDropdownOpen(false)} className="text-blueGray-700 hover:text-[#5faee3] hover:bg-blueGray-50/80 px-2 py-1 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:translate-x-1 block whitespace-nowrap truncate">{intl.formatMessage({id: "navbar.certificacao_iso_10002"})}</Link>
                            </li>
                            <li className="p-2">
                              <Link to="/certificacao-iso#iso22716" onClick={() => setCertDropdownOpen(false)} className="text-blueGray-700 hover:text-[#5faee3] hover:bg-blueGray-50/80 px-2 py-1 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:translate-x-1 block whitespace-nowrap truncate">{intl.formatMessage({id: "navbar.certificacao_iso_22716"})}</Link>
                            </li>
                            <li className="p-2">
                              <Link to="/certificacao-iso#iso50001" onClick={() => setCertDropdownOpen(false)} className="text-blueGray-700 hover:text-[#5faee3] hover:bg-blueGray-50/80 px-2 py-1 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:translate-x-1 block whitespace-nowrap truncate">{intl.formatMessage({id: "navbar.certificacao_iso_50001"})}</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </li>
              {/* CONTACTOS */}
              <li className="flex items-center">
                <Link
                  to="/contactos"
                  className={`text-xs hover:text-[#5faee3] hover:bg-blueGray-50/60 hover:scale-105 px-2 py-2 flex items-center uppercase font-semibold rounded-xl transition-all duration-300 ease-in-out transform hover:translate-y-[-2px] hover:shadow-lg ${
                    scrolled ? 'text-blueGray-700' : 'text-white hover:text-[#5faee3]'
                  }`}
                >
                  <i className="fas fa-envelope mr-2 text-base opacity-70"></i><FormattedMessage id="navbar.contacts" />
                </Link>
              </li>
              {/* Seletor de idioma */}
              <li className="flex items-center ml-2" style={{ minWidth: 70 }}>
                <div className={`flex items-center space-x-1 text-xs font-bold select-none rounded-xl px-3 py-2 shadow-lg border transition-all duration-300 ${
                  scrolled 
                    ? 'bg-gradient-to-r from-blueGray-50 to-blueGray-100 border-blueGray-200 shadow-blueGray-200/50' 
                    : 'bg-gradient-to-r from-white/90 to-white/95 border-white/30 shadow-white/20 backdrop-blur-md'
                }`}>
                  <button
                    onClick={() => setLocale('pt')}
                    className={`px-2 py-1 rounded-lg transition-all duration-200 font-semibold ${
                      locale === 'pt' 
                        ? 'bg-[#5faee3] text-white shadow-md' 
                        : 'text-blueGray-700 hover:bg-blueGray-100 hover:text-[#5faee3]'
                    }`}
                    style={{ background: locale === 'pt' ? '#5faee3' : 'transparent', border: 'none', cursor: 'pointer' }}
                    aria-label="Português"
                  >
                    PT
                  </button>
                  <span className={`mx-1 ${scrolled ? 'text-blueGray-400' : 'text-white/60'}`}>|</span>
                  <button
                    onClick={() => setLocale('en')}
                    className={`px-2 py-1 rounded-lg transition-all duration-200 font-semibold ${
                      locale === 'en' 
                        ? 'bg-[#5faee3] text-white shadow-md' 
                        : 'text-blueGray-700 hover:bg-blueGray-100 hover:text-[#5faee3]'
                    }`}
                    style={{ background: locale === 'en' ? '#5faee3' : 'transparent', border: 'none', cursor: 'pointer' }}
                    aria-label="English"
                  >
                    EN
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
    </>
  );
}

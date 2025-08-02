/*eslint-disable*/
import React from "react";
import { Link, useHistory } from "react-router-dom";
import Logo from "../Logo.js";
import { FormattedMessage, useIntl } from "react-intl";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [certDropdownOpen, setCertDropdownOpen] = React.useState(false);
  const [consultDropdownOpen, setConsultDropdownOpen] = React.useState(false);
  const [sobreDropdownOpen, setSobreDropdownOpen] = React.useState(false);
  const [planosDropdownOpen, setPlanosDropdownOpen] = React.useState(false);
  const intl = useIntl();
  const history = useHistory();

  const { locale, setLocale } = props;
  
  // Função para scroll suave para o topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Função para navegar e scroll para o topo
  const handleNavigation = (path) => {
    // Fechar dropdowns
    setCertDropdownOpen(false);
    setConsultDropdownOpen(false);
    setSobreDropdownOpen(false);
    setNavbarOpen(false);
    
    // Navegar para a página
    history.push(path);
    
    // Scroll para o topo após um pequeno delay
    setTimeout(() => {
      scrollToTop();
    }, 100);
  };

  // Função para links dos submenus
  const handleSubmenuClick = (path) => {
    // Fechar dropdowns
    setCertDropdownOpen(false);
    setConsultDropdownOpen(false);
    setSobreDropdownOpen(false);
    setNavbarOpen(false);
    
    // Navegar para a página
    history.push(path);
    
    // Scroll para o topo após um pequeno delay
    setTimeout(() => {
      scrollToTop();
    }, 100);
  };

  const handleDropdownClick = (type) => {
    if (type === 'consult') {
      setConsultDropdownOpen(!consultDropdownOpen);
      setCertDropdownOpen(false);
      setSobreDropdownOpen(false);
      setPlanosDropdownOpen(false);
    } else if (type === 'cert') {
      setCertDropdownOpen(!certDropdownOpen);
      setConsultDropdownOpen(false);
      setSobreDropdownOpen(false);
      setPlanosDropdownOpen(false);
    } else if (type === 'sobre') {
      setSobreDropdownOpen(!sobreDropdownOpen);
      setConsultDropdownOpen(false);
      setCertDropdownOpen(false);
      setPlanosDropdownOpen(false);
    } else if (type === 'planos') {
      setPlanosDropdownOpen(!planosDropdownOpen);
      setConsultDropdownOpen(false);
      setCertDropdownOpen(false);
      setSobreDropdownOpen(false);
    }
  };

  const handleMouseEnter = (type) => {
    if (type === 'consult') {
      setConsultDropdownOpen(true);
      setCertDropdownOpen(false);
      setSobreDropdownOpen(false);
      setPlanosDropdownOpen(false);
    } else if (type === 'cert') {
      setCertDropdownOpen(true);
      setConsultDropdownOpen(false);
      setSobreDropdownOpen(false);
      setPlanosDropdownOpen(false);
    } else if (type === 'sobre') {
      setSobreDropdownOpen(true);
      setConsultDropdownOpen(false);
      setCertDropdownOpen(false);
      setPlanosDropdownOpen(false);
    } else if (type === 'planos') {
      setPlanosDropdownOpen(true);
      setConsultDropdownOpen(false);
      setCertDropdownOpen(false);
      setSobreDropdownOpen(false);
    }
  };

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
      if (planosDropdownOpen && !event.target.closest('.dropdown-planos')) {
        setPlanosDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [certDropdownOpen, consultDropdownOpen, sobreDropdownOpen, planosDropdownOpen]);
  
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
              onClick={scrollToTop}
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
              `lg:flex flex-grow items-center justify-between lg:shadow-none transition-all duration-300 ${
                scrolled ? 'bg-white backdrop-blur-sm' : 'bg-black/20 backdrop-blur-sm lg:bg-transparent'
              }` +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none gap-1 lg:gap-6">
              {/* EMPRESA */}
              <li className="flex items-center">
                <div className="relative dropdown-container dropdown-sobre" tabIndex={0}>
                  <button
                    className={`dropdown-button text-xs hover:text-[#5faee3] hover:bg-blueGray-50/60 hover:scale-105 px-2 py-2 flex items-center uppercase font-semibold rounded-xl transition-all duration-300 ease-in-out transform hover:translate-y-[-2px] hover:shadow-lg ${scrolled ? 'text-blueGray-700' : 'text-white hover:text-[#5faee3]'}`}
                    aria-haspopup="true"
                    aria-expanded={sobreDropdownOpen}
                    onClick={e => { e.preventDefault(); setSobreDropdownOpen(v => !v); }}
                  >
                    <i className="fas fa-building mr-2 text-base opacity-70"></i>Empresa
                    <i className={`dropdown-arrow fas fa-chevron-down ml-2 text-xs transition-transform duration-300 ${sobreDropdownOpen ? 'rotated' : ''}`}></i>
                  </button>
                  {sobreDropdownOpen && (
                    <div className="dropdown-menu">
                      <ul className="divide-y divide-blueGray-100">
                        <li><Link to="/sobre#imparcialidade" onClick={() => handleSubmenuClick('/sobre#imparcialidade')} className="dropdown-link"><i className="fas fa-balance-scale text-blueGray-500"></i>{intl.formatMessage({id: "navbar.sobre_imparcialidade"})}</Link></li>
                        <li><Link to="/sobre#confidencialidade" onClick={() => handleSubmenuClick('/sobre#confidencialidade')} className="dropdown-link"><i className="fas fa-lock text-blueGray-500"></i>{intl.formatMessage({id: "navbar.sobre_confidencialidade"})}</Link></li>
                        <li><Link to="/sobre#competencia" onClick={() => handleSubmenuClick('/sobre#competencia')} className="dropdown-link"><i className="fas fa-hand-sparkles text-blueGray-500"></i>{intl.formatMessage({id: "navbar.sobre_competencia"})}</Link></li>
                        <li><Link to="/sobre#responsabilidade" onClick={() => handleSubmenuClick('/sobre#responsabilidade')} className="dropdown-link"><i className="fas fa-hand-holding-heart text-blueGray-500"></i>{intl.formatMessage({id: "navbar.sobre_responsabilidade"})}</Link></li>
                        <li><Link to="/sobre#transparencia" onClick={() => handleSubmenuClick('/sobre#transparencia')} className="dropdown-link"><i className="fas fa-eye text-blueGray-500"></i>{intl.formatMessage({id: "navbar.sobre_transparencia"})}</Link></li>
                        <li><Link to="/sobre#reclamacoes-apelacoes" onClick={() => handleSubmenuClick('/sobre#reclamacoes-apelacoes')} className="dropdown-link"><i className="fas fa-gavel text-blueGray-500"></i>{intl.formatMessage({id: "navbar.sobre_reclamacoes"})}</Link></li>
                        <li><Link to="/sobre#auditoria-certificacao" onClick={() => handleSubmenuClick('/sobre#auditoria-certificacao')} className="dropdown-link"><i className="fas fa-search text-blueGray-500"></i>{intl.formatMessage({id: "navbar.sobre_auditoria"})}</Link></li>
                        <li><Link to="/sobre#sistema-gestao-interno" onClick={() => handleSubmenuClick('/sobre#sistema-gestao-interno')} className="dropdown-link"><i className="fas fa-building text-blueGray-500"></i>{intl.formatMessage({id: "navbar.sobre_sistema_gestao"})}</Link></li>
                        <li><Link to="/sobre#compliance" onClick={() => handleSubmenuClick('/sobre#compliance')} className="dropdown-link"><i className="fas fa-handshake text-blueGray-500"></i>{intl.formatMessage({id: "navbar.sobre_compliance"})}</Link></li>
                      </ul>
                    </div>
                  )}
                </div>
              </li>
              {/* SOLUÇÕES DE CONSULTORIA Dropdown */}
              <li className="flex items-center">
                <div className="relative dropdown-container dropdown-consult" tabIndex={0}>
                  <button
                    className={`dropdown-button text-xs hover:text-[#5faee3] hover:bg-blueGray-50/60 hover:scale-105 px-2 py-2 flex items-center uppercase font-semibold rounded-xl transition-all duration-300 ease-in-out transform hover:translate-y-[-2px] hover:shadow-lg ${
                      scrolled ? 'text-blueGray-700' : 'text-white hover:text-[#5faee3]'
                    } ${consultDropdownOpen ? 'bg-blueGray-50/80 text-[#5faee3]' : ''}`}
                    aria-haspopup="true"
                    aria-expanded={consultDropdownOpen}
                    onClick={e => { e.preventDefault(); setConsultDropdownOpen(v => !v); }}
                  >
                    <i className="fas fa-lightbulb mr-2 text-base opacity-70"></i>{intl.formatMessage({id: "navbar.consulting"})}
                    <i className={`dropdown-arrow fas fa-chevron-down ml-2 text-xs transition-transform duration-300 ${consultDropdownOpen ? 'rotated' : ''}`}></i>
                  </button>
                  {consultDropdownOpen && (
                    <div className="dropdown-mega-menu">
                      <div className="flex flex-col lg:flex-row w-full px-4 lg:px-6 gap-4 lg:gap-8">
                        {/* Submenu Ambiente */}
                        <div className="flex-1 min-w-0">
                          <div className="mega-menu-title">
                            <i className="fas fa-leaf mr-2 text-green-600"></i>
                            Ambiente
                          </div>
                          <ul className="space-y-1">
                            <li><Link to="/solucoes-consultoria#gestao_ambiental" onClick={() => handleSubmenuClick('/solucoes-consultoria#gestao_ambiental')} className="dropdown-link"><i className="fas fa-seedling text-green-500"></i><span className="dropdown-link-text">Gestão Ambiental e Sustentabilidade</span></Link></li>
                            <li><Link to="/solucoes-consultoria#impacto_ambiental" onClick={() => handleSubmenuClick('/solucoes-consultoria#impacto_ambiental')} className="dropdown-link"><i className="fas fa-chart-line text-green-500"></i><span className="dropdown-link-text">Avaliação de Impacto Ambiental</span></Link></li>
                            <li><Link to="/solucoes-consultoria#residuos" onClick={() => handleSubmenuClick('/solucoes-consultoria#residuos')} className="dropdown-link"><i className="fas fa-recycle text-green-500"></i><span className="dropdown-link-text">Auditoria de Resíduos</span></Link></li>
                            <li><Link to="/solucoes-consultoria#monitoramento" onClick={() => handleSubmenuClick('/solucoes-consultoria#monitoramento')} className="dropdown-link"><i className="fas fa-eye text-green-500"></i><span className="dropdown-link-text">Medição e Monitoramento Ambiental</span></Link></li>
                            <li><Link to="/solucoes-consultoria#aguas" onClick={() => handleSubmenuClick('/solucoes-consultoria#aguas')} className="dropdown-link"><i className="fas fa-tint text-green-500"></i><span className="dropdown-link-text">Tratamento de águas residuais</span></Link></li>
                            <li><Link to="/solucoes-consultoria#auditorias_ambientais" onClick={() => handleSubmenuClick('/solucoes-consultoria#auditorias_ambientais')} className="dropdown-link"><i className="fas fa-clipboard-check text-green-500"></i><span className="dropdown-link-text">Auditorias Ambientais</span></Link></li>
                            <li><Link to="/solucoes-consultoria#conformidade_ambiental" onClick={() => handleSubmenuClick('/solucoes-consultoria#conformidade_ambiental')} className="dropdown-link"><i className="fas fa-check-circle text-green-500"></i><span className="dropdown-link-text">Conformidade Legal Ambiental</span></Link></li>
                          </ul>
                        </div>
                        
                        <div className="mega-menu-divider lg:hidden"></div>
                        
                        {/* Submenu Saúde e Segurança */}
                        <div className="flex-1 min-w-0">
                          <div className="mega-menu-title">
                            <i className="fas fa-shield-alt mr-2 text-red-600"></i>
                            Saúde e Segurança
                          </div>
                          <ul className="space-y-1">
                            <li><Link to="/solucoes-consultoria#seguranca_trabalho" onClick={() => handleSubmenuClick('/solucoes-consultoria#seguranca_trabalho')} className="dropdown-link"><i className="fas fa-hard-hat text-red-500"></i><span className="dropdown-link-text">Segurança do Trabalho e Saúde Ocupacional</span></Link></li>
                            <li><Link to="/solucoes-consultoria#gestao_risco" onClick={() => handleSubmenuClick('/solucoes-consultoria#gestao_risco')} className="dropdown-link"><i className="fas fa-exclamation-triangle text-red-500"></i><span className="dropdown-link-text">Avaliação de risco</span></Link></li>
                            <li><Link to="/solucoes-consultoria#auditoria_seguranca" onClick={() => handleSubmenuClick('/solucoes-consultoria#auditoria_seguranca')} className="dropdown-link"><i className="fas fa-search text-red-500"></i><span className="dropdown-link-text">Auditoria de Segurança</span></Link></li>
                            <li><Link to="/solucoes-consultoria#emergencias" onClick={() => handleSubmenuClick('/solucoes-consultoria#emergencias')} className="dropdown-link"><i className="fas fa-ambulance text-red-500"></i><span className="dropdown-link-text">Gestão de Emergências e Crises</span></Link></li>
                            <li><Link to="/solucoes-consultoria#hse" onClick={() => handleSubmenuClick('/solucoes-consultoria#hse')} className="dropdown-link"><i className="fas fa-user-shield text-red-500"></i><span className="dropdown-link-text">Inspeção e vistoria de terceiros de HSE</span></Link></li>
                            <li><Link to="/solucoes-consultoria#operabilidade" onClick={() => handleSubmenuClick('/solucoes-consultoria#operabilidade')} className="dropdown-link"><i className="fas fa-cogs text-red-500"></i><span className="dropdown-link-text">Análise de Risco e Operabilidade</span></Link></li>
                            <li><Link to="/solucoes-consultoria#conformidade_hse" onClick={() => handleSubmenuClick('/solucoes-consultoria#conformidade_hse')} className="dropdown-link"><i className="fas fa-certificate text-red-500"></i><span className="dropdown-link-text">Conformidade legal de HSE</span></Link></li>
                          </ul>
                        </div>
                        
                        <div className="mega-menu-divider lg:hidden"></div>
                        
                        {/* Submenu Business Consulting */}
                        <div className="flex-1 min-w-0">
                          <div className="mega-menu-title">
                            <i className="fas fa-briefcase mr-2 text-blue-600"></i>
                            Business Consulting
                          </div>
                          <ul className="space-y-1">
                            <li><Link to="/business-consulting-formacoes#business_consulting" onClick={() => handleSubmenuClick('/business-consulting-formacoes#business_consulting')} className="dropdown-link"><i className="fas fa-chart-line text-blue-500"></i><span className="dropdown-link-text">Consultoria Empresarial</span></Link></li>
                            <li><Link to="/business-consulting-formacoes#gestao_projetos" onClick={() => handleSubmenuClick('/business-consulting-formacoes#gestao_projetos')} className="dropdown-link"><i className="fas fa-tasks text-blue-500"></i><span className="dropdown-link-text">Gestão de Projetos</span></Link></li>
                            <li><Link to="/business-consulting-formacoes#formacoes_profissionais" onClick={() => handleSubmenuClick('/business-consulting-formacoes#formacoes_profissionais')} className="dropdown-link"><i className="fas fa-graduation-cap text-blue-500"></i><span className="dropdown-link-text">Formações Profissionais - On-job</span></Link></li>
                            <li><Link to="/business-consulting-formacoes#treinamento_onjob" onClick={() => handleSubmenuClick('/business-consulting-formacoes#treinamento_onjob')} className="dropdown-link"><i className="fas fa-users text-blue-500"></i><span className="dropdown-link-text">Treinamento - On-job</span></Link></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </li>
              {/* CERTIFICAÇÃO ISO Dropdown */}
              <li className="flex items-center">
                <div className="relative dropdown-container dropdown-cert" tabIndex={0}>
                  <button
                    className={`dropdown-button text-xs hover:text-[#5faee3] hover:bg-blueGray-50/60 hover:scale-105 px-2 py-2 flex items-center uppercase font-semibold rounded-xl transition-all duration-300 ease-in-out transform hover:translate-y-[-2px] hover:shadow-lg ${
                    scrolled ? 'text-blueGray-700' : 'text-white hover:text-[#5faee3]'
                    } ${certDropdownOpen ? 'bg-blueGray-50/80 text-[#5faee3]' : ''}`}
                    aria-haspopup="true"
                    aria-expanded={certDropdownOpen}
                    onClick={e => { e.preventDefault(); setCertDropdownOpen(v => !v); }}
                >
                    <i className="fas fa-certificate mr-2 text-base opacity-70"></i>{intl.formatMessage({id: "navbar.certification"})}
                    <i className={`dropdown-arrow fas fa-chevron-down ml-2 text-xs transition-transform duration-300 ${certDropdownOpen ? 'rotated' : ''}`}></i>
                  </button>
                  {certDropdownOpen && (
                    <div className="dropdown-menu">
                      <div className="flex flex-col w-full px-4 lg:px-6 gap-4">
                        <div className="flex-1 min-w-0">
                          <ul className="space-y-1">
                            <li><Link to="/certificacao-iso#iso9001" onClick={() => handleSubmenuClick('/certificacao-iso#iso9001')} className="dropdown-link"><i className="fas fa-award text-blueGray-500"></i><span className="dropdown-link-text">Certificação ISO 9001</span></Link></li>
                            <li><Link to="/certificacao-iso#iso14001" onClick={() => handleSubmenuClick('/certificacao-iso#iso14001')} className="dropdown-link"><i className="fas fa-leaf text-green-500"></i><span className="dropdown-link-text">Certificação ISO 14001</span></Link></li>
                            <li><Link to="/certificacao-iso#iso22000" onClick={() => handleSubmenuClick('/certificacao-iso#iso22000')} className="dropdown-link"><i className="fas fa-utensils text-orange-500"></i><span className="dropdown-link-text">Certificação ISO 22000</span></Link></li>
                            <li><Link to="/certificacao-iso#iso27001" onClick={() => handleSubmenuClick('/certificacao-iso#iso27001')} className="dropdown-link"><i className="fas fa-shield-alt text-purple-500"></i><span className="dropdown-link-text">Certificação ISO 27001</span></Link></li>
                            <li><Link to="/certificacao-iso#iso45001" onClick={() => handleSubmenuClick('/certificacao-iso#iso45001')} className="dropdown-link"><i className="fas fa-hard-hat text-red-500"></i><span className="dropdown-link-text">Certificação ISO 45001</span></Link></li>
                            <li><Link to="/certificacao-iso#iso20000" onClick={() => handleSubmenuClick('/certificacao-iso#iso20000')} className="dropdown-link"><i className="fas fa-file-invoice text-blueGray-500"></i><span className="dropdown-link-text">Certificação ISO 20000</span></Link></li>
                            <li><Link to="/certificacao-iso#iso13485" onClick={() => handleSubmenuClick('/certificacao-iso#iso13485')} className="dropdown-link"><i className="fas fa-flask text-blueGray-500"></i><span className="dropdown-link-text">Certificação ISO 13485</span></Link></li>
                            <li><Link to="/certificacao-iso#iso29001" onClick={() => handleSubmenuClick('/certificacao-iso#iso29001')} className="dropdown-link"><i className="fas fa-chart-bar text-blueGray-500"></i><span className="dropdown-link-text">Certificação ISO 29001</span></Link></li>
                            <li><Link to="/certificacao-iso#iso10002" onClick={() => handleSubmenuClick('/certificacao-iso#iso10002')} className="dropdown-link"><i className="fas fa-file-alt text-green-500"></i><span className="dropdown-link-text">Certificação ISO 10002</span></Link></li>
                            <li><Link to="/certificacao-iso#iso22716" onClick={() => handleSubmenuClick('/certificacao-iso#iso22716')} className="dropdown-link"><i className="fas fa-certificate text-red-500"></i><span className="dropdown-link-text">Certificação ISO 22716</span></Link></li>
                            <li><Link to="/certificacao-iso#iso50001" onClick={() => handleSubmenuClick('/certificacao-iso#iso50001')} className="dropdown-link"><i className="fas fa-file-invoice text-blueGray-500"></i><span className="dropdown-link-text">Certificação ISO 50001</span></Link></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                            </li>
              {/* PLANOS Dropdown */}
              <li className="flex items-center">
                <div className="relative dropdown-container dropdown-planos" tabIndex={0}>
                  <button
                    className={`dropdown-button text-xs hover:text-[#5faee3] hover:bg-blueGray-50/60 hover:scale-105 px-2 py-2 flex items-center uppercase font-semibold rounded-xl transition-all duration-300 ease-in-out transform hover:translate-y-[-2px] hover:shadow-lg ${
                      scrolled ? 'text-blueGray-700' : 'text-white hover:text-[#5faee3]'
                    } ${planosDropdownOpen ? 'bg-blueGray-50/80 text-[#5faee3]' : ''}`}
                    aria-haspopup="true"
                    aria-expanded={planosDropdownOpen}
                    onClick={e => { e.preventDefault(); setPlanosDropdownOpen(v => !v); }}
                  >
                    <i className="fas fa-dollar-sign mr-2 text-base opacity-70"></i><FormattedMessage id="navbar.plans" />
                    <i className={`dropdown-arrow fas fa-chevron-down ml-2 text-xs transition-transform duration-300 ${planosDropdownOpen ? 'rotated' : ''}`}></i>
                  </button>
                  {planosDropdownOpen && (
                    <div className="dropdown-menu-planos">
                      <div className="flex flex-col w-full px-4 lg:px-6 gap-4">
                        <div className="flex-1 min-w-0">
                          <ul className="space-y-1">
                            <li><Link to="/planos#standard" onClick={() => handleSubmenuClick('/planos#standard')} className="dropdown-link"><i className="fas fa-star text-yellow-500"></i><span className="dropdown-link-text">Standard</span></Link></li>
                            <li><Link to="/planos#premium" onClick={() => handleSubmenuClick('/planos#premium')} className="dropdown-link"><i className="fas fa-crown text-purple-500"></i><span className="dropdown-link-text">Premium</span></Link></li>
                            <li><Link to="/planos#ultimate" onClick={() => handleSubmenuClick('/planos#ultimate')} className="dropdown-link"><i className="fas fa-gem text-blue-500"></i><span className="dropdown-link-text">Ultimate</span></Link></li>
                            <li><Link to="/planos#advanced" onClick={() => handleSubmenuClick('/planos#advanced')} className="dropdown-link"><i className="fas fa-rocket text-green-500"></i><span className="dropdown-link-text">Advanced</span></Link></li>
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
                  onClick={scrollToTop}
                  className={`text-xs hover:text-[#5faee3] hover:bg-blueGray-50/60 hover:scale-105 px-2 py-2 flex items-center uppercase font-semibold rounded-xl transition-all duration-300 ease-in-out transform hover:translate-y-[-2px] hover:shadow-lg ${
                    scrolled ? 'text-blueGray-700' : 'text-white hover:text-[#5faee3]'
                  }`}
                >
                  <i className="fas fa-envelope mr-2 text-base opacity-70"></i><FormattedMessage id="navbar.contacts" />
                </Link>
              </li>
            </ul>
            {/* Seletor de idioma - Fixo na direita */}
            <div className="flex items-center" style={{ minWidth: 70 }}>
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
            </div>
          </div>
        </div>
      </nav>
      
    </>
  );
}

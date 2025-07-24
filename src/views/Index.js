/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

// import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import Slider from "components/Slider.js";

// Importar imagem
// import visaovaloresImage from "assets/img/visaovalores.png";
import { useIntl } from "react-intl";

export default function Index() {
  const intl = useIntl();
  return (
    <>
      {/* <IndexNavbar fixed /> */}
      <Slider />

      <section className="pt-6 relative bg-white">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
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
              className="text-blueGray-100 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-full px-4 ml-auto mr-auto text-center">
              {/* Removido bloco do setor index_oilgas_title/index_oilgas_desc conforme solicitado */}
            </div>

            {/* Cards de serviços removidos - mantendo apenas o card principal */}
          </div>
        </div>

        {/* Nossos Serviços Section */}
        <section className="pt-20 pb-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl p-8 lg:p-12 border border-white">
              <div className="text-center mb-12">
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-black">
                  {intl.formatMessage({id: "index_services_title"})}
                </h2>
                <div className="w-24 h-1 bg-gray-400 mx-auto mb-4"></div>
                <p className="text-xl leading-relaxed text-black/90 max-w-4xl mx-auto">
                  {intl.formatMessage({id: "index_services_desc"})}
                </p>
              </div>
              <div className="grid grid-cols-1 gap-8">
                <div className="flex flex-row gap-8 justify-center">
                {/* Ambiente */}
                  <div className="bg-white rounded-2xl p-6 flex flex-col items-center w-[350px] text-center mb-8 animate-fade-in-up hover:shadow-2xl hover:border-maea-blue hover:scale-[1.03] transition-all duration-300">
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full p-8">
                    <div className="flex flex-col items-center">
                      <div className="text-blueGray-700 flex items-center justify-center w-16 h-16 mb-5 shadow-lg rounded-full bg-white text-3xl">
                        <i className="fas fa-leaf"></i>
                      </div>
                      <h3 className="text-xl font-bold text-blueGray-800 mb-2 uppercase">{intl.formatMessage({id: "index_services_ambiente_title"})}</h3>
                      <span className="block w-10 h-1 bg-gradient-to-r-from-maea-blue-to-maea-blue rounded mb-4"></span>
                      <p className="text-blueGray-700 text-sm leading-relaxed mb-4 text-center max-w-xs mx-auto line-clamp-3">
                        {intl.formatMessage({id: "index_services_ambiente_desc"})}
                      </p>
                      <a href="/solucoes-consultoria#gestao_ambiental" className="inline-flex items-center gap-2 rounded bg-gradient-to-r-from-maea-blue-to-maea-blue text-white font-semibold shadow-md hover:from-maea-blue hover:to-maea-blue hover:shadow-lg transition-all duration-300 mt-2 mb-2.5" style={{width: '120px', height: '40px', justifyContent: 'center', alignItems: 'center'}}>
                        <i className="fas fa-arrow-right"></i>
                        <span className="text-sm">{intl.formatMessage({id: "index_read_more"})}</span>
                      </a>
                    </div>
                  </div>
                </div>
                {/* Business Consulting */}
                  <div className="bg-white rounded-2xl p-6 flex flex-col items-center w-[350px] text-center mb-8 animate-fade-in-up hover:shadow-2xl hover:border-maea-blue hover:scale-[1.03] transition-all duration-300">
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full p-8">
                    <div className="flex flex-col items-center">
                      <div className="text-blueGray-700 flex items-center justify-center w-16 h-16 mb-5 shadow-lg rounded-full bg-white text-3xl">
                        <i className="fas fa-briefcase"></i>
                      </div>
                      <h3 className="text-xl font-bold text-blueGray-800 mb-2 uppercase">{intl.formatMessage({id: "index_services_business_title"})}</h3>
                      <span className="block w-10 h-1 bg-gradient-to-r-from-maea-blue-to-maea-blue rounded mb-4"></span>
                      <p className="text-blueGray-700 text-sm leading-relaxed mb-4 text-center max-w-xs mx-auto line-clamp-3">
                        {intl.formatMessage({id: "index_services_business_desc"})}
                      </p>
                      <a href="/business-consulting-formacoes#business_consulting" className="inline-flex items-center gap-2 rounded bg-gradient-to-r-from-maea-blue-to-maea-blue text-white font-semibold shadow-md hover:from-maea-blue hover:to-maea-blue hover:shadow-lg transition-all duration-300 mt-2 mb-2.5" style={{width: '120px', height: '40px', justifyContent: 'center', alignItems: 'center'}}>
                        <i className="fas fa-arrow-right"></i>
                        <span className="text-sm">{intl.formatMessage({id: "index_read_more"})}</span>
                      </a>
                    </div>
                  </div>
                </div>
                </div>
                <div className="flex flex-row gap-8 justify-center">
                {/* Formações Profissional */}
                  <div className="bg-white rounded-2xl p-6 flex flex-col items-center w-[350px] text-center mb-8 animate-fade-in-up hover:shadow-2xl hover:border-maea-blue hover:scale-[1.03] transition-all duration-300">
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full p-8">
                    <div className="flex flex-col items-center">
                      <div className="text-blueGray-700 flex items-center justify-center w-16 h-16 mb-5 shadow-lg rounded-full bg-white text-3xl">
                        <i className="fas fa-chalkboard-teacher"></i>
                      </div>
                      <h3 className="text-xl font-bold text-blueGray-800 mb-2 uppercase">{intl.formatMessage({id: "index_services_training_title"})}</h3>
                      <span className="block w-10 h-1 bg-gradient-to-r-from-maea-blue-to-maea-blue rounded mb-4"></span>
                      <p className="text-blueGray-700 text-sm leading-relaxed mb-4 text-center max-w-xs mx-auto line-clamp-3">
                        {intl.formatMessage({id: "index_services_training_desc"})}
                      </p>
                      <a href="/business-consulting-formacoes#formacoes_profissional" className="inline-flex items-center gap-2 rounded bg-gradient-to-r-from-maea-blue-to-maea-blue text-white font-semibold shadow-md hover:from-maea-blue hover:to-maea-blue hover:shadow-lg transition-all duration-300 mt-2 mb-2.5" style={{width: '120px', height: '40px', justifyContent: 'center', alignItems: 'center'}}>
                        <i className="fas fa-arrow-right"></i>
                        <span className="text-sm">{intl.formatMessage({id: "index_read_more"})}</span>
                      </a>
                    </div>
                  </div>
                </div>
                {/* Saúde e Segurança */}
                  <div className="bg-white rounded-2xl p-6 flex flex-col items-center w-[350px] text-center mb-8 animate-fade-in-up hover:shadow-2xl hover:border-maea-blue hover:scale-[1.03] transition-all duration-300">
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full p-8">
                    <div className="flex flex-col items-center">
                      <div className="text-blueGray-700 flex items-center justify-center w-16 h-16 mb-5 shadow-lg rounded-full bg-white text-3xl">
                        <i className="fas fa-cogs"></i>
                      </div>
                      <h3 className="text-xl font-bold text-blueGray-800 mb-2 uppercase">{intl.formatMessage({id: "index_services_safety_title"})}</h3>
                      <span className="block w-10 h-1 bg-gradient-to-r-from-maea-blue-to-maea-blue rounded mb-4"></span>
                      <p className="text-blueGray-700 text-sm leading-relaxed mb-4 text-center max-w-xs mx-auto line-clamp-3">
                          {intl.formatMessage({id: "index_services_safety_desc"})}
                      </p>
                      <a href="/solucoes-consultoria#seguranca_trabalho" className="inline-flex items-center gap-2 rounded bg-gradient-to-r-from-maea-blue-to-maea-blue text-white font-semibold shadow-md hover:from-maea-blue hover:to-maea-blue hover:shadow-lg transition-all duration-300 mt-2 mb-2.5" style={{width: '120px', height: '40px', justifyContent: 'center', alignItems: 'center'}}>
                        <i className="fas fa-arrow-right"></i>
                        <span className="text-sm">{intl.formatMessage({id: "index_read_more"})}</span>
                      </a>
                    </div>
                  </div>
                </div>
                </div>
                <div className="flex flex-row gap-8 justify-center">
                {/* Certificação ISO */}
                  <div className="bg-white rounded-2xl p-6 flex flex-col items-center w-[350px] text-center mb-8 animate-fade-in-up hover:shadow-2xl hover:border-maea-blue hover:scale-[1.03] transition-all duration-300">
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full p-8">
                    <div className="flex flex-col items-center">
                      <div className="text-blueGray-700 flex items-center justify-center w-16 h-16 mb-5 shadow-lg rounded-full bg-white text-3xl">
                        <i className="fas fa-bookmark"></i>
                      </div>
                      <h3 className="text-xl font-bold text-blueGray-800 mb-2 uppercase">{intl.formatMessage({id: "index_services_iso_title"})}</h3>
                      <span className="block w-10 h-1 bg-gradient-to-r-from-maea-blue-to-maea-blue rounded mb-4"></span>
                      <p className="text-blueGray-700 text-sm leading-relaxed mb-4 text-center max-w-xs mx-auto line-clamp-3">
                        {intl.formatMessage({id: "index_services_iso_desc"})}
                      </p>
                      <a href="/certificacao-iso" className="inline-flex items-center gap-2 rounded bg-gradient-to-r-from-maea-blue-to-maea-blue text-white font-semibold shadow-md hover:from-maea-blue hover:to-maea-blue hover:shadow-lg transition-all duration-300 mt-2 mb-2.5" style={{width: '120px', height: '40px', justifyContent: 'center', alignItems: 'center'}}>
                        <i className="fas fa-arrow-right"></i>
                        <span className="text-sm">{intl.formatMessage({id: "index_read_more"})}</span>
                      </a>
                    </div>
                  </div>
                </div>
                {/* Treinamentos */}
                  <div className="bg-white rounded-2xl p-6 flex flex-col items-center w-[350px] text-center mb-8 animate-fade-in-up hover:shadow-2xl hover:border-maea-blue hover:scale-[1.03] transition-all duration-300">
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full p-8">
                    <div className="flex flex-col items-center">
                      <div className="text-blueGray-700 flex items-center justify-center w-16 h-16 mb-5 shadow-lg rounded-full bg-white text-3xl">
                        <i className="fas fa-users"></i>
                      </div>
                      <h3 className="text-xl font-bold text-blueGray-800 mb-2 uppercase">{intl.formatMessage({id: "index_services_treinamentos_title"})}</h3>
                      <span className="block w-10 h-1 bg-gradient-to-r-from-maea-blue-to-maea-blue rounded mb-4"></span>
                      <p className="text-blueGray-700 text-sm leading-relaxed mb-4 text-center max-w-xs mx-auto line-clamp-3">
                          {intl.formatMessage({id: "index_services_treinamentos_desc"})}
                      </p>
                      <a href="/treinamento" className="inline-flex items-center gap-2 rounded bg-gradient-to-r-from-maea-blue-to-maea-blue text-white font-semibold shadow-md hover:from-maea-blue hover:to-maea-blue hover:shadow-lg transition-all duration-300 mt-2 mb-2.5" style={{width: '120px', height: '40px', justifyContent: 'center', alignItems: 'center'}}>
                        <i className="fas fa-arrow-right"></i>
                        <span className="text-sm">{intl.formatMessage({id: "index_read_more"})}</span>
                      </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certificação ISO Section */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto max-w-7xl px-2 sm:px-4">
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl p-8 lg:p-12 border border-white">
              {/* Header Section */}
              <div className="text-center mb-12">
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-black">
                  {intl.formatMessage({id: "index_iso_title"})}
                </h2>
                <p className="text-xl leading-relaxed text-black/90 max-w-4xl mx-auto">
                  {intl.formatMessage({id: "index_iso_desc"})}
                </p>
              </div>
              {/* Cards no formato Nossos Serviços */}
              <div className="flex flex-wrap justify-center gap-8">
                {/* Card 1 */}
                <div className="bg-white rounded-2xl p-8 flex flex-col items-center w-full sm:w-8/12 md:w-5/12 lg:w-1/4 text-center mb-8 animate-fade-in-up hover:shadow-2xl hover:border-maea-blue hover:scale-[1.03] transition-all duration-300">
                  <div className="flex items-center justify-center w-20 h-20 mb-5 rounded-full bg-white shadow text-blueGray-700 text-4xl">
                        <i className="fas fa-check-circle"></i>
                    </div>
                      <h3 className="text-xl font-bold text-blueGray-800 mb-2 uppercase">{intl.formatMessage({id: "index_iso_9001_title"})}</h3>
                      <span className="block w-10 h-1 bg-gradient-to-r-from-maea-blue-to-maea-blue rounded mb-4"></span>
                  <p className="text-blueGray-700 text-sm leading-relaxed mb-4 text-center max-w-xs mx-auto line-clamp-3">
                      {intl.formatMessage({id: "index_iso_9001_desc"})}
                    </p>
                  <a href="#" className="inline-flex items-center gap-2 rounded bg-gradient-to-r-from-maea-blue-to-maea-blue text-white font-semibold shadow-md hover:from-maea-blue hover:to-maea-blue hover:shadow-lg transition-all duration-300 mt-2" style={{width: '120px', height: '40px', justifyContent: 'center', alignItems: 'center'}}>
                    <i className="fas fa-arrow-right"></i>
                    <span className="text-sm">{intl.formatMessage({id: "index_read_more"})}</span>
                      </a>
                </div>
                {/* Card 2 */}
                <div className="bg-white rounded-2xl p-8 flex flex-col items-center w-full sm:w-8/12 md:w-5/12 lg:w-1/4 text-center mb-8 animate-fade-in-up hover:shadow-2xl hover:border-maea-blue hover:scale-[1.03] transition-all duration-300">
                  <div className="flex items-center justify-center w-20 h-20 mb-5 rounded-full bg-white shadow text-blueGray-700 text-4xl">
                        <i className="fas fa-leaf"></i>
                    </div>
                      <h3 className="text-xl font-bold text-blueGray-800 mb-2 uppercase">{intl.formatMessage({id: "index_iso_14001_title"})}</h3>
                      <span className="block w-10 h-1 bg-gradient-to-r-from-maea-blue-to-maea-blue rounded mb-4"></span>
                  <p className="text-blueGray-700 text-sm leading-relaxed mb-4 text-center max-w-xs mx-auto line-clamp-3">
                      {intl.formatMessage({id: "index_iso_14001_desc"})}
                    </p>
                  <a href="#" className="inline-flex items-center gap-2 rounded bg-gradient-to-r-from-maea-blue-to-maea-blue text-white font-semibold shadow-md hover:from-maea-blue hover:to-maea-blue hover:shadow-lg transition-all duration-300 mt-2" style={{width: '120px', height: '40px', justifyContent: 'center', alignItems: 'center'}}>
                    <i className="fas fa-arrow-right"></i>
                    <span className="text-sm">{intl.formatMessage({id: "index_read_more"})}</span>
                      </a>
                </div>
                {/* Card 3 */}
                <div className="bg-white rounded-2xl p-8 flex flex-col items-center w-full sm:w-8/12 md:w-5/12 lg:w-1/4 text-center mb-8 animate-fade-in-up hover:shadow-2xl hover:border-maea-blue hover:scale-[1.03] transition-all duration-300">
                  <div className="flex items-center justify-center w-20 h-20 mb-5 rounded-full bg-white shadow text-blueGray-700 text-4xl">
                        <i className="fas fa-hard-hat"></i>
                    </div>
                      <h3 className="text-xl font-bold text-blueGray-800 mb-2 uppercase">{intl.formatMessage({id: "index_ohsas_18001_title"})}</h3>
                      <span className="block w-10 h-1 bg-gradient-to-r-from-maea-blue-to-maea-blue rounded mb-4"></span>
                  <p className="text-blueGray-700 text-sm leading-relaxed mb-4 text-center max-w-xs mx-auto line-clamp-3">
                      {intl.formatMessage({id: "index_ohsas_18001_desc"})}
                    </p>
                  <a href="#" className="inline-flex items-center gap-2 rounded bg-gradient-to-r-from-maea-blue-to-maea-blue text-white font-semibold shadow-md hover:from-maea-blue hover:to-maea-blue hover:shadow-lg transition-all duration-300 mt-2" style={{width: '120px', height: '40px', justifyContent: 'center', alignItems: 'center'}}>
                    <i className="fas fa-arrow-right"></i>
                    <span className="text-sm">{intl.formatMessage({id: "index_read_more"})}</span>
                      </a>
                </div>
                {/* Card 4 */}
                <div className="bg-white rounded-2xl p-8 flex flex-col items-center w-full sm:w-8/12 md:w-5/12 lg:w-1/4 text-center mb-8 animate-fade-in-up hover:shadow-2xl hover:border-maea-blue hover:scale-[1.03] transition-all duration-300">
                  <div className="flex items-center justify-center w-20 h-20 mb-5 rounded-full bg-white shadow text-blueGray-700 text-4xl">
                        <i className="fas fa-apple-alt"></i>
                    </div>
                      <h3 className="text-xl font-bold text-blueGray-800 mb-2 uppercase">{intl.formatMessage({id: "index_iso_22000_title"})}</h3>
                      <span className="block w-10 h-1 bg-gradient-to-r-from-maea-blue-to-maea-blue rounded mb-4"></span>
                  <p className="text-blueGray-700 text-sm leading-relaxed mb-4 text-center max-w-xs mx-auto line-clamp-3">
                      {intl.formatMessage({id: "index_iso_22000_desc"})}
                    </p>
                  <a href="#" className="inline-flex items-center gap-2 rounded bg-gradient-to-r-from-maea-blue-to-maea-blue text-white font-semibold shadow-md hover:from-maea-blue hover:to-maea-blue hover:shadow-lg transition-all duration-300 mt-2" style={{width: '120px', height: '40px', justifyContent: 'center', alignItems: 'center'}}>
                    <i className="fas fa-arrow-right"></i>
                    <span className="text-sm">{intl.formatMessage({id: "index_read_more"})}</span>
                      </a>
                </div>
                {/* Card 5 */}
                <div className="bg-white rounded-2xl p-8 flex flex-col items-center w-full sm:w-8/12 md:w-5/12 lg:w-1/4 text-center mb-8 animate-fade-in-up hover:shadow-2xl hover:border-maea-blue hover:scale-[1.03] transition-all duration-300">
                  <div className="flex items-center justify-center w-20 h-20 mb-5 rounded-full bg-white shadow text-blueGray-700 text-4xl">
                        <i className="fas fa-utensils"></i>
                    </div>
                      <h3 className="text-xl font-bold text-blueGray-800 mb-2 uppercase">{intl.formatMessage({id: "index_haccp_title"})}</h3>
                      <span className="block w-10 h-1 bg-gradient-to-r-from-maea-blue-to-maea-blue rounded mb-4"></span>
                  <p className="text-blueGray-700 text-sm leading-relaxed mb-4 text-center max-w-xs mx-auto line-clamp-3">
                      {intl.formatMessage({id: "index_haccp_desc"})}
                    </p>
                  <a href="#" className="inline-flex items-center gap-2 rounded bg-gradient-to-r-from-maea-blue-to-maea-blue text-white font-semibold shadow-md hover:from-maea-blue hover:to-maea-blue hover:shadow-lg transition-all duration-300 mt-2" style={{width: '120px', height: '40px', justifyContent: 'center', alignItems: 'center'}}>
                    <i className="fas fa-arrow-right"></i>
                    <span className="text-sm">{intl.formatMessage({id: "index_read_more"})}</span>
                      </a>
                </div>
                {/* Card 6 */}
                <div className="bg-white rounded-2xl p-8 flex flex-col items-center w-full sm:w-8/12 md:w-5/12 lg:w-1/4 text-center mb-8 animate-fade-in-up hover:shadow-2xl hover:border-maea-blue hover:scale-[1.03] transition-all duration-300">
                  <div className="flex items-center justify-center w-20 h-20 mb-5 rounded-full bg-white shadow text-blueGray-700 text-4xl">
                        <i className="fas fa-shield-alt"></i>
                    </div>
                      <h3 className="text-xl font-bold text-blueGray-800 mb-2 uppercase">{intl.formatMessage({id: "index_iso_27001_title"})}</h3>
                      <span className="block w-10 h-1 bg-gradient-to-r-from-maea-blue-to-maea-blue rounded mb-4"></span>
                  <p className="text-blueGray-700 text-sm leading-relaxed mb-4 text-center max-w-xs mx-auto line-clamp-3">
                      {intl.formatMessage({id: "index_iso_27001_desc"})}
                    </p>
                  <a href="#" className="inline-flex items-center gap-2 rounded bg-gradient-to-r-from-maea-blue-to-maea-blue text-white font-semibold shadow-md hover:from-maea-blue hover:to-maea-blue hover:shadow-lg transition-all duration-300 mt-2" style={{width: '120px', height: '40px', justifyContent: 'center', alignItems: 'center'}}>
                    <i className="fas fa-arrow-right"></i>
                    <span className="text-sm">{intl.formatMessage({id: "index_read_more"})}</span>
                      </a>
                </div>
                {/* Card 7 - ISO 20000 */}
                <div className="bg-white rounded-2xl p-8 flex flex-col items-center w-full sm:w-8/12 md:w-5/12 lg:w-1/4 text-center mb-8 animate-fade-in-up hover:shadow-2xl hover:border-maea-blue hover:scale-[1.03] transition-all duration-300">
                  <div className="flex items-center justify-center w-20 h-20 mb-5 rounded-full bg-white shadow text-blueGray-700 text-4xl">
                    <i className="fas fa-network-wired"></i>
                    </div>
                      <h3 className="text-xl font-bold text-blueGray-800 mb-2 uppercase">{intl.formatMessage({id: "index_iso_20000_title"})}</h3>
                      <span className="block w-10 h-1 bg-gradient-to-r-from-maea-blue-to-maea-blue rounded mb-4"></span>
                  <p className="text-blueGray-700 text-sm leading-relaxed mb-4 text-center max-w-xs mx-auto line-clamp-3">
                      {intl.formatMessage({id: "index_iso_20000_desc"})}
                    </p>
                  <a href="#" className="inline-flex items-center gap-2 rounded bg-gradient-to-r-from-maea-blue-to-maea-blue text-white font-semibold shadow-md hover:from-maea-blue hover:to-maea-blue hover:shadow-lg transition-all duration-300 mt-2" style={{width: '120px', height: '40px', justifyContent: 'center', alignItems: 'center'}}>
                    <i className="fas fa-arrow-right"></i>
                    <span className="text-sm">{intl.formatMessage({id: "index_read_more"})}</span>
                      </a>
                </div>
                {/* Card 8 - ISO 13485 */}
                <div className="bg-white rounded-2xl p-8 flex flex-col items-center w-full sm:w-8/12 md:w-5/12 lg:w-1/4 text-center mb-8 animate-fade-in-up hover:shadow-2xl hover:border-maea-blue hover:scale-[1.03] transition-all duration-300">
                  <div className="flex items-center justify-center w-20 h-20 mb-5 rounded-full bg-white shadow text-blueGray-700 text-4xl">
                    <i className="fas fa-stethoscope"></i>
                    </div>
                      <h3 className="text-xl font-bold text-blueGray-800 mb-2 uppercase">{intl.formatMessage({id: "index_iso_13485_title"})}</h3>
                      <span className="block w-10 h-1 bg-gradient-to-r-from-maea-blue-to-maea-blue rounded mb-4"></span>
                  <p className="text-blueGray-700 text-sm leading-relaxed mb-4 text-center max-w-xs mx-auto line-clamp-3">
                      {intl.formatMessage({id: "index_iso_13485_desc"})}
                    </p>
                  <a href="#" className="inline-flex items-center gap-2 rounded bg-gradient-to-r-from-maea-blue-to-maea-blue text-white font-semibold shadow-md hover:from-maea-blue hover:to-maea-blue hover:shadow-lg transition-all duration-300 mt-2" style={{width: '120px', height: '40px', justifyContent: 'center', alignItems: 'center'}}>
                    <i className="fas fa-arrow-right"></i>
                    <span className="text-sm">{intl.formatMessage({id: "index_read_more"})}</span>
                      </a>
                </div>
                {/* Card 9 - ISO 29001 */}
                <div className="bg-white rounded-2xl p-8 flex flex-col items-center w-full sm:w-8/12 md:w-5/12 lg:w-1/4 text-center mb-8 animate-fade-in-up hover:shadow-2xl hover:border-maea-blue hover:scale-[1.03] transition-all duration-300">
                  <div className="flex items-center justify-center w-20 h-20 mb-5 rounded-full bg-white shadow text-blueGray-700 text-4xl">
                    <i className="fas fa-industry"></i>
                    </div>
                      <h3 className="text-xl font-bold text-blueGray-800 mb-2 uppercase">{intl.formatMessage({id: "index_iso_29001_title"})}</h3>
                      <span className="block w-10 h-1 bg-gradient-to-r-from-maea-blue-to-maea-blue rounded mb-4"></span>
                  <p className="text-blueGray-700 text-sm leading-relaxed mb-4 text-center max-w-xs mx-auto line-clamp-3">
                      {intl.formatMessage({id: "index_iso_29001_desc"})}
                    </p>
                  <a href="#" className="inline-flex items-center gap-2 rounded bg-gradient-to-r-from-maea-blue-to-maea-blue text-white font-semibold shadow-md hover:from-maea-blue hover:to-maea-blue hover:shadow-lg transition-all duration-300 mt-2" style={{width: '120px', height: '40px', justifyContent: 'center', alignItems: 'center'}}>
                    <i className="fas fa-arrow-right"></i>
                    <span className="text-sm">{intl.formatMessage({id: "index_read_more"})}</span>
                      </a>
                </div>
                {/* Card 10 - ISO 22716 */}
                <div className="bg-white rounded-2xl p-8 flex flex-col items-center w-full sm:w-8/12 md:w-5/12 lg:w-1/4 text-center mb-8 animate-fade-in-up hover:shadow-2xl hover:border-maea-blue hover:scale-[1.03] transition-all duration-300">
                  <div className="flex items-center justify-center w-20 h-20 mb-5 rounded-full bg-white shadow text-blueGray-700 text-4xl">
                    <i className="fas fa-flask"></i>
                    </div>
                      <h3 className="text-xl font-bold text-blueGray-800 mb-2 uppercase">{intl.formatMessage({id: "index_iso_22716_title"})}</h3>
                      <span className="block w-10 h-1 bg-gradient-to-r-from-maea-blue-to-maea-blue rounded mb-4"></span>
                  <p className="text-blueGray-700 text-sm leading-relaxed mb-4 text-center max-w-xs mx-auto line-clamp-3">
                      {intl.formatMessage({id: "index_iso_22716_desc"})}
                    </p>
                  <a href="#" className="inline-flex items-center gap-2 rounded bg-gradient-to-r-from-maea-blue-to-maea-blue text-white font-semibold shadow-md hover:from-maea-blue hover:to-maea-blue hover:shadow-lg transition-all duration-300 mt-2" style={{width: '120px', height: '40px', justifyContent: 'center', alignItems: 'center'}}>
                    <i className="fas fa-arrow-right"></i>
                    <span className="text-sm">{intl.formatMessage({id: "index_read_more"})}</span>
                      </a>
                </div>
                {/* Card 11 - ISO 50001 */}
                <div className="bg-white rounded-2xl p-8 flex flex-col items-center w-full sm:w-8/12 md:w-5/12 lg:w-1/4 text-center mb-8 animate-fade-in-up hover:shadow-2xl hover:border-maea-blue hover:scale-[1.03] transition-all duration-300">
                  <div className="flex items-center justify-center w-20 h-20 mb-5 rounded-full bg-white shadow text-blueGray-700 text-4xl">
                    <i className="fas fa-bolt"></i>
                    </div>
                      <h3 className="text-xl font-bold text-blueGray-800 mb-2 uppercase">{intl.formatMessage({id: "index_iso_50001_title"})}</h3>
                      <span className="block w-10 h-1 bg-gradient-to-r-from-maea-blue-to-maea-blue rounded mb-4"></span>
                  <p className="text-blueGray-700 text-sm leading-relaxed mb-4 text-center max-w-xs mx-auto line-clamp-3">
                      {intl.formatMessage({id: "index_iso_50001_desc"})}
                    </p>
                  <a href="#" className="inline-flex items-center gap-2 rounded bg-gradient-to-r-from-maea-blue-to-maea-blue text-white font-semibold shadow-md hover:from-maea-blue hover:to-maea-blue hover:shadow-lg transition-all duration-300 mt-2" style={{width: '120px', height: '40px', justifyContent: 'center', alignItems: 'center'}}>
                    <i className="fas fa-arrow-right"></i>
                    <span className="text-sm">{intl.formatMessage({id: "index_read_more"})}</span>
                      </a>
                </div>
                {/* Card 12 - ISO 10002 */}
                <div className="bg-white rounded-2xl p-8 flex flex-col items-center w-full sm:w-8/12 md:w-5/12 lg:w-1/4 text-center mb-8 animate-fade-in-up hover:shadow-2xl hover:border-maea-blue hover:scale-[1.03] transition-all duration-300">
                  <div className="flex items-center justify-center w-20 h-20 mb-5 rounded-full bg-white shadow text-blueGray-700 text-4xl">
                    <i className="fas fa-comments"></i>
                    </div>
                      <h3 className="text-xl font-bold text-blueGray-800 mb-2 uppercase">{intl.formatMessage({id: "index_iso_10002_title"})}</h3>
                      <span className="block w-10 h-1 bg-gradient-to-r-from-maea-blue-to-maea-blue rounded mb-4"></span>
                  <p className="text-blueGray-700 text-sm leading-relaxed mb-4 text-center max-w-xs mx-auto line-clamp-3">
                      {intl.formatMessage({id: "index_iso_10002_desc"})}
                    </p>
                  <a href="#" className="inline-flex items-center gap-2 rounded bg-gradient-to-r-from-maea-blue-to-maea-blue text-white font-semibold shadow-md hover:from-maea-blue hover:to-maea-blue hover:shadow-lg transition-all duration-300 mt-2" style={{width: '120px', height: '40px', justifyContent: 'center', alignItems: 'center'}}>
                    <i className="fas fa-arrow-right"></i>
                    <span className="text-sm">{intl.formatMessage({id: "index_read_more"})}</span>
                      </a>
                </div>
              </div>
              {/* Call to Action */}
              <div className="text-center mt-12 pt-8 border-t border-[steelblue]">
                <p className="text-black/90 text-lg mb-4">
                  {intl.formatMessage({id: "index_iso_cta"})}
                </p>
                <a href="/certificacao" className="inline-flex items-center bg-black/20 text-black font-bold py-3 px-8 rounded-xl hover:bg-black/30 transition-all duration-300">
                  <i className="fas fa-certificate mr-2"></i>
                  {intl.formatMessage({id: "index_iso_cta_btn"})}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Ambiente Section */}
        <section className="pt-8 pb-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl p-8 lg:p-12 border border-white">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-black">
                {intl.formatMessage({id: "index_ambiente_title"})}
              </h2>
              <div className="w-full h-1 bg-[steelblue] mx-auto"></div>
            </div>
            {/* Cards de alta qualidade */}
              <div className="grid grid-cols-1 gap-8">
                <div className="flex flex-row gap-8 justify-center">
                  {/* Card 1 - Avaliação de Impacto Ambiental */}
                  <div className="bg-white rounded-2xl p-6 flex flex-col items-center w-[350px] text-center mb-8 animate-fade-in-up hover:shadow-2xl hover:border-maea-blue hover:scale-[1.03] transition-all duration-300">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full p-8">
                      <div className="flex flex-col items-center">
                        <div className="text-blueGray-700 flex items-center justify-center w-16 h-16 mb-5 shadow-lg rounded-full bg-white text-3xl">
                          <i className="fas fa-balance-scale"></i>
                </div>
                  <h3 className="text-xl font-bold text-blueGray-800 mb-2 tracking-tight text-center">{intl.formatMessage({id: "index_ambiente_impacto_title"})}</h3>
                  <p className="text-gray-500 text-base mb-4 leading-relaxed text-center max-w-xs mx-auto line-clamp-3">
                    {intl.formatMessage({id: "index_ambiente_impacto_desc"})}
                  </p>
                        <a href="/ambiente/avaliacao-impacto" aria-label="Ler mais sobre Avaliação de Impacto Ambiental" className="inline-flex items-center gap-2 rounded bg-gradient-to-r-from-maea-blue-to-maea-blue text-white font-semibold shadow-md hover:from-maea-blue hover:to-maea-blue hover:shadow-lg transition-all duration-300 mt-2" style={{width: '120px', height: '40px', justifyContent: 'center', alignItems: 'center'}}>
                    <i className="fas fa-arrow-right"></i>
                          <span className="text-sm">{intl.formatMessage({id: "index_ambiente_impacto_btn"})}</span>
                </a>
              </div>
                    </div>
                  </div>
                  {/* Card 2 - Medição e Monitoramento Ambiental */}
                  <div className="bg-white rounded-2xl p-6 flex flex-col items-center w-[350px] text-center mb-8 animate-fade-in-up hover:shadow-2xl hover:border-maea-blue hover:scale-[1.03] transition-all duration-300">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full p-8">
                      <div className="flex flex-col items-center">
                        <div className="text-blueGray-700 flex items-center justify-center w-16 h-16 mb-5 shadow-lg rounded-full bg-white text-3xl">
                          <i className="fas fa-chart-line"></i>
                </div>
                  <h3 className="text-xl font-bold text-blueGray-800 mb-2 tracking-tight text-center">{intl.formatMessage({id: "index_ambiente_monitoramento_title"})}</h3>
                  <p className="text-gray-500 text-base mb-4 leading-relaxed text-center max-w-xs mx-auto line-clamp-3">
                    {intl.formatMessage({id: "index_ambiente_monitoramento_desc"})}
                  </p>
                        <a href="/ambiente/monitoramento" aria-label="Ler mais sobre Medição e Monitoramento Ambiental" className="inline-flex items-center gap-2 rounded bg-gradient-to-r-from-maea-blue-to-maea-blue text-white font-semibold shadow-md hover:from-maea-blue hover:to-maea-blue hover:shadow-lg transition-all duration-300 mt-2" style={{width: '120px', height: '40px', justifyContent: 'center', alignItems: 'center'}}>
                    <i className="fas fa-arrow-right"></i>
                          <span className="text-sm">{intl.formatMessage({id: "index_ambiente_monitoramento_btn"})}</span>
                </a>
              </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-8 justify-center">
                  {/* Card 3 - Auditorias Ambientais */}
                  <div className="bg-white rounded-2xl p-6 flex flex-col items-center w-[350px] text-center mb-8 animate-fade-in-up hover:shadow-2xl hover:border-maea-blue hover:scale-[1.03] transition-all duration-300">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full p-8">
                      <div className="flex flex-col items-center">
                        <div className="text-blueGray-700 flex items-center justify-center w-16 h-16 mb-5 shadow-lg rounded-full bg-white text-3xl">
                          <i className="fas fa-search"></i>
                </div>
                  <h3 className="text-xl font-bold text-blueGray-800 mb-2 tracking-tight text-center">{intl.formatMessage({id: "index_ambiente_auditorias_title"})}</h3>
                  <p className="text-gray-500 text-base mb-4 leading-relaxed text-center max-w-xs mx-auto line-clamp-3">
                    {intl.formatMessage({id: "index_ambiente_auditorias_desc"})}
                  </p>
                        <a href="/ambiente/auditorias" aria-label="Ler mais sobre Auditorias Ambientais" className="inline-flex items-center gap-2 rounded bg-gradient-to-r-from-maea-blue-to-maea-blue text-white font-semibold shadow-md hover:from-maea-blue hover:to-maea-blue hover:shadow-lg transition-all duration-300 mt-2" style={{width: '120px', height: '40px', justifyContent: 'center', alignItems: 'center'}}>
                    <i className="fas fa-arrow-right"></i>
                          <span className="text-sm">{intl.formatMessage({id: "index_ambiente_auditorias_btn"})}</span>
                </a>
              </div>
                    </div>
                  </div>
                  {/* Card 4 - Auditoria de Resíduos */}
                  <div className="bg-white rounded-2xl p-6 flex flex-col items-center w-[350px] text-center mb-8 animate-fade-in-up hover:shadow-2xl hover:border-maea-blue hover:scale-[1.03] transition-all duration-300">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full p-8">
                      <div className="flex flex-col items-center">
                        <div className="text-blueGray-700 flex items-center justify-center w-16 h-16 mb-5 shadow-lg rounded-full bg-white text-3xl">
                          <i className="fas fa-recycle"></i>
                </div>
                  <h3 className="text-xl font-bold text-blueGray-800 mb-2 tracking-tight text-center">{intl.formatMessage({id: "index_ambiente_residuos_title"})}</h3>
                  <p className="text-gray-500 text-base mb-4 leading-relaxed text-center max-w-xs mx-auto line-clamp-3">
                    {intl.formatMessage({id: "index_ambiente_residuos_desc"})}
                  </p>
                        <a href="/ambiente/auditoria-residuos" aria-label="Ler mais sobre Auditoria de Resíduos" className="inline-flex items-center gap-2 rounded bg-gradient-to-r-from-maea-blue-to-maea-blue text-white font-semibold shadow-md hover:from-maea-blue hover:to-maea-blue hover:shadow-lg transition-all duration-300 mt-2" style={{width: '120px', height: '40px', justifyContent: 'center', alignItems: 'center'}}>
                    <i className="fas fa-arrow-right"></i>
                          <span className="text-sm">{intl.formatMessage({id: "index_ambiente_residuos_btn"})}</span>
                </a>
              </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-8 justify-center">
                  {/* Card 5 - Tratamento de águas residuais */}
                  <div className="bg-white rounded-2xl p-6 flex flex-col items-center w-[350px] text-center mb-8 animate-fade-in-up hover:shadow-2xl hover:border-maea-blue hover:scale-[1.03] transition-all duration-300">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full p-8">
                      <div className="flex flex-col items-center">
                        <div className="text-blueGray-700 flex items-center justify-center w-16 h-16 mb-5 shadow-lg rounded-full bg-white text-3xl">
                          <i className="fas fa-tint"></i>
                </div>
                  <h3 className="text-xl font-bold text-blueGray-800 mb-2 tracking-tight text-center">{intl.formatMessage({id: "index_ambiente_aguas_title"})}</h3>
                  <p className="text-gray-500 text-base mb-4 leading-relaxed text-center max-w-xs mx-auto line-clamp-3">
                    {intl.formatMessage({id: "index_ambiente_aguas_desc"})}
                  </p>
                        <a href="/ambiente/tratamento-aguas" aria-label="Ler mais sobre Tratamento de águas residuais" className="inline-flex items-center gap-2 rounded bg-gradient-to-r-from-maea-blue-to-maea-blue text-white font-semibold shadow-md hover:from-maea-blue hover:to-maea-blue hover:shadow-lg transition-all duration-300 mt-2" style={{width: '120px', height: '40px', justifyContent: 'center', alignItems: 'center'}}>
                    <i className="fas fa-arrow-right"></i>
                          <span className="text-sm">{intl.formatMessage({id: "index_ambiente_aguas_btn"})}</span>
                </a>
              </div>
                    </div>
                  </div>
                  {/* Card 6 - Conformidade legal */}
                  <div className="bg-white rounded-2xl p-6 flex flex-col items-center w-[350px] text-center mb-8 animate-fade-in-up hover:shadow-2xl hover:border-maea-blue hover:scale-[1.03] transition-all duration-300">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full p-8">
                      <div className="flex flex-col items-center">
                        <div className="text-blueGray-700 flex items-center justify-center w-16 h-16 mb-5 shadow-lg rounded-full bg-white text-3xl">
                          <i className="fas fa-gavel"></i>
                </div>
                  <h3 className="text-xl font-bold text-blueGray-800 mb-2 tracking-tight text-center">{intl.formatMessage({id: "index_ambiente_conformidade_title"})}</h3>
                  <p className="text-gray-500 text-base mb-4 leading-relaxed text-center max-w-xs mx-auto line-clamp-3">
                    {intl.formatMessage({id: "index_ambiente_conformidade_desc"})}
                  </p>
                        <a href="/ambiente/conformidade-legal" aria-label="Ler mais sobre Conformidade legal" className="inline-flex items-center gap-2 rounded bg-gradient-to-r-from-maea-blue-to-maea-blue text-white font-semibold shadow-md hover:from-maea-blue hover:to-maea-blue hover:shadow-lg transition-all duration-300 mt-2" style={{width: '120px', height: '40px', justifyContent: 'center', alignItems: 'center'}}>
                    <i className="fas fa-arrow-right"></i>
                          <span className="text-sm">{intl.formatMessage({id: "index_ambiente_conformidade_btn"})}</span>
                </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sobre Nós Section */}
        <section className="pt-8 pb-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl p-8 lg:p-12 border border-white">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-black">
                  {intl.formatMessage({id: "index_values_points_title"})}
              </h2>
              <div className="w-full h-1 bg-[steelblue] mx-auto"></div>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
                  {/* Motivações */}
                <div className="bg-white rounded-2xl p-8 flex flex-col items-center transition-all duration-300 hover:shadow-2xl hover:border-maea-blue hover:scale-[1.03] w-full sm:w-8/12 md:w-5/12 lg:w-1/4 text-center mb-8">
                  <div className="text-blueGray-700 flex items-center justify-center w-16 h-16 mb-5 shadow-lg rounded-full bg-white text-3xl">
                          <i className="fas fa-rocket"></i>
                        </div>
                        <h6 className="text-2xl font-extrabold tracking-wide uppercase mb-2 text-blueGray-800 flex flex-col items-center">
                          {intl.formatMessage({id: "index_motivation_title"})}
                          <span className="block w-10 h-1 bg-gradient-to-r-from-maea-yellow-to-maea-yellow rounded mt-1"></span>
                        </h6>
                        <p className="mt-2 mb-4 text-blueGray-600 text-base">{intl.formatMessage({id: "index_motivation_desc"})}</p>
                  </div>
                  {/* Valores */}
                <div className="bg-white rounded-2xl p-8 flex flex-col items-center transition-all duration-300 hover:shadow-2xl hover:border-maea-pink hover:scale-[1.03] w-full sm:w-8/12 md:w-5/12 lg:w-1/4 text-center mb-8">
                  <div className="text-blueGray-700 flex items-center justify-center w-16 h-16 mb-5 shadow-lg rounded-full bg-white text-3xl">
                          <i className="fas fa-heart"></i>
                        </div>
                        <h6 className="text-2xl font-extrabold tracking-wide uppercase mb-2 text-blueGray-800 flex flex-col items-center">
                          {intl.formatMessage({id: "index_values_title"})}
                          <span className="block w-10 h-1 bg-gradient-to-r-from-maea-pink-to-maea-pink rounded mt-1"></span>
                        </h6>
                        <p className="mt-2 mb-4 text-blueGray-600 text-base">{intl.formatMessage({id: "index_values_desc"})}</p>
                  </div>
                  {/* Visão */}
                <div className="bg-white rounded-2xl p-8 flex flex-col items-center transition-all duration-300 hover:shadow-2xl hover:border-maea-blue hover:scale-[1.03] w-full sm:w-8/12 md:w-5/12 lg:w-1/4 text-center mb-8">
                  <div className="text-blueGray-700 flex items-center justify-center w-16 h-16 mb-5 shadow-lg rounded-full bg-white text-3xl">
                          <i className="fas fa-eye"></i>
                        </div>
                        <h6 className="text-2xl font-extrabold tracking-wide uppercase mb-2 text-blueGray-800 flex flex-col items-center">
                          {intl.formatMessage({id: "index_vision_title"})}
                          <span className="block w-10 h-1 bg-gradient-to-r-from-maea-blue-to-maea-blue rounded mt-1"></span>
                        </h6>
                        <p className="mt-2 mb-4 text-blueGray-600 text-base">{intl.formatMessage({id: "index_vision_desc"})}</p>
                  </div>
                  {/* Sucesso */}
                <div className="bg-white rounded-2xl p-8 flex flex-col items-center transition-all duration-300 hover:shadow-2xl hover:border-maea-yellow hover:scale-[1.03] w-full sm:w-8/12 md:w-5/12 lg:w-1/4 text-center mb-8">
                  <div className="text-blueGray-700 flex items-center justify-center w-16 h-16 mb-5 shadow-lg rounded-full bg-white text-3xl">
                          <i className="fas fa-trophy"></i>
                        </div>
                        <h6 className="text-2xl font-extrabold tracking-wide uppercase mb-2 text-blueGray-800 flex flex-col items-center">
                          {intl.formatMessage({id: "index_success_title"})}
                  <span className="block w-10 h-1 bg-gradient-to-r-from-maea-yellow-to-maea-yellow rounded mt-1"></span>
                        </h6>
                        <p className="mt-2 mb-4 text-blueGray-600 text-base">{intl.formatMessage({id: "index_success_desc"})}</p>
                  </div>
                  {/* Organização */}
                <div className="bg-white rounded-2xl p-8 flex flex-col items-center transition-all duration-300 hover:shadow-2xl hover:border-maea-blue hover:scale-[1.03] w-full sm:w-8/12 md:w-5/12 lg:w-1/4 text-center mb-8">
                  <div className="text-blueGray-700 flex items-center justify-center w-16 h-16 mb-5 shadow-lg rounded-full bg-white text-3xl">
                          <i className="fas fa-sitemap"></i>
                        </div>
                        <h6 className="text-2xl font-extrabold tracking-wide uppercase mb-2 text-blueGray-800 flex flex-col items-center">
                          {intl.formatMessage({id: "index_organization_title"})}
                  <span className="block w-10 h-1 bg-gradient-to-r-from-maea-blue-to-maea-blue rounded mt-1"></span>
                        </h6>
                        <p className="mt-2 mb-4 text-blueGray-600 text-base">{intl.formatMessage({id: "index_organization_desc"})}</p>
                  </div>
                  {/* Competências */}
                <div className="bg-white rounded-2xl p-8 flex flex-col items-center transition-all duration-300 hover:shadow-2xl hover:border-maea-green hover:scale-[1.03] w-full sm:w-8/12 md:w-5/12 lg:w-1/4 text-center mb-8">
                  <div className="text-blueGray-700 flex items-center justify-center w-16 h-16 mb-5 shadow-lg rounded-full bg-white text-3xl">
                          <i className="fas fa-cogs"></i>
                        </div>
                        <h6 className="text-2xl font-extrabold tracking-wide uppercase mb-2 text-blueGray-800 flex flex-col items-center">
                          {intl.formatMessage({id: "index_skills_title"})}
                          <span className="block w-10 h-1 bg-gradient-to-r-from-maea-green-to-maea-green rounded mt-1"></span>
                        </h6>
                        <p className="mt-2 mb-4 text-blueGray-600 text-base">{intl.formatMessage({id: "index_skills_desc"})}</p>
                  </div>
                  {/* Desenvolvimento */}
                <div className="bg-white rounded-2xl p-8 flex flex-col items-center transition-all duration-300 hover:shadow-2xl hover:border-maea-blue hover:scale-[1.03] w-full sm:w-8/12 md:w-5/12 lg:w-1/4 text-center mb-8">
                  <div className="text-blueGray-700 flex items-center justify-center w-16 h-16 mb-5 shadow-lg rounded-full bg-white text-3xl">
                          <i className="fas fa-chart-line"></i>
                        </div>
                        <h6 className="text-2xl font-extrabold tracking-wide uppercase mb-2 text-blueGray-800 flex flex-col items-center">
                          {intl.formatMessage({id: "index_development_title"})}
                          <span className="block w-10 h-1 bg-gradient-to-r-from-maea-blue-to-maea-blue rounded mt-1"></span>
                        </h6>
                        <p className="mt-2 mb-4 text-blueGray-600 text-base">{intl.formatMessage({id: "index_development_desc"})}</p>
                  </div>
                  {/* Confiança */}
                <div className="bg-white rounded-2xl p-8 flex flex-col items-center transition-all duration-300 hover:shadow-2xl hover:border-maea-blueGray hover:scale-[1.03] w-full sm:w-8/12 md:w-5/12 lg:w-1/4 text-center mb-8">
                  <div className="text-blueGray-700 flex items-center justify-center w-16 h-16 mb-5 shadow-lg rounded-full bg-white text-3xl">
                          <i className="fas fa-handshake"></i>
                        </div>
                        <h6 className="text-2xl font-extrabold tracking-wide uppercase mb-2 text-blueGray-800 flex flex-col items-center">
                          {intl.formatMessage({id: "index_trust_title"})}
                          <span className="block w-10 h-1 bg-gradient-to-r-from-maea-blueGray-to-maea-blueGray rounded mt-1"></span>
                        </h6>
                        <p className="mt-2 mb-4 text-blueGray-600 text-base">{intl.formatMessage({id: "index_trust_desc"})}</p>
                  </div>
                  {/* Preço Competitivo */}
                <div className="bg-white rounded-2xl p-8 flex flex-col items-center transition-all duration-300 hover:shadow-2xl hover:border-maea-pink hover:scale-[1.03] w-full sm:w-8/12 md:w-5/12 lg:w-1/4 text-center mb-8">
                  <div className="text-blueGray-700 flex items-center justify-center w-16 h-16 mb-5 shadow-lg rounded-full bg-white text-3xl">
                          <i className="fas fa-tags"></i>
                        </div>
                        <h6 className="text-2xl font-extrabold tracking-wide uppercase mb-2 text-blueGray-800 flex flex-col items-center">
                          {intl.formatMessage({id: "index_competitive_price_title"})}
                          <span className="block w-10 h-1 bg-gradient-to-r-from-maea-pink-to-maea-pink rounded mt-1"></span>
                        </h6>
                        <p className="mt-2 mb-4 text-blueGray-600 text-base">{intl.formatMessage({id: "index_competitive_price_desc"})}</p>
                </div>
                      </div>
                    </div>
                  </div>
        </section>
      </section>
    </>
  );
}

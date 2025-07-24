/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

// import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import Slider from "components/Slider.js";

// Importar imagem
import oilgasImage from "assets/img/oilgas.jpeg";
import trasImage from "assets/img/tras.jpeg";
import f2Image from "assets/img/f2.jpeg";
import f3Image from "assets/img/f3.jpeg";
import visaovaloresImage from "assets/img/visaovalores.png";
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
                  Nossos Serviços
                </h2>
                <div className="w-24 h-1 bg-gray-400 mx-auto mb-4"></div>
                <p className="text-xl leading-relaxed text-black/90 max-w-4xl mx-auto">
                  Oferecemos soluções completas para o desenvolvimento sustentável, segurança, consultoria e capacitação profissional.
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
                      <h3 className="text-xl font-bold text-blueGray-800 mb-2 uppercase">Ambiente</h3>
                      <span className="block w-10 h-1 bg-gradient-to-r-from-maea-blue-to-maea-blue rounded mb-4"></span>
                      <p className="text-blueGray-700 text-sm leading-relaxed mb-4 text-center max-w-xs mx-auto line-clamp-3">
                        A degradação ambiental é um problema sério que ameaça a humanidade, por isso é necessário fazer um esforço sério em direção ao desenvolvimento sustentável.
                      </p>
                      <a href="/solucoes-consultoria#gestao_ambiental" className="inline-flex items-center gap-2 rounded bg-gradient-to-r-from-maea-blue-to-maea-blue text-white font-semibold shadow-md hover:from-maea-blue hover:to-maea-blue hover:shadow-lg transition-all duration-300 mt-2 mb-2.5" style={{width: '120px', height: '40px', justifyContent: 'center', alignItems: 'center'}}>
                        <i className="fas fa-arrow-right"></i>
                        <span className="text-sm">Ler mais</span>
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
                      <h3 className="text-xl font-bold text-blueGray-800 mb-2 uppercase">Business Consulting</h3>
                      <span className="block w-10 h-1 bg-gradient-to-r-from-maea-blue-to-maea-blue rounded mb-4"></span>
                      <p className="text-blueGray-700 text-sm leading-relaxed mb-4 text-center max-w-xs mx-auto line-clamp-3">
                        Consultoria estratégica para impulsionar o crescimento, eficiência e inovação do seu negócio.
                      </p>
                      <a href="/business-consulting-formacoes#business_consulting" className="inline-flex items-center gap-2 rounded bg-gradient-to-r-from-maea-blue-to-maea-blue text-white font-semibold shadow-md hover:from-maea-blue hover:to-maea-blue hover:shadow-lg transition-all duration-300 mt-2 mb-2.5" style={{width: '120px', height: '40px', justifyContent: 'center', alignItems: 'center'}}>
                        <i className="fas fa-arrow-right"></i>
                        <span className="text-sm">Ler mais</span>
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
                      <h3 className="text-xl font-bold text-blueGray-800 mb-2 uppercase">Formações Profissional</h3>
                      <span className="block w-10 h-1 bg-gradient-to-r-from-maea-blue-to-maea-blue rounded mb-4"></span>
                      <p className="text-blueGray-700 text-sm leading-relaxed mb-4 text-center max-w-xs mx-auto line-clamp-3">
                        Capacitação e desenvolvimento profissional para equipes e indivíduos em diversas áreas do mercado.
                      </p>
                      <a href="/business-consulting-formacoes#formacoes_profissional" className="inline-flex items-center gap-2 rounded bg-gradient-to-r-from-maea-blue-to-maea-blue text-white font-semibold shadow-md hover:from-maea-blue hover:to-maea-blue hover:shadow-lg transition-all duration-300 mt-2 mb-2.5" style={{width: '120px', height: '40px', justifyContent: 'center', alignItems: 'center'}}>
                        <i className="fas fa-arrow-right"></i>
                        <span className="text-sm">Ler mais</span>
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
                      <h3 className="text-xl font-bold text-blueGray-800 mb-2 uppercase">Saúde e Segurança</h3>
                      <span className="block w-10 h-1 bg-gradient-to-r-from-maea-blue-to-maea-blue rounded mb-4"></span>
                      <p className="text-blueGray-700 text-sm leading-relaxed mb-4 text-center max-w-xs mx-auto line-clamp-3">
                          A responsabilidade total do empregador em proteger a saúde e a segurança do funcionário é um fator vital em um mercado competitivo. O MAEA fornece.
                      </p>
                      <a href="/solucoes-consultoria#seguranca_trabalho" className="inline-flex items-center gap-2 rounded bg-gradient-to-r-from-maea-blue-to-maea-blue text-white font-semibold shadow-md hover:from-maea-blue hover:to-maea-blue hover:shadow-lg transition-all duration-300 mt-2 mb-2.5" style={{width: '120px', height: '40px', justifyContent: 'center', alignItems: 'center'}}>
                        <i className="fas fa-arrow-right"></i>
                        <span className="text-sm">Ler mais</span>
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
                      <h3 className="text-xl font-bold text-blueGray-800 mb-2 uppercase">Certificação ISO</h3>
                      <span className="block w-10 h-1 bg-gradient-to-r-from-maea-blue-to-maea-blue rounded mb-4"></span>
                      <p className="text-blueGray-700 text-sm leading-relaxed mb-4 text-center max-w-xs mx-auto line-clamp-3">
                        As organizações e empresas muitas vezes desejam obter a certificação de acordo com os padrões de sistema de gestão da ISO, embora a certificação não seja uma obrigatoriedade.
                      </p>
                      <a href="/certificacao-iso" className="inline-flex items-center gap-2 rounded bg-gradient-to-r-from-maea-blue-to-maea-blue text-white font-semibold shadow-md hover:from-maea-blue hover:to-maea-blue hover:shadow-lg transition-all duration-300 mt-2 mb-2.5" style={{width: '120px', height: '40px', justifyContent: 'center', alignItems: 'center'}}>
                        <i className="fas fa-arrow-right"></i>
                        <span className="text-sm">Ler mais</span>
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
                      <h3 className="text-xl font-bold text-blueGray-800 mb-2 uppercase">Treinamentos</h3>
                      <span className="block w-10 h-1 bg-gradient-to-r-from-maea-blue-to-maea-blue rounded mb-4"></span>
                      <p className="text-blueGray-700 text-sm leading-relaxed mb-4 text-center max-w-xs mx-auto line-clamp-3">
                          Enriquecendo o conhecimento por meio de Soluções de MAEA. Uma política de treinamento competente é fundamental para todos os estabelecimentos comerciais.
                      </p>
                      <a href="/treinamento" className="inline-flex items-center gap-2 rounded bg-gradient-to-r-from-maea-blue-to-maea-blue text-white font-semibold shadow-md hover:from-maea-blue hover:to-maea-blue hover:shadow-lg transition-all duration-300 mt-2 mb-2.5" style={{width: '120px', height: '40px', justifyContent: 'center', alignItems: 'center'}}>
                        <i className="fas fa-arrow-right"></i>
                        <span className="text-sm">Ler mais</span>
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
                  Certificação ISO
                </h2>
                <p className="text-xl leading-relaxed text-black/90 max-w-4xl mx-auto">
                  Os padrões internacionais ISO garantem que produtos e serviços sejam seguros, confiáveis e de boa qualidade. Para empresas, são ferramentas estratégicas que reduzem custos, minimizam desperdícios e erros, e aumentam a produtividade.
                </p>
              </div>
              {/* Cards no formato Nossos Serviços */}
              <div className="flex flex-wrap justify-center gap-8">
                {/* Card 1 */}
                <div className="bg-white rounded-2xl p-8 flex flex-col items-center w-full sm:w-8/12 md:w-5/12 lg:w-1/4 text-center mb-8 animate-fade-in-up hover:shadow-2xl hover:border-maea-blue hover:scale-[1.03] transition-all duration-300">
                  <div className="flex items-center justify-center w-20 h-20 mb-5 rounded-full bg-white shadow text-blueGray-700 text-4xl">
                        <i className="fas fa-check-circle"></i>
                    </div>
                      <h3 className="text-xl font-bold text-blueGray-800 mb-2 uppercase">ISO 9001</h3>
                      <span className="block w-10 h-1 bg-gradient-to-r-from-maea-blue-to-maea-blue rounded mb-4"></span>
                  <p className="text-blueGray-700 text-sm leading-relaxed mb-4 text-center max-w-xs mx-auto line-clamp-3">
                      Sistema de Gestão da Qualidade
                    </p>
                  <a href="#" className="inline-flex items-center gap-2 rounded bg-gradient-to-r-from-maea-blue-to-maea-blue text-white font-semibold shadow-md hover:from-maea-blue hover:to-maea-blue hover:shadow-lg transition-all duration-300 mt-2" style={{width: '120px', height: '40px', justifyContent: 'center', alignItems: 'center'}}>
                    <i className="fas fa-arrow-right"></i>
                    <span className="text-sm">Ler mais</span>
                      </a>
                </div>
                {/* Card 2 */}
                <div className="bg-white rounded-2xl p-8 flex flex-col items-center w-full sm:w-8/12 md:w-5/12 lg:w-1/4 text-center mb-8 animate-fade-in-up hover:shadow-2xl hover:border-maea-blue hover:scale-[1.03] transition-all duration-300">
                  <div className="flex items-center justify-center w-20 h-20 mb-5 rounded-full bg-white shadow text-blueGray-700 text-4xl">
                        <i className="fas fa-leaf"></i>
                    </div>
                      <h3 className="text-xl font-bold text-blueGray-800 mb-2 uppercase">ISO 14001</h3>
                      <span className="block w-10 h-1 bg-gradient-to-r-from-maea-blue-to-maea-blue rounded mb-4"></span>
                  <p className="text-blueGray-700 text-sm leading-relaxed mb-4 text-center max-w-xs mx-auto line-clamp-3">
                      Sistema de Gestão Ambiental
                    </p>
                  <a href="#" className="inline-flex items-center gap-2 rounded bg-gradient-to-r-from-maea-blue-to-maea-blue text-white font-semibold shadow-md hover:from-maea-blue hover:to-maea-blue hover:shadow-lg transition-all duration-300 mt-2" style={{width: '120px', height: '40px', justifyContent: 'center', alignItems: 'center'}}>
                    <i className="fas fa-arrow-right"></i>
                    <span className="text-sm">Ler mais</span>
                      </a>
                </div>
                {/* Card 3 */}
                <div className="bg-white rounded-2xl p-8 flex flex-col items-center w-full sm:w-8/12 md:w-5/12 lg:w-1/4 text-center mb-8 animate-fade-in-up hover:shadow-2xl hover:border-maea-blue hover:scale-[1.03] transition-all duration-300">
                  <div className="flex items-center justify-center w-20 h-20 mb-5 rounded-full bg-white shadow text-blueGray-700 text-4xl">
                        <i className="fas fa-hard-hat"></i>
                    </div>
                      <h3 className="text-xl font-bold text-blueGray-800 mb-2 uppercase">OHSAS 18001</h3>
                      <span className="block w-10 h-1 bg-gradient-to-r-from-maea-blue-to-maea-blue rounded mb-4"></span>
                  <p className="text-blueGray-700 text-sm leading-relaxed mb-4 text-center max-w-xs mx-auto line-clamp-3">
                      Sistema de Gestão de Segurança
                    </p>
                  <a href="#" className="inline-flex items-center gap-2 rounded bg-gradient-to-r-from-maea-blue-to-maea-blue text-white font-semibold shadow-md hover:from-maea-blue hover:to-maea-blue hover:shadow-lg transition-all duration-300 mt-2" style={{width: '120px', height: '40px', justifyContent: 'center', alignItems: 'center'}}>
                    <i className="fas fa-arrow-right"></i>
                    <span className="text-sm">Ler mais</span>
                      </a>
                </div>
                {/* Card 4 */}
                <div className="bg-white rounded-2xl p-8 flex flex-col items-center w-full sm:w-8/12 md:w-5/12 lg:w-1/4 text-center mb-8 animate-fade-in-up hover:shadow-2xl hover:border-maea-blue hover:scale-[1.03] transition-all duration-300">
                  <div className="flex items-center justify-center w-20 h-20 mb-5 rounded-full bg-white shadow text-blueGray-700 text-4xl">
                        <i className="fas fa-apple-alt"></i>
                    </div>
                      <h3 className="text-xl font-bold text-blueGray-800 mb-2 uppercase">ISO 22000</h3>
                      <span className="block w-10 h-1 bg-gradient-to-r-from-maea-blue-to-maea-blue rounded mb-4"></span>
                  <p className="text-blueGray-700 text-sm leading-relaxed mb-4 text-center max-w-xs mx-auto line-clamp-3">
                      Sistema de Gestão da Segurança Alimentar
                    </p>
                  <a href="#" className="inline-flex items-center gap-2 rounded bg-gradient-to-r-from-maea-blue-to-maea-blue text-white font-semibold shadow-md hover:from-maea-blue hover:to-maea-blue hover:shadow-lg transition-all duration-300 mt-2" style={{width: '120px', height: '40px', justifyContent: 'center', alignItems: 'center'}}>
                    <i className="fas fa-arrow-right"></i>
                    <span className="text-sm">Ler mais</span>
                      </a>
                </div>
                {/* Card 5 */}
                <div className="bg-white rounded-2xl p-8 flex flex-col items-center w-full sm:w-8/12 md:w-5/12 lg:w-1/4 text-center mb-8 animate-fade-in-up hover:shadow-2xl hover:border-maea-blue hover:scale-[1.03] transition-all duration-300">
                  <div className="flex items-center justify-center w-20 h-20 mb-5 rounded-full bg-white shadow text-blueGray-700 text-4xl">
                        <i className="fas fa-utensils"></i>
                    </div>
                      <h3 className="text-xl font-bold text-blueGray-800 mb-2 uppercase">HACCP</h3>
                      <span className="block w-10 h-1 bg-gradient-to-r-from-maea-blue-to-maea-blue rounded mb-4"></span>
                  <p className="text-blueGray-700 text-sm leading-relaxed mb-4 text-center max-w-xs mx-auto line-clamp-3">
                      Análise de Perigos e Pontos Críticos de Controle
                    </p>
                  <a href="#" className="inline-flex items-center gap-2 rounded bg-gradient-to-r-from-maea-blue-to-maea-blue text-white font-semibold shadow-md hover:from-maea-blue hover:to-maea-blue hover:shadow-lg transition-all duration-300 mt-2" style={{width: '120px', height: '40px', justifyContent: 'center', alignItems: 'center'}}>
                    <i className="fas fa-arrow-right"></i>
                    <span className="text-sm">Ler mais</span>
                      </a>
                </div>
                {/* Card 6 */}
                <div className="bg-white rounded-2xl p-8 flex flex-col items-center w-full sm:w-8/12 md:w-5/12 lg:w-1/4 text-center mb-8 animate-fade-in-up hover:shadow-2xl hover:border-maea-blue hover:scale-[1.03] transition-all duration-300">
                  <div className="flex items-center justify-center w-20 h-20 mb-5 rounded-full bg-white shadow text-blueGray-700 text-4xl">
                        <i className="fas fa-shield-alt"></i>
                    </div>
                      <h3 className="text-xl font-bold text-blueGray-800 mb-2 uppercase">ISO 27001</h3>
                      <span className="block w-10 h-1 bg-gradient-to-r-from-maea-blue-to-maea-blue rounded mb-4"></span>
                  <p className="text-blueGray-700 text-sm leading-relaxed mb-4 text-center max-w-xs mx-auto line-clamp-3">
                      Sistema de Gestão de Segurança da Informação
                    </p>
                  <a href="#" className="inline-flex items-center gap-2 rounded bg-gradient-to-r-from-maea-blue-to-maea-blue text-white font-semibold shadow-md hover:from-maea-blue hover:to-maea-blue hover:shadow-lg transition-all duration-300 mt-2" style={{width: '120px', height: '40px', justifyContent: 'center', alignItems: 'center'}}>
                    <i className="fas fa-arrow-right"></i>
                    <span className="text-sm">Ler mais</span>
                      </a>
                </div>
                {/* Card 7 - ISO 20000 */}
                <div className="bg-white rounded-2xl p-8 flex flex-col items-center w-full sm:w-8/12 md:w-5/12 lg:w-1/4 text-center mb-8 animate-fade-in-up hover:shadow-2xl hover:border-maea-blue hover:scale-[1.03] transition-all duration-300">
                  <div className="flex items-center justify-center w-20 h-20 mb-5 rounded-full bg-white shadow text-blueGray-700 text-4xl">
                    <i className="fas fa-network-wired"></i>
                    </div>
                      <h3 className="text-xl font-bold text-blueGray-800 mb-2 uppercase">ISO 20000</h3>
                      <span className="block w-10 h-1 bg-gradient-to-r-from-maea-blue-to-maea-blue rounded mb-4"></span>
                  <p className="text-blueGray-700 text-sm leading-relaxed mb-4 text-center max-w-xs mx-auto line-clamp-3">
                      Sistema de Gestão de Serviços de TI
                    </p>
                  <a href="#" className="inline-flex items-center gap-2 rounded bg-gradient-to-r-from-maea-blue-to-maea-blue text-white font-semibold shadow-md hover:from-maea-blue hover:to-maea-blue hover:shadow-lg transition-all duration-300 mt-2" style={{width: '120px', height: '40px', justifyContent: 'center', alignItems: 'center'}}>
                    <i className="fas fa-arrow-right"></i>
                    <span className="text-sm">Ler mais</span>
                      </a>
                </div>
                {/* Card 8 - ISO 13485 */}
                <div className="bg-white rounded-2xl p-8 flex flex-col items-center w-full sm:w-8/12 md:w-5/12 lg:w-1/4 text-center mb-8 animate-fade-in-up hover:shadow-2xl hover:border-maea-blue hover:scale-[1.03] transition-all duration-300">
                  <div className="flex items-center justify-center w-20 h-20 mb-5 rounded-full bg-white shadow text-blueGray-700 text-4xl">
                    <i className="fas fa-stethoscope"></i>
                    </div>
                      <h3 className="text-xl font-bold text-blueGray-800 mb-2 uppercase">ISO 13485</h3>
                      <span className="block w-10 h-1 bg-gradient-to-r-from-maea-blue-to-maea-blue rounded mb-4"></span>
                  <p className="text-blueGray-700 text-sm leading-relaxed mb-4 text-center max-w-xs mx-auto line-clamp-3">
                      Sistema de Gestão da Qualidade de Dispositivos Médicos
                    </p>
                  <a href="#" className="inline-flex items-center gap-2 rounded bg-gradient-to-r-from-maea-blue-to-maea-blue text-white font-semibold shadow-md hover:from-maea-blue hover:to-maea-blue hover:shadow-lg transition-all duration-300 mt-2" style={{width: '120px', height: '40px', justifyContent: 'center', alignItems: 'center'}}>
                    <i className="fas fa-arrow-right"></i>
                    <span className="text-sm">Ler mais</span>
                      </a>
                </div>
                {/* Card 9 - ISO 29001 */}
                <div className="bg-white rounded-2xl p-8 flex flex-col items-center w-full sm:w-8/12 md:w-5/12 lg:w-1/4 text-center mb-8 animate-fade-in-up hover:shadow-2xl hover:border-maea-blue hover:scale-[1.03] transition-all duration-300">
                  <div className="flex items-center justify-center w-20 h-20 mb-5 rounded-full bg-white shadow text-blueGray-700 text-4xl">
                    <i className="fas fa-industry"></i>
                    </div>
                      <h3 className="text-xl font-bold text-blueGray-800 mb-2 uppercase">ISO 29001</h3>
                      <span className="block w-10 h-1 bg-gradient-to-r-from-maea-blue-to-maea-blue rounded mb-4"></span>
                  <p className="text-blueGray-700 text-sm leading-relaxed mb-4 text-center max-w-xs mx-auto line-clamp-3">
                      Sistemas de gestão da qualidade específicos do setor
                    </p>
                  <a href="#" className="inline-flex items-center gap-2 rounded bg-gradient-to-r-from-maea-blue-to-maea-blue text-white font-semibold shadow-md hover:from-maea-blue hover:to-maea-blue hover:shadow-lg transition-all duration-300 mt-2" style={{width: '120px', height: '40px', justifyContent: 'center', alignItems: 'center'}}>
                    <i className="fas fa-arrow-right"></i>
                    <span className="text-sm">Ler mais</span>
                      </a>
                </div>
                {/* Card 10 - ISO 22716 */}
                <div className="bg-white rounded-2xl p-8 flex flex-col items-center w-full sm:w-8/12 md:w-5/12 lg:w-1/4 text-center mb-8 animate-fade-in-up hover:shadow-2xl hover:border-maea-blue hover:scale-[1.03] transition-all duration-300">
                  <div className="flex items-center justify-center w-20 h-20 mb-5 rounded-full bg-white shadow text-blueGray-700 text-4xl">
                    <i className="fas fa-flask"></i>
                    </div>
                      <h3 className="text-xl font-bold text-blueGray-800 mb-2 uppercase">ISO 22716</h3>
                      <span className="block w-10 h-1 bg-gradient-to-r-from-maea-blue-to-maea-blue rounded mb-4"></span>
                  <p className="text-blueGray-700 text-sm leading-relaxed mb-4 text-center max-w-xs mx-auto line-clamp-3">
                      Cosméticos GMP
                    </p>
                  <a href="#" className="inline-flex items-center gap-2 rounded bg-gradient-to-r-from-maea-blue-to-maea-blue text-white font-semibold shadow-md hover:from-maea-blue hover:to-maea-blue hover:shadow-lg transition-all duration-300 mt-2" style={{width: '120px', height: '40px', justifyContent: 'center', alignItems: 'center'}}>
                    <i className="fas fa-arrow-right"></i>
                    <span className="text-sm">Ler mais</span>
                      </a>
                </div>
                {/* Card 11 - ISO 50001 */}
                <div className="bg-white rounded-2xl p-8 flex flex-col items-center w-full sm:w-8/12 md:w-5/12 lg:w-1/4 text-center mb-8 animate-fade-in-up hover:shadow-2xl hover:border-maea-blue hover:scale-[1.03] transition-all duration-300">
                  <div className="flex items-center justify-center w-20 h-20 mb-5 rounded-full bg-white shadow text-blueGray-700 text-4xl">
                    <i className="fas fa-bolt"></i>
                    </div>
                      <h3 className="text-xl font-bold text-blueGray-800 mb-2 uppercase">ISO 50001</h3>
                      <span className="block w-10 h-1 bg-gradient-to-r-from-maea-blue-to-maea-blue rounded mb-4"></span>
                  <p className="text-blueGray-700 text-sm leading-relaxed mb-4 text-center max-w-xs mx-auto line-clamp-3">
                      Sistema de Gestão de Energia
                    </p>
                  <a href="#" className="inline-flex items-center gap-2 rounded bg-gradient-to-r-from-maea-blue-to-maea-blue text-white font-semibold shadow-md hover:from-maea-blue hover:to-maea-blue hover:shadow-lg transition-all duration-300 mt-2" style={{width: '120px', height: '40px', justifyContent: 'center', alignItems: 'center'}}>
                    <i className="fas fa-arrow-right"></i>
                    <span className="text-sm">Ler mais</span>
                      </a>
                </div>
                {/* Card 12 - ISO 10002 */}
                <div className="bg-white rounded-2xl p-8 flex flex-col items-center w-full sm:w-8/12 md:w-5/12 lg:w-1/4 text-center mb-8 animate-fade-in-up hover:shadow-2xl hover:border-maea-blue hover:scale-[1.03] transition-all duration-300">
                  <div className="flex items-center justify-center w-20 h-20 mb-5 rounded-full bg-white shadow text-blueGray-700 text-4xl">
                    <i className="fas fa-comments"></i>
                    </div>
                      <h3 className="text-xl font-bold text-blueGray-800 mb-2 uppercase">ISO 10002</h3>
                      <span className="block w-10 h-1 bg-gradient-to-r-from-maea-blue-to-maea-blue rounded mb-4"></span>
                  <p className="text-blueGray-700 text-sm leading-relaxed mb-4 text-center max-w-xs mx-auto line-clamp-3">
                      Diretrizes para tratamento de reclamações em organizações
                    </p>
                  <a href="#" className="inline-flex items-center gap-2 rounded bg-gradient-to-r-from-maea-blue-to-maea-blue text-white font-semibold shadow-md hover:from-maea-blue hover:to-maea-blue hover:shadow-lg transition-all duration-300 mt-2" style={{width: '120px', height: '40px', justifyContent: 'center', alignItems: 'center'}}>
                    <i className="fas fa-arrow-right"></i>
                    <span className="text-sm">Ler mais</span>
                      </a>
                </div>
              </div>
              {/* Call to Action */}
              <div className="text-center mt-12 pt-8 border-t border-[steelblue]">
                <p className="text-black/90 text-lg mb-4">
                  Transforme sua empresa com certificações ISO de qualidade internacional
                </p>
                <a href="/certificacao" className="inline-flex items-center bg-black/20 text-black font-bold py-3 px-8 rounded-xl hover:bg-black/30 transition-all duration-300">
                  <i className="fas fa-certificate mr-2"></i>
                  Solicitar Certificação
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
                Ambiente
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
                  <h3 className="text-xl font-bold text-blueGray-800 mb-2 tracking-tight text-center">Avaliação de Impacto Ambiental</h3>
                  <p className="text-gray-500 text-base mb-4 leading-relaxed text-center max-w-xs mx-auto line-clamp-3">
                    Avaliamos os impactos ambientais de projetos e atividades, garantindo o desenvolvimento sustentável e o cumprimento das exigências legais.
                  </p>
                        <a href="/ambiente/avaliacao-impacto" aria-label="Ler mais sobre Avaliação de Impacto Ambiental" className="inline-flex items-center gap-2 rounded bg-gradient-to-r-from-maea-blue-to-maea-blue text-white font-semibold shadow-md hover:from-maea-blue hover:to-maea-blue hover:shadow-lg transition-all duration-300 mt-2" style={{width: '120px', height: '40px', justifyContent: 'center', alignItems: 'center'}}>
                    <i className="fas fa-arrow-right"></i>
                          <span className="text-sm">Ler mais</span>
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
                  <h3 className="text-xl font-bold text-blueGray-800 mb-2 tracking-tight text-center">Medição e Monitoramento Ambiental</h3>
                  <p className="text-gray-500 text-base mb-4 leading-relaxed text-center max-w-xs mx-auto line-clamp-3">
                    Realizamos medições e monitoramentos ambientais completos para identificar, controlar e minimizar impactos ao meio ambiente.
                  </p>
                        <a href="/ambiente/monitoramento" aria-label="Ler mais sobre Medição e Monitoramento Ambiental" className="inline-flex items-center gap-2 rounded bg-gradient-to-r-from-maea-blue-to-maea-blue text-white font-semibold shadow-md hover:from-maea-blue hover:to-maea-blue hover:shadow-lg transition-all duration-300 mt-2" style={{width: '120px', height: '40px', justifyContent: 'center', alignItems: 'center'}}>
                    <i className="fas fa-arrow-right"></i>
                          <span className="text-sm">Ler mais</span>
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
                  <h3 className="text-xl font-bold text-blueGray-800 mb-2 tracking-tight text-center">Auditorias Ambientais</h3>
                  <p className="text-gray-500 text-base mb-4 leading-relaxed text-center max-w-xs mx-auto line-clamp-3">
                    Conduzimos auditorias ambientais para assegurar a conformidade com normas e legislações, promovendo melhorias contínuas nos processos.
                  </p>
                        <a href="/ambiente/auditorias" aria-label="Ler mais sobre Auditorias Ambientais" className="inline-flex items-center gap-2 rounded bg-gradient-to-r-from-maea-blue-to-maea-blue text-white font-semibold shadow-md hover:from-maea-blue hover:to-maea-blue hover:shadow-lg transition-all duration-300 mt-2" style={{width: '120px', height: '40px', justifyContent: 'center', alignItems: 'center'}}>
                    <i className="fas fa-arrow-right"></i>
                          <span className="text-sm">Ler mais</span>
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
                  <h3 className="text-xl font-bold text-blueGray-800 mb-2 tracking-tight text-center">Auditoria de Resíduos</h3>
                  <p className="text-gray-500 text-base mb-4 leading-relaxed text-center max-w-xs mx-auto line-clamp-3">
                    Avaliamos a gestão de resíduos, identificando oportunidades de redução, reaproveitamento e descarte correto, em conformidade com a legislação.
                  </p>
                        <a href="/ambiente/auditoria-residuos" aria-label="Ler mais sobre Auditoria de Resíduos" className="inline-flex items-center gap-2 rounded bg-gradient-to-r-from-maea-blue-to-maea-blue text-white font-semibold shadow-md hover:from-maea-blue hover:to-maea-blue hover:shadow-lg transition-all duration-300 mt-2" style={{width: '120px', height: '40px', justifyContent: 'center', alignItems: 'center'}}>
                    <i className="fas fa-arrow-right"></i>
                          <span className="text-sm">Ler mais</span>
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
                  <h3 className="text-xl font-bold text-blueGray-800 mb-2 tracking-tight text-center">Tratamento de águas residuais</h3>
                  <p className="text-gray-500 text-base mb-4 leading-relaxed text-center max-w-xs mx-auto line-clamp-3">
                    Oferecemos soluções para o tratamento eficiente de águas residuais, reduzindo impactos ambientais e atendendo às normas vigentes.
                  </p>
                        <a href="/ambiente/tratamento-aguas" aria-label="Ler mais sobre Tratamento de águas residuais" className="inline-flex items-center gap-2 rounded bg-gradient-to-r-from-maea-blue-to-maea-blue text-white font-semibold shadow-md hover:from-maea-blue hover:to-maea-blue hover:shadow-lg transition-all duration-300 mt-2" style={{width: '120px', height: '40px', justifyContent: 'center', alignItems: 'center'}}>
                    <i className="fas fa-arrow-right"></i>
                          <span className="text-sm">Ler mais</span>
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
                  <h3 className="text-xl font-bold text-blueGray-800 mb-2 tracking-tight text-center">Conformidade legal</h3>
                  <p className="text-gray-500 text-base mb-4 leading-relaxed text-center max-w-xs mx-auto line-clamp-3">
                    Auxiliamos sua empresa a manter-se em conformidade com as leis ambientais, prevenindo riscos e garantindo operações seguras e responsáveis.
                  </p>
                        <a href="/ambiente/conformidade-legal" aria-label="Ler mais sobre Conformidade legal" className="inline-flex items-center gap-2 rounded bg-gradient-to-r-from-maea-blue-to-maea-blue text-white font-semibold shadow-md hover:from-maea-blue hover:to-maea-blue hover:shadow-lg transition-all duration-300 mt-2" style={{width: '120px', height: '40px', justifyContent: 'center', alignItems: 'center'}}>
                    <i className="fas fa-arrow-right"></i>
                          <span className="text-sm">Ler mais</span>
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
                  Nossos Pontos de Valores
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

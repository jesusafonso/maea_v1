/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

// import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import Slider from "components/Slider.js";

// Importar imagem
// import visaovaloresImage from "assets/img/visaovalores.png";
import { useIntl } from "react-intl";
import f2Image from "assets/img/Certificacao_ISO.jpg";

export default function Index() {
  const intl = useIntl();
  
  return (
    <>
      {/* <IndexNavbar fixed /> */}
      <Slider />

      {/* Switchback Section */}
      <section data-component="switchback" data-content-split="6_5" data-component-bg-color="#FFFFFF" style={{'--component-bg-color': '#FFFFFF'}} data-component-bg="light" className="paragraph paragraph--type--switchback paragraph--view-mode--component-layout overflow-hidden lg:overflow-auto split-6-5 group/c bg-gradient-to-br from-gray-50 via-white to-blue-50 px-6 py-20 lg:py-32">
        <div className="field field--name-field-switchback-items field--type-entity-reference-revisions field--label-hidden container mx-auto flex flex-col gap-20">
          
          <div data-item="1" className="paragraph paragraph--type--switchback-item paragraph--view-mode--default flex flex-col lg:flex-row items-center gap-12 scroll-mt-40">
            <div className="switchback-content flex flex-col gap-8 justify-center lg:w-1/2">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl mb-6 shadow-lg">
                <i className="fas fa-certificate text-white text-2xl"></i>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">Certificação ISO</h2>
              <div className="prose prose-lg text-gray-700 leading-relaxed max-w-none">
                <p className="text-lg leading-relaxed text-gray-600 mb-6">A MAEA SOLUTION é especializada na implementação completa de sistemas de gestão ISO. Oferecemos consultoria personalizada para certificações ISO 9001, 14001, 22000, 27001, 45001 e outras, garantindo qualidade, conformidade e excelência operacional para o seu negócio.</p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center text-blue-600 font-semibold">
                    <i className="fas fa-check-circle mr-2"></i>
                    <span>Consultoria Especializada</span>
                  </div>
                  <div className="flex items-center text-blue-600 font-semibold">
                    <i className="fas fa-award mr-2"></i>
                    <span>Certificações Reconhecidas</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="switchback-media flex justify-center lg:w-1/2">
              <div className="field field--name-field-component-media field--type-entity-reference field--label-hidden field__item">
                <article className="media media--type-image media--view-mode-switchback-image rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500 w-96 h-72">
                  <div className="field field--name-field-media-image field--type-image field--label-visually_hidden">
                    <div className="field__label visually-hidden">Imagem</div>
                    <div className="field__item">
                      <img loading="lazy" src="/Certificacao_ISO.jpg" alt="Certificação ISO" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>

          <div data-item="2" className="paragraph paragraph--type--switchback-item paragraph--view-mode--default flex flex-col lg:flex-row items-center gap-12 scroll-mt-40">
            <div className="switchback-content flex flex-col gap-8 justify-center lg:w-1/2">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl mb-6 shadow-lg">
                <i className="fas fa-leaf text-white text-2xl"></i>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">Consultoria Ambiental</h2>
              <div className="prose prose-lg text-gray-700 leading-relaxed max-w-none">
                <p className="text-lg leading-relaxed text-gray-600 mb-6">Desenvolvemos soluções completas em gestão ambiental, licenciamento, monitoramento e compliance ambiental. Nossa equipe especializada oferece consultoria para empresas comprometidas com a sustentabilidade e responsabilidade ambiental.</p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center text-green-600 font-semibold">
                    <i className="fas fa-recycle mr-2"></i>
                    <span>Sustentabilidade</span>
                  </div>
                  <div className="flex items-center text-green-600 font-semibold">
                    <i className="fas fa-shield-alt mr-2"></i>
                    <span>Compliance Ambiental</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="switchback-media flex justify-center lg:w-1/2">
              <div className="field field--name-field-component-media field--type-entity-reference field--label-hidden field__item">
                <article className="media media--type-image media--view-mode-switchback-image rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500 w-96 h-72">
                  <div className="field field--name-field-media-image field--type-image field--label-visually_hidden">
                    <div className="field__label visually-hidden">Imagem</div>
                    <div className="field__item">
                      <img loading="lazy" src="/sustentabilidade_responsabilidade.jpg" alt="Consultoria Ambiental" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>

          <div data-item="3" className="paragraph paragraph--type--switchback-item paragraph--view-mode--default flex flex-col lg:flex-row items-center gap-12 scroll-mt-40">
            <div className="switchback-content flex flex-col gap-8 justify-center lg:w-1/2">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl mb-6 shadow-lg">
                <i className="fas fa-graduation-cap text-white text-2xl"></i>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">Treinamentos Corporativos</h2>
              <div className="prose prose-lg text-gray-700 leading-relaxed max-w-none">
                <p className="text-lg leading-relaxed text-gray-600 mb-6">Oferecemos programas de capacitação técnica, comportamental e de liderança. Desenvolvemos treinamentos in company, workshops, integração e metodologias ágeis para todos os setores, impulsionando o crescimento das suas equipes.</p>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center text-purple-600 font-semibold">
                    <i className="fas fa-users mr-2"></i>
                    <span>Capacitação Técnica</span>
                  </div>
                  <div className="flex items-center text-purple-600 font-semibold">
                    <i className="fas fa-chart-line mr-2"></i>
                    <span>Desenvolvimento</span>
                  </div>
                </div>
                <a className="cta-secondary-wysiwyg inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300" href="/treinamento">
                  <i className="fas fa-arrow-right mr-2"></i>
                  <strong>Saiba Mais</strong>
                </a>
              </div>
            </div>
            <div className="switchback-media flex justify-center lg:w-1/2">
              <div className="field field--name-field-component-media field--type-entity-reference field--label-hidden field__item">
                <article className="media media--type-image media--view-mode-switchback-image rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500 w-96 h-72">
                  <div className="field field--name-field-media-image field--type-image field--label-visually_hidden">
                    <div className="field__label visually-hidden">Imagem</div>
                    <div className="field__item">
                      <img loading="lazy" src="/Treinamento_corporativos.jpg" alt="Treinamentos Corporativos" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Sector Petrolífero Section */}
      <div className="relative py-20 shadow-2xl" style={{backgroundImage: `url(${f2Image})`, backgroundSize: "cover", backgroundPosition: "center center", backgroundRepeat: "no-repeat"}}>
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/40 to-transparent"></div>
        <div className="absolute inset-0 bg-white/45"></div>
        <div className="absolute inset-0 bg-black/75"></div>
        <div className="container relative mx-auto px-4 z-10">
          <div className="max-w-2xl">
            <div className="mb-8">
              <div className="w-20 h-1" style={{backgroundColor: "rgb(95, 174, 227)"}}></div>
            </div>
            <h5 className="text-lg font-semibold text-white mb-4">Certificação ISO</h5>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">Implementação de Sistemas de Gestão ISO</h2>
            <p className="text-lg text-white mb-8 leading-relaxed">A MAEA SOLUTION é especializada na implementação completa de sistemas de gestão ISO, oferecendo consultoria personalizada para certificações ISO 9001, 14001, 22000, 27001, 45001 e outras. Garantimos qualidade, conformidade e excelência operacional para o seu negócio.</p>
            <div className="elementor-button-wrapper">
              <a href="/certificacao-iso" className="inline-flex items-center px-8 py-4 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl uppercase tracking-wide" role="button" style={{backgroundColor: "rgb(95, 174, 227)"}}>
                <span className="elementor-button-content-wrapper">
                  <span className="elementor-button-text">Saiba mais sobre certificação ISO</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <section className="pt-6 relative bg-white">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-full px-4 ml-auto mr-auto text-center">
              {/* Removido bloco do setor index_oilgas_title/index_oilgas_desc conforme solicitado */}
            </div>

            {/* Cards de serviços removidos - mantendo apenas o card principal */}
          </div>
        </div>

        {/* Nossos Serviços Section */}
        <section className="pt-20 pb-20 bg-gradient-to-br from-blue-50 via-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl p-8 lg:p-12 border border-white">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
                  {intl.formatMessage({id: "index_services_title"})}
                </h2>
                <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 rounded-full shadow-sm"></div>
                <p className="text-xl leading-relaxed text-gray-600 max-w-4xl mx-auto font-medium">
                  {intl.formatMessage({id: "index_services_desc"})}
                </p>
              </div>
              
              {/* Cards no estilo da imagem */}
              <div className="flex flex-wrap">
                {/* Card 1 - Ambiente */}
                <a href="/solucoes-consultoria#gestao_ambiental" className="relative snap-center group flex flex-col grow bg-white rounded lg:transition-transform lg:hover:duration-300 lg:translate-y-0 lg:hover:-translate-y-3 h-64 w-full md:w-4/12 px-4 text-left">
                  <div className="cta-card-item-media mx-1 mt-1 rounded border border-gray-300 overflow-hidden">
                    <div className="field field--name-field-cta-card-image field--type-entity-reference field--label-hidden field__item">
                      <article className="media media--type-image media--view-mode-cta-card-image">
                        <div className="field field--name-field-media-image field--type-image field--label-visually_hidden">
                          <div className="field__item">
                            <img 
                              loading="lazy" 
                              width="464" 
                              height="500" 
                              src="sustentabilidade_responsabilidade.jpg" 
                              alt="Gestão Ambiental"
                              className="w-full h-28 object-cover"
                            />
                      </div>
                        </div>
                      </article>
                    </div>
                  </div>
                  <div className="cta-card-item-content mx-1 mb-1 bg-white flex flex-col grow gap-4 justify-between">
                    <div className="content-top flex flex-col grow gap-2 px-4 lg:px-6 pt-4 lg:pt-6 lg:pb-6 bg-white lg:transition-transform lg:duration-300 lg:group-hover:-translate-y-6">
                      <div className="cta-card-eyebrow text-product-color-default text-sm font-bold field field--name-field-cta-card-eyebrow field--type-string field--label-hidden field__item">
                        Consultoria Ambiental
                      </div>
                      <div className="h4 field field--name-field-cta-card-headline field--type-string field--label-hidden field__item text-lg">
                        Sustentabilidade e Responsabilidade
                      </div>
                      <p className="text-gray-600 text-sm">
                        Gestão ambiental integrada, licenciamento, monitoramento e compliance ambiental. Desenvolvimento de estratégias sustentáveis e gestão de resíduos.
                      </p>
                    </div>
                    <div className="content-bottom px-4 lg:px-6 pb-4 lg:pb-6 text-blue-black font-medium text-sm leading-140 lg:absolute lg:bottom-0">
                      <div className="lg:transition-transform lg:duration-300 lg:group-hover:translate-y-0 lg:translate-y-full lg:opacity-0 lg:group-hover:opacity-100 after:content-icon-cta-secondary after:block after:leading-none after:w-4 after:h-4 flex flex-row items-center gap-2 focus-visible:outline-none focus-visible:text-primary-innovative-pink">
                        Ver mais
                      </div>
                    </div>
                  </div>
                </a>

                {/* Card 2 - Business Consulting */}
                <a href="/business-consulting-formacoes#business_consulting" className="relative snap-center group flex flex-col grow bg-white rounded lg:transition-transform lg:hover:duration-300 lg:translate-y-0 lg:hover:-translate-y-3 h-64 w-full md:w-4/12 px-4 text-left">
                  <div className="cta-card-item-media mx-1 mt-1 rounded border border-gray-300 overflow-hidden">
                    <div className="field field--name-field-cta-card-image field--type-entity-reference field--label-hidden field__item">
                      <article className="media media--type-image media--view-mode-cta-card-image">
                        <div className="field field--name-field-media-image field--type-image field--label-visually_hidden">
                          <div className="field__item">
                            <img 
                              loading="lazy" 
                              width="464" 
                              height="500" 
                              src="Consultoria_empresarial.jpg" 
                              alt="Consultoria Empresarial"
                              className="w-full h-28 object-cover"
                            />
                    </div>
                  </div>
                      </article>
                </div>
                      </div>
                  <div className="cta-card-item-content mx-1 mb-1 bg-white flex flex-col grow gap-4 justify-between">
                    <div className="content-top flex flex-col grow gap-2 px-4 lg:px-6 pt-4 lg:pt-6 lg:pb-6 bg-white lg:transition-transform lg:duration-300 lg:group-hover:-translate-y-6">
                      <div className="cta-card-eyebrow text-product-color-default text-sm font-bold field field--name-field-cta-card-eyebrow field--type-string field--label-hidden field__item">
                        Consultoria Empresarial
                </div>
                      <div className="h4 field field--name-field-cta-card-headline field--type-string field--label-hidden field__item text-lg">
                        Estratégia e Transformação Digital
                      </div>
                      <p className="text-gray-600 text-sm">
                        Consultoria estratégica, transformação digital, otimização de processos e gestão da mudança. Desenvolvimento de soluções personalizadas para crescimento empresarial.
                      </p>
                    </div>
                    <div className="content-bottom px-4 lg:px-6 pb-4 lg:pb-6 text-blue-black font-medium text-sm leading-140 lg:absolute lg:bottom-0">
                      <div className="lg:transition-transform lg:duration-300 lg:group-hover:translate-y-0 lg:translate-y-full lg:opacity-0 lg:group-hover:opacity-100 after:content-icon-cta-secondary after:block after:leading-none after:w-4 after:h-4 flex flex-row items-center gap-2 focus-visible:outline-none focus-visible:text-primary-innovative-pink">
                        Ver mais
                      </div>
                    </div>
                  </div>
                </a>

                {/* Card 3 - Formações Profissional */}
                <a href="/business-consulting-formacoes#formacoes_profissional" className="relative snap-center group flex flex-col grow bg-white rounded lg:transition-transform lg:hover:duration-300 lg:translate-y-0 lg:hover:-translate-y-3 h-64 w-full md:w-4/12 px-4 text-left">
                  <div className="cta-card-item-media mx-1 mt-1 rounded border border-gray-300 overflow-hidden">
                    <div className="field field--name-field-cta-card-image field--type-entity-reference field--label-hidden field__item">
                      <article className="media media--type-image media--view-mode-cta-card-image">
                        <div className="field field--name-field-media-image field--type-image field--label-visually_hidden">
                          <div className="field__item">
                            <img 
                              loading="lazy" 
                              width="464" 
                              height="500" 
                              src="Treinamento_corporativos.jpg" 
                              alt="Treinamentos Corporativos"
                              className="w-full h-28 object-cover"
                            />
                    </div>
                  </div>
                      </article>
                </div>
                </div>
                  <div className="cta-card-item-content mx-1 mb-1 bg-white flex flex-col grow gap-4 justify-between">
                    <div className="content-top flex flex-col grow gap-2 px-4 lg:px-6 pt-4 lg:pt-6 lg:pb-6 bg-white lg:transition-transform lg:duration-300 lg:group-hover:-translate-y-6">
                      <div className="cta-card-eyebrow text-product-color-default text-sm font-bold field field--name-field-cta-card-eyebrow field--type-string field--label-hidden field__item">
                        Treinamentos Corporativos
                      </div>
                      <div className="h4 field field--name-field-cta-card-headline field--type-string field--label-hidden field__item text-lg">
                        Desenvolvimento de Competências
                      </div>
                      <p className="text-gray-600 text-sm">
                        Programas de formação personalizados, desenvolvimento de liderança, capacitação técnica e soft skills. Treinamentos in-company e workshops especializados.
                      </p>
                    </div>
                    <div className="content-bottom px-4 lg:px-6 pb-4 lg:pb-6 text-blue-black font-medium text-sm leading-140 lg:absolute lg:bottom-0">
                      <div className="lg:transition-transform lg:duration-300 lg:group-hover:translate-y-0 lg:translate-y-full lg:opacity-0 lg:group-hover:opacity-100 after:content-icon-cta-secondary after:block after:leading-none after:w-4 after:h-4 flex flex-row items-center gap-2 focus-visible:outline-none focus-visible:text-primary-innovative-pink">
                        Ver mais
                      </div>
                    </div>
                  </div>
                </a>

                {/* Card 4 - Saúde e Segurança */}
                <a href="/solucoes-consultoria#seguranca_trabalho" className="relative snap-center group flex flex-col grow bg-white rounded lg:transition-transform lg:hover:duration-300 lg:translate-y-0 lg:hover:-translate-y-3 h-64 w-full md:w-4/12 px-4 text-left">
                  <div className="cta-card-item-media mx-1 mt-1 rounded border border-gray-300 overflow-hidden">
                    <div className="field field--name-field-cta-card-image field--type-entity-reference field--label-hidden field__item">
                      <article className="media media--type-image media--view-mode-cta-card-image">
                        <div className="field field--name-field-media-image field--type-image field--label-visually_hidden">
                          <div className="field__item">
                            <img 
                              loading="lazy" 
                              width="464" 
                              height="500" 
                              src="A-Importancia-da-Saude-e-Seguranca-do-Trabalho.jpg" 
                              alt="Saúde e Segurança"
                              className="w-full h-28 object-cover"
                            />
                    </div>
                  </div>
                      </article>
                </div>
                      </div>
                  <div className="cta-card-item-content mx-1 mb-1 bg-white flex flex-col grow gap-4 justify-between">
                    <div className="content-top flex flex-col grow gap-2 px-4 lg:px-6 pt-4 lg:pt-6 lg:pb-6 bg-white lg:transition-transform lg:duration-300 lg:group-hover:-translate-y-6">
                      <div className="cta-card-eyebrow text-product-color-default text-sm font-bold field field--name-field-cta-card-eyebrow field--type-string field--label-hidden field__item">
                        Saúde e Segurança
                </div>
                      <div className="h4 field field--name-field-cta-card-headline field--type-string field--label-hidden field__item text-lg">
                        Prevenção e Proteção Ocupacional
                      </div>
                      <p className="text-gray-600 text-sm">
                        Gestão de segurança do trabalho, saúde ocupacional, prevenção de acidentes e compliance regulamentar. Implementação de sistemas de gestão integrados.
                      </p>
                    </div>
                    <div className="content-bottom px-4 lg:px-6 pb-4 lg:pb-6 text-blue-black font-medium text-sm leading-140 lg:absolute lg:bottom-0">
                      <div className="lg:transition-transform lg:duration-300 lg:group-hover:translate-y-0 lg:translate-y-full lg:opacity-0 lg:group-hover:opacity-100 after:content-icon-cta-secondary after:block after:leading-none after:w-4 after:h-4 flex flex-row items-center gap-2 focus-visible:outline-none focus-visible:text-primary-innovative-pink">
                        Ver mais
                      </div>
                    </div>
                  </div>
                </a>

                {/* Card 5 - Certificação ISO */}
                <a href="/certificacao-iso" className="relative snap-center group flex flex-col grow bg-white rounded lg:transition-transform lg:hover:duration-300 lg:translate-y-0 lg:hover:-translate-y-3 h-64 w-full md:w-4/12 px-4 text-left">
                  <div className="cta-card-item-media mx-1 mt-1 rounded border border-gray-300 overflow-hidden">
                    <div className="field field--name-field-cta-card-image field--type-entity-reference field--label-hidden field__item">
                      <article className="media media--type-image media--view-mode-cta-card-image">
                        <div className="field field--name-field-media-image field--type-image field--label-visually_hidden">
                          <div className="field__item">
                            <img 
                              loading="lazy" 
                              width="464" 
                              height="500" 
                              src="Certificacao_ISO.jpg" 
                              alt="Certificação ISO"
                              className="w-full h-28 object-cover"
                            />
                    </div>
                  </div>
                      </article>
                </div>
                </div>
                  <div className="cta-card-item-content mx-1 mb-1 bg-white flex flex-col grow gap-4 justify-between">
                    <div className="content-top flex flex-col grow gap-2 px-4 lg:px-6 pt-4 lg:pt-6 lg:pb-6 bg-white lg:transition-transform lg:duration-300 lg:group-hover:-translate-y-6">
                      <div className="cta-card-eyebrow text-product-color-default text-sm font-bold field field--name-field-cta-card-eyebrow field--type-string field--label-hidden field__item">
                        Certificação ISO
                      </div>
                      <div className="h4 field field--name-field-cta-card-headline field--type-string field--label-hidden field__item text-lg">
                        Qualidade e Excelência Operacional
                      </div>
                      <p className="text-gray-600 text-sm">
                        Implementação e certificação de sistemas de gestão ISO 9001, 14001, 45001. Auditoria, consultoria e manutenção de certificações internacionais.
                      </p>
                    </div>
                    <div className="content-bottom px-4 lg:px-6 pb-4 lg:pb-6 text-blue-black font-medium text-sm leading-140 lg:absolute lg:bottom-0">
                      <div className="lg:transition-transform lg:duration-300 lg:group-hover:translate-y-0 lg:translate-y-full lg:opacity-0 lg:group-hover:opacity-100 after:content-icon-cta-secondary after:block after:leading-none after:w-4 after:h-4 flex flex-row items-center gap-2 focus-visible:outline-none focus-visible:text-primary-innovative-pink">
                        Ver mais
                      </div>
                    </div>
                  </div>
                </a>

                {/* Card 6 - Treinamentos */}
                <a href="/treinamento" className="relative snap-center group flex flex-col grow bg-white rounded lg:transition-transform lg:hover:duration-300 lg:translate-y-0 lg:hover:-translate-y-3 h-64 w-full md:w-4/12 px-4 text-left">
                  <div className="cta-card-item-media mx-1 mt-1 rounded border border-gray-300 overflow-hidden">
                    <div className="field field--name-field-cta-card-image field--type-entity-reference field--label-hidden field__item">
                      <article className="media media--type-image media--view-mode-cta-card-image">
                        <div className="field field--name-field-media-image field--type-image field--label-visually_hidden">
                          <div className="field__item">
                            <img 
                              loading="lazy" 
                              width="464" 
                              height="500" 
                              src="Projetos_Setor_Petrolifero.jpg" 
                              alt="Projetos no Setor Petrolífero"
                              className="w-full h-28 object-cover"
                            />
                    </div>
                  </div>
                      </article>
                    </div>
                  </div>
                  <div className="cta-card-item-content mx-1 mb-1 bg-white flex flex-col grow gap-4 justify-between">
                    <div className="content-top flex flex-col grow gap-2 px-4 lg:px-6 pt-4 lg:pt-6 lg:pb-6 bg-white lg:transition-transform lg:duration-300 lg:group-hover:-translate-y-6">
                      <div className="cta-card-eyebrow text-product-color-default text-sm font-bold field field--name-field-cta-card-eyebrow field--type-string field--label-hidden field__item">
                        Projetos no Setor Petrolífero
                </div>
                      <div className="h4 field field--name-field-cta-card-headline field--type-string field--label-hidden field__item text-lg">
                        Excelência em Engenharia e Gestão
                      </div>
                      <p className="text-gray-600 text-sm">
                        Experiência em projetos de engenharia, construção, manutenção e operação para a indústria de óleo e gás. Gestão de contratos, riscos, equipes e compliance.
                      </p>
                      </div>
                    <div className="content-bottom px-4 lg:px-6 pb-4 lg:pb-6 text-blue-black font-medium text-sm leading-140 lg:absolute lg:bottom-0">
                      <div className="lg:transition-transform lg:duration-300 lg:group-hover:translate-y-0 lg:translate-y-full lg:opacity-0 lg:group-hover:opacity-100 after:content-icon-cta-secondary after:block after:leading-none after:w-4 after:h-4 flex flex-row items-center gap-2 focus-visible:outline-none focus-visible:text-primary-innovative-pink">
                        Ver mais
                    </div>
                  </div>
                </div>
                </a>
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
              {/* Cards organizados em grid responsivo */}
              <div className="flex flex-wrap">
                {/* Card 1 - ISO 9001 */}
                <a href="/certificacao/iso-9001" className="relative snap-center group flex flex-col grow bg-white rounded lg:transition-transform lg:hover:duration-300 lg:translate-y-0 lg:hover:-translate-y-3 h-64 w-full md:w-4/12 px-4 text-left">
                  <div className="cta-card-item-media mx-1 mt-1 rounded border border-gray-300 overflow-hidden">
                    <div className="field field--name-field-cta-card-image field--type-entity-reference field--label-hidden field__item">
                      <article className="media media--type-image media--view-mode-cta-card-image">
                        <div className="field field--name-field-media-image field--type-image field--label-visually_hidden">
                          <div className="field__item">
                            <img 
                              loading="lazy" 
                              width="464" 
                              height="500" 
                              src="Certificacao_ISO.jpg" 
                              alt="ISO 9001"
                              className="w-full h-28 object-cover"
                            />
                    </div>
                        </div>
                      </article>
                    </div>
                  </div>
                  <div className="cta-card-item-content mx-1 mb-1 bg-white flex flex-col grow gap-4 justify-between">
                    <div className="content-top flex flex-col grow gap-2 px-4 lg:px-6 pt-4 lg:pt-6 lg:pb-6 bg-white lg:transition-transform lg:duration-300 lg:group-hover:-translate-y-6">
                      <div className="cta-card-eyebrow text-product-color-default text-sm font-bold field field--name-field-cta-card-eyebrow field--type-string field--label-hidden field__item">
                        Gestão da Qualidade
                      </div>
                      <div className="h4 field field--name-field-cta-card-headline field--type-string field--label-hidden field__item text-lg">
                        {intl.formatMessage({id: "index_iso_9001_title"})}
                      </div>
                      <p className="text-gray-600 text-sm">
                      {intl.formatMessage({id: "index_iso_9001_desc"})}
                    </p>
                    </div>
                    <div className="content-bottom px-4 lg:px-6 pb-4 lg:pb-6 text-blue-black font-medium text-sm leading-140 lg:absolute lg:bottom-0">
                      <div className="lg:transition-transform lg:duration-300 lg:group-hover:translate-y-0 lg:translate-y-full lg:opacity-0 lg:group-hover:opacity-100 after:content-icon-cta-secondary after:block after:leading-none after:w-4 after:h-4 flex flex-row items-center gap-2 focus-visible:outline-none focus-visible:text-primary-innovative-pink">
                        Ver mais
                      </div>
                    </div>
                  </div>
                </a>

                {/* Card 2 - ISO 14001 */}
                <a href="/certificacao/iso-14001" className="relative snap-center group flex flex-col grow bg-white rounded lg:transition-transform lg:hover:duration-300 lg:translate-y-0 lg:hover:-translate-y-3 h-64 w-full md:w-4/12 px-4 text-left">
                  <div className="cta-card-item-media mx-1 mt-1 rounded border border-gray-300 overflow-hidden">
                    <div className="field field--name-field-cta-card-image field--type-entity-reference field--label-hidden field__item">
                      <article className="media media--type-image media--view-mode-cta-card-image">
                        <div className="field field--name-field-media-image field--type-image field--label-visually_hidden">
                          <div className="field__item">
                            <img 
                              loading="lazy" 
                              width="464" 
                              height="500" 
                              src="sustentabilidade_responsabilidade.jpg" 
                              alt="ISO 14001"
                              className="w-full h-28 object-cover"
                            />
                </div>
                    </div>
                      </article>
                    </div>
                  </div>
                  <div className="cta-card-item-content mx-1 mb-1 bg-white flex flex-col grow gap-4 justify-between">
                    <div className="content-top flex flex-col grow gap-2 px-4 lg:px-6 pt-4 lg:pt-6 lg:pb-6 bg-white lg:transition-transform lg:duration-300 lg:group-hover:-translate-y-6">
                      <div className="cta-card-eyebrow text-product-color-default text-sm font-bold field field--name-field-cta-card-eyebrow field--type-string field--label-hidden field__item">
                        Gestão Ambiental
                      </div>
                      <div className="h4 field field--name-field-cta-card-headline field--type-string field--label-hidden field__item text-lg">
                        {intl.formatMessage({id: "index_iso_14001_title"})}
                      </div>
                      <p className="text-gray-600 text-sm">
                      {intl.formatMessage({id: "index_iso_14001_desc"})}
                    </p>
                </div>
                    <div className="content-bottom px-4 lg:px-6 pb-4 lg:pb-6 text-blue-black font-medium text-sm leading-140 lg:absolute lg:bottom-0">
                      <div className="lg:transition-transform lg:duration-300 lg:group-hover:translate-y-0 lg:translate-y-full lg:opacity-0 lg:group-hover:opacity-100 after:content-icon-cta-secondary after:block after:leading-none after:w-4 after:h-4 flex flex-row items-center gap-2 focus-visible:outline-none focus-visible:text-primary-innovative-pink">
                        Ver mais
                    </div>
                    </div>
                  </div>
                </a>

                {/* Card 3 - ISO 45001 */}
                <a href="/certificacao/iso-45001" className="relative snap-center group flex flex-col grow bg-white rounded lg:transition-transform lg:hover:duration-300 lg:translate-y-0 lg:hover:-translate-y-3 h-64 w-full md:w-4/12 px-4 text-left">
                  <div className="cta-card-item-media mx-1 mt-1 rounded border border-gray-300 overflow-hidden">
                    <div className="field field--name-field-cta-card-image field--type-entity-reference field--label-hidden field__item">
                      <article className="media media--type-image media--view-mode-cta-card-image">
                        <div className="field field--name-field-media-image field--type-image field--label-visually_hidden">
                          <div className="field__item">
                            <img 
                              loading="lazy" 
                              width="464" 
                              height="500" 
                              src="A-Importancia-da-Saude-e-Seguranca-do-Trabalho.jpg" 
                              alt="ISO 45001"
                              className="w-full h-28 object-cover"
                            />
                </div>
                    </div>
                      </article>
                    </div>
                  </div>
                  <div className="cta-card-item-content mx-1 mb-1 bg-white flex flex-col grow gap-4 justify-between">
                    <div className="content-top flex flex-col grow gap-2 px-4 lg:px-6 pt-4 lg:pt-6 lg:pb-6 bg-white lg:transition-transform lg:duration-300 lg:group-hover:-translate-y-6">
                      <div className="cta-card-eyebrow text-product-color-default text-sm font-bold field field--name-field-cta-card-eyebrow field--type-string field--label-hidden field__item">
                        Segurança e Saúde no Trabalho
                      </div>
                      <div className="h4 field field--name-field-cta-card-headline field--type-string field--label-hidden field__item text-lg">
                        {intl.formatMessage({id: "index_iso_45001_title"})}
                      </div>
                      <p className="text-gray-600 text-sm">
                      {intl.formatMessage({id: "index_iso_45001_desc"})}
                    </p>
                    </div>
                    <div className="content-bottom px-4 lg:px-6 pb-4 lg:pb-6 text-blue-black font-medium text-sm leading-140 lg:absolute lg:bottom-0">
                      <div className="lg:transition-transform lg:duration-300 lg:group-hover:translate-y-0 lg:translate-y-full lg:opacity-0 lg:group-hover:opacity-100 after:content-icon-cta-secondary after:block after:leading-none after:w-4 after:h-4 flex flex-row items-center gap-2 focus-visible:outline-none focus-visible:text-primary-innovative-pink">
                        Ver mais
                      </div>
                    </div>
                  </div>
                </a>

                {/* Card 4 - ISO 22000 */}
                <a href="/certificacao/iso-22000" className="relative snap-center group flex flex-col grow bg-white rounded lg:transition-transform lg:hover:duration-300 lg:translate-y-0 lg:hover:-translate-y-3 h-64 w-full md:w-4/12 px-4 text-left">
                  <div className="cta-card-item-media mx-1 mt-1 rounded border border-gray-300 overflow-hidden">
                    <div className="field field--name-field-cta-card-image field--type-entity-reference field--label-hidden field__item">
                      <article className="media media--type-image media--view-mode-cta-card-image">
                        <div className="field field--name-field-media-image field--type-image field--label-visually_hidden">
                          <div className="field__item">
                            <img 
                              loading="lazy" 
                              width="464" 
                              height="500" 
                              src="Consultoria_empresarial.jpg" 
                              alt="ISO 22000"
                              className="w-full h-28 object-cover"
                            />
                </div>
                    </div>
                      </article>
                    </div>
                  </div>
                  <div className="cta-card-item-content mx-1 mb-1 bg-white flex flex-col grow gap-4 justify-between">
                    <div className="content-top flex flex-col grow gap-2 px-4 lg:px-6 pt-4 lg:pt-6 lg:pb-6 bg-white lg:transition-transform lg:duration-300 lg:group-hover:-translate-y-6">
                      <div className="cta-card-eyebrow text-product-color-default text-sm font-bold field field--name-field-cta-card-eyebrow field--type-string field--label-hidden field__item">
                        Segurança Alimentar
                      </div>
                      <div className="h4 field field--name-field-cta-card-headline field--type-string field--label-hidden field__item text-lg">
                        {intl.formatMessage({id: "index_iso_22000_title"})}
                      </div>
                      <p className="text-gray-600 text-sm">
                      {intl.formatMessage({id: "index_iso_22000_desc"})}
                    </p>
                </div>
                    <div className="content-bottom px-4 lg:px-6 pb-4 lg:pb-6 text-blue-black font-medium text-sm leading-140 lg:absolute lg:bottom-0">
                      <div className="lg:transition-transform lg:duration-300 lg:group-hover:translate-y-0 lg:translate-y-full lg:opacity-0 lg:group-hover:opacity-100 after:content-icon-cta-secondary after:block after:leading-none after:w-4 after:h-4 flex flex-row items-center gap-2 focus-visible:outline-none focus-visible:text-primary-innovative-pink">
                        Ver mais
                    </div>
                    </div>
                  </div>
                </a>

                {/* Card 5 - ISO 27001 */}
                <a href="/certificacao/iso-27001" className="relative snap-center group flex flex-col grow bg-white rounded lg:transition-transform lg:hover:duration-300 lg:translate-y-0 lg:hover:-translate-y-3 h-64 w-full md:w-4/12 px-4 text-left">
                  <div className="cta-card-item-media mx-1 mt-1 rounded border border-gray-300 overflow-hidden">
                    <div className="field field--name-field-cta-card-image field--type-entity-reference field--label-hidden field__item">
                      <article className="media media--type-image media--view-mode-cta-card-image">
                        <div className="field field--name-field-media-image field--type-image field--label-visually_hidden">
                          <div className="field__item">
                            <img 
                              loading="lazy" 
                              width="464" 
                              height="500" 
                              src="Consultoria-Tecnica.jpg" 
                              alt="ISO 27001"
                              className="w-full h-28 object-cover"
                            />
                </div>
                    </div>
                      </article>
                    </div>
                  </div>
                  <div className="cta-card-item-content mx-1 mb-1 bg-white flex flex-col grow gap-4 justify-between">
                    <div className="content-top flex flex-col grow gap-2 px-4 lg:px-6 pt-4 lg:pt-6 lg:pb-6 bg-white lg:transition-transform lg:duration-300 lg:group-hover:-translate-y-6">
                      <div className="cta-card-eyebrow text-product-color-default text-sm font-bold field field--name-field-cta-card-eyebrow field--type-string field--label-hidden field__item">
                        Segurança da Informação
                      </div>
                      <div className="h4 field field--name-field-cta-card-headline field--type-string field--label-hidden field__item text-lg">
                        {intl.formatMessage({id: "index_iso_27001_title"})}
                      </div>
                      <p className="text-gray-600 text-sm">
                      {intl.formatMessage({id: "index_iso_27001_desc"})}
                    </p>
                </div>
                    <div className="content-bottom px-4 lg:px-6 pb-4 lg:pb-6 text-blue-black font-medium text-sm leading-140 lg:absolute lg:bottom-0">
                      <div className="lg:transition-transform lg:duration-300 lg:group-hover:translate-y-0 lg:translate-y-full lg:opacity-0 lg:group-hover:opacity-100 after:content-icon-cta-secondary after:block after:leading-none after:w-4 after:h-4 flex flex-row items-center gap-2 focus-visible:outline-none focus-visible:text-primary-innovative-pink">
                        Ver mais
                    </div>
                </div>
                    </div>
                </a>

                {/* Card 6 - ISO 29001 */}
                <a href="/certificacao/iso-29001" className="relative snap-center group flex flex-col grow bg-white rounded lg:transition-transform lg:hover:duration-300 lg:translate-y-0 lg:hover:-translate-y-3 h-64 w-full md:w-4/12 px-4 text-left">
                  <div className="cta-card-item-media mx-1 mt-1 rounded border border-gray-300 overflow-hidden">
                    <div className="field field--name-field-cta-card-image field--type-entity-reference field--label-hidden field__item">
                      <article className="media media--type-image media--view-mode-cta-card-image">
                        <div className="field field--name-field-media-image field--type-image field--label-visually_hidden">
                          <div className="field__item">
                            <img 
                              loading="lazy" 
                              width="464" 
                              height="500" 
                              src="Projetos_Setor_Petrolifero.jpg" 
                              alt="ISO 29001"
                              className="w-full h-28 object-cover"
                            />
                </div>
                    </div>
                      </article>
                </div>
                    </div>
                  <div className="cta-card-item-content mx-1 mb-1 bg-white flex flex-col grow gap-4 justify-between">
                    <div className="content-top flex flex-col grow gap-2 px-4 lg:px-6 pt-4 lg:pt-6 lg:pb-6 bg-white lg:transition-transform lg:duration-300 lg:group-hover:-translate-y-6">
                      <div className="cta-card-eyebrow text-product-color-default text-sm font-bold field field--name-field-cta-card-eyebrow field--type-string field--label-hidden field__item">
                        Indústria Petrolífera
                </div>
                      <div className="h4 field field--name-field-cta-card-headline field--type-string field--label-hidden field__item text-lg">
                        {intl.formatMessage({id: "index_iso_29001_title"})}
                    </div>
                      <p className="text-gray-600 text-sm">
                        {intl.formatMessage({id: "index_iso_29001_desc"})}
                      </p>
                </div>
                    <div className="content-bottom px-4 lg:px-6 pb-4 lg:pb-6 text-blue-black font-medium text-sm leading-140 lg:absolute lg:bottom-0">
                      <div className="lg:transition-transform lg:duration-300 lg:group-hover:translate-y-0 lg:translate-y-full lg:opacity-0 lg:group-hover:opacity-100 after:content-icon-cta-secondary after:block after:leading-none after:w-4 after:h-4 flex flex-row items-center gap-2 focus-visible:outline-none focus-visible:text-primary-innovative-pink">
                        Ver mais
                    </div>
                </div>
                  </div>
                </a>
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
            {/* Cards organizados em grid responsivo */}
              <div className="flex flex-wrap">
                  {/* Card 1 - Avaliação de Impacto Ambiental */}
                <a href="/ambiente/avaliacao-impacto" className="relative snap-center group flex flex-col grow bg-white rounded lg:transition-transform lg:hover:duration-300 lg:translate-y-0 lg:hover:-translate-y-3 h-64 w-full md:w-4/12 px-4 text-left">
                  <div className="cta-card-item-media mx-1 mt-1 rounded border border-gray-300 overflow-hidden">
                    <div className="field field--name-field-cta-card-image field--type-entity-reference field--label-hidden field__item">
                      <article className="media media--type-image media--view-mode-cta-card-image">
                        <div className="field field--name-field-media-image field--type-image field--label-visually_hidden">
                          <div className="field__item">
                            <img 
                              loading="lazy" 
                              width="464" 
                              height="500" 
                              src="sustentabilidade_responsabilidade.jpg" 
                              alt="Avaliação de Impacto Ambiental"
                              className="w-full h-28 object-cover"
                            />
                </div>
                        </div>
                      </article>
                    </div>
                  </div>
                  <div className="cta-card-item-content mx-1 mb-1 bg-white flex flex-col grow gap-4 justify-between">
                    <div className="content-top flex flex-col grow gap-2 px-4 lg:px-6 pt-4 lg:pt-6 lg:pb-6 bg-white lg:transition-transform lg:duration-300 lg:group-hover:-translate-y-6">
                      <div className="cta-card-eyebrow text-product-color-default text-sm font-bold field field--name-field-cta-card-eyebrow field--type-string field--label-hidden field__item">
                        Gestão Ambiental
                      </div>
                      <div className="h4 field field--name-field-cta-card-headline field--type-string field--label-hidden field__item text-lg">
                        {intl.formatMessage({id: "index_ambiente_impacto_title"})}
                      </div>
                      <p className="text-gray-600 text-sm">
                    {intl.formatMessage({id: "index_ambiente_impacto_desc"})}
                  </p>
              </div>
                    <div className="content-bottom px-4 lg:px-6 pb-4 lg:pb-6 text-blue-black font-medium text-sm leading-140 lg:absolute lg:bottom-0">
                      <div className="lg:transition-transform lg:duration-300 lg:group-hover:translate-y-0 lg:translate-y-full lg:opacity-0 lg:group-hover:opacity-100 after:content-icon-cta-secondary after:block after:leading-none after:w-4 after:h-4 flex flex-row items-center gap-2 focus-visible:outline-none focus-visible:text-primary-innovative-pink">
                        {intl.formatMessage({id: "index_ambiente_impacto_btn"})}
                    </div>
                  </div>
                  </div>
                </a>

                  {/* Card 2 - Medição e Monitoramento Ambiental */}
                <a href="/ambiente/monitoramento" className="relative snap-center group flex flex-col grow bg-white rounded lg:transition-transform lg:hover:duration-300 lg:translate-y-0 lg:hover:-translate-y-3 h-64 w-full md:w-4/12 px-4 text-left">
                  <div className="cta-card-item-media mx-1 mt-1 rounded border border-gray-300 overflow-hidden">
                    <div className="field field--name-field-cta-card-image field--type-entity-reference field--label-hidden field__item">
                      <article className="media media--type-image media--view-mode-cta-card-image">
                        <div className="field field--name-field-media-image field--type-image field--label-visually_hidden">
                          <div className="field__item">
                            <img 
                              loading="lazy" 
                              width="464" 
                              height="500" 
                              src="Consultoria_empresarial.jpg" 
                              alt="Medição e Monitoramento Ambiental"
                              className="w-full h-28 object-cover"
                            />
                </div>
                        </div>
                      </article>
                    </div>
                  </div>
                  <div className="cta-card-item-content mx-1 mb-1 bg-white flex flex-col grow gap-4 justify-between">
                    <div className="content-top flex flex-col grow gap-2 px-4 lg:px-6 pt-4 lg:pt-6 lg:pb-6 bg-white lg:transition-transform lg:duration-300 lg:group-hover:-translate-y-6">
                      <div className="cta-card-eyebrow text-product-color-default text-sm font-bold field field--name-field-cta-card-eyebrow field--type-string field--label-hidden field__item">
                        Monitoramento
                      </div>
                      <div className="h4 field field--name-field-cta-card-headline field--type-string field--label-hidden field__item text-lg">
                        {intl.formatMessage({id: "index_ambiente_monitoramento_title"})}
                      </div>
                      <p className="text-gray-600 text-sm">
                    {intl.formatMessage({id: "index_ambiente_monitoramento_desc"})}
                  </p>
              </div>
                    <div className="content-bottom px-4 lg:px-6 pb-4 lg:pb-6 text-blue-black font-medium text-sm leading-140 lg:absolute lg:bottom-0">
                      <div className="lg:transition-transform lg:duration-300 lg:group-hover:translate-y-0 lg:translate-y-full lg:opacity-0 lg:group-hover:opacity-100 after:content-icon-cta-secondary after:block after:leading-none after:w-4 after:h-4 flex flex-row items-center gap-2 focus-visible:outline-none focus-visible:text-primary-innovative-pink">
                        {intl.formatMessage({id: "index_ambiente_monitoramento_btn"})}
                    </div>
                  </div>
                </div>
                </a>

                  {/* Card 3 - Auditorias Ambientais */}
                <a href="/ambiente/auditorias" className="relative snap-center group flex flex-col grow bg-white rounded lg:transition-transform lg:hover:duration-300 lg:translate-y-0 lg:hover:-translate-y-3 h-64 w-full md:w-4/12 px-4 text-left">
                  <div className="cta-card-item-media mx-1 mt-1 rounded border border-gray-300 overflow-hidden">
                    <div className="field field--name-field-cta-card-image field--type-entity-reference field--label-hidden field__item">
                      <article className="media media--type-image media--view-mode-cta-card-image">
                        <div className="field field--name-field-media-image field--type-image field--label-visually_hidden">
                          <div className="field__item">
                            <img 
                              loading="lazy" 
                              width="464" 
                              height="500" 
                              src="Consultoria-Tecnica.jpg" 
                              alt="Auditorias Ambientais"
                              className="w-full h-28 object-cover"
                            />
                </div>
                        </div>
                      </article>
                    </div>
                  </div>
                  <div className="cta-card-item-content mx-1 mb-1 bg-white flex flex-col grow gap-4 justify-between">
                    <div className="content-top flex flex-col grow gap-2 px-4 lg:px-6 pt-4 lg:pt-6 lg:pb-6 bg-white lg:transition-transform lg:duration-300 lg:group-hover:-translate-y-6">
                      <div className="cta-card-eyebrow text-product-color-default text-sm font-bold field field--name-field-cta-card-eyebrow field--type-string field--label-hidden field__item">
                        Auditoria
                      </div>
                      <div className="h4 field field--name-field-cta-card-headline field--type-string field--label-hidden field__item text-lg">
                        {intl.formatMessage({id: "index_ambiente_auditorias_title"})}
                      </div>
                      <p className="text-gray-600 text-sm">
                    {intl.formatMessage({id: "index_ambiente_auditorias_desc"})}
                  </p>
              </div>
                    <div className="content-bottom px-4 lg:px-6 pb-4 lg:pb-6 text-blue-black font-medium text-sm leading-140 lg:absolute lg:bottom-0">
                      <div className="lg:transition-transform lg:duration-300 lg:group-hover:translate-y-0 lg:translate-y-full lg:opacity-0 lg:group-hover:opacity-100 after:content-icon-cta-secondary after:block after:leading-none after:w-4 after:h-4 flex flex-row items-center gap-2 focus-visible:outline-none focus-visible:text-primary-innovative-pink">
                        {intl.formatMessage({id: "index_ambiente_auditorias_btn"})}
                    </div>
                  </div>
                  </div>
                </a>

                  {/* Card 4 - Auditoria de Resíduos */}
                <a href="/ambiente/auditoria-residuos" className="relative snap-center group flex flex-col grow bg-white rounded lg:transition-transform lg:hover:duration-300 lg:translate-y-0 lg:hover:-translate-y-3 h-64 w-full md:w-4/12 px-4 text-left">
                  <div className="cta-card-item-media mx-1 mt-1 rounded border border-gray-300 overflow-hidden">
                    <div className="field field--name-field-cta-card-image field--type-entity-reference field--label-hidden field__item">
                      <article className="media media--type-image media--view-mode-cta-card-image">
                        <div className="field field--name-field-media-image field--type-image field--label-visually_hidden">
                          <div className="field__item">
                            <img 
                              loading="lazy" 
                              width="464" 
                              height="500" 
                              src="sustentabilidade_responsabilidade.jpg" 
                              alt="Auditoria de Resíduos"
                              className="w-full h-28 object-cover"
                            />
                </div>
                        </div>
                      </article>
                    </div>
                  </div>
                  <div className="cta-card-item-content mx-1 mb-1 bg-white flex flex-col grow gap-4 justify-between">
                    <div className="content-top flex flex-col grow gap-2 px-4 lg:px-6 pt-4 lg:pt-6 lg:pb-6 bg-white lg:transition-transform lg:duration-300 lg:group-hover:-translate-y-6">
                      <div className="cta-card-eyebrow text-product-color-default text-sm font-bold field field--name-field-cta-card-eyebrow field--type-string field--label-hidden field__item">
                        Gestão de Resíduos
                      </div>
                      <div className="h4 field field--name-field-cta-card-headline field--type-string field--label-hidden field__item text-lg">
                        {intl.formatMessage({id: "index_ambiente_residuos_title"})}
                      </div>
                      <p className="text-gray-600 text-sm">
                    {intl.formatMessage({id: "index_ambiente_residuos_desc"})}
                  </p>
              </div>
                    <div className="content-bottom px-4 lg:px-6 pb-4 lg:pb-6 text-blue-black font-medium text-sm leading-140 lg:absolute lg:bottom-0">
                      <div className="lg:transition-transform lg:duration-300 lg:group-hover:translate-y-0 lg:translate-y-full lg:opacity-0 lg:group-hover:opacity-100 after:content-icon-cta-secondary after:block after:leading-none after:w-4 after:h-4 flex flex-row items-center gap-2 focus-visible:outline-none focus-visible:text-primary-innovative-pink">
                        {intl.formatMessage({id: "index_ambiente_residuos_btn"})}
                    </div>
                  </div>
                </div>
                </a>

                  {/* Card 5 - Tratamento de águas residuais */}
                <a href="/ambiente/tratamento-aguas" className="relative snap-center group flex flex-col grow bg-white rounded lg:transition-transform lg:hover:duration-300 lg:translate-y-0 lg:hover:-translate-y-3 h-64 w-full md:w-4/12 px-4 text-left">
                  <div className="cta-card-item-media mx-1 mt-1 rounded border border-gray-300 overflow-hidden">
                    <div className="field field--name-field-cta-card-image field--type-entity-reference field--label-hidden field__item">
                      <article className="media media--type-image media--view-mode-cta-card-image">
                        <div className="field field--name-field-media-image field--type-image field--label-visually_hidden">
                          <div className="field__item">
                            <img 
                              loading="lazy" 
                              width="464" 
                              height="500" 
                              src="Consultoria_empresarial.jpg" 
                              alt="Tratamento de águas residuais"
                              className="w-full h-28 object-cover"
                            />
                </div>
                        </div>
                      </article>
                    </div>
                  </div>
                  <div className="cta-card-item-content mx-1 mb-1 bg-white flex flex-col grow gap-4 justify-between">
                    <div className="content-top flex flex-col grow gap-2 px-4 lg:px-6 pt-4 lg:pt-6 lg:pb-6 bg-white lg:transition-transform lg:duration-300 lg:group-hover:-translate-y-6">
                      <div className="cta-card-eyebrow text-product-color-default text-sm font-bold field field--name-field-cta-card-eyebrow field--type-string field--label-hidden field__item">
                        Tratamento de Águas
                      </div>
                      <div className="h4 field field--name-field-cta-card-headline field--type-string field--label-hidden field__item text-lg">
                        {intl.formatMessage({id: "index_ambiente_aguas_title"})}
                      </div>
                      <p className="text-gray-600 text-sm">
                    {intl.formatMessage({id: "index_ambiente_aguas_desc"})}
                  </p>
              </div>
                    <div className="content-bottom px-4 lg:px-6 pb-4 lg:pb-6 text-blue-black font-medium text-sm leading-140 lg:absolute lg:bottom-0">
                      <div className="lg:transition-transform lg:duration-300 lg:group-hover:translate-y-0 lg:translate-y-full lg:opacity-0 lg:group-hover:opacity-100 after:content-icon-cta-secondary after:block after:leading-none after:w-4 after:h-4 flex flex-row items-center gap-2 focus-visible:outline-none focus-visible:text-primary-innovative-pink">
                        {intl.formatMessage({id: "index_ambiente_aguas_btn"})}
                    </div>
                  </div>
                  </div>
                </a>

                  {/* Card 6 - Conformidade legal */}
                <a href="/ambiente/conformidade-legal" className="relative snap-center group flex flex-col grow bg-white rounded lg:transition-transform lg:hover:duration-300 lg:translate-y-0 lg:hover:-translate-y-3 h-64 w-full md:w-4/12 px-4 text-left">
                  <div className="cta-card-item-media mx-1 mt-1 rounded border border-gray-300 overflow-hidden">
                    <div className="field field--name-field-cta-card-image field--type-entity-reference field--label-hidden field__item">
                      <article className="media media--type-image media--view-mode-cta-card-image">
                        <div className="field field--name-field-media-image field--type-image field--label-visually_hidden">
                          <div className="field__item">
                            <img 
                              loading="lazy" 
                              width="464" 
                              height="500" 
                              src="Consultoria-Tecnica.jpg" 
                              alt="Conformidade legal"
                              className="w-full h-28 object-cover"
                            />
                </div>
                        </div>
                      </article>
                    </div>
                  </div>
                  <div className="cta-card-item-content mx-1 mb-1 bg-white flex flex-col grow gap-4 justify-between">
                    <div className="content-top flex flex-col grow gap-2 px-4 lg:px-6 pt-4 lg:pt-6 lg:pb-6 bg-white lg:transition-transform lg:duration-300 lg:group-hover:-translate-y-6">
                      <div className="cta-card-eyebrow text-product-color-default text-sm font-bold field field--name-field-cta-card-eyebrow field--type-string field--label-hidden field__item">
                        Conformidade Legal
                      </div>
                      <div className="h4 field field--name-field-cta-card-headline field--type-string field--label-hidden field__item text-lg">
                        {intl.formatMessage({id: "index_ambiente_conformidade_title"})}
                      </div>
                      <p className="text-gray-600 text-sm">
                    {intl.formatMessage({id: "index_ambiente_conformidade_desc"})}
                  </p>
                      </div>
                    <div className="content-bottom px-4 lg:px-6 pb-4 lg:pb-6 text-blue-black font-medium text-sm leading-140 lg:absolute lg:bottom-0">
                      <div className="lg:transition-transform lg:duration-300 lg:group-hover:translate-y-0 lg:translate-y-full lg:opacity-0 lg:group-hover:opacity-100 after:content-icon-cta-secondary after:block after:leading-none after:w-4 after:h-4 flex flex-row items-center gap-2 focus-visible:outline-none focus-visible:text-primary-innovative-pink">
                        {intl.formatMessage({id: "index_ambiente_conformidade_btn"})}
                    </div>
                  </div>
                </div>
                </a>
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
            <div className="flex flex-wrap">
                  {/* Motivações */}
                <a href="/sobre/motivacao" className="relative snap-center group flex flex-col grow bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 lg:hover:duration-300 lg:translate-y-0 lg:hover:-translate-y-4 h-64 w-full md:w-4/12 px-4 text-left border border-gray-100">
                  <div className="cta-card-item-media mx-1 mt-1 rounded-lg border border-gray-200 overflow-hidden relative shadow-sm">
                    <div className="field field--name-field-cta-card-image field--type-entity-reference field--label-hidden field__item">
                      <article className="media media--type-image media--view-mode-cta-card-image">
                        <div className="field field--name-field-media-image field--type-image field--label-visually_hidden">
                          <div className="field__item relative">
                            <img 
                              loading="lazy" 
                              width="464" 
                              height="500" 
                              src="nossos.jpg" 
                              alt="Motivação"
                              className="w-full h-28 object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            {/* Título 3D sobre a imagem */}
                            <div className="absolute inset-0 flex items-center justify-center">
                              <h3 className="text-white font-bold text-2xl md:text-3xl lg:text-4xl text-center drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] transform-gpu" style={{
                                textShadow: '2px 2px 4px rgba(0,0,0,0.8), -1px -1px 2px rgba(255,255,255,0.3)',
                                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.6))'
                              }}>
                                Motivação
                              </h3>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                  <div className="cta-card-item-content mx-1 mb-1 bg-white flex flex-col grow gap-4 justify-between">
                    <div className="content-top flex flex-col grow gap-3 px-4 lg:px-6 pt-4 lg:pt-6 lg:pb-6 bg-white lg:transition-transform lg:duration-300 lg:group-hover:-translate-y-6">
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {intl.formatMessage({id: "index_motivation_desc"})}
                      </p>
                    </div>
                    <div className="content-bottom px-4 lg:px-6 pb-4 lg:pb-6 text-blue-600 font-medium text-sm leading-140 lg:absolute lg:bottom-0">
                      <div className="lg:transition-transform lg:duration-300 lg:group-hover:translate-y-0 lg:translate-y-full lg:opacity-0 lg:group-hover:opacity-100 after:content-icon-cta-secondary after:block after:leading-none after:w-4 after:h-4 flex flex-row items-center gap-2 focus-visible:outline-none focus-visible:text-primary-innovative-pink hover:text-blue-700 transition-colors duration-200">
                        Ver mais
                      </div>
                    </div>
                  </div>
                </a>

                  {/* Valores */}
                <a href="/sobre/valores" className="relative snap-center group flex flex-col grow bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 lg:hover:duration-300 lg:translate-y-0 lg:hover:-translate-y-4 h-64 w-full md:w-4/12 px-4 text-left border border-gray-100">
                  <div className="cta-card-item-media mx-1 mt-1 rounded-lg border border-gray-200 overflow-hidden relative shadow-sm">
                    <div className="field field--name-field-cta-card-image field--type-entity-reference field--label-hidden field__item">
                      <article className="media media--type-image media--view-mode-cta-card-image">
                        <div className="field field--name-field-media-image field--type-image field--label-visually_hidden">
                          <div className="field__item relative">
                            <img 
                              loading="lazy" 
                              width="464" 
                              height="500" 
                              src="nossos.jpg" 
                              alt="Valores"
                              className="w-full h-28 object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            {/* Título 3D sobre a imagem */}
                            <div className="absolute inset-0 flex items-center justify-center">
                              <h3 className="text-white font-bold text-2xl md:text-3xl lg:text-4xl text-center drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] transform-gpu" style={{
                                textShadow: '2px 2px 4px rgba(0,0,0,0.8), -1px -1px 2px rgba(255,255,255,0.3)',
                                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.6))'
                              }}>
                                Valores
                              </h3>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                  <div className="cta-card-item-content mx-1 mb-1 bg-white flex flex-col grow gap-4 justify-between">
                    <div className="content-top flex flex-col grow gap-3 px-4 lg:px-6 pt-4 lg:pt-6 lg:pb-6 bg-white lg:transition-transform lg:duration-300 lg:group-hover:-translate-y-6">
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {intl.formatMessage({id: "index_values_desc"})}
                      </p>
                    </div>
                    <div className="content-bottom px-4 lg:px-6 pb-4 lg:pb-6 text-blue-600 font-medium text-sm leading-140 lg:absolute lg:bottom-0">
                      <div className="lg:transition-transform lg:duration-300 lg:group-hover:translate-y-0 lg:translate-y-full lg:opacity-0 lg:group-hover:opacity-100 after:content-icon-cta-secondary after:block after:leading-none after:w-4 after:h-4 flex flex-row items-center gap-2 focus-visible:outline-none focus-visible:text-primary-innovative-pink hover:text-blue-700 transition-colors duration-200">
                        Ver mais
                      </div>
                    </div>
                  </div>
                </a>

                  {/* Visão */}
                <a href="/sobre/visao" className="relative snap-center group flex flex-col grow bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 lg:hover:duration-300 lg:translate-y-0 lg:hover:-translate-y-4 h-64 w-full md:w-4/12 px-4 text-left border border-gray-100">
                  <div className="cta-card-item-media mx-1 mt-1 rounded-lg border border-gray-200 overflow-hidden relative shadow-sm">
                    <div className="field field--name-field-cta-card-image field--type-entity-reference field--label-hidden field__item">
                      <article className="media media--type-image media--view-mode-cta-card-image">
                        <div className="field field--name-field-media-image field--type-image field--label-visually_hidden">
                          <div className="field__item relative">
                            <img 
                              loading="lazy" 
                              width="464" 
                              height="500" 
                              src="nossos.jpg" 
                              alt="Visão"
                              className="w-full h-28 object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            {/* Título 3D sobre a imagem */}
                            <div className="absolute inset-0 flex items-center justify-center">
                              <h3 className="text-white font-bold text-2xl md:text-3xl lg:text-4xl text-center drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] transform-gpu" style={{
                                textShadow: '2px 2px 4px rgba(0,0,0,0.8), -1px -1px 2px rgba(255,255,255,0.3)',
                                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.6))'
                              }}>
                                Visão
                              </h3>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                  <div className="cta-card-item-content mx-1 mb-1 bg-white flex flex-col grow gap-4 justify-between">
                    <div className="content-top flex flex-col grow gap-3 px-4 lg:px-6 pt-4 lg:pt-6 lg:pb-6 bg-white lg:transition-transform lg:duration-300 lg:group-hover:-translate-y-6">
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {intl.formatMessage({id: "index_vision_desc"})}
                      </p>
                    </div>
                    <div className="content-bottom px-4 lg:px-6 pb-4 lg:pb-6 text-blue-600 font-medium text-sm leading-140 lg:absolute lg:bottom-0">
                      <div className="lg:transition-transform lg:duration-300 lg:group-hover:translate-y-0 lg:translate-y-full lg:opacity-0 lg:group-hover:opacity-100 after:content-icon-cta-secondary after:block after:leading-none after:w-4 after:h-4 flex flex-row items-center gap-2 focus-visible:outline-none focus-visible:text-primary-innovative-pink hover:text-blue-700 transition-colors duration-200">
                        Ver mais
                      </div>
                    </div>
                  </div>
                </a>

                  {/* Sucesso */}
                <a href="/sobre/sucesso" className="relative snap-center group flex flex-col grow bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 lg:hover:duration-300 lg:translate-y-0 lg:hover:-translate-y-4 h-64 w-full md:w-4/12 px-4 text-left border border-gray-100">
                  <div className="cta-card-item-media mx-1 mt-1 rounded-lg border border-gray-200 overflow-hidden relative shadow-sm">
                    <div className="field field--name-field-cta-card-image field--type-entity-reference field--label-hidden field__item">
                      <article className="media media--type-image media--view-mode-cta-card-image">
                        <div className="field field--name-field-media-image field--type-image field--label-visually_hidden">
                          <div className="field__item relative">
                            <img 
                              loading="lazy" 
                              width="464" 
                              height="500" 
                              src="nossos.jpg" 
                              alt="Sucesso"
                              className="w-full h-28 object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            {/* Título 3D sobre a imagem */}
                            <div className="absolute inset-0 flex items-center justify-center">
                              <h3 className="text-white font-bold text-2xl md:text-3xl lg:text-4xl text-center drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] transform-gpu" style={{
                                textShadow: '2px 2px 4px rgba(0,0,0,0.8), -1px -1px 2px rgba(255,255,255,0.3)',
                                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.6))'
                              }}>
                                Sucesso
                              </h3>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                  <div className="cta-card-item-content mx-1 mb-1 bg-white flex flex-col grow gap-4 justify-between">
                    <div className="content-top flex flex-col grow gap-3 px-4 lg:px-6 pt-4 lg:pt-6 lg:pb-6 bg-white lg:transition-transform lg:duration-300 lg:group-hover:-translate-y-6">
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {intl.formatMessage({id: "index_success_desc"})}
                      </p>
                    </div>
                    <div className="content-bottom px-4 lg:px-6 pb-4 lg:pb-6 text-blue-600 font-medium text-sm leading-140 lg:absolute lg:bottom-0">
                      <div className="lg:transition-transform lg:duration-300 lg:group-hover:translate-y-0 lg:translate-y-full lg:opacity-0 lg:group-hover:opacity-100 after:content-icon-cta-secondary after:block after:leading-none after:w-4 after:h-4 flex flex-row items-center gap-2 focus-visible:outline-none focus-visible:text-primary-innovative-pink hover:text-blue-700 transition-colors duration-200">
                        Ver mais
                      </div>
                    </div>
                  </div>
                </a>

                  {/* Organização */}
                <a href="/sobre/organizacao" className="relative snap-center group flex flex-col grow bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 lg:hover:duration-300 lg:translate-y-0 lg:hover:-translate-y-4 h-64 w-full md:w-4/12 px-4 text-left border border-gray-100">
                  <div className="cta-card-item-media mx-1 mt-1 rounded-lg border border-gray-200 overflow-hidden relative shadow-sm">
                    <div className="field field--name-field-cta-card-image field--type-entity-reference field--label-hidden field__item">
                      <article className="media media--type-image media--view-mode-cta-card-image">
                        <div className="field field--name-field-media-image field--type-image field--label-visually_hidden">
                          <div className="field__item relative">
                            <img 
                              loading="lazy" 
                              width="464" 
                              height="500" 
                              src="nossos.jpg" 
                              alt="Organização"
                              className="w-full h-28 object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            {/* Título 3D sobre a imagem */}
                            <div className="absolute inset-0 flex items-center justify-center">
                              <h3 className="text-white font-bold text-2xl md:text-3xl lg:text-4xl text-center drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] transform-gpu" style={{
                                textShadow: '2px 2px 4px rgba(0,0,0,0.8), -1px -1px 2px rgba(255,255,255,0.3)',
                                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.6))'
                              }}>
                                Organização
                              </h3>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                  <div className="cta-card-item-content mx-1 mb-1 bg-white flex flex-col grow gap-4 justify-between">
                    <div className="content-top flex flex-col grow gap-3 px-4 lg:px-6 pt-4 lg:pt-6 lg:pb-6 bg-white lg:transition-transform lg:duration-300 lg:group-hover:-translate-y-6">
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {intl.formatMessage({id: "index_organization_desc"})}
                      </p>
                    </div>
                    <div className="content-bottom px-4 lg:px-6 pb-4 lg:pb-6 text-blue-600 font-medium text-sm leading-140 lg:absolute lg:bottom-0">
                      <div className="lg:transition-transform lg:duration-300 lg:group-hover:translate-y-0 lg:translate-y-full lg:opacity-0 lg:group-hover:opacity-100 after:content-icon-cta-secondary after:block after:leading-none after:w-4 after:h-4 flex flex-row items-center gap-2 focus-visible:outline-none focus-visible:text-primary-innovative-pink hover:text-blue-700 transition-colors duration-200">
                        Ver mais
                      </div>
                    </div>
                  </div>
                </a>

                  {/* Competências */}
                <a href="/sobre/competencias" className="relative snap-center group flex flex-col grow bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 lg:hover:duration-300 lg:translate-y-0 lg:hover:-translate-y-4 h-64 w-full md:w-4/12 px-4 text-left border border-gray-100">
                  <div className="cta-card-item-media mx-1 mt-1 rounded-lg border border-gray-200 overflow-hidden relative shadow-sm">
                    <div className="field field--name-field-cta-card-image field--type-entity-reference field--label-hidden field__item">
                      <article className="media media--type-image media--view-mode-cta-card-image">
                        <div className="field field--name-field-media-image field--type-image field--label-visually_hidden">
                          <div className="field__item relative">
                            <img 
                              loading="lazy" 
                              width="464" 
                              height="500" 
                              src="nossos.jpg" 
                              alt="Competências"
                              className="w-full h-28 object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            {/* Título 3D sobre a imagem */}
                            <div className="absolute inset-0 flex items-center justify-center">
                              <h3 className="text-white font-bold text-2xl md:text-3xl lg:text-4xl text-center drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] transform-gpu" style={{
                                textShadow: '2px 2px 4px rgba(0,0,0,0.8), -1px -1px 2px rgba(255,255,255,0.3)',
                                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.6))'
                              }}>
                                Competências
                              </h3>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                  <div className="cta-card-item-content mx-1 mb-1 bg-white flex flex-col grow gap-4 justify-between">
                    <div className="content-top flex flex-col grow gap-3 px-4 lg:px-6 pt-4 lg:pt-6 lg:pb-6 bg-white lg:transition-transform lg:duration-300 lg:group-hover:-translate-y-6">
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {intl.formatMessage({id: "index_skills_desc"})}
                      </p>
                    </div>
                    <div className="content-bottom px-4 lg:px-6 pb-4 lg:pb-6 text-blue-600 font-medium text-sm leading-140 lg:absolute lg:bottom-0">
                      <div className="lg:transition-transform lg:duration-300 lg:group-hover:translate-y-0 lg:translate-y-full lg:opacity-0 lg:group-hover:opacity-100 after:content-icon-cta-secondary after:block after:leading-none after:w-4 after:h-4 flex flex-row items-center gap-2 focus-visible:outline-none focus-visible:text-primary-innovative-pink hover:text-blue-700 transition-colors duration-200">
                        Ver mais
                      </div>
                    </div>
                  </div>
                </a>

                  {/* Desenvolvimento */}
                <a href="/sobre/desenvolvimento" className="relative snap-center group flex flex-col grow bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 lg:hover:duration-300 lg:translate-y-0 lg:hover:-translate-y-4 h-64 w-full md:w-4/12 px-4 text-left border border-gray-100">
                  <div className="cta-card-item-media mx-1 mt-1 rounded-lg border border-gray-200 overflow-hidden relative shadow-sm">
                    <div className="field field--name-field-cta-card-image field--type-entity-reference field--label-hidden field__item">
                      <article className="media media--type-image media--view-mode-cta-card-image">
                        <div className="field field--name-field-media-image field--type-image field--label-visually_hidden">
                          <div className="field__item relative">
                            <img 
                              loading="lazy" 
                              width="464" 
                              height="500" 
                              src="nossos.jpg" 
                              alt="Desenvolvimento"
                              className="w-full h-28 object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            {/* Título 3D sobre a imagem */}
                            <div className="absolute inset-0 flex items-center justify-center">
                              <h3 className="text-white font-bold text-2xl md:text-3xl lg:text-4xl text-center drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] transform-gpu" style={{
                                textShadow: '2px 2px 4px rgba(0,0,0,0.8), -1px -1px 2px rgba(255,255,255,0.3)',
                                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.6))'
                              }}>
                                Desenvolvimento
                              </h3>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                  <div className="cta-card-item-content mx-1 mb-1 bg-white flex flex-col grow gap-4 justify-between">
                    <div className="content-top flex flex-col grow gap-3 px-4 lg:px-6 pt-4 lg:pt-6 lg:pb-6 bg-white lg:transition-transform lg:duration-300 lg:group-hover:-translate-y-6">
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {intl.formatMessage({id: "index_development_desc"})}
                      </p>
                    </div>
                    <div className="content-bottom px-4 lg:px-6 pb-4 lg:pb-6 text-blue-600 font-medium text-sm leading-140 lg:absolute lg:bottom-0">
                      <div className="lg:transition-transform lg:duration-300 lg:group-hover:translate-y-0 lg:translate-y-full lg:opacity-0 lg:group-hover:opacity-100 after:content-icon-cta-secondary after:block after:leading-none after:w-4 after:h-4 flex flex-row items-center gap-2 focus-visible:outline-none focus-visible:text-primary-innovative-pink hover:text-blue-700 transition-colors duration-200">
                        Ver mais
                      </div>
                    </div>
                  </div>
                </a>

                  {/* Confiança */}
                <a href="/sobre/confianca" className="relative snap-center group flex flex-col grow bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 lg:hover:duration-300 lg:translate-y-0 lg:hover:-translate-y-4 h-64 w-full md:w-4/12 px-4 text-left border border-gray-100">
                  <div className="cta-card-item-media mx-1 mt-1 rounded-lg border border-gray-200 overflow-hidden relative shadow-sm">
                    <div className="field field--name-field-cta-card-image field--type-entity-reference field--label-hidden field__item">
                      <article className="media media--type-image media--view-mode-cta-card-image">
                        <div className="field field--name-field-media-image field--type-image field--label-visually_hidden">
                          <div className="field__item relative">
                            <img 
                              loading="lazy" 
                              width="464" 
                              height="500" 
                              src="nossos.jpg" 
                              alt="Confiança"
                              className="w-full h-28 object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            {/* Título 3D sobre a imagem */}
                            <div className="absolute inset-0 flex items-center justify-center">
                              <h3 className="text-white font-bold text-2xl md:text-3xl lg:text-4xl text-center drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] transform-gpu" style={{
                                textShadow: '2px 2px 4px rgba(0,0,0,0.8), -1px -1px 2px rgba(255,255,255,0.3)',
                                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.6))'
                              }}>
                                Confiança
                              </h3>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                  <div className="cta-card-item-content mx-1 mb-1 bg-white flex flex-col grow gap-4 justify-between">
                    <div className="content-top flex flex-col grow gap-3 px-4 lg:px-6 pt-4 lg:pt-6 lg:pb-6 bg-white lg:transition-transform lg:duration-300 lg:group-hover:-translate-y-6">
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {intl.formatMessage({id: "index_trust_desc"})}
                      </p>
                    </div>
                    <div className="content-bottom px-4 lg:px-6 pb-4 lg:pb-6 text-blue-600 font-medium text-sm leading-140 lg:absolute lg:bottom-0">
                      <div className="lg:transition-transform lg:duration-300 lg:group-hover:translate-y-0 lg:translate-y-full lg:opacity-0 lg:group-hover:opacity-100 after:content-icon-cta-secondary after:block after:leading-none after:w-4 after:h-4 flex flex-row items-center gap-2 focus-visible:outline-none focus-visible:text-primary-innovative-pink hover:text-blue-700 transition-colors duration-200">
                        Ver mais
                      </div>
                    </div>
                  </div>
                </a>

                  {/* Preço Competitivo */}
                <a href="/sobre/preco-competitivo" className="relative snap-center group flex flex-col grow bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 lg:hover:duration-300 lg:translate-y-0 lg:hover:-translate-y-4 h-64 w-full md:w-4/12 px-4 text-left border border-gray-100">
                  <div className="cta-card-item-media mx-1 mt-1 rounded-lg border border-gray-200 overflow-hidden relative shadow-sm">
                    <div className="field field--name-field-cta-card-image field--type-entity-reference field--label-hidden field__item">
                      <article className="media media--type-image media--view-mode-cta-card-image">
                        <div className="field field--name-field-media-image field--type-image field--label-visually_hidden">
                          <div className="field__item relative">
                            <img 
                              loading="lazy" 
                              width="464" 
                              height="500" 
                              src="nossos.jpg" 
                              alt="Preço Competitivo"
                              className="w-full h-28 object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            {/* Título 3D sobre a imagem */}
                            <div className="absolute inset-0 flex items-center justify-center">
                              <h3 className="text-white font-bold text-2xl md:text-3xl lg:text-4xl text-center drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] transform-gpu" style={{
                                textShadow: '2px 2px 4px rgba(0,0,0,0.8), -1px -1px 2px rgba(255,255,255,0.3)',
                                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.6))'
                              }}>
                                Preço Competitivo
                              </h3>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                  <div className="cta-card-item-content mx-1 mb-1 bg-white flex flex-col grow gap-4 justify-between">
                    <div className="content-top flex flex-col grow gap-3 px-4 lg:px-6 pt-4 lg:pt-6 lg:pb-6 bg-white lg:transition-transform lg:duration-300 lg:group-hover:-translate-y-6">
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {intl.formatMessage({id: "index_competitive_price_desc"})}
                      </p>
                    </div>
                    <div className="content-bottom px-4 lg:px-6 pb-4 lg:pb-6 text-blue-600 font-medium text-sm leading-140 lg:absolute lg:bottom-0">
                      <div className="lg:transition-transform lg:duration-300 lg:group-hover:translate-y-0 lg:translate-y-full lg:opacity-0 lg:group-hover:opacity-100 after:content-icon-cta-secondary after:block after:leading-none after:w-4 after:h-4 flex flex-row items-center gap-2 focus-visible:outline-none focus-visible:text-primary-innovative-pink hover:text-blue-700 transition-colors duration-200">
                        Ver mais
                      </div>
                    </div>
                  </div>
                </a>
                      </div>
                    </div>
                  </div>
        </section>
      </section>
    </>
  );
}

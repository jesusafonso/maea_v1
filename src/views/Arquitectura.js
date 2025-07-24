import React from "react";
import contactosFundo from "../assets/img/construçãocivil_2020.jpg";
import { useIntl } from "react-intl";

export default function Arquitectura() {
  const intl = useIntl();
  // DEBUG: Mostrar idioma ativo e traduções dos cards
  // console.log('LANG:', intl.locale);
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
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div className="pr-12">
                <h1 className="text-white font-semibold text-5xl">{intl.formatMessage({id: "arch_title"})}</h1>
                <p className="mt-4 text-lg text-gray-300">{intl.formatMessage({id: "arch_subtitle"})}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16" style={{ transform: "translateZ(0)" }}>
          <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
            <polygon className="text-gray-300 fill-current" points="2560 0 2560 100 0 100"></polygon>
          </svg>
        </div>
      </div>

      <section className="pb-20 bg-gray-300 -mt-24 mt-[20px]">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center">
            {/* Card: Projetos Residenciais */}
            <div className="w-full md:w-5/12 lg:w-4/12 px-4 mb-12">
              <div className="relative flex flex-col min-w-0 break-words bg-gray-800 w-full shadow-lg rounded-lg">
                <img alt={intl.formatMessage({id: "arch_card1_img_alt"})}
                  src={require("../assets/img/Projetos-Estruturais.jpg")}
                  className="w-full align-middle rounded-t-lg" style={{ height: '220px', objectFit: 'cover' }} />
                <blockquote className="relative p-8 mb-4">
                  <h4 className="text-xl font-bold text-white">{intl.formatMessage({id: "arch_card1_title"})}</h4>
                  <p className="text-md font-light mt-2 text-white">{intl.formatMessage({id: "arch_card1_desc"})}</p>
                </blockquote>
              </div>
            </div>
            {/* Card: Design de Interiores */}
            <div className="w-full md:w-5/12 lg:w-4/12 px-4 mb-12">
              <div className="relative flex flex-col min-w-0 break-words bg-gray-800 w-full shadow-lg rounded-lg">
                <img alt={intl.formatMessage({id: "arch_card2_img_alt"})}
                  src={require("../assets/img/Design_de_Interiores.jpeg")}
                  className="w-full align-middle rounded-t-lg" style={{ height: '220px', objectFit: 'cover' }} />
                <blockquote className="relative p-8 mb-4">
                  <h4 className="text-xl font-bold text-white">{intl.formatMessage({id: "arch_card2_title"})}</h4>
                  <p className="text-md font-light mt-2 text-white">{intl.formatMessage({id: "arch_card2_desc"})}</p>
                </blockquote>
              </div>
            </div>
            {/* Card: Planejamento Urbano */}
            <div className="w-full md:w-5/12 lg:w-4/12 px-4 mb-12">
              <div className="relative flex flex-col min-w-0 break-words bg-gray-800 w-full shadow-lg rounded-lg">
                <img alt={intl.formatMessage({id: "arch_card3_img_alt"})}
                  src={require("../assets/img/Infraestrutura-Urbana.jpg")}
                  className="w-full align-middle rounded-t-lg" style={{ height: '220px', objectFit: 'cover' }} />
                <blockquote className="relative p-8 mb-4">
                  <h4 className="text-xl font-bold text-white">{intl.formatMessage({id: "arch_card3_title"})}</h4>
                  <p className="text-md font-light mt-2 text-white">{intl.formatMessage({id: "arch_card3_desc"})}</p>
                </blockquote>
              </div>
            </div>
            {/* Card: Consultoria Técnica */}
            <div className="w-full md:w-5/12 lg:w-4/12 px-4 mb-12">
              <div className="relative flex flex-col min-w-0 break-words bg-gray-800 w-full shadow-lg rounded-lg">
                <img alt={intl.formatMessage({id: "arch_card4_img_alt"})}
                  src={require("../assets/img/Consultoria-Tecnica.jpg")}
                  className="w-full align-middle rounded-t-lg" style={{ height: '220px', objectFit: 'cover' }} />
                <blockquote className="relative p-8 mb-4">
                  <h4 className="text-xl font-bold text-white">{intl.formatMessage({id: "arch_card4_title"})}</h4>
                  <p className="text-md font-light mt-2 text-white">{intl.formatMessage({id: "arch_card4_desc"})}</p>
                </blockquote>
              </div>
            </div>
            {/* Card: Regularização e Licenciamento */}
            <div className="w-full md:w-5/12 lg:w-4/12 px-4 mb-12">
              <div className="relative flex flex-col min-w-0 break-words bg-gray-800 w-full shadow-lg rounded-lg">
                <img alt={intl.formatMessage({id: "arch_card5_img_alt"})}
                  src={require("../assets/img/Regularizacao-Licenciamento.jpg")}
                  className="w-full align-middle rounded-t-lg" style={{ height: '220px', objectFit: 'cover' }} />
                <blockquote className="relative p-8 mb-4">
                  <h4 className="text-xl font-bold text-white">{intl.formatMessage({id: "arch_card5_title"})}</h4>
                  <p className="text-md font-light mt-2 text-white">{intl.formatMessage({id: "arch_card5_desc"})}</p>
                </blockquote>
              </div>
            </div>
            {/* Card: Paisagismo e Espaços Externos */}
            <div className="w-full md:w-5/12 lg:w-4/12 px-4 mb-12">
              <div className="relative flex flex-col min-w-0 break-words bg-gray-800 w-full shadow-lg rounded-lg">
                <img alt={intl.formatMessage({id: "arch_card6_img_alt"})}
                  src={require("../assets/img/Paisagismo-Espacos-Externos.jpg")}
                  className="w-full align-middle rounded-t-lg" style={{ height: '220px', objectFit: 'cover' }} />
                <blockquote className="relative p-8 mb-4">
                  <h4 className="text-xl font-bold text-white">{intl.formatMessage({id: "arch_card6_title"})}</h4>
                  <p className="text-md font-light mt-2 text-white">{intl.formatMessage({id: "arch_card6_desc"})}</p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full px-4">
              <h3 className="text-3xl font-semibold mb-6 text-blueGray-800" style={{ marginTop: '3rem' }}>
                {intl.formatMessage({id: "arch_services_title"})}
              </h3>
              <p className="text-lg leading-relaxed mb-4 text-blueGray-600">
                {intl.formatMessage({id: "arch_services_desc"})}
              </p>
              <ul className="list-disc list-inside text-blueGray-600 text-base mb-4">
                <li><b>{intl.formatMessage({id: "arch_list1_title"})}</b> {intl.formatMessage({id: "arch_list1_desc"})}</li>
                <li><b>{intl.formatMessage({id: "arch_list2_title"})}</b> {intl.formatMessage({id: "arch_list2_desc"})}</li>
                <li><b>{intl.formatMessage({id: "arch_list3_title"})}</b> {intl.formatMessage({id: "arch_list3_desc"})}</li>
                <li><b>{intl.formatMessage({id: "arch_list4_title"})}</b> {intl.formatMessage({id: "arch_list4_desc"})}</li>
                <li><b>{intl.formatMessage({id: "arch_list5_title"})}</b> {intl.formatMessage({id: "arch_list5_desc"})}</li>
                <li><b>{intl.formatMessage({id: "arch_list6_title"})}</b> {intl.formatMessage({id: "arch_list6_desc"})}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 
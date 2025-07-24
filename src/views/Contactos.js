import React from "react";
import contactosFundo from "assets/img/contactos_fundos.jpg";
import { useIntl } from "react-intl";

export default function Contactos() {
  const intl = useIntl();
  return (
    <>
      <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage: `url(${contactosFundo})`,
          }}
        >
          <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
        </div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div className="pr-12">
                <h1 className="text-white font-semibold text-5xl">
                  {intl.formatMessage({id: "contactos_title"})}
                </h1>
                <p className="mt-4 text-lg text-gray-300">
                  {intl.formatMessage({id: "contactos_subtitle"})}
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

      <section className="pb-20 bg-gray-300 -mt-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <h6 className="text-xl font-semibold">{intl.formatMessage({id: "contactos_address_title"})}</h6>
                  <p className="mt-2 mb-4 text-gray-600 font-medium">
                    {intl.formatMessage({id: "contactos_address"})}
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-[steelblue]">
                    <i className="fas fa-phone"></i>
                  </div>
                  <h6 className="text-xl font-semibold">{intl.formatMessage({id: "contactos_phone_title"})}</h6>
                  <p className="mt-2 mb-4 text-gray-600 font-medium">
                    {intl.formatMessage({id: "contactos_phone"})}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <h6 className="text-xl font-semibold">{intl.formatMessage({id: "contactos_email_title"})}</h6>
                  <p className="mt-2 mb-4 text-gray-600 font-medium">
                    <a href="mailto:comercial@maea.ao" className="hover:underline text-blue-700">{intl.formatMessage({id: "contactos_email"})}</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center text-center mb-24">
            {/* Espaço para outros conteúdos */}
          </div>

          <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-2xl rounded-2xl bg-white border border-blue-100">
                <form className="flex-auto p-8 lg:p-12">
                  <h4 className="text-3xl font-bold text-blueGray-800 mb-2 text-center">{intl.formatMessage({id: "contactos_form_title"})}</h4>
                  <p className="leading-relaxed mb-6 text-blueGray-500 text-center">{intl.formatMessage({id: "contactos_form_subtitle"})}</p>
                  <div className="relative w-full mb-6">
                    <label className="block uppercase text-blueGray-700 text-xs font-bold mb-2" htmlFor="nome">{intl.formatMessage({id: "contactos_form_name_label"})}</label>
                    <div className="flex items-center bg-blueGray-50 rounded-lg shadow-sm border border-blue-100 focus-within:ring-2 focus-within:ring-blue-400">
                      <span className="pl-3 text-blueGray-400"><i className="fas fa-user"></i></span>
                      <input type="text" id="nome" className="border-0 px-3 py-4 bg-transparent text-blueGray-700 rounded-lg text-base w-full focus:outline-none" placeholder={intl.formatMessage({id: "contactos_form_name_placeholder"})}
                        required />
                    </div>
                  </div>
                  <div className="relative w-full mb-6">
                    <label className="block uppercase text-blueGray-700 text-xs font-bold mb-2" htmlFor="email">{intl.formatMessage({id: "contactos_form_email_label"})}</label>
                    <div className="flex items-center bg-blueGray-50 rounded-lg shadow-sm border border-blue-100 focus-within:ring-2 focus-within:ring-blue-400">
                      <span className="pl-3 text-blueGray-400"><i className="fas fa-envelope"></i></span>
                      <input type="email" id="email" className="border-0 px-3 py-4 bg-transparent text-blueGray-700 rounded-lg text-base w-full focus:outline-none" placeholder={intl.formatMessage({id: "contactos_form_email_placeholder"})}
                        required />
                    </div>
                  </div>
                  <div className="relative w-full mb-6">
                    <label className="block uppercase text-blueGray-700 text-xs font-bold mb-2" htmlFor="mensagem">{intl.formatMessage({id: "contactos_form_message_label"})}</label>
                    <div className="flex items-start bg-blueGray-50 rounded-lg shadow-sm border border-blue-100 focus-within:ring-2 focus-within:ring-blue-400">
                      <span className="pl-3 pt-4 text-blueGray-400"><i className="fas fa-comment-dots"></i></span>
                      <textarea id="mensagem" rows="5" className="border-0 px-3 py-4 bg-transparent text-blueGray-700 rounded-lg text-base w-full focus:outline-none resize-none" placeholder={intl.formatMessage({id: "contactos_form_message_placeholder"})}
                        required></textarea>
                    </div>
                  </div>
                  <div className="text-center mt-8">
                    <button className="bg-gradient-to-r from-blue-600 to-blue-400 text-white font-bold uppercase px-8 py-4 rounded-lg shadow-lg hover:from-blue-700 hover:to-blue-500 transition-all duration-200 text-lg w-full" type="submit">
                      {intl.formatMessage({id: "contactos_form_button"})}
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="w-full lg:w-6/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-2xl rounded-2xl border border-blue-100">
                <div className="flex-auto p-8 lg:p-10">
                  <h4 className="text-2xl font-bold text-blueGray-800 flex items-center justify-center mb-4">
                    <span className="mr-2"><i className="fas fa-clock text-blue-500"></i></span>
                    {intl.formatMessage({id: "contactos_hours_title"})}
                  </h4>
                  <p className="leading-relaxed mb-6 text-blueGray-500 text-center">
                    {intl.formatMessage({id: "contactos_hours_subtitle"})}
                  </p>
                  <div className="divide-y divide-blue-100 rounded-lg overflow-hidden bg-blueGray-50 border border-blue-50 mb-6">
                    <div className="flex justify-between px-6 py-4">
                      <span className="font-semibold text-blueGray-700">{intl.formatMessage({id: "contactos_hours_weekdays"})}</span>
                      <span className="font-bold text-blue-600">08:00 - 16:00</span>
                    </div>
                    <div className="flex justify-between px-6 py-4">
                      <span className="font-semibold text-blueGray-700">{intl.formatMessage({id: "contactos_hours_saturday"})}</span>
                      <span className="font-bold text-blue-500">09:00 - 12:00</span>
                    </div>
                    <div className="flex justify-between px-6 py-4">
                      <span className="font-semibold text-blueGray-700">{intl.formatMessage({id: "contactos_hours_sunday"})}</span>
                      <span className="font-bold text-[steelblue]">{intl.formatMessage({id: "contactos_hours_closed"})}</span>
                    </div>
                  </div>
                  <h4 className="text-2xl font-semibold mt-8">
                    {intl.formatMessage({id: "contactos_social_title"})}
                  </h4>
                  <div className="flex mt-4">
                    {/* Facebook removido */}
                    <a href="https://www.linkedin.com/company/maea-lda/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-[#5faee3] mr-4">
                      <i className="fab fa-linkedin text-2xl"></i>
                    </a>
                    <a href="#" className="text-pink-400 hover:text-[#5faee3] mr-4">
                      <i className="fab fa-instagram text-2xl"></i>
                    </a>
                    {/* Twitter removido */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 
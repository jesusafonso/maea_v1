import React from "react";
import contactosFundo from "assets/img/contactos_fundos.jpg";
import { useIntl } from "react-intl";

export default function JunteSe() {
  const intl = useIntl();
  return (
    <>
      {/* Hero Section */}
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
            <div className="w-full lg:w-8/12 px-4 ml-auto mr-auto text-center">
              <div className="pr-12">
                <h1 className="text-white font-semibold text-5xl mb-4">
                  {intl.formatMessage({id: "juntese_title"})}
                </h1>
                <p className="mt-4 text-lg text-gray-300">
                  {intl.formatMessage({id: "juntese_subtitle"})}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <section className="pb-20 bg-gray-300 -mt-24 mt-[20px]">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center">
            <div className="w-full lg:w-8/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-2xl rounded-2xl border border-white transition-transform duration-300 hover:shadow-3xl hover:-translate-y-2 hover:scale-105 p-8 animate-fade-in-up" style={{ marginTop: '50px' }}>
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-5 shadow-lg rounded-full bg-gradient-to-br from-blue-400 to-blue-600 text-3xl">
                    <i className="fas fa-users"></i>
                  </div>
                  <h6 className="text-2xl font-extrabold tracking-wide uppercase mb-2 text-blueGray-800 flex flex-col items-center">
                    {intl.formatMessage({id: "juntese_form_title"})}
                    <span className="block w-10 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded mt-1"></span>
                  </h6>
                  <p className="mt-2 mb-6 text-blueGray-600 text-base text-center">
                    {intl.formatMessage({id: "juntese_form_subtitle"})}
                  </p>
                  
                  <form className="flex-auto">
                    <div className="flex flex-col gap-6 w-full">
                      <div className="relative w-full">
                        <label className="block uppercase text-blueGray-700 text-xs font-bold mb-2" htmlFor="nome">
                          {intl.formatMessage({id: "juntese_form_name_label"})} <span className="text-[steelblue]">*</span>
                        </label>
                        <div className="flex items-center bg-blueGray-50 rounded-lg shadow-sm border border-white focus-within:ring-2 focus-within:ring-blue-400 transition-all duration-200">
                          <span className="pl-3 text-blueGray-400"><i className="fas fa-user"></i></span>
                          <input type="text" id="nome" className="border-0 px-3 py-4 bg-transparent text-blueGray-700 rounded-lg text-base w-full focus:outline-none" placeholder={intl.formatMessage({id: "juntese_form_name_placeholder"})}
                            required />
                        </div>
                      </div>
                      <div className="relative w-full">
                        <label className="block uppercase text-blueGray-700 text-xs font-bold mb-2" htmlFor="email">
                          {intl.formatMessage({id: "juntese_form_email_label"})} <span className="text-[steelblue]">*</span>
                        </label>
                        <div className="flex items-center bg-blueGray-50 rounded-lg shadow-sm border border-white focus-within:ring-2 focus-within:ring-blue-400 transition-all duration-200">
                          <span className="pl-3 text-blueGray-400"><i className="fas fa-envelope"></i></span>
                          <input type="email" id="email" className="border-0 px-3 py-4 bg-transparent text-blueGray-700 rounded-lg text-base w-full focus:outline-none" placeholder={intl.formatMessage({id: "juntese_form_email_placeholder"})}
                            required />
                        </div>
                      </div>
                      <div className="relative w-full">
                        <label className="block uppercase text-blueGray-700 text-xs font-bold mb-2" htmlFor="telefone">
                          {intl.formatMessage({id: "juntese_form_phone_label"})}
                        </label>
                        <div className="flex items-center bg-blueGray-50 rounded-lg shadow-sm border border-white focus-within:ring-2 focus-within:ring-blue-400 transition-all duration-200">
                          <span className="pl-3 text-blueGray-400"><i className="fas fa-phone"></i></span>
                          <input type="tel" id="telefone" className="border-0 px-3 py-4 bg-transparent text-blueGray-700 rounded-lg text-base w-full focus:outline-none" placeholder={intl.formatMessage({id: "juntese_form_phone_placeholder"})} />
                        </div>
                      </div>
                      <div className="relative w-full">
                        <label className="block uppercase text-blueGray-700 text-xs font-bold mb-2" htmlFor="area">
                          {intl.formatMessage({id: "juntese_form_area_label"})} <span className="text-[steelblue]">*</span>
                        </label>
                        <div className="flex items-center bg-blueGray-50 rounded-lg shadow-sm border border-white focus-within:ring-2 focus-within:ring-blue-400 transition-all duration-200">
                          <span className="pl-3 text-blueGray-400"><i className="fas fa-briefcase"></i></span>
                          <select id="area" className="border-0 px-3 py-4 bg-transparent text-blueGray-700 rounded-lg text-base w-full focus:outline-none" required defaultValue="">
                            <option value="" disabled>{intl.formatMessage({id: "juntese_form_area_placeholder"})}</option>
                            <option>{intl.formatMessage({id: "juntese_form_area_engineering"})}</option>
                            <option>{intl.formatMessage({id: "juntese_form_area_logistics"})}</option>
                            <option>{intl.formatMessage({id: "juntese_form_area_admin"})}</option>
                            <option>{intl.formatMessage({id: "juntese_form_area_ops"})}</option>
                            <option>{intl.formatMessage({id: "juntese_form_area_sales"})}</option>
                            <option>{intl.formatMessage({id: "juntese_form_area_other"})}</option>
                          </select>
                        </div>
                      </div>
                      <div className="relative w-full">
                        <label className="block uppercase text-blueGray-700 text-xs font-bold mb-2" htmlFor="mensagem">
                          {intl.formatMessage({id: "juntese_form_message_label"})}
                        </label>
                        <div className="flex items-start bg-blueGray-50 rounded-lg shadow-sm border border-white focus-within:ring-2 focus-within:ring-blue-400 transition-all duration-200">
                          <span className="pl-3 pt-4 text-blueGray-400"><i className="fas fa-comment-dots"></i></span>
                          <textarea id="mensagem" rows="4" className="border-0 px-3 py-4 bg-transparent text-blueGray-700 rounded-lg text-base w-full focus:outline-none resize-none" placeholder={intl.formatMessage({id: "juntese_form_message_placeholder"})}></textarea>
                        </div>
                      </div>
                      <div className="relative w-full">
                        <label className="block uppercase text-blueGray-700 text-xs font-bold mb-2" htmlFor="anexo">
                          {intl.formatMessage({id: "juntese_form_cv_label"})} <span className="text-[steelblue]">*</span>
                        </label>
                        <div className="flex items-center bg-blueGray-50 rounded-lg shadow-sm border border-white focus-within:ring-2 focus-within:ring-blue-400 transition-all duration-200">
                          <span className="pl-3 text-blueGray-400"><i className="fas fa-paperclip"></i></span>
                          <input type="file" id="anexo" accept=".pdf" className="border-0 px-3 py-4 bg-transparent text-blueGray-700 rounded-lg text-base w-full focus:outline-none file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" required />
                        </div>
                        <p className="text-xs text-blueGray-500 mt-2 flex items-center">
                          <i className="fas fa-info-circle mr-1"></i>
                          {intl.formatMessage({id: "juntese_form_cv_info"})}
                        </p>
                      </div>
                      <div className="relative w-full flex items-start p-4 bg-blueGray-50 rounded-lg border border-white">
                        <input type="checkbox" id="termos" required className="form-checkbox h-5 w-5 text-blue-600 transition duration-150 ease-in-out mr-3 mt-0.5 flex-shrink-0" />
                        <label htmlFor="termos" className="text-blueGray-700 text-sm select-none leading-relaxed">
                          {intl.formatMessage({id: "juntese_form_terms"})}
                        </label>
                      </div>
                      <div className="flex justify-center w-full">
                        <button className="bg-gradient-to-r from-blue-600 to-blue-400 text-white font-bold uppercase px-12 py-4 rounded-lg shadow-lg hover:from-blue-700 hover:to-blue-500 transition-all duration-200 text-lg transform hover:scale-105" type="submit">
                          <i className="fas fa-paper-plane mr-2"></i>
                          {intl.formatMessage({id: "juntese_form_button"})}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 
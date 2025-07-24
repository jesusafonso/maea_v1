import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { IntlProvider } from "react-intl";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/styles/tailwind.css";
import "./assets/styles/index.css";

import ptMessages from "./locales/pt/messages";
import enMessages from "./locales/en/messages";

// layouts

import Admin from "./layouts/Admin.js";
import Auth from "./layouts/Auth.js";

// views without layouts

import Index from "./views/Index.js";
import Sobre from "./views/Sobre.js";
import Contactos from "./views/Contactos.js";
import JunteSe from "./views/JunteSe";
import ConstrucaoCivil from "./views/ConstrucaoCivil";
import Arquitectura from "./views/Arquitectura";
import CertificacaoISO from "./views/CertificacaoISO.js";
import SolucoesConsultoria from "./views/SolucoesConsultoria.js";
import Treinamento from "./views/Treinamento.js";
import BusinessConsultingFormacoes from "./views/BusinessConsultingFormacoes";

import FloatingButton from "./components/WhatsAppButton";
import IndexNavbar from "./components/Navbars/IndexNavbar";
import Footer from "./components/Footers/Footer";

function PublicLayout({ children, locale, setLocale }) {
  return (
    <>
      <IndexNavbar fixed locale={locale} setLocale={setLocale} />
      {children}
      <Footer />
    </>
  );
}

// Main App Component
const App = () => {
  const [locale, setLocale] = useState("pt");
  const messages = {
    pt: ptMessages,
    en: enMessages,
  };

  const [showCotacaoModal, setShowCotacaoModal] = useState(false);
  const [formData, setFormData] = useState({ nome: '', email: '', telefone: '', mensagem: '', servico: '', departamento: '' });
  const servicos = [
    'modal_servico_limpeza_tanques',
    'modal_servico_epi',
    'modal_servico_transporte_residuos',
    'modal_servico_guindaste',
    'modal_servico_transitarios',
    'modal_servico_armazenamento',
    'modal_servico_limpeza_geral',
    'modal_servico_catering',
    'modal_servico_agua',
    'modal_servico_jardinagem',
    'modal_servico_motorista',
    'modal_servico_correspondencia',
    'modal_servico_seguranca',
    'modal_servico_pintura',
    'modal_servico_formacao',
    'modal_servico_hidraulicos',
    'modal_servico_cedencia',
    'modal_servico_procurement',
    'modal_servico_construcao_civil',
    'modal_servico_arquitectura',
    'modal_servico_combate_ravinas',
    'modal_servico_setor_petrolifero'
  ];
  const departamentos = [
    'modal_departamento_comercial',
    'modal_departamento_financeiro',
    'modal_departamento_operacional',
    'modal_departamento_rh',
    'modal_departamento_logistica',
    'modal_departamento_direcao',
    'modal_departamento_outro'
  ];
  function handleCotacaoChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  function handleCotacaoSubmit(e) {
    e.preventDefault();
    const mailto = `mailto:oil.gas@omf.ao?subject=Solicitação de Orçamento&body=Nome: ${encodeURIComponent(formData.nome)}%0AEmail: ${encodeURIComponent(formData.email)}%0ATelefone: ${encodeURIComponent(formData.telefone)}%0AServiço: ${encodeURIComponent(formData.servico)}%0ADepartamento: ${encodeURIComponent(formData.departamento)}%0AMensagem: ${encodeURIComponent(formData.mensagem)}`;
    window.location.href = mailto;
    setFormData({ nome: '', email: '', telefone: '', mensagem: '', servico: '', departamento: '' });
    setShowCotacaoModal(false);
  }

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <BrowserRouter>
        <Switch>
          {/* Admin routes with layout */}
          <Route path="/admin" component={Admin} />
          
          {/* Authentication routes with layout */}
          <Route path="/auth" component={Auth} />
          
          {/* Public pages with PublicLayout */}
          <Route path="/sobre" exact render={() => <PublicLayout locale={locale} setLocale={setLocale}><Sobre /></PublicLayout>} />
          <Route path="/sobre/politica-compliance" exact render={() => <PublicLayout locale={locale} setLocale={setLocale}><Sobre compliance /></PublicLayout>} />
          <Route path="/servicos" exact render={() => <PublicLayout locale={locale} setLocale={setLocale}><SolucoesConsultoria /></PublicLayout>} />
          <Route path="/contactos" exact render={() => <PublicLayout locale={locale} setLocale={setLocale}><Contactos /></PublicLayout>} />
          <Route path="/junte-se" exact render={() => <PublicLayout locale={locale} setLocale={setLocale}><JunteSe /></PublicLayout>} />
          <Route path="/construcao-civil" exact render={() => <PublicLayout locale={locale} setLocale={setLocale}><ConstrucaoCivil /></PublicLayout>} />
          <Route path="/arquitectura" exact render={() => <PublicLayout locale={locale} setLocale={setLocale}><Arquitectura /></PublicLayout>} />
          <Route path="/certificacao-iso" exact render={() => <PublicLayout locale={locale} setLocale={setLocale}><CertificacaoISO /></PublicLayout>} />
          <Route path="/solucoes-consultoria" exact render={() => <PublicLayout locale={locale} setLocale={setLocale}><SolucoesConsultoria /></PublicLayout>} />
          <Route path="/treinamento" exact render={() => <PublicLayout locale={locale} setLocale={setLocale}><Treinamento /></PublicLayout>} />
          <Route path="/business-consulting-formacoes" exact render={() => <PublicLayout locale={locale} setLocale={setLocale}><BusinessConsultingFormacoes /></PublicLayout>} />
          
          {/* Home page */}
          <Route path="/" exact render={() => <PublicLayout locale={locale} setLocale={setLocale}><Index /></PublicLayout>} />
          
          {/* Fallback redirect */}
          <Redirect from="*" to="/" />
        </Switch>
      </BrowserRouter>
      <FloatingButton
        href={`https://wa.me/244994220022?text=Ol%C3%A1!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es.`}
        icon={
          <svg viewBox="0 0 32 32" width="32" height="32" fill="currentColor">
            <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.832 4.584 2.236 6.393L4 29l7.824-2.05C13.41 27.633 14.686 28 16 28c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.18 0-2.334-.207-3.424-.615l-.245-.09-4.646 1.217 1.24-4.527-.16-.234C7.23 18.13 6.5 16.6 6.5 15c0-5.238 4.262-9.5 9.5-9.5s9.5 4.262 9.5 9.5-4.262 9.5-9.5 9.5zm5.07-6.29c-.277-.139-1.637-.807-1.89-.899-.253-.093-.437-.139-.62.139-.184.277-.713.899-.874 1.085-.16.185-.32.208-.597.07-.277-.139-1.17-.431-2.23-1.375-.823-.734-1.379-1.64-1.541-1.917-.16-.277-.017-.427.122-.565.126-.125.277-.32.416-.48.139-.16.185-.277.277-.462.093-.185.046-.347-.023-.485-.07-.139-.62-1.497-.85-2.05-.224-.539-.453-.466-.62-.475l-.527-.009c-.17 0-.446.063-.68.277-.232.215-.88.861-.88 2.099 0 1.238.902 2.434 1.028 2.603.126.17 1.775 2.713 4.3 3.697.602.207 1.07.33 1.436.422.603.153 1.153.132 1.588.08.484-.058 1.637-.668 1.87-1.312.232-.645.232-1.197.162-1.312-.07-.115-.253-.185-.53-.324z" />
          </svg>
        }
        bgColor="bg-green-500 hover:bg-[#5faee3]"
        title="Fale conosco pelo WhatsApp"
        style={{ right: '1.5rem', bottom: '5.7rem' }}
      />
      <FloatingButton
        icon={<i className="fas fa-file-signature text-2xl"></i>}
        bgColor="bg-blue-600 hover:bg-blue-800"
        title="Solicitar Cotação"
        className=""
        style={{ right: '1.5rem', bottom: '1.5rem' }}
        onClick={e => { e.preventDefault(); setShowCotacaoModal(true); }}
      />
      {showCotacaoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-2xl shadow-2xl p-8 relative w-full max-w-lg mx-4 overflow-y-auto custom-scrollbar" style={{ maxHeight: '90vh' }}>
            <div className="sticky top-0 bg-white pb-4 border-b border-white">
              <button className="absolute top-2 right-2 text-blueGray-400 hover:text-[#5faee3] text-2xl font-bold" onClick={() => setShowCotacaoModal(false)}>&times;</button>
              <h2 className="text-2xl font-bold mb-4 text-blueGray-800 text-center">{'modal_title'}</h2>
            </div>
            <form className="flex flex-col gap-6 w-full" onSubmit={handleCotacaoSubmit}>
                  <div className="flex items-center bg-blueGray-50 rounded-lg shadow-sm border border-white focus-within:ring-2 focus-within:ring-blue-400 w-full">
                    <span className="pl-3 text-blueGray-400"><i className="fas fa-user"></i></span>
                    <input type="text" name="nome" value={formData.nome} onChange={handleCotacaoChange} placeholder={'modal_nome'} className="border-0 px-3 py-4 bg-transparent text-blueGray-700 rounded-lg text-base w-full focus:outline-none" style={{ height: '60px', width: '100%' }} required />
                  </div>
                  <div className="flex items-center bg-blueGray-50 rounded-lg shadow-sm border border-white focus-within:ring-2 focus-within:ring-blue-400 w-full">
                    <span className="pl-3 text-blueGray-400"><i className="fas fa-envelope"></i></span>
                    <input type="email" name="email" value={formData.email} onChange={handleCotacaoChange} placeholder={'modal_email'} className="border-0 px-3 py-4 bg-transparent text-blueGray-700 rounded-lg text-base w-full focus:outline-none" style={{ height: '60px', width: '100%' }} required />
                  </div>
                  <div className="flex items-center bg-blueGray-50 rounded-lg shadow-sm border border-white focus-within:ring-2 focus-within:ring-blue-400 w-full">
                    <span className="pl-3 text-blueGray-400"><i className="fas fa-phone"></i></span>
                    <input type="tel" name="telefone" value={formData.telefone} onChange={handleCotacaoChange} placeholder={'modal_telefone'} className="border-0 px-3 py-4 bg-transparent text-blueGray-700 rounded-lg text-base w-full focus:outline-none" style={{ height: '60px', width: '100%' }} />
                  </div>
                  <div className="flex items-center bg-blueGray-50 rounded-lg shadow-sm border border-white focus-within:ring-2 focus-within:ring-blue-400 w-full">
                    <span className="pl-3 text-blueGray-400"><i className="fas fa-briefcase"></i></span>
                    <select name="servico" value={formData.servico} onChange={handleCotacaoChange} required className="border-0 px-3 py-4 bg-transparent text-blueGray-700 rounded-lg text-base w-full focus:outline-none" style={{ height: '60px', width: '100%' }}>
                      <option value="" disabled>{'modal_selecione_servico'}</option>
                      {servicos.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div className="flex items-center bg-blueGray-50 rounded-lg shadow-sm border border-white focus-within:ring-2 focus-within:ring-blue-400 w-full">
                    <span className="pl-3 text-blueGray-400"><i className="fas fa-building"></i></span>
                    <select name="departamento" value={formData.departamento} onChange={handleCotacaoChange} required className="border-0 px-3 py-4 bg-transparent text-blueGray-700 rounded-lg text-base w-full focus:outline-none" style={{ height: '60px', width: '100%' }}>
                      <option value="" disabled>{'modal_selecione_departamento'}</option>
                      {departamentos.map(d => <option key={d} value={d}>{d}</option>)}
                    </select>
                  </div>
                  <div className="flex items-start bg-blueGray-50 rounded-lg shadow-sm border border-white focus-within:ring-2 focus-within:ring-blue-400 w-full">
                    <span className="pl-3 pt-4 text-blueGray-400"><i className="fas fa-comment-dots"></i></span>
                    <textarea name="mensagem" value={formData.mensagem} onChange={handleCotacaoChange} placeholder={'modal_mensagem'} className="border-0 px-3 py-4 bg-transparent text-blueGray-700 rounded-lg text-base w-full focus:outline-none resize-none" rows={4} style={{ width: '100%' }}></textarea>
                  </div>
                  <div className="relative w-full flex items-start p-4 bg-blueGray-50 rounded-lg border border-white">
                    <input type="checkbox" id="termos-modal" required className="form-checkbox h-5 w-5 text-blue-600 transition duration-150 ease-in-out mr-3 mt-0.5 flex-shrink-0" />
                    <label htmlFor="termos-modal" className="text-blueGray-700 text-sm select-none leading-relaxed">
                      {'modal_termos_1'} <a href="/termos" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">{'modal_termos_link'}</a> {'modal_termos_2'}
                    </label>
                  </div>
                  <div className="flex justify-end w-full">
                    <button type="submit" className="bg-gradient-to-r from-blue-600 to-blue-400 text-white font-bold uppercase px-12 py-4 rounded-lg shadow-lg hover:from-blue-700 hover:to-blue-500 transition-all duration-200 text-lg w-full lg:w-auto transform hover:scale-105">
                      <i className="fas fa-paper-plane mr-2"></i>
                      {'modal_enviar'}
                    </button>
                  </div>
                </form>
          </div>
        </div>
      )}
    </IntlProvider>
  );
};

// Render the application
ReactDOM.render(<App />, document.getElementById("root"));

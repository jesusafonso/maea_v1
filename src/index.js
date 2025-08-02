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
import CertificacaoISO from "./views/CertificacaoISO.js";
import SolucoesConsultoria from "./views/SolucoesConsultoria.js";
import Treinamento from "./views/Treinamento.js";
import BusinessConsultingFormacoes from "./views/BusinessConsultingFormacoes";
import Planos from "./views/Planos";

import FloatingButton from "./components/WhatsAppButton";
import IndexNavbar from "./components/Navbars/IndexNavbar";
import Footer from "./components/Footers/Footer";
import ScrollToTop from "./components/ScrollToTop.js";

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
        <ScrollToTop />
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
          <Route path="/certificacao-iso" exact render={() => <PublicLayout locale={locale} setLocale={setLocale}><CertificacaoISO /></PublicLayout>} />
          <Route path="/solucoes-consultoria" exact render={() => <PublicLayout locale={locale} setLocale={setLocale}><SolucoesConsultoria /></PublicLayout>} />
          <Route path="/treinamento" exact render={() => <PublicLayout locale={locale} setLocale={setLocale}><Treinamento /></PublicLayout>} />
          <Route path="/business-consulting-formacoes" exact render={() => <PublicLayout locale={locale} setLocale={setLocale}><BusinessConsultingFormacoes /></PublicLayout>} />
          <Route path="/planos" exact render={() => <PublicLayout locale={locale} setLocale={setLocale}><Planos /></PublicLayout>} />
          
          {/* Home page */}
          <Route path="/" exact render={() => <PublicLayout locale={locale} setLocale={setLocale}><Index /></PublicLayout>} />
          
          {/* Fallback redirect */}
          <Redirect from="*" to="/" />
        </Switch>
      </BrowserRouter>
      <FloatingButton />
    </IntlProvider>
  );
};

// Render the application
ReactDOM.render(<App />, document.getElementById("root"));

import React, { useState } from "react";
import contactosFundo from "assets/img/contactos_fundos.jpg";
import { useIntl } from "react-intl";

export default function Sobre({ compliance }) {
  const intl = useIntl();
  const [openPolicy, setOpenPolicy] = useState(null);

  const policies = [
    {
      id: "imparcialidade",
      title: intl.formatMessage({id: "sobre_imparcialidade_title"}),
      icon: "fas fa-balance-scale",
      content: (
        <div className="text-blueGray-600 text-base space-y-4">
          <div>
            <strong className="block text-blueGray-800 mb-1">{intl.formatMessage({id: "sobre_imparcialidade_objetivo_title"})}</strong>
            <p>{intl.formatMessage({id: "sobre_imparcialidade_objetivo"})}</p>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">{intl.formatMessage({id: "sobre_imparcialidade_compromisso_title"})}</strong>
            <p>{intl.formatMessage({id: "sobre_imparcialidade_compromisso"})}</p>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">{intl.formatMessage({id: "sobre_imparcialidade_estrutura_title"})}</strong>
            <p>{intl.formatMessage({id: "sobre_imparcialidade_estrutura"})}</p>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">{intl.formatMessage({id: "sobre_imparcialidade_riscos_title"})}</strong>
            <ul className="list-disc list-inside ml-4">
              <li>{intl.formatMessage({id: "sobre_imparcialidade_riscos_1"})}</li>
              <li>{intl.formatMessage({id: "sobre_imparcialidade_riscos_2"})}</li>
              <li>{intl.formatMessage({id: "sobre_imparcialidade_riscos_3"})}</li>
              <li>{intl.formatMessage({id: "sobre_imparcialidade_riscos_4"})}</li>
            </ul>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">{intl.formatMessage({id: "sobre_imparcialidade_conflito_title"})}</strong>
            <p>{intl.formatMessage({id: "sobre_imparcialidade_conflito"})}</p>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">{intl.formatMessage({id: "sobre_imparcialidade_monitoramento_title"})}</strong>
            <p>{intl.formatMessage({id: "sobre_imparcialidade_monitoramento"})}</p>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">{intl.formatMessage({id: "sobre_imparcialidade_declaracao_title"})}</strong>
            <p>{intl.formatMessage({id: "sobre_imparcialidade_declaracao"})}</p>
          </div>
        </div>
      )
    },
    {
      id: "confidencialidade",
      title: intl.formatMessage({id: "sobre_confidencialidade_title"}),
      icon: "fas fa-lock",
      content: (
        <div className="text-blueGray-600 text-base space-y-4">
          <div>
            <strong className="block text-blueGray-800 mb-1">{intl.formatMessage({id: "sobre_confidencialidade_objetivo_title"})}</strong>
            <p>{intl.formatMessage({id: "sobre_confidencialidade_objetivo"})}</p>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">{intl.formatMessage({id: "sobre_confidencialidade_principios_title"})}</strong>
            <p>{intl.formatMessage({id: "sobre_confidencialidade_principios"})}</p>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">{intl.formatMessage({id: "sobre_confidencialidade_ambito_title"})}</strong>
            <p>{intl.formatMessage({id: "sobre_confidencialidade_ambito"})}</p>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">{intl.formatMessage({id: "sobre_confidencialidade_acordos_title"})}</strong>
            <ul className="list-disc list-inside ml-4">
              <li>{intl.formatMessage({id: "sobre_confidencialidade_acordos_1"})}</li>
              <li>{intl.formatMessage({id: "sobre_confidencialidade_acordos_2"})}</li>
            </ul>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">{intl.formatMessage({id: "sobre_confidencialidade_gestao_title"})}</strong>
            <ul className="list-disc list-inside ml-4">
              <li>{intl.formatMessage({id: "sobre_confidencialidade_gestao_1"})}</li>
              <li>{intl.formatMessage({id: "sobre_confidencialidade_gestao_2"})}</li>
              <li>{intl.formatMessage({id: "sobre_confidencialidade_gestao_3"})}</li>
            </ul>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">{intl.formatMessage({id: "sobre_confidencialidade_excecoes_title"})}</strong>
            <ul className="list-disc list-inside ml-4">
              <li>{intl.formatMessage({id: "sobre_confidencialidade_excecoes_1"})}</li>
            </ul>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">{intl.formatMessage({id: "sobre_confidencialidade_treinamento_title"})}</strong>
            <p>{intl.formatMessage({id: "sobre_confidencialidade_treinamento"})}</p>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">{intl.formatMessage({id: "sobre_confidencialidade_monitoramento_title"})}</strong>
            <ul className="list-disc list-inside ml-4">
              <li>{intl.formatMessage({id: "sobre_confidencialidade_monitoramento_1"})}</li>
              <li>{intl.formatMessage({id: "sobre_confidencialidade_monitoramento_2"})}</li>
            </ul>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">{intl.formatMessage({id: "sobre_confidencialidade_declaracao_title"})}</strong>
            <p>{intl.formatMessage({id: "sobre_confidencialidade_declaracao"})}</p>
          </div>
        </div>
      )
    },
    {
      id: "competencia",
      title: intl.formatMessage({id: "sobre_competencia_title"}),
      icon: "fas fa-medal",
      content: (
        <div className="text-blueGray-600 text-base space-y-4">
          <div>
            <strong className="block text-blueGray-800 mb-1">{intl.formatMessage({id: "sobre_competencia_objetivo_title"})}</strong>
            <p>{intl.formatMessage({id: "sobre_competencia_objetivo"})}</p>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">{intl.formatMessage({id: "sobre_competencia_compromisso_title"})}</strong>
            <p>{intl.formatMessage({id: "sobre_competencia_compromisso"})}</p>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">{intl.formatMessage({id: "sobre_competencia_abrangencia_title"})}</strong>
            <p>{intl.formatMessage({id: "sobre_competencia_abrangencia"})}</p>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">{intl.formatMessage({id: "sobre_competencia_recrutamento_title"})}</strong>
            <ul className="list-disc list-inside ml-4">
              <li>{intl.formatMessage({id: "sobre_competencia_recrutamento_1"})}</li>
              <li>{intl.formatMessage({id: "sobre_competencia_recrutamento_2"})}</li>
              <li>{intl.formatMessage({id: "sobre_competencia_recrutamento_3"})}</li>
            </ul>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">{intl.formatMessage({id: "sobre_competencia_formacao_title"})}</strong>
            <ul className="list-disc list-inside ml-4">
              <li>{intl.formatMessage({id: "sobre_competencia_formacao_1"})}</li>
              <li>{intl.formatMessage({id: "sobre_competencia_formacao_2"})}</li>
            </ul>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">{intl.formatMessage({id: "sobre_competencia_avaliacao_title"})}</strong>
            <ul className="list-disc list-inside ml-4">
              <li>{intl.formatMessage({id: "sobre_competencia_avaliacao_1"})}</li>
              <li>{intl.formatMessage({id: "sobre_competencia_avaliacao_2"})}</li>
            </ul>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">{intl.formatMessage({id: "sobre_competencia_manutencao_title"})}</strong>
            <ul className="list-disc list-inside ml-4">
              <li>{intl.formatMessage({id: "sobre_competencia_manutencao_1"})}</li>
              <li>{intl.formatMessage({id: "sobre_competencia_manutencao_2"})}</li>
            </ul>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">{intl.formatMessage({id: "sobre_competencia_revisao_title"})}</strong>
            <ul className="list-disc list-inside ml-4">
              <li>{intl.formatMessage({id: "sobre_competencia_revisao_1"})}</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: "responsabilidade",
      title: intl.formatMessage({id: "sobre_responsabilidade_title"}),
      icon: "fas fa-hands-helping",
      content: (
        <div className="text-blueGray-600 text-base space-y-4">
          <div>
            <strong className="block text-blueGray-800 mb-1">{intl.formatMessage({id: "sobre_responsabilidade_objetivo_title"})}</strong>
            <p>{intl.formatMessage({id: "sobre_responsabilidade_objetivo"})}</p>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">{intl.formatMessage({id: "sobre_responsabilidade_principios_title"})}</strong>
            <p>{intl.formatMessage({id: "sobre_responsabilidade_principios"})}</p>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">{intl.formatMessage({id: "sobre_responsabilidade_escopo_title"})}</strong>
            <p>{intl.formatMessage({id: "sobre_responsabilidade_escopo"})}</p>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">{intl.formatMessage({id: "sobre_responsabilidade_atribuicao_title"})}</strong>
            <ul className="list-disc list-inside ml-4">
              <li>{intl.formatMessage({id: "sobre_responsabilidade_atribuicao_1"})}</li>
              <li>{intl.formatMessage({id: "sobre_responsabilidade_atribuicao_2"})}</li>
              <li>{intl.formatMessage({id: "sobre_responsabilidade_atribuicao_3"})}</li>
              <li>{intl.formatMessage({id: "sobre_responsabilidade_atribuicao_4"})}</li>
              <li>{intl.formatMessage({id: "sobre_responsabilidade_atribuicao_5"})}</li>
              <li>{intl.formatMessage({id: "sobre_responsabilidade_atribuicao_6"})}</li>
            </ul>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">{intl.formatMessage({id: "sobre_responsabilidade_registro_title"})}</strong>
            <ul className="list-disc list-inside ml-4">
              <li>{intl.formatMessage({id: "sobre_responsabilidade_registro_1"})}</li>
            </ul>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">{intl.formatMessage({id: "sobre_responsabilidade_legal_title"})}</strong>
            <ul className="list-disc list-inside ml-4">
              <li>{intl.formatMessage({id: "sobre_responsabilidade_legal_1"})}</li>
            </ul>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">{intl.formatMessage({id: "sobre_responsabilidade_monitoramento_title"})}</strong>
            <ul className="list-disc list-inside ml-4">
              <li>{intl.formatMessage({id: "sobre_responsabilidade_monitoramento_1"})}</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: "transparencia",
      title: intl.formatMessage({id: "sobre_transparencia_title"}),
      icon: "fas fa-eye",
      content: (
        <div className="text-blueGray-600 text-base space-y-4">
          <div>
            <strong className="block text-blueGray-800 mb-1">{intl.formatMessage({id: "sobre_transparencia_objetivo_title"})}</strong>
            <p>{intl.formatMessage({id: "sobre_transparencia_objetivo"})}</p>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">{intl.formatMessage({id: "sobre_transparencia_compromisso_title"})}</strong>
            <p>{intl.formatMessage({id: "sobre_transparencia_compromisso"})}</p>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">{intl.formatMessage({id: "sobre_transparencia_ambito_title"})}</strong>
            <p>{intl.formatMessage({id: "sobre_transparencia_ambito"})}</p>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">{intl.formatMessage({id: "sobre_transparencia_comunicacao_title"})}</strong>
            <ul className="list-disc list-inside ml-4">
              <li>{intl.formatMessage({id: "sobre_transparencia_comunicacao_1"})}</li>
              <li>{intl.formatMessage({id: "sobre_transparencia_comunicacao_2"})}</li>
            </ul>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">{intl.formatMessage({id: "sobre_transparencia_publicacao_title"})}</strong>
            <ul className="list-disc list-inside ml-4">
              <li>{intl.formatMessage({id: "sobre_transparencia_publicacao_1"})}</li>
              <li>{intl.formatMessage({id: "sobre_transparencia_publicacao_2"})}</li>
            </ul>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">{intl.formatMessage({id: "sobre_transparencia_solicitacao_title"})}</strong>
            <ul className="list-disc list-inside ml-4">
              <li>{intl.formatMessage({id: "sobre_transparencia_solicitacao_1"})}</li>
              <li>{intl.formatMessage({id: "sobre_transparencia_solicitacao_2"})}</li>
            </ul>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">{intl.formatMessage({id: "sobre_transparencia_protecao_title"})}</strong>
            <ul className="list-disc list-inside ml-4">
              <li>{intl.formatMessage({id: "sobre_transparencia_protecao_1"})}</li>
              <li>{intl.formatMessage({id: "sobre_transparencia_protecao_2"})}</li>
            </ul>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">{intl.formatMessage({id: "sobre_transparencia_monitoramento_title"})}</strong>
            <ul className="list-disc list-inside ml-4">
              <li>{intl.formatMessage({id: "sobre_transparencia_monitoramento_1"})}</li>
            </ul>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">{intl.formatMessage({id: "sobre_transparencia_declaracao_title"})}</strong>
            <p>{intl.formatMessage({id: "sobre_transparencia_declaracao"})}</p>
          </div>
        </div>
      )
    },
    {
      id: "reclamacoes",
      title: intl.formatMessage({id: "sobre_reclamacoes_title"}),
      icon: "fas fa-bullhorn",
      content: (
        <div className="text-blueGray-600 text-base space-y-4">
          <div>
            <strong className="block text-blueGray-800 mb-1">{intl.formatMessage({id: "sobre_reclamacoes_objetivo_title"})}</strong>
            <p>{intl.formatMessage({id: "sobre_reclamacoes_objetivo"})}</p>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">{intl.formatMessage({id: "sobre_reclamacoes_definicoes_title"})}</strong>
            <ul className="list-disc list-inside ml-4">
              <li>{intl.formatMessage({id: "sobre_reclamacoes_definicoes_1"})}</li>
              <li>{intl.formatMessage({id: "sobre_reclamacoes_definicoes_2"})}</li>
            </ul>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">{intl.formatMessage({id: "sobre_reclamacoes_compromisso_title"})}</strong>
            <p>{intl.formatMessage({id: "sobre_reclamacoes_compromisso"})}</p>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">{intl.formatMessage({id: "sobre_reclamacoes_recepcao_title"})}</strong>
            <ul className="list-disc list-inside ml-4">
              <li>{intl.formatMessage({id: "sobre_reclamacoes_recepcao_1"})}</li>
              <li>{intl.formatMessage({id: "sobre_reclamacoes_recepcao_2"})}</li>
            </ul>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">{intl.formatMessage({id: "sobre_reclamacoes_avaliacao_title"})}</strong>
            <ul className="list-disc list-inside ml-4">
              <li>{intl.formatMessage({id: "sobre_reclamacoes_avaliacao_1"})}</li>
              <li>{intl.formatMessage({id: "sobre_reclamacoes_avaliacao_2"})}</li>
            </ul>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">{intl.formatMessage({id: "sobre_reclamacoes_decisao_title"})}</strong>
            <ul className="list-disc list-inside ml-4">
              <li>{intl.formatMessage({id: "sobre_reclamacoes_decisao_1"})}</li>
              <li>{intl.formatMessage({id: "sobre_reclamacoes_decisao_2"})}</li>
            </ul>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">{intl.formatMessage({id: "sobre_reclamacoes_prazo_title"})}</strong>
            <ul className="list-disc list-inside ml-4">
              <li>{intl.formatMessage({id: "sobre_reclamacoes_prazo_1"})}</li>
              <li>{intl.formatMessage({id: "sobre_reclamacoes_prazo_2"})}</li>
            </ul>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">{intl.formatMessage({id: "sobre_reclamacoes_monitoramento_title"})}</strong>
            <ul className="list-disc list-inside ml-4">
              <li>{intl.formatMessage({id: "sobre_reclamacoes_monitoramento_1"})}</li>
              <li>{intl.formatMessage({id: "sobre_reclamacoes_monitoramento_2"})}</li>
            </ul>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">{intl.formatMessage({id: "sobre_reclamacoes_confidencialidade_title"})}</strong>
            <p>{intl.formatMessage({id: "sobre_reclamacoes_confidencialidade"})}</p>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">{intl.formatMessage({id: "sobre_reclamacoes_divulgacao_title"})}</strong>
            <p>{intl.formatMessage({id: "sobre_reclamacoes_divulgacao"})}</p>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">{intl.formatMessage({id: "sobre_reclamacoes_revisao_title"})}</strong>
            <p>{intl.formatMessage({id: "sobre_reclamacoes_revisao"})}</p>
          </div>
        </div>
      )
    },
    {
      id: "auditoria",
      title: intl.formatMessage({id: "sobre_auditoria_title"}),
      icon: "fas fa-certificate",
      content: (
        <div className="text-blueGray-600 text-base space-y-4">
          <div>
            <strong className="block text-blueGray-800 mb-1">{intl.formatMessage({id: "sobre_auditoria_objetivo_title"})}</strong>
            <p>{intl.formatMessage({id: "sobre_auditoria_objetivo"})}</p>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">{intl.formatMessage({id: "sobre_auditoria_compromisso_title"})}</strong>
            <p>{intl.formatMessage({id: "sobre_auditoria_compromisso"})}</p>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">{intl.formatMessage({id: "sobre_auditoria_escopo_title"})}</strong>
            <p>{intl.formatMessage({id: "sobre_auditoria_escopo"})}</p>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">{intl.formatMessage({id: "sobre_auditoria_planejamento_title"})}</strong>
            <ul className="list-disc list-inside ml-4">
              <li>{intl.formatMessage({id: "sobre_auditoria_planejamento_1"})}</li>
              <li>{intl.formatMessage({id: "sobre_auditoria_planejamento_2"})}</li>
            </ul>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">{intl.formatMessage({id: "sobre_auditoria_execucao_title"})}</strong>
            <ul className="list-disc list-inside ml-4">
              <li>{intl.formatMessage({id: "sobre_auditoria_execucao_1"})}</li>
              <li>{intl.formatMessage({id: "sobre_auditoria_execucao_2"})}</li>
              <li>{intl.formatMessage({id: "sobre_auditoria_execucao_3"})}</li>
            </ul>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">{intl.formatMessage({id: "sobre_auditoria_revisao_tecnica_title"})}</strong>
            <ul className="list-disc list-inside ml-4">
              <li>{intl.formatMessage({id: "sobre_auditoria_revisao_tecnica_1"})}</li>
              <li>{intl.formatMessage({id: "sobre_auditoria_revisao_tecnica_2"})}</li>
            </ul>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">{intl.formatMessage({id: "sobre_auditoria_decisao_certificacao_title"})}</strong>
            <ul className="list-disc list-inside ml-4">
              <li>{intl.formatMessage({id: "sobre_auditoria_decisao_certificacao_1"})}</li>
              <li>{intl.formatMessage({id: "sobre_auditoria_decisao_certificacao_2"})}</li>
            </ul>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">{intl.formatMessage({id: "sobre_auditoria_controle_marca_title"})}</strong>
            <ul className="list-disc list-inside ml-4">
              <li>{intl.formatMessage({id: "sobre_auditoria_controle_marca_1"})}</li>
              <li>{intl.formatMessage({id: "sobre_auditoria_controle_marca_2"})}</li>
            </ul>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">{intl.formatMessage({id: "sobre_auditoria_acompanhamento_title"})}</strong>
            <ul className="list-disc list-inside ml-4">
              <li>{intl.formatMessage({id: "sobre_auditoria_acompanhamento_1"})}</li>
              <li>{intl.formatMessage({id: "sobre_auditoria_acompanhamento_2"})}</li>
            </ul>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">{intl.formatMessage({id: "sobre_auditoria_divulgacao_title"})}</strong>
            <ul className="list-disc list-inside ml-4">
              <li>{intl.formatMessage({id: "sobre_auditoria_divulgacao_1"})}</li>
              <li>{intl.formatMessage({id: "sobre_auditoria_divulgacao_2"})}</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: "sistema_gestao",
      title: intl.formatMessage({id: "sobre_sistema_gestao_title"}),
      icon: "fas fa-cogs",
      content: (
        <div className="text-blueGray-600 text-base space-y-4">
          <div>
            <strong className="block text-blueGray-800 mb-1">{intl.formatMessage({id: "sobre_sistema_gestao_objetivo_title"})}</strong>
            <p>{intl.formatMessage({id: "sobre_sistema_gestao_objetivo"})}</p>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">{intl.formatMessage({id: "sobre_sistema_gestao_compromisso_title"})}</strong>
            <p>{intl.formatMessage({id: "sobre_sistema_gestao_compromisso"})}</p>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">{intl.formatMessage({id: "sobre_sistema_gestao_estrutura_title"})}</strong>
            <p>{intl.formatMessage({id: "sobre_sistema_gestao_estrutura"})}</p>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">{intl.formatMessage({id: "sobre_sistema_gestao_responsabilidades_title"})}</strong>
            <ul className="list-disc list-inside ml-4">
              <li>{intl.formatMessage({id: "sobre_sistema_gestao_responsabilidades_1"})}</li>
              <li>{intl.formatMessage({id: "sobre_sistema_gestao_responsabilidades_2"})}</li>
              <li>{intl.formatMessage({id: "sobre_sistema_gestao_responsabilidades_3"})}</li>
              <li>{intl.formatMessage({id: "sobre_sistema_gestao_responsabilidades_4"})}</li>
            </ul>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">{intl.formatMessage({id: "sobre_sistema_gestao_monitoramento_title"})}</strong>
            <ul className="list-disc list-inside ml-4">
              <li>{intl.formatMessage({id: "sobre_sistema_gestao_monitoramento_1"})}</li>
              <li>{intl.formatMessage({id: "sobre_sistema_gestao_monitoramento_2"})}</li>
            </ul>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">{intl.formatMessage({id: "sobre_sistema_gestao_melhoria_title"})}</strong>
            <ul className="list-disc list-inside ml-4">
              <li>{intl.formatMessage({id: "sobre_sistema_gestao_melhoria_1"})}</li>
              <li>{intl.formatMessage({id: "sobre_sistema_gestao_melhoria_2"})}</li>
            </ul>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">{intl.formatMessage({id: "sobre_sistema_gestao_registro_title"})}</strong>
            <ul className="list-disc list-inside ml-4">
              <li>{intl.formatMessage({id: "sobre_sistema_gestao_registro_1"})}</li>
            </ul>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">{intl.formatMessage({id: "sobre_sistema_gestao_revisao_title"})}</strong>
            <ul className="list-disc list-inside ml-4">
              <li>{intl.formatMessage({id: "sobre_sistema_gestao_revisao_1"})}</li>
            </ul>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">{intl.formatMessage({id: "sobre_sistema_gestao_declaracao_title"})}</strong>
            <ul className="list-disc list-inside ml-4">
              <li>{intl.formatMessage({id: "sobre_sistema_gestao_declaracao_1"})}</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: "compliance",
      title: intl.formatMessage({id: "sobre_compliance_title"}),
      icon: "fas fa-shield-alt",
      content: (
        <div className="text-blueGray-600 text-base space-y-4">
          <div>
            <strong className="block text-blueGray-800 mb-1">{intl.formatMessage({id: "sobre_compliance_compromisso_title"})}</strong>
            <p>{intl.formatMessage({id: "sobre_compliance_compromisso"})}</p>
            <p>{intl.formatMessage({id: "sobre_compliance_compromisso_desc"})}</p>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">{intl.formatMessage({id: "sobre_compliance_objectivos_title"})}</strong>
            <ul className="list-disc list-inside ml-4">
              <li>{intl.formatMessage({id: "sobre_compliance_objectivos_1"})}</li>
              <li>{intl.formatMessage({id: "sobre_compliance_objectivos_2"})}</li>
              <li>{intl.formatMessage({id: "sobre_compliance_objectivos_3"})}</li>
            </ul>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">{intl.formatMessage({id: "sobre_compliance_ambito_title"})}</strong>
            <ul className="list-disc list-inside ml-4">
              <li>{intl.formatMessage({id: "sobre_compliance_ambito_1"})}</li>
              <li>{intl.formatMessage({id: "sobre_compliance_ambito_2"})}</li>
            </ul>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">{intl.formatMessage({id: "sobre_compliance_comite_title"})}</strong>
            <ul className="list-disc list-inside ml-4">
              <li>{intl.formatMessage({id: "sobre_compliance_comite_1"})}</li>
              <li>{intl.formatMessage({id: "sobre_compliance_comite_2"})}</li>
              <li>{intl.formatMessage({id: "sobre_compliance_comite_3"})}</li>
              <li>{intl.formatMessage({id: "sobre_compliance_comite_4"})}</li>
            </ul>
            <p>{intl.formatMessage({id: "sobre_compliance_auditoria_interna"})}</p>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">{intl.formatMessage({id: "sobre_compliance_politicas_antidiscriminacao_title"})}</strong>
            <ul className="list-disc list-inside ml-4">
              <li>{intl.formatMessage({id: "sobre_compliance_politicas_antidiscriminacao_1"})}</li>
              <li>{intl.formatMessage({id: "sobre_compliance_politicas_antidiscriminacao_2"})}</li>
              <li>{intl.formatMessage({id: "sobre_compliance_politicas_antidiscriminacao_3"})}</li>
              <li>{intl.formatMessage({id: "sobre_compliance_politicas_antidiscriminacao_4"})}</li>
              <li>{intl.formatMessage({id: "sobre_compliance_politicas_antidiscriminacao_5"})}</li>
              <li>{intl.formatMessage({id: "sobre_compliance_politicas_antidiscriminacao_6"})}</li>
            </ul>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">{intl.formatMessage({id: "sobre_compliance_politicas_proteccao_dados_title"})}</strong>
            <ul className="list-disc list-inside ml-4">
              <li>{intl.formatMessage({id: "sobre_compliance_politicas_proteccao_dados_1"})}</li>
              <li>{intl.formatMessage({id: "sobre_compliance_politicas_proteccao_dados_2"})}</li>
              <li>{intl.formatMessage({id: "sobre_compliance_politicas_proteccao_dados_3"})}</li>
              <li>{intl.formatMessage({id: "sobre_compliance_politicas_proteccao_dados_4"})}</li>
            </ul>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">{intl.formatMessage({id: "sobre_compliance_treinamento_divulgacao_title"})}</strong>
            <ul className="list-disc list-inside ml-4">
              <li>{intl.formatMessage({id: "sobre_compliance_treinamento_divulgacao_1"})}</li>
              <li>{intl.formatMessage({id: "sobre_compliance_treinamento_divulgacao_2"})}</li>
            </ul>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">{intl.formatMessage({id: "sobre_compliance_consequencias_title"})}</strong>
            <ul className="list-disc list-inside ml-4">
              <li>{intl.formatMessage({id: "sobre_compliance_consequencias_1"})}</li>
            </ul>
          </div>
        </div>
      )
    }
  ];

  if (compliance) {
    return (
      <section className="pb-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full px-4">
              <h3 className="text-3xl font-semibold mb-6 text-blueGray-800" style={{ marginTop: '3rem' }}>
                {intl.formatMessage({id: "sobre_compliance_title"})}
              </h3>
              <p className="text-lg leading-relaxed mb-4 text-blueGray-600">
                {intl.formatMessage({id: "sobre_compliance_desc"})}
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
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
          <div className="flex flex-wrap items-center justify-center">
            <div className="w-full px-4 text-center">
              <div className="pr-12">
                <h1 className="text-white font-semibold text-5xl">
                  {intl.formatMessage({id: "sobre_title"})}
                </h1>
                <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
                  {intl.formatMessage({id: "sobre_subtitle"})}
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

      <section className="pb-20 bg-gray-300 -mt-24 mt-[20px]">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center animate-fade-in-up">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-2xl rounded-2xl border border-blueGray-100 transition-transform duration-300 hover:shadow-3xl hover:-translate-y-2 hover:scale-105 p-8">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-5 shadow-lg rounded-full bg-gradient-to-br from-blue-500 to-blue-200 text-3xl">
                    <i className="fas fa-rocket text-blue-600"></i>
                  </div>
                  <h6 className="text-2xl font-extrabold tracking-wide uppercase mb-2 text-blueGray-800 flex flex-col items-center">
                    {intl.formatMessage({id: "sobre_missao_title"})}
                    <span className="block w-10 h-1 bg-gradient-to-r from-[steelblue] to-[lightblue] rounded mt-1"></span>
                  </h6>
                  <p className="mt-2 mb-4 text-blueGray-600 text-base">
                    {intl.formatMessage({id: "sobre_missao_desc"})}
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-4 text-center animate-fade-in-up delay-100">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-2xl rounded-2xl border border-blueGray-100 transition-transform duration-300 hover:shadow-3xl hover:-translate-y-2 hover:scale-105 p-8">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-5 shadow-lg rounded-full bg-gradient-to-br from-blue-500 to-blue-200 text-3xl">
                    <i className="fas fa-eye text-purple-600"></i>
                  </div>
                  <h6 className="text-2xl font-extrabold tracking-wide uppercase mb-2 text-blueGray-800 flex flex-col items-center">
                    {intl.formatMessage({id: "sobre_visao_title"})}
                    <span className="block w-10 h-1 bg-gradient-to-r from-blue-500 to-blue-200 rounded mt-1"></span>
                  </h6>
                  <p className="mt-2 mb-4 text-blueGray-600 text-base">
                    {intl.formatMessage({id: "sobre_visao_desc"})}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 w-full md:w-4/12 px-4 text-center animate-fade-in-up delay-200">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-2xl rounded-2xl border border-blueGray-100 transition-transform duration-300 hover:shadow-3xl hover:-translate-y-2 hover:scale-105 p-8">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-5 shadow-lg rounded-full bg-gradient-to-br from-blue-500 to-blue-200 text-3xl">
                    <i className="fas fa-heart text-green-600"></i>
                  </div>
                  <h6 className="text-2xl font-extrabold tracking-wide uppercase mb-2 text-blueGray-800 flex flex-col items-center">
                    {intl.formatMessage({id: "sobre_valores_title"})}
                    <span className="block w-10 h-1 bg-gradient-to-r from-blue-500 to-blue-200 rounded mt-1"></span>
                  </h6>
                  <ul className="list-disc list-inside text-left max-w-md mx-auto mt-2 text-blueGray-600">
                    <li>{intl.formatMessage({id: "sobre_valores_1"})}</li>
                    <li>{intl.formatMessage({id: "sobre_valores_2"})}</li>
                    <li>{intl.formatMessage({id: "sobre_valores_3"})}</li>
                    <li>{intl.formatMessage({id: "sobre_valores_4"})}</li>
                    <li>{intl.formatMessage({id: "sobre_valores_5"})}</li>
                    <li>{intl.formatMessage({id: "sobre_valores_6"})}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full max-w-6xl mx-auto bg-white rounded-2xl shadow-lg border border-blueGray-100 p-0 mb-10 flex flex-col md:flex-row items-center animate-fade-in-up">
              <div className="flex-shrink-0 p-8 md:p-10 flex justify-center items-center">
                <img src={require("../assets/img/logo.png")} alt="MAEA Solutions" className="w-40 h-40 object-contain" />
              </div>
              <div className="flex-1 p-8 md:p-10 text-center md:text-left">
                <h3 className="text-4xl font-bold mb-6 text-blue-700">{intl.formatMessage({id: "index_about_title"})}</h3>
                <p className="text-lg leading-relaxed mb-4 text-blueGray-700">{intl.formatMessage({id: "index_about_desc"})}</p>
                <p className="text-lg leading-relaxed mb-4 text-blueGray-600">{intl.formatMessage({id: "index_about_institutional"})}</p>
                <p className="text-lg leading-relaxed text-blueGray-600">{intl.formatMessage({id: "index_about_institutional"})}</p>
              </div>
            </div>
          </div>
          {/* Políticas organizadas em seções */}
          <div className="flex flex-col mt-8 space-y-8">
            {policies.map((policy) => (
              <div id={policy.id} key={policy.id} className="w-full max-w-6xl mx-auto bg-gradient-to-br from-white via-blue-50 to-blueGray-100 rounded-2xl p-0 mb-6 shadow-lg border border-blueGray-200 transition-all duration-300">
                <button
                  className="flex items-center w-full px-6 py-5 bg-white rounded-xl border border-blueGray-200 shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none text-left group"
                  onClick={() => setOpenPolicy(openPolicy === policy.id ? null : policy.id)}
                  aria-expanded={openPolicy === policy.id}
                >
                  <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-100 text-blue-500 text-2xl mr-4">
                    <i className={policy.icon}></i>
                  </span>
                  <span className="font-bold text-lg text-blueGray-800 flex-1">{policy.title}</span>
                  <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-600 text-white text-2xl ml-4 transition-all duration-200"> <i className={openPolicy === policy.id ? 'fas fa-minus' : 'fas fa-plus'}></i> </span>
                </button>
                {openPolicy === policy.id && (
                  <div className="px-8 pb-8 pt-2 animate-fade-in">
                    <h4 className="text-2xl font-bold mb-4 text-blueGray-800 text-center">{policy.title}</h4>
                    <div className="text-blueGray-600 text-base space-y-4">
                      {policy.content}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
} 
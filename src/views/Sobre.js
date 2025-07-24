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
            <strong className="block text-blueGray-800 mb-1">Objetivo</strong>
            <p>Garantir que todas as atividades de certificação sejam conduzidas com total imparcialidade, sem influência indevida de interesses internos ou externos.</p>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">Compromisso Institucional</strong>
            <p>A MAEA reconhece a importância crítica da imparcialidade na prestação de serviços de certificação e compromete-se a preservar, monitorar e demonstrar objetividade em todas as decisões relacionadas à avaliação da conformidade.</p>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">Estrutura e Responsabilidade</strong>
            <p>A alta direção assegura que nenhum colaborador, auditor, consultor ou parceiro comercial esteja sujeito a pressões financeiras, comerciais ou pessoais que possam comprometer a imparcialidade. Um Comitê de Imparcialidade independente será instituído para revisar riscos potenciais e recomendar medidas de mitigação.</p>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">Análise e Mitigação de Riscos</strong>
            <ul className="list-disc list-inside ml-4">
              <li>Identificação de riscos à imparcialidade (ex.: envolvimento prévio com clientes)</li>
              <li>Avaliação do impacto potencial</li>
              <li>Implementação de controles (ex.: rotatividade de auditores, separação de funções)</li>
              <li>Registro e revisão periódica das ações tomadas</li>
            </ul>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">Conflito de Interesses</strong>
            <p>A MAEA proíbe a prestação simultânea de serviços de consultoria e certificação ao mesmo cliente, bem como vínculos que possam comprometer a objetividade. Toda relação comercial é avaliada quanto à possibilidade de gerar conflito de interesse.</p>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">Monitoramento Contínuo</strong>
            <p>O sistema de gestão da qualidade contempla indicadores para avaliar a imparcialidade, com auditorias internas, análise crítica da direção e participação do Comitê de Imparcialidade.</p>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">Declaração Pública</strong>
            <p>Todos os colaboradores e partes interessadas têm acesso à presente política, reforçada regularmente por treinamentos, comunicações internas e compromissos éticos formais.</p>
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
            <strong className="block text-blueGray-800 mb-1">Objetivo</strong>
            <p>Proteger todas as informações obtidas ou geradas durante os processos de auditoria e certificação, garantindo a confiança dos clientes, partes interessadas e acreditadoras.</p>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">Princípios Gerais</strong>
            <p>A MAEA reconhece que a confidencialidade é um valor central na prestação de serviços de certificação. Todas as informações não públicas devem ser protegidas contra acesso indevido, divulgação não autorizada, uso impróprio ou destruição não intencional.</p>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">Âmbito</strong>
            <p>Esta política aplica-se a todos os colaboradores, auditores, revisores, consultores externos, fornecedores, parceiros e qualquer outra parte com acesso a informações sigilosas obtidas no contexto da certificação.</p>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">Acordos de Confidencialidade</strong>
            <ul className="list-disc list-inside ml-4">
              <li>Todos os profissionais vinculados à MAEA devem assinar termos de confidencialidade antes de iniciar suas atividades.</li>
              <li>Clientes também são informados sobre os limites e proteções de privacidade estabelecidos pela organização.</li>
            </ul>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">Gestão da Informação</strong>
            <ul className="list-disc list-inside ml-4">
              <li>Os dados dos clientes são armazenados de forma segura, com acesso restrito e controle de permissões.</li>
              <li>Documentos em papel são arquivados em locais seguros e os digitais em servidores protegidos por criptografia e autenticação.</li>
              <li>O compartilhamento de informações só ocorrerá mediante autorização explícita do cliente ou obrigação legal documentada.</li>
            </ul>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">Exceções</strong>
            <ul className="list-disc list-inside ml-4">
              <li>A confidencialidade pode ser quebrada exclusivamente quando: Exigida por lei ou ordem judicial; Solicitada por órgão acreditador no contexto de supervisão; Autorizada formalmente pelo cliente.</li>
            </ul>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">Treinamento e Conscientização</strong>
            <p>A MAEA mantém programas periódicos de capacitação sobre proteção de dados, segurança da informação e boas práticas de confidencialidade.</p>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">Monitoramento e Melhoria</strong>
            <ul className="list-disc list-inside ml-4">
              <li>Auditorias internas avaliam regularmente a aplicação da política, registrando não conformidades e implantando ações corretivas.</li>
              <li>A política é revisada anualmente ou em caso de mudança legislativa.</li>
            </ul>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">Declaração Pública</strong>
            <p>A MAEA torna esta política disponível a todas as partes interessadas, reforçando seu compromisso com a integridade, transparência e respeito às informações dos clientes.</p>
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
            <strong className="block text-blueGray-800 mb-1">Objetivo</strong>
            <p>Estabelecer critérios objetivos para garantir que todos os profissionais envolvidos nas atividades de certificação da MAEA possuam, mantenham e demonstrem competências apropriadas, consistentes com os requisitos normativos, técnicos e éticos.</p>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">Compromisso Institucional</strong>
            <p>A MAEA compromete-se a assegurar que as decisões de certificação sejam realizadas por profissionais qualificados, cuja competência seja validada com base em educação formal, experiência prática, habilidades interpessoais, domínio técnico e conduta ética.</p>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">Abrangência</strong>
            <p>Aplica-se a auditores, revisores, responsáveis técnicos, membros da direção e decisores de certificação que atuem direta ou indiretamente nos processos de avaliação da conformidade.</p>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">Recrutamento e Qualificação</strong>
            <ul className="list-disc list-inside ml-4">
              <li>A MAEA define perfis profissionais mínimos para cada função técnica.</li>
              <li>Os candidatos passam por processo seletivo com avaliação documental, entrevista e verificação de referências.</li>
              <li>O reconhecimento de competências inclui formação acadêmica, experiência profissional, treinamentos técnicos e domínio de normas de sistemas de gestão.</li>
            </ul>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">Formação Contínua</strong>
            <ul className="list-disc list-inside ml-4">
              <li>São instituídos programas regulares de capacitação, com foco em atualizações normativas, técnicas de auditoria, gestão de riscos e imparcialidade.</li>
              <li>Cada profissional possui um plano de desenvolvimento individual, alinhado ao escopo de atuação.</li>
            </ul>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">Avaliação de Competência</strong>
            <ul className="list-disc list-inside ml-4">
              <li>As competências são avaliadas por meio de auditorias observadas, análise de relatórios, feedbacks institucionais e revisões anuais.</li>
              <li>Não conformidades são tratadas por ações corretivas e programas de reforço.</li>
            </ul>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">Manutenção de Registros</strong>
            <ul className="list-disc list-inside ml-4">
              <li>A MAEA mantém registros atualizados de competências, treinamentos, avaliações e autorizações de atuação.</li>
              <li>Esses registros estão disponíveis para acreditadoras e partes interessadas, conforme exigências legais e contratuais.</li>
            </ul>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">Revisão da Política</strong>
            <ul className="list-disc list-inside ml-4">
              <li>A presente política é revisada anualmente ou sempre que houver alteração normativa significativa ou evidência de necessidade de melhoria. Toda atualização é comunicada à equipe e registrada formalmente.</li>
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
            <strong className="block text-blueGray-800 mb-1">Objetivo</strong>
            <p>Estabelecer diretrizes claras sobre as responsabilidades atribuídas às funções envolvidas nos processos de auditoria e certificação, garantindo a integridade e a rastreabilidade das decisões tomadas.</p>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">Princípios Gerais</strong>
            <p>A MAEA reconhece que a responsabilidade é um pilar fundamental para a credibilidade de seus processos de certificação. Cada atividade é conduzida por profissionais devidamente autorizados, com funções delimitadas, autonomia técnica e compromisso com a conformidade normativa.</p>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">Escopo</strong>
            <p>Esta política aplica-se a todas as pessoas envolvidas em: Avaliação de pedidos de certificação; Planejamento e execução de auditorias; Análise de relatórios e evidências; Tomada de decisão sobre certificações; Gestão e supervisão do sistema de gestão da qualidade.</p>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">Atribuição de Responsabilidades</strong>
            <ul className="list-disc list-inside ml-4">
              <li>Auditores: Responsáveis pela coleta e validação de evidências objetivas durante auditorias, respeitando escopo, critérios e prazos estabelecidos.</li>
              <li>Revisores Técnicos: Avaliam a coerência e suficiência das evidências apresentadas nos relatórios, recomendando aprovação ou ações corretivas.</li>
              <li>Decisores de Certificação: Emitem a decisão final de certificação com base em documentação técnica e critérios normativos, sem influência comercial ou relacional.</li>
              <li>Direção da MAEA: Define a política, monitora sua aplicação e assume a responsabilidade geral pela conformidade das operações de certificação.</li>
              <li>Comitês e Órgãos de Apoio: Assessoram tecnicamente e garantem a imparcialidade e consistência das práticas institucionais.</li>
            </ul>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">Registro e Rastreabilidade</strong>
            <ul className="list-disc list-inside ml-4">
              <li>Todas as decisões são registradas em sistemas seguros e auditáveis, permitindo rastreabilidade completa desde a solicitação até a emissão, suspensão ou retirada da certificação.</li>
            </ul>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">Responsabilidade Legal e Ética</strong>
            <ul className="list-disc list-inside ml-4">
              <li>A MAEA responde civil e institucionalmente pelas certificações emitidas. O descumprimento das responsabilidades estabelecidas pode resultar em ações corretivas internas, sanções contratuais ou encaminhamentos legais.</li>
            </ul>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">Monitoramento e Melhoria</strong>
            <ul className="list-disc list-inside ml-4">
              <li>A política é avaliada periodicamente por meio de auditorias internas, análises críticas da direção e feedbacks dos clientes, visando a melhoria contínua e conformidade com requisitos internacionais de acreditação.</li>
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
            <strong className="block text-blueGray-800 mb-1">Objetivo</strong>
            <p>Promover a clareza, a acessibilidade e a divulgação correta das informações relacionadas aos serviços de certificação oferecidos pela MAEA, reforçando a confiança entre clientes, partes interessadas e organismos acreditadores.</p>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">Compromisso Institucional</strong>
            <p>A MAEA assegura que todas as atividades, critérios, procedimentos e decisões ligadas à certificação sejam comunicadas de forma objetiva, rastreável e acessível às partes relevantes, respeitando os princípios da imparcialidade, confidencialidade e legalidade.</p>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">Âmbito</strong>
            <p>Aplica-se a: Comunicação de escopos e critérios de certificação; Divulgação de status de certificações válidas, suspensas ou retiradas; Explicação dos processos, prazos, requisitos e direitos dos clientes; Relacionamento com organismos acreditadores e partes reguladoras.</p>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">Comunicação ao Cliente</strong>
            <ul className="list-disc list-inside ml-4">
              <li>Os clientes recebem orientações claras sobre os requisitos da norma aplicável, o processo de auditoria, critérios de decisão e manutenção da certificação.</li>
              <li>Todos os documentos oficiais (propostas, contratos, relatórios, certificados) são apresentados de forma transparente e rastreável.</li>
            </ul>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">Publicação Institucional</strong>
            <ul className="list-disc list-inside ml-4">
              <li>A MAEA disponibiliza publicamente informações relevantes por meio de seu site, manuais institucionais e comunicados oficiais.</li>
              <li>A lista de organizações certificadas, com o escopo aplicável e status, será mantida atualizada e acessível.</li>
            </ul>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">Solicitação de Informações</strong>
            <ul className="list-disc list-inside ml-4">
              <li>As partes interessadas podem solicitar informações sobre processos e decisões de certificação por meio de canais formais.</li>
              <li>O atendimento é realizado com responsabilidade, respeitando os limites da confidencialidade.</li>
            </ul>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">Proteção e Equilíbrio</strong>
            <ul className="list-disc list-inside ml-4">
              <li>A transparência é exercida sem comprometer a imparcialidade, a confidencialidade e os direitos dos clientes.</li>
              <li>Casos de restrição de informação por razões legais, contratuais ou regulatórias são registrados e justificadamente documentados.</li>
            </ul>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">Monitoramento e Revisão</strong>
            <ul className="list-disc list-inside ml-4">
              <li>Auditorias internas e análises críticas avaliam a eficácia desta política. Os resultados geram planos de melhoria e são compartilhados com a direção e comitês envolvidos.</li>
            </ul>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">Declaração Pública</strong>
            <p>Esta política é amplamente divulgada junto aos colaboradores, clientes e partes interessadas, como demonstração do compromisso institucional da MAEA com ética, credibilidade e governança.</p>
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
            <strong className="block text-blueGray-800 mb-1">Objetivo</strong>
            <p>Estabelecer diretrizes claras para o recebimento, registro, análise, decisão e acompanhamento de reclamações e apelações relacionadas às atividades de certificação da MAEA, assegurando justiça, imparcialidade e rastreabilidade.</p>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">Definições</strong>
            <ul className="list-disc list-inside ml-4">
              <li>Reclamação: Manifestação de insatisfação de qualquer parte interessada em relação aos serviços, decisões ou conduta da MAEA.</li>
              <li>Apelação: Solicitação formal de revisão de decisão de certificação feita por um cliente.</li>
            </ul>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">Compromisso Institucional</strong>
            <p>A MAEA assegura que todas as reclamações e apelações sejam tratadas com ética, imparcialidade e tempestividade, sem retaliações ou impactos negativos às partes envolvidas.</p>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">Recepção e Registro</strong>
            <ul className="list-disc list-inside ml-4">
              <li>Reclamações e apelações podem ser enviadas por e-mail, formulário eletrônico ou presencialmente.</li>
              <li>Todas as manifestações são registradas no sistema de gestão da qualidade, com número de protocolo, data e responsável pelo tratamento.</li>
            </ul>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">Avaliação e Investigação</strong>
            <ul className="list-disc list-inside ml-4">
              <li>Um responsável designado conduz análise objetiva, baseada em evidências, respeitando o princípio da imparcialidade.</li>
              <li>O processo inclui revisão documental, entrevistas, e, se necessário, auditoria extraordinária.</li>
            </ul>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">Decisão e Resposta</strong>
            <ul className="list-disc list-inside ml-4">
              <li>As decisões sobre reclamações e apelações são realizadas por pessoal não envolvido diretamente no assunto.</li>
              <li>A resposta formal inclui a decisão, fundamentação técnica e, se aplicável, medidas corretivas ou preventivas.</li>
            </ul>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">Prazo</strong>
            <ul className="list-disc list-inside ml-4">
              <li>As reclamações são respondidas em até 15 dias úteis.</li>
              <li>Apelações seguem prazo de 30 dias úteis, respeitando etapas de análise, deliberação e comunicação.</li>
            </ul>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">Monitoramento e Melhoria</strong>
            <ul className="list-disc list-inside ml-4">
              <li>Todas as reclamações e apelações são analisadas periodicamente pela direção e pelo Comitê de Imparcialidade.</li>
              <li>Tendências e reincidências são utilizadas como indicadores para melhoria contínua dos processos e formação da equipe.</li>
            </ul>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">Confidencialidade</strong>
            <p>O tratamento das manifestações respeita o sigilo das informações, garantindo proteção às partes envolvidas e registro seguro da documentação.</p>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">Divulgação</strong>
            <p>Esta política é publicada institucionalmente e divulgada aos clientes no momento da contratação e renovação, além de estar disponível em canais oficiais.</p>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">Revisão</strong>
            <p>A política é revisada anualmente ou sempre que necessário, mediante sugestão das partes interessadas, mudanças normativas ou não conformidades registradas.</p>
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
            <strong className="block text-blueGray-800 mb-1">Objetivo</strong>
            <p>Estabelecer princípios e diretrizes para a realização de auditorias e emissão de certificações, assegurando a conformidade com requisitos normativos, técnicos e éticos aplicáveis.</p>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">Compromisso Institucional</strong>
            <p>A MAEA compromete-se a realizar auditorias de forma sistemática, competente e imparcial, com base em evidências objetivas e critérios públicos. As decisões de certificação seguem processos estruturados e independentes, conforme os requisitos da ISO/IEC 17021-1.</p>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">Escopo</strong>
            <p>Aplica-se a: Auditorias iniciais, de manutenção, extraordinárias e de recertificação; Emissão, suspensão, retirada ou renovação de certificados; Gestão do uso da marca de certificação e símbolos associados.</p>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">Planejamento da Auditoria</strong>
            <ul className="list-disc list-inside ml-4">
              <li>As auditorias são planejadas com base no escopo do cliente, natureza das atividades, riscos identificados e histórico de conformidade.</li>
              <li>Cada plano inclui objetivos, critérios, metodologia, equipe auditora designada e cronograma.</li>
            </ul>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">Execução da Auditoria</strong>
            <ul className="list-disc list-inside ml-4">
              <li>Conduzida por auditores competentes, com independência técnica e ética.</li>
              <li>A coleta de evidências segue métodos definidos: entrevistas, observações, revisão documental e testes operacionais.</li>
              <li>Toda auditoria é documentada em relatório formal, contendo escopo, não conformidades, observações e conclusões.</li>
            </ul>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">Revisão Técnica</strong>
            <ul className="list-disc list-inside ml-4">
              <li>Os relatórios são revisados por pessoal distinto dos auditores, garantindo coerência, suficiência e rastreabilidade das evidências apresentadas.</li>
              <li>A recomendação técnica é registrada com justificativa documentada.</li>
            </ul>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">Decisão de Certificação</strong>
            <ul className="list-disc list-inside ml-4">
              <li>A decisão é tomada por profissionais habilitados e independentes do processo de auditoria.</li>
              <li>O resultado pode ser: concessão, manutenção, recertificação, suspensão ou retirada da certificação.</li>
            </ul>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">Controle da Marca de Certificação</strong>
            <ul className="list-disc list-inside ml-4">
              <li>O uso da marca, selos e símbolos segue diretrizes formais disponíveis aos clientes.</li>
              <li>A MAEA monitora ativamente o uso correto e toma ações contra usos indevidos, conforme cláusulas contratuais.</li>
            </ul>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">Acompanhamento e Melhoria</strong>
            <ul className="list-disc list-inside ml-4">
              <li>São realizadas auditorias internas periódicas para validar a eficácia do processo.</li>
              <li>Indicadores de desempenho, feedback de clientes e análises críticas da direção orientam melhorias constantes.</li>
            </ul>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">Divulgação e Registro</strong>
            <ul className="list-disc list-inside ml-4">
              <li>Os certificados emitidos são registrados em sistema seguro, auditável e disponibilizados mediante solicitação formal.</li>
              <li>A política é publicada institucionalmente e revisada anualmente ou conforme demanda normativa.</li>
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
            <strong className="block text-blueGray-800 mb-1">Objetivo</strong>
            <p>Estabelecer os princípios, responsabilidades e mecanismos para a implementação, operação, monitoramento e melhoria contínua do Sistema de Gestão da Qualidade (SGQ) da MAEA, com base nos requisitos da ISO/IEC 17021-1 e normas complementares.</p>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">Compromisso Institucional</strong>
            <p>A MAEA reconhece que um sistema de gestão estruturado é essencial para garantir credibilidade, consistência e conformidade em suas atividades de certificação. A organização compromete-se a manter um SGQ robusto, auditável, e orientado para resultados e conformidade.</p>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">Estrutura do Sistema</strong>
            <p>O SGQ é composto por: Políticas institucionais formais (imparcialidade, confidencialidade, competência, etc.); Procedimentos operacionais para auditoria, certificação, tratamento de reclamações e gestão documental; Indicadores de desempenho e metas de qualidade; Mecanismos de controle, registro, rastreabilidade e revisão técnica.</p>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">Responsabilidades</strong>
            <ul className="list-disc list-inside ml-4">
              <li>Direção Executiva: Responsável pela definição, aprovação e supervisão do SGQ, incluindo análise crítica e tomada de decisão.</li>
              <li>Responsável da Qualidade: Coordena implementação, monitoramento, auditorias internas, controle documental e gestão de não conformidades.</li>
              <li>Colaboradores Técnicos: Devem aplicar os procedimentos e contribuir com sugestões de melhoria e conformidade.</li>
              <li>Comitês Institucionais: Apoiam a revisão das políticas, análise de riscos e validação das decisões estratégicas.</li>
            </ul>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">Monitoramento e Avaliação</strong>
            <ul className="list-disc list-inside ml-4">
              <li>Auditorias internas são realizadas pelo menos uma vez por ciclo anual completo de certificação.</li>
              <li>São elaborados planos de ação corretiva e preventiva com base em não conformidades, reclamações, falhas de processo e resultados de desempenho.</li>
              <li>A análise crítica da direção é documentada e revê recursos, resultados, riscos e oportunidades de melhoria.</li>
            </ul>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">Melhoria Contínua</strong>
            <ul className="list-disc list-inside ml-4">
              <li>O SGQ é ajustado conforme evolução normativa, tecnológica, expansão de escopo ou retorno de partes interessadas.</li>
              <li>A cultura de qualidade é disseminada institucionalmente por meio de treinamentos, comunicação interna e participação ativa dos colaboradores.</li>
            </ul>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">Registro e Controle</strong>
            <ul className="list-disc list-inside ml-4">
              <li>Todos os registros associados ao SGQ são mantidos em formato físico e/ou digital, com controle de versão, prazo de retenção, responsável e segurança da informação.</li>
            </ul>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">Revisão da Política</strong>
            <ul className="list-disc list-inside ml-4">
              <li>Esta política é revisada anualmente, ou quando houver necessidade estratégica, regulatória ou técnica identificada por auditoria interna, análise crítica ou sugestão de partes interessadas.</li>
            </ul>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">Declaração Institucional</strong>
            <ul className="list-disc list-inside ml-4">
              <li>A MAEA declara publicamente seu compromisso com a qualidade, a conformidade e a melhoria contínua como pilares estratégicos de suas operações de certificação.</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: "compliance",
      title: "Política de Compliance",
      icon: "fas fa-shield-alt",
      content: (
        <div className="text-blueGray-600 text-base space-y-4">
          <div>
            <strong className="block text-blueGray-800 mb-1">Compromisso</strong>
            <p>A MAEA compromete-se a garantir elevados padrões de qualidade em todas as suas operações, para garantir a conformidade, melhoria contínua e segurança dos processos, produtos e serviços.</p>
            <p>O objectivo da política de compliance é garantir que todas as actividades da empresa MAEA sejam conduzidas de maneira ética, transparente e em conformidade com as leis e regulamentos aplicáveis. Esta política de compliance estabelece as directrizes que todos os colaboradores devem seguir para garantir um ambiente de trabalho ético e seguro, delimitando procedimentos internos para e mecanismos para mitigação.</p>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">Objectivos</strong>
            <ul className="list-disc list-inside ml-4">
              <li>Assegurar que qualquer trabalhador da MAEA tenha conhecimento e respeite, no exercício das suas funções, as Políticas, os Manuais e Normativos em vigor em matéria de Compliance;</li>
              <li>Assegurar os recursos, meios técnicos e humanos adequados, que permitam que todos os trabalhadores tenham conhecimento da importância da MAEA cumprir todas as obrigações a que está sujeito, da cultura de Compliance e transparência que deve ser transversal em toda empresa;</li>
              <li>Assegurar que a MAEA se encontre em cumprimento com as exigências legais e regulamentares em vigor e com maior diligência comunicar e resolver as não conformidades que sejam identificadas.</li>
            </ul>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">Âmbito</strong>
            <ul className="list-disc list-inside ml-4">
              <li>Esta política aplica-se a todos os colaboradores, fornecedores, parceiros e demais partes interessadas da empresa.</li>
              <li>Compliance: É um conjunto de acções e processos implementados por uma organização para garantir que as suas operações estejam em conformidade com as leis, regulamentos e normas internas.</li>
            </ul>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">Comité de Compliance</strong>
            <ul className="list-disc list-inside ml-4">
              <li>Responsável pela implementação, monitoramento e revisão da política de compliance.</li>
              <li>Apoia e aconselha o Conselho de Administração na implementação da presente Política e propõe recomendações que visem a melhoria da gestão dos controlos internos associados ao risco de Compliance;</li>
              <li>Supervisionar e garantir que a função de Compliance exerce as suas responsabilidades de forma efectiva, independente e eficaz;</li>
              <li>Analisar os relatórios emitidos pela Função de Compliance e avaliar a eficácia da gestão de risco de Compliance, assegurando que os riscos de Compliance sejam controlados.</li>
            </ul>
            <p>Auditoria Interna: Realiza auditorias periódicas para verificar o cumprimento da política. Analisar os relatórios emitidos pela Função de Compliance e avaliar a eficácia da gestão de risco de Compliance, assegurando que os riscos de Compliance sejam controlados.</p>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">Políticas Antidiscriminação</strong>
            <ul className="list-disc list-inside ml-4">
              <li>Promoção da igualdade de oportunidades e ambiente de trabalho inclusivo.</li>
              <li>Proibição de Suborno: É estritamente proibido oferecer, prometer, dar, solicitar ou aceitar subornos ou qualquer forma de pagamento ilícito.</li>
              <li>Conformidade com Leis Anticorrupção: Todos os colaboradores devem cumprir as leis anticorrupção locais e internacionais, incluindo a Lei de Prevenção e Combate à Corrupção.</li>
              <li>Igualdade de Oportunidades: A empresa MAEA promove a igualdade de oportunidades e não tolera discriminação baseada em raça, cor, religião, sexo, orientação sexual, identidade de gênero, nacionalidade, idade ou deficiência, tendo isso como parte dos valores imutáveis da organização.</li>
              <li>Ambiente de Trabalho Inclusivo: Todos os colaboradores devem contribuir para um ambiente de trabalho inclusivo e respeitoso.</li>
            </ul>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">Políticas de Protecção de Dados</strong>
            <ul className="list-disc list-inside ml-4">
              <li>A MAEA garante que os dados pessoais são acessados apenas por pessoas autorizadas, para assegurar a confidencialidade, e a conformidade com regulamentos de proteção de dados.</li>
              <li>Procedimentos de Denúncia: Canal seguro e confidencial para relatar violações.</li>
              <li>A MAEA disponibiliza um canal seguro e confidencial para que os colaboradores possam relatar violações desta política sem prejuízo de retaliações.</li>
              <li>Proteção contra Retaliação: Qualquer forma de retaliação contra colaboradores que façam denúncias de boa-fé é estritamente proibida.</li>
            </ul>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">Treinamento e Divulgação</strong>
            <ul className="list-disc list-inside ml-4">
              <li>Programas de capacitação contínua e comunicação da política.</li>
              <li>A MAEA oferece programas de treinamento contínuo sobre compliance para todos os colaboradores. As formações podem ser genéricas, a serem prestadas a todos os Colaboradores, ou especializadas, isto é, direccionadas a determinado público-alvo de Colaboradores da empresa.</li>
              <li>Divulgação: Esta política será comunicada e enviada por e-mail a todos os colaboradores e estará disponível no website da empresa.</li>
            </ul>
          </div>
          <div>
            <strong className="block text-blueGray-800 mb-1">Consequências e Penalidades</strong>
            <ul className="list-disc list-inside ml-4">
              <li>Medidas Disciplinares: Violações a esta política podem resultar em medidas disciplinares, incluindo advertências, suspensão ou demissão.</li>
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
                Política de Compliance
              </h3>
              <p className="text-lg leading-relaxed mb-4 text-blueGray-600">
                Esta é uma página de exemplo para a Política de Compliance. Adicione aqui o conteúdo detalhado sobre as diretrizes, compromissos e práticas de compliance da empresa.
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
                    Missão
                    <span className="block w-10 h-1 bg-gradient-to-r from-[steelblue] to-[lightblue] rounded mt-1"></span>
                  </h6>
                  <p className="mt-2 mb-4 text-blueGray-600 text-base">
                    Oferecer soluções inovadoras e integradas em consultoria e certificação, promovendo a excelência operacional, a sustentabilidade e a conformidade dos nossos clientes, com ética, responsabilidade e foco em resultados duradouros.
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
                    Visão
                    <span className="block w-10 h-1 bg-gradient-to-r from-blue-500 to-blue-200 rounded mt-1"></span>
                  </h6>
                  <p className="mt-2 mb-4 text-blueGray-600 text-base">
                    Ser reconhecida como referência nacional e internacional em consultoria e certificação, impulsionando o desenvolvimento sustentável, a qualidade e a segurança em todos os setores em que atuamos.
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
                    Valores
                    <span className="block w-10 h-1 bg-gradient-to-r from-blue-500 to-blue-200 rounded mt-1"></span>
                  </h6>
                  <ul className="list-disc list-inside text-left max-w-md mx-auto mt-2 text-blueGray-600">
                    <li>Ética e Transparência em todas as relações</li>
                    <li>Compromisso com a qualidade e a melhoria contínua</li>
                    <li>Respeito às pessoas, à diversidade e ao meio ambiente</li>
                    <li>Inovação e busca constante por soluções eficientes</li>
                    <li>Responsabilidade social e sustentabilidade</li>
                    <li>Foco no cliente e nos resultados</li>
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
                <h3 className="text-4xl font-bold mb-6 text-blue-700">Sobre Nós</h3>
                <p className="text-lg leading-relaxed mb-4 text-blueGray-700">Conheça a história, missão e valores da MAEA Solutions, uma empresa referência em consultoria e certificação para diversos setores.</p>
                <p className="text-lg leading-relaxed mb-4 text-blueGray-600">A MAEA Solutions é uma organização multifacetada que fornece soluções em consultoria e certificação para vários setores em Qualidade, Saúde, Segurança e Meio Ambiente, Segurança Alimentar, Segurança da Informação etc. Nossa vasta experiência industrial com fortes exposições nessas áreas tem apoiado muitas organizações em vários países desde 2023.</p>
                <p className="text-lg leading-relaxed text-blueGray-600">Desde a sua criação, a MAEA Solutions tem sido fundamental na implementação de sistemas de MAEA em diversos estabelecimentos comerciais. E, em um curto espaço de tempo, consolidou-se como um dos principais provedores de serviços em sua categoria.</p>
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
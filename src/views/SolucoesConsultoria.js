import React, { useState } from "react";
import contactosFundo from "assets/img/contactos_fundos.jpg";

export default function SolucoesConsultoria() {
  const [openCard, setOpenCard] = useState(null);

  const solutions = [
    {
      id: "gestao_ambiental",
      title: "Gestão Ambiental e Sustentabilidade",
      icon: "fas fa-leaf",
      content: <div className="text-blueGray-600 text-base">Consultoria para implementação de práticas sustentáveis, licenciamento ambiental, programas de sustentabilidade e atendimento a requisitos legais ambientais.</div>
    },
    {
      id: "avaliacao_impacto_ambiental",
      title: "Avaliação de Impacto Ambiental",
      icon: "fas fa-leaf",
      content: (
        <div className="text-blueGray-600 text-base space-y-4">
          <p>A realização de Avaliações de Impacto Ambiental (AIA) é um componente essencial da maioria das atividades industriais e de desenvolvimento em qualquer país. Essa prática foi adotada para garantir que o desenvolvimento e a proteção ambiental andem de mãos dadas. Para atingir esse objetivo, é crucial que as AIAs realizadas sejam de alta qualidade, de modo que os possíveis impactos ambientais dessas atividades possam ser avaliados e medidas mitigadoras sejam adotadas. No entanto, a situação atual está longe de ser satisfatória, visto que as AIAs desenvolvidas, na maioria das vezes, não atendem à qualidade exigida.</p>
          <p>Com engenheiros ambientais altamente competentes, juntamente com especialistas em processos, a MAEA Solutions executa EIA com qualidades excepcionais, aderindo a alguns dos itens mencionados:</p>
          <ul className="list-disc ml-6">
            <li>Escopo adequado para a AIA</li>
            <li>Equipe de EIA com amplo conhecimento de Leis Legais e Federais</li>
            <li>Equipe de EIA com amplo conhecimento em Diretrizes Técnicas e BPF</li>
            <li>Procedimento de revisão adequado da AAI por pessoal competente</li>
          </ul>
          <p>Nossos coordenadores de EIA altamente competentes têm amplo conhecimento sobre seu projeto, bem como sobre as áreas funcionais acima, para que possamos correlacionar o processo, a capacidade de produção e o levantamento ambiental de base com os impactos ambientais.</p>
          <p>A tarefa geral do cronograma da MAEA Solutions inclui:</p>
          <ul className="list-disc ml-6">
            <li>Uma descrição do projeto;</li>
            <li>Um estudo de base do nível atual de poluição e status ambiental;</li>
            <li>Uma revisão regulatória e legal;</li>
            <li>Descrição do ambiente físico e socioeconômico atual do local, com detalhes suficientes para permitir uma compreensão clara dos prováveis impactos do projeto (tanto benéficos quanto adversos) e para avaliar a eficácia de quaisquer medidas de mitigação propostas.</li>
          </ul>
          <p><strong>Os aspectos a serem abordados incluem:</strong></p>
          <ul className="list-disc ml-6">
            <li>Ambiente Físico</li>
            <li>Características do solo / Geologia / Geomorfologia</li>
            <li>Hidrologia / Hidrogeologia</li>
            <li>Qualidade da água superficial e subterrânea; (Qualidade da água)</li>
            <li>Avaliação do Ambiente Sócio-Cultural / Tráfego</li>
            <li>Análise de impacto em ecossistemas aquáticos, terrestres, aéreos e marinhos</li>
            <li>Outros aplicáveis em relação aos requisitos legais.</li>
          </ul>
        </div>
      )
    },
    {
      id: "auditoria_residuos",
      title: "Auditoria de Resíduos",
      icon: "fas fa-recycle",
      content: (
        <div className="text-blueGray-600 text-base space-y-4">
          <p><strong>O que é uma auditoria de resíduos?</strong></p>
          <p>Uma auditoria de resíduos consiste na mensuração sistemática dos resíduos produzidos por uma empresa, organização ou indivíduo. Uma auditoria pode envolver a avaliação de aspectos do seu fluxo de resíduos, como:</p>
          <ul className="list-disc ml-6">
            <li>Os tipos de materiais no fluxo de resíduos</li>
            <li>Quanto está sendo produzido</li>
            <li>Flutuações na produção de resíduos</li>
            <li>Onde os resíduos estão sendo produzidos</li>
          </ul>
          <p><strong>Por que fazer uma auditoria de resíduos?</strong></p>
          <p>Se você decidiu que quer tentar reduzir o desperdício, há algumas perguntas básicas que você precisa fazer primeiro:</p>
          <ul className="list-disc ml-6">
            <li>Quanto lixo produzimos?</li>
            <li>Que tipos de resíduos produzimos?</li>
            <li>Quais partes da nossa operação produzem resíduos?</li>
            <li>Quanto está custando?</li>
            <li>Qual é a melhor maneira de direcionar nossos esforços para a redução de resíduos?</li>
            <li>Como saberemos quanto progresso fizemos?</li>
          </ul>
          <p>Uma auditoria de resíduos é um processo que ajudará você a responder a essas perguntas. Ela fornecerá números concretos para você planejar e mensurar seu progresso. Além disso, se você deseja vender as iniciativas de redução de resíduos que está planejando, nada melhor do que poder apresentar números concretos e gráficos que demonstrem exatamente o que você pode reduzir e em quanto. Às vezes, pode ser tentador ir em frente e começar a implementar ideias para reduzir o desperdício, mas um pouco de tempo e esforço no início valerão a pena a longo prazo.</p>
          <p><strong>Em resumo, uma auditoria de resíduos irá:</strong></p>
          <ul className="list-disc ml-6">
            <li>Ajudar você a planejar o que vai fazer</li>
            <li>Fornecer uma referência para medir o progresso</li>
            <li>Ajudar você a vender suas iniciativas de redução de resíduos</li>
            <li>Estabelecer dados de referência ou de referência</li>
            <li>Caracterizar e quantificar os fluxos de resíduos</li>
            <li>Verifique os caminhos dos resíduos</li>
            <li>Identificar oportunidades de desvio de resíduos</li>
            <li>Identificar oportunidades de redução na fonte</li>
            <li>Avaliar a eficácia dos sistemas atuais para melhorar a eficiência do sistema de gestão de resíduos</li>
            <li>Obter dados detalhados sobre a geração de resíduos, permitindo um cálculo mais preciso dos custos dos produtos</li>
          </ul>
          <p>Realizamos auditorias de resíduos para uma grande variedade de organizações, personalizadas para atender a diferentes requisitos de setores e clientes.</p>
        </div>
      )
    },
    {
      id: "medicao_monitoramento_ambiental",
      title: "Medição e Monitoramento Ambiental",
      icon: "fas fa-tint",
      content: (
        <div className="text-blueGray-600 text-base space-y-4">
          <p>A degradação ambiental é um problema sério que ameaça a humanidade. A MAEA Solutions oferece diversas soluções neste contexto, contribuindo significativamente para o desenvolvimento sustentável. A crescente conscientização levou empresas ambientalmente comprometidas e confiáveis a consolidar sua vantagem competitiva nos mercados nacional e internacional.</p>
          <p>Nossos consultores contribuem para programas de monitoramento criando anúncios usando:</p>
          <ul className="list-disc ml-6">
            <li>Auxiliar na criação de programas de monitoramento com boa relação custo-benefício (onde, quando e como medir);</li>
            <li>Processar e interpretar os resultados dos programas;</li>
            <li>Disponibilizar os resultados de uma forma que permita aos gerentes avaliar facilmente estratégias alternativas e prever resultados prováveis.</li>
          </ul>
          <p>A MAEA Solutions pode fornecer uma ampla gama de serviços de monitoramento ambiental para clientes cujas atividades impactam os sistemas naturais ou têm o potencial de poluir o meio ambiente. Frequentemente, os objetivos desses serviços são verificar se as emissões ambientais estão em conformidade com os regulamentos e verificar se os padrões de saúde e segurança não estão sendo excedidos. Nossos serviços de monitoramento incluem:</p>
          <strong>Qualidade do ar ambiente:</strong>
          <p>Estações de monitoramento de ar ambiente de última geração, capazes de monitorar poluentes como monóxido de carbono, dióxido de enxofre, óxidos de nitrogênio, compostos orgânicos voláteis (VOCs), ozônio, partículas (PM10 e PM2,5) e parâmetros metrológicos como direção do vento, temperatura, umidade relativa e radiação solar.</p>
          <strong>Qualidade do ar interno:</strong>
          <p>Monitoramento da qualidade do ar interno para garantir saúde, conforto e bem-estar dos ocupantes dos edifícios, prevenindo problemas como Síndrome do Edifício Doente e promovendo produtividade e aprendizado.</p>
          <strong>Monitoramento de ruído:</strong>
          <p>Consultoria prática sobre ruído e vibração, desde testes de isolamento acústico até avaliações de impacto sonoro para planejamento, saúde pública ou grandes projetos de energia.</p>
          <strong>Elementos desta abordagem:</strong>
          <ul className="list-disc ml-6">
            <li>Identificação de riscos ambientais significativos</li>
            <li>Identificar e manter a conscientização sobre a legislação ambiental relevante</li>
            <li>Atribuição de funções e responsabilidades</li>
            <li>Estabelecimento de procedimentos para comunicações internas e externas</li>
            <li>Estabelecimento de procedimentos para monitoramento e medição do desempenho ambiental</li>
            <li>Definir e revisar objetivos e metas para melhorar o desempenho ambiental</li>
            <li>Monitoramento e medição da conformidade ambiental e inquéritos comunitários</li>
            <li>Definir e revisar programas de sistemas de gestão para atingir objetivos e metas</li>
            <li>Fornecimento de treinamento ambiental alinhado aos requisitos de habilidades e revisão do desempenho da gestão ambiental para melhoria contínua</li>
          </ul>
        </div>
      )
    },
    {
      id: "tratamento_aguas_residuais",
      title: "Tratamento de águas residuais",
      icon: "fas fa-water",
      content: (
        <div className="text-blueGray-600 text-base space-y-4">
          <p>A consultoria em tratamento de águas residuais ajuda a organização a minimizar a geração de resíduos, a cumprir a legislação local e a garantir descarte zero.</p>
          <p>A MAEA Solutions oferece uma ampla gama de soluções técnicas e de consultoria para aplicações de tratamento de águas residuais. Uma rede global de especialistas técnicos auxilia os clientes a alcançar eficiência, conformidade e sucesso comercial sustentável em águas residuais em setores altamente regulamentados. Para determinar as soluções ideais para aplicações de tratamento de águas residuais, a MAEA Solutions oferece análises para cada situação específica. Caso haja dados ausentes ou impossíveis de calcular, medimos parâmetros-chave ou orientamos o trabalho analítico conforme necessário.</p>
          <p>A MAEA Solutions realiza estudos de tratabilidade, testes de laboratório e testes piloto tanto internamente quanto no local do cliente; desenvolve sistemas de gestão ambiental e de saúde; e auxilia na implementação de condições de IPPC (Controle Integrado de Prevenção da Poluição).</p>
          <p>Para determinar a solução ideal para aplicações de tratamento de águas residuais, a MAEA Solutions começa com uma análise completa da situação específica. Se houver dados ausentes ou impossíveis de calcular, medimos parâmetros-chave ou orientamos o trabalho analítico, conforme necessário.</p>
          <p><strong>A expertise em tratamento de águas residuais inclui:</strong></p>
          <ul className="list-disc ml-6">
            <li>Avaliação de Soluções Custo-Efetivas</li>
            <li>Análise de Situação e Avaliação de Fluxo de Efluentes</li>
            <li>Estudos de Tratabilidade e Testes de Biodegradação</li>
            <li>Prevenção Integrada da Poluição</li>
            <li>Projeto e engenharia de novas instalações de tratamento</li>
            <li>Solução de problemas e otimização de instalações existentes</li>
            <li>Conceitos de Gestão de Águas Residuais e Controle de Fontes</li>
            <li>Benchmarking e Otimização de Custos</li>
          </ul>
        </div>
      )
    },
    {
      id: "auditorias_ambientais",
      title: "Auditorias Ambientais",
      icon: "fas fa-search",
      content: (
        <div className="text-blueGray-600 text-base space-y-4">
          <p>Como uma empresa com atuação internacional e subsidiárias em diferentes países, você enfrenta o desafio de lidar com diversas legislações distintas. Sua cadeia de suprimentos também integra seus fornecedores. Você deseja minimizar o risco de falhas em sua cadeia de suprimentos interna e externa e reduzir o risco de problemas de reputação. É importante que você aplique padrões e políticas globais uniformes de EHS em suas próprias unidades e fornecedores. Para verificar a conformidade com as regulamentações nacionais e as políticas da empresa, a auditoria de EHS é prática comum no setor.</p>
          <ul className="list-disc ml-6">
            <li>Garantir a eficácia da gestão de EHS</li>
            <li>Minimizar deficiências em práticas e processos</li>
            <li>Controle de forma confiável os riscos de saúde, segurança e meio ambiente</li>
            <li>Garantir a robustez do sistema e dos procedimentos de gestão de EHS</li>
            <li>Confirmar a cadeia de suprimentos</li>
          </ul>
          <strong>Serviços</strong>
          <ul className="list-disc ml-6">
            <li>Estabelecendo um sistema de auditoria</li>
            <li>Desenvolvimento de auditorias internas e de fornecedores específicas para cada país</li>
            <li>Execução de auditorias internas e de fornecedores</li>
            <li>Suporte para sua equipe de auditoria de EHS</li>
          </ul>
          <strong>Solução</strong>
          <p>A auditoria de EHS é a ferramenta aceita no setor para atender a essas demandas. Ajudamos você a desenvolver e manter um sistema de auditoria de EHS sob medida para as necessidades da sua empresa. Apoiamos seus auditores durante e após a avaliação como coauditores ou auditores líderes, ou realizamos auditorias em seu nome como auditores independentes.</p>
          <strong>Benefícios</strong>
          <ul className="list-disc ml-6">
            <li>O processo de auditoria ajuda as organizações a aplicar procedimentos de EHS, como documentação e gerenciamento de requisitos ambientais, de saúde e segurança por meio de ações corretivas e processos de acompanhamento de ciclo fechado.</li>
            <li>A auditoria fornece os controles necessários para apoiar o processo de monitoramento contínuo de uma empresa e reduzir os riscos de segurança e riscos ambientais.</li>
            <li>Com um sistema de Auditoria de EHS e uma implementação diligente de ações corretivas, você pode reduzir a exposição da sua empresa a investigações e responsabilidades.</li>
            <li>Nossa experiência ajuda você a economizar recursos.</li>
            <li>Nossa equipe internacional realizará auditorias onde sua organização não está presente</li>
            <li>Auditores localizados no país alvo (sem barreira linguística)</li>
            <li>Auditores independentes avaliam o desempenho de EHS de acordo com seus padrões</li>
            <li>Você não precisa manter uma equipe de auditoria completa</li>
          </ul>
          <strong>Sistema de Auditoria</strong>
          <ul className="list-disc ml-6">
            <li>Desenvolvimento de sistema de auditoria baseado nas Diretrizes da Empresa (objetivo, frequência, o que avaliar etc.)</li>
            <li>Questionário de pré-auditoria</li>
            <li>Listas de verificação de auditoria</li>
            <li>Métricas de desempenho</li>
            <li>Acompanhamento de descobertas e recomendações</li>
            <li>Ação corretiva</li>
          </ul>
          <strong>Auditoria</strong>
          <ul className="list-disc ml-6">
            <li>Planejamento de auditoria</li>
            <li>Seleção do local</li>
            <li>Agendamento</li>
            <li>Preparação para auditoria</li>
            <li>Definir equipe de auditoria</li>
            <li>Distribuir questionário de pré-auditoria</li>
            <li>Revisão do questionário pré-auditoria</li>
            <li>Execução de auditoria</li>
            <li>Avaliação no local</li>
            <li>Apresentar descobertas e recomendações</li>
            <li>Relatório de auditoria</li>
            <li>Solicitação de ações corretivas</li>
          </ul>
          <strong>Atividades pós-auditoria</strong>
          <ul className="list-disc ml-6">
            <li>Acompanhamento de ações corretivas e preventivas</li>
            <li>Relatórios de acompanhamento do local avaliado</li>
            <li>Classificação de acordo com as diretrizes da empresa</li>
          </ul>
        </div>
      )
    },
    {
      id: "conformidade_legal_ambiental",
      title: "Conformidade Legal Ambiental",
      icon: "fas fa-balance-scale",
      content: <div className="text-blueGray-600 text-base">Diagnóstico e adequação à legislação ambiental vigente, acompanhamento de processos e atendimento a exigências de órgãos reguladores.</div>
    },
    {
      id: "seguranca_trabalho",
      title: "Segurança do Trabalho e Saúde Ocupacional",
      icon: "fas fa-hard-hat",
      content: <div className="text-blueGray-600 text-base">Consultoria para implantação de programas de SST, cultura de segurança, treinamentos e atendimento à legislação trabalhista.</div>
    },
    {
      id: "avaliacao_risco",
      title: "Avaliação de risco",
      icon: "fas fa-exclamation-triangle",
      content: <div className="text-blueGray-600 text-base">Identificação, análise e avaliação de riscos ocupacionais, ambientais e operacionais, com recomendações de mitigação.</div>
    },
    {
      id: "auditoria_seguranca",
      title: "Auditoria de Segurança",
      icon: "fas fa-user-shield",
      content: (
        <div className="text-blueGray-600 text-base space-y-4">
          <p>Como uma empresa com atuação internacional e subsidiárias em diferentes países, você enfrenta o desafio de lidar com diversas legislações distintas. Você possui uma cadeia de suprimentos que também integra seus fornecedores. Você deseja minimizar o risco de falhas em sua cadeia de suprimentos interna e externa e reduzir o risco de problemas de reputação. É importante que você aplique padrões e políticas globais uniformes de EHS em suas próprias unidades e fornecedores. Para verificar a conformidade com as regulamentações nacionais e as políticas da empresa, a auditoria de EHS é prática comum no setor.</p>
          <ul className="list-disc ml-6">
            <li>Garantir a eficácia da gestão de EHS</li>
            <li>Minimizar deficiências em práticas e processos</li>
            <li>Controle de forma confiável os riscos de saúde, segurança e meio ambiente</li>
            <li>Garantir a robustez do sistema e dos procedimentos de gestão de EHS</li>
            <li>Confirmar a cadeia de suprimentos</li>
          </ul>
          <strong>Serviços</strong>
          <ul className="list-disc ml-6">
            <li>Estabelecendo um sistema de auditoria</li>
            <li>Desenvolvimento de auditorias internas e de fornecedores específicas para cada país</li>
            <li>Execução de auditorias internas e de fornecedores</li>
            <li>Suporte para sua equipe de auditoria de EHS</li>
          </ul>
          <strong>Solução</strong>
          <p>A auditoria de EHS é a ferramenta aceita no setor para atender a essas demandas. Ajudamos você a desenvolver e manter um sistema de auditoria de EHS sob medida para as necessidades da sua empresa. Apoiamos seus auditores durante e após a avaliação como coauditores ou auditores líderes, ou realizamos auditorias em seu nome como auditores independentes.</p>
          <strong>Benefícios</strong>
          <ul className="list-disc ml-6">
            <li>O processo de auditoria ajuda as organizações a aplicar procedimentos de EHS, como documentação e gerenciamento de requisitos ambientais, de saúde e segurança por meio de ações corretivas e processos de acompanhamento de ciclo fechado.</li>
            <li>A auditoria fornece os controles necessários para apoiar o processo de monitoramento contínuo de uma empresa e reduzir os riscos de segurança e riscos ambientais.</li>
            <li>Com um sistema de Auditoria de EHS e uma implementação diligente de ações corretivas, você pode reduzir a exposição da sua empresa a investigações e responsabilidades.</li>
            <li>Nossa experiência ajuda você a economizar recursos.</li>
            <li>Nossa equipe internacional realizará auditorias onde sua organização não está presente</li>
            <li>Auditores localizados no país alvo (sem barreira linguística)</li>
            <li>Auditores independentes avaliam o desempenho de EHS de acordo com seus padrões</li>
            <li>Você não precisa manter uma equipe de auditoria completa</li>
          </ul>
          <strong>Sistema de Auditoria</strong>
          <ul className="list-disc ml-6">
            <li>Desenvolvimento de sistema de auditoria baseado nas Diretrizes da Empresa (objetivo, frequência, o que avaliar etc.)</li>
            <li>Questionário de pré-auditoria</li>
            <li>Listas de verificação de auditoria</li>
            <li>Métricas de desempenho</li>
            <li>Acompanhamento de descobertas e recomendações</li>
            <li>Ação corretiva</li>
          </ul>
          <strong>Auditoria</strong>
          <ul className="list-disc ml-6">
            <li>Planejamento de auditoria</li>
            <li>Seleção do local</li>
            <li>Agendamento</li>
            <li>Preparação para auditoria</li>
            <li>Definir equipe de auditoria</li>
            <li>Distribuir questionário de pré-auditoria</li>
            <li>Revisão do questionário pré-auditoria</li>
            <li>Execução de auditoria</li>
            <li>Avaliação no local</li>
            <li>Apresentar descobertas e recomendações</li>
            <li>Relatório de auditoria</li>
            <li>Solicitação de ações corretivas</li>
          </ul>
          <strong>Atividades pós-auditoria</strong>
          <ul className="list-disc ml-6">
            <li>Acompanhamento de ações corretivas e preventivas</li>
            <li>Relatórios de acompanhamento do local avaliado</li>
            <li>Classificação de acordo com as diretrizes da empresa</li>
          </ul>
        </div>
      )
    },
    {
      id: "gestao_emergencias",
      title: "Gestão de Emergências e Crises",
      icon: "fas fa-ambulance",
      content: (
        <div className="text-blueGray-600 text-base space-y-4">
          <p><strong>Mantendo seu negócio funcionando</strong></p>
          <p>A maioria das empresas acredita estar adequadamente preparada para eventos adversos imprevistos. A verdade é que muitas não estão. Se você não tiver procedimentos e estruturas cuidadosamente projetados e ensaiados, sua empresa corre o risco de sofrer interrupções operacionais e até mesmo falência.</p>
          <p>A MAEA Solutions trabalha em estreita colaboração com os clientes para desenvolver, testar e implementar estratégias eficazes para gerenciar organizações durante uma crise.</p>
          <p>Os clientes recebem um programa abrangente de continuidade de crise e estratégias para testar e manter as estruturas e procedimentos usando metodologia comprovada para identificar ameaças, determinar o impacto físico, financeiro e de reputação de uma interrupção e desenvolver planos de contingência para manter e/ou reiniciar as operações no menor prazo possível.</p>
          <strong>Nossa Abordagem Holística</strong>
          <ul className="list-disc ml-6">
            <li>Planejamento de crise: desenvolvimento de estruturas e procedimentos robustos, incluindo funções e responsabilidades claramente definidas, para ajudar a minimizar qualquer impacto negativo em todos os aspectos dos negócios do cliente.</li>
            <li>Auditorias e pesquisas operacionais abrangentes</li>
            <li>Seminários sobre segurança em viagens</li>
            <li>Cursos de treinamento em ambientes hostis</li>
            <li>Exercícios de simulação de crises e testes de políticas e procedimentos</li>
            <li>Avaliações de vulnerabilidade e estratégias para fortalecer as medidas de segurança e a robustez operacional</li>
          </ul>
          <strong>Suporte a incidentes no local</strong>
          <p>A MAEA Solutions fornece suporte de gerenciamento de incidentes no local que permanece com o cliente até que o problema seja resolvido e os planos estejam em andamento para que os negócios e a vida voltem ao normal.</p>
        </div>
      )
    },
    {
      id: "inspecao_terceiros_hse",
      title: "Inspeção e vistoria de terceiros de HSE",
      icon: "fas fa-clipboard-check",
      content: (
        <div className="text-blueGray-600 text-base space-y-4">
          <p><strong>Inspeção:</strong> Sua organização poderá ser visitada por um inspetor ou equipe de inspetores. Os inspetores podem solicitar a visita de diversas pessoas da sua organização, incluindo representantes de:</p>
          <ul className="list-disc ml-6">
            <li>O Conselho de Administração (Diretor Executivo, Diretor de RH)</li>
            <li>Saúde e Segurança</li>
            <li>Pessoal/Recursos Humanos</li>
            <li>Saúde Ocupacional</li>
            <li>Representantes sindicais/de funcionários reconhecidos</li>
          </ul>
          <p>Desenvolvemos um Pacote de Inspeção para ajudar os inspetores a avaliar se as organizações estão tomando as medidas adequadas para gerenciar o estresse relacionado ao trabalho de forma eficaz. Ele também explica a política da HSE sobre investigação de reclamações sobre estresse relacionado ao trabalho.</p>
          <p>O comprometimento da gestão e o envolvimento dos funcionários no processo de avaliação de risco de estresse são essenciais. Os inspetores usarão esses dois indicadores-chave de desempenho para avaliar a adequação da avaliação de risco da sua organização.</p>
          <p>Ao final da visita inicial, uma visita de acompanhamento poderá ser agendada. Os inspetores concordarão com você sobre o progresso que esperam que você tenha alcançado até a próxima inspeção.</p>
        </div>
      )
    },
    {
      id: "analise_risco_operabilidade",
      title: "Análise de Risco e Operabilidade",
      icon: "fas fa-project-diagram",
      content: (
        <div className="text-blueGray-600 text-base space-y-4">
          <p>O método HAZOP (Perigo e Operabilidade) é uma técnica amplamente utilizada para identificar perigos em instalações de processo. Mesmo aqueles que não estão familiarizados com o processo de análise de perigos já devem ter ouvido falar do termo HAZOP, mesmo que não tenham muita certeza do seu significado.</p>
          <p>Um HAZOP é organizado dividindo a unidade a ser analisada em nós. Um nó representa uma seção do processo onde ocorre uma mudança significativa. Por exemplo, um nó pode abranger a transferência de material de um recipiente para outro através de uma bomba. Nesse caso, a mudança no processo é o aumento de pressão e fluxo que ocorre através do nó. Outro nó pode incluir um resfriador de ar suspenso em uma coluna de destilação. Aqui, temperatura e fase são as variáveis do processo que mudam.</p>
          <p>Embora a força do método HAZOP resida em sua organização clara, é importante não permitir que a análise se torne muito rígida. Se a equipe perceber que está falando sobre "Fluxo Reverso", mesmo que a palavra-chave atual seja "Alto Fluxo", o líder provavelmente deve deixar a discussão prosseguir. Se ele adiar a discussão até a palavra-chave "certa", o pensamento e a criatividade atuais podem ser perdidos. Por outro lado, o líder também deve manter a discussão focada na questão em questão e evitar muitas digressões.</p>
          <strong>Etapas de um HAZOP</strong>
          <ul className="list-disc ml-6">
            <li>Selecione um nó, defina sua finalidade e determine os limites de segurança do processo.</li>
            <li>Selecione uma palavra-chave de processo.</li>
            <li>Identifique os perigos e suas causas usando as palavras-chave de desvio.</li>
            <li>Determine como o perigo é "anunciado", ou seja, como o operador sabe que um limite seguro foi excedido.</li>
            <li>Estime as consequências (de segurança, ambientais, econômicas) de cada perigo identificado.</li>
            <li>Identifique as salvaguardas.</li>
            <li>Estime a frequência de ocorrência do perigo.</li>
            <li>Classifique o risco como perigo, com e sem salvaguardas.</li>
            <li>Desenvolver descobertas e potenciais recomendações.</li>
            <li>Passe para a próxima palavra-guia do processo ou para o próximo nó se a discussão sobre a palavra-guia estiver concluída.</li>
          </ul>
        </div>
      )
    },
    {
      id: "conformidade_legal_hse",
      title: "Conformidade legal de HSE",
      icon: "fas fa-balance-scale",
      content: <div className="text-blueGray-600 text-base">Diagnóstico e adequação à legislação de Saúde, Segurança e Meio Ambiente, suporte em auditorias e fiscalizações.</div>
    },
    {
      id: "gestao_projetos",
      title: "Gestão de Projetos",
      icon: "fas fa-tasks",
      content: (
        <div className="text-blueGray-600 text-base space-y-4">
          <p>Consultoria completa em gestão de projetos, desde o planejamento estratégico até a execução, monitoramento e encerramento. Aplicação das melhores práticas do PMI, definição de escopo, cronograma, orçamento, gestão de riscos, comunicação e qualidade.</p>
          <ul className="list-disc ml-6">
            <li>Elaboração e acompanhamento de cronogramas</li>
            <li>Gestão de equipes multidisciplinares</li>
            <li>Gestão de riscos e mudanças</li>
            <li>Implantação de metodologias ágeis e tradicionais</li>
            <li>Relatórios de progresso e indicadores de desempenho</li>
            <li>Treinamento e capacitação em gestão de projetos</li>
          </ul>
          <p><strong>Gestão de Projetos no Setor Petrolífero:</strong></p>
          <p>Atuação especializada em projetos de engenharia, construção, manutenção e operação para a indústria de óleo e gás. Experiência em:</p>
          <ul className="list-disc ml-6">
            <li>Gerenciamento de grandes obras industriais e offshore</li>
            <li>Coordenação de projetos de exploração, produção e refino</li>
            <li>Gestão de contratos EPC/EPCM</li>
            <li>Controle de custos, prazos e qualidade em ambientes de alta complexidade</li>
            <li>Gestão de stakeholders e requisitos regulatórios do setor</li>
            <li>Implementação de sistemas de segurança, meio ambiente e compliance</li>
          </ul>
          <p>Ideal para empresas do setor petrolífero que buscam excelência, conformidade e performance em projetos de qualquer porte.</p>
        </div>
      )
    },
  ];

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
          <div className="flex flex-wrap items-center justify-center">
            <div className="w-full px-4 text-center">
              <div className="pr-12">
                <h1 className="text-white font-semibold text-5xl">
                  Soluções de Consultoria
                </h1>
                <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
                  Conheça nossas soluções especializadas para impulsionar a excelência, a conformidade e a sustentabilidade do seu negócio.
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

      <section className="pb-20 bg-white pt-0">
        <div className="container mx-auto px-4">
          <div className="flex flex-col mt-8 space-y-8">
            {solutions.map((sol) => (
              <div id={sol.id} key={sol.id} className="w-full max-w-6xl mx-auto bg-gradient-to-br from-white via-white to-white rounded-2xl p-0 mb-6 shadow-lg border border-white transition-all duration-300">
                <button
                  className="flex items-center w-full px-6 py-5 bg-white rounded-xl border border-blueGray-200 shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none text-left group"
                  onClick={() => setOpenCard(openCard === sol.id ? null : sol.id)}
                  aria-expanded={openCard === sol.id}
                >
                  <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-maea-blue text-white text-2xl mr-4">
                    <i className={sol.icon}></i>
                  </span>
                  <span className="font-bold text-lg text-maea-blue flex-1">{sol.title}</span>
                  <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-maea-blue text-white text-2xl ml-4 transition-all duration-200"> <i className={openCard === sol.id ? 'fas fa-minus' : 'fas fa-plus'}></i> </span>
                </button>
                {openCard === sol.id && (
                  <div className="px-8 pb-8 pt-2 animate-fade-in">
                    <div className="text-blueGray-600 text-base space-y-4">
                      {sol.content}
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
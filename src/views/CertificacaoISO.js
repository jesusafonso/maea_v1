import React, { useState } from "react";
import { useIntl } from "react-intl";
import contactosFundo from "../assets/img/contactos_fundos.jpg";

export default function CertificacaoISO() {
  const intl = useIntl();
  const [openISO, setOpenISO] = useState(null);

  // Lista dos ISOs (exemplo, ajuste conforme necessário)
  const isos = [
    {
      id: "iso9001",
      title: "ISO 9001 - Sistema de Gestão da Qualidade",
      icon: "fas fa-check-circle",
      content: (
        <div className="text-blueGray-600 text-base space-y-4">
          <p><strong>Exiba sua paixão pela qualidade</strong></p>
          <p>Empresas de sucesso são motivadas a entregar qualidade. Da forma como operam aos padrões de serviço que entregam e aos produtos que produzem. Qualquer pessoa pode afirmar seu compromisso com a qualidade. Com a certificação ISO 9001:2008 e ISO 9001:2015, você tem uma maneira estruturada e sistemática de comprová-lo.</p>
          <p>A ISO 9001:2008 e ISO 9001:2015 são normas que fornecem um conjunto de requisitos padronizados para um sistema de gestão da qualidade. Ajudam você a garantir que seus produtos atendam consistentemente às necessidades dos seus clientes e aos requisitos regulatórios. Elas demonstram às empresas com valores semelhantes que você compartilha o compromisso delas. Ao validar que você leva a qualidade e a satisfação do cliente a sério, verificando se sua empresa é progressiva em sua estratégia.</p>
          <p>A ISO 9001:2008 e ISO 9001:2015 vêm em um formato muito intuitivo. Com termos facilmente reconhecidos por todos os setores e empresas de todos os portes. A Certificação QSMS trabalha com você como seu parceiro. Conhecendo as necessidades específicas da sua organização, buscamos trazer maior eficiência, redução de custos e maior velocidade de lançamento no mercado. Garantindo seu sucesso com a ISO 9001:2008 e ISO 9001:2015 e refletindo a paixão da sua organização pela qualidade.</p>
          <h3 className="font-semibold mt-4">Sistema de Gestão</h3>
          <p>Um "Sistema de Gestão" é a estrutura da organização para gerenciar seus processos ou atividades comerciais. Essa estrutura transforma a entrada de recursos em um produto ou serviço que atende aos objetivos comerciais da organização, satisfaz os requisitos de qualidade do cliente e está em conformidade com as regulamentações.</p>
          <h3 className="font-semibold mt-4">Benefícios</h3>
          <ul className="list-disc ml-12 space-y-1">
            <li>Alcançar consistência na qualidade do produto/serviço e conformidade com os requisitos legais</li>
            <li>Formalizar Boas Práticas de Trabalho</li>
            <li>Garantir satisfação e valor agregado aos clientes</li>
            <li>Reduzir custos para qualidade</li>
            <li>Reconhecimento internacional como uma organização e empresa bem gerida</li>
          </ul>
          <h3 className="font-semibold mt-4">Abordagem de processo</h3>
          <p>A ISO 9001:2008 e ISO 9001:2015 oferecem uma abordagem de processo valiosa para a gestão da qualidade. Ao compreender melhor a interação "horizontal" dos departamentos ou unidades de negócios dentro da sua organização, você pode garantir que todas as suas funções criem valor real para os seus clientes.</p>
          <h3 className="font-semibold mt-4">Por que escolher MAEA?</h3>
          <p>Quando se trata de criar valor na certificação ISO 9001, a MAEA está à frente. Ao contrário de outros registradores, olhamos além das "Fases 1 e 2" para ser seu parceiro de negócios em todas as etapas do ciclo de vida do seu SGQ. Desde o compartilhamento de melhores práticas e novos requisitos do setor até a avaliação do seu desempenho em relação aos seus próprios objetivos, nos dedicamos a fornecer resultados de auditoria que atendam às suas necessidades de negócios e beneficiem a organização.</p>
        </div>
      )
    },
    {
      id: "iso14001",
      title: "ISO 14001 - Sistema de Gestão Ambiental",
      icon: "fas fa-leaf",
      content: (
        <div className="text-blueGray-600 text-base space-y-4">
          <p><strong>Padrões Ambientais</strong></p>
          <p>No mercado atual, os consumidores buscam sinais claros de que os processos e o impacto ambiental de uma empresa são gerenciados de forma eficaz. Além de demonstrar que esses elementos fazem parte do seu sistema de gestão corporativa, você precisa demonstrar que eles podem ser continuamente aprimorados. É por isso que as normas de gestão ambiental ISO 14001 foram estabelecidas.</p>
          <p>A ISO 14001 é semelhante à ISO 9000 em gestão da qualidade. Ambas se aplicam ao processo de produção de um produto, e não ao produto em si. Assim como na ISO 9000, a certificação é realizada por organizações terceirizadas, e não diretamente pela ISO. A norma de auditoria ISO 19011 se aplica à auditoria simultânea de conformidade com as normas 9000 e 14000.</p>
          <p>A Certificação MAEA possui as credenciais necessárias para que você obtenha a ISO 14001. Demonstrando seu comprometimento com a gestão do impacto ambiental da sua organização. Nossa certificação, reconhecida internacionalmente, permite que você atenda a todos os padrões de gestão ambiental da ISO 14001. Isso inclui minimizar o impacto ambiental das suas operações, como alterações adversas no ar, na água ou no solo. Além disso, cumprindo e aprimorando continuamente as leis, regulamentações e outros requisitos ambientais aplicáveis.</p>
          <p>A ISO 14001 é amplamente reconhecida como uma "norma genérica de sistema de gestão ambiental" que pode ser aplicada a qualquer organização, grande ou pequena, independentemente do seu produto ou serviço. A norma fornece orientação à organização para:</p>
          <ul className="list-disc ml-12 space-y-1">
            <li>Minimizar os efeitos nocivos ao meio ambiente causados pelas atividades empresariais; e</li>
            <li>Alcançar melhoria contínua do desempenho ambiental.</li>
          </ul>
          <h3 className="font-semibold mt-4">Benefícios</h3>
          <ul className="list-disc ml-12 space-y-1">
            <li>Padrão internacionalmente reconhecido e aceito</li>
            <li>Certificado formal credenciado que dá confiança aos clientes e às partes interessadas</li>
            <li>Pode ser facilmente integrado aos sistemas de gestão existentes</li>
            <li>Fornecimento de auditores ambientais qualificados</li>
            <li>Consistência na metodologia de auditoria</li>
          </ul>
          <h3 className="font-semibold mt-4">Por que escolher MAEA?</h3>
          <p>A Certificação MAEA ajudou muitas organizações ao redor do mundo a obter a certificação ISO 14001 de forma tranquila e eficiente. Para cada uma delas, fizemos mais do que emitir um certificado: fornecemos as ferramentas para minimizar os riscos para os negócios e o meio ambiente. Nossos serviços de auditoria terceirizada fornecerão a você a garantia independente que seus clientes e stakeholders exigem.</p>
        </div>
      )
    },
    {
      id: "ohsas18001",
      title: "OHSAS 18001 - Sistema de Gestão de Segurança e Saúde Ocupacional",
      icon: "fas fa-hard-hat",
      content: (
        <div className="text-blueGray-600 text-base space-y-4">
          <p><strong>Sistema de Gestão de Saúde e Segurança Ocupacional</strong></p>
          <p>Ajude a proteger os trabalhadores de perigos</p>
          <p>Em muitos setores, um sistema de gestão proativo e preventivo é essencial. Tal sistema enfatiza os fatores de controle de risco, identificando e avaliando a probabilidade de perigos no local de trabalho. O Sistema de Certificação OHSAS 18001 é uma norma de Saúde e Segurança Ocupacional (SSO) que atende a essa necessidade. Baseia-se na norma BSOHSAS 18001:2007, que permite que as organizações pratiquem o controle de risco responsável e aprimorem continuamente o desempenho em segurança e saúde para proteger sua força de trabalho.</p>
          <p>O grupo internacional de auditores da MAEA pode ajudá-lo a obter a certificação necessária, demonstrando assim sua determinação em aprimorar a saúde ocupacional e a gestão de riscos para seus funcionários. Com nossa experiência global, compreendemos todas as implicações legais que sua organização enfrenta, desde leis internacionais até regulamentações locais.</p>
          <p>Seja qual for a localização ou a cultura, você pode contar com a Certificação MAEA para ajudar a proteger seus funcionários. A OHSAS 18001 é uma especificação internacional de sistema de gestão de saúde e segurança ocupacional. Ela segue a estrutura da ISO 14001, exigindo alto comprometimento com o cumprimento da legislação, a prevenção de acidentes, a promoção da saúde e a melhoria contínua. A especificação OHSAS é aplicável a qualquer organização que deseje:</p>
          <ul className="list-disc ml-12 space-y-1">
            <li>Estabelecer um SGSSO para eliminar ou minimizar riscos para funcionários e outras partes interessadas que possam estar expostas a atividades com riscos de SST</li>
            <li>Garantir a conformidade com sua própria política de SST</li>
            <li>Demonstrar tal conformidade às suas partes interessadas</li>
            <li>Implementar, manter e melhorar continuamente um SGSSO</li>
            <li>Faça uma autodeterminação e declaração de conformidade com esta especificação OHSAS</li>
            <li>Buscar certificação independente de terceiros para seu sistema de gestão de SST</li>
          </ul>
          <h3 className="font-semibold mt-4">Benefícios</h3>
          <ul className="list-disc ml-12 space-y-1">
            <li>Padrão internacionalmente reconhecido e aceito</li>
            <li>Facilmente avaliado com sistemas de gestão existentes</li>
            <li>Auditores qualificados e treinados para vários sistemas</li>
            <li>Consistência na metodologia de auditoria</li>
            <li>Evita-se a duplicação de elementos semelhantes de cada norma</li>
          </ul>
          <h3 className="font-semibold mt-4">Por que escolher MAEA?</h3>
          <p>Com a MAEA Solutions como sua parceira de auditoria e certificação, você obterá muito mais do que um certificado. Você obterá ferramentas valiosas para reduzir a documentação, identificar economias de custos e evitar perdas de produção. Nossos especialistas experientes funcionam como uma extensão da sua equipe de gestão, ajudando você a construir um SGSSO forte e a promover uma cultura de segurança no trabalho.</p>
        </div>
      )
    },
    {
      id: "iso22000",
      title: "ISO 22000 - Sistema de Gestão da Segurança Alimentar",
      icon: "fas fa-apple-alt",
      content: (
        <div className="text-blueGray-600 text-base space-y-4">
          <p><strong>ISO 22000 - Sistema de Gestão da Segurança Alimentar</strong></p>
          <p>A ISO 22000:2005 é uma norma de gestão da segurança alimentar para organizações envolvidas na cadeia alimentar. Esta norma especifica os requisitos para um sistema de gestão da segurança alimentar, no qual uma organização na cadeia alimentar precisa demonstrar sua capacidade de controlar os perigos relacionados aos alimentos. Esta norma foi elaborada pelo Comitê Técnico ISO/TC 34, Produtos Alimentícios.</p>
          <p>A segurança alimentar está relacionada à presença de perigos de origem alimentar nos alimentos no momento do consumo. Como os perigos à segurança alimentar podem ocorrer em qualquer etapa da cadeia alimentar, o controle adequado em toda a cadeia alimentar é essencial. Assim, a segurança alimentar é garantida pelo esforço conjunto de todas as partes envolvidas na cadeia alimentar.</p>
          <p>Esta Norma Internacional especifica os requisitos para um sistema de gestão da segurança alimentar que combina os seguintes elementos-chave geralmente reconhecidos para garantir a segurança alimentar ao longo da cadeia alimentar, até o ponto de consumo final:</p>
          <ul className="list-disc ml-12 space-y-1">
            <li>Comunicação interativa</li>
            <li>Gerenciamento de sistema</li>
            <li>Programas pré-requisitos</li>
            <li>Princípios HACCP</li>
          </ul>
          <p>O principal objetivo desta norma é harmonizar globalmente os requisitos de gestão da segurança alimentar para empresas da cadeia alimentar. Destina-se especialmente à aplicação por organizações que buscam um sistema de gestão da segurança alimentar mais focado, coerente e integrado do que o normalmente exigido por lei. Exige que uma organização atenda a todos os requisitos estatutários e regulamentares aplicáveis à segurança alimentar por meio de seu sistema de gestão da segurança alimentar.</p>
          <p>Esta Norma Internacional integra os princípios do sistema de Análise de Perigos e Pontos Críticos de Controle (APPCC) e as etapas de aplicação desenvolvidas pela Comissão do Codex Alimentarius. Por meio de requisitos auditáveis, ela combina o plano APPCC com programas de pré-requisitos (PPRs). A análise de perigos é a chave para um sistema de gestão de segurança alimentar eficaz, visto que a realização de uma análise de perigos auxilia na organização do conhecimento necessário para estabelecer uma combinação eficaz de medidas de controle.</p>
          <h3 className="font-semibold mt-4">Benefícios</h3>
          <ul className="list-disc ml-12 space-y-1">
            <li>Reduza custos certificando apenas um padrão reconhecido internacionalmente.</li>
            <li>Minimize os riscos à segurança alimentar melhorando os processos internos e otimizando a produção.</li>
            <li>Conquiste a confiança do público e uma maior participação de clientes abordando proativamente as preocupações sobre segurança alimentar.</li>
            <li>Obtenha maior acesso aos mercados globais cumprindo as regulamentações de segurança alimentar</li>
          </ul>
        </div>
      )
    },
    {
      id: "haccp",
      title: "HACCP - Análise de Perigos e Pontos Críticos de Controle",
      icon: "fas fa-utensils",
      content: (
        <div className="text-blueGray-600 text-base space-y-4">
          <p><strong>HACCP - Análise de Perigos e Pontos Críticos de Controle</strong></p>
          <p>HACCP é a sigla para Análise de Perigos e Pontos Críticos de Controle. HACCP é um sistema/conceito de última geração para garantir a segurança alimentar. É um processo preventivo de garantia da qualidade, projetado para proporcionar maior controle e monitoramento durante as etapas críticas da cadeia de processamento de alimentos, e é aceito mundialmente. Compradores em diferentes partes do mundo frequentemente exigem a Certificação ou conformidade com o HACCP.</p>
          <p>A certificação MAEA fornece experiência no desenvolvimento e implementação de programas HACCP em diferentes indústrias de alimentos processados.</p>
          <h3 className="font-semibold mt-4">Benefícios do HACCP</h3>
          <ul className="list-disc ml-12 space-y-1">
            <li>Clientes, funcionários, acionistas e concorrentes desenvolvem respeito sustentável por uma organização que demonstra seu comprometimento com a segurança alimentar.</li>
            <li>Os custos operacionais caem à medida que o retrabalho diminui, a eficiência aumenta e as penalidades por não conformidade diminuem.</li>
            <li>É compatível com a implementação de sistemas de gestão da qualidade e é o sistema de escolha para Gestão da Segurança Alimentar.</li>
          </ul>
          <h3 className="font-semibold mt-4">Princípios do HACCP:</h3>
          <ul className="list-disc ml-12 space-y-1">
            <li>A implementação da análise de riscos</li>
            <li>Determinar Pontos Críticos de Controle (PCC). Para cada risco identificado.</li>
            <li>Estabelecer limites críticos, valores máximos e/ou mínimos, pelos quais os riscos biológicos, químicos e físicos podem ser controlados com a finalidade de prevenção pedagógica.</li>
            <li>Determinação de procedimentos/processos para monitoramento de CCPs</li>
            <li>Determinação de medidas corretivas caso o monitoramento mostre que o PCC não está dentro dos limites críticos.</li>
            <li>Estabelecer procedimentos/processos para procedimentos de verificação e certificação, e garantir que o sistema HACCP seja eficaz e funcione bem. As atividades de verificação devem incluir pessoas autorizadas empregadas na produção, a equipe HACCP.</li>
            <li>O estabelecimento e a gestão eficaz de registos e documentos</li>
          </ul>
        </div>
      )
    },
    {
      id: "iso27001",
      title: "ISO 27001 - Sistema de Gestão de Segurança da Informação",
      icon: "fas fa-shield-alt",
      content: (
        <div className="text-blueGray-600 text-base space-y-4">
          <p><strong>ISO 27001 - Sistema de Gestão de Segurança da Informação</strong></p>
          <p>Assim como outros ativos empresariais importantes, as informações precisam ser protegidas. A dependência de sistemas de informação deixa uma organização vulnerável a ameaças à segurança, entre elas, invasões, perda de dados, quebra de confidencialidade e até terrorismo.</p>
          <p>Perda de informações, roubo de dados confidenciais e danos a documentos críticos podem ter um impacto severo nos seus negócios. Por isso, é essencial proteger todos os sistemas que armazenam suas informações valiosas com um Sistema de Gestão de Segurança da Informação (SGSI).</p>
          <p>A ISO 27001 fornece uma estrutura para a implementação de um SGSI. A Certificação MAEA fornece a certificação necessária para obtê-la.</p>
          <p><strong>Confidencialidade, Integridade e Disponibilidade:</strong> essas são as três dimensões da segurança da informação. Nossos especialistas podem garantir que você as aborde e proteja seus ativos de informação, facilitando o gerenciamento, a mensuração e o aprimoramento de tudo.</p>
          <h3 className="font-semibold mt-4">Benefícios da Certificação ISO 27001</h3>
          <ul className="list-disc ml-12 space-y-1">
            <li>Vantagem competitiva - cada vez mais as organizações com as quais você faz negócios vão querer saber o quão seguros são seus sistemas de TI.</li>
            <li>Demonstrando sua capacidade - você poderá fazer uma declaração pública de capacidade sem revelar seus processos de segurança.</li>
            <li>Minimizar riscos - garante que haja controles em vigor para reduzir o risco de ameaças à segurança e evitar que as fraquezas do sistema sejam exploradas.</li>
            <li>Conformidade com a legislação - a conformidade fornece um processo pelo qual a legislação existente e potencial é identificada.</li>
            <li>Padrão reconhecido globalmente</li>
            <li>Potencial redução nos prêmios de seguro</li>
            <li>A segurança se torna parte integrante dos processos de negócios</li>
          </ul>
        </div>
      )
    },
    {
      id: "iso20000",
      title: "ISO 20000 - Sistema de Gestão de Serviços de TI",
      icon: "fas fa-network-wired",
      content: (
        <div className="text-blueGray-600 text-base space-y-4">
          <p><strong>ISO/IEC 20000 - Gestão de Serviços de Tecnologia da Informação</strong></p>
          <p>A ISO 20000 é a primeira norma internacional do mundo para Gestão de Serviços de TI. A ISO/IEC 20000 é uma norma internacional de TI que permite às empresas demonstrar excelência e comprovar as melhores práticas em gestão de TI. A norma garante que as empresas alcancem benchmarks baseados em evidências para aprimorar continuamente a prestação de serviços de TI. A ISO/IEC 20000 foi lançada em 2005 com base na estrutura de melhores práticas da biblioteca de infraestrutura de TI (ITIL®) e atualizada em 2011.</p>
          <p>A norma destina-se a organizações que fornecem serviços de TI gerenciados, como suporte de infraestrutura e/ou aplicações; isso pode ser feito tanto para entrega externa, como para clientes que terceirizaram seu suporte de TI, quanto para equipes internas de TI. Um certificado emitido por um registrador terceirizado demonstra que seu sistema de gestão de TI foi certificado de acordo com os requisitos da ISO 20000. A implementação da ISO 20000-1 por meio da criação de processos internos proporciona confiança aos clientes quanto à capacidade de entrega por meio do uso da infraestrutura de TI.</p>
          <p>A ISO/IEC 20000-1:2005 é a especificação formal e define os requisitos para que uma organização forneça serviços gerenciados de qualidade aceitável para seus clientes.</p>
          <p><strong>O escopo inclui:</strong></p>
          <ul className="list-disc ml-12 space-y-1">
            <li>Requisitos para um sistema de gestão</li>
            <li>Planejamento e implementação de gerenciamento de serviços</li>
            <li>Planejamento e implementação de serviços novos ou alterados</li>
            <li>Processo de prestação de serviços</li>
            <li>Processos de relacionamento</li>
            <li>Processos de resolução</li>
            <li>Processos de controle</li>
            <li>Processos de liberação.</li>
          </ul>
          <h3 className="font-semibold mt-4">Benefícios da certificação ISO 20000</h3>
          <ul className="list-disc ml-12 space-y-1">
            <li>Alinhamento de serviços de tecnologia da informação e estratégia de negócios.</li>
            <li>Criação de uma estrutura formal para projetos atuais de melhoria de serviços</li>
            <li>Fornece uma comparação de tipo de referência com as melhores práticas</li>
            <li>Cria vantagem competitiva por meio da promoção de serviços consistentes e econômicos.</li>
            <li>Ao exigir propriedade e responsabilidade em todos os níveis, ele cria um ethos e uma cultura progressistas.</li>
            <li>Oferece suporte ao "intercâmbio" de prestadores de serviços e funcionários em virtude da criação de processos operacionais interempresariais.</li>
            <li>Redução do risco e, portanto, do custo em termos de recebimento de serviços externos</li>
            <li>Por meio da criação de uma abordagem consistente e padrão, auxilia grandes mudanças organizacionais.</li>
            <li>Reputação e percepção aprimoradas</li>
            <li>Mudança fundamental para processos proativos em vez de reativos</li>
          </ul>
        </div>
      )
    },
    {
      id: "iso13485",
      title: "ISO 13485 - Gestão da Qualidade de Dispositivos Médicos",
      icon: "fas fa-stethoscope",
      content: (
        <div className="text-blueGray-600 text-base space-y-4">
          <p><strong>ISO 13485 - Sistema de Gestão da Qualidade (Dispositivos Médicos)</strong></p>
          <p>A norma ISO 13485 é uma solução eficaz para atender aos requisitos abrangentes de um SGQ. A adoção da ISO 13485 fornece uma base prática para que os fabricantes atendam às diretivas, regulamentações e responsabilidades de dispositivos médicos, além de demonstrar compromisso com a segurança e a qualidade dos dispositivos médicos.</p>
          <p>Os certificados ISO 13485 são conhecidos e confiáveis no setor de dispositivos médicos por autoridades, fornecedores e fabricantes do mundo todo.</p>
          <p>A ISO 13485 é uma norma independente de SGQ, derivada da série de normas de gestão da qualidade ISO 9000, reconhecida e aceita internacionalmente. A ISO 13485 adapta o modelo baseado em processos da ISO 9000 para um ambiente regulamentado de fabricação de dispositivos médicos. Embora a ISO 13485 seja baseada nos conceitos do modelo de processos da ISO 9001: Planejar, Executar, Verificar, Agir, ela foi projetada para a conformidade regulatória. É de natureza mais prescritiva e exige um sistema de gestão da qualidade mais bem documentado.</p>
          <p>A ISO 13485 foi elaborada para auxiliar os fabricantes de dispositivos médicos na concepção de sistemas de gestão da qualidade que estabeleçam e mantenham a eficácia de seus processos. Ela garante o projeto, o desenvolvimento, a produção, a instalação e a entrega consistentes de dispositivos médicos seguros para a finalidade pretendida.</p>
          <h3 className="font-semibold mt-4">Benefícios da Certificação ISO 13485</h3>
          <ul className="list-disc ml-12 space-y-1">
            <li>Aumente o acesso a mais mercados em todo o mundo com a certificação</li>
            <li>Descreva como revisar e melhorar processos em sua organização</li>
            <li>Aumente a eficiência, reduza custos e monitore o desempenho da cadeia de suprimentos</li>
            <li>Demonstre que você produz dispositivos médicos mais seguros e eficazes</li>
            <li>Atender aos requisitos regulamentares e às expectativas dos clientes</li>
          </ul>
        </div>
      )
    },
    {
      id: "iso29001",
      title: "ISO 29001 - Gestão da Qualidade para o Setor de Petróleo, Petroquímica e Gás Natural",
      icon: "fas fa-industry",
      content: (
        <div className="text-blueGray-600 text-base space-y-4">
          <p><strong>ISO 29001 – Sistemas de gestão da qualidade específicos do setor</strong></p>
          <p>A ISO/TS 29001 define os requisitos do sistema de gestão da qualidade para o projeto, desenvolvimento, produção, instalação e serviço de produtos para as indústrias de petróleo, petroquímica e gás natural.</p>
          <p>Desenvolvida como resultado direto de uma parceria entre a ISO e a indústria internacional de petróleo e gás (liderada pelo American Petroleum Institute - API), a ISO 29001 foca especificamente na cadeia de fornecimento de petróleo e gás.</p>
          <p>A norma ISO/TS 29001 é baseada na ISO 9001 e incorpora requisitos suplementares que enfatizam a prevenção de defeitos e a redução de variação e desperdício de prestadores de serviços.</p>
          <p>Esses requisitos foram desenvolvidos separadamente para garantir que sejam claros e auditáveis. Eles também proporcionam consistência global e melhor garantia na qualidade do fornecimento de bens e serviços dos fornecedores. Isso é particularmente importante quando a falha de bens ou serviços tem graves implicações para as empresas e indústrias envolvidas. Esta norma se aplica a todas as organizações que atuam na cadeia de suprimentos da indústria de petróleo e gás. A certificação ISO/TS 29001 garante padronização e aprimoramento no setor.</p>
          <h3 className="font-semibold mt-4">Benefícios da Certificação ISO 29001</h3>
          <ul className="list-disc ml-12 space-y-1">
            <li>Obtenha sua licença para negociar para aumentar contratos e perspectivas</li>
            <li>Demonstre seu comprometimento com as melhores práticas do setor para as partes interessadas</li>
            <li>Melhore a maneira como você gerencia riscos e melhore o desempenho</li>
            <li>Simplifique suas operações para melhorar a qualidade e reduzir o desperdício</li>
            <li>Uma melhor comunicação e avaliação regular levam à melhoria contínua</li>
          </ul>
        </div>
      )
    },
    {
      id: "iso22716",
      title: "ISO 22716 - Cosméticos GMP",
      icon: "fas fa-flask",
      content: (
        <div className="text-blueGray-600 text-base space-y-4">
          <p><strong>ISO 22716 – Cosméticos GMP</strong></p>
          <p>Com a crescente globalização do mercado, a segurança dos produtos cosméticos é muito importante para fabricantes e fornecedores. Diversos padrões surgiram no mercado nacional e internacional para aprimorar a qualidade e a segurança dos produtos cosméticos, gerando requisitos para fabricantes, fornecedores, atacadistas e varejistas.</p>
          <p>Em resumo, a ISO 22716 oferece uma abordagem abrangente para um sistema de gestão da qualidade para empresas envolvidas na fabricação, teste, embalagem, armazenamento e transporte de produtos cosméticos acabados. A norma descreve a segurança dos produtos cosméticos e a melhoria dos negócios para atender à demanda do consumidor.</p>
          <p>Hoje em dia, os consumidores estão se tornando mais sensíveis e, por isso, mais preocupados com a segurança dos produtos cosméticos que utilizam, devido aos altos efeitos de cosméticos de baixa qualidade no corpo, como alergias, queimaduras, problemas de pele e infecções oculares. Mesmo poucos perfumes, ingredientes e conservantes utilizados em cosméticos podem causar reações alérgicas. Cada ingrediente é importante em cosméticos. A ISO 22716 representa um passo importante na concretização de uma norma globalmente reconhecida para a segurança de produtos cosméticos. Esta norma foi elaborada pelo Comitê Técnico (TC) 217 da ISO e pelo Grupo de Trabalho (WG) 6 entre 2002 e 2006. O documento final foi publicado em novembro de 2007.</p>
          <h3 className="font-semibold mt-4">Benefícios da Certificação ISO 22716</h3>
          <ul className="list-disc ml-12 space-y-1">
            <li>Integra os requisitos típicos de Boas Práticas de Fabricação de qualidade de produtos e processos com outras orientações de qualidade, por exemplo, conforme estabelecido nos pré-requisitos da ISO 9001;</li>
            <li>Permite fácil implementação em organizações de todos os tamanhos e níveis de complexidade</li>
            <li>Forma uma base internacionalmente aceita para conformidade de qualidade e segurança na cadeia de suprimentos de produtos cosméticos</li>
            <li>Promove a conformidade legal conforme adotada por reguladores em todo o mundo</li>
            <li>Controla e reduz os riscos dos produtos cosméticos e promove a melhoria contínua em toda a cadeia de suprimentos</li>
          </ul>
        </div>
      )
    },
    {
      id: "iso50001",
      title: "ISO 50001 - Sistema de Gestão de Energia",
      icon: "fas fa-bolt",
      content: (
        <div className="text-blueGray-600 text-base space-y-4">
          <p><strong>ISO 50001 - Sistema de Gestão de Energia</strong></p>
          <p>O uso eficiente de energia ajuda as organizações a economizar dinheiro, além de contribuir para a conservação de recursos e o combate às mudanças climáticas. A ISO 50001 auxilia organizações de todos os setores a usar energia de forma mais eficiente, por meio do desenvolvimento de um sistema de gestão de energia (SGE).</p>
          <p>A ISO 50001 é baseada no modelo de sistema de gestão de melhoria contínua também usado por outras normas conhecidas, como a ISO 9001 ou a ISO 14001. Isso torna mais fácil para as organizações integrarem a gestão de energia em seus esforços gerais para melhorar a qualidade e a gestão ambiental.</p>
          <p>A ISO 50001 descreve a melhor maneira de alcançar a eficiência energética, independentemente da natureza do seu negócio. A norma ajudará você a atingir suas metas ambientais e de redução de carbono como parte de um desempenho energético aprimorado. Ela mostra como adotar uma abordagem estruturada para medir e monitorar a quantidade de energia que você consome, ajudando você a obter mais com menos. A ISO 50001 abrirá caminho para um desempenho aprimorado, contas de energia mais baixas e emissões de carbono reduzidas – tudo isso simultaneamente.</p>
          <p>Esta nova norma estabelecerá uma estrutura internacional para auxiliar na gestão do fornecimento, uso e consumo de energia por organizações industriais, comerciais ou institucionais, incluindo práticas de medição, documentação e relatórios, além de práticas de projeto e aquisição de equipamentos, sistemas e processos que utilizam energia. A norma ISO 50001 para gestão de energia é aplicável a todos os aspectos que impactam o uso de energia, e isso pode ser monitorado e influenciado por uma organização.</p>
          <h3 className="font-semibold mt-4">Benefícios da Certificação ISO 50001</h3>
          <ul className="list-disc ml-12 space-y-1">
            <li>Identifique e gerencie os riscos que envolvem seu futuro fornecimento de energia</li>
            <li>Medir e monitorar o uso de energia para identificar onde melhorar a eficiência</li>
            <li>Melhore o desempenho geral para reduzir o consumo de energia e as contas</li>
            <li>Reduzir as emissões de carbono e cumprir as metas de redução do governo</li>
            <li>Demonstrar credenciais ambientais para aumentar as oportunidades de licitação</li>
          </ul>
        </div>
      )
    },
    {
      id: "iso10002",
      title: "ISO 10002 - Diretrizes para Tratamento de Reclamações em Organizações",
      icon: "fas fa-comments",
      content: (
        <div className="text-blueGray-600 text-base space-y-4">
          <p><strong>ISO 10002 - Satisfação do Cliente. Tratamento de Reclamações</strong></p>
          <p>Gerencie as reclamações dos clientes de forma eficaz e você terá mais chances de atender às expectativas deles também. E você pode transformar rapidamente as reclamações dos clientes em satisfação do cliente – especialmente quando encara as reclamações como uma oportunidade de melhorar o que você faz e como o faz. A ISO 10002 pode ajudá-lo a alcançar isso, independentemente do tamanho ou da natureza do seu negócio. O sistema de gestão de reclamações de clientes é um requisito básico, mas essencial, para qualquer empresa – especialmente aquelas que desejam se tornar e permanecer bem-sucedidas.</p>
          <p>Os clientes esperam cada vez mais do serviço que você oferece. E seus concorrentes estão se esforçando cada vez mais para atender a essas expectativas. Você também pode com a ISO 10002, a norma internacional para satisfação do cliente. Ela fornece diretrizes para implementar seu próprio sistema de gestão de reclamações, ajudando você a identificar reclamações, suas causas e como eliminá-las. A ISO 10002 também permitirá que você identifique áreas em sua empresa nas quais pode melhorar e, eventualmente, eliminar a causa das reclamações. A norma descreve controles e processos de gestão que ajudam você a lidar com as reclamações dos clientes de forma mais eficaz e eficiente, garantindo que mais clientes fiquem satisfeitos com o serviço que você oferece.</p>
          <p>A ISO 10002:2004 aborda os seguintes aspectos do tratamento de reclamações:</p>
          <ul className="list-disc ml-12 space-y-1">
            <li>Aumentar a satisfação do cliente criando um ambiente focado no cliente, aberto a feedback (incluindo reclamações), resolvendo quaisquer reclamações recebidas e aprimorando a capacidade da organização de melhorar seu produto e atendimento ao cliente;</li>
            <li>Envolvimento e comprometimento da alta administração por meio da aquisição e implantação adequadas de recursos, incluindo treinamento de pessoal;</li>
            <li>Reconhecer e atender às necessidades e expectativas dos reclamantes;</li>
            <li>Fornecer aos reclamantes um processo de reclamações aberto, eficaz e fácil de usar;</li>
            <li>Analisar e avaliar reclamações para melhorar a qualidade do produto e do atendimento ao cliente;</li>
            <li>Auditoria do processo de tratamento de reclamações;</li>
            <li>Analisar a eficácia e a eficiência do processo de tratamento de reclamações.</li>
          </ul>
          <h3 className="font-semibold mt-4">Benefícios da Certificação ISO 10002</h3>
          <ul className="list-disc ml-12 space-y-1">
            <li>Alcançar eficiência operacional para identificar tendências e causas de reclamações</li>
            <li>Resolva mais reclamações adotando uma abordagem mais focada no cliente</li>
            <li>Envolva a equipe com novas oportunidades de treinamento em atendimento ao cliente</li>
            <li>Integre a ISO 10002 com a ISO 9001 para melhorar a eficiência geral</li>
            <li>Monitore e melhore continuamente seu processo de tratamento de reclamações.</li>
          </ul>
        </div>
      )
    }
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
                  Certificação ISO
                </h1>
                <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
                  Conheça as principais normas ISO e sistemas de gestão certificados pela MAEA Solutions.
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
            {isos.map((iso) => (
              <div id={iso.id} key={iso.id} className="w-full max-w-6xl mx-auto bg-gradient-to-br from-white via-white to-white rounded-2xl p-0 mb-6 shadow-lg border border-white transition-all duration-300">
                <button
                  className="flex items-center w-full px-6 py-5 bg-white rounded-xl border border-maea-blue shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none text-left group"
                  onClick={() => setOpenISO(openISO === iso.id ? null : iso.id)}
                  aria-expanded={openISO === iso.id}
                >
                  <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-maea-blue text-white text-2xl mr-4">
                    <i className={iso.icon}></i>
                  </span>
                  <span className="font-bold text-lg text-blueGray-800 flex-1">{iso.title}</span>
                  <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-maea-blue text-white text-2xl ml-4 transition-all duration-200"> <i className={openISO === iso.id ? 'fas fa-minus' : 'fas fa-plus'}></i> </span>
                </button>
                {openISO === iso.id && (
                  <div className="px-8 pb-8 pt-2 animate-fade-in">
                    <div className="text-blueGray-600 text-base space-y-4">
                      {iso.content}
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
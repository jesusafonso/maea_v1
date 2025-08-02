/*eslint-disable*/
import React from "react";
import { useIntl } from "react-intl";

export default function Planos() {
  const intl = useIntl();

  const planos = [
    {
      id: "standard",
      nome: "Standard",
      icone: "fas fa-star",
      cor: "text-yellow-500",
      bgCor: "bg-yellow-50",
      preco: "A partir de €2.500",
      descricao: "Ideal para pequenas empresas que estão a começar o processo de certificação ISO.",
      servicos: [
        "Certificação ISO 9001 (Qualidade)",
        "Certificação ISO 14001 (Ambiente)",
        "Consultoria básica de implementação",
        "Auditoria inicial",
        "Documentação básica",
        "Suporte por email"
      ],
      destaque: false
    },
    {
      id: "premium",
      nome: "Premium",
      icone: "fas fa-crown",
      cor: "text-purple-500",
      bgCor: "bg-purple-50",
      preco: "A partir de €4.500",
      descricao: "Solução completa para empresas de médio porte com múltiplas certificações.",
      servicos: [
        "Todas as certificações Standard",
        "Certificação OHSAS 18001",
        "Certificação ISO 45001",
        "Consultoria avançada",
        "Auditorias regulares",
        "Documentação completa",
        "Suporte telefónico",
        "Formação da equipa"
      ],
      destaque: true
    },
    {
      id: "ultimate",
      nome: "Ultimate",
      icone: "fas fa-gem",
      cor: "text-blue-500",
      bgCor: "bg-blue-50",
      preco: "A partir de €7.500",
      descricao: "Pacote empresarial para grandes organizações com necessidades complexas.",
      servicos: [
        "Todas as certificações Premium",
        "Certificação ISO 22000 (Segurança Alimentar)",
        "Certificação HACCP",
        "Certificação ISO 27001 (Segurança da Informação)",
        "Consultoria dedicada",
        "Auditorias mensais",
        "Gestão de projetos completa",
        "Suporte 24/7",
        "Formação executiva",
        "Relatórios personalizados"
      ],
      destaque: false
    },
    {
      id: "advanced",
      nome: "Advanced",
      icone: "fas fa-rocket",
      cor: "text-green-500",
      bgCor: "bg-green-50",
      preco: "Sob consulta",
      descricao: "Solução personalizada para indústrias específicas e necessidades únicas.",
      servicos: [
        "Todas as certificações Ultimate",
        "Certificação ISO 13485 (Dispositivos Médicos)",
        "Certificação ISO 29001 (Petróleo e Gás)",
        "Certificação ISO 20000 (TI)",
        "Consultoria executiva",
        "Auditorias semanais",
        "Gestão de crise",
        "Suporte VIP",
        "Formação customizada",
        "Análise de risco avançada",
        "Implementação completa"
      ],
      destaque: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-green-600 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Planos de Certificação ISO
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Escolha o plano ideal para a sua empresa e obtenha as certificações ISO necessárias 
              para destacar-se no mercado e melhorar a eficiência operacional.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Solicitar Orçamento
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Falar com Especialista
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Planos Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Escolha o Plano Ideal
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Oferecemos soluções personalizadas para empresas de todos os tamanhos, 
              desde startups até grandes corporações.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {planos.map((plano) => (
              <div
                key={plano.id}
                className={`relative ${plano.bgCor} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                  plano.destaque ? 'ring-4 ring-purple-300 scale-105' : ''
                }`}
              >
                {plano.destaque && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Mais Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <i className={`${plano.icone} ${plano.cor} text-4xl mb-4`}></i>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {plano.nome}
                  </h3>
                  <p className="text-3xl font-bold text-gray-900 mb-4">
                    {plano.preco}
                  </p>
                  <p className="text-gray-600 mb-6">
                    {plano.descricao}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plano.servicos.map((servico, index) => (
                    <li key={index} className="flex items-start">
                      <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                      <span className="text-gray-700">{servico}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  plano.destaque 
                    ? 'bg-purple-600 text-white hover:bg-purple-700' 
                    : 'bg-gray-800 text-white hover:bg-gray-900'
                }`}>
                  Escolher {plano.nome}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefícios Section */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Benefícios das Certificações ISO
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              As certificações ISO trazem inúmeros benefícios para a sua empresa, 
              desde melhorias na eficiência até reconhecimento internacional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <i className="fas fa-chart-line text-blue-500 text-3xl mb-4"></i>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Melhoria da Eficiência
              </h3>
              <p className="text-gray-600">
                Processos otimizados e redução de custos operacionais através 
                da implementação de sistemas de gestão eficazes.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <i className="fas fa-globe text-green-500 text-3xl mb-4"></i>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Reconhecimento Internacional
              </h3>
              <p className="text-gray-600">
                Acesso a mercados internacionais e aumento da credibilidade 
                junto de clientes e parceiros comerciais.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <i className="fas fa-shield-alt text-red-500 text-3xl mb-4"></i>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Gestão de Riscos
              </h3>
              <p className="text-gray-600">
                Identificação e mitigação proativa de riscos, garantindo 
                a continuidade dos negócios e proteção dos stakeholders.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <i className="fas fa-users text-purple-500 text-3xl mb-4"></i>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Satisfação dos Clientes
              </h3>
              <p className="text-gray-600">
                Melhoria da qualidade dos produtos e serviços, resultando 
                em maior satisfação e fidelização dos clientes.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <i className="fas fa-leaf text-green-500 text-3xl mb-4"></i>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Sustentabilidade
              </h3>
              <p className="text-gray-600">
                Compromisso com práticas sustentáveis e responsabilidade 
                ambiental, alinhado com as expectativas do mercado.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <i className="fas fa-trophy text-yellow-500 text-3xl mb-4"></i>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Vantagem Competitiva
              </h3>
              <p className="text-gray-600">
                Diferenciação no mercado e aumento da competitividade 
                através de certificações reconhecidas globalmente.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Pronto para Começar?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Entre em contacto connosco para uma consulta gratuita e descubra 
            como podemos ajudar a sua empresa a obter as certificações ISO necessárias.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Agendar Consulta
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Ver Casos de Sucesso
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 
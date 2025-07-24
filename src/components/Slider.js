import React, { useState, useEffect } from "react";
import { useIntl } from "react-intl";

// Importar imagens
import f1Image from "../assets/img/Consultoria_empresarial.jpg";
import f2Image from "../assets/img/Certificacao_ISO.jpg";
import f3Image from "../assets/img/sustentabilidade_responsabilidade.jpg";
import f4Image from "../assets/img/Treinamento_corporativos.jpg";
import f5Image from "../assets/img/Projetos_Setor_Petrolífero.jpg";

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intl = useIntl();
  
  const slides = [
    {
      image: f1Image,
      title: intl.formatMessage({id: "slider_1_title"}),
      subtitle: intl.formatMessage({id: "slider_1_subtitle"}),
      description: intl.formatMessage({id: "slider_1_desc"}),
      cta: intl.formatMessage({id: "slider_1_cta"}),
      ctaLink: "/business-consulting-formacoes#business_consulting",
      icon: "fas fa-briefcase"
    },
    {
      image: f2Image,
      title: intl.formatMessage({id: "slider_2_title"}),
      subtitle: intl.formatMessage({id: "slider_2_subtitle"}),
      description: intl.formatMessage({id: "slider_2_desc"}),
      cta: intl.formatMessage({id: "slider_2_cta"}),
      ctaLink: "/certificacao-iso",
      icon: "fas fa-certificate"
    },
    {
      image: f3Image,
      title: intl.formatMessage({id: "slider_3_title"}),
      subtitle: intl.formatMessage({id: "slider_3_subtitle"}),
      description: intl.formatMessage({id: "slider_3_desc"}),
      cta: intl.formatMessage({id: "slider_3_cta"}),
      ctaLink: "/solucoes-consultoria#gestao_ambiental",
      icon: "fas fa-leaf"
    },
    {
      image: f4Image,
      title: intl.formatMessage({id: "slider_4_title"}),
      subtitle: intl.formatMessage({id: "slider_4_subtitle"}),
      description: intl.formatMessage({id: "slider_4_desc"}),
      cta: intl.formatMessage({id: "slider_4_cta"}),
      ctaLink: "/treinamento",
      icon: "fas fa-chalkboard-teacher"
    },
    {
      image: f5Image,
      title: intl.formatMessage({id: "slider_5_title"}),
      subtitle: intl.formatMessage({id: "slider_5_subtitle"}),
      description: intl.formatMessage({id: "slider_5_desc"}),
      cta: intl.formatMessage({id: "slider_5_cta"}),
      ctaLink: "/solucoes-consultoria#gestao_projetos",
      icon: "fas fa-hard-hat"
    }
  ];

  useEffect(() => {
    if (isPaused) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000); // Muda slide a cada 6 segundos

    return () => clearInterval(timer);
  }, [slides.length, isPaused]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const pauseSlider = () => setIsPaused(true);
  const resumeSlider = () => setIsPaused(false);

  return (
    <div 
      className="relative h-screen overflow-hidden"
      onMouseEnter={pauseSlider}
      onMouseLeave={resumeSlider}
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1500 ${
            index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transform transition-transform duration-10000"
            style={{
              backgroundImage: `url(${slide.image})`,
              transform: index === currentSlide ? "scale(1.1)" : "scale(1)"
            }}
          >
            {/* Overlay escuro com gradiente */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
            
            {/* Conteúdo do slide */}
            <div className="relative z-10 flex items-center justify-center h-full">
              <div className="text-center text-white px-4 max-w-5xl mx-auto">
                {/* Títulos */}
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight animate-fade-in">
                  {slide.title}
                </h1>
                <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold mb-6 text-blue-300 animate-fade-in-delay">
                  {slide.subtitle}
                </h2>
                
                {/* Descrição */}
                <p className="text-base md:text-lg lg:text-xl max-w-4xl mx-auto mb-8 leading-relaxed animate-fade-in-delay-2">
                  {slide.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Botões de navegação melhorados */}
      <button
        onClick={goToPrevious}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-4 rounded-full transition-all duration-300 z-20 hover:scale-110"
        aria-label={intl.formatMessage({ id: "slider_prev" })}
      >
        <i className="fas fa-chevron-left text-2xl"></i>
      </button>
      
      <button
        onClick={goToNext}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-4 rounded-full transition-all duration-300 z-20 hover:scale-110"
        aria-label={intl.formatMessage({ id: "slider_next" })}
      >
        <i className="fas fa-chevron-right text-2xl"></i>
      </button>

      {/* Indicadores melhorados */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-4 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white scale-125 shadow-lg"
                : "bg-white/50 hover:bg-white/75 hover:scale-110"
            }`}
            aria-label={`${intl.formatMessage({ id: "slider_go_to" })} ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-20">
        <div 
          className="h-full bg-white transition-all duration-100 ease-linear"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        ></div>
      </div>

      {/* Overlay de gradiente na parte inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>
    </div>
  );
} 
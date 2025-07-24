import React from "react";

const phoneNumber = "+244994220022"; // Substitua pelo número desejado
const message = encodeURIComponent("Olá! Gostaria de mais informações.");
const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, "")}?text=${message}`;

export default function FloatingButton({
  href,
  icon,
  bgColor = "bg-green-500 hover:bg-[#5faee3]",
  title = "",
  className = "",
  style = {},
  target = "_blank",
  rel = "noopener noreferrer",
  onClick
}) {
  return (
    <a
      href={onClick ? undefined : href}
      target={onClick ? undefined : target}
      rel={onClick ? undefined : rel}
      className={`fixed z-50 text-white shadow-lg flex items-center justify-center transition-all duration-300 animate-bounce rounded-full ${bgColor} ${className}`}
      style={{ width: '48px', height: '48px', right: style.right, bottom: style.bottom, ...style, minWidth: '48px', minHeight: '48px', maxWidth: '48px', maxHeight: '48px', borderRadius: '50%' }}
      title={title}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {icon}
    </a>
  );
} 
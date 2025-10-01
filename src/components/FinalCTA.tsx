import React from 'react';
import { ArrowRight, Clock, Star } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#012840] via-[#01375a] to-[#012840] relative overflow-hidden luxury-texture">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-6 h-6 bg-[#CBA135] rounded-full opacity-40 floating-particle shadow-lg shadow-[#CBA135]/50"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-[#E5C558] rounded-full opacity-60 floating-particle shadow-lg shadow-[#E5C558]/50" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-8 h-8 bg-[#CBA135] rounded-full opacity-30 floating-particle shadow-lg shadow-[#CBA135]/50" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-2/3 right-1/4 w-4 h-4 bg-[#E5C558] rounded-full opacity-50 floating-particle shadow-lg shadow-[#E5C558]/50" style={{animationDelay: '1s'}}>
          <div className="w-full h-full bg-[#CBA135] rounded-full animate-ping"></div>
        </div>
        
        {/* Glow effects */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-[#CBA135] rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#E5C558] rounded-full blur-3xl opacity-15"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Pre-title */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <Star className="w-8 h-8 text-[#CBA135] animate-pulse" />
            <span className="font-body text-[#CBA135] font-bold text-xl uppercase tracking-wide">
             NÃO PERCA ESSA OPORTUNIDADE
            </span>
            <Star className="w-8 h-8 text-[#CBA135] animate-pulse" />
          </div>

          {/* Main Title */}
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            <span className="block">Formação de</span>
            <span className="block text-[#CBA135]">Líderes e Gerentes</span>
            <span className="block">de Farmácia</span>
          </h2>

          {/* Subtitle */}
          <p className="font-body text-2xl md:text-3xl text-gray-300 mb-12 font-light">
            Comece agora e garante sua vaga presencial
          </p>

          {/* Benefits highlight */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-[#CBA135]/50 hover:bg-white/15 transition-all duration-300">
              <div className="font-display text-[#CBA135] font-bold text-lg mb-2">✓ Curso Presencial</div>
              <p className="font-body text-gray-300">23 e 24 de outubro</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-[#CBA135]/50 hover:bg-white/15 transition-all duration-300">
              <div className="font-display text-[#CBA135] font-bold text-lg mb-2">✓ Mentorias Incluídas</div>
              <p className="font-body text-gray-300">3 meses de acompanhamento</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-[#CBA135]/50 hover:bg-white/15 transition-all duration-300">
              <div className="font-display text-[#CBA135] font-bold text-lg mb-2">✓ Certificado Oficial</div>
              <p className="font-body text-gray-300">Comprove sua especialização</p>
            </div>
          </div>

          {/* Urgency banner */}
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-6 mb-12 border-2 border-red-500/70 shadow-2xl">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Clock className="w-8 h-8 text-white animate-pulse" />
              <h3 className="font-display text-2xl font-bold text-white">VAGAS LIMITADAS - ÚLTIMOS DIAS!</h3>
              <Clock className="w-8 h-8 text-white animate-pulse" />
            </div>
            <p className="font-body text-red-100 text-lg font-semibold">
              Não perca esta oportunidade única de transformar sua carreira e sua farmácia
            </p>
          </div>

          {/* Main CTA Button */}
          <div className="mb-12">
            <a
              href="https://api.whatsapp.com/send?phone=556294596894&text=Tenho%20interesse%20em%20saber%20mais."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex premium-button bg-gradient-to-r from-[#CBA135] to-[#E5C558] hover:from-[#E5C558] hover:to-[#CBA135] text-white font-bold py-6 px-16 rounded-full text-2xl md:text-3xl transition-all duration-500 transform hover:scale-105 shadow-2xl shadow-[#CBA135]/60 hover:shadow-[#CBA135]/80 items-center gap-4 mx-auto font-body"
            >
              <span>Comprar Agora</span>
              <ArrowRight className="w-8 h-8 group-hover:translate-x-1 transition-transform duration-500" />
            </a>
            
            <p className="font-body text-gray-300 mt-4 text-lg">
              Pagamento 100% seguro • Pix, Boleto ou Cartão em até 12x
            </p>
          </div>

          {/* Security badges */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-gray-300">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs">✓</span>
              </div>
              <span className="font-body">Compra Segura</span>
            </div>
            
            <div className="hidden md:block w-1 h-6 bg-gray-600"></div>
            
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs">✓</span>
              </div>
              <span className="font-body">Garantia de 7 dias</span>
            </div>
            
            <div className="hidden md:block w-1 h-6 bg-gray-600"></div>
            
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs">✓</span>
              </div>
              <span className="font-body">Suporte Especializado</span>
            </div>
          </div>

          {/* Final message */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <p className="font-display text-xl text-[#CBA135] font-semibold italic">
              "Transforme sua liderança, transforme sua farmácia, transforme seu futuro"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
import React from 'react';
import { Play, MessageCircle, Calendar, MapPin, Banknote } from 'lucide-react';

const Hero = () => {
  return (
    <section
      className="
        relative isolate 
        bg-gradient-to-br from-[#012840] to-[#01375a] 
        min-h-[88vh] sm:min-h-[92vh]
        flex items-center 
        overflow-hidden luxury-texture
        pt-20 md:pt-24 pb-24 md:pb-32
      "
    >
      {/* Animated particles background */}
      <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-[#CBA135] rounded-full opacity-60 floating-particle shadow-lg shadow-[#CBA135]/50"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-[#E5C558] rounded-full opacity-80 floating-particle shadow-lg shadow-[#E5C558]/50" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-[#CBA135] rounded-full opacity-40 floating-particle shadow-lg shadow-[#CBA135]/50" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-2/3 right-1/4 w-2.5 h-2.5 bg-[#E5C558] rounded-full opacity-70 floating-particle shadow-lg shadow-[#E5C558]/50" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/5 right-1/5 w-1.5 h-1.5 bg-[#CBA135] rounded-full opacity-90 floating-particle shadow-lg shadow-[#CBA135]/50" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-1/3 right-2/3 w-3.5 h-3.5 bg-[#E5C558] rounded-full opacity-50 floating-particle shadow-lg shadow-[#E5C558]/50" style={{ animationDelay: '5s' }}></div>
      </div>

      {/* Decorative curve */}
      <svg
        className="absolute top-0 left-0 w-full h-full opacity-10 -z-30 pointer-events-none"
        viewBox="0 0 1200 800"
        aria-hidden="true"
      >
        <path d="M0,400 Q300,200 600,400 T1200,400 V0 H0 Z" fill="url(#goldGradient)" />
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%">
            <stop offset="0%" style={{ stopColor: '#CBA135', stopOpacity: 0.3 }} />
            <stop offset="100%" style={{ stopColor: '#CBA135', stopOpacity: 0.1 }} />
          </linearGradient>
        </defs>
      </svg>

      <div className="container mx-auto px-6 text-center text-white relative z-10 max-w-6xl">
        {/* Título */}
        <h1 className="font-display tracking-tight leading-[1.1] font-bold mb-6">
          <span className="block text-3xl md:text-5xl lg:text-6xl">Formação de</span>
          <span className="relative inline-block">
            <span
              className="
                relative z-10 block 
                text-4xl md:text-5xl lg:text-6xl 
                bg-clip-text text-transparent 
                bg-gradient-to-r from-white via-white to-white/90
                drop-shadow-[0_0_18px_rgba(255,255,255,0.06)]
              "
            >
              Líderes e Gerentes
            </span>
            <span
              aria-hidden="true"
              className="absolute -inset-x-6 -inset-y-2 rounded-full bg-[#CBA135]/20 blur-3xl opacity-70"
            />
          </span>
          <span className="block text-3xl md:text-5xl lg:text-6xl text-[#CBA135] drop-shadow-[0_0_20px_rgba(203,161,53,0.25)]">
            de Farmácia
          </span>
        </h1>

        {/* Subtítulo */}
        <p className="font-body text-lg md:text-xl mb-6 md:mb-8 font-light italic opacity-90 max-w-4xl mx-auto">
          Curso presencial ao vivo + bônus de mentorias quinzenais ao vivo (via Zoom)
          para tirar dúvidas sobre a aplicação do método
        </p>

        {/* INFO STRIP — destaque: datas, local e preço */}
        <div
          className="
            max-w-4xl mx-auto mb-8 md:mb-10
            bg-white/10 border border-white/20 rounded-3xl
            shadow-[0_8px_28px_rgba(0,0,0,0.25)] backdrop-blur
            px-4 sm:px-6 py-3 sm:py-4
          "
          role="group"
          aria-label="Informações do evento"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4">
            {/* Datas */}
            <div className="flex items-center gap-2 rounded-full px-3 py-2 bg-gradient-to-r from-[#E5C558]/20 to-[#CBA135]/10 ring-1 ring-[#E5C558]/30">
              <Calendar className="w-5 h-5 text-[#E5C558]" aria-hidden="true" />
              <span className="text-sm sm:text-base font-semibold tracking-wide">
                23 e 24 de outubro
              </span>
            </div>

            {/* Local */}
            <div className="flex items-center gap-2 rounded-full px-3 py-2 bg-white/5 ring-1 ring-white/20">
              <MapPin className="w-5 h-5 text-[#E5C558]" aria-hidden="true" />
              <span className="text-sm sm:text-base">
                Turma <span className="font-semibold">Barreiras-BA</span> • Hotel Morubixaba
              </span>
            </div>

            {/* Preço + forma de pagamento (ênfase) */}
            <div
              className="
                flex items-center gap-2 rounded-full px-4 py-2
                bg-gradient-to-r from-[#CBA135] via-[#E5C558] to-[#CBA135]
                text-[#0b2438] ring-1 ring-[#E5C558]/40 shadow-lg
              "
            >
              <Banknote className="w-5 h-5" aria-hidden="true" />
              <span className="text-sm sm:text-base font-extrabold">
                R$ 199,90
              </span>
              <span className="hidden sm:inline text-sm font-semibold opacity-90">
                • Pix ou Boleto
              </span>
            </div>

            {/* Em telas muito pequenas, exibir Pix/Boleto abaixo */}
            <div className="md:hidden text-xs opacity-80">
              Pix ou Boleto
            </div>
          </div>
        </div>

        {/* Vídeo com controles (som, play/pause, fullscreen) e sem autoplay */}
        <div className="mb-10 max-w-4xl mx-auto">
          <div
            className="
              relative rounded-2xl overflow-hidden
              bg-black/70 shadow-2xl ring-1 ring-white/10 
              before:content-[''] before:absolute before:inset-0 
              before:bg-gradient-to-br before:from-white/5 before:to-transparent
            "
          >
            {/* Desktop */}
            <div className="hidden md:block aspect-video relative">
              <video
                className="w-full h-full object-cover"
                controls
                playsInline
                preload="metadata"
                poster="/images/thumbdesktop.jpg"
              >
                <source src="/videodesktop.mp4" type="video/mp4" />
                Seu navegador não suporta vídeo HTML5.
              </video>
            </div>

            {/* Mobile */}
            <div className="md:hidden aspect-[9/16] relative">
              <video
                className="w-full h-full object-cover"
                controls
                playsInline
                preload="metadata"
                poster="/images/thumbmobile.jpg"
              >
                <source src="/videomobile.mp4" type="video/mp4" />
                Seu navegador não suporta vídeo HTML5.
              </video>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 justify-center items-center mt-2">
          <a
            href="https://api.whatsapp.com/send?phone=556294596894&text=Tenho%20interesse%20em%20saber%20mais."
            target="_blank"
            rel="noopener noreferrer"
            className="
              relative z-10
              bg-gradient-to-r from-[#CBA135] to-[#E5C558]
              hover:from-[#E5C558] hover:to-[#CBA135]
              text-[#0b2438] font-extrabold
              py-3.5 px-10 sm:py-4 sm:px-12
              rounded-full text-lg sm:text-xl
              transition-all duration-400
              shadow-lg hover:shadow-xl
              ring-1 ring-[#E5C558]/30
              hover:scale-[1.03]
            "
          >
            Comprar Agora
          </a>

          <a
            href="https://api.whatsapp.com/send?phone=556294596894&text=Tenho%20interesse%20em%20saber%20mais."
            target="_blank"
            rel="noopener noreferrer"
            className="
              relative z-10
              border border-[#CBA135]/70
              text-[#E7D9A6]
              hover:text-[#0b2438]
              hover:bg-[#CBA135]
              font-semibold
              py-3.5 px-9 sm:py-4 sm:px-10
              rounded-full text-lg sm:text-xl
              transition-all duration-400
              backdrop-blur-sm bg-white/5
              shadow-lg hover:shadow-xl
              ring-1 ring-[#CBA135]/20
              flex items-center gap-3
              hover:scale-[1.03]
            "
          >
            <MessageCircle className="w-6 h-6" />
            Tirar Dúvidas no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

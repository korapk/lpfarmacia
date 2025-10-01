// src/components/Opportunity.tsx
import React from "react";
import { Star, MessageCircle, Info } from "lucide-react";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send?phone=556294596894&text=Tenho%20interesse%20em%20saber%20mais.";
const POSTER_URL =
  "https://ascoferj.com.br/wp-content/uploads/2020/11/farmaceutico-scaled.jpg"; // thumb para ambos os vídeos

const Opportunity: React.FC = () => {
  return (
    <section
      id="oportunidade"
      className="
        relative isolate overflow-hidden luxury-texture
        py-20
        bg-gradient-to-b from-[#012840] via-[#01375a] to-[#012840]
      "
      aria-label="A oportunidade que você vai ter"
    >
      {/* brilhos leves */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-10 left-1/4 w-8 h-8 rounded-full bg-[#CBA135]/25 blur-xl" />
        <div className="absolute bottom-10 right-10 w-6 h-6 rounded-full bg-[#E5C558]/25 blur-lg" />
      </div>

      <div className="container mx-auto px-6 relative">
        {/* header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 text-[#E5C558] mb-3">
            <Star className="w-5 h-5" />
            <span className="tracking-wide uppercase">A oportunidade que você vai ter</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            Dê o passo que <span className="text-[#E5C558]">acelera seus resultados</span>
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Em poucos minutos, entenda o que vai receber e por que este é o melhor momento
            para avançar com método, clareza e acompanhamento.
          </p>
        </div>

        {/* vídeo responsivo */}
        <div className="max-w-5xl mx-auto">
          {/* Mobile: 9:16 */}
          <div className="md:hidden">
            <div
              className="relative w-full overflow-hidden rounded-3xl ring-1 ring-white/30 shadow-2xl"
              style={{ aspectRatio: "9 / 16" }}
            >
              <video
                className="absolute inset-0 w-full h-full object-cover"
                src="/images/videomobile.mp4"
                poster={POSTER_URL}
                playsInline
                controls
                preload="metadata"
              />
            </div>
          </div>

          {/* Desktop: 16:9 */}
          <div className="hidden md:block">
            <div
              className="relative w-full overflow-hidden rounded-3xl ring-1 ring-white/30 shadow-2xl"
              style={{ aspectRatio: "16 / 9" }}
            >
              <video
                className="absolute inset-0 w-full h-full object-cover"
                src="/images/videodesktop.mp4"
                poster={POSTER_URL}
                playsInline
                controls
                preload="metadata"
              />
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="
              premium-button inline-flex items-center gap-2
              px-6 py-3 rounded-full font-semibold
              bg-gradient-to-r from-[#E5C558] via-[#CBA135] to-[#E5C558]
              text-[#012840] shadow-lg hover:shadow-xl transform hover:scale-[1.02]
              transition duration-300
            "
          >
            <MessageCircle className="w-5 h-5" />
            Garantir minha vaga
          </a>

          <a
            href="#cronograma"
            className="
              inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold
              border border-white/70 text-white hover:text-[#012840]
              hover:bg-white hover:shadow-lg transition
            "
          >
            <Info className="w-5 h-5" />
            Ver detalhes do evento
          </a>
        </div>
      </div>
    </section>
  );
};

export default Opportunity;

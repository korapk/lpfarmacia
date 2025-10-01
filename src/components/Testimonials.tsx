import React, { useEffect, useRef, useState } from "react";
import { Star, MessageCircle, Play, ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Depoimentos (vertical 9:16) com PAGINAÇÃO por clique
 * - Mostra 3 no início
 * - Botão "Ver próximos" vai para os demais; no fim vira "Voltar"
 * - Sem nome/cargo/frase; CTA centralizado em cada card
 * - Thumb = 1º frame do próprio vídeo (SmartVideo)
 */

type Testimonial = { slug: string; ctaLabel?: string };

const ALL: Testimonial[] = [
  { slug: "depoimento1", ctaLabel: "Quero o mesmo" },
  { slug: "depoimento2", ctaLabel: "Ver como funciona" },
  { slug: "depoimento3", ctaLabel: "Aplicar no meu caso" },
  { slug: "depoimento4", ctaLabel: "Quero implementar" },
  { slug: "depoimento5", ctaLabel: "Garantir minha vaga" },
];

const PAGE_SIZE = 3;
const WHATSAPP_URL =
  "https://api.whatsapp.com/send?phone=556294596894&text=Tenho%20interesse%20em%20saber%20mais.";

const Testimonials: React.FC = () => {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(ALL.length / PAGE_SIZE);
  const start = page * PAGE_SIZE;
  const visible = ALL.slice(start, start + PAGE_SIZE);

  const goNext = () => setPage((p) => Math.min(p + 1, totalPages - 1));
  const goPrev = () => setPage((p) => Math.max(p - 1, 0));

  return (
    <section
      id="depoimentos"
      className="
        relative isolate overflow-hidden luxury-texture
        py-20
        bg-gradient-to-br from-[#012840] via-[#01375a] to-[#012840]
      "
      aria-label="Depoimentos em vídeo"
    >
      {/* brilhos */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-10 left-1/4 w-8 h-8 rounded-full bg-[#CBA135]/30 blur-xl animate-pulse" />
        <div className="absolute top-1/3 right-10 w-4 h-4 rounded-full bg-[#E5C558]/30 blur-lg animate-pulse" style={{ animationDelay: "1.5s" }} />
        <div className="absolute bottom-10 left-10 w-10 h-10 rounded-full bg-[#CBA135]/20 blur-[18px]" />
      </div>

      <div className="container mx-auto px-6 relative">
        {/* título */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 text-[#E5C558] mb-3">
            <Star className="w-5 h-5" />
            <span className="tracking-wide uppercase">Prova Social</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            O que <span className="text-[#E5C558]">estão dizendo</span>
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Depoimentos de alunos.
          </p>
        </div>

        {/* grade paginada */}
        <div className="relative">
          {/* setas (desktop) */}
          <div className="hidden md:flex items-center justify-between mb-6">
            <button
              onClick={goPrev}
              disabled={page === 0}
              className="
                inline-flex items-center gap-2 bg-white/90 text-[#012840]
                rounded-full px-3 py-2 shadow-md hover:shadow-lg transition
                disabled:opacity-40 disabled:cursor-not-allowed
              "
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
              Anterior
            </button>

            <button
              onClick={page < totalPages - 1 ? goNext : goPrev}
              className="
                inline-flex items-center gap-2 bg-white/90 text-[#012840]
                rounded-full px-3 py-2 shadow-md hover:shadow-lg transition
              "
              aria-label={page < totalPages - 1 ? "Ver próximos" : "Voltar"}
            >
              {page < totalPages - 1 ? (
                <>
                  Ver próximos <ChevronRight className="w-5 h-5" />
                </>
              ) : (
                <>
                  <ChevronLeft className="w-5 h-5" /> Voltar
                </>
              )}
            </button>
          </div>

          {/* cards (3 por página) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visible.map((t) => (
              <Card key={t.slug} t={t} />
            ))}
            {/* se a última página tiver só 2 itens, adiciona espaçador para manter grid equilibrado */}
            {visible.length === 2 && <div className="hidden md:block" />}
          </div>

          {/* paginação (bolinhas) */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                aria-label={`Ir para página ${i + 1}`}
                className={`
                  w-2.5 h-2.5 rounded-full transition
                  ${i === page ? "bg-[#E5C558]" : "bg-white/50 hover:bg-white/80"}
                `}
              />
            ))}
          </div>

          {/* botão mobile principal para avançar/voltar */}
          <div className="mt-6 flex md:hidden justify-center">
            <button
              onClick={page < totalPages - 1 ? goNext : goPrev}
              className="
                inline-flex items-center gap-2 bg-white/90 text-[#012840]
                rounded-full px-4 py-2 shadow-md hover:shadow-lg transition
              "
            >
              {page < totalPages - 1 ? (
                <>
                  Ver próximos <ChevronRight className="w-5 h-5" />
                </>
              ) : (
                <>
                  <ChevronLeft className="w-5 h-5" /> Voltar
                </>
              )}
            </button>
          </div>
        </div>

        {/* CTA geral da seção */}
        <div className="text-center mt-12">
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
            Falar com a equipe
          </a>
        </div>
      </div>
    </section>
  );
};

const Card: React.FC<{ t: Testimonial }> = ({ t }) => {
  const src = `/${t.slug}.mp4`;
  return (
    <article
      className="
        bg-white/95 rounded-3xl border border-white/40 shadow-2xl overflow-hidden backdrop-blur
      "
    >
      {/* vídeo 9:16 com poster do 1º frame */}
      <div className="p-5">
        <div className="relative w-full rounded-2xl overflow-hidden ring-1 ring-gray-200" style={{ aspectRatio: "9 / 16" }}>
          <SmartVideo src={src} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="rounded-full bg-white/90 p-3 shadow-md">
              <Play className="w-6 h-6 text-[#012840]" />
            </div>
          </div>
        </div>
      </div>

      {/* CTA centralizado */}
      <div className="px-5 pb-6 flex items-center justify-center">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="
            premium-button inline-flex items-center gap-2
            px-5 py-2.5 rounded-full text-sm font-semibold
            bg-gradient-to-r from-[#E5C558] via-[#CBA135] to-[#E5C558]
            text-[#012840] shadow-md hover:shadow-lg transform hover:scale-[1.02]
            transition duration-300 whitespace-nowrap
          "
        >
          {t.ctaLabel ?? "Quero também"}
        </a>
      </div>
    </article>
  );
};

/** Poster do 1º frame do vídeo */
const SmartVideo: React.FC<{ src: string }> = ({ src }) => {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;

    let done = false;

    const capture = async () => {
      try {
        if (v.readyState < 2) {
          await new Promise<void>((res) => v.addEventListener("loadeddata", () => res(), { once: true }));
        }
        v.currentTime = 0;
        const w = v.videoWidth || 720;
        const h = v.videoHeight || 1280;
        const canvas = document.createElement("canvas");
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        ctx.drawImage(v, 0, 0, w, h);
        const dataURL = canvas.toDataURL("image/jpeg", 0.86);
        v.setAttribute("poster", dataURL);
      } catch {
        /* fallback: sem poster custom */
      }
    };

    const onMeta = () => {
      if (!done) {
        done = true;
        capture();
      }
    };

    v.addEventListener("loadedmetadata", onMeta, { once: true });
    if (v.readyState >= 1) onMeta();

    return () => v.removeEventListener("loadedmetadata", onMeta);
  }, []);

  return (
    <video
      ref={ref}
      className="absolute inset-0 w-full h-full object-cover"
      src={src}
      controls
      playsInline
      preload="metadata"
    />
  );
};

export default Testimonials;

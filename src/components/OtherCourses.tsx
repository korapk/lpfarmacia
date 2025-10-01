import React from "react";
import { BookOpen, Star, ArrowRight } from "lucide-react";

type Course = {
  title: string;
  desc: string;
  bullets: string[];
  img: string;      // ex.: "/imagemcard1.jpg"
  cta: string;      // label
  href: string;     // link do CTA
};

const COURSES: Course[] = [
  {
    title: "Formação de Balconistas de Farmácia",
    desc: "Capacitação para iniciar no varejo farmacêutico com atendimento ético e seguro.",
    bullets: [
      "Atendimento ao cliente e vendas consultivas",
      "Noções de medicamentos, estoque e legislação básica",
      "Postura profissional e boas práticas no balcão",
    ],
    img: "/imagemcard1.jpg",
    cta: "Quero saber mais",
    href: "#balconistas", // troque pelo destino real
  },
  {
    title: "Consultoria Farma Estratégica",
    desc: "Organize e potencialize sua drogaria com gestão orientada por indicadores.",
    bullets: [
      "Processos, equipe e finanças sob controle",
      "Compras inteligentes, estoque e precificação estratégica",
      "Vendas consultivas e estratégias contra novos concorrentes",
    ],
    img: "/imagemcard2.jpg",
    cta: "Quero saber mais",
    href: "#consultoria-farma", // troque pelo destino real
  },
  {
    title: "Pós-Graduação em Gestão Avançada na Farmácia — IBRAS",
    desc: "Formação para liderar farmácias com foco em resultados e alta performance.",
    bullets: [
      "Liderança, finanças, marketing, compras e KPIs",
      "Aulas práticas com especialistas (inclui Prof. José G. Donato)",
      "Foco em produtividade, competitividade e fidelização",
    ],
    img: "/imagemcard3.jpg",
    cta: "Quero saber mais",
    href: "#pos-ibras", // troque pelo destino real
  },
];

const OtherCourses: React.FC = () => {
  return (
    <section
      id="outros-cursos"
      className="
        relative isolate overflow-hidden luxury-texture
        py-20
        bg-gradient-to-b from-[#012840] via-[#01375a] to-[#012840]
      "
      aria-label="Outros cursos"
    >
      {/* brilho suave */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-10 left-1/4 w-8 h-8 rounded-full bg-[#CBA135]/25 blur-xl" />
        <div className="absolute bottom-10 right-10 w-6 h-6 rounded-full bg-[#E5C558]/25 blur-lg" />
      </div>

      <div className="container mx-auto px-6 relative">
        {/* header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 text-[#E5C558] mb-3">
            <Star className="w-5 h-5" />
            <span className="tracking-wide uppercase">Outros cursos</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            Amplie seu <span className="text-[#E5C558]">desenvolvimento</span>
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Conteúdos práticos para quem quer começar no balcão, turbinar a gestão
            da drogaria ou liderar com alta performance.
          </p>
        </div>

        {/* grid de cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COURSES.map((c, i) => (
            <article
              key={i}
              className="
                bg-white/95 rounded-3xl border border-white/40 shadow-2xl
                overflow-hidden backdrop-blur
                flex flex-col
              "
            >
              {/* imagem com radius */}
              <div className="p-5 pb-0">
                <div
                  className="relative w-full overflow-hidden rounded-2xl ring-1 ring-gray-200"
                  style={{ aspectRatio: "16 / 9" }}
                >
                  <img
                    src={c.img}
                    alt={c.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* conteúdo */}
              <div className="p-6 flex flex-col gap-4">
                <h3 className="text-xl font-semibold text-[#0d2535]">{c.title}</h3>
                <p className="text-[#0d2535]/80">{c.desc}</p>

                <ul className="mt-1 space-y-2">
                  {c.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-2 text-[#0d2535]">
                      <BookOpen className="w-4 h-4 mt-1 text-[#CBA135] shrink-0" />
                      <span className="text-[15px] leading-snug">{b}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="pt-2">
                  <a
                    href={c.href}
                    className="
                      premium-button inline-flex items-center justify-center gap-2
                      w-full px-5 py-3 rounded-full font-semibold
                      bg-gradient-to-r from-[#E5C558] via-[#CBA135] to-[#E5C558]
                      text-[#012840] shadow-md hover:shadow-lg transform hover:scale-[1.02]
                      transition duration-300
                    "
                  >
                    {c.cta}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherCourses;

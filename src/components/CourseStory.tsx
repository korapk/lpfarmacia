import React from 'react';
import { Lightbulb, TrendingUp, Sparkles } from 'lucide-react';

const CourseStory: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Título */}
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#012840] mb-6">
              A História por Trás do
              <span className="text-[#CBA135]"> Curso</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#CBA135] to-[#E5C558] mx-auto rounded-full" />
          </div>

          {/* Card */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
              <div className="space-y-8">
                {/* Bloco 1 */}
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-[#CBA135] to-[#E5C558] rounded-full p-3 flex-shrink-0 shadow-lg shadow-[#CBA135]/30">
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-[#012840] mb-4">A Descoberta</h3>
                    <p className="font-body text-lg text-[#444] leading-relaxed">
                      O curso nasceu a partir de uma constatação prática em 2021: farmácias com gerentes
                      que aplicavam conceitos de liderança performavam muito melhor.
                    </p>
                  </div>
                </div>

                {/* Bloco 2 */}
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-[#CBA135] to-[#E5C558] rounded-full p-3 flex-shrink-0 shadow-lg shadow-[#CBA135]/30">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-[#012840] mb-4">A Inspiração</h3>
                    <p className="font-body text-lg text-[#444] leading-relaxed">
                      Inspirado na obra de John C. Maxwell, foi criado um programa com foco em
                      resultados reais no balcão da farmácia, adaptado especificamente para a realidade
                      do setor farmacêutico brasileiro.
                    </p>
                  </div>
                </div>

                {/* Citação */}
                <div className="bg-gradient-to-r from-[#F4F8FB] to-[#CBA135]/10 rounded-2xl p-6 border-l-4 border-[#CBA135] relative overflow-hidden">
                  <div className="absolute top-2 right-2">
                    <Sparkles className="w-6 h-6 text-[#CBA135] opacity-60" />
                  </div>
                  <div className="absolute bottom-2 left-2">
                    <Sparkles className="w-4 h-4 text-[#CBA135] opacity-40" />
                  </div>
                  <p className="font-display text-xl font-semibold text-[#012840] italic relative z-10">
                    "Transformamos teoria em prática, criando líderes que realmente fazem a diferença
                    no dia a dia das farmácias."
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* /Card */}
        </div>
      </div>
    </section>
  );
};

export default CourseStory;

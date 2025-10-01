import React from 'react';
import { CreditCard, MessageCircle, Calendar, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      icon: CreditCard,
      title: 'Pagamento Seguro',
      description: 'Pagamento via PIX ou Boleto com total segurança e praticidade.',
    },
    {
      number: '02',
      icon: MessageCircle,
      title: 'Grupo WhatsApp',
      description: 'Você será inserido no grupo de WhatsApp exclusivo.',
    },
    {
      number: '03',
      icon: Calendar,
      title: 'Participação no Evento',
      description: 'Acompanhe as instruções e participe do evento nos dias 23 e 24 de outubro.',
    },
  ];

  return (
    <section className="relative isolate bg-white pt-16 md:pt-20 pb-44 md:pb-56 lg:pb-64">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#012840] mb-6">
              Como <span className="text-[#CBA135]">Funciona</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#CBA135] to-[#E5C558] mx-auto rounded-full mb-6 md:mb-8"></div>
            <p className="font-body text-lg md:text-xl text-[#444] max-w-3xl mx-auto">
              Processo simples e direto para garantir sua participação no curso
            </p>
          </div>

          <div className="relative">
            {/* Conexões (atrás das cards; sem clique) */}
            <div
              className="hidden lg:block absolute inset-x-0 top-[6.25rem] -z-10 pointer-events-none"
              aria-hidden="true"
            >
              <div className="mx-auto max-w-5xl px-24 flex justify-between items-center">
                <ArrowRight className="w-8 h-8 text-[#CBA135] opacity-25" />
                <ArrowRight className="w-8 h-8 text-[#CBA135] opacity-25" />
              </div>
            </div>

            {/* Grid */}
            <div className="relative z-10 grid lg:grid-cols-3 gap-8 lg:gap-12 pb-2 md:pb-4">
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div key={index} className="text-center group">
                    {/* Número */}
                    <div className="relative mb-8">
                      <div className="w-24 h-24 bg-gradient-to-br from-[#CBA135] to-[#E5C558] rounded-full flex items-center justify-center mx-auto shadow-2xl shadow-[#CBA135]/50 transition-transform duration-500 group-hover:scale-[1.06]">
                        <span className="font-display text-3xl font-bold text-white">
                          {step.number}
                        </span>
                      </div>
                      {/* Ícone */}
                      <div className="absolute -bottom-2 -right-2 bg-[#012840] rounded-full p-2 shadow-2xl pointer-events-none">
                        <IconComponent className="w-5 h-5 text-[#CBA135]" />
                      </div>
                    </div>

                    {/* Card */}
                    <div className="bg-gradient-to-b from-[#F4F8FB] to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-[#CBA135]/50 h-full hover:scale-[1.02]">
                      <h3 className="font-display text-2xl font-bold text-[#012840] mb-4">
                        {step.title}
                      </h3>
                      <p className="font-body text-[#444] leading-relaxed text-lg">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Alerta — MAIS PARA BAIXO NO DESKTOP */}
            <div className="relative z-20 text-center mt-1 sm:mt-2 md:mt-24 lg:mt-40 xl:mt-56 2xl:mt-64">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#CBA135]/10 to-[#E5C558]/10 rounded-full px-6 sm:px-8 py-3.5 sm:py-4 border border-[#CBA135]/30 shadow-sm">
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

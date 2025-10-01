import React from 'react';
import { TrendingDown, TrendingUp, CreditCard, ShoppingCart, Heart, Plus } from 'lucide-react';

const ExpectedResults = () => {
  const results = [
    {
      icon: TrendingDown,
      title: "Redução do CMV",
      description: "Otimização dos custos e aumento da margem de lucro"
    },
    {
      icon: TrendingUp,
      title: "Aumento do faturamento",
      description: "Estratégias comprovadas para crescimento sustentável"
    },
    {
      icon: CreditCard,
      title: "Elevação do ticket médio",
      description: "Técnicas para aumentar o valor médio por venda"
    },
    {
      icon: ShoppingCart,
      title: "Mais itens por venda",
      description: "Estratégias de cross-selling e upselling eficazes"
    },
    {
      icon: Heart,
      title: "Fidelização de clientes",
      description: "Atendimento humanizado que gera fidelidade"
    },
    {
      icon: Plus,
      title: "E muito mais",
      description: "Resultados que transformam sua farmácia"
    }
  ];

  return (
    <section className="py-20 bg-[#012840] relative overflow-hidden luxury-texture">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1200 600">
          <path d="M0,300 Q300,100 600,300 T1200,300 V600 H0 Z" fill="#CBA135" opacity="0.1" />
          <circle cx="200" cy="150" r="3" fill="#CBA135" opacity="0.6">
            <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="800" cy="100" r="2" fill="#CBA135" opacity="0.8">
            <animate attributeName="opacity" values="0.8;0.4;0.8" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="1000" cy="200" r="4" fill="#CBA135" opacity="0.5">
            <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2.5s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Resultados 
              <span className="text-[#CBA135]"> Esperados</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#CBA135] to-[#E5C558] mx-auto rounded-full mb-8"></div>
            <p className="font-body text-xl text-gray-300 max-w-3xl mx-auto">
              Transformações reais e mensuráveis que você pode esperar após aplicar o método
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {results.map((result, index) => {
              const IconComponent = result.icon;
              return (
                <div 
                  key={index}
                  className="group"
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-500 border border-white/20 hover:border-[#CBA135]/70 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-[#CBA135]/20">
                    <div className="mx-auto mb-6 w-20 h-20 bg-gradient-to-r from-[#CBA135] to-[#E5C558] rounded-full flex items-center justify-center group-hover:shadow-2xl group-hover:shadow-[#CBA135]/50 transition-all duration-500 group-hover:scale-110">
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    
                    <h3 className="font-display text-2xl font-bold text-white mb-4">
                      {result.title}
                    </h3>
                    
                    <p className="font-body text-gray-300 leading-relaxed">
                      {result.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-4 bg-gradient-to-r from-[#CBA135] to-[#E5C558] rounded-full px-12 py-6 shadow-lg shadow-[#CBA135]/30">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
              </div>
              <p className="font-body text-white font-bold text-xl">
                Transforme sua farmácia em um negócio de alta performance
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpectedResults;
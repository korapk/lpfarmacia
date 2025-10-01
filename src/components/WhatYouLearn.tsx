import React from 'react';
import { 
  Users, 
  MessageSquare, 
  Settings, 
  Target, 
  TrendingUp, 
  DollarSign,
  BarChart3,
  Heart,
  UserCheck,
  ClipboardList
} from 'lucide-react';

const WhatYouLearn = () => {
  const learningTopics = [
    {
      icon: Users,
      title: "Fundamentos e aplicação da liderança no ambiente farma"
    },
    {
      icon: MessageSquare,
      title: "Técnicas eficazes de feedback"
    },
    {
      icon: Settings,
      title: "Administração voltada para a realidade da farmácia"
    },
    {
      icon: Target,
      title: "Recrutamento e formação de times de alta performance"
    },
    {
      icon: TrendingUp,
      title: "Engajamento, motivação e aumento da produtividade"
    },
    {
      icon: DollarSign,
      title: "Redução de CMV (Custo da Mercadoria Vendida)"
    },
    {
      icon: BarChart3,
      title: "Aumento de faturamento, ticket médio e itens por cupom"
    },
    {
      icon: Heart,
      title: "Estratégias para fidelizar clientes e enfrentar concorrentes"
    },
    {
      icon: UserCheck,
      title: "Retenção de talentos"
    },
    {
      icon: ClipboardList,
      title: "Script prático das funções do gerente (execução passo a passo)"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#F4F8FB]">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#012840] mb-6">
              O Que o Aluno Vai 
              <span className="text-[#CBA135]"> Aprender</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#CBA135] to-[#E5C558] mx-auto rounded-full mb-8"></div>
            <p className="font-body text-xl text-[#444] max-w-3xl mx-auto">
              Conteúdo prático e aplicável, desenvolvido especificamente para a realidade das farmácias brasileiras
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {learningTopics.map((topic, index) => {
              const IconComponent = topic.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group hover:border-[#CBA135]/50 hover:transform hover:scale-105"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-r from-[#CBA135] to-[#E5C558] rounded-full p-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-[#CBA135]/30">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-body text-lg font-semibold text-[#012840] leading-relaxed">
                        {topic.title}
                      </h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#CBA135]/10 to-[#E5C558]/10 rounded-full px-8 py-4 border-2 border-[#CBA135]/30">
              <div className="w-2 h-2 bg-[#CBA135] rounded-full animate-pulse"></div>
              <p className="font-body text-[#012840] font-semibold text-lg">
                E muito mais conteúdo exclusivo para sua formação completa
              </p>
              <div className="w-2 h-2 bg-[#CBA135] rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouLearn;
import React from 'react';
import { Users, Award, GraduationCap, Building, Clock, Star } from 'lucide-react';

const SocialProof = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#F4F8FB] to-white relative">
      <div className="premium-divider"></div>
      <div className="container mx-auto px-6">
        {/* Stats */}
        <div className="text-center mb-16">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-12">
            <div className="flex items-center gap-3 text-2xl font-bold text-[#012840] font-display">
              <Building className="w-8 h-8 text-[#CBA135]" />
              <span>+400 farmácias reestruturadas</span>
            </div>
            <div className="hidden md:block w-2 h-2 bg-[#CBA135] rounded-full"></div>
            <div className="flex items-center gap-3 text-2xl font-bold text-[#012840] font-display">
              <Users className="w-8 h-8 text-[#CBA135]" />
              <span>+10.000 alunos formados</span>
            </div>
          </div>
        </div>

        {/* Expert Bio */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100 hover:shadow-3xl transition-all duration-500">
            <div className="flex flex-col lg:flex-row items-start gap-8">
              {/* Profile Image */}
              <div className="flex-shrink-0 mx-auto lg:mx-0">
                <div className="w-32 h-32 bg-gradient-to-br from-[#CBA135] to-[#E5C558] rounded-full p-1 shadow-2xl shadow-[#CBA135]/30">
                  <img
                    src="/jose1.svg"
                    alt="José – Especialista em Gestão Farmacêutica"
                    className="w-full h-full rounded-full object-cover bg-white"
                    loading="eager"
                    decoding="async"
                  />
                </div>
              </div>

              {/* Bio Content */}
              <div className="flex-1">
                <h3 className="font-display text-2xl font-bold text-[#012840] mb-6 text-center lg:text-left">
                  Especialista em Gestão Farmacêutica
                </h3>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 text-[#444] font-body">
                    <GraduationCap className="w-5 h-5 text-[#CBA135]" />
                    <span>Farmacêutico-bioquímico (UNAERP)</span>
                  </div>

                  <div className="flex items-center gap-3 text-[#444] font-body">
                    <Award className="w-5 h-5 text-[#CBA135]" />
                    <span>Mestre em Análises Clínicas (UNESP)</span>
                  </div>

                  <div className="flex items-center gap-3 text-[#444] font-body">
                    <Star className="w-5 h-5 text-[#CBA135]" />
                    <span>Pós-graduação em Administração (USP)</span>
                  </div>

                  <div className="flex items-center gap-3 text-[#444] font-body">
                    <Users className="w-5 h-5 text-[#CBA135]" />
                    <span>Professor de Pós-Graduação (IBRAS)</span>
                  </div>

                  <div className="flex items-center gap-3 text-[#444] font-body">
                    <Clock className="w-5 h-5 text-[#CBA135]" />
                    <span>+20 anos como professor universitário</span>
                  </div>

                  <div className="flex items-center gap-3 text-[#444] font-body">
                    <Building className="w-5 h-5 text-[#CBA135]" />
                    <span>10 anos como proprietário de farmácias</span>
                  </div>

                  <div className="flex items-center gap-3 text-[#444] md:col-span-2 font-body">
                    <Award className="w-5 h-5 text-[#CBA135]" />
                    <span>Consultor do Instituto Bulla e idealizador de treinamentos com milhares de alunos</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>      
      <div className="premium-divider"></div>
    </section>
  );
};

export default SocialProof;

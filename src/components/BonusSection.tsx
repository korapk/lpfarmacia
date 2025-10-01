import React from 'react';
import { Gift, Users, Video, Clock, Sparkles } from 'lucide-react';

const BonusSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#012840] via-[#01375a] to-[#012840] relative overflow-hidden luxury-texture">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-[#CBA135] rounded-full opacity-60 floating-particle shadow-lg shadow-[#CBA135]/50"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-[#E5C558] rounded-full opacity-80 floating-particle shadow-lg shadow-[#E5C558]/50" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-6 h-6 bg-[#CBA135] rounded-full opacity-40 floating-particle shadow-lg shadow-[#CBA135]/50" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-2/3 right-1/4 w-3 h-3 bg-[#E5C558] rounded-full opacity-70 floating-particle shadow-lg shadow-[#E5C558]/50" style={{animationDelay: '1s'}}>
          <div className="w-full h-full bg-[#CBA135] rounded-full animate-ping"></div>
        </div>
        
        {/* Sparkling stars */}
        <Sparkles className="absolute top-1/5 left-1/5 w-6 h-6 text-[#CBA135] opacity-60 floating-particle" />
        <Sparkles className="absolute bottom-1/3 right-1/5 w-4 h-4 text-[#E5C558] opacity-80 floating-particle" style={{animationDelay: '3s'}} />
        <Sparkles className="absolute top-2/3 left-2/3 w-5 h-5 text-[#CBA135] opacity-50 floating-particle" style={{animationDelay: '5s'}} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#CBA135] to-[#E5C558] rounded-full px-8 py-3 mb-8 shadow-lg shadow-[#CBA135]/30">
              <Gift className="w-6 h-6 text-white" />
              <span className="text-white font-bold text-lg">BÔNUS EXCLUSIVO</span>
              <Gift className="w-6 h-6 text-white" />
            </div>
            
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-8">
              Garanta Sua Matrícula e Receba
              <br />
              <span className="text-[#CBA135]">Benefícios Extras</span>
            </h2>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border-2 border-[#CBA135]/50 shadow-2xl hover:shadow-3xl transition-all duration-500">
            <div className="text-center mb-10">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-6">
                Ao garantir sua matrícula até o dia 20 de outubro, você recebe:
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-[#CBA135] to-[#E5C558] rounded-full p-4 flex-shrink-0 shadow-2xl shadow-[#CBA135]/50">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">✓</span>
                    </div>
                    <h4 className="font-display text-xl font-bold text-white">Participação Presencial</h4>
                  </div>
                  <p className="font-body text-gray-300 leading-relaxed">
                    Acesso completo à próxima turma presencial nos dias 23 e 24 de outubro
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-[#CBA135] to-[#E5C558] rounded-full p-4 flex-shrink-0 shadow-2xl shadow-[#CBA135]/50">
                  <Video className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">✓</span>
                    </div>
                    <h4 className="font-display text-xl font-bold text-white">Mentoria Quinzenal</h4>
                  </div>
                  <p className="font-body text-gray-300 leading-relaxed">
                    3 meses de mentorias ao vivo via Zoom para tirar dúvidas sobre a aplicação
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-6 mb-8 border border-red-500/50 shadow-2xl">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <Clock className="w-6 h-6 text-white animate-pulse" />
                  <h4 className="font-display text-xl font-bold text-white">OFERTA VÁLIDA POR TEMPO LIMITADO!</h4>
                  <Clock className="w-6 h-6 text-white animate-pulse" />
                </div>
                <p className="font-body text-red-100 font-semibold">
                  Não perca esta oportunidade única de transformar sua carreira
                </p>
              </div>

              <a
                href="https://api.whatsapp.com/send?phone=556294596894&text=Tenho%20interesse%20em%20saber%20mais."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block premium-button bg-gradient-to-r from-[#CBA135] to-[#E5C558] hover:from-[#E5C558] hover:to-[#CBA135] text-white font-bold py-6 px-16 rounded-full text-2xl transition-all duration-500 transform hover:scale-105 shadow-2xl shadow-[#CBA135]/50 hover:shadow-[#CBA135]/70 font-body"
              >
                Garantir Minha Vaga Agora
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
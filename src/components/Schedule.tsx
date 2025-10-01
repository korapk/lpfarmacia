import React from 'react';
import { Calendar, MapPin, Clock, Users } from 'lucide-react';

const Schedule = () => {
  return (
    <section id="cronograma" className="py-20 bg-gradient-to-br from-[#CBA135] via-[#E5C558] to-[#CBA135]">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#012840] mb-6">
              Cronograma do
              <span className="text-white"> Evento</span>
            </h2>
            <div className="w-24 h-1 bg-[#012840] mx-auto rounded-full"></div>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#012840] to-[#01375a] p-8 text-center">
              <div className="flex items-center justify-center gap-4 mb-4">
                <Calendar className="w-8 h-8 text-[#CBA135]" />
                <h3 className="font-display text-3xl font-bold text-white">Formação Presencial</h3>
                <Calendar className="w-8 h-8 text-[#CBA135]" />
              </div>
              <p className="font-body text-gray-300 text-lg">
                Dois dias intensivos de aprendizado prático e networking
              </p>
            </div>

            <div className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Date Information */}
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-r from-[#CBA135] to-[#E5C558] rounded-full p-4 flex-shrink-0 shadow-lg shadow-[#CBA135]/30">
                      <Calendar className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h4 className="font-display text-2xl font-bold text-[#012840] mb-2">Datas</h4>
                      <p className="font-display text-3xl font-bold text-[#CBA135] mb-2">23 e 24 de Outubro</p>
                      <p className="font-body text-[#444] text-lg">Dois dias completos de formação intensiva</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-r from-[#CBA135] to-[#E5C558] rounded-full p-4 flex-shrink-0 shadow-lg shadow-[#CBA135]/30">
                      <Clock className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h4 className="font-display text-2xl font-bold text-[#012840] mb-2">Horário</h4>
                      <p className="font-display text-2xl font-bold text-[#CBA135] mb-2">8h às 18h</p>
                      <p className="font-body text-[#444] text-lg">Programação completa com intervalos para networking</p>
                    </div>
                  </div>
                </div>

                {/* Location Information */}
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-r from-[#CBA135] to-[#E5C558] rounded-full p-4 flex-shrink-0 shadow-lg shadow-[#CBA135]/30">
                      <MapPin className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h4 className="font-display text-2xl font-bold text-[#012840] mb-2">Local</h4>
                      <p className="font-display text-2xl font-bold text-[#CBA135] mb-2">Hotel Morubixaba</p>
                      <p className="font-body text-[#444] text-lg">Barreiras - BA</p>
                      <p className="font-body text-sm text-[#444] mt-2">Ambiente confortável e preparado para o aprendizado</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-r from-[#CBA135] to-[#E5C558] rounded-full p-4 flex-shrink-0 shadow-lg shadow-[#CBA135]/30">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h4 className="font-display text-2xl font-bold text-[#012840] mb-2">Turma</h4>
                      <p className="font-display text-2xl font-bold text-[#CBA135] mb-2">Vagas Limitadas</p>
                      <p className="font-body text-[#444] text-lg">Máximo de participantes para garantir atenção personalizada</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center mt-12 pt-8 border-t border-gray-200">
                <div className="bg-gradient-to-r from-[#F4F8FB] to-[#CBA135]/10 rounded-2xl p-8 mb-8">
                  <h4 className="font-display text-2xl font-bold text-[#012840] mb-4">
                    🏆 Certificado de Participação Incluso
                  </h4>
                  <p className="font-body text-[#444] text-lg">
                    Comprove sua especialização em liderança farmacêutica com certificado oficial
                  </p>
                </div>

                <a
                  href="https://api.whatsapp.com/send?phone=556294596894&text=Tenho%20interesse%20em%20saber%20mais."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block premium-button bg-gradient-to-r from-[#012840] to-[#01375a] hover:from-[#01375a] hover:to-[#012840] text-white font-bold py-4 px-12 rounded-full text-xl transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-xl font-body"
                >
                  Garantir Minha Presença
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
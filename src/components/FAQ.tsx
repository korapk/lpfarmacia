import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Como terei acesso ao curso?",
      answer: "O curso é presencial ao vivo nos dias 16 e 17 de outubro no Hotel Morubixaba (Barreiras-BA). Após o pagamento, você entra no grupo de WhatsApp e recebe todas as orientações detalhadas sobre local, horários e materiais necessários."
    },
    {
      question: "O curso emite certificado?",
      answer: "Sim! Todos os participantes que completarem a formação presencial receberão certificado de participação, comprovando sua especialização em liderança e gestão farmacêutica."
    },
    {
      question: "Quais as opções de pagamento?",
      answer: "Aceitamos pagamento via Pix (com desconto especial), boleto bancário e cartão de crédito (até 12x sem juros). O pagamento é processado de forma 100% segura através da Hotmart/Kiwify."
    },
    {
      question: "Como funciona o bônus de mentorias?",
      answer: "O bônus inclui 3 meses de mentorias quinzenais ao vivo via Zoom. São sessões de acompanhamento onde você pode tirar dúvidas sobre a aplicação prática do método aprendido no curso, receber orientações personalizadas e trocar experiências com outros participantes."
    },
    {
      question: "Posso solicitar reembolso?",
      answer: "Sim, oferecemos garantia de 7 dias após a compra. Se por qualquer motivo você não puder participar do evento presencial, basta solicitar o reembolso dentro deste prazo e devolvemos 100% do valor pago."
    },
    {
      question: "Existe suporte? Como falar com a equipe?",
      answer: "Temos uma equipe de suporte dedicada disponível de segunda a sexta, das 9h às 18h. Você pode nos contatar através do WhatsApp oficial, e-mail ou pelo grupo exclusivo dos alunos. Respondemos todas as dúvidas em até 2 horas úteis."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#F4F8FB] to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <HelpCircle className="w-12 h-12 text-[#CBA135]" />
              <h2 className="font-display text-4xl md:text-5xl font-bold text-[#012840]">
                Perguntas 
                <span className="text-[#CBA135]"> Frequentes</span>
              </h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-[#CBA135] to-[#E5C558] mx-auto rounded-full mb-8"></div>
            <p className="font-body text-xl text-[#444] max-w-2xl mx-auto">
              Esclarecemos as principais dúvidas sobre o curso e como participar
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 hover:border-[#CBA135]/50 transition-all duration-500 overflow-hidden hover:shadow-2xl"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
                >
                  <h3 className="font-display text-lg md:text-xl font-semibold text-[#012840] pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="w-6 h-6 text-[#CBA135]" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-[#CBA135]" />
                    )}
                  </div>
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-6 border-t border-gray-100">
                    <div className="pt-4">
                      <p className="font-body text-[#444] leading-relaxed text-base md:text-lg">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-[#CBA135]/10 to-[#E5C558]/10 rounded-2xl p-8 border-2 border-[#CBA135]/20">
              <h4 className="font-display text-xl font-bold text-[#012840] mb-4">
                Ainda tem dúvidas?
              </h4>
              <p className="font-body text-[#444] mb-6 text-lg">
                Nossa equipe está pronta para ajudar você com qualquer questão
              </p>
              <a
                href="https://api.whatsapp.com/send?phone=556294596894&text=Tenho%20interesse%20em%20saber%20mais."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex premium-button bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#25D366] text-white font-semibold py-3 px-8 rounded-full transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-xl items-center gap-3 mx-auto font-body"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
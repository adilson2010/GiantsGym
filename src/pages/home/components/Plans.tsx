export default function Plans() {
  const plans = [
    {
      name: 'MENSAL',
      price: '149',
      period: '/mês',
      description: '',
      features: [
        'Acesso ilimitado',
        'Todas as modalidades',
        'Sem fidelidade',
        'Cancele quando quiser'
      ],
      highlighted: false,
      badge: '',
      planLink: 'https://evo-totem.w12app.com.br/skyfitacademia/0/page/landing-page/login',
      whatsappLink: 'https://wa.me/5511933318000?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Plano%20Mensal%20de%20R$%20149,90/mês'
    },
    {
      name: 'RECORRENTE',
      price: '129',
      period: '/mês',
      description: 'Somente cartão de crédito',
      features: [
        'Acesso ilimitado',
        'Todas as modalidades',
        'Economia de R$ 240/ano',
        'Débito automático'
      ],
      highlighted: true,
      badge: 'MAIS POPULAR',
      planLink: 'https://evo-totem.w12app.com.br/skyfitacademia/0/page/landing-page/login',
      whatsappLink: 'https://wa.me/5511933318000?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Plano%20Recorrente%20de%20R$%20129,90/mês'
    },
    {
      name: 'ANUAL',
      price: '109',
      period: '/mês',
      description: 'Melhor custo-benefício',
      features: [
        'Acesso ilimitado',
        'Todas as modalidades',
        'Economia de R$ 480/ano',
        '12 meses de treino'
      ],
      highlighted: false,
      badge: '',
      planLink: 'https://evo-totem.w12app.com.br/skyfitacademia/0/page/landing-page/login',
      whatsappLink: 'https://wa.me/5511933318000?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Plano%20Anual%20de%20R$%20109,90/mês'
    }
  ];

  return (
    <section id="plans" className="py-12 sm:py-16 md:py-24 bg-[#F8F6F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-[#FFB84D] text-xs sm:text-sm font-bold tracking-[0.2em] mb-2 sm:mb-3">
            INVISTA EM VOCÊ
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black px-4">
            Escolha Seu Plano Ideal
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mt-3 sm:mt-4 px-4">
            <strong>Planos flexíveis</strong> para <strong>academia em Cotia</strong> a partir de <strong>R$ 109,90/mês</strong>
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-20">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 transition-all duration-300 hover:scale-105 ${
                plan.highlighted
                  ? 'bg-black text-white shadow-2xl md:transform md:scale-105'
                  : 'bg-white border border-gray-200'
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute top-4 sm:top-6 right-4 sm:right-6 bg-[#FFB84D] text-black text-xs font-bold px-3 sm:px-4 py-1 sm:py-2 rounded-full">
                  {plan.badge}
                </div>
              )}

              {/* Plan Name */}
              <h4 id={`plano-${plan.name.toLowerCase()}`}>
                <a 
                  href={`#plano-${plan.name.toLowerCase()}`}
                  className={`text-xs sm:text-sm font-bold tracking-wider mb-4 sm:mb-6 block ${
                    plan.highlighted ? 'text-[#FFB84D]' : 'text-gray-500'
                  }`}
                >
                  {plan.name}
                </a>
              </h4>

              {/* Price */}
              <div className="mb-2">
                <span className="text-4xl sm:text-5xl md:text-6xl font-bold">R$ {plan.price}</span>
                <span className="text-xl sm:text-2xl">,90{plan.period}</span>
              </div>

              {/* Description */}
              {plan.description && (
                <p
                  className={`text-xs sm:text-sm mb-6 sm:mb-8 ${
                    plan.highlighted ? 'text-gray-300' : 'text-green-600 font-semibold'
                  }`}
                >
                  {plan.description}
                </p>
              )}

              {/* Features */}
              <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10 mt-6 sm:mt-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 sm:gap-3">
                    <i className="ri-check-line text-[#FFB84D] text-lg sm:text-xl flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center"></i>
                    <span className={`text-sm sm:text-base ${plan.highlighted ? 'text-white' : 'text-gray-700'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Buttons */}
              <div className="space-y-3">
                <a
                  href={plan.planLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full py-3 sm:py-4 rounded-full text-center font-semibold text-sm sm:text-base transition-all duration-300 whitespace-nowrap cursor-pointer ${
                    plan.highlighted
                      ? 'bg-[#FFB84D] text-black hover:bg-[#FFA726]'
                      : 'border-2 border-black text-black hover:bg-black hover:text-white'
                  }`}
                >
                  Escolher Plano
                </a>
                
                <a
                  href={plan.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 w-full py-3 sm:py-4 rounded-full text-center font-semibold text-sm sm:text-base transition-all duration-300 whitespace-nowrap cursor-pointer ${
                    plan.highlighted
                      ? 'border-2 border-[#FFB84D] text-[#FFB84D] hover:bg-[#FFB84D] hover:text-black'
                      : 'bg-[#25D366] text-white hover:bg-[#20BA5A]'
                  }`}
                >
                  <i className="ri-whatsapp-line text-lg sm:text-xl w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center"></i>
                  <span>Falar no WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Partners Section */}
        <div className="text-center pt-8 sm:pt-12 border-t border-gray-300">
          <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8">Também aceitamos</p>
          <div className="flex items-center justify-center gap-8 sm:gap-12 flex-wrap">
            <div className="hover:scale-105 transition-all duration-300">
              <div className="w-[140px] h-[70px] sm:w-[180px] sm:h-[90px] flex items-center justify-center">
                <img
                  src="https://static.readdy.ai/image/2050551fbb19c229cf27f3c804633125/6199d953e31f90d2baea2954a0713b3d.png"
                  alt="Wellhub"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="hover:scale-105 transition-all duration-300">
              <div className="w-[140px] h-[70px] sm:w-[180px] sm:h-[90px] flex items-center justify-center">
                <img
                  src="https://static.readdy.ai/image/2050551fbb19c229cf27f3c804633125/ed2dcb6bd62926d5fc4d974cb6476d5c.png"
                  alt="TotalPass"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

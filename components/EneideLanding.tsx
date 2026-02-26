'use client';

import { motion } from 'motion/react';
import { Heart, ArrowRight, Play, CheckCircle2, MessageCircle, HelpCircle, Sparkles, Wind, Users, Briefcase, Quote, Star } from 'lucide-react';
import Image from 'next/image';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } }
};

export default function EneideLanding() {
  return (
    <main className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-terracotta/5 blur-[120px] fluid-shape animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-gold/5 blur-[150px] fluid-shape" />
      </div>

      {/* BLOCO 1: TOPO */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 pb-32 md:pb-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="order-1"
          >
            <h1 className="text-5xl md:text-7xl font-light leading-[1.1] text-earth mb-6">
              O mundo parece ter <br className="hidden md:block" />
              <span className="italic">desabado</span> sobre você?
            </h1>
            <p className="text-xl md:text-2xl text-earth/80 font-light mb-10 max-w-xl leading-relaxed">
              Eu vou te ajudar a transformar essa dor e o peso do passado em uma nova força para viver. Você não é o seu sofrimento. Existe um recomeço esperando por você.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <button
                onClick={() => document.getElementById('video')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-terracotta text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-earth transition-colors duration-300 shadow-lg shadow-terracotta/20 flex items-center gap-2 group"
              >
                QUERO RECEBER AJUDA AGORA
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-sm text-earth/60 mt-2 sm:mt-4 sm:ml-2 italic">
                Atendimento Online e Seguro
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="order-2 relative"
          >
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto overflow-hidden rounded-[40px] shadow-2xl">
              <Image
                src="https://i.imgur.com/taYavj1.jpeg"
                alt="Eneide Carlot"
                fill
                unoptimized
                className="object-cover object-top grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-earth/20 to-transparent" />
            </div>
            {/* Decorative fluid shape */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/20 blur-2xl fluid-shape -z-10" />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40"
        >
          <span className="text-[10px] uppercase tracking-widest font-medium">Respire</span>
          <div className="w-px h-8 md:h-12 bg-earth" />
        </motion.div>
      </section>

      {/* BLOCO 2: VÍDEO */}
      <section id="video" className="py-24 px-6 bg-clay/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 {...fadeIn} className="text-3xl md:text-5xl font-light text-earth mb-12 italic">
            &quot;Eu sei como é sentir que a vida parou...&quot;
          </motion.h2>
          <motion.div
            {...fadeIn}
            className="relative w-full max-w-sm mx-auto aspect-[9/16] bg-earth/5 rounded-[32px] overflow-hidden shadow-xl"
          >
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/-k5icnxn19Y?controls=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </motion.div>
          <motion.p {...fadeIn} className="mt-8 text-lg text-earth/70 font-light">
            Assista ao vídeo para entender como usar a respiração e a fé para aliviar esse aperto no peito ainda hoje.
          </motion.p>
        </div>
      </section>

      {/* BLOCO 3: IDENTIFICAÇÃO */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <motion.h2 {...fadeIn} className="text-4xl md:text-6xl font-light text-earth mb-6">
              Você sente que está carregando um <br className="hidden md:block" />
              <span className="italic">peso</span> que não aguenta mais?
            </motion.h2>
            <motion.p {...fadeIn} className="text-xl text-earth/60 font-light">
              Talvez você esteja vivendo um desses momentos agora:
            </motion.p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {[
              { icon: "💔", title: "A Perda de um Amor", text: "Alguém importante partiu e deixou um silêncio enorme na sua vida. Parece que a alegria foi embora junto." },
              { icon: "🔗", title: "Repetindo a História da Família", text: "Você percebe que está passando pelos mesmos problemas que sua mãe ou sua avó passaram (doenças, separações, falta de dinheiro)." },
              { icon: "🏋️‍♀️", title: "Cansada de ser Forte", text: "Todo mundo conta com você. Você é o pilar da casa, mas chora escondida porque não tem com quem dividir o peso." },
              { icon: "🌪️", title: "Tudo Travado", text: "Sua vida financeira parou e você sente que não tem energia para fazer as coisas andarem." }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                className="bg-white p-10 rounded-[40px] border border-earth/5 hover:border-terracotta/20 transition-colors shadow-sm hover:shadow-xl group"
              >
                <span className="text-4xl mb-6 block group-hover:scale-110 transition-transform origin-left">{item.icon}</span>
                <h3 className="text-2xl font-medium text-earth mb-4">{item.title}</h3>
                <p className="text-earth/70 leading-relaxed font-light">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div {...fadeIn} className="mt-20 text-center">
            <div className="inline-block px-8 py-4 bg-gold/10 rounded-full border border-gold/20">
              <p className="text-earth font-medium italic">
                Você não precisa ser forte sozinha o tempo todo. É hora de receber cuidado.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* BLOCO 4: O MÉTODO */}
      <section className="py-32 md:py-40 px-6 bg-earth text-sand relative overflow-hidden flex flex-col justify-center">
        {/* Sophisticated Animated Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[70%] h-[70%] bg-terracotta/10 blur-[130px] rounded-full mix-blend-screen opacity-60 animate-pulse" style={{ animationDuration: '8s' }} />
          <div className="absolute bottom-[-20%] left-[-10%] w-[60%] h-[60%] bg-gold/5 blur-[120px] rounded-full mix-blend-screen opacity-50 transition-transform duration-[10s]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-8 items-center">

            {/* Esquerda: Texto Principal */}
            <motion.div
              {...fadeIn}
              className="lg:col-span-6 pr-0 lg:pr-12"
            >
              <div className="inline-flex items-center gap-3 mb-8">
                <div className="w-8 h-[1px] bg-gold/50" />
                <span className="uppercase tracking-[0.3em] text-xs font-semibold text-gold/80">O Método</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-light mb-8 leading-[1.2] tracking-tight">
                Falar sobre a dor não é o suficiente.
                <span className="block mt-3 font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-gold via-sand to-gold/70 pb-2">
                  É preciso curar a raiz.
                </span>
              </h2>

              <p className="text-lg md:text-xl text-sand/70 font-light mb-14 leading-relaxed max-w-lg">
                Muitas vezes, tentamos &quot;seguir em frente&quot; apenas com a força de vontade, mas o corpo continua sofrendo. A verdadeira cura exige reconexão.
              </p>

              <div className="space-y-12 relative">
                {/* Linha conectora vertical */}
                <div className="absolute left-[27px] top-8 bottom-8 w-[1px] bg-gradient-to-b from-terracotta/40 via-gold/30 to-transparent hidden md:block" />

                <div className="flex gap-8 relative items-start">
                  <div className="relative z-10 w-14 h-14 rounded-full bg-earth border border-terracotta/30 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(200,90,70,0.15)] group-hover:border-terracotta transition-colors">
                    <div className="absolute inset-0 rounded-full bg-terracotta/10 animate-ping opacity-20" style={{ animationDuration: '3s' }} />
                    <Wind className="w-5 h-5 text-terracotta" strokeWidth={1.5} />
                  </div>
                  <div className="pt-1">
                    <h4 className="text-xl md:text-2xl font-serif mb-3 text-sand/90">Respiração Consciente</h4>
                    <p className="text-sand/60 font-light leading-relaxed">Liberta as tensões acumuladas que prendem o seu corpo no ciclo da angústia e estresse constante.</p>
                  </div>
                </div>

                <div className="flex gap-8 relative items-start">
                  <div className="relative z-10 w-14 h-14 rounded-full bg-earth border border-gold/30 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(220,180,100,0.15)] group-hover:border-gold transition-colors">
                    <div className="absolute inset-0 rounded-full bg-gold/10 animate-ping opacity-20" style={{ animationDuration: '4s', animationDelay: '1s' }} />
                    <Sparkles className="w-5 h-5 text-gold" strokeWidth={1.5} />
                  </div>
                  <div className="pt-1">
                    <h4 className="text-xl md:text-2xl font-serif mb-3 text-sand/90">Espiritualidade Divina</h4>
                    <p className="text-sand/60 font-light leading-relaxed">Acalma o seu coração, traz sentido e reconecta-se com a sua essência mais profunda.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Direita: Elemento de Design "Glass" com Citação */}
            <motion.div
              {...fadeIn}
              transition={{ duration: 1, delay: 0.2 }}
              className="lg:col-span-6 relative mt-12 lg:mt-0"
            >
              {/* Moldura / Glow */}
              <div className="absolute -inset-1 bg-gradient-to-br from-terracotta/20 via-gold/10 to-transparent rounded-[2.5rem] blur-xl opacity-60 pointer-events-none" />

              {/* Card Principal */}
              <div className="relative w-full bg-gradient-to-br from-white/[0.07] to-white/[0.01] backdrop-blur-2xl p-10 md:p-14 rounded-[2rem] border border-white/10 shadow-2xl overflow-hidden group">

                {/* Efeito de brilho interno */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                <div className="absolute top-0 right-0 w-40 h-40 bg-gold/10 blur-[60px] rounded-full transform translate-x-1/2 -translate-y-1/2 pointer-events-none" />

                <Quote className="w-10 h-10 text-terracotta/40 mb-8 transform -scale-x-100 relative z-10" />

                <p className="text-2xl md:text-3xl text-sand/90 font-light leading-[1.5] mb-12 relative z-10">
                  Não vamos ficar apenas lembrando do que faz doer. <span className="text-white font-normal drop-shadow-md">Vamos limpar essa tristeza profunda</span> para que você volte a sentir paz de verdade.
                </p>

                <div className="relative z-10">
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-gold/40 to-transparent" />
                  <div className="pl-8 py-2">
                    <p className="text-sm uppercase tracking-[0.2em] text-gold/80 font-bold mb-3">O Resultado</p>
                    <p className="text-lg md:text-xl text-sand/80 font-serif italic leading-relaxed">
                      &quot;O peso sai das costas, a angústia diminui e você reencontra a força e clareza para sorrir de novo.&quot;
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* BLOCO 5: QUEM É ENEIDE */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-[60px] overflow-hidden shadow-2xl">
              <Image
                src="https://i.imgur.com/7h7n9AE.jpeg"
                alt="Eneide Carlot Story"
                fill
                unoptimized
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-terracotta/10 blur-3xl fluid-shape -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-light text-earth mb-8 italic">
              &quot;Eu sobrevivi ao dia mais triste da minha vida.&quot;
            </h2>
            <div className="space-y-6 text-lg text-earth/80 font-light leading-relaxed">
              <p>
                Eu sou Eneide Maria Meneghetti Carlot. Hoje ajudo muitas pessoas a se curarem, mas eu só consigo fazer isso porque eu também precisei de cura.
              </p>
              <p>
                Eu vivi um amor lindo de 30 anos. De repente, em um instante, eu o perdi. O meu chão sumiu. A dor era tão grande que eu achei que não ia suportar.
              </p>
              <p>
                Mas foi no meio dessa tristeza que eu descobri uma força maior. Eu entendi que a gente pode recomeçar, mesmo quando tudo parece perdido. Deus nos fez para a vida, não para o sofrimento eterno.
              </p>
              <p className="text-2xl font-serif italic text-terracotta pt-4">
                Eu me reergui. E hoje, minha missão é estender a mão para você e dizer: &quot;Vem comigo. Vai ficar tudo bem.&quot;
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* BLOCO 6: SERVIÇOS */}
      <section className="py-32 px-6 bg-clay/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <motion.h2 {...fadeIn} className="text-4xl md:text-6xl font-light text-earth mb-6">
              Como posso te <span className="italic">ajudar</span>
            </motion.h2>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <Users className="w-8 h-8" />,
                title: "Sessões de Apoio (Semanal)",
                text: "Para quem precisa de um ombro amigo e direção toda semana. Um espaço seguro para você desabafar e se fortalecer, sem deixar a peteca cair."
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Ciclo de Cura e Libertação",
                text: "Um tratamento completo para quem quer resolver problemas antigos, limpar mágoas do passado e parar de repetir os erros da família."
              },
              {
                icon: <Briefcase className="w-8 h-8" />,
                title: "Orientação para Quem Empreende",
                text: "Se você não está bem, o seu negócio também não vai bem. Vamos cuidar de você para que o seu trabalho volte a prosperar."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                className="bg-white p-12 rounded-[48px] shadow-sm hover:shadow-xl transition-all duration-500 border border-earth/5 flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-2xl bg-terracotta/10 flex items-center justify-center text-terracotta mb-8 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-medium text-earth mb-6">{item.title}</h3>
                <p className="text-earth/70 font-light leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* BLOCO PROVAS SOCIAIS */}
      <section className="py-32 px-6 bg-earth/5 text-earth relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-[40%] h-[40%] bg-gold/5 blur-[100px] fluid-shape -z-10" />
        <div className="absolute bottom-0 right-0 w-[40%] h-[40%] bg-terracotta/5 blur-[100px] fluid-shape -z-10" />

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <motion.h2 {...fadeIn} className="text-4xl md:text-6xl font-light mb-6">
              O que dizem as <span className="italic text-terracotta">pessoas</span> que <br className="hidden md:block" />
              já se permitiram curar
            </motion.h2>
            <motion.p {...fadeIn} className="text-xl text-earth/60 font-light">
              Histórias reais de quem transformou a dor em recomeço.
            </motion.p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                text: "Eu achava que nunca mais ia sorrir depois do que aconteceu. A Eneide não só me ouviu, mas me ajudou a tirar uma tonelada das costas. Hoje consigo acordar com esperança.",
                name: "Maria C.",
                role: "Paciente",
                stars: 5
              },
              {
                text: "O ciclo de repetições na minha família parecia não ter fim. As sessões foram como acender uma luz num quarto escuro. Sinto que finalmente recuperei as rédeas da minha vida.",
                name: "Fernanda S.",
                role: "Paciente",
                stars: 5
              },
              {
                text: "Estava a ponto de desistir da minha empresa por conta de problemas pessoais mal resolvidos. A mentoria com a Eneide foi um divisor de águas e os resultados vieram em seguida.",
                name: "Ana T.",
                role: "Empreendedora",
                stars: 5
              }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                className="bg-white p-10 rounded-[40px] shadow-sm hover:shadow-xl transition-all duration-500 border border-earth/5 relative mt-8 flex flex-col justify-between group"
              >
                <div className="absolute -top-8 left-10 w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center border-4 border-white group-hover:scale-110 transition-transform">
                  <Quote className="w-8 h-8 text-gold fill-gold/20" />
                </div>

                <div>
                  <div className="flex gap-1 mb-6 mt-4">
                    {[...Array(testimonial.stars)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 text-gold fill-gold opacity-80" />
                    ))}
                  </div>

                  <p className="text-earth/80 font-light leading-relaxed mb-8 italic text-lg">
                    &quot;{testimonial.text}&quot;
                  </p>
                </div>

                <div className="border-t border-earth/10 pt-6">
                  <h4 className="font-medium text-earth">{testimonial.name}</h4>
                  <p className="text-sm text-earth/50 font-light">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* BLOCO 7: PASSO A PASSO */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h2 {...fadeIn} className="text-4xl md:text-6xl font-light text-earth mb-20 text-center">
            O seu recomeço está a <br />
            <span className="italic">um clique</span> de distância.
          </motion.h2>

          <div className="space-y-12">
            {[
              { step: "01", title: "Toque no Botão", text: "Você vai falar direto com minha equipe no WhatsApp." },
              { step: "02", title: "Agende seu Horário", text: "Vamos escolher um momento tranquilo para você." },
              { step: "03", title: "Sinta o Alívio", text: "Já na primeira conversa, você vai sentir o peso diminuir." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="flex items-start gap-8 group"
              >
                <span className="text-6xl font-serif italic text-gold/30 group-hover:text-gold transition-colors duration-500">{item.step}</span>
                <div className="pt-4">
                  <h4 className="text-2xl font-medium text-earth mb-2">{item.title}</h4>
                  <p className="text-lg text-earth/60 font-light">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeIn} className="mt-20 text-center">
            <button
              onClick={() => document.getElementById('duvidas')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-terracotta text-white px-10 py-5 rounded-full text-xl font-medium hover:bg-earth transition-all duration-300 shadow-xl shadow-terracotta/20 flex items-center gap-3 mx-auto group"
            >
              <MessageCircle className="w-6 h-6" />
              QUERO FALAR COM A ENEIDE
            </button>
          </motion.div>
        </div>
      </section>

      {/* BLOCO 8: DÚVIDAS SIMPLES */}
      <section id="duvidas" className="py-32 px-6 bg-earth/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <HelpCircle className="w-12 h-12 text-terracotta mx-auto mb-4 opacity-50" />
            <h2 className="text-4xl font-light text-earth italic">Dúvidas Simples</h2>
          </div>

          <div className="space-y-6">
            {[
              { q: "Tem a ver com religião?", a: "Não. Tem a ver com fé e conexão com Deus, do jeito que você acreditar. Eu acolho a todos com muito amor." },
              { q: "O atendimento é pela internet?", a: "Sim. Você pode fazer do conforto da sua casa. Nós conversamos por vídeo, olho no olho, como se eu estivesse aí com você." },
              { q: "E se eu não tiver dinheiro agora?", a: "Muitas vezes, a falta de dinheiro é reflexo de como estamos nos sentindo por dentro. Cuidar de você é o primeiro passo para a vida voltar a fluir em todas as áreas." }
            ].map((item, i) => (
              <motion.div
                key={i}
                {...fadeIn}
                className="bg-white p-8 rounded-3xl border border-earth/5 shadow-sm"
              >
                <h4 className="text-xl font-medium text-earth mb-4 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-gold" />
                  {item.q}
                </h4>
                <p className="text-earth/70 font-light leading-relaxed ml-5">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOCO 9: FINALIZAÇÃO */}
      <section className="py-40 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/5 to-terracotta/10 -z-10" />

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-light text-earth mb-8">
              Sempre existe um <br />
              <span className="italic text-terracotta">novo dia.</span> <br />
              Vamos encontrar o seu?
            </h2>
            <p className="text-xl md:text-2xl text-earth/70 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
              Você não precisa carregar essa dor para sempre. Sua família merece ver você bem. E, principalmente, você merece ser feliz de novo.
            </p>
            <a
              href="https://wa.me/555499155358?text=Ol%C3%A1%20Eneide%21%20Vi%20o%20seu%20site%20e%20gostaria%20de%20entender%20como%20funciona%20o%20atendimento.%20Escolho%20cuidar%20de%20mim%21"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-earth text-sand px-12 py-6 rounded-full text-2xl font-medium hover:bg-terracotta transition-all duration-500 shadow-2xl flex items-center justify-center gap-4 mx-auto w-fit group"
            >
              SIM, EU ESCOLHO ME CUIDAR
              <Sparkles className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Footer info */}
        <div className="mt-32 pt-12 border-t border-earth/10 flex flex-col md:flex-row justify-between items-center gap-6 text-earth/40 text-sm">
          <p>© 2026 Eneide Carlot. Todos os direitos reservados.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-terracotta transition-colors">Privacidade</a>
            <a href="#" className="hover:text-terracotta transition-colors">Termos</a>
          </div>
        </div>
      </section>
    </main>
  );
}

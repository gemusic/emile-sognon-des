"use client"

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Target, LayoutGrid, Globe, ShieldAlert } from 'lucide-react'
import Image from 'next/image'

export default function FacteurMoscou() {
  return (
    <main className="min-h-screen bg-brand-green w-full overflow-x-hidden">
      
      {/* Intro Section */}
      <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-24 bg-brand-green text-white overflow-hidden w-full">
        <div className="absolute top-0 right-0 w-full sm:w-1/2 h-full opacity-10 pointer-events-none">
          <Image src="/images/moscow-bg.png" alt="Blueprint" fill className="object-contain object-right" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl space-y-6 sm:space-y-8 text-center lg:text-left mx-auto lg:mx-0"
          >
            <h1 className="text-[clamp(2rem,8vw,5rem)] font-black leading-[0.95] uppercase tracking-tighter">
              Pourquoi le <span className="text-brand-gold">"Facteur Moscou"</span> <br />
              est votre meilleur atout.
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 text-base sm:text-lg text-white/80 leading-relaxed text-left">
              <p>
                Dans un secteur où l'approximation peut coûter des vies et des millions, la rigueur n'est pas une option. Ma méthode ne repose pas sur des théories de bureau, mais sur une discipline technique héritée d'un Master en Ingénierie des Mines de l’Université de Moscou.
              </p>
              <p className="text-brand-gold font-bold italic border-l-2 border-brand-gold pl-6">
                "Moscou ne m'a pas seulement donné un diplôme, elle m'a inculqué une discipline opérationnelle rare en Afrique. C’est cette précision d'ingénierie qui est aujourd'hui le gage de confiance des investisseurs les plus exigeants."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-20 sm:py-24 bg-white w-full">
        <div className="container mx-auto px-4 w-full">
          <h2 className="text-[clamp(1.5rem,6vw,3rem)] font-black text-brand-green mb-12 sm:mb-16 text-center uppercase tracking-tighter leading-tight">
            Transformer l'incertitude en <span className="text-brand-gold">résultats mesurables.</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 w-full">
            {[
              {
                icon: <Target className="w-10 h-10 sm:w-12 sm:h-12 text-brand-green" />,
                title: "La Précision Absolue",
                desc: "Chaque décision et chaque processus repose sur une exactitude totale, garantissant que rien n'est laissé au hasard lors des opérations critiques."
              },
              {
                icon: <LayoutGrid className="w-10 h-10 sm:w-12 sm:h-12 text-brand-green" />,
                title: "La Planification Systématique",
                desc: "Une approche méthodique où chaque plan de tir et chaque audit est structuré pour anticiper les risques avant qu'ils ne surviennent."
              },
              {
                icon: <Globe className="w-10 h-10 sm:w-12 sm:h-12 text-brand-green" />,
                title: "L'Universalité de l'Efficacité",
                desc: "Une marque qui parle le langage de la performance pure, capable de s'adapter à tout environnement technique ou culturel."
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="space-y-4 sm:space-y-6 p-6 sm:p-8 border-t-4 border-brand-green bg-brand-green/5"
              >
                {item.icon}
                <h3 className="text-lg sm:text-xl font-black text-brand-green uppercase tracking-tighter">{item.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Double Look Section */}
      <section className="py-20 sm:py-24 bg-brand-green text-white w-full">
        <div className="container mx-auto px-4 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
              <h2 className="text-[clamp(1.5rem,6vw,3.5rem)] font-black leading-[0.95] uppercase tracking-tighter">
                L'alliance de la <span className="text-brand-gold">rigueur d'État</span> <br />
                et de l'agilité terrain.
              </h2>
              <p className="text-lg sm:text-xl text-white/80 leading-relaxed">
                Ma force réside dans ma double compétence : l'ancien contrôleur d'État qui connaît les moindres failles réglementaires, et l'ingénieur de terrain qui sait comment redresser une exploitation en difficulté.
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-6 p-6 sm:p-8 bg-white/5 border border-brand-gold/30 text-left">
                <ShieldAlert className="w-10 h-10 sm:w-12 sm:h-12 text-brand-gold shrink-0" />
                <div className="space-y-2">
                  <h4 className="text-lg sm:text-xl font-bold text-brand-gold uppercase tracking-tighter">L'Expert-Gardien</h4>
                  <p className="text-sm sm:text-base text-white/70">
                    Cet archétype rassure les décideurs. Je ne suis pas seulement un consultant, je suis le garant que la complexité est maîtrisée et que vos actifs sont protégés.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative aspect-video sm:aspect-square lg:h-[500px] industrial-border w-full">
              <Image src="/images/hero-bg.png" alt="Field Impact" fill className="object-cover grayscale" />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 sm:py-24 bg-white w-full">
        <div className="container mx-auto px-4 w-full">
          <div className="max-w-4xl mx-auto text-center space-y-10 sm:space-y-12">
            <h2 className="text-[clamp(1.5rem,6vw,3.5rem)] font-black text-brand-green uppercase tracking-tighter leading-tight">
              Des résultats tangibles, <br />
              <span className="text-brand-gold">loin des théories abstraites.</span>
            </h2>
            
            <div className="p-8 sm:p-12 bg-brand-green text-white space-y-6 sm:space-y-8 text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 sm:p-8 opacity-10">
                <Target className="w-24 h-24 sm:w-32 sm:h-32" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-brand-gold uppercase tracking-widest">Étude de cas : Bénin</h3>
              <p className="text-lg sm:text-xl leading-relaxed">
                Dans une carrière de granite au Bénin, l'application de cette rigueur (restructuration des tirs et formation) a permis de réduire les accidents à zéro et d'augmenter la productivité de <span className="text-brand-gold font-black">+30%</span> en moins de trois mois.
              </p>
              <p className="text-sm sm:text-base text-white/60 italic">
                Ce que j'ai accompli historiquement, je le déploie aujourd'hui pour votre souveraineté opérationnelle.
              </p>
            </div>

            <div className="pt-6 sm:pt-8 flex justify-center">
              <Button className="bg-brand-green hover:bg-brand-green/90 text-white px-10 sm:px-12 py-6 sm:py-10 rounded-none uppercase tracking-widest text-base sm:text-lg font-black w-full sm:w-auto text-center flex justify-center items-center">
                Explorer mes Modules d'Intervention
              </Button>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}

"use client"

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Shield, Award, BookOpen, Zap, Globe, AlertCircle } from 'lucide-react'
import Image from 'next/image'

export default function Autorite() {
  const pillars = [
    {
      icon: <Shield className="w-10 h-10 sm:w-12 sm:h-12" />,
      title: "L’Ancien Gardien des Normes d’État",
      proof: "Ancien Directeur du contrôle des Établissements Classés et Industriels (OBRGM).",
      reality: "Il était l'autorité suprême chargée de veiller à la sécurité des grandes usines et des dépôts d'explosifs.",
      value: "Une conformité totale garantissant zéro sanction et zéro suspension de licence."
    },
    {
      icon: <Award className="w-10 h-10 sm:w-12 sm:h-12" />,
      title: "40 Ans d'Excellence sans Faille",
      proof: "Quatre décennies de gestion de poudrières et de supervision de tirs (OFMAS, NORMAT, OBRGM).",
      reality: "Dans une industrie où l'erreur est fatale, il a dirigé des opérations à haut risque sans incident majeur.",
      value: "L'assurance d'une exploitation \"Zéro Accident\"."
    },
    {
      icon: <BookOpen className="w-10 h-10 sm:w-12 sm:h-12" />,
      title: "L’Ingénierie de la Rigueur (Le Facteur Moscou)",
      proof: "Master en Ingénierie des Mines de l’Université de Moscou.",
      reality: "Formé dans l'un des environnements les plus exigeants au monde pour l'exploitation des gisements.",
      value: "Une précision d'ingénierie où rien n'est laissé au hasard."
    },
    {
      icon: <Zap className="w-10 h-10 sm:w-12 sm:h-12" />,
      title: "L’Ultime Recours des Situations de Crise",
      proof: "Directeur technique intérimaire dans des carrières actives et complexes.",
      reality: "Intervient là où les systèmes sont défaillants et la production menacée.",
      value: "Un redressement spectaculaire avec des gains de productivité de +30% en moins de 90 jours."
    },
    {
      icon: <Globe className="w-10 h-10 sm:w-12 sm:h-12" />,
      title: "Stature Internationale et Multilingue",
      proof: "Missions en Russie, Mali, Nigeria, Allemagne, France et Italie.",
      reality: "Maîtrise parfaite du français et du russe.",
      value: "Une interface crédible pour les investisseurs et partenaires étrangers."
    }
  ]

  return (
    <main className="min-h-screen bg-brand-green w-full overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="pt-32 sm:pt-40 pb-20 sm:pb-24 relative overflow-hidden w-full">
        <div className="container mx-auto px-4 relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-5xl space-y-8 sm:space-y-10 text-center lg:text-left mx-auto lg:mx-0"
          >
            <div className="inline-flex items-center gap-4 justify-center lg:justify-start">
              <div className="h-[1px] w-8 sm:w-12 bg-brand-gold"></div>
              <span className="text-brand-gold font-black uppercase tracking-[0.3em] sm:tracking-[0.5em] text-[8px] sm:text-[10px]">
                L’Autorité Suprême des Systèmes Critiques
              </span>
            </div>
            
            <h1 className="text-[clamp(2rem,8vw,7rem)] font-black text-white leading-[0.95] uppercase tracking-tighter">
              PLUS QU'UN <br />
              CONSULTANT, UN <br />
              <span className="text-brand-gold text-outline">EXPERT-GARDIEN.</span>
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 text-left">
              <p className="text-lg sm:text-xl text-white/60 leading-relaxed">
                SOGNON-DES Emile incarne la transition entre l'ingénierie traditionnelle et le conseil stratégique de haute performance.
              </p>
              <div className="p-6 sm:p-8 border-l-4 border-brand-gold bg-white/5">
                <p className="text-brand-gold font-black uppercase tracking-widest text-[10px] sm:text-xs mb-2">L'ambition</p>
                <p className="text-white text-lg sm:text-xl font-bold italic leading-tight">
                  "Être la Référence Africaine de l'Excellence Minière et l'ultime recours pour les organisations confrontées à des risques élevés."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-20 sm:py-32 bg-white w-full">
        <div className="container mx-auto px-4 w-full">
          <div className="space-y-16 sm:space-y-24">
            {pillars.map((pillar, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start lg:items-center"
              >
                <div className={`lg:col-span-5 ${i % 2 === 0 ? 'lg:order-first' : 'lg:order-last'} space-y-4 sm:space-y-6 text-center lg:text-left`}>
                  <div className="text-brand-gold flex justify-center lg:justify-start">{pillar.icon}</div>
                  <h2 className="text-[clamp(1.5rem,5vw,3rem)] font-black text-brand-green uppercase tracking-tighter leading-none">
                    {pillar.title}
                  </h2>
                  <div className="p-4 sm:p-6 bg-brand-green text-white font-bold text-[10px] sm:text-sm uppercase tracking-widest text-left">
                    Preuve : {pillar.proof}
                  </div>
                </div>
                <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
                  <div className="space-y-2 sm:space-y-4">
                    <h4 className="text-brand-gold font-black uppercase tracking-widest text-[10px]">La Réalité</h4>
                    <p className="text-xl sm:text-2xl font-medium text-brand-green/80 leading-tight">{pillar.reality}</p>
                  </div>
                  <div className="space-y-2 sm:space-y-4">
                    <h4 className="text-brand-green font-black uppercase tracking-widest text-[10px]">Valeur Client</h4>
                    <p className="text-lg sm:text-xl text-brand-green/60 leading-relaxed">{pillar.value}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 sm:py-32 bg-brand-green text-white relative overflow-hidden w-full">
        <div className="absolute inset-0 industrial-grid opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10 w-full">
          <div className="max-w-4xl mx-auto text-center space-y-12 sm:space-y-16">
            <h2 className="text-[clamp(2rem,7vw,5rem)] font-black uppercase tracking-tighter leading-[0.95]">
              PROTÉGER LA VALEUR <br />
              <span className="text-brand-gold">PAR L'EXIGENCE.</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 text-left">
              <div className="p-8 sm:p-12 glass border-brand-gold/20 space-y-4 sm:space-y-6">
                <AlertCircle className="w-10 h-10 sm:w-12 sm:h-12 text-brand-gold" />
                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tighter">Le Refus du "Consulting de Papier"</h3>
                <p className="text-white/60 text-sm sm:text-base leading-relaxed">
                  SOGNON-DES Emile refuse les missions purement théoriques sans suivi terrain ou supervision réelle.
                </p>
              </div>
              <div className="p-8 sm:p-12 glass border-brand-gold/20 space-y-4 sm:space-y-6">
                <Shield className="w-10 h-10 sm:w-12 sm:h-12 text-brand-gold" />
                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tighter">Éthique Absolue</h3>
                <p className="text-white/60 text-sm sm:text-base leading-relaxed">
                  Tout projet ne respectant pas les normes de sécurité ou mettant en danger les personnes est systématiquement décliné.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 sm:py-32 bg-brand-gold text-brand-green text-center w-full">
        <div className="container mx-auto px-4 space-y-8 sm:space-y-10 w-full">
          <h2 className="text-[clamp(2rem,8vw,7rem)] font-black uppercase tracking-tighter leading-[0.95]">
            FAITES LE CHOIX <br />
            DE LA <span className="text-white">SOUVERAINETÉ.</span>
          </h2>
          <div className="pt-6 sm:pt-8 flex justify-center">
            <Button className="bg-brand-green text-white px-10 sm:px-16 py-6 sm:py-10 rounded-none uppercase font-black tracking-widest text-lg sm:text-xl hover:scale-105 transition-all w-full sm:w-auto text-center flex justify-center items-center">
              Solliciter le Diagnostic
            </Button>
          </div>
        </div>
      </section>

    </main>
  )
}

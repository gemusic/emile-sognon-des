"use client"

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Target, Gauge, Shield, BarChart3, Cpu, Zap } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function FacteurMoscou() {
  const principles = [
    {
      icon: <Target className="w-10 h-10 sm:w-12 sm:h-12" />,
      title: "Précision Absolue",
      description: "Une marge d'erreur de 0.01% héritée des standards d'ingénierie soviétique les plus rigoureux."
    },
    {
      icon: <Gauge className="w-10 h-10 sm:w-12 sm:h-12" />,
      title: "Mesure Scientifique",
      description: "Chaque variable opérationnelle est quantifiée, analysée et optimisée selon des modèles mathématiques éprouvés."
    },
    {
      icon: <Shield className="w-10 h-10 sm:w-12 sm:h-12" />,
      title: "Sécurité Infaillible",
      description: "Des protocoles de sécurité dérivés des industries les plus à risque (nucléaire, aérospatial)."
    },
    {
      icon: <BarChart3 className="w-10 h-10 sm:w-12 sm:h-12" />,
      title: "Optimisation Continue",
      description: "Amélioration constante des processus basée sur des données réelles et des retours terrains."
    },
    {
      icon: <Cpu className="w-10 h-10 sm:w-12 sm:h-12" />,
      title: "Automatisation Intelligente",
      description: "Déploiement de systèmes autonomes qui maintiennent l'excellence opérationnelle après mon départ."
    },
    {
      icon: <Zap className="w-10 h-10 sm:w-12 sm:h-12" />,
      title: "Rapidité d'Exécution",
      description: "Interventions structurées pour des résultats mesurables en 90 jours maximum."
    }
  ]

  return (
    <main className="min-h-screen bg-brand-green w-full overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="pt-32 sm:pt-40 pb-20 sm:pb-32 relative overflow-hidden w-full">
        <div className="container mx-auto px-4 relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-5xl mx-auto text-center space-y-8 sm:space-y-12"
          >
            <div className="inline-flex items-center gap-4">
              <div className="h-[1px] w-8 sm:w-12 bg-brand-gold"></div>
              <span className="text-brand-gold font-black uppercase tracking-[0.3em] sm:tracking-[0.5em] text-[8px] sm:text-[10px]">
                L'ADN de l'Excellence Industrielle
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-9xl font-black text-white leading-[0.9] sm:leading-[0.85] uppercase tracking-tighter">
              LE <br />
              <span className="text-brand-gold text-outline">FACTEUR MOSCOU.</span>
            </h1>
            
            <div className="p-6 sm:p-12 glass border-brand-gold/20 space-y-6 sm:space-y-8 text-left">
              <h2 className="text-2xl sm:text-3xl font-black text-brand-gold uppercase tracking-tighter">INGÉNIERIE DE LA RIGUEUR</h2>
              <div className="space-y-4 sm:space-y-6 text-lg sm:text-xl text-white/70 leading-relaxed">
                <p>
                  Le « Facteur Moscou » n'est pas une méthodologie de conseil. C'est un système d'ingénierie opérationnelle développé dans les environnements les plus exigeants au monde.
                </p>
                <p className="border-l-4 border-brand-gold pl-6 sm:pl-8 italic">
                  "Formé à l'Université de Moscou dans les années 80, j'ai hérité d'une discipline où l'erreur n'est pas une option. Cette rigueur, appliquée à l'industrie africaine, génère des gains de +30% en moins de 90 jours."
                </p>
                <p>
                  Cette approche combine la précision mathématique de l'école soviétique avec une connaissance profonde des réalités opérationnelles africaines.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Principles Grid */}
      <section className="py-20 sm:py-32 bg-white w-full">
        <div className="container mx-auto px-4 w-full">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl sm:text-5xl md:text-8xl font-black text-brand-green mb-12 sm:mb-20 text-center uppercase tracking-tighter leading-[0.9]">
              LES <span className="text-brand-gold">6 PILIERS</span> <br />
              DE LA PRÉCISION
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
              {principles.map((principle, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 sm:p-10 border border-brand-green/10 hover:border-brand-gold/50 transition-all group"
                >
                  <div className="text-brand-gold mb-6 group-hover:scale-110 transition-transform">
                    {principle.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-brand-green mb-4 uppercase tracking-tighter">
                    {principle.title}
                  </h3>
                  <p className="text-sm sm:text-base text-brand-green/60 leading-relaxed">
                    {principle.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 sm:py-32 bg-brand-green text-white relative overflow-hidden w-full">
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/moscow-bg.png" alt="Blueprint" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10 w-full">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter leading-[0.9]">
              TRANSFORMATION <br />
              <span className="text-brand-gold">CHIFFRÉE.</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
              <div className="space-y-4">
                <div className="text-5xl sm:text-6xl font-black text-brand-gold">+30%</div>
                <p className="text-white/60 uppercase tracking-widest text-xs sm:text-sm">Productivité</p>
              </div>
              <div className="space-y-4">
                <div className="text-5xl sm:text-6xl font-black text-brand-gold">-20%</div>
                <p className="text-white/60 uppercase tracking-widest text-xs sm:text-sm">Coûts d'exploitation</p>
              </div>
              <div className="space-y-4">
                <div className="text-5xl sm:text-6xl font-black text-brand-gold">100%</div>
                <p className="text-white/60 uppercase tracking-widest text-xs sm:text-sm">Conformité</p>
              </div>
            </div>
            
            <div className="pt-8 sm:pt-12">
              <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
                Ces résultats sont obtenus en appliquant rigoureusement chaque pilier du Facteur Moscou, avec un suivi terrain quotidien et des ajustements en temps réel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 sm:py-32 bg-brand-gold text-brand-green text-center w-full">
        <div className="container mx-auto px-4 space-y-8 sm:space-y-10 w-full">
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9]">
            DE LA THÉORIE <br />
            À <span className="text-white">L'ACTION.</span>
          </h2>
          <p className="text-xl sm:text-2xl font-bold text-brand-green/80 max-w-2xl mx-auto">
            Le Facteur Moscou se déploie à travers des modules d'intervention concrets, adaptés à chaque type de crise opérationnelle.
          </p>
          <div className="pt-6 sm:pt-8 flex justify-center">
            <Link href="/interventions">
              <Button className="bg-brand-green text-white px-10 sm:px-16 py-6 sm:py-10 rounded-none uppercase font-black tracking-widest text-lg sm:text-xl hover:scale-105 transition-all w-full sm:w-auto text-center flex justify-center items-center">
                Explorer les modules d'intervention
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}

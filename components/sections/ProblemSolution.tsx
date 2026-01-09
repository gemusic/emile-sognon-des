"use client"

import { ShieldCheck, TrendingUp, Users, AlertTriangle, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export function ProblemSolution() {
  return (
    <div className="bg-brand-green overflow-hidden w-full">
      {/* Problem Section */}
      <section className="py-20 sm:py-32 relative w-full">
        <div className="container mx-auto px-4 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-8 sm:space-y-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-4 sm:space-y-6"
              >
                <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-[0.9]">
                  LE COÛT DE <br />
                  <span className="text-brand-gold">L’INCERTITUDE</span> <br />
                  EST TROP ÉLEVÉ.
                </h2>
                <p className="text-base sm:text-lg text-white/60 leading-relaxed max-w-md">
                  Vous dirigez des organisations confrontées à des systèmes défaillants, des processus inefficaces ou des risques critiques.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-6 sm:p-10 bg-white/5 border-l-4 border-brand-gold relative group"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <AlertTriangle className="w-8 h-8 sm:w-12 sm:h-12 text-brand-gold" />
                </div>
                <p className="text-lg sm:text-xl text-brand-gold font-medium italic leading-relaxed">
                  "Je comprends la pression d'une production menacée et l'exigence de conformité face aux inspections d'État. Dans les secteurs des Mines, du BTP ou des Carrières, la rigueur n'est pas un luxe, c'est une condition de survie."
                </p>
              </motion.div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Systèmes Défaillants", desc: "Processus obsolètes et inefficaces qui freinent votre croissance." },
                { title: "Risques Critiques", desc: "Menaces réelles sur la sécurité des sites et des collaborateurs." },
                { title: "Pertes de Rentabilité", desc: "Fuites financières non maîtrisées impactant vos résultats." },
                { title: "Pression Réglementaire", desc: "Exigence de conformité absolue face aux audits d'État." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 sm:p-10 border border-white/10 hover:border-brand-gold/50 transition-all group relative overflow-hidden"
                >
                  <div className="absolute -bottom-4 -right-4 text-6xl sm:text-8xl font-black text-white/5 group-hover:text-brand-gold/10 transition-colors">
                    0{i + 1}
                  </div>
                  <h3 className="text-lg sm:text-xl font-black text-white mb-3 sm:mb-4 uppercase tracking-tighter">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-white/50 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 sm:py-32 bg-white text-brand-green relative w-full">
        <div className="absolute inset-0 industrial-grid opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10 w-full">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 lg:gap-12 mb-16 sm:mb-24">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl space-y-4 sm:space-y-6"
            >
              <h2 className="text-4xl sm:text-5xl md:text-8xl font-black leading-[0.85]">
                RESTAURER <br />
                <span className="text-brand-gold">L’AUTORITÉ</span> <br />
                SUR VOS OPÉRATIONS.
              </h2>
              <p className="text-lg sm:text-xl font-medium text-brand-green/70">
                SOGNON-DES Emile est "l'ultime recours" pour réparer les structures en crise et construire des systèmes résilients.
              </p>
            </motion.div>
            <div className="hidden lg:block h-[1px] flex-grow bg-brand-green/10 mx-12 mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-brand-green/10 w-full">
            {[
              {
                icon: <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10" />,
                title: "Performance Opérationnelle",
                desc: "Une productivité accrue de +30% grâce à une restructuration méthodique.",
                stat: "+30%"
              },
              {
                icon: <ShieldCheck className="w-8 h-8 sm:w-10 sm:h-10" />,
                title: "Rentabilité Maximisée",
                desc: "Une réduction directe de votre coût de revient par l'optimisation des ressources.",
                stat: "ROI"
              },
              {
                icon: <Users className="w-8 h-8 sm:w-10 sm:h-10" />,
                title: "Autonomie Durable",
                desc: "Des équipes locales formées pour maintenir l'excellence après mon départ.",
                stat: "100%"
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="p-8 sm:p-12 border-b md:border-b-0 md:border-r border-brand-green/10 last:border-r-0 last:border-b-0 hover:bg-brand-green hover:text-white transition-all group"
              >
                <div className="text-brand-gold mb-8 sm:mb-10 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="text-xl sm:text-2xl font-black mb-4 sm:mb-6 uppercase tracking-tighter">{item.title}</h3>
                <p className="text-sm sm:text-base text-brand-green/60 group-hover:text-white/70 mb-8 sm:mb-12 leading-relaxed">{item.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-4xl sm:text-5xl font-black text-brand-gold">{item.stat}</span>
                  <ArrowRight className="w-6 h-6 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

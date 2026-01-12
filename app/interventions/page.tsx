"use client"

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Wrench, AlertTriangle, TrendingUp, Shield, Users, FileCheck } from 'lucide-react'
import Link from 'next/link'

export default function Interventions() {
  const interventions = [
    {
      icon: <AlertTriangle className="w-10 h-10 sm:w-12 sm:h-12" />,
      title: "Diagnostic de Crise",
      duration: "15 jours",
      description: "Identification des failles critiques en situation d'urgence opérationnelle.",
      deliverables: ["Audit terrain complet", "Rapport des risques prioritaires", "Plan d'action immédiat"]
    },
    {
      icon: <Wrench className="w-10 h-10 sm:w-12 sm:h-12" />,
      title: "Restructuration Opérationnelle",
      duration: "3 mois",
      description: "Transformation complète des processus pour +30% de productivité.",
      deliverables: ["Redéfinition des processus", "Formation des équipes", "Systèmes de monitoring"]
    },
    {
      icon: <Shield className="w-10 h-10 sm:w-12 sm:h-12" />,
      title: "Mise en Conformité",
      duration: "2 mois",
      description: "Alignement aux normes étatiques et internationales les plus strictes.",
      deliverables: ["Audit de conformité", "Plan de correction", "Préparation aux inspections"]
    },
    {
      icon: <TrendingUp className="w-10 h-10 sm:w-12 sm:h-12" />,
      title: "Optimisation de Rentabilité",
      duration: "1-2 mois",
      description: "Réduction des coûts et maximisation des marges opérationnelles.",
      deliverables: ["Analyse des coûts", "Plan d'optimisation", "Suivi des indicateurs"]
    },
    {
      icon: <Users className="w-10 h-10 sm:w-12 sm:h-12" />,
      title: "Formation Souveraine",
      duration: "Variable",
      description: "Transfert de compétences pour l'autonomie durable des équipes locales.",
      deliverables: ["Programmes sur mesure", "Mentorat terrain", "Certification interne"]
    },
    {
      icon: <FileCheck className="w-10 h-10 sm:w-12 sm:h-12" />,
      title: "Audit Pré-Investissement",
      duration: "10 jours",
      description: "Due diligence technique pour sécuriser les acquisitions et investissements.",
      deliverables: ["Rapport technique", "Évaluation des risques", "Recommandations stratégiques"]
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
                L'Arsenal de la Transformation
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-9xl font-black text-white leading-[0.9] sm:leading-[0.85] uppercase tracking-tighter">
              INTERVENTIONS <br />
              <span className="text-brand-gold text-outline">& EXPERTISE.</span>
            </h1>
            
            <div className="p-6 sm:p-12 glass border-brand-gold/20 space-y-6 sm:space-y-8 text-left">
              <h2 className="text-2xl sm:text-3xl font-black text-brand-gold uppercase tracking-tighter">MODULARITÉ STRATÉGIQUE</h2>
              <div className="space-y-4 sm:space-y-6 text-lg sm:text-xl text-white/70 leading-relaxed">
                <p>
                  Chaque situation critique exige une réponse spécifique. Mon expertise se décline en modules d'intervention précis, chacun conçu pour résoudre un type particulier de défaillance opérationnelle.
                </p>
                <p className="border-l-4 border-brand-gold pl-6 sm:pl-8 italic">
                  "Je ne vends pas des rapports. Je déploie des systèmes. Chaque module est une machine opérationnelle autonome, capable de générer des résultats mesurables dans des délais contraints."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interventions Grid */}
      <section className="py-20 sm:py-32 bg-white w-full">
        <div className="container mx-auto px-4 w-full">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl sm:text-5xl md:text-8xl font-black text-brand-green mb-12 sm:mb-20 text-center uppercase tracking-tighter leading-[0.9]">
              LES <span className="text-brand-gold">6 MODULES</span> <br />
              D'INTERVENTION
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
              {interventions.map((intervention, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="border border-brand-green/10 p-8 sm:p-10 hover:border-brand-gold/50 transition-all"
                >
                  <div className="flex items-start gap-6 sm:gap-8">
                    <div className="text-brand-gold shrink-0">
                      {intervention.icon}
                    </div>
                    <div className="space-y-4 flex-1">
                      <div className="flex justify-between items-start">
                        <h3 className="text-xl sm:text-2xl font-black text-brand-green uppercase tracking-tighter">
                          {intervention.title}
                        </h3>
                        <span className="text-brand-gold font-black text-sm sm:text-base px-3 py-1 border border-brand-gold/30">
                          {intervention.duration}
                        </span>
                      </div>
                      <p className="text-sm sm:text-base text-brand-green/60 leading-relaxed">
                        {intervention.description}
                      </p>
                      <div className="space-y-2">
                        <h4 className="text-brand-green font-bold uppercase tracking-widest text-[10px]">Livrables</h4>
                        <ul className="space-y-2">
                          {intervention.deliverables.map((item, j) => (
                            <li key={j} className="flex items-center gap-2 text-sm text-brand-green/70">
                              <div className="w-1.5 h-1.5 bg-brand-gold"></div>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 sm:py-32 bg-brand-green text-white relative overflow-hidden w-full">
        <div className="container mx-auto px-4 relative z-10 w-full">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter leading-[0.9]">
              MÉTHODOLOGIE <br />
              <span className="text-brand-gold">GAGNANTE.</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 text-left">
              <div className="space-y-4">
                <div className="text-4xl font-black text-brand-gold">01</div>
                <h3 className="text-xl font-black uppercase tracking-tighter">Diagnostic Précis</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Analyse terrain exhaustive pour identifier les racines du problème, pas seulement les symptômes.
                </p>
              </div>
              <div className="space-y-4">
                <div className="text-4xl font-black text-brand-gold">02</div>
                <h3 className="text-xl font-black uppercase tracking-tighter">Déploiement Terrain</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Implication directe sur site avec les équipes opérationnelles pour un changement immédiat.
                </p>
              </div>
              <div className="space-y-4">
                <div className="text-4xl font-black text-brand-gold">03</div>
                <h3 className="text-xl font-black uppercase tracking-tighter">Autonomisation</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Transfert des compétences pour garantir la pérennité des résultats après mon départ.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 sm:py-32 bg-white w-full">
        <div className="container mx-auto px-4 text-center space-y-8 sm:space-y-10 w-full">
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-black text-brand-green uppercase tracking-tighter leading-[0.9]">
            L'EXPERTISE <br />
            <span className="text-brand-gold">VALIDÉE.</span>
          </h2>
          <p className="text-xl sm:text-2xl font-bold text-brand-green/80 max-w-2xl mx-auto">
            Derrière chaque module d'intervention se trouve 40 ans d'expérience terrain et une autorité reconnue par les instances étatiques.
          </p>
          <div className="pt-6 sm:pt-8 flex justify-center">
            <Link href="/autorite">
              <Button className="bg-brand-green text-white px-10 sm:px-16 py-6 sm:py-10 rounded-none uppercase font-black tracking-widest text-lg sm:text-xl hover:scale-105 transition-all w-full sm:w-auto text-center flex justify-center items-center">
                Consulter l'autorité
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}

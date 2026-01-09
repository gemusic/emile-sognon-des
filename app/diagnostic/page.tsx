"use client"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { motion } from 'framer-motion'
import { CheckCircle2, Clock, ShieldCheck, AlertCircle } from 'lucide-react'

export default function Diagnostic() {
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
                L’Engagement de Souveraineté
              </span>
            </div>
            
            <h1 className="text-[clamp(2rem,8vw,7rem)] font-black text-white leading-[0.95] uppercase tracking-tighter">
              INITIER LA <br />
              <span className="text-brand-gold text-outline">TRANSFORMATION.</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-white/60 leading-relaxed max-w-3xl mx-auto lg:mx-0">
              La marque SOGNON-DES Emile ne vend pas du simple conseil ; elle vend de la souveraineté opérationnelle. Pour garantir l'excellence, chaque collaboration débute par un cadre d'engagement strict.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mandatory Entry Section */}
      <section className="py-20 sm:py-32 bg-white w-full">
        <div className="container mx-auto px-4 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start lg:items-center">
            <div className="space-y-8 sm:space-y-10 text-center lg:text-left">
              <h2 className="text-[clamp(1.5rem,6vw,4rem)] font-black text-brand-green uppercase tracking-tighter leading-tight">
                L'ENTRÉE <br />
                <span className="text-brand-gold">OBLIGATOIRE.</span>
              </h2>
              <div className="space-y-6">
                <p className="text-lg sm:text-xl text-brand-green/70 leading-relaxed">
                  Le Diagnostic de Souveraineté est la porte d'entrée obligatoire pour toute nouvelle collaboration. Elle permet de sélectionner les clients sérieux et de garantir l'exclusivité de l'intervention.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 text-left">
                  <div className="space-y-2">
                    <span className="text-brand-gold font-black uppercase tracking-widest text-[10px]">Durée</span>
                    <div className="flex items-center gap-2 text-xl sm:text-2xl font-bold text-brand-green">
                      <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
                      15 Jours
                    </div>
                  </div>
                  <div className="space-y-2">
                    <span className="text-brand-gold font-black uppercase tracking-widest text-[10px]">Investissement</span>
                    <div className="text-xl sm:text-2xl font-bold text-brand-green">
                      5M - 6.5M XOF
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4 text-left">
                <h4 className="text-brand-green font-black uppercase tracking-widest text-[10px]">Livrables</h4>
                <ul className="space-y-3">
                  {[
                    "Audit complet du site",
                    "Analyse des failles critiques (sécurité et performance)",
                    "Rapport de recommandations stratégiques"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-brand-green/80 text-sm sm:text-base">
                      <CheckCircle2 className="w-5 h-5 text-brand-gold shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="p-8 sm:p-12 bg-brand-green text-white space-y-8 sm:space-y-10 relative overflow-hidden w-full text-left">
              <div className="absolute inset-0 industrial-grid opacity-10"></div>
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter">Le Pack « Transformation & Performance »</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-end border-b border-white/10 pb-4">
                  <span className="text-white/60 uppercase tracking-widest text-[10px]">Durée moyenne</span>
                  <span className="text-xl sm:text-2xl font-bold">3 Mois</span>
                </div>
                <div className="flex justify-between items-end border-b border-white/10 pb-4">
                  <span className="text-white/60 uppercase tracking-widest text-[10px]">Seuil minimal</span>
                  <span className="text-xl sm:text-2xl font-bold">15 - 20M XOF</span>
                </div>
              </div>
              <div className="space-y-6">
                <div className="space-y-4">
                  <h4 className="text-brand-gold font-black uppercase tracking-widest text-[10px]">Structure tarifaire mixte</h4>
                  <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                    <span className="text-white font-bold">Part fixe :</span> Couvre l'intervention, la supervision terrain et le déploiement des systèmes rigoureux du « Facteur Moscou ».
                  </p>
                  <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                    <span className="text-white font-bold">Part variable (Success Fees) :</span> Bonus lié aux gains réels générés (productivité +30% ou réduction des coûts 10-20%).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rules Section */}
      <section className="py-20 sm:py-32 bg-brand-green text-white w-full">
        <div className="container mx-auto px-4 w-full">
          <h2 className="text-[clamp(1.5rem,6vw,4rem)] font-black mb-12 sm:mb-20 text-center uppercase tracking-tighter leading-tight">
            MODALITÉS DE <span className="text-brand-gold">MOBILISATION</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
            <div className="p-8 sm:p-10 border border-white/10 space-y-4 sm:space-y-6">
              <ShieldCheck className="w-8 h-8 sm:w-10 sm:h-10 text-brand-gold" />
              <h3 className="text-lg sm:text-xl font-black uppercase tracking-tighter">Transparence Logistique</h3>
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                Les frais de déplacement, d'hébergement et de logistique sont inclus dans le forfait principal pour offrir une réactivité totale.
              </p>
            </div>
            <div className="p-8 sm:p-10 border border-white/10 space-y-4 sm:space-y-6">
              <Clock className="w-8 h-8 sm:w-10 sm:h-10 text-brand-gold" />
              <h3 className="text-lg sm:text-xl font-black uppercase tracking-tighter">Politique de Paiement</h3>
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                Acompte de 50 à 70% exigé avant tout déplacement. Pour les urgences critiques, le paiement intégral peut être requis.
              </p>
            </div>
            <div className="p-8 sm:p-10 border border-white/10 space-y-4 sm:space-y-6 sm:col-span-2 lg:col-span-1">
              <AlertCircle className="w-8 h-8 sm:w-10 sm:h-10 text-brand-gold" />
              <h3 className="text-lg sm:text-xl font-black uppercase tracking-tighter">Le Refus Stratégique</h3>
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                Aucune mission n'est acceptée sans autorité réelle sur les opérations critiques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 sm:py-32 bg-white w-full">
        <div className="container mx-auto px-4 w-full">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 sm:mb-16 space-y-4">
              <h2 className="text-[clamp(1.5rem,6vw,4rem)] font-black text-brand-green uppercase tracking-tighter leading-tight">
                SOLLICITER <span className="text-brand-gold">L'INTERVENTION.</span>
              </h2>
              <p className="text-brand-green/60 font-medium text-sm sm:text-base">Remplissez le formulaire pour initier votre Diagnostic de Souveraineté.</p>
            </div>
            
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-brand-green/50">Organisation</label>
                <Input placeholder="Grand groupe, État, Carrière..." className="rounded-none border-brand-green/10 focus:border-brand-gold h-12 sm:h-14 text-sm" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-brand-green/50">Niveau d'urgence</label>
                <Input placeholder="Critique, Stratégique, Préventif..." className="rounded-none border-brand-green/10 focus:border-brand-gold h-12 sm:h-14 text-sm" />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-brand-green/50">Nature de la crise ou du projet</label>
                <Textarea placeholder="Décrivez vos systèmes défaillants, besoins de restructuration ou conformité..." className="rounded-none border-brand-green/10 focus:border-brand-gold min-h-[120px] sm:min-h-[150px] text-sm" />
              </div>
              <div className="md:col-span-2 pt-4 flex justify-center">
                <Button className="w-full bg-brand-green text-white py-8 sm:py-10 rounded-none uppercase font-black tracking-[0.2em] sm:tracking-[0.3em] text-base sm:text-lg hover:bg-brand-gold hover:text-brand-green transition-all text-center flex justify-center items-center">
                  Valider ma demande de Diagnostic
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

    </main>
  )
}

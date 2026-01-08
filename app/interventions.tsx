"use client"

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Search, Zap, GraduationCap, ShieldCheck } from 'lucide-react'
import Image from 'next/image'

export default function Interventions() {
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
                L'Architecture des Services Premium
              </span>
            </div>
            
            <h1 className="text-[clamp(2rem,8vw,7rem)] font-black text-white leading-[0.95] uppercase tracking-tighter">
              TRANSFORMER <br />
              VOS ACTIFS PAR <br />
              <span className="text-brand-gold">L'ACTION DIRECTE.</span>
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 text-left">
              <p className="text-lg sm:text-xl text-white/60 leading-relaxed">
                L'offre de SOGNON-DES Emile est conçue pour les organisations exigeantes qui ne cherchent pas un simple rapport, mais une mutation profonde et mesurable de leurs opérations.
              </p>
              <div className="p-6 sm:p-8 glass border-brand-gold/20 space-y-4">
                <h3 className="text-brand-gold font-black uppercase tracking-widest text-xs sm:text-sm">La Triple Garantie</h3>
                <p className="text-white/80 font-medium text-sm sm:text-base">Performance opérationnelle, rentabilité maximisée et autonomie durable de vos équipes.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-20 sm:py-32 bg-white relative w-full">
        <div className="container mx-auto px-4 w-full">
          <div className="space-y-20 sm:space-y-32">
            {/* Module 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
                <div className="text-brand-gold font-black text-6xl sm:text-8xl opacity-20 leading-none">01</div>
                <h2 className="text-[clamp(1.5rem,6vw,4rem)] font-black text-brand-green uppercase tracking-tighter leading-tight">
                  AUDIT FLASH <br />
                  <span className="text-brand-gold">(LE DIAGNOSTIC DE PRÉCISION)</span>
                </h2>
                <p className="text-lg sm:text-xl text-brand-green/70 font-medium">L'évaluation complète de l'organisation sous 15 jours.</p>
                <ul className="space-y-4 text-left">
                  {[
                    "Identification des failles de sécurité et des fuites de performance.",
                    "Analyse critique des plans de tir et de la gestion des poudrières.",
                    "Détection des non-conformités réglementaires."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-brand-green/80 text-sm sm:text-base">
                      <Search className="w-5 h-5 sm:w-6 sm:h-6 text-brand-gold shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="p-6 bg-brand-green/5 border-l-4 border-brand-green text-left">
                  <p className="text-[10px] font-bold text-brand-green uppercase tracking-widest mb-1">Livrable</p>
                  <p className="text-brand-green/70 text-sm sm:text-base">Un plan de restructuration stratégique avec des indicateurs de succès prioritaires.</p>
                </div>
                <p className="text-[10px] font-black text-brand-gold uppercase tracking-[0.2em]">Note : Ce diagnostic est la porte d'entrée obligatoire.</p>
              </div>
              <div className="relative aspect-square industrial-border group overflow-hidden w-full max-w-md mx-auto lg:max-w-none">
                <Image src="/images/audit_final.png" alt="Audit Flash" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-brand-green/10 group-hover:bg-transparent transition-colors"></div>
              </div>
            </div>

            {/* Module 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="relative aspect-square industrial-border group overflow-hidden lg:order-first order-last w-full max-w-md mx-auto lg:max-w-none">
                <Image src="/images/restructuration_final.png" alt="Mission de Restructuration" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-brand-green/10 group-hover:bg-transparent transition-colors"></div>
              </div>
              <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
                <div className="text-brand-green font-black text-6xl sm:text-8xl opacity-10 leading-none">02</div>
                <h2 className="text-[clamp(1.5rem,6vw,4rem)] font-black text-brand-green uppercase tracking-tighter leading-tight">
                  MISSION DE RESTRUCTURATION <br />
                  <span className="text-brand-gold">(L'ACTION TERRAIN)</span>
                </h2>
                <p className="text-lg sm:text-xl text-brand-green/70 font-medium">Intervention directe d'une durée moyenne de 3 mois.</p>
                <ul className="space-y-4 text-left">
                  {[
                    "Réorganisation opérationnelle et redéploiement des équipes.",
                    "Restructuration des tirs à l'explosif et gestion des poudrières.",
                    "Supervision de haute sécurité pour la mise en conformité."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-brand-green/80 text-sm sm:text-base">
                      <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-brand-gold shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="p-6 sm:p-8 bg-brand-green text-white text-left">
                  <h4 className="text-brand-gold font-black uppercase tracking-widest text-[10px] mb-2">L'Engagement</h4>
                  <p className="text-base sm:text-lg font-medium">Une présence physique avec un pouvoir de décision total pour corriger les dysfonctionnements en temps réel.</p>
                </div>
              </div>
            </div>

            {/* Module 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
                <div className="text-brand-gold font-black text-6xl sm:text-8xl opacity-20 leading-none">03</div>
                <h2 className="text-[clamp(1.5rem,6vw,4rem)] font-black text-brand-green uppercase tracking-tighter leading-tight">
                  ÉLÉVATION DES COMPÉTENCES <br />
                  <span className="text-brand-gold">(LE MENTORAT PREMIUM)</span>
                </h2>
                <p className="text-lg sm:text-xl text-brand-green/70 font-medium">Garantir que l'excellence survit au départ du consultant.</p>
                <ul className="space-y-4 text-left">
                  {[
                    "Coaching pratique des ingénieurs et techniciens sur site.",
                    "Transfert de la \"Méthode SOGNON-DES\" axée sur la rigueur.",
                    "Objectif : 80% des équipes opérationnelles et autonomes."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-brand-green/80 text-sm sm:text-base">
                      <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-brand-gold shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative aspect-square industrial-border group overflow-hidden w-full max-w-md mx-auto lg:max-w-none">
                <Image src="/images/mentorat_final.png" alt="Élévation des Compétences" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-brand-green/10 group-hover:bg-transparent transition-colors"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-20 sm:py-32 bg-brand-green text-white w-full">
        <div className="container mx-auto px-4 w-full">
          <h2 className="text-[clamp(1.5rem,6vw,4rem)] font-black mb-12 sm:mb-20 text-center uppercase tracking-tighter leading-tight">
            SERVICES <span className="text-brand-gold">SPÉCIALISÉS</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full">
            <div className="p-8 sm:p-12 border border-white/10 hover:border-brand-gold transition-all group">
              <ShieldCheck className="w-10 h-10 sm:w-12 sm:h-12 text-brand-gold mb-6 sm:mb-8" />
              <h3 className="text-2xl sm:text-3xl font-black mb-4 sm:mb-6 uppercase tracking-tighter">Mise en Conformité</h3>
              <p className="text-white/60 text-base sm:text-lg leading-relaxed">
                Simulation d'audit officiel pour garantir 100% de conformité et éviter toute sanction ou suspension de licence.
              </p>
            </div>
            <div className="p-8 sm:p-12 border border-white/10 hover:border-brand-gold transition-all group">
              <Zap className="w-10 h-10 sm:w-12 sm:h-12 text-brand-gold mb-6 sm:mb-8" />
              <h3 className="text-2xl sm:text-3xl font-black mb-4 sm:mb-6 uppercase tracking-tighter">Ingénierie de Sécurité</h3>
              <p className="text-white/60 text-base sm:text-lg leading-relaxed">
                Élaboration de dossiers de prescription technique et épreuves d'équipements à haut risque (gaz, citernes).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 sm:py-32 bg-brand-gold text-brand-green text-center w-full">
        <div className="container mx-auto px-4 space-y-8 sm:space-y-10 w-full">
          <h2 className="text-[clamp(2rem,8vw,7rem)] font-black uppercase tracking-tighter leading-[0.95]">
            PASSEZ À UNE <br />
            EXPLOITATION <br />
            <span className="text-white">SOUVERAINE.</span>
          </h2>
          <div className="pt-6 sm:pt-8 flex justify-center">
            <Button className="bg-brand-green text-white px-10 sm:px-16 py-6 sm:py-10 rounded-none uppercase font-black tracking-widest text-lg sm:text-xl hover:scale-105 transition-all w-full sm:w-auto text-center flex justify-center items-center">
              Consulter l'Autorité
            </Button>
          </div>
        </div>
      </section>

    </main>
  )
}

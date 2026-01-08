"use client"

import { motion } from 'framer-motion'
import { ShieldAlert, Scale, Fingerprint } from 'lucide-react'

export default function Ethique() {
  return (
    <main className="min-h-screen bg-brand-green w-full overflow-x-hidden">
      
      <section className="pt-32 sm:pt-40 pb-20 sm:pb-32 relative overflow-hidden w-full">
        <div className="container mx-auto px-4 relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center space-y-8 sm:space-y-12"
          >
            <div className="inline-flex items-center gap-4">
              <div className="h-[1px] w-8 sm:w-12 bg-brand-gold"></div>
              <span className="text-brand-gold font-black uppercase tracking-[0.3em] sm:tracking-[0.5em] text-[8px] sm:text-[10px]">
                La Rareté de l'Expertise
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-9xl font-black text-white leading-[0.9] sm:leading-[0.85] uppercase tracking-tighter">
              ÉTHIQUE <br />
              <span className="text-brand-gold text-outline">& REFUS.</span>
            </h1>
            
            <div className="p-6 sm:p-12 glass border-brand-gold/20 space-y-6 sm:space-y-8 text-left">
              <h2 className="text-2xl sm:text-3xl font-black text-brand-gold uppercase tracking-tighter">PHILOSOPHIE D’INTERVENTION</h2>
              <div className="space-y-4 sm:space-y-6 text-lg sm:text-xl text-white/70 leading-relaxed">
                <p>
                  La valeur de la marque SOGNON-DES Emile est protégée par une sélection rigoureuse des engagements pour garantir un impact maximal.
                </p>
                <p className="border-l-4 border-brand-gold pl-6 sm:pl-8 italic">
                  "Nous refusons systématiquement le « Consulting de Papier » : toute mission purement théorique, sans suivi terrain ou supervision réelle, est déclinée."
                </p>
                <p>
                  L'expertise de SOGNON-DES Emile ne se définit pas comme un cabinet de conseil classique ou une agence généraliste, mais comme une expertise de niche de haut niveau.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 sm:py-32 bg-white w-full">
        <div className="container mx-auto px-4 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-16">
            <div className="space-y-6 sm:space-y-8">
              <ShieldAlert className="w-12 h-12 sm:w-16 sm:h-16 text-brand-green" />
              <h3 className="text-2xl sm:text-3xl font-black text-brand-green uppercase tracking-tighter">Sécurité Absolue</h3>
              <p className="text-sm sm:text-base text-brand-green/60 leading-relaxed">
                Tout projet ne respectant pas les normes de sécurité ou mettant en danger les personnes est systématiquement refusé.
              </p>
            </div>
            <div className="space-y-6 sm:space-y-8">
              <Scale className="w-12 h-12 sm:w-16 sm:h-16 text-brand-green" />
              <h3 className="text-2xl sm:text-3xl font-black text-brand-green uppercase tracking-tighter">Pouvoir de Décision</h3>
              <p className="text-sm sm:text-base text-brand-green/60 leading-relaxed">
                Aucune mission n'est acceptée sans une autorité réelle sur les opérations critiques.
              </p>
            </div>
            <div className="space-y-6 sm:space-y-8 sm:col-span-2 lg:col-span-1">
              <Fingerprint className="w-12 h-12 sm:w-16 sm:h-16 text-brand-green" />
              <h3 className="text-2xl sm:text-3xl font-black text-brand-green uppercase tracking-tighter">Intégrité & Rareté</h3>
              <p className="text-sm sm:text-base text-brand-green/60 leading-relaxed">
                La marque incarne l'excellence et la discipline opérationnelle héritées d'une formation internationale d'élite.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-32 bg-brand-green text-white w-full">
        <div className="container mx-auto px-4 w-full">
          <div className="max-w-3xl mx-auto space-y-12">
            <div className="p-8 sm:p-12 border border-brand-gold/30 space-y-6 sm:space-y-8">
              <h3 className="text-xl sm:text-2xl font-black text-brand-gold uppercase tracking-widest">Impact et Complexité</h3>
              <p className="text-lg sm:text-xl text-white/70 leading-relaxed">
                La priorité est donnée aux sites dont la complexité permet de délivrer une valeur haut de gamme. L'intervention garantit une autonomie durable ; le but est que les standards d'excellence survivent au départ de l'expert.
              </p>
              <p className="text-brand-gold font-bold uppercase tracking-widest text-xs sm:text-sm">
                Le seuil minimal d'engagement financier assure que seuls les clients dont la transformation est une priorité stratégique accèdent à l'expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}

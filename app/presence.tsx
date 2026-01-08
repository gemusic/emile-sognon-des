"use client"

import { motion } from 'framer-motion'
import { Globe, MapPin, Zap, Plane } from 'lucide-react'

export default function Presence() {
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
                L'Autorité Africaine au Standard International
              </span>
            </div>
            
            <h1 className="text-[clamp(2rem,8vw,7rem)] font-black text-white leading-[0.95] uppercase tracking-tighter">
              UN RAYONNEMENT <br />
              <span className="text-brand-gold text-outline">CONTINENTAL.</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-white/60 leading-relaxed max-w-3xl mx-auto lg:mx-0 text-left lg:text-left">
              La marque SOGNON-DES Emile dépasse les frontières nationales pour s’imposer comme la référence de l'excellence minière et industrielle en Afrique.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 sm:py-32 bg-white w-full">
        <div className="container mx-auto px-4 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start lg:items-center">
            <div className="space-y-8 sm:space-y-12 text-center lg:text-left">
              <h2 className="text-[clamp(1.5rem,6vw,4rem)] font-black text-brand-green uppercase tracking-tighter leading-tight">
                ZONES D'INTERVENTION <br />
                <span className="text-brand-gold">& ÉCOSYSTÈMES</span>
              </h2>
              <div className="space-y-6 sm:space-y-8 text-left">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-6 sm:p-8 bg-brand-green/5 border-l-4 border-brand-green">
                  <MapPin className="w-8 h-8 sm:w-10 sm:h-10 text-brand-gold shrink-0" />
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-black text-brand-green uppercase tracking-tighter">Afrique de l'Ouest</h3>
                    <p className="text-sm sm:text-base text-brand-green/70 leading-relaxed">
                      Bénin, Togo, Côte d'Ivoire, Burkina Faso. Accompagnement des carrières, restructuration des tirs et sécurisation des poudrières.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-6 sm:p-8 bg-brand-green/5 border-l-4 border-brand-green">
                  <MapPin className="w-8 h-8 sm:w-10 sm:h-10 text-brand-gold shrink-0" />
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-black text-brand-green uppercase tracking-tighter">Afrique Centrale</h3>
                    <p className="text-sm sm:text-base text-brand-green/70 leading-relaxed">
                      RDC. Intervention sur les grands sites industriels et miniers nécessitant une supervision de haute sécurité.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative aspect-square bg-brand-green overflow-hidden group w-full max-w-md mx-auto lg:max-w-none">
              <div className="absolute inset-0 industrial-grid opacity-20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Globe className="w-32 h-32 sm:w-48 sm:h-48 text-brand-gold group-hover:scale-110 transition-transform duration-1000" />
              </div>
              <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 right-6 sm:right-10 p-6 sm:p-8 glass border-brand-gold/20 text-left">
                <p className="text-white/80 font-bold uppercase tracking-widest text-[10px] mb-2">Héritage International</p>
                <p className="text-xs sm:text-sm text-white">Russie, Mali, Nigeria, Allemagne, France, Italie.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-32 bg-brand-green text-white w-full">
        <div className="container mx-auto px-4 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16">
            <div className="space-y-6 sm:space-y-8 text-left">
              <Zap className="w-10 h-10 sm:w-12 sm:h-12 text-brand-gold" />
              <h2 className="text-[clamp(1.5rem,5vw,3rem)] font-black uppercase tracking-tighter leading-tight">L'INTERFACE DES INVESTISSEURS ÉTRANGERS</h2>
              <div className="space-y-4 sm:space-y-6 text-white/60 text-sm sm:text-base leading-relaxed">
                <p>
                  <span className="text-white font-bold">Expertise Multilingue :</span> Maîtrise parfaite du français et du russe, permettant une collaboration fluide avec les partenaires techniques et financiers internationaux.
                </p>
                <p>
                  <span className="text-white font-bold">Le Pont entre deux Mondes :</span> Nous sommes l'interface crédible pour les investisseurs étrangers qui exigent des standards de performance internationaux sur le terrain africain.
                </p>
              </div>
            </div>
            <div className="space-y-6 sm:space-y-8 text-left">
              <Plane className="w-10 h-10 sm:w-12 sm:h-12 text-brand-gold" />
              <h2 className="text-[clamp(1.5rem,5vw,3rem)] font-black uppercase tracking-tighter leading-tight">MOBILITÉ ET RÉACTIVITÉ</h2>
              <div className="space-y-4 sm:space-y-6 text-white/60 text-sm sm:text-base leading-relaxed">
                <p>
                  Quelle que soit la localisation de votre site, notre structure est organisée pour une mobilisation rapide dès la validation du Diagnostic de Souveraineté.
                </p>
                <p>
                  L'expertise se déplace là où les systèmes sont en crise, apportant avec elle la discipline du « Facteur Moscou » et 40 ans de savoir-faire terrain.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}

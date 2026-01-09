"use client"

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-green w-full">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/hero-bg_v2.png" 
          alt="Industrial Site" 
          fill 
          className="object-cover opacity-40 grayscale"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-green/20 via-brand-green to-brand-green"></div>
        <div className="absolute inset-0 industrial-grid opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 w-full">
        <div className="max-w-5xl w-full mx-auto lg:mx-0">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-4 mb-6 sm:mb-8"
          >
            <div className="h-[1px] w-8 sm:w-12 bg-brand-gold"></div>
            <span className="text-brand-gold font-black uppercase tracking-[0.5em] text-[10px]">
              L'Ultime Recours
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[clamp(2.5rem,10vw,7.5rem)] font-black text-white leading-[0.95] mb-8 sm:mb-10 text-center lg:text-left"
          >
            QUAND L’ERREUR <br />
            <span className="text-brand-gold text-outline">N’EST PLUS</span> <br />
            UNE OPTION.
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-end"
          >
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
              <p className="text-lg sm:text-xl md:text-2xl text-white/80 font-medium leading-tight border-l-0 lg:border-l-2 border-brand-gold pl-0 lg:pl-8">
                Pour les leaders de l'industrie et des États, je transforme le chaos opérationnel en un système de haute performance, rentable et sécurisé.
              </p>
              <p className="text-xs sm:text-sm md:text-base text-white/50 max-w-md mx-auto lg:mx-0 uppercase tracking-widest leading-relaxed">
                Vous ne cherchez pas un rapport de recommandation supplémentaire. Vous cherchez une transformation réelle de vos actifs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                <Button className="bg-brand-gold hover:bg-brand-gold-bright text-brand-green px-8 sm:px-12 py-6 sm:py-8 rounded-none uppercase tracking-widest text-[10px] sm:text-xs font-black transition-all hover:scale-105 w-full sm:w-auto">
                  Sécuriser mon exploitation
                </Button>
                <Button variant="ghost" className="text-white hover:text-brand-gold px-6 sm:px-8 py-6 sm:py-8 rounded-none uppercase tracking-widest text-[10px] sm:text-xs font-black border border-white/10 hover:border-brand-gold transition-all w-full sm:w-auto">
                  La Méthode Moscou
                </Button>
              </div>
            </div>

            <div className="hidden lg:block relative aspect-square w-full max-w-md ml-auto">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border border-brand-gold/20 rounded-full"
              ></motion.div>
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 border border-brand-gold/10 rounded-full border-dashed"
              ></motion.div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <span className="block text-6xl font-black text-brand-gold">40</span>
                  <span className="block text-[10px] font-bold text-white/50 uppercase tracking-[0.3em]">Ans d'Excellence</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 sm:gap-4"
      >
        <span className="text-[8px] sm:text-[10px] font-bold text-white/30 uppercase tracking-[0.5em] vertical-text">Scroll</span>
        <div className="w-[1px] h-8 sm:h-12 bg-gradient-to-b from-brand-gold to-transparent"></div>
      </motion.div>
    </section>
  )
}

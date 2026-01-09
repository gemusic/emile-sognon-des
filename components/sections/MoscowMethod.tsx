"use client"

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { motion } from 'framer-motion'

export function MoscowMethod() {
  return (
    <section className="py-20 sm:py-32 bg-brand-green relative overflow-hidden w-full">
      <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
        <Image src="/images/moscow-bg.png" alt="Blueprint" fill className="object-cover" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-[4/5] group w-full max-w-md mx-auto lg:max-w-none"
          >
            <div className="absolute -inset-2 sm:-inset-4 border border-brand-gold/30 group-hover:border-brand-gold transition-colors duration-500"></div>
            <Image 
              src="/images/moscow-bg.png" 
              alt="Moscow Engineering Method" 
              fill 
              className="object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-green via-transparent to-transparent"></div>
            
            <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 right-6 sm:right-10 p-6 sm:p-8 glass border-brand-gold/20">
              <span className="text-brand-gold font-black text-4xl sm:text-6xl block mb-2">0.01</span>
              <span className="text-white/50 text-[10px] sm:text-xs uppercase tracking-[0.3em] font-bold">Marge d'erreur tolérée</span>
            </div>
          </motion.div>
          
          <div className="space-y-8 sm:space-y-12">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 sm:space-y-8"
            >
              <div className="inline-flex items-center gap-4">
                <div className="h-[1px] w-8 sm:w-12 bg-brand-gold"></div>
                <span className="text-brand-gold font-black uppercase tracking-[0.3em] sm:tracking-[0.5em] text-[8px] sm:text-[10px]">
                  L'Origine de la Rigueur
                </span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl md:text-8xl font-black text-white leading-[0.9] sm:leading-[0.85]">
                UNE DISCIPLINE <br />
                <span className="text-brand-gold">SANS CONCESSION.</span>
              </h2>
              
              <div className="space-y-6 sm:space-y-8 text-lg sm:text-xl text-white/60 leading-relaxed">
                <p>
                  Ma méthode repose sur le <span className="text-white font-bold">« Facteur Moscou »</span> : une ingénierie de la précision héritée des environnements les plus rigoureux au monde.
                </p>
                <p>
                  Cette discipline, alliée à mon parcours d'ancien Directeur du contrôle des normes d’État, garantit une gestion méthodique et prévisible de vos risques.
                </p>
              </div>

              <div className="pt-4 sm:pt-8">
                <Button className="bg-transparent border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-green px-8 sm:px-12 py-6 sm:py-10 rounded-none uppercase tracking-widest text-[10px] sm:text-xs font-black transition-all w-full sm:w-auto text-center flex justify-center items-center">
                  Découvrir la Méthode Moscou
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function FinalCTA() {
  return (
    <section className="py-24 sm:py-40 bg-brand-gold relative overflow-hidden group w-full">
      <div className="absolute inset-0 industrial-grid opacity-20"></div>
      <motion.div 
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 whitespace-nowrap text-[10rem] sm:text-[20rem] font-black text-brand-green/5 uppercase pointer-events-none select-none"
      >
        SOUVERAINETÉ SOUVERAINETÉ SOUVERAINETÉ SOUVERAINETÉ
      </motion.div>

      <div className="container mx-auto px-4 text-center relative z-10 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8 sm:space-y-12"
        >
          <h2 className="text-4xl sm:text-6xl md:text-9xl font-black text-brand-green leading-[0.9] sm:leading-[0.8] uppercase tracking-tighter">
            NE LAISSEZ PLUS <br />
            <span className="text-white">L'INEFFICACITÉ</span> <br />
            COMPROMETTRE <br />
            VOTRE AVENIR.
          </h2>
          
          <p className="text-lg sm:text-xl md:text-3xl font-bold text-brand-green/80 max-w-4xl mx-auto leading-tight">
            Que ce soit pour un diagnostic de crise ou une mise en conformité avant audit, chaque jour compte.
          </p>
          
          <div className="pt-8 sm:pt-12 flex justify-center">
            <Button className="bg-brand-green hover:bg-brand-green/90 text-white px-10 sm:px-16 py-8 sm:py-12 rounded-none uppercase tracking-[0.2em] sm:tracking-[0.3em] text-base sm:text-xl font-black shadow-[0_20px_50px_rgba(5,26,20,0.3)] hover:shadow-none transition-all hover:scale-105 active:scale-95 w-full sm:w-auto text-center flex justify-center items-center">
              Solliciter le Diagnostic
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

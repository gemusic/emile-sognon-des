"use client"

import { motion } from 'framer-motion'
import { FileText, Shield, Globe, Mail, Scale, BookOpen } from 'lucide-react'

export default function MentionsLegales() {
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
                Cadre Légal de la Souveraineté
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-9xl font-black text-white leading-[0.9] sm:leading-[0.85] uppercase tracking-tighter">
              MENTIONS <br />
              <span className="text-brand-gold text-outline">LÉGALES.</span>
            </h1>
            
            <div className="p-6 sm:p-12 glass border-brand-gold/20 space-y-6 sm:space-y-8 text-left">
              <h2 className="text-2xl sm:text-3xl font-black text-brand-gold uppercase tracking-tighter">CADRE JURIDIQUE</h2>
              <div className="space-y-4 sm:space-y-6 text-lg sm:text-xl text-white/70 leading-relaxed">
                <p>
                  Ce cadre légal définit les conditions de consultation et d'utilisation du site officiel de SOGNON-DES Emile, garantissant la transparence et la protection de la propriété intellectuelle.
                </p>
                <p className="border-l-4 border-brand-gold pl-6 sm:pl-8 italic">
                  "La rigueur juridique est l'extension naturelle de la discipline opérationnelle héritée du Facteur Moscou."
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
              <FileText className="w-12 h-12 sm:w-16 sm:h-16 text-brand-green" />
              <h3 className="text-2xl sm:text-3xl font-black text-brand-green uppercase tracking-tighter">Éditeur du Site</h3>
              <div className="space-y-3 text-sm sm:text-base text-brand-green/60 leading-relaxed">
                <p><span className="font-bold">Identité :</span> Vodéa Jérôme Emile SOGNON-DES</p>
                <p><span className="font-bold">Profession :</span> Ingénieur des Mines</p>
                <p><span className="font-bold">Statut :</span> Entreprise Individuelle</p>
                <p><span className="font-bold">IFU :</span> 0 2021 1284 9705</p>
              </div>
            </div>
            <div className="space-y-6 sm:space-y-8">
              <Shield className="w-12 h-12 sm:w-16 sm:h-16 text-brand-green" />
              <h3 className="text-2xl sm:text-3xl font-black text-brand-green uppercase tracking-tighter">Directeur de Publication</h3>
              <p className="text-sm sm:text-base text-brand-green/60 leading-relaxed">
                Responsable éditorial : Vodéa Jérôme Emile SOGNON-DES
              </p>
            </div>
            <div className="space-y-6 sm:space-y-8 sm:col-span-2 lg:col-span-1">
              <Globe className="w-12 h-12 sm:w-16 sm:h-16 text-brand-green" />
              <h3 className="text-2xl sm:text-3xl font-black text-brand-green uppercase tracking-tighter">Hébergement</h3>
              <p className="text-sm sm:text-base text-brand-green/60 leading-relaxed">
                Hébergeur : [À compléter par le développeur]<br />
                Adresse : [À compléter par le développeur]
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-32 bg-brand-green text-white w-full">
        <div className="container mx-auto px-4 w-full">
          <div className="max-w-3xl mx-auto space-y-12">
            <div className="p-8 sm:p-12 border border-brand-gold/30 space-y-6 sm:space-y-8">
              <h3 className="text-xl sm:text-2xl font-black text-brand-gold uppercase tracking-widest">Propriété Intellectuelle</h3>
              <p className="text-lg sm:text-xl text-white/70 leading-relaxed">
                L'ensemble des contenus présents sur ce site (textes, logos, méthodologies telles que le « Facteur Moscou », et signatures stratégiques) est la propriété exclusive de SOGNON-DES Emile.
              </p>
              <p className="text-lg sm:text-xl text-white/70 leading-relaxed">
                Toute reproduction, représentation, modification ou adaptation de tout ou partie des éléments du site est strictement interdite sans autorisation écrite préalable.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-32 bg-white w-full">
        <div className="container mx-auto px-4 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-16">
            <div className="space-y-6 sm:space-y-8">
              <Mail className="w-12 h-12 sm:w-16 sm:h-16 text-brand-green" />
              <h3 className="text-2xl sm:text-3xl font-black text-brand-green uppercase tracking-tighter">Contact Protocolaire</h3>
              <div className="space-y-4 text-sm sm:text-base text-brand-green/60 leading-relaxed">
                <p>
                  Pour toute question d'ordre légal ou administratif, veuillez utiliser exclusivement le protocole de contact établi via le formulaire de Diagnostic de Souveraineté.
                </p>
                <p>
                  Aucune sollicitation directe par email ou téléphone ne sera traitée sans évaluation préalable du dossier.
                </p>
              </div>
            </div>
            <div className="space-y-6 sm:space-y-8">
              <Scale className="w-12 h-12 sm:w-16 sm:h-16 text-brand-green" />
              <h3 className="text-2xl sm:text-3xl font-black text-brand-green uppercase tracking-tighter">Respect des Normes</h3>
              <p className="text-sm sm:text-base text-brand-green/60 leading-relaxed">
                Ce site respecte les réglementations en vigueur concernant la publication en ligne et la protection des données personnelles, dans le strict respect de l'éthique professionnelle de SOGNON-DES Emile.
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}

"use client"

import { motion } from 'framer-motion'
import { Shield, Lock, FileLock, Eye, AlertTriangle, Fingerprint } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Confidentialite() {
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
                Protocole de Sécurité Absolue
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-9xl font-black text-white leading-[0.9] sm:leading-[0.85] uppercase tracking-tighter">
              CONFIDENTIALITÉ <br />
              <span className="text-brand-gold text-outline">& SÉCURITÉ.</span>
            </h1>
            
            <div className="p-6 sm:p-12 glass border-brand-gold/20 space-y-6 sm:space-y-8 text-left">
              <h2 className="text-2xl sm:text-3xl font-black text-brand-gold uppercase tracking-tighter">ENGAGEMENT DE SOUVERAINETÉ</h2>
              <div className="space-y-4 sm:space-y-6 text-lg sm:text-xl text-white/70 leading-relaxed">
                <p>
                  Pour la marque SOGNON-DES Emile, la protection de vos données d'exploitation est une extension naturelle de la sécurité physique sur le terrain.
                </p>
                <p className="border-l-4 border-brand-gold pl-6 sm:pl-8 italic">
                  "Dans un secteur où l'information est un actif critique, nous appliquons la rigueur héritée du « Facteur Moscou » à la gestion de vos données numériques et techniques."
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
              <FileLock className="w-12 h-12 sm:w-16 sm:h-16 text-brand-green" />
              <h3 className="text-2xl sm:text-3xl font-black text-brand-green uppercase tracking-tighter">Collecte des Données</h3>
              <div className="space-y-3 text-sm sm:text-base text-brand-green/60 leading-relaxed">
                <p>Les informations recueillies via le formulaire de « Diagnostic de Souveraineté » sont exclusivement destinées à :</p>
                <ul className="space-y-2 pl-4">
                  <li>• L'évaluation technique de faisabilité</li>
                  <li>• La préparation protocolaire des interventions</li>
                  <li>• La personnalisation stratégique des modules</li>
                </ul>
              </div>
            </div>
            <div className="space-y-6 sm:space-y-8">
              <Lock className="w-12 h-12 sm:w-16 sm:h-16 text-brand-green" />
              <h3 className="text-2xl sm:text-3xl font-black text-brand-green uppercase tracking-tighter">Secret Professionnel</h3>
              <div className="space-y-3 text-sm sm:text-base text-brand-green/60 leading-relaxed">
                <p>En raison de son parcours d'ancien Directeur du contrôle des Établissements Classés et Industriels (OBRGM), l'expert est soumis à une éthique de confidentialité absolue.</p>
                <p><span className="font-bold">Confidentialité totale :</span> Aucune donnée n'est partagée avec des tiers.</p>
              </div>
            </div>
            <div className="space-y-6 sm:space-y-8 sm:col-span-2 lg:col-span-1">
              <Shield className="w-12 h-12 sm:w-16 sm:h-16 text-brand-green" />
              <h3 className="text-2xl sm:text-3xl font-black text-brand-green uppercase tracking-tighter">Protection des Actifs</h3>
              <p className="text-sm sm:text-base text-brand-green/60 leading-relaxed">
                Vos informations ne sont jamais vendues ni utilisées à des fins commerciales autres que votre propre transformation opérationnelle.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-32 bg-brand-green text-white w-full">
        <div className="container mx-auto px-4 w-full">
          <div className="max-w-3xl mx-auto space-y-12">
            <div className="p-8 sm:p-12 border border-brand-gold/30 space-y-6 sm:space-y-8">
              <h3 className="text-xl sm:text-2xl font-black text-brand-gold uppercase tracking-widest">Sécurité des Échanges Techniques</h3>
              <p className="text-lg sm:text-xl text-white/70 leading-relaxed">
                Nous mettons en œuvre des mesures de protection strictes pour garantir que vos documents stratégiques (dossiers de prescription technique, rapports d'audit, études de cas) restent inaccessibles aux acteurs non autorisés.
              </p>
              <p className="text-brand-gold font-bold uppercase tracking-widest text-xs sm:text-sm">
                La même rigueur appliquée sur le terrain pour la sécurité physique est transposée à la sécurité numérique de vos données.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-32 bg-white w-full">
        <div className="container mx-auto px-4 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-16">
            <div className="space-y-6 sm:space-y-8">
              <Eye className="w-12 h-12 sm:w-16 sm:h-16 text-brand-green" />
              <h3 className="text-2xl sm:text-3xl font-black text-brand-green uppercase tracking-tighter">Droits et Accès</h3>
              <div className="space-y-4 text-sm sm:text-base text-brand-green/60 leading-relaxed">
                <p>
                  Conformément aux régulations internationales sur la protection des données, vous disposez d'un droit permanent d'accès, de rectification et de suppression des informations vous concernant.
                </p>
                <p>
                  Pour exercer ce droit, veuillez suivre le canal de contact formel établi via le formulaire de Diagnostic de Souveraineté.
                </p>
                <div className="pt-4">
                  <Link href="/diagnostic">
                    <Button className="bg-brand-green text-white px-6 py-4 rounded-none uppercase tracking-widest text-xs font-black hover:bg-brand-gold hover:text-brand-green transition-all">
                      Exercer mes droits via le formulaire
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="space-y-6 sm:space-y-8">
              <AlertTriangle className="w-12 h-12 sm:w-16 sm:h-16 text-brand-green" />
              <h3 className="text-2xl sm:text-3xl font-black text-brand-green uppercase tracking-tighter">Engagement Continu</h3>
              <p className="text-sm sm:text-base text-brand-green/60 leading-relaxed">
                Cette politique de confidentialité est régulièrement révisée pour s'assurer qu'elle répond aux plus hauts standards de sécurité et de conformité, en cohérence avec l'évolution des réglementations et des technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}

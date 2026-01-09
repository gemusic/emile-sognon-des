"use client"

import { motion } from 'framer-motion'
import { ShieldCheck, FileText, AlertTriangle, CheckCircle } from 'lucide-react'

export default function Conformite() {
  return (
    <main className="min-h-screen bg-brand-green w-full overflow-x-hidden">
      
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
                Le Regard du Contrôleur
              </span>
            </div>
            
            <h1 className="text-[clamp(2rem,8vw,7rem)] font-black text-white leading-[0.95] uppercase tracking-tighter">
              ANTICIPER POUR <br />
              <span className="text-brand-gold text-outline">SÉCURISER.</span>
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 text-left">
              <p className="text-lg sm:text-xl text-white/60 leading-relaxed">
                La conformité n'est pas une simple formalité administrative, c'est le bouclier qui protège votre licence d'exploitation et votre réputation.
              </p>
              <div className="p-6 sm:p-8 glass border-brand-gold/20">
                <p className="text-white text-base sm:text-lg font-medium leading-relaxed">
                  Fort de son parcours d'ancien Directeur du contrôle des Établissements Classés et Industriels (OBRGM), Emile SOGNON-DES possède une connaissance intime des attentes des autorités de régulation.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 sm:py-32 bg-white w-full">
        <div className="container mx-auto px-4 w-full">
          <h2 className="text-[clamp(1.5rem,6vw,4rem)] font-black text-brand-green mb-12 sm:mb-20 uppercase tracking-tighter leading-tight text-center lg:text-left">
            SERVICES DE <span className="text-brand-gold">HAUTE CONFORMITÉ</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-brand-green/10 w-full">
            {[
              {
                icon: <FileText className="w-10 h-10 sm:w-12 sm:h-12" />,
                title: "Simulation d'Audit Officiel",
                desc: "Nous réalisons une inspection à blanc, identique à celle des services de l'État, pour garantir un taux de conformité de 100 % lors du contrôle réel."
              },
              {
                icon: <ShieldCheck className="w-10 h-10 sm:w-12 sm:h-12" />,
                title: "Mise aux Normes de Sécurité",
                desc: "Élaboration de dossiers de prescription technique et épreuves réglementaires pour les installations à haut risque (poudrières, réservoirs de gaz)."
              },
              {
                icon: <AlertTriangle className="w-10 h-10 sm:w-12 sm:h-12" />,
                title: "Gestion des Risques Critiques",
                desc: "Audit et restructuration des protocoles de tir à l'explosif pour s'aligner sur les standards internationaux de sécurité industrielle."
              }
            ].map((item, i) => (
              <div key={i} className="p-8 sm:p-12 border-b md:border-b-0 md:border-r border-brand-green/10 last:border-r-0 last:border-b-0 hover:bg-brand-green hover:text-white transition-all group text-left">
                <div className="text-brand-gold mb-8 sm:mb-10 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="text-xl sm:text-2xl font-black mb-4 sm:mb-6 uppercase tracking-tighter">{item.title}</h3>
                <p className="text-sm sm:text-base text-brand-green/60 group-hover:text-white/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-32 bg-brand-green text-white w-full">
        <div className="container mx-auto px-4 w-full">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-[clamp(1.5rem,6vw,4rem)] font-black mb-12 sm:mb-20 text-center uppercase tracking-tighter leading-tight">
              LA GARANTIE DE <span className="text-brand-gold">SÉRÉNITÉ</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 w-full">
              {[
                { title: "Zéro Sanction", desc: "En éliminant les non-conformités, vous évitez les amendes lourdes et les risques de suspension d'activité." },
                { title: "Protection du Dirigeant", desc: "Nous sécurisons la responsabilité pénale et civile des décideurs en instaurant des systèmes de contrôle irréprochables." },
                { title: "Standard International", desc: "Nos interventions préparent vos sites à répondre aux exigences des investisseurs et partenaires étrangers." }
              ].map((item, i) => (
                <div key={i} className="space-y-4 sm:space-y-6 text-left">
                  <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-brand-gold" />
                  <h3 className="text-lg sm:text-xl font-black uppercase tracking-tighter">{item.title}</h3>
                  <p className="text-white/60 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Shield, Lock, FileLock, Eye, AlertTriangle } from 'lucide-react'

export default function Confidentialite() {
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
                Protocole de Sécurité Absolue
              </span>
            </div>
            
            <h1 className="text-[clamp(2rem,8vw,7rem)] font-black text-white leading-[0.95] uppercase tracking-tighter">
              POLITIQUE DE <br />
              <span className="text-brand-gold text-outline">CONFIDENTIALITÉ.</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-white/60 leading-relaxed max-w-3xl mx-auto lg:mx-0">
              Pour la marque SOGNON-DES Emile, la protection de vos données d'exploitation est une extension naturelle de la sécurité physique sur le terrain.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 sm:py-32 bg-white w-full">
        <div className="container mx-auto px-4 w-full">
          <div className="max-w-4xl mx-auto space-y-16 sm:space-y-20">
            
            {/* Section 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4">
                <Shield className="w-8 h-8 text-brand-gold" />
                <h2 className="text-2xl sm:text-3xl font-black text-brand-green uppercase tracking-tighter">
                  1. Engagement de Sécurité Souveraine
                </h2>
              </div>
              <div className="pl-12 space-y-6">
                <p className="text-lg text-brand-green/80 leading-relaxed">
                  Dans un secteur où l'information est un actif critique, nous appliquons la rigueur héritée du « Facteur Moscou » à la gestion de vos données numériques et techniques.
                </p>
              </div>
            </motion.div>

            {/* Section 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4">
                <FileLock className="w-8 h-8 text-brand-gold" />
                <h2 className="text-2xl sm:text-3xl font-black text-brand-green uppercase tracking-tighter">
                  2. Collecte et Finalité des Données
                </h2>
              </div>
              <div className="pl-12 space-y-6">
                <p className="text-lg text-brand-green/80 leading-relaxed">
                  Les informations recueillies via le formulaire de « Diagnostic de Souveraineté » sont exclusivement destinées à :
                </p>
                <ul className="space-y-4 pl-6">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-brand-gold mt-2"></div>
                    <p className="text-lg text-brand-green/80">L'évaluation technique de la faisabilité de votre projet de restructuration ou de mise en conformité.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-brand-gold mt-2"></div>
                    <p className="text-lg text-brand-green/80">La préparation protocolaire des interventions de l'ingénieur Vodéa Jérôme Emile SOGNON-DES.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-brand-gold mt-2"></div>
                    <p className="text-lg text-brand-green/80">La personnalisation stratégique des modules de performance et de sécurité.</p>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Section 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4">
                <Lock className="w-8 h-8 text-brand-gold" />
                <h2 className="text-2xl sm:text-3xl font-black text-brand-green uppercase tracking-tighter">
                  3. Secret Professionnel et Non-Divulgation
                </h2>
              </div>
              <div className="pl-12 space-y-6">
                <p className="text-lg text-brand-green/80 leading-relaxed">
                  En raison de son parcours d'ancien Directeur du contrôle des Établissements Classés et Industriels (OBRGM), l'expert est soumis à une éthique de confidentialité absolue.
                </p>
                <div className="space-y-4">
                  <div className="p-6 border-l-4 border-brand-gold bg-brand-green/5">
                    <p className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-2">Confidentialité Totale</p>
                    <p className="text-brand-green/80">Aucune donnée relative à vos plans de tir, à la gestion de vos poudrières ou à vos indicateurs de rentabilité n'est partagée avec des tiers.</p>
                  </div>
                  <div className="p-6 border-l-4 border-brand-gold bg-brand-green/5">
                    <p className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-2">Protection des Actifs</p>
                    <p className="text-brand-green/80">Vos informations ne sont jamais vendues ni utilisées à des fins commerciales autres que votre propre transformation opérationnelle.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Section 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4">
                <AlertTriangle className="w-8 h-8 text-brand-gold" />
                <h2 className="text-2xl sm:text-3xl font-black text-brand-green uppercase tracking-tighter">
                  4. Sécurité des Échanges Techniques
                </h2>
              </div>
              <div className="pl-12 space-y-6">
                <p className="text-lg text-brand-green/80 leading-relaxed">
                  Nous mettons en œuvre des mesures de protection strictes pour garantir que vos documents stratégiques (dossiers de prescription technique, rapports d'audit, études de cas) restent inaccessibles aux acteurs non autorisés.
                </p>
              </div>
            </motion.div>

            {/* Section 5 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4">
                <Eye className="w-8 h-8 text-brand-gold" />
                <h2 className="text-2xl sm:text-3xl font-black text-brand-green uppercase tracking-tighter">
                  5. Droits et Accès
                </h2>
              </div>
              <div className="pl-12 space-y-6">
                <p className="text-lg text-brand-green/80 leading-relaxed">
                  Conformément aux régulations internationales sur la protection des données, vous disposez d'un droit permanent d'accès, de rectification et de suppression des informations vous concernant.
                </p>
                <p className="text-lg text-brand-green/80 leading-relaxed">
                  Pour exercer ce droit, veuillez suivre le canal de contact formel établi.
                </p>
                <div className="pt-6">
                  <Button 
                    className="bg-brand-green text-white px-8 py-6 rounded-none uppercase tracking-widest text-sm font-black hover:bg-brand-gold hover:text-brand-green transition-all"
                    onClick={() => window.location.href = '/diagnostic'}
                  >
                    Exercer mes droits via le formulaire
                  </Button>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

    </main>
  )
}

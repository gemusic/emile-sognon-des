import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { FileText, Shield, Globe, Mail } from 'lucide-react'

export default function MentionsLegales() {
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
                Cadre Légal de la Souveraineté
              </span>
            </div>
            
            <h1 className="text-[clamp(2rem,8vw,7rem)] font-black text-white leading-[0.95] uppercase tracking-tighter">
              MENTIONS <br />
              <span className="text-brand-gold text-outline">LÉGALES.</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-white/60 leading-relaxed max-w-3xl mx-auto lg:mx-0">
              Ce cadre légal définit les conditions de consultation et d'utilisation du site officiel de SOGNON-DES Emile, garantissant la transparence et la protection de la propriété intellectuelle.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 sm:py-32 bg-white w-full">
        <div className="container mx-auto px-4 w-full">
          <div className="max-w-4xl mx-auto space-y-12 sm:space-y-16">
            
            {/* Section 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4">
                <FileText className="w-8 h-8 text-brand-gold" />
                <h2 className="text-2xl sm:text-3xl font-black text-brand-green uppercase tracking-tighter">
                  1. Identification de l'Éditeur
                </h2>
              </div>
              <div className="pl-12 space-y-6 text-brand-green/80">
                <div className="space-y-2">
                  <p className="font-bold uppercase text-xs tracking-widest text-brand-gold">Identité</p>
                  <p className="text-lg">Vodéa Jérôme Emile SOGNON-DES</p>
                </div>
                <div className="space-y-2">
                  <p className="font-bold uppercase text-xs tracking-widest text-brand-gold">Profession</p>
                  <p className="text-lg">Ingénieur des Mines</p>
                </div>
                <div className="space-y-2">
                  <p className="font-bold uppercase text-xs tracking-widest text-brand-gold">Statut</p>
                  <p className="text-lg">Entreprise Individuelle</p>
                </div>
                <div className="space-y-2">
                  <p className="font-bold uppercase text-xs tracking-widest text-brand-gold">IFU</p>
                  <p className="text-lg">0 2021 1284 9705</p>
                </div>
                <div className="space-y-2">
                  <p className="font-bold uppercase text-xs tracking-widest text-brand-gold">Siège Social</p>
                  <p className="text-lg leading-relaxed">Fiéyégnon-Houta, 12ème Arrondissement,<br />Cotonou, Littoral, République du Bénin</p>
                </div>
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
                <Shield className="w-8 h-8 text-brand-gold" />
                <h2 className="text-2xl sm:text-3xl font-black text-brand-green uppercase tracking-tighter">
                  2. Directeur de la Publication
                </h2>
              </div>
              <div className="pl-12 space-y-4">
                <p className="text-lg text-brand-green/80">
                  Responsable éditorial : Vodéa Jérôme Emile SOGNON-DES
                </p>
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
                <Globe className="w-8 h-8 text-brand-gold" />
                <h2 className="text-2xl sm:text-3xl font-black text-brand-green uppercase tracking-tighter">
                  3. Hébergement du Site
                </h2>
              </div>
              <div className="pl-12 space-y-4">
                <p className="text-lg text-brand-green/80">
                  Hébergeur : [Nom de l'hébergeur à insérer par le développeur]<br />
                  Adresse : [Adresse de l'hébergeur à insérer par le développeur]
                </p>
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
                <FileText className="w-8 h-8 text-brand-gold" />
                <h2 className="text-2xl sm:text-3xl font-black text-brand-green uppercase tracking-tighter">
                  4. Propriété Intellectuelle
                </h2>
              </div>
              <div className="pl-12 space-y-4">
                <p className="text-lg text-brand-green/80 leading-relaxed">
                  L'ensemble des contenus présents sur ce site (textes, logos, méthodologies telles que le « Facteur Moscou », et signatures stratégiques) est la propriété exclusive de SOGNON-DES Emile.
                </p>
                <p className="text-lg text-brand-green/80 leading-relaxed">
                  Toute reproduction, représentation, modification ou adaptation de tout ou partie des éléments du site est strictement interdite sans autorisation écrite préalable.
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
                <Mail className="w-8 h-8 text-brand-gold" />
                <h2 className="text-2xl sm:text-3xl font-black text-brand-green uppercase tracking-tighter">
                  5. Contact Protocolaire
                </h2>
              </div>
              <div className="pl-12 space-y-6">
                <p className="text-lg text-brand-green/80 leading-relaxed">
                  Pour toute question d'ordre légal ou administratif, veuillez utiliser exclusivement le protocole de contact établi via le formulaire de Diagnostic de Souveraineté.
                </p>
                <p className="text-lg text-brand-green/80 leading-relaxed">
                  Aucune sollicitation directe par email ou téléphone ne sera traitée sans évaluation préalable du dossier.
                </p>
                <div className="pt-6">
                  <Button 
                    className="bg-brand-green text-white px-8 py-6 rounded-none uppercase tracking-widest text-sm font-black hover:bg-brand-gold hover:text-brand-green transition-all"
                    onClick={() => window.location.href = '/diagnostic'}
                  >
                    Accéder au formulaire de contact
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

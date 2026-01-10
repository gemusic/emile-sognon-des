import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="bg-brand-green text-white py-16 sm:py-24 border-t border-brand-gold/20 w-full">
      <div className="container mx-auto px-4 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16 sm:mb-20">
          {/* Bloc Identité */}
          <div className="space-y-6 sm:space-y-8">
            <div className="flex items-center gap-3">
              <Image src="/images/logo.png" alt="Logo" width={40} height={40} className="rounded-full border border-brand-gold/30 sm:w-[50px] sm:h-[50px]" />
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-black tracking-tighter uppercase">Vodéa Jérôme Emile</span>
                {/* Nom de famille ajouté ici */}
                <span className="text-brand-gold text-sm sm:text-base font-black uppercase tracking-tighter mt-1">SOGNON DES</span>
              </div>
            </div>
            <p className="text-brand-gold font-bold italic text-base sm:text-lg leading-tight">« Bâtir la Performance, Sécuriser l'Excellence »</p>
          </div>

          {/* Bloc Souveraineté Opérationnelle */}
          <div className="space-y-6 sm:space-y-8">
            <h3 className="text-brand-gold text-[10px] sm:text-xs font-black uppercase tracking-[0.3em]">Souveraineté Opérationnelle</h3>
            <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm font-bold uppercase tracking-widest">
              <li className="flex items-center gap-3 opacity-60">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-brand-gold"></div>
                Sécurité Absolue
              </li>
              <li className="flex items-center gap-3 opacity-60">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-brand-gold"></div>
                Rentabilité Mesurable
              </li>
              <li className="flex items-center gap-3 opacity-60">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-brand-gold"></div>
                Autonomie Durable
              </li>
            </ul>
          </div>

          {/* Bloc Navigation de Réassurance */}
          <div className="space-y-6 sm:space-y-8">
            <h3 className="text-brand-gold text-[10px] sm:text-xs font-black uppercase tracking-[0.3em]">Réassurance</h3>
            <nav className="flex flex-col gap-3 sm:gap-4 text-xs sm:text-sm font-bold uppercase tracking-widest">
              <Link href="/ethique" className="opacity-60 hover:opacity-100 hover:text-brand-gold transition-all">Éthique & Refus</Link>
              <Link href="/conformite" className="opacity-60 hover:opacity-100 hover:text-brand-gold transition-all">Conformité État</Link>
            </nav>
          </div>

          {/* Contact & Mentions */}
          <div className="space-y-6 sm:space-y-8">
            <h3 className="text-brand-gold text-[10px] sm:text-xs font-black uppercase tracking-[0.3em]">Présence Régionale</h3>
            <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm opacity-60 font-medium">
              <p>RDC, Burkina Faso, Côte d'Ivoire, Bénin.</p>
            </div>
          </div>
        </div>

        <div className="pt-8 sm:pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8 text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.2em] opacity-30 text-center md:text-left">
          <p>© {new Date().getFullYear()} SOGNON-DES Emile – L'Expert-Souverain de la Performance Industrielle.</p>
          <div className="flex gap-6 sm:gap-8">
            <Link href="/mentions-legales">Mentions Légales</Link>
            <Link href="/confidentialite">Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

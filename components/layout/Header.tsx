"use client"

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import { useState } from 'react'

const navLinks = [
  { name: "L'Approche", href: "/facteur-moscou" },
  { name: "Expertise", href: "/interventions" },
  { name: "Parcours", href: "/autorite" },
  { name: "Diagnostic", href: "/diagnostic" },
]

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleCloseMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-green/95 backdrop-blur-md border-b border-brand-gold/20 w-full">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between max-w-full overflow-hidden">
        <Link href="/" className="flex items-center gap-2 sm:gap-3 group shrink-0">
          <div className="relative w-8 h-8 sm:w-10 sm:h-10 overflow-hidden rounded-full border border-brand-gold/30 group-hover:border-brand-gold transition-colors">
            <Image src="/images/logo.png" alt="Logo" fill className="object-cover" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm sm:text-lg font-black tracking-tighter text-white leading-none uppercase font-sans">
              SOGNON-DES EMILE
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-[11px] font-black hover:text-brand-gold transition-colors uppercase tracking-[0.2em] text-white/70 hover:text-white whitespace-nowrap"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          <Link href="/diagnostic">
            <Button className="hidden sm:flex bg-[#0B3D2E] hover:bg-[#0B3D2E]/90 text-white px-4 sm:px-6 py-4 sm:py-6 rounded-none uppercase tracking-widest text-[9px] sm:text-[10px] font-black transition-all hover:scale-105 active:scale-95 border border-brand-gold/20">
              SOLLICITER UN AUDIT FLASH
            </Button>
          </Link>

          {/* Mobile Nav */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className="lg:hidden text-white hover:bg-white/10"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-brand-green border-brand-gold/20 text-white p-0 w-[85%] sm:w-[350px]">
              <SheetTitle className="sr-only">Menu de navigation</SheetTitle>
              <div className="flex flex-col h-full p-8 sm:p-10">
                <div className="mb-12">
                  <Image src="/images/logo.png" alt="Logo" width={60} height={60} className="rounded-full border border-brand-gold/30" />
                </div>
                <nav className="flex flex-col gap-6 sm:gap-8">
                  {navLinks.map((link) => (
                    <Link 
                      key={link.name} 
                      href={link.href} 
                      className="text-2xl sm:text-3xl font-black uppercase tracking-tighter hover:text-brand-gold transition-colors"
                      onClick={handleCloseMobileMenu}
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto pt-10">
                  <Link href="/diagnostic" onClick={handleCloseMobileMenu} className="block">
                    <Button className="w-full bg-[#0B3D2E] text-white py-6 sm:py-8 rounded-none uppercase font-black tracking-widest text-xs text-center flex justify-center items-center border border-brand-gold/20">
                      SOLLICITER UN AUDIT FLASH
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

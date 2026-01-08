import { Hero } from '@/components/sections/Hero'
import { ProblemSolution } from '@/components/sections/ProblemSolution'
import { MoscowMethod, FinalCTA } from '@/components/sections/MoscowMethod'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProblemSolution />
      <MoscowMethod />
      <FinalCTA />
    </main>
  )
}

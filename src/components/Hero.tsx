import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-primary/70 to-secondary/20 relative">
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-5xl text-white md:text-7xl font-bold mb-6">Hi, I'm Imvanz</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">Teruntuk Kamu Semoga kamu bisa berkembang lebih jauh lagi aku yakin kamu pasti bisa semangat:)</p>
        <Button size="lg" className="group">
          View My Work
          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>
  )
}

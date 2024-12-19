import { Github, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-secondary py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <p>&copy; 2023 Imvanz. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-primary hover:text-primary/80 transition-colors">
              <Github size={24} />
            </a>
            <a href="#" className="text-primary hover:text-primary/80 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-primary hover:text-primary/80 transition-colors">
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}


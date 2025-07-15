import { Separator } from "@/components/ui/separator"
import { Sparkle } from "lucide-react"

const Footer = () => {
  return (
    <footer className="container mx-auto px-4 mt-12 mb-8">
      <Separator className="bg-primary/20 mb-6" />
      <div className="flex justify-center items-center text-center text-foreground/70">
        <p>© 2025 Vipul Milind Vadhe. All rights reserved.</p>
        <Sparkle className="w-4 h-4 ml-2 text-accent" />
      </div>
    </footer>
  )
}

export default Footer

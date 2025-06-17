import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown, Facebook, Instagram, Play, Youtube } from "lucide-react"
import Link from "next/link"

export default function Component() {
  const formatTabs = ["T20", "ODI", "Test", "T10", "The Hundred"]
  const pointSections = [
    "Batting Points",
    "Bowling Points",
    "Fielding poins",
    "Strike Rate",
    "Economy Rate",
    "Other Terms & Conditions",
    "Impact and x - factor substitutes player rules",
    "For Warm - Up Matches",
    "LIVE Fantasy Terms & Conditions",
    "The Hundred Cricket T&C",
  ]

  return (
    <div className="min-h-screen bg-[#fffcfc]">
      {/* Header */}
      <header className="bg-[#1b1253] px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 bg-[#fef0b7] rounded-full flex items-center justify-center">
              <div className="text-[#1b1253] font-bold text-sm">CRICGEM</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#" className="text-white hover:text-[#fef0b7] transition-colors">
              How to Play
            </Link>
            <Link href="#" className="text-white hover:text-[#fef0b7] transition-colors">
              Point System
            </Link>
            <Link href="#" className="text-white hover:text-[#fef0b7] transition-colors">
              About Us
            </Link>
            <Link href="#" className="text-white hover:text-[#fef0b7] transition-colors">
              Blog
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-64 bg-gradient-to-r from-[#1b1253]/80 to-[#494175]/80">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/cricket-stadium.png')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1b1253]/80 to-[#494175]/60" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">FANTASY POINTS SYSTEM CRICKET</h1>
          <p className="text-xl text-white/90">Thatcampairs How You Score to become a Winner!</p>
        </div>
      </section>

      {/* Format Tabs */}
      <section className="max-w-4xl mx-auto px-6 py-8">
        <div className="flex flex-wrap gap-2 mb-8">
          {formatTabs.map((format, index) => (
            <Button
              key={format}
              variant={index === 0 ? "default" : "outline"}
              className={
                index === 0
                  ? "bg-[#494175] hover:bg-[#494175]/90 text-white px-6 py-2 rounded-md"
                  : "border-[#d3d3d3] text-[#000000] hover:bg-[#d3d3d3]/20 px-6 py-2 rounded-md"
              }
            >
              {format}
            </Button>
          ))}
        </div>

        {/* Point Sections */}
        <div className="space-y-4">
          {pointSections.map((section) => (
            <Card key={section} className="border border-[#d3d3d3] bg-white">
              <Collapsible>
                <CollapsibleTrigger asChild>
                  <CardContent className="p-4 cursor-pointer hover:bg-[#d3d3d3]/10 transition-colors">
                    <div className="flex items-center justify-between">
                      <h3 className="text-[#000000] font-medium text-lg">{section}</h3>
                      <ChevronDown className="h-5 w-5 text-[#494175] transition-transform duration-200" />
                    </div>
                  </CardContent>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <CardContent className="px-4 pb-4 pt-0">
                    <div className="text-[#000000]/70 text-sm">Content for {section} would go here...</div>
                  </CardContent>
                </CollapsibleContent>
              </Collapsible>
            </Card>
          ))}
        </div>
      </section>
  
        {/* Footer */}
        <footer className="bg-[#1b1253] text-white mt-16">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Logo and Social */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 bg-[#fef0b7] rounded-full flex items-center justify-center">
                    <div className="text-[#1b1253] font-bold text-sm">CRICGEM</div>
                  </div>
                  <span className="text-2xl font-bold">CRICGEM</span>
                </div>
                <div className="flex gap-4">
                  <Youtube className="w-6 h-6 hover:text-[#fef0b7] cursor-pointer transition-colors" />
                  <Instagram className="w-6 h-6 hover:text-[#fef0b7] cursor-pointer transition-colors" />
                  <Facebook className="w-6 h-6 hover:text-[#fef0b7] cursor-pointer transition-colors" />
                  <Play className="w-6 h-6 hover:text-[#fef0b7] cursor-pointer transition-colors" />
                </div>
              </div>
  
              {/* Quick Links */}
              <div>
                <h4 className="text-lg font-semibold mb-4">QUICK LINKS</h4>
                <div className="space-y-2">
                  <Link href="#" className="block hover:text-[#fef0b7] transition-colors">
                    About Us
                  </Link>
                  <Link href="#" className="block hover:text-[#fef0b7] transition-colors">
                    Privacy Policy
                  </Link>
                  <Link href="#" className="block hover:text-[#fef0b7] transition-colors">
                    Teams & Conditions
                  </Link>
                  <Link href="#" className="block hover:text-[#fef0b7] transition-colors">
                    Contact us
                  </Link>
                </div>
              </div>
  
              {/* Resources */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Resources</h4>
                <div className="space-y-2">
                  <Link href="#" className="block hover:text-[#fef0b7] transition-colors">
                    Blogs
                  </Link>
                </div>
              </div>
  
              {/* Company */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Company</h4>
                <div className="space-y-2">
                  <Link href="#" className="block hover:text-[#fef0b7] transition-colors">
                    Partner with us
                  </Link>
                </div>
              </div>
            </div>
  
            <div className="border-t border-white/20 mt-8 pt-8 text-center">
              <p className="text-white/80">Copyright © 2025 cricgem.in</p>
            </div>
          </div>
        </footer>
      </div>
    )
  }
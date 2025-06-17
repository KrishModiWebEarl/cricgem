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
        
      </div>
    )
  }
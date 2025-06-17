import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      

      {/* Hero Section */}
      <section className="relative h-64 bg-gradient-to-r from-orange-400 to-blue-400 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative text-center text-white z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto px-4">
            We craft worlds where dragons fly,
            <br />
            heroes rise, and destiny awaits every player.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        {/* Who we are Section */}
        <section className="bg-[#605a87] rounded-2xl p-8 text-white relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-start gap-8">
            <div className="flex-1">
              <div className="inline-block bg-white text-[#605a87] px-4 py-2 rounded-full text-sm font-medium mb-6">
                Who we are
              </div>
              <div className="space-y-4 text-sm leading-relaxed">
                <p>CricGem is the flagship product of Fantasy Sports WebEarl Technologies Private Limited.</p>
                <p>
                  CricGem is one of India's leading fantasy sports apps, where users engage in thrilling Fantasy Cricket
                  competitions.
                </p>
                <p>
                  Users can create their own fantasy teams using real-life players from upcoming matches, earn points
                  based on live performances, and compete against fellow fans to rise up the leaderboard.
                </p>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="w-48 h-48 bg-[#ffce31] rounded-full flex items-center justify-center relative">
                <div className="text-center">
                  <div className="text-[#1b1253] font-bold text-2xl mb-2">CRICGEM</div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-6 h-6 bg-[#1b1253] rounded-full"></div>
                    <div className="w-8 h-1 bg-[#1b1253] rounded"></div>
                    <div className="w-8 h-1 bg-[#1b1253] rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="bg-[#c8b5e8] rounded-2xl p-8 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="w-64 h-48 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl">🏃‍♂️⚽🏃‍♀️</div>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="inline-block bg-white text-[#605a87] px-4 py-2 rounded-full text-sm font-medium mb-6">
                Our Mission
              </div>
              <div className="space-y-4 text-[#1b1253] text-sm leading-relaxed">
                <p>CricGem is the flagship product of Fantasy Sports WebEarl Technologies Private Limited.</p>
                <p>
                  CricGem is one of India's leading fantasy sports apps, where users engage in thrilling Fantasy Cricket
                  competitions.
                </p>
                <p>
                  Users can create their own fantasy teams using real-life players from upcoming matches, earn points
                  based on live performances, and compete against fellow fans to rise up the leaderboard.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="bg-[#605a87] rounded-2xl p-8 text-white">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="grid grid-cols-2 gap-6 flex-1">
              <div className="bg-black/20 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold mb-2">100+</div>
                <div className="text-sm opacity-80">Employees</div>
              </div>
              <div className="bg-black/20 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold mb-2">25M+</div>
                <div className="text-sm opacity-80">Trusted Users</div>
              </div>
              <div className="bg-black/20 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold mb-2">25M+</div>
                <div className="text-sm opacity-80">Trusted Users</div>
              </div>
              <div className="bg-black/20 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold mb-2">100+</div>
                <div className="text-sm opacity-80">Employees</div>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="w-64 h-64 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 bg-blue-600 rounded-full flex items-center justify-center relative">
                    <div className="text-white font-bold">CRICGEM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Reviews Section */}
      <section className="bg-[#f1f1f1] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#605a87] mb-4">REVIEWS & RATING</h2>
            <p className="text-[#1b1253] font-medium">APP RATINGS : 3.7</p>
          </div>

          <div className="relative">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="rounded-full bg-white shadow-md">
                <ChevronLeft className="w-5 h-5" />
              </Button>

              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-bold">JD</span>
                      </div>
                      <div>
                        <div className="font-medium text-[#1b1253]">Jane Dan</div>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-[#ffce31] text-[#ffce31]" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      Jane Dan Forged in the heart of a fallen star, this rifle hums with ancient power Forged in the
                      heart of a fallen star, this rifle hums with ancient power.
                    </p>
                    <div className="text-xs text-gray-400 border border-gray-200 rounded px-2 py-1 inline-block">
                      WINNING AMOUNT 2500/-
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-bold">JD</span>
                      </div>
                      <div>
                        <div className="font-medium text-[#1b1253]">Jane Dan</div>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-[#ffce31] text-[#ffce31]" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      Jane Dan Forged in the heart of a fallen star, this rifle hums with ancient power Forged in the
                      heart of a fallen star, this rifle hums with ancient power.
                    </p>
                    <div className="text-xs text-gray-400 border border-gray-200 rounded px-2 py-1 inline-block">
                      WINNING AMOUNT 2500/-
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Button variant="ghost" size="icon" className="rounded-full bg-white shadow-md">
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      
    </div>
  )
}

"use client"

import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"

export default function Component() {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0)

  const reviews = [
    {
      name: "Rahul Sharma",
      rating: 5,
      text: "Amazing app! Love the user interface and the variety of contests available. I've been winning regularly and the withdrawal process is super smooth. Highly recommended for all cricket fans!",
      winAmount: "₹5,200/-",
      avatar: "/assets/About/tom.jpg",
      initials: "RS",
    },
    {
      name: "Priya Patel",
      rating: 4,
      text: "Great fantasy cricket platform with fair play policies. The live scoring system is accurate and updates are instant. Customer support is also very responsive. Keep it up CricGem!",
      winAmount: "₹3,150/-",
      avatar: "/path/to/user2-avatar.jpg",
      initials: "PP",
    },
    {
      name: "Amit Kumar",
      rating: 5,
      text: "Been using CricGem for over a year now. The app is smooth, contests are fair, and payouts are always on time. Best fantasy cricket app in India! The mega contests are especially exciting.",
      winAmount: "₹8,750/-",
      avatar: "/path/to/user3-avatar.jpg",
      initials: "AK",
    },
    {
      name: "Sneha Reddy",
      rating: 5,
      text: "Love the new features and regular updates. The app keeps getting better! Fantasy cricket has never been this fun. Great job CricGem team for creating such an engaging platform.",
      winAmount: "₹4,400/-",
      avatar: "/path/to/user4-avatar.jpg",
      initials: "SR",
    },
  ]

  const nextReviews = () => {
    setCurrentReviewIndex((prev) => (prev + 2) % reviews.length)
  }

  const prevReviews = () => {
    setCurrentReviewIndex((prev) => (prev - 2 + reviews.length) % reviews.length)
  }

  const getCurrentReviews = () => {
    return [reviews[currentReviewIndex], reviews[(currentReviewIndex + 1) % reviews.length]]
  }

  return (
    <div className="min-h-screen bg-white mt-[80px]">
      {/* About Us Section with Background Image */}
      <section
        className="relative py-16 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/assets/About/Stadium.jpg)" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
        <div className="relative max-w-6xl mx-auto px-6 z-10">
          <div className="text-center mb-16">
            <h1 className="mt-16 text-4xl md:text-5xl font-semibold font-['Poppins'] text-white mb-4">About Us</h1>
            <p className="text-lg md:text-xl font-['Poppins'] text-white/90 max-w-2xl mx-auto">
             We craft worlds where dragons fly, heroes rise, and destiny awaits every player.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        {/* Who we are Section */}
        <section className="bg-[#605a87] rounded-2xl p-8 text-white relative overflow-visible border border-black">
          <div className="absolute -top-6 left-6 inline-block bg-white text-[#605a87] px-6 py-3 rounded-lg text-sm font-semibold z-10 border border-black">
            Who we are
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1 order-1 lg:order-1">
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
            <div className="flex-shrink-0 order-2 lg:order-2">
              <div className="flex items-center justify-center">
                <img 
                  src="/Assets/logo.png" 
                  alt="CricGem Logo" 
                  className="w-64 h-64 object-contain" 
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="bg-[#c8b5e8] rounded-2xl p-8 relative overflow-visible border border-black">
          <div className="absolute -top-6 right-6 inline-block bg-white text-[#1b1253] px-6 py-3 rounded-lg text-sm font-semibold z-10 border border-black">
            Our Mission
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1 order-1 lg:order-1">
              <div className="w-64 h-50 relative flex items-center justify-center mx-auto lg:mx-0">
                <img
                  src="/assets/About/ball.png"
                  alt="Sports Illustration"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
            <div className="flex-1 order-2 lg:order-2">
              <div className="text-center lg:text-right">
                <div className="space-y-4 text-[#1b1253] text-sm leading-relaxed">
                  <p>
                    Our mission is to bring excitement of fantasy sports directly to the fingertips of cricket fans
                    across India.
                  </p>
                  <p>
                    We aim to create an engaging platform where cricket enthusiasts can showcase their knowledge,
                    strategic thinking, and passion for the game.
                  </p>
                  <p>
                    Through innovative features and seamless user experience, we strive to make fantasy cricket
                    accessible and enjoyable for everyone, from beginners to seasoned players.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="bg-[#605a87] rounded-2xl p-8 text-white border border-black">
          <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-8">
            <div className="flex flex-col gap-6 order-1">
              <div className="bg-black/20 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold mb-2">100+</div>
                <div className="text-sm opacity-80">Employees</div>
              </div>
              <div className="bg-black/20 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold mb-2">25M+</div>
                <div className="text-sm opacity-80">Trusted Users</div>
              </div>
            </div>

            <div className="flex-shrink-0 order-2 mx-auto md:mx-0">
              <div className="w-64 h-64 mb-2 relative flex items-center justify-center">
                <img
                  src="/assets/About/player.png"
                  alt="CricGem Team Member"
                  className="object-contain"
                />
              </div>
            </div>

            <div className="flex flex-col gap-6 order-3">
              <div className="bg-black/20 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold mb-2">25M+</div>
                <div className="text-sm opacity-80">Trusted Users</div>
              </div>
              <div className="bg-black/20 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold mb-2">100+</div>
                <div className="text-sm opacity-80">Employees</div>
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
            <p className="text-[#1b1253] font-medium">APP RATINGS : 4.2</p>
          </div>

          <div className="relative">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-white shadow-md hover:bg-gray-50"
                onClick={prevReviews}
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
                {getCurrentReviews().map((review, index) => (
                  <Card key={currentReviewIndex + index} className="bg-white shadow-sm border border-black">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-blue-600 font-bold text-sm">{review.initials}</span>
                        </div>
                        <div>
                          <div className="font-medium text-[#1b1253]">{review.name}</div>
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < review.rating ? "fill-[#ffce31] text-[#ffce31]" : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mb-4">{review.text}</p>
                      <div className="text-xs text-gray-400 border border-gray-200 rounded px-2 py-1 inline-block">
                        WINNING AMOUNT {review.winAmount}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-white shadow-md hover:bg-gray-50"
                onClick={nextReviews}
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

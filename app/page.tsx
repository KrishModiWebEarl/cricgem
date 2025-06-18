"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { FaEnvelope, FaTelegramPlane, FaPhoneAlt } from "react-icons/fa"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

import { ChevronLeft, ChevronRight, Plus, Minus } from "lucide-react"

function MobileAppSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const images = [
    "/Assets/howtoplay/phone1.png",
    "/Assets/howtoplay/phone2.png",
    "/Assets/howtoplay/phone3.png",
    "/Assets/howtoplay/phone4.png",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length)
    }, 3000) // Auto-rotate every 3 seconds

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="min-[900px]:hidden flex flex-col items-center">
      {/* Single Phone Display */}
      <div className="relative group mb-6">
        {/* Outer Glow Effect */}
        <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 rounded-[2rem] blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Premium Frame Container */}
        <div className="relative">
          {/* Metallic Frame Border */}
          <div className="absolute -inset-1 bg-gradient-to-br from-gray-300 via-gray-100 to-gray-400 rounded-[1.75rem] shadow-2xl"></div>

          {/* Inner Frame Shadow */}
          <div className="absolute -inset-0.5 bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-[1.65rem]"></div>

          {/* Phone Container */}
          <div className="relative w-48 h-96 bg-black rounded-3xl overflow-hidden shadow-2xl border-2 border-gray-800">
            {/* Screen Bezel */}
            <div className="absolute inset-2 bg-black rounded-[1.25rem] overflow-hidden">
              {/* Screen Content */}
              <div className="w-full h-full bg-white rounded-[1.125rem] overflow-hidden relative">
                <img
                  src={images[currentSlide] || "/placeholder.svg"}
                  alt={`App Screen ${currentSlide + 1}`}
                  className="w-full h-full object-cover transition-opacity duration-500"
                />

                {/* Screen Reflection Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none"></div>
              </div>
            </div>

            {/* Home Indicator */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full"></div>

            {/* Camera Notch */}
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-6 bg-black rounded-full border border-gray-700"></div>
          </div>

          {/* Corner Highlights */}
          <div className="absolute top-2 left-2 w-4 h-4 bg-gradient-to-br from-white/40 to-transparent rounded-full blur-sm"></div>
          <div className="absolute top-2 right-2 w-3 h-3 bg-gradient-to-bl from-white/30 to-transparent rounded-full blur-sm"></div>

          {/* Bottom Reflection */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-40 h-4 bg-white/5 rounded-full blur-xl"></div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white scale-110" : "bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default function CricGemLanding() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const supportOptions = [
    { icon: FaEnvelope, title: "Mail Support", bg: "bg-[#423d6d]" },
    { icon: FaTelegramPlane, title: "Telegram Support", bg: "bg-[#423d6d]" },
    { icon: FaPhoneAlt, title: "Call Support", bg: "bg-[#423d6d]" },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url(/Assets/homepage/App.png)" }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/40"></div>
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row items-start justify-between h-full px-4 sm:px-8 lg:px-12">
          {/* Left Content */}
          <div className="text-white max-w-4xl pt-32 lg:pt-40">
            {/* Logo and CRICGEM */}

            <div className="flex items-center mb-12 lg:mb-16">
              <Image src="/Assets/logo.png" alt="CricGem Logo" width={80} height={80} className="object-contain" />
              <h1
                className="text-[#fef0b7] text-3xl sm:text-4xl lg:text-5xl xl:text-6xl"
                style={{
                  fontFamily: "Inknut Antiqua, serif",
                  fontWeight: 700,
                  textShadow: "3px 3px 0px #000000",
                  WebkitTextStroke: "1.5px #000000",
                  letterSpacing: "0.02em",
                }}
              >
                CRICGEM
              </h1>
            </div>

            {/* Main Heading */}
            <div className="space-y-2 lg:space-y-4">
              <h2
                className="text-white leading-none text-4xl sm:text-5xl lg:text-6xl xl:text-7xl"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  letterSpacing: "-0.02em",
                }}
              >
                Real Cricket
              </h2>
              <h3
                className="text-white leading-none text-4xl sm:text-5xl lg:text-6xl xl:text-7xl"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  letterSpacing: "-0.02em",
                }}
              >
                Fantasy Platform
              </h3>
            </div>
          </div>

          {/* App Store Buttons - Bottom Right */}
          <div className="absolute bottom-8 right-4 sm:bottom-12 sm:right-8 lg:bottom-16 lg:right-12 flex flex-col sm:flex-row gap-3">
            {/* Google Play Store Button */}
            <div className="bg-transparent border-2 border-white/80 rounded-lg px-4 py-3 flex items-center gap-3 min-w-[160px] hover:bg-white/10 transition-all duration-300 cursor-pointer">
              <div className="w-6 h-6 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
              </div>
              <div className="text-left">
                <div className="text-xs text-white/90 font-medium">GET IT ON</div>
                <div className="text-sm font-bold text-white">Google Play</div>
              </div>
            </div>

            {/* App Store Button */}
            <div className="bg-transparent border-2 border-white/80 rounded-lg px-4 py-3 flex items-center gap-3 min-w-[160px] hover:bg-white/10 transition-all duration-300 cursor-pointer">
              <div className="w-6 h-6 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                  <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                </svg>
              </div>
              <div className="text-left">
                <div className="text-xs text-white/90 font-medium">Download on the</div>
                <div className="text-sm font-bold text-white">App Store</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 ">
        <div className="max-w-7xl mx-auto px-6">
          <h2
            className="text-center mb-16"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 700,
              fontSize: "47px",
              color: "#605a87",
            }}
          >
            Steps to Download & Install the CricGem !
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center relative">
              {/* Image Placeholder - Replace with your image */}
              <div className="mt-4">
                <img src="/Assets/homepage/Group 90.png" alt="Step 1" className="mx-auto w-full max-w-[280px] h-auto" />
              </div>

              {/* Caption Box */}
              <div className="mt-6 px-4 py-3 bg-[#605a87] text-white font-medium rounded-md text-sm shadow-md">
                Visit playerzpot.com and click on "Download Android" button
              </div>
            </div>

            {/* Step 2 */}
            <div className="text-center relative">
              {/* Image Placeholder - Replace with your image */}
              <div className="mt-4">
                <img src="/Assets/homepage/Group 89.png" alt="Step 2" className="mx-auto w-full max-w-[280px] h-auto" />
              </div>

              {/* Caption Box */}
              <div className="mt-6 px-4 py-3 bg-[#605a87] text-white font-medium rounded-md text-sm shadow-md">
                Visit playerzpot.com and click on "Download Android" button
              </div>
            </div>

            {/* Step 3 */}
            <div className="text-center relative">
              {/* Image Placeholder - Replace with your image */}
              <div className="mt-4">
                <img src="/Assets/homepage/Group 88.png" alt="Step 3" className="mx-auto w-full max-w-[280px] h-auto" />
              </div>

              {/* Caption Box */}
              <div className="mt-6 px-4 py-3 bg-[#605a87] text-white font-medium rounded-md text-sm shadow-md">
                Visit playerzpot.com and click on "Download Android" button
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Preview Section */}
      <section
        className="py-20 relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/Assets/homepage/App2.jpg')",
        }}
      >
        {/* Light Purple Overlay */}
        <div className="absolute inset-0 bg-[#1b1253]/80 z-0"></div>

        {/* Decorative squares */}
        <div className="absolute inset-0 opacity-10 z-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-[#fef0b7] rounded-lg transform rotate-45"></div>
          <div className="absolute bottom-10 right-10 w-20 h-20 bg-[#fef0b7] rounded-lg transform rotate-45"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-20">
          <h2 className="text-4xl font-bold text-center text-white mb-16">APP PREVIEW</h2>

          {/* Desktop View - Above 900px */}
          <div className="hidden min-[900px]:flex items-center justify-center space-x-8">
            {/* <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <ChevronLeft className="w-8 h-8" />
            </Button> */}

            {/* App Screens with Enhanced Frames */}
            <div className="flex space-x-10">
              {[
                "/Assets/howtoplay/phone1.png",
                "/Assets/howtoplay/phone2.png",
                "/Assets/howtoplay/phone3.png",
                "/Assets/howtoplay/phone4.png",
              ].map((img, idx) => (
                <div key={idx} className="relative group">
                  {/* Outer Glow Effect */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 rounded-[2rem] blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Premium Frame Container */}
                  <div className="relative">
                    {/* Metallic Frame Border */}
                    <div className="absolute -inset-1 bg-gradient-to-br from-gray-300 via-gray-100 to-gray-400 rounded-[1.75rem] shadow-2xl"></div>

                    {/* Inner Frame Shadow */}
                    <div className="absolute -inset-0.5 bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-[1.65rem]"></div>

                    {/* Phone Container */}
                    <div className="relative w-48 h-96 bg-black rounded-3xl overflow-hidden shadow-2xl border-2 border-gray-800">
                      {/* Screen Bezel */}
                      <div className="absolute inset-2 bg-black rounded-[1.25rem] overflow-hidden">
                        {/* Screen Content */}
                        <div className="w-full h-full bg-white rounded-[1.125rem] overflow-hidden relative">
                          <img
                            src={img || "/placeholder.svg"}
                            alt={`App Screen ${idx + 1}`}
                            className="w-full h-full object-cover"
                          />

                          {/* Screen Reflection Effect */}
                          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none"></div>
                        </div>
                      </div>

                      {/* Home Indicator */}
                      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full"></div>

                      {/* Camera Notch */}
                      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-6 bg-black rounded-full border border-gray-700"></div>
                    </div>

                    {/* Corner Highlights */}
                    <div className="absolute top-2 left-2 w-4 h-4 bg-gradient-to-br from-white/40 to-transparent rounded-full blur-sm"></div>
                    <div className="absolute top-2 right-2 w-3 h-3 bg-gradient-to-bl from-white/30 to-transparent rounded-full blur-sm"></div>

                    {/* Bottom Reflection */}
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-40 h-4 bg-white/5 rounded-full blur-xl"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <ChevronRight className="w-8 h-8" />
            </Button> */}
          </div>

          {/* Mobile Slideshow - Below 900px */}
          <MobileAppSlideshow />
        </div>
      </section>

      {/* Easy to Play Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-[#605a87] mb-16 drop-shadow-lg text-[47px]">EASY TO PLAY</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: 1,
                title: "Select A Match",
                subtitle: "Indian Premier League",
                content: (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-4 bg-orange-500 rounded-sm"></div>
                        <span className="font-medium text-sm">IND</span>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-500">Today</div>
                        <div className="text-sm font-medium text-red-600">08:30 PM</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-sm">SA</span>
                        <div className="w-6 h-4 bg-blue-500 rounded-sm"></div>
                      </div>
                    </div>
                    <Button className="w-full bg-[#1b1253] hover:bg-[#1b1253]/90">Join Now</Button>
                  </div>
                ),
              },
              {
                step: 2,
                title: "Create Your Team",
                subtitle: "Create Team",
                content: (
                  <div className="space-y-4">
                    <div className="text-xs text-gray-500 mb-2">SELECTED BY</div>
                    <div className="space-y-2">
                      {[
                        { name: "V KOHLI", team: "RCB", points: "53", credits: "9.0" },
                        { name: "V KOHLI", team: "RCB", points: "53", credits: "9.0" },
                      ].map((player, idx) => (
                        <div key={idx} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">
                              P
                            </div>
                            <div>
                              <div className="text-xs font-medium">{player.name}</div>
                              <div className="text-xs text-gray-500">{player.team}</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs">{player.points}</span>
                            <span className="text-xs">{player.credits}</span>
                            <Plus className="w-4 h-4 text-green-500" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ),
              },
              {
                step: 3,
                title: "Join Contests",
                subtitle: "₹50 Crores",
                content: (
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-xs text-gray-500">Prize Pool</div>
                      <div className="text-lg font-bold text-[#1b1253]">₹58 Crores</div>
                    </div>
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between">
                        <span className="text-gray-500">#1 - ₹1 Cr</span>
                        <span className="text-gray-500">#2 - ₹1 Cr</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">13,21,200 spots left</span>
                        <span className="text-gray-500">13,21,200 spots</span>
                      </div>
                    </div>
                    <Button className="w-full bg-[#1b1253] hover:bg-[#1b1253]/90">₹67</Button>
                  </div>
                ),
              },
            ].map((item) => (
              <div key={item.step} className="relative">
                {/* Step Number and Title */}
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#605a87] text-white rounded-full flex items-center justify-center text-xl font-bold mr-4 relative z-20">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-[#605a87] text-xl">{item.title}</h3>
                </div>

                {/* Card Container */}
                <div className="relative">
                  {/* Background Purple Card */}
                  <div className="bg-[#605a87] rounded-lg p-6 pt-4 pb-8 shadow-lg">
                    {/* Space for white card */}
                    <div className="h-64 mb-4"></div>

                    {/* Text at bottom of purple card */}
                    <div className="text-center">
                      <p className="text-white text-sm leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur. Euismod rhoncus aliquam
                      </p>
                    </div>
                  </div>

                  {/* Foreground White Card */}
                  <div className="absolute top-4 left-4 right-4">
                    <Card className="bg-white shadow-xl border border-gray-200">
                      <CardContent className="p-0">
                        {/* Subtitle Header */}
                        <div className="bg-gray-100 text-gray-600 text-sm px-4 py-3 text-center font-medium border-b">
                          {item.subtitle}
                        </div>

                        {/* Main Content */}
                        <div className="p-4">{item.content}</div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 relative">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url(/Assets/homepage/contactus.jpg)" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#1b1253]/80 via-[#140b40]/80 to-[#1d1459]/80 z-0"></div>
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Support System</h2>
            <p className="text-white/80 mb-12 max-w-2xl mx-auto">
              "As we prioritize our customers, we've ensured multi-channel support is readily available for you"
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {supportOptions.map((support, index) => (
                <Card
                  key={index}
                  className={`${support.bg} border-0 text-white transition-all duration-300 hover:bg-white hover:text-[#1b1253]`}
                >
                  <CardContent className="p-8 text-center">
                    <support.icon className="w-12 h-12 mx-auto mb-4 transition-colors duration-300" />
                    <h3 className="font-bold">{support.title}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 ">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-[#605a87] mb-16 drop-shadow-lg text-[47px]">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                question: "How to deposit the amount?",
                answer: "You can deposit money into your CricGem account using various payment methods...",
              },
              {
                question: "How to withdraw the winning amount?",
                answer: "You can withdraw your winnings by going to the 'Withdraw' section in your account...",
              },
              {
                question: "Is refund for the cancelled match get at what time?",
                answer: "In case of a cancelled match, all entry fees will be refunded...",
              },
              {
                question: "What is Real contest?",
                answer: "Real contests are paid contests where you can win real cash prizes...",
              },
              {
                question: "When the KYC is approved?",
                answer: "KYC verification typically takes 24-72 hours...",
              },
            ].map((faq, index) => {
              const isOpen = openIndex === index

              return (
                <Card key={index} className="border border-[#d9d9d9] overflow-hidden">
                  <CardContent className="p-0">
                    <div
                      className="p-6 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors"
                      onClick={() => toggleOpen(index)}
                    >
                      <span className="text-[#605a87] font-medium">{faq.question}</span>
                      <div className={`transition-transform duration-200 ${isOpen ? "transform rotate-180" : ""}`}>
                        {isOpen ? (
                          <Minus className="w-5 h-5 text-[#605a87]" />
                        ) : (
                          <Plus className="w-5 h-5 text-[#605a87]" />
                        )}
                      </div>
                    </div>
                    {isOpen && <div className="px-6 pb-6 pt-0 text-gray-600">{faq.answer}</div>}
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

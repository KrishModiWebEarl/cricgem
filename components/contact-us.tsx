import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Youtube, Instagram, Facebook, Play } from "lucide-react"
import Image from "next/image"

export default function Component() {
  return (
    <div className="min-h-screen bg-[#fffcfc]">
      {/* Header */}
      <header className="bg-[#1b1253] px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 bg-[#fef0b7] rounded-full flex items-center justify-center">
              <div className="text-[#1b1253] font-bold text-sm">CG</div>
            </div>
            <span className="text-white font-bold text-xl">CRICGEM</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-white hover:text-[#fef0b7] transition-colors">
              How to Play
            </a>
            <a href="#" className="text-white hover:text-[#fef0b7] transition-colors">
              Point System
            </a>
            <a href="#" className="text-white hover:text-[#fef0b7] transition-colors">
              About Us
            </a>
            <a href="#" className="text-white hover:text-[#fef0b7] transition-colors">
              Blog
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-80 bg-gradient-to-r from-blue-900 via-green-800 to-red-800 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute right-10 top-10">
          <Image
            src="/placeholder.svg?height=200&width=200"
            alt="Cricket Ball"
            width={200}
            height={200}
            className="opacity-80"
          />
        </div>
        <h1 className="relative z-10 text-white text-5xl font-bold tracking-wider">GET IN TOUCH</h1>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 min-h-[600px]">
              {/* Contact Information */}
              <div className="bg-[#494175] p-8 text-white relative">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <p className="text-gray-200 mb-8 leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur. Tristique ut mi dictum orci faucibus.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Phone className="w-5 h-5" />
                    <span>1234567890</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="w-5 h-5" />
                    <span>abc@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <MapPin className="w-5 h-5" />
                    <span>Ahmedabad, Gujarat</span>
                  </div>
                </div>

                {/* Decorative Circle */}
                <div className="absolute bottom-8 right-8 w-32 h-32 bg-[#463e72] rounded-full opacity-50"></div>
              </div>

              {/* Contact Form */}
              <div className="p-8 bg-gradient-to-br from-[#494175] to-[#463e72]">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white text-sm mb-2">First Name :</label>
                      <Input
                        className="bg-transparent border-2 border-white/30 text-white placeholder:text-white/60 rounded-lg h-12"
                        placeholder=""
                      />
                    </div>
                    <div>
                      <label className="block text-white text-sm mb-2">Last Name :</label>
                      <Input
                        className="bg-transparent border-2 border-white/30 text-white placeholder:text-white/60 rounded-lg h-12"
                        placeholder=""
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white text-sm mb-2">Your Email :</label>
                    <Input
                      type="email"
                      className="bg-transparent border-2 border-white/30 text-white placeholder:text-white/60 rounded-lg h-12"
                      placeholder=""
                    />
                  </div>

                  <div>
                    <label className="block text-white text-sm mb-2">Phone No :</label>
                    <Input
                      type="tel"
                      className="bg-transparent border-2 border-white/30 text-white placeholder:text-white/60 rounded-lg h-12"
                      placeholder=""
                    />
                  </div>

                  <div>
                    <label className="block text-white text-sm mb-2">How Can we help :</label>
                    <Textarea
                      className="bg-transparent border-2 border-white/30 text-white placeholder:text-white/60 rounded-lg min-h-[120px] resize-none"
                      placeholder=""
                    />
                  </div>

                  <div className="flex justify-end">
                    <Button
                      type="submit"
                      className="bg-[#463e72] hover:bg-[#463e72]/80 text-white px-8 py-3 rounded-lg font-medium"
                    >
                      Submit
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

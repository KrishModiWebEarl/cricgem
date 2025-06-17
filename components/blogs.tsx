import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Youtube, Instagram, Facebook, Play } from "lucide-react"

export default function Component() {
  const blogPosts = Array(6).fill({
    title:
      'After the Nagpur Test, Waugh makes an epic "underachiever" statement about the India skipper, saying "Rohit has had a fascinating career."',
    date: "Feb 16,2023",
    content:
      "The first Test of the Border-Gavaskar Trophy between India and Australia was won admirably by India under the leadership of Rohit Sharma on Saturday in Nagpur. The seasoned Indian opener won the game with a century, earning praise from the cricket community.",
  })

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
      <section className="relative h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image src="/cricgem-stadium.png" alt="Cricket Stadium" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-wider">
            ULTIMATE DESTINATION FOR
            <br />
            CRICKET!
          </h1>
        </div>
      </section>

      {/* Blog Cards Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg rounded-lg overflow-hidden">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <span className="inline-block bg-[#ff0000] text-white px-3 py-1 rounded text-sm font-medium">
                      {post.date}
                    </span>
                  </div>
                  <h3 className="text-[#605a87] font-semibold text-lg mb-4 leading-tight">{post.title}</h3>
                  <p className="text-[#000000] text-sm leading-relaxed mb-6">{post.content}</p>
                  <Button
                    variant="outline"
                    className="bg-[#605a87] text-white border-[#605a87] hover:bg-[#1b1253] hover:border-[#1b1253]"
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1b1253] text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and Social */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-12 h-12 bg-[#fef0b7] rounded-full flex items-center justify-center">
                  <div className="text-[#1b1253] font-bold text-sm">CG</div>
                </div>
                <span className="text-white font-bold text-xl">CRICGEM</span>
              </div>
              <div className="flex gap-4">
                <Youtube className="w-6 h-6 text-white hover:text-[#fef0b7] cursor-pointer transition-colors" />
                <Instagram className="w-6 h-6 text-white hover:text-[#fef0b7] cursor-pointer transition-colors" />
                <Facebook className="w-6 h-6 text-white hover:text-[#fef0b7] cursor-pointer transition-colors" />
                <Play className="w-6 h-6 text-white hover:text-[#fef0b7] cursor-pointer transition-colors" />
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-4">QUICK LINKS</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-[#fef0b7] transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#fef0b7] transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#fef0b7] transition-colors">
                    Teams & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#fef0b7] transition-colors">
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-bold text-lg mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-[#fef0b7] transition-colors">
                    Blogs
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-bold text-lg mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-[#fef0b7] transition-colors">
                    Partner with us
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#605a87] mt-8 pt-8 text-center">
            <p className="text-[#c3c3c3]">Copyright @ 2025 cricgem.in</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

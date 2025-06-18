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
    <div className="min-h-screen bg-[#fffcfc] mt-[80px]">
      {/* Header */}
      

      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image src="/assets/blogs/image.jpg" alt="Cricket Stadium" fill className="object-cover" priority />
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
            {blogPosts.map((post, index) => {
              const slug = post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
              return (
                <Card key={index} className="bg-white rounded-lg overflow-hidden shadow-lg w-full max-w-sm mx-auto h-auto min-h-[500px] flex flex-col">
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <h3 className="text-[#605a87] font-semibold text-lg mb-4 leading-tight line-clamp-2">{post.title}</h3>
                    <div className="mb-4">
                      <span className="inline-block border border-red-500 text-red-500 px-3 py-1 rounded text-sm font-medium bg-transparent">
                        {post.date}
                      </span>
                    </div>
                    <p className="text-black text-sm leading-relaxed mb-6 flex-1 line-clamp-4">{post.content}</p>
                    <div className="mt-auto">
                      <Link href={`/blog/${slug}`}>
                        <Button 
                          variant="outline" 
                          className="bg-[#605a87] text-white border-[#605a87] hover:bg-white hover:text-[#605a87] hover:shadow-lg transition-all duration-300 w-fit"
                        >
                          Read More
                        </Button>
                      </Link>
                    </div>
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
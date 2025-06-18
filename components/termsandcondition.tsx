import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import Link from "next/link"
import { Youtube, Instagram, Facebook, Play } from "lucide-react"

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-[#fffcfc] mt-[80px]">
      {/* Header */}
      <header className="bg-[#1b1253] text-white px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#fef0b7] rounded-full flex items-center justify-center">
              <div className="w-6 h-6 bg-[#1b1253] rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-[#fef0b7] rounded-full"></div>
              </div>
            </div>
            <span className="font-bold text-lg">CRICGEM</span>
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
      <div className="relative h-64 overflow-hidden">
        <Image src="Assets/policies/s.jpg" alt="Cricket Stadium" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">TERMS & CONDITIONS</h1>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-12">
          {/* Agreement Section */}
          <section>
            <h2 className="text-2xl font-bold text-[#1b1253] mb-4">Agreement</h2>
            <p className="text-[#605a87] leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Tristique ut mi dictum orci faucibus. At molestudae orci risus
              amet, in turpis velit sed semper metus lectus. Interdum varius integer orci quam pretium rhoncus aliquam
              sit et. Leo duis tempor tincidunt non ipsum amet turpis est. Risus pellentesque proin sed scelerisque
              fringilla viverra velit. Lorem ipsum dolor sit amet consectetur. Tristique ut mi dictum orci faucibus. At
              molestudae orci risus amet, in turpis velit sed semper metus lectus. Interdum varius integer orci quam
              pretium rhoncus aliquam sit et. Leo duis tempor tincidunt non ipsum amet turpis est. Risus pellentesque
              proin sed scelerisque fringilla viverra velit. Lorem ipsum dolor sit amet consectetur. Tristique ut mi
              dictum orci faucibus. At molestudae orci risus amet, in turpis velit sed semper metus lectus. Interdum
              varius integer orci quam pretium rhoncus aliquam sit et. Leo duis tempor tincidunt non ipsum amet turpis
              est. Risus pellentesque proin sed scelerisque fringilla viverra velit. Lorem ipsum dolor sit amet
              consectetur. Tristique ut mi dictum orci faucibus. At molestudae orci risus amet, in turpis velit sed
              semper metus lectus. Interdum varius integer orci quam pretium rhoncus aliquam sit et. Leo duis tempor
              tincidunt non ipsum amet turpis est. Risus pellentesque proin sed scelerisque fringilla viverra velit.
            </p>
          </section>

          {/* Warranty Section */}
          <section>
            <h2 className="text-2xl font-bold text-[#1b1253] mb-4">Warranty</h2>
            <p className="text-[#605a87] leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Tristique ut mi dictum orci faucibus. At molestudae orci risus
              amet, in turpis velit sed semper metus lectus. Interdum varius integer orci quam pretium rhoncus aliquam
              sit et. Leo duis tempor tincidunt non ipsum amet turpis est. Risus pellentesque proin sed scelerisque
              fringilla viverra velit. Lorem ipsum dolor sit amet consectetur. Tristique ut mi dictum orci faucibus. At
              molestudae orci risus amet, in turpis velit sed semper metus lectus. Interdum varius integer orci quam
              pretium rhoncus aliquam sit et. Leo duis tempor tincidunt non ipsum amet turpis est. Risus pellentesque
              proin sed scelerisque fringilla viverra velit. Lorem ipsum dolor sit amet consectetur. Tristique ut mi
              dictum orci faucibus. At molestudae orci risus amet, in turpis velit sed semper metus lectus. Interdum
              varius integer orci quam pretium rhoncus aliquam sit et. Leo duis tempor tincidunt non ipsum amet turpis
              est. Risus pellentesque proin sed scelerisque fringilla viverra velit.
            </p>
          </section>

          {/* Use of Software Section */}
          <section>
            <h2 className="text-2xl font-bold text-[#1b1253] mb-4">Use of Software</h2>
            <p className="text-[#605a87] leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Tristique ut mi dictum orci faucibus. At molestudae orci risus
              amet, in turpis velit sed semper metus lectus. Interdum varius integer orci quam pretium rhoncus aliquam
              sit et. Leo duis tempor tincidunt non ipsum amet turpis est. Risus pellentesque proin sed scelerisque
              fringilla viverra velit. Lorem ipsum dolor sit amet consectetur. Tristique ut mi dictum orci faucibus. At
              molestudae orci risus amet, in turpis velit sed semper metus lectus. Interdum varius integer orci quam
              pretium rhoncus aliquam sit et. Leo duis tempor tincidunt non ipsum amet turpis est. Risus pellentesque
              proin sed scelerisque fringilla viverra velit. Lorem ipsum dolor sit amet consectetur. Tristique ut mi
              dictum orci faucibus. At molestudae orci risus amet, in turpis velit sed semper metus lectus. Interdum
              varius integer orci quam pretium rhoncus aliquam sit et. Leo duis tempor tincidunt non ipsum amet turpis
              est. Risus pellentesque proin sed scelerisque fringilla viverra velit.
            </p>
          </section>

          {/* Your Password, Your Responsibility Section */}
          <section>
            <h2 className="text-2xl font-bold text-[#1b1253] mb-4">Your Password, Your Responsibility</h2>
            <p className="text-[#605a87] leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Tristique ut mi dictum orci faucibus. At molestudae orci risus
              amet, in turpis velit sed semper metus lectus. Interdum varius integer orci quam pretium rhoncus aliquam
              sit et. Leo duis tempor tincidunt non ipsum amet turpis est. Risus pellentesque proin sed scelerisque
              fringilla viverra velit. Lorem ipsum dolor sit amet consectetur. Tristique ut mi dictum orci faucibus. At
              molestudae orci risus amet, in turpis velit sed semper metus lectus. Interdum varius integer orci quam
              pretium rhoncus aliquam sit et. Leo duis tempor tincidunt non ipsum amet turpis est. Risus pellentesque
              proin sed scelerisque fringilla viverra velit. Lorem ipsum dolor sit amet consectetur. Tristique ut mi
              dictum orci faucibus. At molestudae orci risus amet, in turpis velit sed semper metus lectus. Interdum
              varius integer orci quam pretium rhoncus aliquam sit et. Leo duis tempor tincidunt non ipsum amet turpis
              est. Risus pellentesque proin sed scelerisque fringilla viverra velit.
            </p>
          </section>

          {/* Eligibility and Jurisdiction Policy Section */}
          <section>
            <h2 className="text-2xl font-bold text-[#1b1253] mb-4">Eligibility and Jurisdiction Policy</h2>
            <p className="text-[#605a87] leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Tristique ut mi dictum orci faucibus. At molestudae orci risus
              amet, in turpis velit sed semper metus lectus. Interdum varius integer orci quam pretium rhoncus aliquam
              sit et. Leo duis tempor tincidunt non ipsum amet turpis est. Risus pellentesque proin sed scelerisque
              fringilla viverra velit. Lorem ipsum dolor sit amet consectetur. Tristique ut mi dictum orci faucibus. At
              molestudae orci risus amet, in turpis velit sed semper metus lectus. Interdum varius integer orci quam
              pretium rhoncus aliquam sit et. Leo duis tempor tincidunt non ipsum amet turpis est. Risus pellentesque
              proin sed scelerisque fringilla viverra velit. Lorem ipsum dolor sit amet consectetur. Tristique ut mi
              dictum orci faucibus. At molestudae orci risus amet, in turpis velit sed semper metus lectus. Interdum
              varius integer orci quam pretium rhoncus aliquam sit et. Leo duis tempor tincidunt non ipsum amet turpis
              est. Risus pellentesque proin sed scelerisque fringilla viverra velit.
            </p>
          </section>

          {/* Breach and Consequences Section */}
          <section>
            <h2 className="text-2xl font-bold text-[#1b1253] mb-4">Breach and Consequences</h2>
            <p className="text-[#605a87] leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Tristique ut mi dictum orci faucibus. At molestudae orci risus
              amet, in turpis velit sed semper metus lectus. Interdum varius integer orci quam pretium rhoncus aliquam
              sit et. Leo duis tempor tincidunt non ipsum amet turpis est. Risus pellentesque proin sed scelerisque
              fringilla viverra velit. Lorem ipsum dolor sit amet consectetur. Tristique ut mi dictum orci faucibus. At
              molestudae orci risus amet, in turpis velit sed semper metus lectus. Interdum varius integer orci quam
              pretium rhoncus aliquam sit et. Leo duis tempor tincidunt non ipsum amet turpis est. Risus pellentesque
              proin sed scelerisque fringilla viverra velit.
            </p>
          </section>

          {/* Governing Law, Dispute Resolution and Jurisdiction Section */}
          <section>
            <h2 className="text-2xl font-bold text-[#1b1253] mb-4">
              Governing Law, Dispute Resolution and Jurisdiction
            </h2>
            <p className="text-[#605a87] leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Tristique ut mi dictum orci faucibus. At molestudae orci risus
              amet, in turpis velit sed semper metus lectus. Interdum varius integer orci quam pretium rhoncus aliquam
              sit et. Leo duis tempor tincidunt non ipsum amet turpis est. Risus pellentesque proin sed scelerisque
              fringilla viverra velit. Lorem ipsum dolor sit amet consectetur. Tristique ut mi dictum orci faucibus. At
              molestudae orci risus amet, in turpis velit sed semper metus lectus. Interdum varius integer orci quam
              pretium rhoncus aliquam sit et. Leo duis tempor tincidunt non ipsum amet turpis est.
            </p>
          </section>

          {/* Content Section */}
          <section>
            <h2 className="text-2xl font-bold text-[#1b1253] mb-4">Content</h2>
            <p className="text-[#605a87] leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Tristique ut mi dictum orci faucibus. At molestudae orci risus
              amet, in turpis velit sed semper metus lectus. Interdum varius integer orci quam pretium rhoncus aliquam
              sit et. Leo duis tempor tincidunt non ipsum amet turpis est. Risus pellentesque proin sed scelerisque
              fringilla viverra velit. Lorem ipsum dolor sit amet consectetur. Tristique ut mi dictum orci faucibus. At
              molestudae orci risus amet, in turpis velit sed semper metus lectus. Interdum varius integer orci quam
              pretium rhoncus aliquam sit et. Leo duis tempor tincidunt non ipsum amet turpis est. Risus pellentesque
              proin sed scelerisque fringilla viverra velit. Lorem ipsum dolor sit amet consectetur. Tristique ut mi
              dictum orci faucibus. At molestudae orci risus amet, in turpis velit sed semper metus lectus. Interdum
              varius integer orci quam pretium rhoncus aliquam sit et. Leo duis tempor tincidunt non ipsum amet turpis
              est. Risus pellentesque proin sed scelerisque fringilla viverra velit.
            </p>
          </section>

          {/* Content Formats Section */}
          <section>
            <h2 className="text-2xl font-bold text-[#1b1253] mb-4">Content Formats</h2>
            <p className="text-[#605a87] leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Tristique ut mi dictum orci faucibus. At molestudae orci risus
              amet, in turpis velit sed semper metus lectus. Interdum varius integer orci quam pretium rhoncus aliquam
              sit et. Leo duis tempor tincidunt non ipsum amet turpis est. Risus pellentesque proin sed scelerisque
              fringilla viverra velit. Lorem ipsum dolor sit amet consectetur. Tristique ut mi dictum orci faucibus. At
              molestudae orci risus amet, in turpis velit sed semper metus lectus. Interdum varius integer orci quam
              pretium rhoncus aliquam sit et. Leo duis tempor tincidunt non ipsum amet turpis est. Risus pellentesque
              proin sed scelerisque fringilla viverra velit. Lorem ipsum dolor sit amet consectetur. Tristique ut mi
              dictum orci faucibus. At molestudae orci risus amet, in turpis velit sed semper metus lectus. Interdum
              varius integer orci quam pretium rhoncus aliquam sit et. Leo duis tempor tincidunt non ipsum amet turpis
              est. Risus pellentesque proin sed scelerisque fringilla viverra velit.
            </p>
          </section>
        </div>
      </main>
    </div>
  )
}

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import Link from "next/link"
import { Youtube, Instagram, Facebook, Play } from "lucide-react"

export default function TermsAndConditions() {
  return (
    <div className="w-[100%] min-h-screen mt-[80px] text-justify">
  
      {/* Hero Section */}
      <div className="relative h-[300px] overflow-hidden">
        <Image src="Assets/Policies/s.png" alt="Cricket Stadium" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">TERMS & CONDITIONS</h1>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 md:px-8 py-12">
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
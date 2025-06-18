import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Youtube, Instagram, Facebook, Play } from "lucide-react"

export default function Component() {
  return (
    <div className="min-h-screen bg-white mt-[80px]" >
      {/* Header */}
      <header className="bg-[#1b1253] px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src="Assets/policies/bat.png"
              alt="Cricgem Logo"
              width={40}
              height={40}
              className="mr-2"
            />
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="#" className="text-white hover:text-gray-300 transition-colors">
              How to Play
            </Link>
            <Link href="#" className="text-white hover:text-gray-300 transition-colors">
              Point System
            </Link>
            <Link href="#" className="text-white hover:text-gray-300 transition-colors">
              About Us
            </Link>
            <Link href="#" className="text-white hover:text-gray-300 transition-colors">
              Blog
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-48 bg-gradient-to-r from-red-600 via-orange-500 to-green-600 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/80 via-orange-500/80 to-green-600/80"></div>
        <div className="relative text-center text-white z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">PRIVACY POLICY</h1>
          <p className="text-lg md:text-xl">YOUR DATA, OUR RESPONSIBILITY!</p>
        </div>
      </section>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-8">
          {/* Privacy Policy Section */}
          <section>
            <h2 className="text-2xl font-bold text-[#000000] mb-4">PRIVACY POLICY</h2>
            <p className="text-[#000000] leading-relaxed mb-4">
              Lorem ipsum dolor sit amet consectetur. Tristique ut mi dictum orci faucibus. At molestudae orci risus
              ormet. In turpis velit sed semper metus lectus. Interdum varius integer orci quam pretium rhoncus
              ullamcorper sit at. Leo duis tempor tincidunt non ipsum ormet turpis est. Risus pellentesque proin sed
              scelerisque fringilla viverra velit. Lorem ipsum dolor sit amet consectetur. Tristique ut mi dictum orci
              faucibus. At molestudae orci risus ormet. In turpis velit sed semper metus lectus. Interdum varius integer
              orci quam pretium rhoncus ullamcorper sit at. Leo duis tempor tincidunt non ipsum ormet turpis est. Risus
              pellentesque proin sed scelerisque fringilla viverra velit. Lorem ipsum dolor sit amet consectetur.
              Tristique ut mi dictum orci faucibus. At molestudae orci risus ormet. In turpis velit sed semper metus
              lectus. Interdum varius integer orci quam pretium rhoncus ullamcorper sit at. Leo duis tempor tincidunt
              non ipsum ormet turpis est. Risus pellentesque proin sed scelerisque fringilla viverra velit. Lorem ipsum
              dolor sit amet consectetur. Tristique ut mi dictum orci faucibus.
            </p>
            <p className="text-[#000000] leading-relaxed">
              At molestudae orci risus ormet. In turpis velit sed semper metus lectus. Interdum varius integer orci quam
              pretium rhoncus ullamcorper sit at. Leo duis tempor tincidunt non ipsum ormet turpis est. Risus
              pellentesque proin sed scelerisque fringilla viverra velit.
            </p>
          </section>

          {/* Registration Section */}
          <section>
            <h2 className="text-2xl font-bold text-[#000000] mb-4">REGISTRATION</h2>
            <p className="text-[#000000] leading-relaxed mb-4">
              Lorem ipsum dolor sit amet consectetur. Tristique ut mi dictum orci faucibus. At molestudae orci risus
              ormet. In turpis velit sed semper metus lectus. Interdum varius integer orci quam pretium rhoncus
              ullamcorper sit at. Leo duis tempor tincidunt non ipsum ormet turpis est. Risus pellentesque proin sed
              scelerisque fringilla viverra velit. Lorem ipsum dolor sit amet consectetur. Tristique ut mi dictum orci
              faucibus. At molestudae orci risus ormet. In turpis velit sed semper metus lectus. Interdum varius integer
              orci quam pretium rhoncus ullamcorper sit at. Leo duis tempor tincidunt non ipsum ormet turpis est. Risus
              pellentesque proin sed scelerisque fringilla viverra velit. Lorem ipsum dolor sit amet consectetur.
              Tristique ut mi dictum orci faucibus. At molestudae orci risus ormet. In turpis velit sed semper metus
              lectus. Interdum varius integer orci quam pretium rhoncus ullamcorper sit at. Leo duis tempor tincidunt
              non ipsum ormet turpis est. Risus pellentesque proin sed scelerisque fringilla viverra velit. Lorem ipsum
              dolor sit amet consectetur. Tristique ut mi dictum orci faucibus.
            </p>
            <p className="text-[#000000] leading-relaxed">
              At molestudae orci risus ormet. In turpis velit sed semper metus lectus. Interdum varius integer orci quam
              pretium rhoncus ullamcorper sit at. Leo duis tempor tincidunt non ipsum ormet turpis est. Risus
              pellentesque proin sed scelerisque fringilla viverra velit.
            </p>
          </section>

          {/* User Invitations Section */}
          <section>
            <h2 className="text-2xl font-bold text-[#000000] mb-4">USER INVITATIONS</h2>
            <p className="text-[#000000] leading-relaxed mb-4">
              Lorem ipsum dolor sit amet consectetur. Tristique ut mi dictum orci faucibus. At molestudae orci risus
              ormet. In turpis velit sed semper metus lectus. Interdum varius integer orci quam pretium rhoncus
              ullamcorper sit at. Leo duis tempor tincidunt non ipsum ormet turpis est. Risus pellentesque proin sed
              scelerisque fringilla viverra velit. Lorem ipsum dolor sit amet consectetur. Tristique ut mi dictum orci
              faucibus. At molestudae orci risus ormet. In turpis velit sed semper metus lectus. Interdum varius integer
              orci quam pretium rhoncus ullamcorper sit at. Leo duis tempor tincidunt non ipsum ormet turpis est. Risus
              pellentesque proin sed scelerisque fringilla viverra velit. Lorem ipsum dolor sit amet consectetur.
              Tristique ut mi dictum orci faucibus. At molestudae orci risus ormet. In turpis velit sed semper metus
              lectus. Interdum varius integer orci quam pretium rhoncus ullamcorper sit at. Leo duis tempor tincidunt
              non ipsum ormet turpis est. Risus pellentesque proin sed scelerisque fringilla viverra velit. Lorem ipsum
              dolor sit amet consectetur. Tristique ut mi dictum orci faucibus.
            </p>
            <p className="text-[#000000] leading-relaxed">
              At molestudae orci risus ormet. In turpis velit sed semper metus lectus. Interdum varius integer orci quam
              pretium rhoncus ullamcorper sit at. Leo duis tempor tincidunt non ipsum ormet turpis est. Risus
              pellentesque proin sed scelerisque fringilla viverra velit.
            </p>
          </section>

          {/* Use of Information Section */}
          <section>
            <h2 className="text-2xl font-bold text-[#000000] mb-4">USE OF INFORMATION</h2>
            <p className="text-[#000000] leading-relaxed mb-4">
              Lorem ipsum dolor sit amet consectetur. Tristique ut mi dictum orci faucibus. At molestudae orci risus
              ormet. In turpis velit sed semper metus lectus. Interdum varius integer orci quam pretium rhoncus
              ullamcorper sit at. Leo duis tempor tincidunt non ipsum ormet turpis est. Risus pellentesque proin sed
              scelerisque fringilla viverra velit. Lorem ipsum dolor sit amet consectetur. Tristique ut mi dictum orci
              faucibus. At molestudae orci risus ormet. In turpis velit sed semper metus lectus. Interdum varius integer
              orci quam pretium rhoncus ullamcorper sit at. Leo duis tempor tincidunt non ipsum ormet turpis est. Risus
              pellentesque proin sed scelerisque fringilla viverra velit. Lorem ipsum dolor sit amet consectetur.
              Tristique ut mi dictum orci faucibus. At molestudae orci risus ormet. In turpis velit sed semper metus
              lectus. Interdum varius integer orci quam pretium rhoncus ullamcorper sit at. Leo duis tempor tincidunt
              non ipsum ormet turpis est. Risus pellentesque proin sed scelerisque fringilla viverra velit. Lorem ipsum
              dolor sit amet consectetur. Tristique ut mi dictum orci faucibus.
            </p>
            <p className="text-[#000000] leading-relaxed">
              At molestudae orci risus ormet. In turpis velit sed semper metus lectus. Interdum varius integer orci quam
              pretium rhoncus ullamcorper sit at. Leo duis tempor tincidunt non ipsum ormet turpis est. Risus
              pellentesque proin sed scelerisque fringilla viverra velit.
            </p>
          </section>

          {/* Collecting Information/Use of Cookies Section */}
          <section>
            <h2 className="text-2xl font-bold text-[#000000] mb-4">COLLECTING INFORMATION/USE OF COOKIES</h2>
            <p className="text-[#000000] leading-relaxed mb-4">
              Lorem ipsum dolor sit amet consectetur. Tristique ut mi dictum orci faucibus. At molestudae orci risus
              ormet. In turpis velit sed semper metus lectus. Interdum varius integer orci quam pretium rhoncus
              ullamcorper sit at. Leo duis tempor tincidunt non ipsum ormet turpis est. Risus pellentesque proin sed
              scelerisque fringilla viverra velit. Lorem ipsum dolor sit amet consectetur. Tristique ut mi dictum orci
              faucibus. At molestudae orci risus ormet. In turpis velit sed semper metus lectus. Interdum varius integer
              orci quam pretium rhoncus ullamcorper sit at. Leo duis tempor tincidunt non ipsum ormet turpis est. Risus
              pellentesque proin sed scelerisque fringilla viverra velit. Lorem ipsum dolor sit amet consectetur.
              Tristique ut mi dictum orci faucibus. At molestudae orci risus ormet. In turpis velit sed semper metus
              lectus. Interdum varius integer orci quam pretium rhoncus ullamcorper sit at. Leo duis tempor tincidunt
              non ipsum ormet turpis est. Risus pellentesque proin sed scelerisque fringilla viverra velit. Lorem ipsum
              dolor sit amet consectetur. Tristique ut mi dictum orci faucibus.
            </p>
            <p className="text-[#000000] leading-relaxed">
              At molestudae orci risus ormet. In turpis velit sed semper metus lectus. Interdum varius integer orci quam
              pretium rhoncus ullamcorper sit at. Leo duis tempor tincidunt non ipsum ormet turpis est. Risus
              pellentesque proin sed scelerisque fringilla viverra velit.
            </p>
          </section>

          {/* Information Security Section */}
          <section>
            <h2 className="text-2xl font-bold text-[#000000] mb-4">INFORMATION SECURITY</h2>
            <p className="text-[#000000] leading-relaxed mb-4">
              Lorem ipsum dolor sit amet consectetur. Tristique ut mi dictum orci faucibus. At molestudae orci risus
              ormet. In turpis velit sed semper metus lectus. Interdum varius integer orci quam pretium rhoncus
              ullamcorper sit at. Leo duis tempor tincidunt non ipsum ormet turpis est. Risus pellentesque proin sed
              scelerisque fringilla viverra velit. Lorem ipsum dolor sit amet consectetur. Tristique ut mi dictum orci
              faucibus. At molestudae orci risus ormet. In turpis velit sed semper metus lectus. Interdum varius integer
              orci quam pretium rhoncus ullamcorper sit at. Leo duis tempor tincidunt non ipsum ormet turpis est. Risus
              pellentesque proin sed scelerisque fringilla viverra velit. Lorem ipsum dolor sit amet consectetur.
              Tristique ut mi dictum orci faucibus. At molestudae orci risus ormet. In turpis velit sed semper metus
              lectus. Interdum varius integer orci quam pretium rhoncus ullamcorper sit at. Leo duis tempor tincidunt
              non ipsum ormet turpis est. Risus pellentesque proin sed scelerisque fringilla viverra velit. Lorem ipsum
              dolor sit amet consectetur. Tristique ut mi dictum orci faucibus.
            </p>
            <p className="text-[#000000] leading-relaxed">
              At molestudae orci risus ormet. In turpis velit sed semper metus lectus. Interdum varius integer orci quam
              pretium rhoncus ullamcorper sit at. Leo duis tempor tincidunt non ipsum ormet turpis est. Risus
              pellentesque proin sed scelerisque fringilla viverra velit.
            </p>
          </section>

          {/* Privacy Policy Updates Section */}
          <section>
            <h2 className="text-2xl font-bold text-[#000000] mb-4">Privacy Policy Updates</h2>
            <p className="text-[#000000] leading-relaxed mb-4">
              Lorem ipsum dolor sit amet consectetur. Tristique ut mi dictum orci faucibus. At molestudae orci risus
              ormet. In turpis velit sed semper metus lectus. Interdum varius integer orci quam pretium rhoncus
              ullamcorper sit at. Leo duis tempor tincidunt non ipsum ormet turpis est. Risus pellentesque proin sed
              scelerisque fringilla viverra velit. Lorem ipsum dolor sit amet consectetur. Tristique ut mi dictum orci
              faucibus. At molestudae orci risus ormet. In turpis velit sed semper metus lectus. Interdum varius integer
              orci quam pretium rhoncus ullamcorper sit at. Leo duis tempor tincidunt non ipsum ormet turpis est. Risus
              pellentesque proin sed scelerisque fringilla viverra velit. Lorem ipsum dolor sit amet consectetur.
              Tristique ut mi dictum orci faucibus.
            </p>
          </section>

          {/* Third-party app & data sharing Section */}
          <section>
            <h2 className="text-2xl font-bold text-[#000000] mb-4">Third-party app & data sharing</h2>
            <p className="text-[#000000] leading-relaxed mb-4">
              Lorem ipsum dolor sit amet consectetur. Tristique ut mi dictum orci faucibus. At molestudae orci risus
              ormet. In turpis velit sed semper metus lectus. Interdum varius integer orci quam pretium rhoncus
              ullamcorper sit at. Leo duis tempor tincidunt non ipsum ormet turpis est. Risus pellentesque proin sed
              scelerisque fringilla viverra velit. Lorem ipsum dolor sit amet consectetur. Tristique ut mi dictum orci
              faucibus. At molestudae orci risus ormet. In turpis velit sed semper metus lectus. Interdum varius integer
              orci quam pretium rhoncus ullamcorper sit at. Leo duis tempor tincidunt non ipsum ormet turpis est. Risus
              pellentesque proin sed scelerisque fringilla viverra velit. Lorem ipsum dolor sit amet consectetur.
              Tristique ut mi dictum orci faucibus. At molestudae orci risus ormet. In turpis velit sed semper metus
              lectus. Interdum varius integer orci quam pretium rhoncus ullamcorper sit at. Leo duis tempor tincidunt
              non ipsum ormet turpis est. Risus pellentesque proin sed scelerisque fringilla viverra velit. Lorem ipsum
              dolor sit amet consectetur. Tristique ut mi dictum orci faucibus.
            </p>
            <p className="text-[#000000] leading-relaxed">
              At molestudae orci risus ormet. In turpis velit sed semper metus lectus. Interdum varius integer orci quam
              pretium rhoncus ullamcorper sit at. Leo duis tempor tincidunt non ipsum ormet turpis est. Risus
              pellentesque proin sed scelerisque fringilla viverra velit.
            </p>
          </section>

          {/* Collecting User Information from Social Media Platforms Section */}
          <section>
            <h2 className="text-2xl font-bold text-[#000000] mb-4">
              COLLECTING USER INFORMATION FROM SOCIAL MEDIA PLATFORMS
            </h2>
            <p className="text-[#000000] leading-relaxed mb-4">
              Lorem ipsum dolor sit amet consectetur. Tristique ut mi dictum orci faucibus. At molestudae orci risus
              ormet. In turpis velit sed semper metus lectus. Interdum varius integer orci quam pretium rhoncus
              ullamcorper sit at. Leo duis tempor tincidunt non ipsum ormet turpis est. Risus pellentesque proin sed
              scelerisque fringilla viverra velit. Lorem ipsum dolor sit amet consectetur. Tristique ut mi dictum orci
              faucibus. At molestudae orci risus ormet. In turpis velit sed semper metus lectus. Interdum varius integer
              orci quam pretium rhoncus ullamcorper sit at. Leo duis tempor tincidunt non ipsum ormet turpis est. Risus
              pellentesque proin sed scelerisque fringilla viverra velit. Lorem ipsum dolor sit amet consectetur.
              Tristique ut mi dictum orci faucibus. At molestudae orci risus ormet. In turpis velit sed semper metus
              lectus. Interdum varius integer orci quam pretium rhoncus ullamcorper sit at. Leo duis tempor tincidunt
              non ipsum ormet turpis est. Risus pellentesque proin sed scelerisque fringilla viverra velit. Lorem ipsum
              dolor sit amet consectetur. Tristique ut mi dictum orci faucibus.
            </p>
            <p className="text-[#000000] leading-relaxed">
              At molestudae orci risus ormet. In turpis velit sed semper metus lectus. Interdum varius integer orci quam
              pretium rhoncus ullamcorper sit at. Leo duis tempor tincidunt non ipsum ormet turpis est. Risus
              pellentesque proin sed scelerisque fringilla viverra velit.
            </p>
          </section>
        </div>
      </main>
    </div>
  )
}

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Youtube, Instagram, Facebook, Play } from "lucide-react"

export default function Component() {
  return (
    <div className="min-h-screen mt-[80px]" >
      {/* Header */}
      
        

      {/* Hero Section */}
      <section
  className="relative h-[300px] bg-cover bg-center flex items-center justify-center"
  style={{ backgroundImage: "url('/Assets/Policies/bat.png')" }} // ✅ Set your actual path
>
  {/* Optional: Add overlay for readability */}
  <div className="absolute inset-0 bg-black/40"></div>

  <div className="relative text-center text-white z-10">
    <h1 className="text-4xl md:text-5xl font-bold mb-2">PRIVACY POLICY</h1>
    <p className="text-lg md:text-xl">YOUR DATA, OUR RESPONSIBILITY!</p>
  </div>
</section>

      {/* Content */}
      <main className="max-w-6xl mx-auto px-4 md:px-8 py-1">
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

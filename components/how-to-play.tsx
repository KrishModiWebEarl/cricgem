import Image from "next/image"

export default function Component() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative h-[400px] bg-cover bg-center bg-no-repeat flex items-center justify-center text-white"
        style={{
          backgroundImage: "url(/assets/howtoplay/cricket.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">HOW TO PLAY FANTASY CRICKET?</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">YOUR GO-TO FANTASY APP TO START YOUR WINNING JOURNEY!</p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-[#605a87] mb-6">Introduction</h2>
          <div className="space-y-4 text-[#5c5c5c] leading-relaxed">
            <p>
              The 'How To Play' section guides our users about the fantasy teams and how to play fantasy sports on
              CRICGEM. Follow the steps mentioned below to begin your fantasy sports winning journey on the CRICGEM
              fantasy sports application. In this segment, we will cover 'How To Play Fantasy Cricket on CRICGEM app.'
            </p>
            <p>
              Use your knowledge of the game to select 11 players for your fantasy cricket team. You can select up to 8
              players for each category - wicketkeepers, batsmen, all-rounders and bowlers. Remember to stay within the
              allocated budget of 100 credits.
            </p>
          </div>
        </div>
      </section>

      {/* Step-by-Step Guide */}
      <section className="py-16 bg-[#f8f9fa]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#605a87] mb-16">
            STEP-BY-STEP GUIDE TO PLAY FANTASY CRICKET
          </h2>

          <div className="max-w-6xl mx-auto">
            {/* Step 1 */}
            <div className="flex flex-col lg:flex-row items-center gap-12 mb-20 relative">
              <div className="lg:w-1/2 flex justify-center relative">
                <div className="w-64 h-96 relative">
                  <Image
                    src="/assets/howtoplay/phone1.png?height=400&width=250"
                    alt="Select Match Mobile Screen"
                    width={250}
                    height={400}
                    className="rounded-3xl shadow-lg"
                  />
                </div>
                {/* Connecting line */}
                <div className="hidden lg:block absolute -right-6 top-1/2 w-12 h-0.5 bg-gray-300"></div>
              </div>
              <div className="lg:w-1/2 text-center lg:text-left">
                <div className="text-8xl font-bold text-[#e0e0e0] mb-4">1</div>
                <h3 className="text-2xl font-bold text-[#000000] mb-4">Select A Match</h3>
                <p className="text-[#5c5c5c] text-lg">
                  To participate in a match, simply click on the match want to make your teams in.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12 mb-20 relative">
              <div className="lg:w-1/2 flex justify-center relative">
                <div className="w-64 h-96 relative">
                  <Image
                    src="/assets/howtoplay/phone2.png?height=400&width=250"
                    alt="Select Contest Mobile Screen"
                    width={250}
                    height={400}
                    className="rounded-3xl shadow-lg"
                  />
                </div>
                {/* Connecting line */}
                <div className="hidden lg:block absolute -left-6 top-1/2 w-12 h-0.5 bg-gray-300"></div>
              </div>
              <div className="lg:w-1/2 text-center lg:text-right">
                <div className="text-8xl font-bold text-[#e0e0e0] mb-4">2</div>
                <h3 className="text-2xl font-bold text-[#000000] mb-4">Select A Contest</h3>
                <p className="text-[#5c5c5c] text-lg">
                  Once you enter a match, you can select from the 'Contests' available on the application.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col lg:flex-row items-center gap-12 mb-20 relative">
              <div className="lg:w-1/2 flex justify-center relative">
                <div className="w-64 h-96 relative">
                  <Image
                    src="/assets/howtoplay/phone3.png?height=400&width=250"
                    alt="Select Playing XI Mobile Screen"
                    width={250}
                    height={400}
                    className="rounded-3xl shadow-lg"
                  />
                </div>
                {/* Connecting line */}
                <div className="hidden lg:block absolute -right-6 top-1/2 w-12 h-0.5 bg-gray-300"></div>
              </div>
              <div className="lg:w-1/2 text-center lg:text-left">
                <div className="text-8xl font-bold text-[#e0e0e0] mb-4">3</div>
                <h3 className="text-2xl font-bold text-[#000000] mb-4">
                  Select Your Playing XI & create 'multiple' teams
                </h3>
                <p className="text-[#5c5c5c] text-lg">
                  After selecting the contest, create your own fantasy team by selecting XI players of different
                  'categories'. Each player that you select, has 'credits' attached to him/her. Users can create a
                  maximum of 35 fantasy teams.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12 mb-20 relative">
              <div className="lg:w-1/2 flex justify-center relative">
                <div className="w-64 h-96 relative">
                  <Image
                    src="/assets/howtoplay/phone4.png?height=400&width=250"
                    alt="Select Captain Mobile Screen"
                    width={250}
                    height={400}
                    className="rounded-3xl shadow-lg"
                  />
                </div>
                {/* Connecting line */}
                <div className="hidden lg:block absolute -left-6 top-1/2 w-12 h-0.5 bg-gray-300"></div>
              </div>
              <div className="lg:w-1/2 text-center lg:text-right">
                <div className="text-8xl font-bold text-[#e0e0e0] mb-4">4</div>
                <h3 className="text-2xl font-bold text-[#000000] mb-4">Select Your Captain and Vice-Captain</h3>
                <p className="text-[#5c5c5c] text-lg">
                  The chosen captain will get 2x points during the match and the vice-captain will get x1.5 points
                </p>
              </div>
            </div>

            {/* Step 6 */}
            <div className="flex flex-col lg:flex-row items-center gap-12 relative">
              <div className="lg:w-1/2 flex justify-center relative">
                <div className="w-64 h-96 relative">
                  <Image
                    src="/assets/howtoplay/phone5.png?height=400&width=250"
                    alt="Join League Mobile Screen"
                    width={250}
                    height={400}
                    className="rounded-3xl shadow-lg"
                  />
                </div>
              </div>
              <div className="lg:w-1/2 text-center lg:text-left">
                <div className="text-8xl font-bold text-[#e0e0e0] mb-4">5</div>
                <h3 className="text-2xl font-bold text-[#000000] mb-4">Join The League</h3>
                <p className="text-[#5c5c5c] text-lg">
                  As you are ready with your fantasy teams now, join the contest in your selected league and begin your
                  winning journey with CRICGEM.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

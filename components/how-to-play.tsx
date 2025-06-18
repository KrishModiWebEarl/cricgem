import Image from "next/image"

export default function Component() {
  return (
    <div className="min-h-screen mt-[80px] text-justify">
      <section
        className="relative h-[400px] bg-cover bg-center bg-no-repeat flex items-center justify-center text-white"
        style={{
          backgroundImage: "url(/Assets/howtoplay/cricket.png)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
        <div className="relative z-10 text-center px-2">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">HOW TO PLAY FANTASY CRICKET?</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">YOUR GO-TO FANTASY APP TO START YOUR WINNING JOURNEY!</p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-2 sm:px-4">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-2xl font-bold text-[#605a87] mb-6 text-[30px]">Introduction</h2>
          <div className="space-y-4 text-[#5c5c5c] leading-relaxed text-[20px]">
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
      <section className="py-16 relative">
        <div className="container mx-auto px-2 sm:px-4">
          <h2 className="text-3xl font-bold text-center text-[#605a87] mb-16 font-Poppins drop-shadow-lg text-[40px]">
            STEP-BY-STEP GUIDE TO PLAY FANTASY CRICKET
          </h2>

          <div className="max-w-7xl mx-auto relative">
            {/* Step 1 */}
            <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6 lg:gap-12 xl:gap-16 mb-8 sm:mb-12 lg:mb-20 xl:mb-24">
              <div className="lg:w-1/2 flex justify-center lg:justify-end">
                <div className="relative">
                  <Image
                    src="/Assets/howtoplay/Group 91.png"
                    alt="Select Match Mobile Screen"
                    width={350}
                    height={550}
                    className="object-contain w-full max-w-[320px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-[450px] xl:max-w-[480px] h-auto"
                  />
                </div>
              </div>
              <div className="lg:w-1/2 text-center lg:text-left lg:pl-4">
                <div className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#e0e0e0] mb-4">1</div>
                <h3 className="text-xl lg:text-2xl font-bold text-[#000000] mb-4 text-[30px]">Select A Match</h3>
                <p className="text-[#5c5c5c] text-base lg:text-lg max-w-lg text-[20px]">
                  To participate in a match, simply click on the match want to make your teams in.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-4 sm:gap-6 lg:gap-12 xl:gap-16 mb-8 sm:mb-12 lg:mb-20 xl:mb-24">
              <div className="lg:w-1/2 flex justify-center lg:justify-start">
                <div className="relative">
                  <Image
                    src="/Assets/howtoplay/Group 92.png"
                    alt="Select Contest Mobile Screen"
                    width={350}
                    height={550}
                    className="object-contain w-full max-w-[320px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-[450px] xl:max-w-[480px] h-auto"
                  />
                </div>
              </div>
              <div className="lg:w-1/2 text-center lg:text-right lg:pr-4">
                <div className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#e0e0e0] mb-4">2</div>
                <h3 className="text-xl lg:text-2xl font-bold text-[#000000] mb-4 text-[30px]">Select A Contest</h3>
                <p className="text-[#5c5c5c] text-base lg:text-lg max-w-lg lg:ml-auto text-[20px]">
                  Once you enter a match, you can select from the 'Contests' available on the application.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6 lg:gap-12 xl:gap-16 mb-8 sm:mb-12 lg:mb-20 xl:mb-24">
              <div className="lg:w-1/2 flex justify-center lg:justify-end">
                <div className="relative">
                  <Image
                    src="/Assets/howtoplay/Group 93.png"
                    alt="Select Playing XI Mobile Screen"
                    width={350}
                    height={550}
                    className="object-contain w-full max-w-[320px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-[450px] xl:max-w-[480px] h-auto"
                  />
                </div>
              </div>
              <div className="lg:w-1/2 text-center lg:text-left lg:pl-4">
                <div className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#e0e0e0] mb-4">3</div>
                <h3 className="text-xl lg:text-2xl font-bold text-[#000000] mb-4 text-[30px]">
                  Select Your Playing XI & create 'multiple' teams
                </h3>
                <p className="text-[#5c5c5c] text-base lg:text-lg max-w-lg text-[20px]">
                  After selecting the contest, create your own fantasy team by selecting XI players of different
                  'categories'. Each player that you select, has 'credits' attached to him/her. Users can create a
                  maximum of 35 fantasy teams.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-4 sm:gap-6 lg:gap-12 xl:gap-16 mb-8 sm:mb-12 lg:mb-20 xl:mb-24">
              <div className="lg:w-1/2 flex justify-center lg:justify-start">
                <div className="relative">
                  <Image
                    src="/Assets/howtoplay/Group 94.png"
                    alt="Select Captain Mobile Screen"
                    width={350}
                    height={550}
                    className="object-contain w-full max-w-[320px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-[450px] xl:max-w-[480px] h-auto"
                  />
                </div>
              </div>
              <div className="lg:w-1/2 text-center lg:text-right lg:pr-4">
                <div className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#e0e0e0] mb-4">4</div>
                <h3 className="text-xl lg:text-2xl font-bold text-[#000000] mb-4 text-[30px]">
                  Select Your Captain and Vice-Captain
                </h3>
                <p className="text-[#5c5c5c] text-base lg:text-lg max-w-lg lg:ml-auto text-[20px]">
                  The chosen captain will get 2x points during the match and the vice-captain will get x1.5 points
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6 lg:gap-12 xl:gap-16">
              <div className="lg:w-1/2 flex justify-center lg:justify-end">
                <div className="relative">
                  <Image
                    src="/Assets/howtoplay/Group 97.png"
                    alt="Join League Mobile Screen"
                    width={350}
                    height={550}
                    className="object-contain w-full max-w-[320px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-[450px] xl:max-w-[480px] h-auto"
                  />
                </div>
              </div>
              <div className="lg:w-1/2 text-center lg:text-left lg:pl-4">
                <div className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#e0e0e0] mb-4">5</div>
                <h3 className="text-xl lg:text-2xl font-bold text-[#000000] mb-4 text-[30px]">Join The League</h3>
                <p className="text-[#5c5c5c] text-base lg:text-lg max-w-lg text-[20px]">
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
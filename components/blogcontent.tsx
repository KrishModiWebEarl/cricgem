import Image from "next/image"
import Link from "next/link"
import { Youtube, Instagram, Facebook, Play } from "lucide-react"

interface BlogContentProps {
  slug: string;
}

export default function BlogContent({ slug }: BlogContentProps) {
  return (
    <div className="min-h-screen bg-white mt-[80px]">
      {/* Header */}
      <header className="bg-[#2D1B69] text-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
              <div className="w-6 h-6 bg-[#2D1B69] rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              </div>
            </div>
            <span className="text-xl font-bold">CRICGEM</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="#" className="hover:text-yellow-400 transition-colors">
              How to Play
            </Link>
            <Link href="#" className="hover:text-yellow-400 transition-colors">
              Point System
            </Link>
            <Link href="#" className="hover:text-yellow-400 transition-colors">
              About Us
            </Link>
            <Link href="#" className="hover:text-yellow-400 transition-colors">
              Blog
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 leading-tight">
          5 Reasons Why Fantasy Cricket Is More Popular than Other Fantasy Sports in India
        </h1>

        {/* Hero Image */}
        <div className="mb-8">
          <Image
            src="/Assets/ind-vs-pak-hero.png"
            alt="India vs Pakistan cricket match illustration"
            width={800}
            height={400}
            className="w-full rounded-lg"
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 mb-6 leading-relaxed">
            Fantasy sports have gained immense popularity in recent years, providing sports enthusiasts with an engaging
            and interactive way to enjoy their favourite games. In India, where cricket is a religion and sports hold a
            special place in people's hearts, fantasy cricket has emerged as the undisputed champion of fantasy sports.
            Let's delve into the reasons why fantasy cricket has gained such tremendous popularity in India, surpassing
            other fantasy sports. Let's look at some points that throw more light on the alacrity & gusto of cricket's
            reception in India.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-4">1) Cricket: The Nation's Obsession</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Cricket is not merely a sport in India; it is an obsession that cuts across all social and economic
            boundaries. The popularity of cricket in India is unmatched, making it the perfect breeding ground for
            fantasy cricket. With a rich cricketing history and a fervent fan base, Indians have an intimate
            understanding of the game and its players. Fantasy cricket capitalises on this passion, allowing fans to
            showcase their knowledge and skills by selecting their dream team from a pool of real-life players. The
            emotional connection Indians have with cricket acts as a driving force behind the overwhelming popularity of
            fantasy cricket.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-4">2) Extensive Coverage and Accessible Statistics</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Cricket enjoys extensive media coverage in India, with matches being televised, analysed, and discussed
            across various platforms. This widespread coverage provides fantasy cricket players with a wealth of
            information, statistics, and analysis that helps them make informed decisions while selecting their fantasy
            teams. Cricket statistics are readily available, making it easier for fans to evaluate player performance,
            past records, and current form. This accessibility to information enhances the overall experience of playing
            fantasy cricket and boosts its popularity among Indian fans.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-4">3) Thrilling Tournaments and Events</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            India's love affair with cricket reaches its peak during major tournaments like the Indian Premier League
            (IPL), the International Cricket Council (ICC) World Cup, and bilateral series against rival nations. These
            events capture the nation's attention for weeks, offering an incredible platform for fantasy cricket
            enthusiasts. Fantasy cricket allows fans to actively engage with the tournaments, as they can create their
            teams, compete with friends, and track their players' performances throughout the matches. The combination
            of these thrilling tournaments and the interactive nature of fantasy cricket amplifies the excitement and
            contributes to its popularity.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-4">4) Real-Time Engagement and Immersive Experience</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            One of the most captivating aspects of fantasy cricket is the real-time engagement it offers to users. As
            the matches unfold, participants can witness their selected players' performances and track their virtual
            team's progress. The sense of anticipation, excitement, and the adrenaline rush associated with each ball
            and run scored is unparalleled. Fantasy cricket platforms provide live score updates, player statistics, and
            interactive features that further enhance the immersive experience. This real-time engagement keeps users
            hooked to their screens and intensifies the thrill of the game.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-4">5) Social Interaction and Community Building</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Fantasy cricket has emerged as a powerful tool for social interaction and community building among sports
            enthusiasts. These platforms allow users to create private leagues and compete against friends, family,
            colleagues, and even strangers. The friendly banter, rivalry, and discussions surrounding team selections
            add an element of camaraderie and entertainment to the overall experience. Fantasy cricket has become a
            shared activity that brings people together, fostering a sense of belonging and strengthening social
            connections. This social aspect of fantasy cricket & fantasy cricket apps sets it apart from other fantasy
            sports and contributes to its widespread popularity in India.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Fantasy cricket has struck a chord with Indian sports enthusiasts, becoming the preferred choice among
            various fantasy sports options. The sport's immense popularity, the availability of diverse tournaments,
            easy accessibility, real-time engagement, and social interaction opportunities have propelled fantasy
            cricket to the forefront of the fantasy sports landscape. As the fantasy sports industry continues to grow,
            it is evident that cricket will remain the undisputed leader in India, captivating the hearts and minds of
            millions of fans across the country.
          </p>
        </div>
      </main>
    </div>
  )
}

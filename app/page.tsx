'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaEnvelope, FaTelegramPlane, FaPhoneAlt } from 'react-icons/fa';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

import {
  ChevronLeft,
  ChevronRight,
  Plus,
  Play,
  Minus
} from 'lucide-react';

export default function CricGemLanding() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const supportOptions = [
    { icon: FaEnvelope, title: "Mail Support", bg: "bg-[#423d6d]" },
    { icon: FaTelegramPlane, title: "Telegram Support", bg: "bg-[#423d6d]" },
    { icon: FaPhoneAlt, title: "Call Support", bg: "bg-[#423d6d]" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-br from-[#1b1253] via-[#140b40] to-[#1d1459] overflow-hidden">
        <div className="relative z-10 flex items-center justify-center h-full px-6">
          <div className="text-center text-white max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-16 bg-[#fef0b7] rounded-lg flex items-center justify-center mr-4">
                <div className="w-10 h-10 bg-[#1b1253] rounded"></div>
              </div>
              <h1 className="text-6xl font-bold text-[#fef0b7]">CRICGEM</h1>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Real Cricket</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-12">Fantasy Platform</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[#000000] hover:bg-[#140000] text-white px-8 py-3 rounded-lg flex items-center">
                <Play className="w-5 h-5 mr-2" />
                Get it on Google Play
              </Button>
              <Button className="bg-[#000000] hover:bg-[#140000] text-white px-8 py-3 rounded-lg">
                Download on App Store
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-[#605a87] mb-16">
            Steps to Download & Install the CricGem!
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((step) => (
              <div key={step} className="text-center">
                <div className="relative mb-6">
                  <div className="w-8 h-8 bg-[#1b1253] text-white rounded-full flex items-center justify-center text-lg font-bold absolute -top-4 left-4 z-10">
                    {step}
                  </div>
                  <div className="bg-[#605a87] rounded-lg p-6 pt-8">
                    <div className="bg-white rounded-lg p-4 h-48 flex items-center justify-center">
                      <div className="w-32 h-40 bg-[#f1f1f1] rounded-lg"></div>
                    </div>
                  </div>
                </div>
                <p className="text-[#605a87] font-medium">Visit cricgem.com and click on "Download Android App"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Preview Section */}
      <section className="py-20 bg-gradient-to-br from-[#1b1253] via-[#140b40] to-[#1d1459] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-[#fef0b7] rounded-lg transform rotate-45"></div>
          <div className="absolute bottom-10 right-10 w-20 h-20 bg-[#fef0b7] rounded-lg transform rotate-45"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-bold text-center text-white mb-16">APP PREVIEW</h2>
          <div className="flex items-center justify-center space-x-8">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <div className="flex space-x-6">
              {[1, 2, 3, 4].map((phone) => (
                <div key={phone} className="w-48 h-96 bg-black rounded-3xl p-2 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                    <div className="h-full bg-[#f1f1f1] flex items-center justify-center">
                      <div className="text-[#8f8bab] text-sm">App Screen {phone}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Easy to Play Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-[#605a87] mb-16">EASY TO PLAY</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: 1, title: "Select A Match", subtitle: "Indian Premier League" },
              { step: 2, title: "Create Your Team", subtitle: "Create Team" },
              { step: 3, title: "Join Contests", subtitle: "₹50 Crores" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="relative mb-6">
                  <div className="w-8 h-8 bg-[#1b1253] text-white rounded-full flex items-center justify-center text-lg font-bold absolute -top-4 left-4 z-10">
                    {item.step}
                  </div>
                  <Card className="pt-8">
                    <CardContent className="p-6">
                      <div className="h-48 bg-[#f1f1f1] rounded-lg mb-4 flex items-center justify-center">
                        <div className="text-[#8f8bab] text-sm">{item.title}</div>
                      </div>
                      <h3 className="font-bold text-[#1b1253] mb-2">{item.title}</h3>
                      <p className="text-[#8f8bab] text-sm">
                        Lorem ipsum dolor sit amet consectetur. Elementum rhoncus lorem ut.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: 'url(/Assets/homepage/contactus.jpg)' }}></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#1b1253]/80 via-[#140b40]/80 to-[#1d1459]/80 z-0"></div>
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Support System</h2>
            <p className="text-white/80 mb-12 max-w-2xl mx-auto">
              "As we prioritize our customers, we've ensured multi-channel support is readily available for you"
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {supportOptions.map((support, index) => (
                <Card key={index} className={`${support.bg} border-0 text-white transition-all duration-300 hover:bg-white hover:text-[#1b1253]`}>
                  <CardContent className="p-8 text-center">
                    <support.icon className="w-12 h-12 mx-auto mb-4 transition-colors duration-300" />
                    <h3 className="font-bold">{support.title}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-[#605a87] mb-16">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                question: "How to deposit the amount?",
                answer: "You can deposit money into your CricGem account using various payment methods..."
              },
              {
                question: "How to withdraw the winning amount?",
                answer: "You can withdraw your winnings by going to the 'Withdraw' section in your account..."
              },
              {
                question: "Is refund for the cancelled match get at what time?",
                answer: "In case of a cancelled match, all entry fees will be refunded..."
              },
              {
                question: "What is Real contest?",
                answer: "Real contests are paid contests where you can win real cash prizes..."
              },
              {
                question: "When the KYC is approved?",
                answer: "KYC verification typically takes 24-72 hours..."
              }
            ].map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <Card key={index} className="border border-[#d9d9d9] overflow-hidden">
                  <CardContent className="p-0">
                    <div
                      className="p-6 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors"
                      onClick={() => toggleOpen(index)}
                    >
                      <span className="text-[#605a87] font-medium">{faq.question}</span>
                      <div className={`transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`}>
                        {isOpen ? (
                          <Minus className="w-5 h-5 text-[#605a87]" />
                        ) : (
                          <Plus className="w-5 h-5 text-[#605a87]" />
                        )}
                      </div>
                    </div>
                    {isOpen && (
                      <div className="px-6 pb-6 pt-0 text-gray-600">
                        {faq.answer}
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

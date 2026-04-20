"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  X,
  Star,
  MapPin,
  Briefcase,
  GraduationCap,
  TrendingUp,
  Bot,
  Coins,
  Zap,
  MessageCircle,
  Info,
  ChevronLeft,
  ChevronRight,
  Share2,
  Shield,
  Flame,
  Target,
  Wallet,
} from "lucide-react";

const photos = [
  {
    url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop",
    caption: "Professional headshot (I'm also a stand-up comedian)",
  },
  {
    url: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=1000&fit=crop",
    caption: "Me finding a 6,500x gem at 3am",
  },
  {
    url: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=1000&fit=crop",
    caption: "Coding bots with Claude while you sleep",
  },
  {
    url: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=1000&fit=crop",
    caption: "From $5 student to prediction market pro",
  },
];

const interests = [
  { icon: <Coins className="w-4 h-4" />, label: "Meme Coins" },
  { icon: <Bot className="w-4 h-4" />, label: "AI Trading" },
  { icon: <TrendingUp className="w-4 h-4" />, label: "Polymarket" },
  { icon: <Zap className="w-4 h-4" />, label: "On-Chain Analysis" },
  { icon: <Target className="w-4 h-4" />, label: "Airdrop Farming" },
  { icon: <Wallet className="w-4 h-4" />, label: "Wallet Tracking" },
];

const antoineFacts = [
  "🎭 Stand-up comedian (this profile is for entertainment only)",
  "📈 Turned $100 → $80K while others got rekt",
  "🤖 Built StalkFun V2 - found a 6,500x with AI",
  "🎯 Prediction market 'almost insider'",
  "💻 Vibe codes trading bots with Claude",
  "🔍 Reads bubble maps like horoscopes",
  "📊 62.9K YouTube subscribers",
  "🎙️ 60 podcast episodes with crypto OGs",
];

export default function TinderProfile() {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [showMatch, setShowMatch] = useState(false);
  const [direction, setDirection] = useState(0);

  const nextPhoto = () => {
    setDirection(1);
    setCurrentPhoto((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setDirection(-1);
    setCurrentPhoto((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const handleLike = () => {
    setShowMatch(true);
    setTimeout(() => setShowMatch(false), 3000);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-500 via-pink-500 to-orange-400 flex items-center justify-center p-4 font-sans">
      {/* Phone Frame */}
      <div className="relative w-full max-w-md bg-white rounded-[40px] shadow-2xl overflow-hidden border-8 border-gray-900">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-gray-900 rounded-b-2xl z-50" />

        {/* Status Bar */}
        <div className="h-12 bg-white flex items-center justify-between px-6 pt-2">
          <span className="text-sm font-semibold">9:41</span>
          <div className="flex gap-1">
            <div className="w-4 h-4 bg-gray-900 rounded-sm" />
            <div className="w-4 h-4 bg-gray-900 rounded-sm" />
            <div className="w-4 h-4 bg-gray-900 rounded-sm" />
          </div>
        </div>

        {/* App Header */}
        <div className="flex items-center justify-between px-4 py-2 border-b">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Shield className="w-6 h-6 text-gray-700" />
          </button>
          <div className="flex items-center gap-1">
            <Flame className="w-8 h-8 text-rose-500 fill-rose-500" />
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <MessageCircle className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Profile Card */}
        <div className="relative">
          {/* Photo Carousel */}
          <div className="relative h-[500px] overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentPhoto}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="absolute inset-0"
              >
                <img
                  src={photos[currentPhoto].url}
                  alt={photos[currentPhoto].caption}
                  className="w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                {/* Photo Caption */}
                <div className="absolute bottom-24 left-4 right-4">
                  <p className="text-white/90 text-sm font-medium drop-shadow-lg">
                    {photos[currentPhoto].caption}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Photo Indicators */}
            <div className="absolute top-4 left-4 right-4 flex gap-1">
              {photos.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-1 flex-1 rounded-full transition-all ${
                    idx === currentPhoto ? "bg-white" : "bg-white/40"
                  }`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevPhoto}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/30 hover:bg-black/50 rounded-full text-white transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextPhoto}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/30 hover:bg-black/50 rounded-full text-white transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Verified Badge */}
            <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
              <Star className="w-3 h-3 fill-white" />
              VERIFIED
            </div>
          </div>

          {/* Profile Info */}
          <div className="px-4 pb-4 -mt-16 relative z-10">
            <div className="flex items-end justify-between">
              <div>
                <h1 className="text-3xl font-bold text-white drop-shadow-lg">
                  Antoine
                </h1>
                <p className="text-white/90 text-lg drop-shadow-md">
                  Handsome Finance
                </p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                <span className="text-white font-bold text-xl drop-shadow-md">
                  28
                </span>
              </div>
            </div>

            {/* Distance & Status */}
            <div className="flex items-center gap-4 mt-2 text-white/80 text-sm">
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                On-chain (Global)
              </span>
              <span className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Recently active
              </span>
            </div>

            {/* Bio */}
            <div className="mt-4 bg-white rounded-2xl p-4 shadow-sm">
              <p className="text-gray-700 text-sm leading-relaxed">
                The only crypto bro channel your girlfriend likes to watch. 
                Onchain market observer. Wallets, behavior, incentives. 
                I explore new opportunities for you (and maybe for us? 😉)
              </p>
            </div>

            {/* Work & Education */}
            <div className="mt-3 space-y-2">
              <div className="flex items-center gap-3 text-gray-700">
                <Briefcase className="w-5 h-5 text-gray-400" />
                <span className="text-sm">
                  Stand-up Comedian & Crypto Trader at{" "}
                  <span className="font-semibold">Handsome Finance</span>
                </span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <GraduationCap className="w-5 h-5 text-gray-400" />
                <span className="text-sm">
                  Graduated from Broke Student With $5 University
                </span>
              </div>
            </div>

            {/* Interests */}
            <div className="mt-4">
              <h3 className="text-sm font-semibold text-gray-900 mb-2">
                Passions
              </h3>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <span
                    key={interest.label}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-rose-100 to-pink-100 text-rose-700 rounded-full text-xs font-medium"
                  >
                    {interest.icon}
                    {interest.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Antoine Facts */}
            <div className="mt-4">
              <h3 className="text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <Info className="w-4 h-4 text-rose-500" />
                About Me
              </h3>
              <div className="space-y-2">
                {antoineFacts.map((fact, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 text-sm text-gray-600"
                  >
                    <span className="text-rose-500 mt-0.5">•</span>
                    <span>{fact}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Looking For */}
            <div className="mt-4 p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border border-amber-100">
              <h3 className="text-sm font-semibold text-amber-800 mb-2">
                Looking for
              </h3>
              <p className="text-sm text-amber-700">
                Someone who won't paperhand our relationship at the first dip. 
                Must love AI, tolerate my Claude addiction, and be okay with me 
                checking bubble maps during dinner.
              </p>
            </div>

            {/* Social Links */}
            <div className="mt-4 flex gap-3">
              <a
                href="https://youtube.com/@HandsomeFinance"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-red-600 text-white py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 hover:bg-red-700 transition-colors"
              >
                <Share2 className="w-4 h-4" />
                YouTube
              </a>
              <a
                href="https://x.com/AntoineRSX"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-gray-900 text-white py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors"
              >
                <Share2 className="w-4 h-4" />
                Twitter/X
              </a>
            </div>

            {/* Join Boardroom CTA */}
            <a
              href="https://investorsboardroom.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block w-full bg-gradient-to-r from-rose-500 to-pink-500 text-white py-4 rounded-xl font-bold text-center hover:from-rose-600 hover:to-pink-600 transition-all shadow-lg shadow-rose-200"
            >
              💎 Join The Investor's Boardroom (FREE)
            </a>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="px-6 py-4 bg-white border-t flex items-center justify-center gap-6">
          <button className="w-16 h-16 rounded-full bg-white shadow-lg border-2 border-gray-100 flex items-center justify-center text-red-500 hover:scale-110 transition-transform hover:bg-red-50">
            <X className="w-8 h-8" strokeWidth={2.5} />
          </button>
          <button className="w-14 h-14 rounded-full bg-white shadow-lg border-2 border-gray-100 flex items-center justify-center text-blue-500 hover:scale-110 transition-transform hover:bg-blue-50">
            <Star className="w-6 h-6" strokeWidth={2.5} />
          </button>
          <button
            onClick={handleLike}
            className="w-16 h-16 rounded-full bg-white shadow-lg border-2 border-gray-100 flex items-center justify-center text-green-500 hover:scale-110 transition-transform hover:bg-green-50"
          >
            <Heart className="w-8 h-8" strokeWidth={2.5} />
          </button>
        </div>

        {/* Home Indicator */}
        <div className="h-1 w-32 bg-gray-300 rounded-full mx-auto mb-2" />
      </div>

      {/* Match Animation */}
      <AnimatePresence>
        {showMatch && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="fixed inset-0 flex items-center justify-center z-50 bg-black/80"
          >
            <div className="bg-white rounded-3xl p-8 max-w-sm mx-4 text-center">
              <div className="text-6xl mb-4">🎉</div>
              <h2 className="text-3xl font-bold text-rose-500 mb-2">
                It's a Match!
              </h2>
              <p className="text-gray-600 mb-6">
                You and Antoine both swiped right! Time to DYOR on each other.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowMatch(false)}
                  className="flex-1 bg-rose-500 text-white py-3 rounded-xl font-semibold hover:bg-rose-600 transition-colors"
                >
                  Send Message
                </button>
              </div>
              <p className="text-xs text-gray-400 mt-4">
                *This is entertainment only. Not financial advice.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer Disclaimer */}
      <div className="fixed bottom-4 left-0 right-0 text-center">
        <p className="text-white/60 text-xs">
          Made with ❤️ for the Handsome Finance community
        </p>
      </div>
    </div>
  );
}

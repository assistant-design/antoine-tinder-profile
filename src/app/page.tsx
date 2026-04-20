"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Flame,
  X,
  Star,
  Heart,
  MapPin,
  Briefcase,
  GraduationCap,
  Verified,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Youtube,
  Twitter,
  Globe,
} from "lucide-react";

const photos = [
  "/photos/antoine-avatar.jpg",
  "/photos/antoine-1.jpg",
  "/photos/antoine-2.jpg",
  "/photos/antoine-3.jpg",
  "/photos/antoine-4.jpg",
];

const passions = [
  "Meme Coins",
  "AI Trading",
  "Prediction Markets",
  "On-Chain Analysis",
  "Stand-Up Comedy",
  "Vibe Coding",
  "Wallet Tracking",
  "StalkFun V2",
];

export default function AntoineTinderProfile() {
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
  };

  const handleNope = () => {
    // Shake animation effect
    const card = document.getElementById("profile-card");
    if (card) {
      card.style.transform = "translateX(-20px) rotate(-5deg)";
      setTimeout(() => {
        card.style.transform = "translateX(0) rotate(0)";
      }, 200);
    }
  };

  useEffect(() => {
    if (showMatch) {
      const timer = setTimeout(() => setShowMatch(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showMatch]);

  const slideVariants = {
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
    <div className="min-h-screen bg-gradient-to-br from-rose-400 via-pink-500 to-red-500 flex items-center justify-center p-4">
      {/* Phone Frame */}
      <div className="relative w-full max-w-md">
        {/* Phone Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-7 bg-black rounded-b-3xl z-50" />

        {/* Phone Screen */}
        <div className="bg-black rounded-[3rem] p-3 shadow-2xl">
          <div className="bg-white rounded-[2.5rem] overflow-hidden min-h-[750px] flex flex-col">
            {/* Tinder Header */}
            <div className="bg-white px-4 py-3 flex items-center justify-center border-b border-gray-100 sticky top-0 z-40">
              <Flame className="w-8 h-8 text-red-500 fill-red-500" />
            </div>

            {/* Profile Card */}
            <div id="profile-card" className="flex-1 flex flex-col transition-transform duration-200">
              {/* Photo Carousel */}
              <div className="relative h-[420px] bg-gray-100 overflow-hidden">
                <AnimatePresence initial={false} custom={direction}>
                  <motion.div
                    key={currentPhoto}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 },
                    }}
                    className="absolute inset-0"
                  >
                    <img
                      src={photos[currentPhoto]}
                      alt={`Antoine photo ${currentPhoto + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Photo Navigation */}
                <div className="absolute top-4 left-4 right-4 flex gap-1">
                  {photos.map((_, idx) => (
                    <div
                      key={idx}
                      className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                        idx === currentPhoto ? "bg-white" : "bg-white/40"
                      }`}
                    />
                  ))}
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevPhoto}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/20 hover:bg-black/40 rounded-full flex items-center justify-center text-white backdrop-blur-sm transition-all"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextPhoto}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/20 hover:bg-black/40 rounded-full flex items-center justify-center text-white backdrop-blur-sm transition-all"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Photo Counter */}
                <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                  {currentPhoto + 1}/{photos.length}
                </div>

                {/* Gradient Overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/70 to-transparent" />

                {/* Name and Info Overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-2">
                    <h1 className="text-3xl font-bold">Antoine</h1>
                    <span className="text-2xl">29</span>
                    <Verified className="w-6 h-6 text-blue-400 fill-blue-400" />
                  </div>
                  <div className="flex items-center gap-2 text-white/90">
                    <MapPin className="w-4 h-4" />
                    <span>On-Chain</span>
                    <span className="mx-1">•</span>
                    <span>5 miles away</span>
                  </div>
                </div>
              </div>

              {/* Profile Info */}
              <div className="p-4 flex-1 overflow-y-auto">
                {/* Bio */}
                <div className="mb-4">
                  <p className="text-gray-800 text-base leading-relaxed">
                    The only crypto bro channel your girlfriend likes to watch 🎭
                  </p>
                  <p className="text-gray-600 text-sm mt-2 italic">
                    "Please remember I'm a stand-up comedian. This profile is for entertainment purposes only."
                  </p>
                </div>

                {/* Job */}
                <div className="flex items-center gap-3 mb-3">
                  <Briefcase className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-800">
                    Stand-up Comedian & Crypto Trader at{" "}
                    <span className="font-semibold">Handsome Finance</span>
                  </span>
                </div>

                {/* Education */}
                <div className="flex items-center gap-3 mb-3">
                  <GraduationCap className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-800">
                    Graduated from "Broke Student With $5" University
                  </span>
                </div>

                {/* Looking For */}
                <div className="bg-gradient-to-r from-rose-100 to-pink-100 rounded-xl p-3 mb-4">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">Looking for:</span> Someone who won't paperhand our relationship at the first dip 💎🙌
                  </p>
                </div>

                {/* Passions */}
                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                    Passions
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {passions.map((passion) => (
                      <span
                        key={passion}
                        className="px-3 py-1.5 bg-gray-100 text-gray-800 rounded-full text-sm font-medium border border-gray-200"
                      >
                        {passion}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Antoine Facts */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 mb-4">
                  <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="text-xl">🎯</span> Antoine Facts
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Turned $100 into $80K while others lost everything</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Built StalkFun V2 - found a 6,500x with this free tool</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Prediction market &quot;almost insider&quot; with insider bot</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Vibe codes with Claude Code like a pro</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">✓</span>
                      <span>62.9K YouTube subscribers watching my every trade</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Can spot a rug pull from 500 blocks away</span>
                    </li>
                  </ul>
                </div>

                {/* Links */}
                <div className="space-y-2 mb-4">
                  <a
                    href="https://youtube.com/@HandsomeFinance"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-red-50 hover:bg-red-100 rounded-xl transition-colors group"
                  >
                    <Youtube className="w-5 h-5 text-red-600" />
                    <span className="flex-1 text-gray-800 font-medium">Handsome Finance on YouTube</span>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
                  </a>
                  <a
                    href="https://x.com/AntoineRSX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors group"
                  >
                    <Twitter className="w-5 h-5 text-gray-800" />
                    <span className="flex-1 text-gray-800 font-medium">@AntoineRSX on X</span>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
                  </a>
                  <a
                    href="https://investorsboardroom.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors group"
                  >
                    <Globe className="w-5 h-5 text-blue-600" />
                    <span className="flex-1 text-gray-800 font-medium">Join The Investor's Boardroom</span>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
                  </a>
                </div>

                {/* Disclaimer */}
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-3">
                  <p className="text-xs text-yellow-800">
                    <span className="font-semibold">Disclaimer:</span> This is a parody profile for entertainment purposes. Not financial advice. DYOR. NFA. WAGMI.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="bg-white px-6 py-4 border-t border-gray-100">
              <div className="flex items-center justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleNope}
                  className="w-16 h-16 rounded-full bg-white shadow-lg border-2 border-red-100 flex items-center justify-center hover:bg-red-50 transition-colors"
                >
                  <X className="w-8 h-8 text-red-500" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-14 h-14 rounded-full bg-white shadow-lg border-2 border-blue-100 flex items-center justify-center hover:bg-blue-50 transition-colors"
                >
                  <Star className="w-7 h-7 text-blue-500 fill-blue-500" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleLike}
                  className="w-16 h-16 rounded-full bg-white shadow-lg border-2 border-green-100 flex items-center justify-center hover:bg-green-50 transition-colors"
                >
                  <Heart className="w-8 h-8 text-green-500 fill-green-500" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* Home Indicator */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full" />
      </div>

      {/* Match Modal */}
      <AnimatePresence>
        {showMatch && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          >
            <div className="bg-gradient-to-br from-rose-400 via-pink-500 to-red-500 rounded-3xl p-8 max-w-sm w-full text-center text-white">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="text-6xl mb-4"
              >
                💎🙌
              </motion.div>
              <h2 className="text-4xl font-bold mb-2">It's a Match!</h2>
              <p className="text-lg mb-6 text-white/90">
                You and Antoine both like accumulating at the bottom
              </p>
              <div className="flex justify-center gap-4 mb-6">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=user"
                  alt="You"
                  className="w-20 h-20 rounded-full border-4 border-white"
                />
                <img
                  src="/photos/antoine-avatar.jpg"
                  alt="Antoine"
                  className="w-20 h-20 rounded-full border-4 border-white"
                />
              </div>
              <button
                onClick={() => setShowMatch(false)}
                className="w-full py-3 bg-white text-red-500 font-bold rounded-full hover:bg-gray-100 transition-colors"
              >
                Start Trading Together
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

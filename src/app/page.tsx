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
  Verified,
  ChevronLeft,
  ChevronRight,
  Flame,
  MessageCircle,
  User
} from "lucide-react";
import Image from "next/image";

const PHOTOS = [
  "https://raw.githubusercontent.com/assistant-design/antoine-tinder-profile/main/photos/antoine-1.jpg",
  "https://raw.githubusercontent.com/assistant-design/antoine-tinder-profile/main/photos/antoine-2.jpg",
  "https://raw.githubusercontent.com/assistant-design/antoine-tinder-profile/main/photos/antoine-3.jpg",
];

const PASSIONS = [
  "Meme Coins",
  "AI Trading", 
  "Polymarket",
  "Wallet Analysis",
  "Claude Code",
  "Stand-up Comedy",
  "DeFi",
  "On-chain Analysis"
];

export default function TinderProfile() {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [showMatch, setShowMatch] = useState(false);
  const [direction, setDirection] = useState(0);

  const nextPhoto = () => {
    setDirection(1);
    setCurrentPhoto((prev) => (prev + 1) % PHOTOS.length);
  };

  const prevPhoto = () => {
    setDirection(-1);
    setCurrentPhoto((prev) => (prev - 1 + PHOTOS.length) % PHOTOS.length);
  };

  const handleLike = () => {
    setShowMatch(true);
  };

  const photoVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
    }),
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      {/* Phone Frame */}
      <div className="w-full max-w-md bg-white rounded-[3rem] shadow-2xl overflow-hidden border-8 border-gray-900 relative">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-gray-900 rounded-b-2xl z-50" />
        
        {/* Status Bar */}
        <div className="bg-white pt-12 pb-2 px-6 flex justify-between items-center">
          <span className="text-sm font-semibold">9:41</span>
          <div className="flex gap-1">
            <div className="w-4 h-4 rounded-full bg-gray-900" />
            <div className="w-4 h-4 rounded-full bg-gray-900" />
            <div className="w-4 h-4 rounded-full bg-gray-900" />
          </div>
        </div>

        {/* Tinder Header */}
        <div className="bg-white px-4 py-3 flex items-center justify-between border-b">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <User className="w-6 h-6 text-gray-600" />
          </button>
          <div className="flex items-center gap-1">
            <Flame className="w-8 h-8 text-red-500 fill-red-500" />
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <MessageCircle className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Main Card */}
        <div className="relative">
          {/* Photo Carousel */}
          <div className="relative h-[28rem] bg-gray-200 overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentPhoto}
                custom={direction}
                variants={photoVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="absolute inset-0"
              >
                <img
                  src={PHOTOS[currentPhoto]}
                  alt={`Antoine photo ${currentPhoto + 1}`}
                  className="w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              </motion.div>
            </AnimatePresence>

            {/* Photo Navigation */}
            <div className="absolute top-4 left-4 right-4 flex gap-1">
              {PHOTOS.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-1 flex-1 rounded-full transition-all ${
                    idx === currentPhoto ? "bg-white" : "bg-white/40"
                  }`}
                />
              ))}
            </div>

            {/* Photo Arrows */}
            <button
              onClick={prevPhoto}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/30 rounded-full text-white opacity-0 hover:opacity-100 transition-opacity"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextPhoto}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/30 rounded-full text-white opacity-0 hover:opacity-100 transition-opacity"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Profile Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
              <div className="flex items-center gap-2 mb-1">
                <h1 className="text-3xl font-bold">Antoine</h1>
                <span className="text-2xl">29</span>
                <Verified className="w-6 h-6 text-blue-400 fill-blue-400" />
              </div>
              
              <div className="flex items-center gap-2 mb-2 text-white/90">
                <Briefcase className="w-4 h-4" />
                <span className="text-sm">Stand-up Comedian & Crypto Trader</span>
              </div>
              
              <div className="flex items-center gap-2 mb-2 text-white/90">
                <GraduationCap className="w-4 h-4" />
                <span className="text-sm">Handsome Finance University</span>
              </div>
              
              <div className="flex items-center gap-2 mb-3 text-white/90">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">1 mile away • Active now</span>
              </div>

              <p className="text-white/90 text-sm mb-3 leading-relaxed">
                The only crypto bro channel your girlfriend likes to watch 📈
                <br /><br />
                I turned $100 into $80K while your boyfriend panic sold. 
                Built StalkFun V2 (found a 6,500x). Vibe coding bots with Claude.
                <br /><br />
                Looking for someone who won&apos;t paperhand our relationship at the first dip 💎🙌
              </p>

              <div className="flex flex-wrap gap-2">
                {PASSIONS.map((passion) => (
                  <span
                    key={passion}
                    className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium"
                  >
                    {passion}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Antoine Facts */}
          <div className="p-5 bg-white">
            <h3 className="font-bold text-lg mb-3 text-gray-800">About Antoine</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎭</span>
                <div>
                  <p className="font-medium text-gray-800">Disclaimer: I&apos;m a Stand-up Comedian</p>
                  <p className="text-sm text-gray-500">This profile is for entertainment purposes only (but the gains are real)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">📊</span>
                <div>
                  <p className="font-medium text-gray-800">$100 → $80K Journey</p>
                  <p className="text-sm text-gray-500">Documented the entire process on YouTube. 62.9K subscribers can&apos;t be wrong!</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🤖</span>
                <div>
                  <p className="font-medium text-gray-800">AI-Powered Trading</p>
                  <p className="text-sm text-gray-500">Built StalkFun V2 and Clawbot using Claude Code. I vibe code while you FOMO.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎯</span>
                <div>
                  <p className="font-medium text-gray-800">Prediction Market Pro</p>
                  <p className="text-sm text-gray-500">Tested 40+ tools. Built an insider bot. Almost an insider (legally, of course).</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-5 pt-5 border-t">
              <h4 className="font-medium text-gray-700 mb-3">Connect with me</h4>
              <div className="flex gap-3">
                <a 
                  href="https://youtube.com/@HandsomeFinance" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-red-600 text-white py-2 px-4 rounded-lg text-center text-sm font-medium hover:bg-red-700 transition-colors"
                >
                  YouTube
                </a>
                <a 
                  href="https://x.com/AntoineRSX" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gray-900 text-white py-2 px-4 rounded-lg text-center text-sm font-medium hover:bg-gray-800 transition-colors"
                >
                  X / Twitter
                </a>
                <a 
                  href="https://investorsboardroom.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg text-center text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                  Boardroom
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="bg-white p-5 pb-8">
          <div className="flex items-center justify-center gap-6">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-16 h-16 rounded-full bg-white shadow-lg border-2 border-gray-200 flex items-center justify-center text-red-500 hover:bg-gray-50 transition-colors"
            >
              <X className="w-8 h-8" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-14 h-14 rounded-full bg-white shadow-lg border-2 border-gray-200 flex items-center justify-center text-blue-400 hover:bg-gray-50 transition-colors"
            >
              <Star className="w-7 h-7 fill-blue-400" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleLike}
              className="w-16 h-16 rounded-full bg-white shadow-lg border-2 border-gray-200 flex items-center justify-center text-green-500 hover:bg-gray-50 transition-colors"
            >
              <Heart className="w-8 h-8 fill-green-500" />
            </motion.button>
          </div>
        </div>

        {/* Home Indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-gray-900 rounded-full" />
      </div>

      {/* Match Modal */}
      <AnimatePresence>
        {showMatch && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50"
            onClick={() => setShowMatch(false)}
          >
            <motion.div
              initial={{ scale: 0.5, y: 100 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.5, y: 100 }}
              className="bg-white rounded-3xl p-8 max-w-sm w-full text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
                It&apos;s a Match!
              </h2>
              <p className="text-gray-600 mb-6">
                You and Antoine both swiped right! 
                <br />
                Time to discuss meme coins 📈
              </p>
              
              <div className="flex justify-center gap-4 mb-6">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <div className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white text-2xl font-bold">
                    You
                  </div>
                </div>
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img 
                    src={PHOTOS[0]} 
                    alt="Antoine" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <button 
                onClick={() => setShowMatch(false)}
                className="w-full bg-gradient-to-r from-red-500 to-pink-500 text-white py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
              >
                Send a Message
              </button>
              <button 
                onClick={() => setShowMatch(false)}
                className="w-full mt-3 text-gray-500 py-2 hover:text-gray-700 transition-colors"
              >
                Keep Swiping
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

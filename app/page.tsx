"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { Heart, Stars, Cake, Gift } from "lucide-react";

export default function BirthdayPage() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Initial celebration blast
    const end = Date.now() + 3 * 1000;
    const colors = ["#ec4899", "#8b5cf6", "#3b82f6"];

    (function frame() {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  }, []);

  const handleSurprise = () => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
    });
    setIsOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#fafaf9] flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background Icons */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -1000],
              x: Math.sin(i) * 100,
              rotate: 360,
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: i * 2,
            }}
            className="absolute bottom-0"
            style={{ left: `${i * 10}%` }}
          >
            <Heart size={40} fill="currentColor" className="text-pink-400" />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="z-10 w-full max-w-lg"
      >
        <div className="bg-white/70 backdrop-blur-xl border border-white/50 p-8 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] text-center">
          
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block p-4 bg-pink-50 rounded-full mb-6"
          >
            <Cake className="text-pink-500" size={40} />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 tracking-tight"
          >
            Happy Birthday, <span className="text-pink-500">Bestie!</span> ✨
          </motion.h1>

          <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
              To the person who makes every day better just by being in it.
            </motion.p>
            
            <AnimatePresence mode="wait">
              {!isOpen ? (
                <motion.button
                  key="button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSurprise}
                  className="mt-6 px-8 py-4 bg-gray-900 text-white rounded-full font-medium flex items-center gap-2 mx-auto hover:bg-gray-800 transition-colors"
                >
                  <Gift size={20} />
                  Open your message
                </motion.button>
              ) : (
                <motion.div
                  key="message"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-6 p-6 bg-pink-50/50 rounded-2xl border border-pink-100 italic"
                >
                  "You’re not just my best friend; you’re my family. Thank you for the endless laughs, 
                  the shared secrets, and for always being 'you'. Here's to making this year your best one yet!"
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

      <footer className="mt-8 text-gray-400 font-medium flex items-center gap-2">
        Made with <Heart size={16} className="text-red-400 fill-red-400" /> just for you
      </footer>
    </main>
  );
}

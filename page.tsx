"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

export default function BirthdayPage() {
  // Trigger confetti on load
  useEffect(() => {
    const duration = 3 * 1000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#ff0000", "#ff7300", "#fffb00", "#48ff00", "#00ffd5", "#002bff", "#7a00ff", "#ff00c8", "#ff0000"]
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#ff0000", "#ff7300", "#fffb00", "#48ff00", "#00ffd5", "#002bff", "#7a00ff", "#ff00c8", "#ff0000"]
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-rose-100 via-white to-sky-100 flex flex-col items-center justify-center p-6 overflow-hidden">
      
      {/* Floating Decorative Elements */}
      <motion.div 
        animate={{ y: [0, -20, 0] }} 
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-10 left-10 text-6xl opacity-20"
      >
        🎈
      </motion.div>

      {/* Main Card */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-md w-full bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-white text-center"
      >
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent mb-4"
        >
          Happy Birthday! 🎂
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="space-y-4 text-gray-700 leading-relaxed text-lg"
        >
          <p>To my best friend,</p>
          <p className="italic font-medium">
            "The person who knows all my secrets and still chooses to be seen with me in public."
          </p>
          <p>
            Thank you for being the person I can always turn to. Here’s to more chaotic adventures, 
            late-night talks, and endless laughter. You deserve the world today!
          </p>
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => confetti()}
          className="mt-8 px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-400 text-white rounded-full font-semibold shadow-lg"
        >
          Click for a Surprise! ✨
        </motion.button>
      </motion.div>

      <footer className="mt-12 text-gray-400 text-sm">
        Made with ❤️ for the best person I know
      </footer>
    </main>
  );
}

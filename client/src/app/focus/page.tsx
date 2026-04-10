"use client";

import React, { useState, useEffect } from "react";
import { Play, Pause, RotateCcw, Coffee, Zap, Moon } from "lucide-react";
import Card from "@/components/ui/Card";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export default function FocusPage() {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [mode, setMode] = useState("work"); // work, short-break, long-break

  useEffect(() => {
    let interval: any = null;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((time) => time - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
      // Play sound or notification here
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const toggleTimer = () => setIsActive(!isActive);
  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(mode === "work" ? 25 * 60 : 5 * 60);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="max-w-4xl mx-auto space-y-12 py-12">
      <div className="text-center space-y-4">
        <h1 className="font-display text-5xl font-bold tracking-tight">Deep Work</h1>
        <p className="text-white/40">Silence the world. Build the future.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Statistics Column */}
        <div className="space-y-6 order-2 md:order-1">
          <Card className="p-6">
            <h4 className="text-xs uppercase tracking-widest font-bold text-white/30 mb-4">Today's Focus</h4>
            <div className="text-3xl font-display font-bold">4.2h</div>
            <p className="text-xs text-accent mt-1">+20% vs yesterday</p>
          </Card>
          <Card className="p-6">
            <h4 className="text-xs uppercase tracking-widest font-bold text-white/30 mb-4">Sessions Done</h4>
            <div className="text-3xl font-display font-bold">8</div>
            <p className="text-xs text-white/40 mt-1">Goal: 10 sessions</p>
          </Card>
        </div>

        {/* Main Timer Column */}
        <div className="order-1 md:order-2 flex flex-col items-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
            {/* Progress Circle */}
            <svg className="absolute inset-0 w-full h-full -rotate-90">
              <circle
                cx="50%"
                cy="50%"
                r="48%"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                className="text-white/5"
              />
              <motion.circle
                cx="50%"
                cy="50%"
                r="48%"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeDasharray="1000"
                initial={{ strokeDashoffset: 1000 }}
                animate={{ strokeDashoffset: 1000 - (1000 * (timeLeft / (25 * 60))) }}
                className="text-accent shadow-[0_0_20px_rgba(34,197,94,0.3)]"
              />
            </svg>
            
            <div className="flex flex-col items-center">
              <span className="text-7xl md:text-8xl font-display font-medium tracking-tighter">
                {formatTime(timeLeft)}
              </span>
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-accent mt-2">
                {mode === 'work' ? 'Stay Focused' : 'Take a Breath'}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-6 mt-12">
            <button 
              onClick={resetTimer}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white transition-colors"
            >
              <RotateCcw className="w-5 h-5" />
            </button>
            <button 
              onClick={toggleTimer}
              className="w-20 h-20 rounded-full bg-accent flex items-center justify-center text-black hover:scale-110 active:scale-95 transition-all shadow-[0_0_40px_rgba(34,197,94,0.4)]"
            >
              {isActive ? <Pause className="w-8 h-8 fill-black" /> : <Play className="w-8 h-8 fill-black ml-1" />}
            </button>
            <button 
               className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white transition-colors"
            >
              <Coffee className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Settings Column */}
        <div className="space-y-6 order-3">
          <Card className="p-6">
            <h4 className="text-xs uppercase tracking-widest font-bold text-white/30 mb-6">Environment</h4>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-xl bg-accent/10 border border-accent/20 cursor-pointer">
                <div className="flex items-center gap-3">
                  <Zap className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium">Binaural Beats</span>
                </div>
                <div className="w-2 h-2 rounded-full bg-accent" />
              </div>
              <div className="flex items-center justify-between p-3 rounded-xl border border-white/5 hover:bg-white/5 cursor-pointer">
                <div className="flex items-center gap-3">
                  <Moon className="w-4 h-4 text-white/40" />
                  <span className="text-sm font-medium">Dark Noise</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <Card className="p-8 border-accent/20 bg-accent/5">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center text-accent">
            <Zap className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-bold">AI Focus Assistant</h4>
            <p className="text-sm text-white/50">Your peak performance window is usually between 9 AM and 11 AM. Ready for another cycle?</p>
          </div>
        </div>
      </Card>
    </div>
  );
}

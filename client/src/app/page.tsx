"use client";

import Card from "@/components/ui/Card";
import { 
  Zap, 
  CheckCircle2, 
  Target, 
  Timer, 
  Layout, 
  ArrowUpRight 
} from "lucide-react";
import { motion } from "framer-motion";

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Header section */}
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-4xl font-bold tracking-tight">Main Dashboard</h1>
          <p className="text-white/50 mt-1">Welcome back, Soldier. Here's your status report.</p>
        </div>
        <div className="flex items-center gap-4 bg-surface-light/50 border border-white/5 px-4 py-2 rounded-full backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium">System Online</span>
          </div>
          <div className="h-4 w-[1px] bg-white/10" />
          <span className="text-sm text-white/50">{new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}</span>
        </div>
      </header>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Discipline Score Widget */}
        <Card className="col-span-1 md:col-span-2 lg:col-span-2 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Zap className="text-accent w-5 h-5" /> Discipline Score
            </h3>
            <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full">+12% from yesterday</span>
          </div>
          <div className="flex items-center gap-8">
            <div className="relative w-32 h-32 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90">
                <circle
                  cx="64"
                  cy="64"
                  r="58"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="8"
                  className="text-white/5"
                />
                <motion.circle
                  cx="64"
                  cy="64"
                  r="58"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="8"
                  strokeDasharray="364"
                  initial={{ strokeDashoffset: 364 }}
                  animate={{ strokeDashoffset: 364 - (364 * 85) / 100 }}
                  className="text-accent"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-display font-bold">85</span>
                <span className="text-[10px] text-white/40 uppercase tracking-widest">Elite</span>
              </div>
            </div>
            <div className="flex-1 space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-white/50">Tasks</span>
                <span className="font-medium">9/12</span>
              </div>
              <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-accent w-[75%]" />
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-white/50">Habits</span>
                <span className="font-medium">4/5</span>
              </div>
              <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-accent w-[80%]" />
              </div>
            </div>
          </div>
        </Card>

        {/* Focus Widget */}
        <Card className="col-span-1 border-accent/20">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-semibold flex items-center gap-2">
              <Timer className="text-accent w-5 h-5" /> In Focus
            </h3>
            <ArrowUpRight className="w-4 h-4 text-white/30" />
          </div>
          <div className="text-center py-4">
            <div className="text-4xl font-display font-medium mb-2 tracking-tighter">24:58</div>
            <p className="text-white/40 text-xs">Deep Work: Build NovaOS UI</p>
          </div>
          <button className="w-full mt-4 btn-primary text-sm py-2">Start Session</button>
        </Card>

        {/* Active Goal */}
        <Card className="col-span-1">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-semibold flex items-center gap-2">
              <Target className="text-accent w-5 h-5" /> Current Goal
            </h3>
          </div>
          <div className="space-y-4">
            <p className="text-sm font-medium leading-relaxed">Master Advanced React Patterns & Framer Motion</p>
            <div className="flex items-center justify-between text-[10px] text-white/40 uppercase tracking-widest font-bold">
              <span>Progress</span>
              <span>65%</span>
            </div>
            <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-accent w-[65%]" />
            </div>
          </div>
        </Card>

        {/* Recent Tasks */}
        <Card className="col-span-1 md:col-span-2 lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-semibold flex items-center gap-2">
              <CheckCircle2 className="text-accent w-5 h-5" /> Priority Tasks
            </h3>
            <button className="text-xs text-accent hover:underline">View all</button>
          </div>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors group">
                <div className="w-5 h-5 rounded-full border border-accent/30 flex items-center justify-center group-hover:bg-accent/10 transition-colors cursor-pointer" />
                <span className="text-sm text-white/80">Implement MongoDB schemas for Health tracking</span>
                <span className="ml-auto text-xs bg-white/5 px-2 py-1 rounded text-white/40">Today</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Habit tracker */}
        <Card className="col-span-1 md:col-span-2 lg:col-span-2">
           <div className="flex items-center justify-between mb-6">
            <h3 className="font-semibold flex items-center gap-2">
              <Layout className="text-accent w-5 h-5" /> Habit Streaks
            </h3>
          </div>
          <div className="grid grid-cols-5 gap-2">
            {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div className={cn(
                  "w-full aspect-square rounded-lg flex items-center justify-center border",
                  i < 4 ? "bg-accent/20 border-accent/50 text-accent" : "bg-white/5 border-white/10 text-white/20"
                )}>
                  {i < 4 && <CheckCircle2 className="w-4 h-4" />}
                </div>
                <span className="text-[10px] text-white/30 font-bold">{day}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

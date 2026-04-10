"use client";

import React from "react";
import { 
  Heart, 
  Droplets, 
  Bed, 
  Dumbbell, 
  Plus, 
  Activity, 
  TrendingUp, 
  Smile 
} from "lucide-react";
import Card from "@/components/ui/Card";
import { cn } from "@/lib/utils";

const healthMetrics = [
  { icon: Droplets, label: "Water Intake", value: "2.4", unit: "Liters", color: "text-blue-500", bg: "bg-blue-500/10" },
  { icon: Bed, label: "Sleep Duration", value: "7.5", unit: "Hours", color: "text-purple-500", bg: "bg-purple-500/10" },
  { icon: Dumbbell, label: "Exercise", value: "45", unit: "Minutes", color: "text-orange-500", bg: "bg-orange-500/10" },
  { icon: Smile, label: "Mood Score", value: "8/10", unit: "Great", color: "text-pink-500", bg: "bg-pink-500/10" },
];

export default function HealthPage() {
  return (
    <div className="space-y-8">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-4xl font-bold tracking-tight">Health Metrics</h1>
          <p className="text-white/40 mt-1">Optimize your body, fuel your mind.</p>
        </div>
        <button className="btn-primary flex items-center gap-2">
          <Plus className="w-5 h-5" /> Log Metric
        </button>
      </header>

      {/* Grid of Main Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {healthMetrics.map((metric, i) => (
          <Card key={i} className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center", metric.bg, metric.color)}>
                <metric.icon className="w-5 h-5" />
              </div>
              <TrendingUp className="w-4 h-4 text-white/20" />
            </div>
            <p className="text-xs text-white/40 font-bold uppercase tracking-widest">{metric.label}</p>
            <div className="flex items-baseline gap-2 mt-1">
              <p className="text-3xl font-display font-bold">{metric.value}</p>
              <span className="text-xs text-white/40">{metric.unit}</span>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Daily Activity Chart */}
        <Card className="lg:col-span-2 p-8 overflow-hidden relative">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-bold text-lg flex items-center gap-2">
              <Activity className="w-5 h-5 text-accent" /> Energy Levels
            </h3>
            <span className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold">Past 7 Days</span>
          </div>
          
          <div className="h-64 flex items-end justify-between gap-1">
            {Array.from({ length: 24 }).map((_, i) => (
               <div 
                key={i} 
                className="flex-1 bg-accent/20 hover:bg-accent/40 transition-all rounded-sm" 
                style={{ height: `${Math.random() * 100}%` }}
              />
            ))}
          </div>
          
          <div className="mt-4 flex justify-between text-[10px] text-white/20 font-bold uppercase tracking-widest px-2">
            <span>Morning</span>
            <span>Noon</span>
            <span>Evening</span>
            <span>Night</span>
          </div>
        </Card>

        {/* Integration / Quick Log */}
        <div className="space-y-6">
           <Card className="p-6 border-accent/20 bg-accent/5">
            <h3 className="font-bold mb-4 flex items-center gap-2">
              <Heart className="w-5 h-5 text-accent" /> AI Health Coach
            </h3>
            <p className="text-sm text-white/60 leading-relaxed">
              "Your sleep quality dropped by 15% last night. Try reducing screen time 1 hour before bed to maintain your Focus Score."
            </p>
            <button className="mt-6 w-full py-2 bg-white/5 border border-white/10 rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-all">
              See Analysis
            </button>
          </Card>

          <Card className="p-6">
            <h3 className="font-bold mb-6">Device Sync</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/40">
                    <Activity className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium">Apple Health</span>
                </div>
                <div className="w-2 h-2 rounded-full bg-accent" />
              </div>
              <div className="flex items-center justify-between p-3 rounded-xl border border-white/5 opacity-50">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/20">
                    <Activity className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium text-white/40">Fitbit</span>
                </div>
                <button className="text-[10px] bg-white/5 px-2 py-1 rounded font-bold uppercase tracking-widest">Connect</button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

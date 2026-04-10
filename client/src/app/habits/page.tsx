"use client";

import React from "react";
import { Plus, Flame, Award, Calendar, CheckCircle2 } from "lucide-react";
import Card from "@/components/ui/Card";
import { cn } from "@/lib/utils";

const habits = [
  { id: 1, title: "Morning Exercise", streak: 12, bestStreak: 45, difficulty: "medium" },
  { id: 2, title: "Read 20 Pages", streak: 5, bestStreak: 12, difficulty: "easy" },
  { id: 3, title: "No Sugary Drinks", streak: 28, bestStreak: 28, difficulty: "hard" },
  { id: 4, title: "Meditate 10 Mins", streak: 3, bestStreak: 30, difficulty: "easy" },
];

export default function HabitsPage() {
  return (
    <div className="space-y-8">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-4xl font-bold tracking-tight">Daily Habits</h1>
          <p className="text-white/40 mt-1">Consistency is the bridge between goals and accomplishment.</p>
        </div>
        <button className="btn-primary flex items-center gap-2">
          <Plus className="w-5 h-5" /> Install Habit
        </button>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Active Habits List */}
        <div className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {habits.map((habit) => (
              <Card key={habit.id} className="p-6 group hover:border-accent/40 transition-all">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                    <Flame className="w-6 h-6" />
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-display font-bold text-accent">{habit.streak}</span>
                    <p className="text-[10px] text-white/30 uppercase tracking-widest font-bold">Day Streak</p>
                  </div>
                </div>
                
                <h3 className="font-bold text-lg mb-2">{habit.title}</h3>
                <div className="flex items-center gap-4 mb-6">
                   <div className="flex items-center gap-1 text-xs text-white/40">
                    <Award className="w-3 h-3" />
                    <span>Best: {habit.bestStreak}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-white/40">
                    <Calendar className="w-3 h-3" />
                    <span>Daily</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 bg-accent/20 hover:bg-accent text-accent hover:text-black font-bold py-2 rounded-lg text-sm transition-all border border-accent/20">
                    Complete
                  </button>
                  <button className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-white/40 hover:text-white transition-all">
                    ...
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Sidebar Analytics */}
        <div className="space-y-6">
          <Card className="p-6 bg-accent/5 border-accent/20">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Flame className="w-5 h-5 text-accent" /> Discipline Status
            </h3>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-sm text-white/60">Success Rate</span>
                <span className="font-bold">92%</span>
              </div>
              <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-accent w-[92%]" />
              </div>
              
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                <div>
                  <p className="text-[10px] text-white/30 uppercase font-bold mb-1">Total Streak</p>
                  <p className="text-xl font-display font-bold">142</p>
                </div>
                <div>
                  <p className="text-[10px] text-white/30 uppercase font-bold mb-1">Rank</p>
                  <p className="text-xl font-display font-bold text-accent">VETERAN</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="font-bold text-lg mb-6">Weekly View</h3>
            <div className="space-y-4">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => (
                <div key={day} className="flex items-center justify-between">
                  <span className="text-xs text-white/40 font-medium">{day}</span>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4].map(j => (
                      <div key={j} className={cn(
                        "w-4 h-4 rounded-sm",
                        i < 4 ? "bg-accent/40" : "bg-white/5"
                      )} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

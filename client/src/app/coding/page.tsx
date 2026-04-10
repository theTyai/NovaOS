"use client";

import React from "react";
import { Code, GitBranch, Github, ExternalLink, Calendar, GitCommit } from "lucide-react";
import Card from "@/components/ui/Card";
import { cn } from "@/lib/utils";

const codingActivity = [
  { day: "Mon", commits: 5, hours: 4 },
  { day: "Tue", commits: 12, hours: 6 },
  { day: "Wed", commits: 2, hours: 1 },
  { day: "Thu", commits: 8, hours: 5 },
  { day: "Fri", commits: 15, hours: 8 },
  { day: "Sat", commits: 20, hours: 10 },
  { day: "Sun", commits: 4, hours: 2 },
];

export default function CodingPage() {
  return (
    <div className="space-y-8">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-4xl font-bold tracking-tight">Coding Metrics</h1>
          <p className="text-white/40 mt-1">Automatic activity tracking for your development lifecycle.</p>
        </div>
        <div className="flex gap-2">
           <button className="bg-white/5 hover:bg-white/10 text-white/80 border border-white/10 px-4 py-2 rounded-xl text-sm font-medium flex items-center gap-2">
            <Github className="w-4 h-4" /> Link Account
          </button>
          <button className="btn-primary flex items-center gap-2">
            <Calendar className="w-4 h-4" /> History
          </button>
        </div>
      </header>

      {/* Hero Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { icon: GitCommit, label: "Total Commits", value: "66", trend: "+12%" },
          { icon: Code, label: "Coding Hours", value: "36.2", trend: "+5h" },
          { icon: GitBranch, label: "Active Repos", value: "12", trend: "0" },
          { icon: Github, label: "Contributions", value: "245", trend: "+88%" },
        ].map((stat, i) => (
          <Card key={i} className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                <stat.icon className="w-5 h-5" />
              </div>
              <span className="text-[10px] bg-accent/10 text-accent px-2 py-0.5 rounded font-bold uppercase">{stat.trend}</span>
            </div>
            <p className="text-xs text-white/40 font-bold uppercase tracking-widest">{stat.label}</p>
            <p className="text-3xl font-display font-bold mt-1">{stat.value}</p>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Activity Chart */}
        <Card className="lg:col-span-2 p-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-bold text-lg">Weekly Activity</h3>
            <div className="flex gap-4">
              <div className="flex items-center gap-2 text-xs text-white/40">
                <div className="w-2 h-2 rounded-full bg-accent" /> Commits
              </div>
              <div className="flex items-center gap-2 text-xs text-white/40">
                <div className="w-2 h-2 rounded-full bg-white/10" /> Hours
              </div>
            </div>
          </div>
          <div className="h-64 flex items-end justify-between gap-4">
            {codingActivity.map((data) => (
              <div key={data.day} className="flex-1 flex flex-col items-center gap-4 group">
                <div className="w-full flex flex-col items-center gap-1">
                   <div 
                    className="w-full bg-accent/20 rounded-t-lg transition-all group-hover:bg-accent/40" 
                    style={{ height: `${data.commits * 8}px` }} 
                  />
                  <div 
                    className="w-full bg-accent rounded-b-lg shadow-[0_0_15px_rgba(34,197,94,0.3)] transition-all group-hover:scale-y-110" 
                    style={{ height: `${data.hours * 10}px` }} 
                  />
                </div>
                <span className="text-xs font-bold text-white/20 uppercase tracking-widest">{data.day}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Recent Repos */}
        <div className="space-y-6">
           <Card className="p-6">
            <h3 className="font-bold mb-6">Recent Work</h3>
            <div className="space-y-4">
              {['NovaOS', 'AI-Syllabus-Core', 'Health-Tracker-PWA', 'Git-Log-Extension'].map((repo, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/40 group-hover:text-accent group-hover:bg-accent/10 transition-colors">
                      <Code className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-medium">{repo}</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-white/10 group-hover:text-white" />
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 border-accent/20 bg-accent/5">
            <h3 className="font-bold mb-4">Coding Journal</h3>
            <div className="space-y-4 text-sm text-white/60">
               <div className="flex gap-3">
                 <div className="w-[2px] bg-accent/30 self-stretch rounded-full" />
                 <p>Implemented MongoDB models for Tracking Module. (2h ago)</p>
               </div>
               <div className="flex gap-3">
                 <div className="w-[2px] bg-accent/30 self-stretch rounded-full" />
                 <p>Initial setup of Next.js frontend with Tailwind. (5h ago)</p>
               </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

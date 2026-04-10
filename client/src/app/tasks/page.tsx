"use client";

import React, { useState } from "react";
import { Plus, Search, Filter, MoreVertical, Clock } from "lucide-react";
import Card from "@/components/ui/Card";
import { cn } from "@/lib/utils";

const statuses = ["pending", "in-progress", "completed"];

export default function TasksPage() {
  const [filter, setFilter] = useState("all");

  return (
    <div className="space-y-8">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-4xl font-bold tracking-tight">Tasks</h1>
          <p className="text-white/40 mt-1">Manage your objectives and daily sprints.</p>
        </div>
        <button className="btn-primary flex items-center gap-2">
          <Plus className="w-5 h-5" /> Add New Task
        </button>
      </header>

      {/* Controls */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
          <input
            type="text"
            className="w-full bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-4 focus:outline-none focus:border-accent/50 transition-colors"
            placeholder="Search tasks..."
          />
        </div>
        <div className="flex gap-2">
          {["All", "High", "Medium", "Low"].map((p) => (
            <button
              key={p}
              className={cn(
                "px-4 py-2 rounded-xl text-sm font-medium border transition-all",
                filter === p.toLowerCase() 
                  ? "bg-accent/10 border-accent/50 text-accent" 
                  : "bg-white/5 border-white/10 text-white/40 hover:text-white"
              )}
              onClick={() => setFilter(p.toLowerCase())}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* Task Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {statuses.map((status) => (
          <div key={status} className="space-y-4">
            <div className="flex items-center justify-between px-2">
              <h3 className="text-sm font-bold uppercase tracking-widest text-white/30 flex items-center gap-2">
                <div className={cn(
                  "w-2 h-2 rounded-full",
                  status === 'completed' ? "bg-accent" : status === 'in-progress' ? "bg-blue-500" : "bg-white/20"
                )} />
                {status.replace('-', ' ')}
              </h3>
              <span className="text-xs bg-white/5 px-2 py-0.5 rounded text-white/40">3</span>
            </div>
            
            <div className="space-y-4">
              {[1, 2].map((i) => (
                <Card key={i} className="p-4 hover:border-white/20 transition-all cursor-pointer group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex gap-2">
                      <span className="text-[10px] bg-accent/10 text-accent px-2 py-0.5 rounded font-bold uppercase tracking-tighter">Web Dev</span>
                      <span className="text-[10px] bg-red-500/10 text-red-500 px-2 py-0.5 rounded font-bold uppercase tracking-tighter">High</span>
                    </div>
                    <MoreVertical className="w-4 h-4 text-white/20 group-hover:text-white" />
                  </div>
                  <h4 className="font-medium text-sm mb-4 leading-relaxed">Implement AI Syllabus extraction service in Express</h4>
                  <div className="flex items-center gap-4 text-xs text-white/30">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>Apr 12</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>2/5 Subtasks</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Internal component mock since I can't import lucide CheckCircle2 in the same file easily without naming conflicts
const CheckCircle2 = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>
);

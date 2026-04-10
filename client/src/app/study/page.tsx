"use client";

import React, { useState } from "react";
import { Plus, BookOpen, Youtube, FileText, ChevronRight, PlayCircle } from "lucide-react";
import Card from "@/components/ui/Card";
import { cn } from "@/lib/utils";

const sampleSyllabus = [
  { title: "Introduction to DSA", isCompleted: true, duration: "2h" },
  { title: "Big O Notation & Complexity", isCompleted: true, duration: "3h" },
  { title: "Arrays & Linked Lists", isCompleted: false, duration: "4h" },
  { title: "Stacks & Queues", isCompleted: false, duration: "3h" },
  { title: "Recursion Deep Dive", isCompleted: false, duration: "5h" },
];

export default function StudyPage() {
  const [view, setView] = useState("list"); // list, add

  return (
    <div className="space-y-8">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-4xl font-bold tracking-tight">Learning Hub</h1>
          <p className="text-white/40 mt-1">AI-generated study paths for your career goals.</p>
        </div>
        <button 
          onClick={() => setView(view === 'list' ? 'add' : 'list')}
          className="btn-primary flex items-center gap-2"
        >
          {view === 'list' ? <><Plus className="w-5 h-5" /> New Study Plan</> : "Back to Hub"}
        </button>
      </header>

      {view === "list" ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Active Courses */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-white/30">Active Tracks</h3>
            <div className="space-y-4">
              {[1, 2].map((i) => (
                <Card key={i} className="p-0 overflow-hidden group">
                  <div className="p-6 flex flex-col md:flex-row md:items-center gap-6">
                    <div className="w-20 h-20 rounded-2xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                      <BookOpen className="w-10 h-10" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] bg-accent/10 text-accent px-2 py-0.5 rounded font-bold uppercase">Computer Science</span>
                        <span className="text-[10px] bg-white/5 text-white/40 px-2 py-0.5 rounded font-bold uppercase">YouTube</span>
                      </div>
                      <h3 className="text-xl font-bold">Data Structures & Algorithms Masterclass</h3>
                      <div className="flex items-center gap-4 text-sm text-white/40">
                        <span>12/45 Lessons</span>
                        <span>•</span>
                        <span>82 hours left</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                       <div className="text-2xl font-display font-bold">28%</div>
                       <div className="w-32 h-1.5 bg-white/5 rounded-full overflow-hidden">
                          <div className="h-full bg-accent w-[28%]" />
                       </div>
                    </div>
                  </div>
                  <div className="bg-white/5 p-4 flex justify-between items-center border-t border-white/5 group-hover:bg-accent/5 transition-colors">
                    <span className="text-sm font-medium text-white/60">Next: Arrays & Linked Lists</span>
                    <button className="text-accent text-sm font-bold flex items-center gap-1">
                      Continue <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Detailed Syllabus View / Sidebar */}
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="font-bold mb-6">Current Progress</h3>
              <div className="space-y-4">
                {sampleSyllabus.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className={cn(
                      "mt-1 w-5 h-5 rounded-full border flex items-center justify-center shrink-0",
                      item.isCompleted ? "bg-accent/20 border-accent/50 text-accent" : "border-white/10 text-white/10"
                    )}>
                      {item.isCompleted && <div className="w-2 h-2 rounded-full bg-accent" />}
                    </div>
                    <div className="flex-1">
                      <p className={cn("text-sm font-medium", item.isCompleted ? "text-white/80" : "text-white/30")}>
                        {item.title}
                      </p>
                      <span className="text-[10px] text-white/20 uppercase font-bold">{item.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      ) : (
        <div className="max-w-2xl mx-auto py-12">
          <Card className="p-8 space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold">Create New Study Plan</h2>
              <p className="text-white/40">Feed the AI a link or syllabus to generate your path.</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-accent/10 border border-accent/20 text-accent">
                <Youtube className="w-8 h-8" />
                <span className="text-sm font-bold">YouTube Playlist</span>
              </button>
              <button className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/5 border border-white/10 text-white/40 hover:text-white hover:bg-white/10 transition-all">
                <FileText className="w-8 h-8" />
                <span className="text-sm font-bold">Plain Text Syllabus</span>
              </button>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/60">Module Name</label>
                <input
                  type="text"
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 focus:outline-none focus:border-accent/50"
                  placeholder="e.g. Advanced Machine Learning"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/60">Source URL / Syllabus Text</label>
                <textarea
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 h-32 focus:outline-none focus:border-accent/50"
                  placeholder="Paste URL or syllabus here..."
                />
              </div>
              <button className="w-full btn-primary py-4 flex items-center justify-center gap-2">
                <PlayCircle className="w-5 h-5" /> Generate Plan with AI
              </button>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}

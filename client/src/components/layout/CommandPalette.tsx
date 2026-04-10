"use client";

import React, { useState, useEffect } from "react";
import { 
  Search, 
  Terminal, 
  Plus, 
  Timer, 
  BookOpen, 
  Sparkles,
  Command as CommandIcon 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const actions = [
  { id: "add-task", label: "Add Task", icon: Plus, shortcut: "T", href: "/tasks" },
  { id: "start-focus", label: "Start Focus Session", icon: Timer, shortcut: "F", href: "/focus" },
  { id: "study-plan", label: "Generate Study Plan", icon: BookOpen, shortcut: "S", href: "/study" },
  { id: "ai-ask", label: "Ask AI Assistant", icon: Sparkles, shortcut: "A", href: "/" },
];

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleAction = (href: string) => {
    router.push(href);
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 w-full max-w-2xl bg-surface border border-white/10 rounded-2xl shadow-2xl z-[101] overflow-hidden"
          >
            <div className="flex items-center px-6 py-4 border-b border-white/10">
              <Search className="w-5 h-5 text-white/30 mr-4" />
              <input
                autoFocus
                type="text"
                placeholder="Type a command or ask AI..."
                className="bg-transparent border-none outline-none text-lg flex-1 text-white placeholder:text-white/20"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-white/5 border border-white/10">
                <CommandIcon className="w-3 h-3 text-white/40" />
                <span className="text-[10px] font-bold text-white/40">K</span>
              </div>
            </div>

            <div className="p-2">
              <div className="px-4 py-2">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/20">Quick Actions</h4>
              </div>
              <div className="space-y-1">
                {actions.map((action) => (
                  <button
                    key={action.id}
                    onClick={() => handleAction(action.href)}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-xl hover:bg-accent/10 hover:text-accent group transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-accent/20 transition-all">
                        <action.icon className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-medium">{action.label}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] font-bold text-white/20 border border-white/10 px-1.5 py-0.5 rounded uppercase">
                        {action.shortcut}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white/5 p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Terminal className="w-3 h-3 text-white/30" />
                <span className="text-[10px] font-bold text-white/20 uppercase tracking-widest">NovaOS Kernel v1.0.4</span>
              </div>
              <div className="flex gap-4 text-[10px] font-bold text-white/20 uppercase">
                 <span>↑↓ Navigate</span>
                 <span>↵ Select</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

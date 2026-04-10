"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  CheckSquare, 
  Repeat, 
  Timer, 
  Activity 
} from "lucide-react";
import { cn } from "@/lib/utils";

const mobileItems = [
  { icon: LayoutDashboard, href: "/" },
  { icon: CheckSquare, href: "/tasks" },
  { icon: Repeat, href: "/habits" },
  { icon: Timer, href: "/focus" },
  { icon: Activity, href: "/health" },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 h-16 border-t border-white/10 bg-black/80 backdrop-blur-lg flex items-center justify-around px-4 z-50">
      {mobileItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex flex-col items-center justify-center w-12 h-12 rounded-xl transition-colors",
              isActive ? "text-accent" : "text-white/60"
            )}
          >
            <item.icon className="w-6 h-6" />
          </Link>
        );
      })}
    </nav>
  );
}

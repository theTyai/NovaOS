import Sidebar from "./Sidebar";
import BottomNav from "./BottomNav";
import CommandPalette from "./CommandPalette";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-black text-white">
      <CommandPalette />
      <Sidebar />
      <main className="lg:pl-64 min-h-screen pb-20 lg:pb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </div>
      </main>
      <BottomNav />
    </div>
  );
}

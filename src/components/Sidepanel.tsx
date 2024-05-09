"use client";
import NavContent from "./NavContent";
import Navbar from "./Navbar";

export default function Sidepanel() {
  return (
    <div>
      {/* PC桌面加载 */}
      <aside className="min-w-60 relative w-full flex-col text-sm hidden bg-zinc-50 p-3 lg:flex lg:flex-col lg:border-r lg:w-60 xl:w-72">
        <NavContent />
      </aside>
      {/* 移动设备加载 */}
      <Navbar />
    </div>
  );
}

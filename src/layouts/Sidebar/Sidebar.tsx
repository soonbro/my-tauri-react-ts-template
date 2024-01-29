import React from "react";
import { cn } from "@/lib/utils";

interface SidebarProbs extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
}

export type SidebarSize = "md" | "lg" | "xl" | "2xl";

const Sidebar = ({ className, children, ...props }: SidebarProbs) => {
  return (
    <aside
      className={cn(
        //"flex flex-col bg-card md:min-w-[80px] lg:min-w-[240px] border-r border-amber-500",
        // top-10 : Titlebar height
        `fixed z-20 h-full top-10 pt-10 pb-[60px] left-0 flex lg:flex flex-shrink-0 flex-col transition-width duration-75`,
        className
      )}
      aria-label="Sidebar"
      {...props}
    >
      <div className="relative flex-1 flex flex-col min-h-0 border-r border-primary bg-card pt-0">
        <div
          className={cn(
            "flex-1 flex flex-col pt-5 pb-4 overflow-y-auto",
            // scrollbar config
            "overflow-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-accent hover:scrollbar-thumb-primary scrollbar-thumb-rounded-lg"
          )}
        >
          <div className="flex-1 px-3 bg-card divide-y space-y-1">
            {children}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

import { cn } from "@/lib/utils";
import { HeaderProps } from "./HeaderLayout";

const HeaderLeft = ({ className, children }: HeaderProps) => {
  return (
    <div
      id="header-left"
      className={cn("bg-card h-full select-none", className)}
    >
      {children}
    </div>
  );
};

export default HeaderLeft;

//import { ModeToggle } from "@/components/mode-toggle";
import HeaderLeft from "./HeaderLeft";
import HeaderMiddle from "./HeaderMiddle";
import HeaderRight from "./HeaderRight";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import ThemeToggle from "@/components/ThemeToggle/ThemeToggle";

export interface HeaderProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * HeaderLayout Component
 * @description App Main Header Layout
 * @param HeaderProps - { className? : string, children?: React.ReactNode }
 * @returns
 */
const HeaderLayout = ({ className, children }: HeaderProps) => {
  return (
    <div
      id="Header"
      className={cn(
        //flex row 가운데 정렬 height-10:2.5rem(40px) 아래테두리
        "flex flex-row items-center h-10 border-b border-primary",
        className
      )}
    >
      <HeaderLeft>Header Left</HeaderLeft>
      <HeaderMiddle>
        Header Middle
        {children}
      </HeaderMiddle>
      <HeaderRight>
        <ThemeToggle></ThemeToggle>
        <Avatar className=" hover:border border-primary">
          <AvatarImage src="https://github.com/soonbro.png" />
          <AvatarFallback>SB</AvatarFallback>
        </Avatar>
        <p className="p-3">Hi, Soonbro!</p>
      </HeaderRight>
    </div>
  );
};

export default HeaderLayout;

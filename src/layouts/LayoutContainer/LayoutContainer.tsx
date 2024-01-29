import { cn } from "@/lib/utils";

export interface LayoutContainerProps {
  className?: string;
  children?: React.ReactNode;
}

const LayoutContainer = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn("fixed flex flex-col h-screen w-screen", className)}
      {...props}
    ></div>
  );
};

export default LayoutContainer;

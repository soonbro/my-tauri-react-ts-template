import { cn } from "@/lib/utils";

export default function SandboxContainer({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex items-center justify-center [&>div]:w-full",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

import { cn } from "@/lib/utils";
import { toast } from "sonner";

import { ResizableDemo } from "./test/ResizableDemo";
import { Button } from "./components/ui/button";
import { Toaster } from "./components/ui/sonner";
const App = () => {
  function DemoContainer({
    className,
    ...props
  }: React.HTMLAttributes<HTMLDivElement>) {
    return (
      <div
        className={cn(
          "flex items-center justify-center [&>div]:w-full",
          className
        )}
        {...props}
      />
    );
  }

  return (
    <div id="app">
      <div className="hidden items-start justify-center gap-6 rounded-lg p-8 md:grid lg:grid-cols-2 xl:grid-cols-3">
        <div className="col-span-2 grid items-start gap-6 lg:col-span-2 lg:grid-cols-2 xl:col-span-1 xl:grid-cols-1">
          <DemoContainer>
            <ResizableDemo></ResizableDemo>
          </DemoContainer>
        </div>
        <Button
          variant="outline"
          onClick={() =>
            toast("Event has been created", {
              description: "Sunday, December 03, 2023 at 9:00 AM",
              action: {
                label: "Undo",
                onClick: () => console.log("Undo"),
              },
            })
          }
        >
          Show Toast
        </Button>
        <Button
          variant="outline"
          onClick={() => toast.success("Event has been created")}
        >
          Show Rich Colors Toast Success
        </Button>
      </div>
      <Toaster richColors />
    </div>
  );
};

export default App;

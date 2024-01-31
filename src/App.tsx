import { ThemeProvider } from "@/components/theme-provider";
import LayoutContainer from "@/layouts/LayoutContainer";
import HeaderLayout from "@/layouts/Header/HeaderLayout";
import FooterLayout from "@/layouts/Footer/FooterLayout";
import ReportTest from "@/pages/reportTest";
import Titlebar from "@/layouts/WindowLayout/Titlebar";
import { Toaster } from "./components/ui/sonner";
import { Button } from "./components/ui/button";
import { toast } from "sonner";
import { TailwindIndicator } from "./components/tailwind-indicator";
import { cn } from "./lib/utils";
import Sidebar from "./layouts/Sidebar";
import SandboxContainer from "./test/SandboxContainer";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";
//import { ResizableDemo } from "./test/ResizableDemo";

const App = () => {
  //sonnerTest function
  const sonnerTest = () =>
    toast("이벤트가 생성되었습니다.", {
      description: "2024 Jan 17, at 9:00 AM",
      action: {
        label: " 확인",
        onClick: () => console.log("toast 확인"),
      },
    });

  return (
    <ThemeProvider defaultTheme="dark" storageKey="soon-theme">
      <div id="app" className="h-screen overflow-clip">
        <LayoutContainer>
          <Titlebar />
          <HeaderLayout />
          <div className={cn("flex row flex-1 overflow-auto")}>
            {
              <div className={cn("flex row flex-1 overflow-auto")}>
                <Sidebar className="md:w-[100px] lg:w-[200px]">
                  <div>Sidebar</div>
                  <div className="select-none">Menu 1</div>
                  <div className="select-none">Menu 2</div>
                  <div className="select-none">Menu 3</div>
                  <div className="select-none">Menu 4</div>
                  <div className="select-none">Menu 5</div>
                  <div className="flex flex-col"></div>
                  <Button variant="outline" onClick={sonnerTest}>
                    Show Toast
                  </Button>
                  <ThemeToggle />
                </Sidebar>
                <div
                  id="contents"
                  className={cn(
                    // scrollbar config
                    "overflow-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-accent hover:scrollbar-thumb-primary scrollbar-thumb-rounded-lg",
                    "md:ml-[100px] lg:ml-[200px] flex flex-1 p-4 items-start justify-center [&>div]:w-full"
                  )}
                >
                  <SandboxContainer>
                    <ReportTest></ReportTest>
                  </SandboxContainer>
                </div>
              </div>
            }
          </div>
          <FooterLayout />
          <TailwindIndicator />
          <Toaster richColors />
        </LayoutContainer>
      </div>
    </ThemeProvider>
  );
};

export default App;

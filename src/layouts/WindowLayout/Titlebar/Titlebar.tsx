import { Button } from "@/components/ui/button"; //"@/components/uis/button";
//import { ModeToggle } from "./ModeToggle";
//import { Icons } from "@/components/icons";
import { appWindow } from "@tauri-apps/api/window";
//import { X } from "lucide-react";
import {
  Cross1Icon,
  MinusIcon,
  RocketIcon,
  SquareIcon,
} from "@radix-ui/react-icons";
import { ModeToggle } from "@/components/mode-toggle";

function Titlebar() {
  const minimizeWindow = () => {
    appWindow?.minimize();
  };

  const maximizeWindow = () => {
    appWindow?.toggleMaximize();
  };

  const closeWindow = () => {
    appWindow?.close();
  };

  return (
    <>
      <div
        role="menubar"
        className="flex items-center h-10 p-1 pl-4 space-x-1 border border-b rounded-none bg-background focus:outline-none"
        tabIndex={0}
        data-orientation="horizontal"
      >
        <div
          data-tauri-drag-region
          className="inline-flex justify-end w-full h-full"
        >
          <p
            data-tauri-drag-region
            className="flex flex-row w-full font-bold text-left align-middle pointer-events-none text-primary"
          >
            <RocketIcon className="w-5 h-5 mr-2 pt-1" />
            Soonbro's App
          </p>
          <div className="pr-3">
            <ModeToggle />
          </div>

          <Button
            onClick={minimizeWindow}
            variant="ghost"
            className="h-8 focus:outline-none"
          >
            <MinusIcon className="w-4 h-4" />
          </Button>
          <Button
            onClick={maximizeWindow}
            variant="ghost"
            className="h-8 focus:outline-none"
          >
            <SquareIcon className="w-4 h-4" />
          </Button>
          <Button
            onClick={closeWindow}
            variant="ghost"
            className="h-8 focus:outline-none focus:bg-destructive hover:bg-destructive"
          >
            <Cross1Icon className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </>
  );
}

export default Titlebar;

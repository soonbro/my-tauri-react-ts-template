//import { LaptopIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";

//import { Button } from "@/components/ui/button";
/*
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
*/
import "./Style.css";
import { Theme, useTheme } from "@/components/theme-provider";

const ThemeToggle = () => {
  const { setTheme } = useTheme();

  return (
    <div className="ThemeToggleWrapper">
      <input
        type="checkbox"
        className="dn sr-only"
        id="dn"
        checked={useTheme().theme === "dark" ? true : false}
        onChange={() => {
          let curTheme = localStorage.getItem("soon-theme") as Theme;
          if (curTheme !== "system")
            curTheme === "dark" ? setTheme("light") : setTheme("dark");
          else {
            const systemTheme = window.matchMedia(
              "(prefers-color-scheme: dark)"
            ).matches
              ? "dark"
              : "light";
            if (systemTheme === "dark") {
              localStorage.setItem("soon-theme", "light");
              setTheme("light");
            } else {
              localStorage.setItem("soon-theme", "dark");
              setTheme("dark");
            }
          }
        }}
      />
      <label htmlFor="dn" className="toggle">
        <span className="toggle__handler">
          <span className="crater crater--1"></span>
          <span className="crater crater--2"></span>
          <span className="crater crater--3"></span>
        </span>
        <span className="star star--1"></span>
        <span className="star star--2"></span>
        <span className="star star--3"></span>
        <span className="star star--4"></span>
        <span className="star star--5"></span>
        <span className="star star--6"></span>
      </label>
      <>
        {/*
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="link" size="icon">
              <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              <SunIcon className="mr-2 h-4 w-4" />
              <span>Light</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              <MoonIcon className="mr-2 h-4 w-4" />
              <span>Dark</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              <LaptopIcon className="mr-2 h-4 w-4" />
              <span>System</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
  */}
      </>
    </div>
  );
};

export default ThemeToggle;

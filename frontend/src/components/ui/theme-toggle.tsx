import { Moon, Sun } from "lucide-react";

import { Button } from "../../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import { useTheme } from "../../context/ThemeContext";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="default"
          size="icon"
          className="border-none bg-transparent cursor-pointer hover:bg-transparent"
        >
          <Sun className="!h-6 !w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-teal-500" />
          <Moon className="absolute !h-6 !w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-teal-500" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className=" dark:bg-slate-950 space-y-2">
        <DropdownMenuItem
          className="cursor-pointer hover:bg-black dark:hover:bg-teal-600"
          onClick={() => setTheme("light")}
        >
          Светла
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className="cursor-pointer hover:bg-teal-600 dark:hover:bg-teal-600"
        >
          Тъмна
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className="cursor-pointer hover:bg-teal-600 dark:hover:bg-teal-600"
        >
          Системна
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

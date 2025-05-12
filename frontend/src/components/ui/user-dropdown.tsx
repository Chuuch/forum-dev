import { TbUserHexagon } from "react-icons/tb";
import { Button } from "./button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "./dropdown-menu";
import { DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons/lib";
import { db } from "../../config/db";
import toast from "react-hot-toast";
// import { LogoutButton } from "./logout-button";

const signOut = async () => {
  const { error } = await db.auth.signOut();
  if (error) {
    toast.error("Oпа! Неуспешно излизане!");
  } else {
    toast.success("Излязохте успешно!");
  }
};

export function UserDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="default"
          className="rounded-full h-10 w-10 bg-transparent outline-none hover:bg-transparent hover:outline-none hover:border-none cursor-pointer"
        >
          <IconContext.Provider
            value={{ className: "text-teal-500 !h-6 !w-6" }}
          >
            <TbUserHexagon />
          </IconContext.Provider>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="flex flex-col items-center dark:bg-slate-950 space-y-2"
        align="end"
      >
        <DropdownMenuItem className="cursor-pointer hover:bg-teal-600 dark:hover:bg-teal-600">
          <Link to="/profile:id">Моят профил</Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer hover:bg-teal-600 dark:hover:bg-teal-600">
          <Link to="/settings">Настройки</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        {/* <DropdownMenuItem> */}
        <Button
          onClick={signOut}
          className="flex mx-auto mb-2 cursor-pointer bg-transparent hover:bg-teal-500 dark:hover:bg-teal-600 dark:bg-transparent text-gray-800 dark:text-white  outline-none border-none hover:border-none ring-0 hover:ring-0"
        >
          Изход
        </Button>
        {/* </DropdownMenuItem> */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import LogoutButton from "@/components/ui/logout-button";
import { CircleUser, UserRoundPen } from "lucide-react";
import { Link } from "react-router-dom";

interface UserProps {
  id: string;
  username: string;
  email: string;
  photo: string;
}

export function UserDropdown({ id, username, email, photo }: UserProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10" size="icon">
          <Avatar className="h-10 w-10 cursor-pointer">
            <AvatarImage
              src={`${import.meta.env.VITE_SERVER_URL}/uploads/${photo}`}
              alt="User Image"
            />
            <AvatarFallback>
              <CircleUser className="h-6! w-6!" />
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-42" align="end" forceMount>
        <DropdownMenuLabel className="flex flex-col space-y-1">
          <p className="text-sm font-medium leading-none">{username}</p>
          <p className="text-xs leading-none text-primary">{email}</p>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex items-center w-full">
          <Link
            className="flex items-center justify-start gap-4 text-base"
            to={`/profile/${id}`}
          >
            Моят профил
            <UserRoundPen className="text-primary h-5! w-5!" />
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center justify-center w-full">
          <LogoutButton />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

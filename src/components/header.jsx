import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button.jsx";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu.jsx";
import { LinkIcon, LogOut } from "lucide-react";

const Header = () => {
  const navigate = useNavigate();
  const user = true;
  return (
    <nav className="flex justify-between items-center py-4">
      <Link className="text-3xl gradient-text" to="/">
        <h1 className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
          ZipLink
        </h1>
      </Link>
      <div className="pt-2">
        {!user ? (
          <Button onClick={() => navigate("/auth")}>Login</Button>
        ) : (
          <DropdownMenu>
            <DropdownMenuTrigger clasName="w-10 rounded-full overflow-hidden">
              <Avatar>
                <AvatarImage src="https://github.com/DevHrithik.png" />
                <AvatarFallback>HR</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Hrithik Roy</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LinkIcon classNAme="mr-2 h-4 w-4" />
                <span>My Links</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="bg-red-400">
                <LogOut classNAme="mr-2 h-4 w-4" />
                <span>Logout</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </nav>
  );
};

export default Header;

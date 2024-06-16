import { Button } from "@/components/ui/button";
import { MENU } from "@/constants/menu";
import { TMenu } from "@/types/menu";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex items-center justify-between p-4 shadow-sm">
      <div className="flex items-center gap-10 ">
        <Image priority src="/logo.svg" alt="logo" width={180} height={80} />

        <ul className="md:flex gap-8 hidden">
          {MENU.map((item: TMenu, index: number) => (
            <Link key={item.id} href={item.path}>
              <li className="hover:text-blue-500 cursor-pointer hover:scale-105 transition-all ease-in-out ">
                {item.label}
              </li>
            </Link>
          ))}
        </ul>
      </div>

      <Button>Get Started</Button>
    </div>
  );
};

export default Header;

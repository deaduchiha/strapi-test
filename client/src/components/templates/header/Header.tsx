import { Button } from "@/components/ui/button";
import { MENU } from "@/constants/menu";
import { TMenu } from "@/types/menu";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex items-center justify-between p-4 shadow-sm">
      <div className="flex items-center gap-10 ">
        <Image src="/logo.svg" alt="logo" width={180} height={80} />
        <ul className="md:flex gap-8 hidden">
          {MENU.map((item: TMenu, index: number) => (
            <li key={item.id}>{item.label}</li>
          ))}
        </ul>
      </div>

      <Button>Get Started</Button>
    </div>
  );
};

export default Header;

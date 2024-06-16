import Header from "@templates/header/Header";
import { ReactNode } from "react";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <div className="md:px-20">
      <Header />
      {children}
    </div>
  );
};

export default Providers;

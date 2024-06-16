import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const CategorySearch = () => {
  return (
    <div className="mb-10 items-center flex flex-col gap-4">
      <h2 className="font-bold text-4xl tracking-wide">Search Doctors</h2>
      <h2 className="text-gray text-xl">Book Appointment with your Doctor</h2>

      <div className="flex w-full max-w-sm mt-3 items-center space-x-2">
        <Input type="email" placeholder="Search..." />
        <Button type="submit">
          <Search className="h-4 w-4 mr-2" />
          Search
        </Button>
      </div>
    </div>
  );
};

export default CategorySearch;

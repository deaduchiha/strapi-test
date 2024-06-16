"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axiosClient from "@/lib/config";
import { useQuery } from "@tanstack/react-query";
import { Search } from "lucide-react";
import Image from "next/image";

const CategorySearch = () => {
  const { data } = useQuery({
    queryKey: ["categories"],
    queryFn: () =>
      axiosClient.get("/categories?populate=*").then((res) => res.data),
  });

  console.log(data?.data);

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

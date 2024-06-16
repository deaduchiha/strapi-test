import CategorySearch from "@templates/category-search/CategorySearch";
import Hero from "@templates/hero/Hero";

export default function Home() {
  return (
    <div>
      {/* Hero section */}
      <Hero />
      {/* Search & Category */}
      <CategorySearch />
    </div>
  );
}

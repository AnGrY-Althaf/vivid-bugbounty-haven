import { Badge } from "@/components/ui/badge";

const FilterTags = () => {
  const popularTags = [
    "BBP",
    "Domain",
    "Internet & Online Services",
    "Mobile",
    "API",
    "Web",
  ];

  return (
    <div className="flex flex-wrap gap-2 my-6">
      <span className="text-sm text-muted-foreground mr-2">Popular now:</span>
      {popularTags.map((tag) => (
        <Badge
          key={tag}
          variant="secondary"
          className="bg-primary/10 hover:bg-primary/20 text-primary cursor-pointer"
        >
          {tag}
        </Badge>
      ))}
    </div>
  );
};

export default FilterTags;
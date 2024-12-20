import SearchHeader from "@/components/SearchHeader";
import FilterTags from "@/components/FilterTags";
import ProgramCard from "@/components/ProgramCard";

const Index = () => {
  const featuredPrograms = [
    {
      name: "Bug Bounty Program",
      company: "MercadoLibre",
      logo: "/placeholder.svg",
      bountyRange: "$10k",
      tags: ["Domain", "AndroidPlayStore", "IosAppStore", "Hardware"],
      metrics: {
        researchers: 216,
        reports: 1000,
        avgBounty: "$2.5k",
        responseRate: "95%"
      }
    },
    {
      name: "Bug Bounty Program",
      company: "Playtika",
      logo: "/placeholder.svg",
      bountyRange: "$5k",
      tags: ["IosAppStore", "AndroidPlayStore", "Domain", "Wildcard"],
      metrics: {
        researchers: 71,
        reports: 180,
        avgBounty: "$1.2k",
        responseRate: "91%"
      }
    },
    {
      name: "Bug Bounty Program",
      company: "Crypto.com",
      logo: "/placeholder.svg",
      bountyRange: "$2M",
      tags: ["Domain", "API", "Wildcard", "SmartContract"],
      type: "Updated",
      metrics: {
        researchers: 136,
        reports: 252,
        avgBounty: "$5k",
        responseRate: "100%"
      }
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SearchHeader />
      
      <main className="max-w-7xl mx-auto px-4 -mt-8">
        <FilterTags />
        
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">
              Campaigns & top-paying opportunities
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {featuredPrograms.map((program, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                <ProgramCard {...program} />
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">
              Collaboration Opportunities
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mt-2 rounded-full" />
            </h2>
            <Button variant="link" className="text-primary">
              See all suggestions
            </Button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {featuredPrograms.slice(0, 3).map((program, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                <ProgramCard {...program} />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
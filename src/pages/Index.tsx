import { Button } from "@/components/ui/button";
import Stats from "@/components/Stats";
import ProgramCard from "@/components/ProgramCard";
import Leaderboard from "@/components/Leaderboard";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const featuredPrograms = [
    {
      name: "Security Bug Bounty",
      company: "TechCorp",
      logo: "/placeholder.svg",
      bountyRange: "$50,000",
      tags: ["Web", "API", "Mobile"],
    },
    {
      name: "Vulnerability Research",
      company: "SecureNet",
      logo: "/placeholder.svg",
      bountyRange: "$25,000",
      tags: ["Network", "Cloud", "IoT"],
    },
    {
      name: "Bug Hunt Program",
      company: "CyberGuard",
      logo: "/placeholder.svg",
      bountyRange: "$40,000",
      tags: ["Web3", "Smart Contracts", "DeFi"],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-5xl font-bold mb-6">
            Secure the Digital World, <span className="gradient-text">Get Rewarded</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Join the elite community of ethical hackers and earn bounties by finding security vulnerabilities.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Start Hunting <ArrowRight className="ml-2" />
          </Button>
        </div>
        <Stats />
      </section>

      {/* Featured Programs */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Featured Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredPrograms.map((program, index) => (
            <ProgramCard key={index} {...program} />
          ))}
        </div>
      </section>

      {/* How it Works & Leaderboard */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 glass-card p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">How It Works</h2>
            <div className="space-y-6">
              {[
                { title: "1. Choose a Program", desc: "Browse through various bug bounty programs and select the ones that match your expertise." },
                { title: "2. Hunt Vulnerabilities", desc: "Use your skills to discover security vulnerabilities in the target systems." },
                { title: "3. Submit Reports", desc: "Document your findings and submit detailed vulnerability reports." },
                { title: "4. Get Rewarded", desc: "Earn bounties for valid vulnerabilities and build your reputation." },
              ].map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{step.title}</h3>
                    <p className="text-muted-foreground">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <Leaderboard />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
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
    <div className="min-h-screen bg-gradient-to-b from-background to-background/50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent blur-3xl" />
        <div className="text-center max-w-3xl mx-auto mb-16 relative animate-fade-in">
          <h1 className="text-6xl font-bold mb-8 leading-tight">
            Secure the Digital World,{" "}
            <span className="gradient-text font-extrabold">Get Rewarded</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
            Join the elite community of ethical hackers and earn bounties by finding security vulnerabilities.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 shadow-lg shadow-primary/25 hover:scale-105 transition-transform">
            Start Hunting <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
        <Stats />
      </section>

      {/* Featured Programs */}
      <section className="container mx-auto px-4 py-20 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary/10 via-transparent to-transparent blur-3xl" />
        <h2 className="text-4xl font-bold mb-4 relative">
          Featured Programs
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mt-2 rounded-full" />
        </h2>
        <p className="text-muted-foreground mb-10 text-lg">
          Discover top bug bounty programs from leading companies
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPrograms.map((program, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
              <ProgramCard {...program} />
            </div>
          ))}
        </div>
      </section>

      {/* How it Works & Leaderboard */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 glass-card p-10 rounded-2xl border border-white/10 shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent" />
            <h2 className="text-3xl font-bold mb-8 relative">
              How It Works
              <div className="h-1 w-16 bg-gradient-to-r from-accent to-primary mt-2 rounded-full" />
            </h2>
            <div className="space-y-8 relative">
              {[
                { title: "1. Choose a Program", desc: "Browse through various bug bounty programs and select the ones that match your expertise." },
                { title: "2. Hunt Vulnerabilities", desc: "Use your skills to discover security vulnerabilities in the target systems." },
                { title: "3. Submit Reports", desc: "Document your findings and submit detailed vulnerability reports." },
                { title: "4. Get Rewarded", desc: "Earn bounties for valid vulnerabilities and build your reputation." },
              ].map((step, index) => (
                <div key={index} className="flex gap-6 animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                  <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center text-primary font-bold text-xl border border-primary/20 shadow-lg shadow-primary/10">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "600ms" }}>
            <Leaderboard />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
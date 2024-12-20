import { Shield, Bug, Trophy } from "lucide-react";

const Stats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
      {[
        { icon: Shield, value: "$50M+", label: "Bounties Paid" },
        { icon: Bug, value: "150K+", label: "Vulnerabilities Found" },
        { icon: Trophy, value: "25K+", label: "Active Hunters" },
      ].map((stat, index) => (
        <div key={index} className="glass-card p-6 rounded-lg text-center">
          <stat.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
          <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
          <p className="text-muted-foreground">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Stats;